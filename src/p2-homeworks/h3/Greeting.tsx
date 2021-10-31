import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.scss'

type GreetingPropsType = {
   name: string
   setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
   onKeyPressInput: (e: KeyboardEvent<HTMLInputElement>) => void
   addUser: () => void
   error: string
   totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
   {name, setNameCallback, addUser, error, totalUsers, onKeyPressInput} // деструктуризация пропсов
) => {
   const inputClass = error === 'Error' ? s.error : s.notError

   return (
      <div className={s.someClass}>
         <input value={name} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressInput}/>
         <span>{error}</span>
         <button onClick={addUser} className={s.button}>Add</button>
         <span>{totalUsers}</span>
      </div>
   )
}

export default Greeting
