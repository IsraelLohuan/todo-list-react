import "./style.css";

export const ButtonRemove = ({onClick}) => {
    return (
        <button className="button-remove" onClick={onClick}>
            -
        </button>
    );
}