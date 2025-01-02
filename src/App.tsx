import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/features/counter/counterSlice";
import { useAppSelector } from "./redux/hook";
import { Button } from "./components/ui/button";
import Navbar from "./components/Layout/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  const dispatch = useDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = (amount: number) => {
    dispatch(increment(amount));
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <Navbar />
      {/* <div>
        <h1>Counter with Redux</h1>
        <Button onClick={() => dispatch(increment(5))}>Increment by 5</Button>
        <Button onClick={() => dispatch(increment(1))}>Increment by 1</Button>
        <div>{count}</div>
        <Button onClick={handleDecrement}>Decrement</Button>
      </div> */}
      <Outlet />
    </div>
  );
}

export default App;
