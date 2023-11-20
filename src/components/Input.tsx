interface PasswordInputProps {
  value: string;
  type: 'password' | 'email' | 'text';
  placeholder: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  name: string;
};

export const Input: React.FC<PasswordInputProps> = ({
  name,
  value,
  onChange,
  type,
  placeholder,
  error,
}) => {
  const inputClassName = `block w-full p-4 text-lg rounded-sm bg-black text-white ${
    error !== '' ? 'border-2 border-red-500' : ''
  }`;

  return (
    <div className="pb-2 pt-4">
      <input
        className={inputClassName}
        type={type}
        name={name}
        id="password"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error !== '' && <div className="text-red-500 text-sm mt-2">{error}</div>}
    </div>
  );
};
