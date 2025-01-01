import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppSelector } from "./redux/hook";

function App() {
  const dispatch = useDispatch();
  const {count} = useAppSelector((state) => state.counter);

  
  const handleIncrement = (amount:number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  
  return (
    <div>
      <h1>Counter with Redux</h1>
      <button onClick={()=> dispatch(increment(5))}>Increment by 5</button>
      <button onClick={()=> dispatch(increment(1))}>Increment by 1</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App
