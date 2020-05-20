import React, {Component} from 'react';

export default class SumInput extends Component {
    render() {
        const {value, name, onChangeInput, fieldName} = this.props;

        return (
            <div>
                {name}&nbsp;
                <input
                    type="number"
                    value={value}
                    onChange={(e) => onChangeInput(parseInt(e.target.value), fieldName)}
                />
            </div>
        );
    }
}
