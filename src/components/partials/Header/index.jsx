import * as k from './styles'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { isLogged } from '../../../helpers/AuthHandler'

const Header = () => {
  let logged = isLogged();

    return (
      <k.HeaderArea>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>
              <span className='logo-1'>O</span>
              <span className='logo-2'>L</span>
              <span className='logo-3'>X</span>
            </Link>
          </div>

          <nav>
            <ul>
              {logged && <>
                <li>
                <Link to=''>Minha conta</Link>
              </li>
             
              <li>
                <Link className='button' to=''>Sair</Link>
              </li>
              <li >
                <Link className='button' to='/post-an-add'>Poste um anúncio</Link>
              </li>
              </>
             
              }

              {!logged && 
              <>
                <li>
                <Link to='/singin'>Login</Link>
              </li>
              <li>
                <Link to='/signup'>Cadastrar</Link>
              </li>
              <li >
                <Link className='button' to='/signin'>Poste um anúncio</Link>
              </li>
              </>
              }
           
            </ul>
          </nav>

        </div>
      </k.HeaderArea>
    )
  }
  
  export default Header