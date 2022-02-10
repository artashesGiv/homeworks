import React from 'react'
import s from './HW12.module.css'
import SuperSelect from '../h7/common/c5-SuperSelect/SuperSelect'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../h10/bll/store'
import {changeTheme, ThemeType} from './bll/themeReducer'

const themes: ThemeType[] = ['dark', 'red', 'some', 'black', 'green']

export const HW12 = () => {

   const theme = useSelector<AppStoreType, ThemeType>(state => state.theme.themeName)
   const dispatch = useDispatch()

   const onChangeTheme = (theme: ThemeType) => {
      dispatch(changeTheme(theme))
   }

   return (
      <div className={s[theme]}>
         <hr/>
         <span className={s[theme + '-text']}>
                homeworks 12
         </span>


         <SuperSelect
            options={themes}
            onChangeOption={onChangeTheme}
            value={theme}
         />

         <hr/>
      </div>
   )
}