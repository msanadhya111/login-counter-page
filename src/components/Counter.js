import { useDispatch, useSelector } from "react-redux";
import Button from "../UI/Button";
import classes from "./Counter.module.css";
import { actions } from "../store/counter-slice";

const Counter = () => {
    const dispatch = useDispatch();
    const incrementHandler = () => {
        dispatch(actions.increment());
    }
    const decrementHandler = () => {
        dispatch(actions.decrement());
    } 
    const increaseByNumberHandler = () => {
        dispatch(actions.increaseByNumber(5));
    }
    const counter = useSelector((state) => state.counter);
    return (
        <div className={classes.counter}>
            <h3>REDUX COUNTER</h3>
            <h2>{counter}</h2>
            <div className={classes.buttons}>
                <Button onClick={incrementHandler}>Increment</Button>
                <Button onClick={increaseByNumberHandler}>Increase By 5</Button>
                <Button onClick={decrementHandler}>Decrement</Button>
            </div>
            <Button className={classes.toggle}>Toggle Counter</Button>
        </div>
    )
};

export default Counter;