import {UserType} from '../HW8'

export const homeWorkReducer = (state: UserType[], action: {type: string}): UserType[] => {
   switch (action.type) {
      case 'sort-up': {
          return [...state].sort((a, b) => a.age < b.age ? 1 : -1)
      }
       case 'sort-down': {
           return [...state].sort((a, b) => a.age > b.age ? 1 : -1)
       }
      case 'check-18': {
         return [...state].filter(f => f.age >= 18)
      }
      default:
         return state
   }
}