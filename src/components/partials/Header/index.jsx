import * as k from './styles'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const Header = () => {

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
              <li>
                <Link to=''>Login</Link>
              </li>
              <li>
                <Link to=''>SignIn</Link>
              </li>
              <li className='button'>
                <Link to=''>Poste um anúncio</Link>
              </li>
            </ul>
          </nav>

        </div>
      </k.HeaderArea>
    )
  }
  
  export default Header