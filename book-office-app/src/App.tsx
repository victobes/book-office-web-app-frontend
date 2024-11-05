import './App.css'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from "./Routes"
import { useGlobalProps } from "./hooks/useGlobalProps"
import { Provider } from "react-redux";
import { store } from './core/store';

function App() {
  const globalProps = useGlobalProps();

  return (
    <BrowserRouter basename='/book-office-web-app-frontend'>
      <Provider store={store}>
        <AppRoutes {...globalProps} />
      </Provider>
    </BrowserRouter>
  )
}

export default App
