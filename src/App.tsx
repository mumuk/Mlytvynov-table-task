import {StoreProvider} from './redux/store'

import './App.css'


import AppRouter from "./router/AppRouter.tsx";


function App() {

  return (
    <StoreProvider>
      <AppRouter/>

    </StoreProvider>
  )
}

export default App
