import classes from "./Card.module.css";

const Card = (props) => {
    return (
        <div className={`${props.className} ${classes.dialog}`}>{props.children}</div>
    )
};

export default Card;