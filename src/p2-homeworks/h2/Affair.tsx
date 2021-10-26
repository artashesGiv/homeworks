import React from 'react'
import {AffairType} from './HW2'
import s from './Affairs.module.scss'

type AffairPropsType = {
   affair: AffairType
   deleteAffairCallback: (_id: number) => void
}

const classPriority = (pr: string) => {
   if (pr === 'low') {
      return s.low
   } else if (pr === 'middle') {
      return s.middle
   } else {
      return s.high
   }
}

console.log(s)

function Affair(props: AffairPropsType) {
   const deleteCallback = () => props.deleteAffairCallback(props.affair._id)// need to fix

   return (
      <div className={s.affair}>
         <div className={s.affairBlock}>
            <p>{props.affair.name}</p>
         </div>
         <div className={s.affairBlock}>
            <p className={classPriority(props.affair.priority)}>[{props.affair.priority}]</p>
         </div>
         <div className={s.btnDelete}>
            <button onClick={deleteCallback}>x</button>
         </div>
      </div>
   )
}

export default Affair
