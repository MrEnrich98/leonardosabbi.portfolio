//imposto uno stato iniziale
const initialState = {
  isDarkMode: false,
}
const TOGGLE_DARKMODE = "TOGGLE_DARKMODE"

//azione che deve compiere il reducer
export const toggleDarkMode = isDarkMode => ({
  type: TOGGLE_DARKMODE,
  isDarkMode,
})

//reducer compie l'azione
export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_DARKMODE:
      return { ...state, isDarkMode: action.isDarkMode }
    default:
      return state
  }
}
