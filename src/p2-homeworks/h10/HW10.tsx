import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from './bll/store'
import {initStateType, loadingAC} from './bll/loadingReducer'

function HW10() {

   const dispatch = useDispatch()
   const loading = useSelector<AppStoreType, initStateType>(state => state.loading)

   const setLoading = () => {
      dispatch(loadingAC(true))
      setTimeout(() => dispatch(loadingAC(false)), 2000)
   }

   return (
      <div>
         <hr/>
         homeworks 10
         {loading.isLoading
            ? (
               <div>крутилка...</div>
            ) : (
               <div>
                  <SuperButton onClick={setLoading}>set loading...</SuperButton>
               </div>
            )
         }

         <hr/>
         {/*для личного творчества, могу проверить*/}
         {/*<Alternative/>*/}
         <hr/>
      </div>
   )
}

export default HW10
