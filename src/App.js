import { useSelector, useDispatch } from 'react-redux';
import { incrementCount, decrementCount } from './actions/counterActions';
import Navigation from './components/Navigation';

function App() {
  const dispatch = useDispatch();
  const counterState = useSelector(state => state.counter);

  const handleIncrement = () => dispatch(incrementCount());
  const handleDecrement = () => dispatch(decrementCount());

  return (
    <div>
      <Navigation />
      <h1>{counterState}</h1>
      <button type='button' onClick={handleIncrement}>
        Increment
      </button>
      <button type='button' onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
}

export default App;
