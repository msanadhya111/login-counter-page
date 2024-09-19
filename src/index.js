import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import ContextProvider from './store/provider';
import store from './store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><ContextProvider><App /></ContextProvider></Provider>);
