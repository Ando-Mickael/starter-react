import React from 'react';
import { MySelect, MyInput } from '../components/generalize/FormElements';

export default function TestForm() {
    const options = [
        {
            "id": 1,
            "label": "Homme"
        },
        {
            "id": 2,
            "label": "Femme"
        },
        {
            "id": 3,
            "label": "Neutre"
        }
    ];

    const inputs = ["nom", "email", "date_naissance"];

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);
    }

    return (
        <form onSubmit={handleSubmit}>
            {inputs.map((input, index) => {
                return (
                    <MyInput name={input} key={index} />
                );
            })}
            <MySelect name="sexeid" options={options} />
            <button className="btn btn-outline-primary" type="submit">Submit</button>
        </form>
    );
}
