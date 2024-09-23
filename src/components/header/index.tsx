import { Link } from "react-router-dom";
import logotipo from "../../assets/logotipo.png";
import icone from "../../assets/icone.png";
import { FiUser, FiLogIn } from "react-icons/fi";
export function Header() {
  const signed = true;
  const loadingAuth = false;
  let changeLogo = false

  return (
    <div className='w-full flex items-center justify-center h-20 bg-white drop-shadow mb-4'>
      <header className='flex w-full items-center justify-between max-w-7xl px-4 mx-auto'>
        <Link to='/'>
          <img className='w-48 hidden sm:block' src={logotipo} />
          <img className='w-14 sm:hidden' src={icone} />
        </Link>
        {!loadingAuth && signed && (
          <Link to='/dashboard'>
            <div className='border-2 rounded-full p-1 border-blue-900'>
              <FiUser size={24} color='#000' />
            </div>
          </Link>
        )}
        {!loadingAuth && !signed && (
          <Link to='/login'>
            <div className='border-2 rounded-full p-1 border-gray-900'>
              <FiLogIn size={24} color='#000' />
            </div>
          </Link>
        )}
      </header>
    </div>
  );
}
