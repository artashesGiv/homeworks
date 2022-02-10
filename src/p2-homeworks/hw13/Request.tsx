import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox'
import {RequestApi} from './api/RequestApi'

type RequestStatusType = 'idle' | 'err' | 'success' | 'loading'
export const Request = () => {

   const [checkbox, setCheckbox] = useState(false)
   const [response, setResponse] = useState('')
   const [requestStatus, setRequestStatus] = useState<RequestStatusType>('idle')

   const request = () => {
      setRequestStatus('loading')
      RequestApi.auth(checkbox).then(data => {
         setRequestStatus('success')
         setResponse(JSON.stringify(data))
      }).catch(err => {
         setRequestStatus('err')
         setResponse(JSON.stringify(err.response.data))
      })
   }

   let resulTextColor = ''
   if (requestStatus === 'success') resulTextColor = 'green'
   if (requestStatus === 'err') resulTextColor = 'red'

   return (
      <div>
         <SuperButton disabled={requestStatus === 'loading'} onClick={request}>AUTH</SuperButton>
         <SuperCheckbox onChangeChecked={setCheckbox} checked={checkbox}/>
         <h3>Result: </h3>
         <div style={{color: resulTextColor}}>
            { requestStatus === 'loading'
               ? <span>Отправка...</span>
               : response
            }
         </div>
      </div>
   )
}
