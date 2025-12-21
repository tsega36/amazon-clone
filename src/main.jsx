import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { DataProvider } from './components/DataProvider/DataProvider';
import './index.css';
import { initialState, reducer } from './utility/reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename="/amazon-clone">
    <DataProvider reducer={reducer} initialState={initialState}>
      <App />
    </DataProvider>
  </BrowserRouter>,
);
