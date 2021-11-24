import React from 'react'
import {HashRouter} from 'react-router-dom'
import {Content} from './Content'
import {Header} from './Header'

export const HW5 = () => (
   <div>
      <HashRouter>
         <Header/>
         <Content/>
      </HashRouter>
   </div>
)

