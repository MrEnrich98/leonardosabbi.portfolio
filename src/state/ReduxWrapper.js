import React from "react"
import { Provider } from "react-redux"
import { createStore as reduxCreateStore } from "redux"
import rootReducer from "."

const createStore = () => reduxCreateStore(rootReducer)

//Provider permette allo store di agire sull'intera pagina web
export default ({ element }) => (
  <Provider store={createStore()}>{element}</Provider>
)
