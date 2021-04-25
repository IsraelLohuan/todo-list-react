import "./style.css";

export const TextInput = ({value, onChange}) => {
    return (
        <input 
            placeholder="Nova Tarefa" 
            onChange={onChange}
            value={value}
        ></input>
    );
}