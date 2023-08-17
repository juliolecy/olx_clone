import React, { useEffect, useState } from 'react'
import * as k from './styles'
import OlxAPI from '../../../helpers/OlxAPI'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Olx from '/public/olx'
import { RxExit } from 'react-icons/rx'
import { GoLocation } from 'react-icons/go'
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { doLogout, isLogged } from '../../../helpers/AuthHandler' 
import {BsChevronUp, BsChevronDown} from 'react-icons/bs'
const Header = () => {
  const api = OlxAPI();
  let logged = isLogged();


  const [stateList, setStateList] = useState([])
  const [open,setOpen] = useState(false)

  const handleOpen = () =>{
    setOpen(!open)
    console.log(open)
  }

  const handleLogout = () => {
    doLogout();
    window.location.href = '/';
}

useEffect(() => {
  const getStates = async () => {
      const slist = await api.getStates();
      setStateList(slist)
  }
  getStates()
}, [])

return (
  <>
      <k.Header>
        <a href='/'>

          <Olx />
        </a>

          <div className="search--container">
              <form method='GET' action='/ads'>
                  <input type="text" name='q' placeholder='Buscar: "Apartamento"' />
                  <div className="wall"></div>
                  <GoLocation />
                  <select name="state">
                      <option></option>
                      {stateList.map((item, index) => (
                          <option key={index} value={item.name}>{item.name}</option>
                      ))}
                  </select>
                  <button><AiOutlineSearch /></button>
              </form>
          </div>

    {/* Buttons */}
          {logged &&
              <div className="buttons">
                  <div className="anunciar">
                  <Link to='/post-an-ad'>Anunciar</Link>
                  </div>

                  <Link to=''>
                      <AiOutlineUser/>
                      </Link>
                  <button className='exit' onClick={handleLogout}>
                  <RxExit/>
                  </button>
              </div>
          }

          {!logged &&

              <div className="buttons">

                  <div className="login">
                      <Link to='/signin'>Entrar</Link>
                  </div>

                  <div className="anunciar">
                      <Link to='/signup'>Cadastrar</Link>
                  </div>
              </div>
          }

          {/* Menu scroll */}

{!logged &&

<k.MenuMobile open={open}>
    <div 
    className="chevron"
    onClick={handleOpen}>
        <BsChevronDown />
    </div>
    <ul>
        <li>
        <Link to='/signin'>Entrar</Link>
        </li>
        <li>
        <Link to='/signup'>Cadastrar</Link>
        </li>
    </ul>

</k.MenuMobile>
}
          
      </k.Header>

      </>
    )
}

export default Header;