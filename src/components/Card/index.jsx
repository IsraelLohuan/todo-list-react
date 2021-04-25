import { ButtonRemove } from "../ButtonRemove";
import "./style.css";

export const Card = ({todo, onClickRemove}) => {
    return (
        <div className="card">
            <h1>{todo.description}</h1>
            <ButtonRemove onClick={onClickRemove}/>
        </div>
    );
}