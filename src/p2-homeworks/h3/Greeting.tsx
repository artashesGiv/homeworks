import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.scss'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
   text: string
   setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
   onKeyPressInput: (e: KeyboardEvent<HTMLInputElement>) => void
   addUser: () => void
   error: string
   totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
   {text, setNameCallback, addUser, error, totalUsers, onKeyPressInput} // деструктуризация пропсов
) => {
   const inputClass = `${error && s.error} ${s.default}`

   return (
      <div className={s.someClass}>
         <SuperInputText value={text} onChange={setNameCallback} className={inputClass} onKeyPress={onKeyPressInput} error={error}/>
         <SuperButton onClick={addUser}>Add</SuperButton>
         <span>{totalUsers}</span>
      </div>
   )
}

export default Greeting
