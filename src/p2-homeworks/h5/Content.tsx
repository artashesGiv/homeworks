import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Error404 from './pages/Error404'
import {Junior} from './pages/Junior'
import {PreJunior} from './pages/PreJunior'
import {JuniorPlus} from './pages/JuniorPlus'

export const PATH = {
   PRE_JUNIOR: 'pre-junior',
   JUNIOR: 'junior',
   JUNIOR_PLUS: 'junior-plus',
}

export const Content = () => (
   <div>
      <Routes>
            <Route path={'/'} element={<Navigate replace to={PATH.PRE_JUNIOR}/>}/>
            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={<Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
            <Route path={'404'} element={<Error404/>}/>
            <Route path={'*'} element={<Navigate replace to='404'/>}/>
      </Routes>
   </div>
)
