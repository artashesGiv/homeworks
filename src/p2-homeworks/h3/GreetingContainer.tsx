import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
   users: Array<UserType>
   addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
   const [name, setName] = useState<string>('')
   const [error, setError] = useState<string>('')

   const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)
   const onKeyPressInput = (e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' ? addUser() : false

   const addUser = () => {
      let trimName = name.trim()
      if (trimName !== '') {
         addUserCallback(trimName)
         alert(`Hello ${trimName}!`)
         setName('')
         setError('')
      } else {
         setError('Error')
      }
   }

   const totalUsers = users.length

   return (
      <Greeting
         name={name}
         setNameCallback={setNameCallback}
         onKeyPressInput={onKeyPressInput}
         addUser={addUser}
         error={error}
         totalUsers={totalUsers}
      />
   )
}

export default GreetingContainer
