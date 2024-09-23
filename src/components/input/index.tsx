interface InputProps {
  type: string;
  placeholder: string;
  name: string;
}

export function Input({ name, placeholder, type }: InputProps) {
  return (
    <div>
      <input
        className='w-full border-2 rounded-md h11 px-2 outline-none'
        placeholder={placeholder}
        name={name}
        type={type}
      />
    </div>
  );
}
