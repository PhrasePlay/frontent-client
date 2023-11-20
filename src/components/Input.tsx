type PasswordInputProps = {
  value: string;
  type: 'password' | 'email';
  placeholder: string;
  onChange: (newValue: string) => void;
};

export const Input: React.FC<PasswordInputProps> = ({ value, onChange, type, placeholder }) => {
  return (
    <div className="pb-2 pt-4">
      <input
        className="block w-full p-4 text-lg rounded-sm bg-black text-white"
        type={type}
        name="password"
        id="password"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};