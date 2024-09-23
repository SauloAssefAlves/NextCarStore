import { Link, useLocation } from "react-router-dom";
import logotipo from "../../assets/logotipo.png";
import icone from "../../assets/icone.png";
import { FiUser, FiLogIn } from "react-icons/fi";
import { usePath } from "../../hooks/usePath";
export function Header() {
  const signed = false;
  const loadingAuth = false;
  const { isCurrentPage } = usePath();

  return (
    <div className='w-full flex items-center justify-center sm:h-20 h-36 bg-white drop-shadow mb-4'>
      <header className='flex flex-col sm:flex-row w-full items-center justify-between max-w-7xl px-4 mx-auto'>
        <div className='flex w-full sm:w-auto items-center justify-center'>
          {!loadingAuth && !signed && (
            <span className='sm:hidden flex flex-1 items-end justify-end'></span>
          )}
          <Link to='/'>
            <img className='w-56' src={logotipo} />
          </Link>
          {!loadingAuth && !signed && (
            <Link to='/login' className='sm:hidden flex flex-1 items-end justify-end'>
              <div className=' border-2 rounded-full p-1 border-gray-900'>
                <FiLogIn size={24} color='#000' />
              </div>
            </Link>
          )}
        </div>
        <div className='flex-1 flex  h-20 items-center justify-start sm:pl-8 '>
          <Link
            to='/'
            className='flex flex-col h-full items-center justify-end'>
            <span className=' text-lg pt-5 font-medium p-4'>Home</span>
            <div
              className={`w-full h-px ${
                isCurrentPage("/") && "bg-blue-500"
              } text-end`}></div>
          </Link>

          <Link
            to='/estoque'
            className='flex flex-col h-full items-center justify-end'>
            <span className=' text-lg pt-5 font-medium p-4'>Estoque</span>
            <div
              className={`w-full h-px ${
                isCurrentPage("/estoque") && "bg-blue-500"
              } text-end`}></div>
          </Link>
          <Link
            to='/avaliacao'
            className='flex flex-col h-full items-center justify-end'>
            <span className=' text-lg pt-5 font-medium p-4'>Avalição</span>
            <div
              className={`w-full h-px ${
                isCurrentPage("/avaliacao") && "bg-blue-500"
              } text-end`}></div>
          </Link>
          <Link
            to='/contato'
            className='flex flex-col h-full items-center justify-end'>
            <span className=' text-lg pt-5 font-medium p-4'>Contato</span>
            <div
              className={`w-full h-px ${
                isCurrentPage("/contato") && "bg-blue-500"
              } text-end`}></div>
          </Link>
        </div>
        {!loadingAuth && signed && (
          <Link to='/dashboard'>
            <div className='hidden sm:block border-2 rounded-full p-1 border-blue-900'>
              <FiUser size={24} color='#000' />
            </div>
          </Link>
        )}
        {!loadingAuth && !signed && (
          <Link to='/login'>
            <div className='hidden sm:block  border-2 rounded-full p-1 border-gray-900'>
              <FiLogIn size={24} color='#000' />
            </div>
          </Link>
        )}
      </header>
    </div>
  );
}
