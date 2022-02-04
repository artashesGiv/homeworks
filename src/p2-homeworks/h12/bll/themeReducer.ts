export type ThemeType = 'dark' | 'red' | 'some' | 'black' | 'green'

type InitialStateType = {
   themeName: ThemeType
}

const initState: InitialStateType = {
   themeName: 'dark',
}

export const themeReducer = (state = initState, action: ActionsType): InitialStateType => {
   switch (action.type) {
      case 'THEME-CHANGE': {
         return {
            ...state,
            themeName: action.theme,
         }
      }
      default:
         return state
   }
}

type ActionsType = ThemeChangeActionType

type ThemeChangeActionType = {
   type: string
   theme: ThemeType
}

export const changeTheme = (theme: ThemeType): ThemeChangeActionType => {
   return {
      type: 'THEME-CHANGE',
      theme,
   }
}
