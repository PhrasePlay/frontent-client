import { useState } from "react"
import { useNavigate } from "react-router-dom";
import * as yup from 'yup';

import { API } from "services/api";
import { setToken, setRefreshToken } from "storage";
import { type AuthResponseData } from "types";
import { useAuthContext } from "contexts/auth";

const initialErrorsState = { password: '', email: '' }

export default () => {
	const navigate = useNavigate();
	const { changeIsAuthenticated } = useAuthContext()

	const [formState, setFormState] = useState<{ password: string; email: string }>({ email: '', password: '' });
	const [errors, setErrors] = useState(initialErrorsState);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log(event)
		setFormState({ ...formState, [event.target.name]: event.target.value });
	};

	const loginSchema = yup.object().shape({
		email: yup
			.string()
			// .email('Digite um endereço de e-mail válido.')
			.required('O campo de e-mail é obrigatório.'),
		password: yup
			.string()
			// .min(8, 'A senha deve ter pelo menos 8 caracteres.')
			.required('O campo de senha é obrigatório.'),
	});

	const redirectToHome = () => {
		changeIsAuthenticated(true)
		navigate('/home')
	}

	const authLogin = async () => {
		try {
			const params = {
				"username": "admin",
				"password": "admin"
			}

			const response = await API.post<AuthResponseData>('token/', params);
			setToken(response.data.access)
			setRefreshToken(response.data.refresh)
			redirectToHome()
		} catch (err) {
			console.error(err);
		}
	}

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			await loginSchema.validate(formState, { abortEarly: false });
			setErrors(initialErrorsState);
			authLogin()
		} catch (err) {
			if (err instanceof yup.ValidationError) {
				const formattedErrors = err.inner.reduce((acc, error) => {
					const key = error.path ?? 'generic';
					if (key === 'password' || key === 'email') {
						return { ...acc, [key]: error.message };
					}
					return acc;
				}, { password: '', email: '' });

				setErrors(formattedErrors);
			} else {
				console.error(err);
			}
		}
	};

	return { handleChange, formState, handleSubmit, errors }
}