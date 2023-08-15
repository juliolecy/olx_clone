import React, { useEffect, useState } from 'react'
import * as k from './styles'
import OlxAPI from '../../../helpers/OlxAPI'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import Olx from '/public/olx'
import { RxExit } from 'react-icons/rx'
import { GoLocation } from 'react-icons/go'
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai'
import { doLogout, isLogged } from '../../../helpers/AuthHandler' 

const Header = () => {
  const api = OlxAPI();
  let logged = isLogged();

  const [stateList, setStateList] = useState([])

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
          <Olx />

          <div className="search--container">
              <form method='GET' action='/ads'>
                  <input type="text" name='q' placeholder='Buscar: "Apartamento"' />
                  <div className="wall"></div>
                  <GoLocation />
                  <select name="state">
                      {stateList.map((item, index) => (
                          <option key={index} value={item.name}>{item.name}</option>
                      ))}
                  </select>
                  <button><AiOutlineSearch /></button>
              </form>
          </div>

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
      </k.Header>

      </>
    )
}

export default Header;