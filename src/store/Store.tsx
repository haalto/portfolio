import React, { useReducer } from 'react'

interface InitialState {
  toggled: boolean
}

interface ActionTypes {
  type: string
}

const initialState: InitialState = {
  toggled: false
}

export const Store = React.createContext<InitialState | any>(initialState)

function reducer(state: InitialState, action: ActionTypes): InitialState {
  
  switch (action.type) {
    case 'TOGGLE': {
      return {toggled: !state.toggled}
    }
    default: {
      return state
    }
  }  
}

export function StoreProvider(props: any):JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState)
  return <Store.Provider value={{state, dispatch}}>{props.children}</Store.Provider>
}