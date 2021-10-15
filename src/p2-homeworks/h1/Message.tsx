import React from 'react'
import s from './Message.module.css'

type MessagePropsType = {
   avatar: string
   name: string
   message: string
   time: string

}

function Message(props: MessagePropsType) {
   return (
      <div className={s.message}>
         <img src={props.avatar} alt="avatar"/>
         <div className={s.content}>
            <div className={s.name}>
               <p>
                  {props.name}
               </p>
            </div>
            <div className={s.messageValue}>
               <div className={s.svg}>
                  <svg width="9" height="20">
                        <path
                           d="M3 17h6V0c-.193 2.84-.876 5.767-2.05 8.782-.904 2.325-2.446 4.485-4.625 6.48A1 1 0 003 17z"
                           fill="#a3a3a3"/>
                  </svg>
               </div>
               <p className={s.text}>
                  {props.message}
               </p>
               <p className={s.time}>
                  {props.time}
               </p>
            </div>
         </div>
      </div>
   )
}

export default Message
