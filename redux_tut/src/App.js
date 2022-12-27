import './App.css';
import Bat from './Components/Bat';
//How to let our app use data from store
//We use Proivider
import {Provider} from 'react-redux' 
import store from './Components/redux/store';
import Ball from './Components/Ball';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Bat/>
        <Ball/>
      </Provider>
    </div>
  );
}

export default App;
