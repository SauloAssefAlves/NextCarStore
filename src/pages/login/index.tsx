import { Link } from "react-router-dom";
import logotipo from "../../assets/logotipo.png";
import { Container } from "../../components/container";
import { Input } from "../../components/input";

export function Login() {
  return (
    <Container>
      <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4'>
        <Link to='/' className='mb-6 max-w-sm w-full'>
          <img src={logotipo} alt='logotipo' className='w-full ' />
        </Link>
        <form className='bg-white max-w-xl w-full rounded-lg'>
          <Input type='email' placeholder='Digite seu email...' name='email' />
        </form>
      </div>
    </Container>
  );
}
