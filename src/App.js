import './App.css';
import Counter from './components/counter_ui';
import {useEffect} from 'react';
import {useDispatch, useStore} from 'react-redux';
import { getAPI } from './reduxSlice/Redux_Slice';



function App() {
  
  const dispatch = useDispatch();

  useEffect(() => {

      dispatch(getAPI());

  }, [])
  


  return (
    <div className="App">
      <Counter />
    </div>
  );

}

export default App;
