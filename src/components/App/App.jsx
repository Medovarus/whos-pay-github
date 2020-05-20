import React, {Component} from 'react';
import SumInput from "../sum-input";

export default class App extends Component {
    state = {
        field1: 0,
        field2: 0,
        field1Name: 'Dmitry',
        field2Name: 'Inessa',
    }

    onChangeInput = (value, fieldName) => {
        this.setState(() => {
            return {
                [fieldName]: value
            }
        });
    }

    getPaySum = () => {
        const {field1, field2} = this.state;

        return Math.abs(field1 - field2) / 2;
    }

    getPayerName = () => {
        const {field1, field2, field1Name, field2Name} = this.state;

        if (field1 > field2) {
            return field2Name;
        } else {
            return field1Name;
        }
    }

    render() {
        const {field1, field2, field1Name, field2Name} = this.state;

        return (
            <div className="App">
                <SumInput
                    fieldName='field1'
                    name={field1Name}
                    value={field1}
                    onChangeInput={this.onChangeInput}
                />
                <SumInput
                    fieldName='field2'
                    name={field2Name}
                    value={field2}
                    onChangeInput={this.onChangeInput}
                />
                <div>{this.getPayerName()} need to pay <span>{this.getPaySum()}</span></div>
            </div>
        );
    }
}
