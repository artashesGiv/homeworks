export type initStateType = {
   isLoading: boolean
}

const initState: initStateType = {
   isLoading: false,
}

export const loadingReducer = (state = initState, action: ReturnType<typeof loadingAC>): initStateType => {
   switch (action.type) {
      case 'IS-LOADING': {
         return {
            ...state,
            ...action.payload
         }
      }
      default:
         return state
   }
}

export const loadingAC = (isLoading: boolean) => ({
   type: 'IS-LOADING',
   payload: {
      isLoading
   }
} as const)