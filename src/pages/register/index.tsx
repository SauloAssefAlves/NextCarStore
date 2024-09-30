import { Link, useNavigate } from "react-router-dom";
import logotipo from "../../assets/logotipo.png";
import { Container } from "../../components/container";
import { Input } from "../../components/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { auth } from "../../services/firebaseConection";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatório"),
  email: z
    .string()
    .email("Insira um email válido")
    .min(1, "O campo de email obrigatório"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});
type FormData = z.infer<typeof schema>;
export function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  function onSubmit(data: FormData) {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (user) => {
        await updateProfile(user.user, { displayName: data.name });
        console.log("Usuário criado com sucesso!");
        navigate("/dashboard", { replace: true });
      })
      .catch((error) => {
        console.log("Erro ao cadastrar usuário");
        console.log(error);
      });
  }
  return (
    <Container>
      <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4'>
        <Link to='/' className='mb-6 max-w-sm w-full'>
          <img src={logotipo} alt='logotipo' className='w-full ' />
        </Link>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='bg-white max-w-xl w-full rounded-lg p-4'>
          <Input
            type='text'
            placeholder='Digite seu nome completo...'
            name='name'
            error={errors.name?.message}
            register={register}
          />

          <Input
            type='email'
            placeholder='Digite seu email...'
            name='email'
            error={errors.email?.message}
            register={register}
          />

          <Input
            type='password'
            placeholder='Digite sua senha...'
            name='password'
            error={errors.password?.message}
            register={register}
          />

          <button
            type='submit'
            className='bg-zinc-900 w-full rounded-md text-white h-10 font-medium'>
            Cadastrar
          </button>
        </form>
        <Link to='/login'>Já possui uma conta? Faça o login!</Link>
      </div>
    </Container>
  );
}
