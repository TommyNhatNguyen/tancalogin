import {Provider} from 'react-redux';
import {store} from './store/store';
import App from './App';

function Root(): React.JSX.Element {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default Root;
