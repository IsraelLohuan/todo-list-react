import { Component } from "react";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import { TextInput } from "../../components/TextInput";
import "./style.css";

export class Home extends Component {
    render() {
        return (
            <section className="container">
                <div className="container-input">
                    <TextInput />
                    <Button />
                </div>
            
                <div className="container-items">
                    <Card/>
                </div>
            </section>
        );
    }
}