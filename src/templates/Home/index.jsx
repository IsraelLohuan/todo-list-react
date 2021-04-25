import { Component } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { TextInput } from "../../components/TextInput";
import "./style.css";

export class Home extends Component {

    state = {
        todo: [],
        valueText: "Nova Tarefa"
    };

    handleTextInput = (event) => {
        const value = event.target.value;
        
        this.setState({valueText: value});
    }

    handleButtonAdd = () => {
        const { todo, valueText } = this.state;

        if(valueText !== "") {

            const data = {
                id: todo.length + 1,
                description: valueText
            };

            todo.push(data);

            this.setState({todo: todo});
        }
    }

    removeTodo = (id) => {

        const { todo } = this.state;

        const index = todo.indexOf(id - 1);

        todo.splice(index, 1);

        this.setState({todo: todo});
    }

    render() {

        const { todo, valueText } = this.state;

        return (
            <section className="container">
                <div className="container-input">
                    <TextInput value={valueText} onChange={this.handleTextInput}/>
                    <Button onClick={this.handleButtonAdd}/>
                </div>

                <div className="container-items">
                    {
                        todo.map((value) => 
                            <Card 
                                key={value.id} 
                                todo={value} 
                                onClickRemove={this.removeTodo}
                            />)
                    }
                </div>
            </section>
        );
    }
}