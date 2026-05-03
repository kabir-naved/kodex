import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from "./app/store/store.jsx";
import { Provider } from "react-redux";
import GlobalError from './app/shared/components/GlobalError.jsx';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
        <GlobalError />
    </Provider>
 
)
