import React, {useState} from 'react'
import {homeWorkReducer} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './HW8.module.scss'

export type UserType = {
   _id: number
   name: string
   age: number
}

const initialPeople = [
   {_id: 0, name: 'Кот', age: 3},
   {_id: 1, name: 'Александр', age: 66},
   {_id: 2, name: 'Коля', age: 16},
   {_id: 3, name: 'Виктор', age: 44},
   {_id: 4, name: 'Дмитрий', age: 40},
   {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
   const [people, setPeople] = useState<UserType[]>(initialPeople) // need to fix any


   const finalPeople = people.map((p: UserType) => (
      <>
         <div key={p._id} className={s.tableItem}>
            <span>{p.name}</span>
            <span>{p.age}</span>
         </div>
         <hr/>
      </>
   ))

   const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort-up'}))
   const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: 'sort-down'}))
   const check = () => setPeople(homeWorkReducer(initialPeople, {type: 'check-18'}))

   return (
      <div>
         <hr/>
         homeworks 8
         <div className={s.wrapper}>
            <div className={s.table}>{finalPeople}</div>
            <div className={s.btnGroup}>
               <SuperButton onClick={sortUp}>sort up</SuperButton>
               <SuperButton onClick={sortDown}>sort down</SuperButton>
               <SuperButton onClick={check}>check 18</SuperButton>
            </div>
         </div>
         <hr/>
         <hr/>
      </div>
   )
}

export default HW8
