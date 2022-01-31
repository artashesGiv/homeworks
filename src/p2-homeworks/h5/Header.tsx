import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Content'
import s from './HW5.module.scss'

export const Header = () => {

   const [navHidden, setNavHidden] = useState(true)
   const navClass = navHidden ? s.navigation : `${s.navigation} ${s.navVisible}`
   const arrowContent = navHidden ? '--->' : '<---'

   // активный класс ссылкам
   const setActive = (props: { isActive: boolean }) => props.isActive ? s.active : ''

   return (
      <nav className={navClass}>
         <NavLink className={setActive} to={PATH.PRE_JUNIOR}>preJunior</NavLink>
         <NavLink className={setActive} to={PATH.JUNIOR}>Junior</NavLink>
         <NavLink className={setActive} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
         <div className={s.arrow} onClick={() => setNavHidden(!navHidden)}>
            {arrowContent}
         </div>
      </nav>
   )
}

