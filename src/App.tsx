import {StoreProvider} from './redux/store'

import './App.css'

import HomePage from "./pages/HomePage.tsx";
import AppRouter from "./router/AppRouter.tsx";
import LoginPage from "./pages/LoginPage.tsx";

function App() {

  return (
    <StoreProvider>
      <AppRouter/>

    </StoreProvider>
  )
}

export default App
