import { RegisterOptions, UseFormRegister } from "react-hook-form";
interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  register: UseFormRegister<any>;
  error?: string;
  rules?: RegisterOptions;
}

export function Input({
  name,
  placeholder,
  type,
  register,
  rules,
  error,
}: InputProps) {
  return (
    <div className="mb-3">
      <input
        className='w-full border-2 rounded-md h-11 px-2 outline-cyan-500 -outline-offset-2'
        placeholder={placeholder}
        type={type}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="my-1 text-red-600">{error}</p>}
    </div>
  );
}
