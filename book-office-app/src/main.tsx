import 'bootstrap/dist/css/bootstrap.min.css'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { store } from "./core/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById('root')!).render(<BrowserRouter basename="/book-office-web-app-frontend">
    <Provider store={store}>
        <App />
    </Provider>
</BrowserRouter>)