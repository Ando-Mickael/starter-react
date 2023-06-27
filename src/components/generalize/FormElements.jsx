import React from 'react';

export function MyInput({ name }) {
    function getType() {
        if (name.includes("datetime")) {
            return "datetime-local";
        } else if (name.includes("date")) {
            return "date";
        } else if (name.includes("email")) {
            return "email";
        }
        return "text";
    }

    function getId() {
        return name + "Input";
    }

    return (
        <div className="mb-3">
            <label htmlFor={getId()} className="form-label">{name.toUpperCase()}</label>
            <input className="form-control" type={getType()} name={name} id={getId()} />
        </div>
    );
}

export function MySelect({ name, options }) {
    function getId() {
        return name + "Input";
    }

    return (
        <div className="mb-3">
            <label htmlFor={getId()} classame="form-label">{name.toUpperCase()}</label>
            <select className="form-select" name={name} id={getId()}>
                {options.map(option => {
                    return (
                        <option key={option.id} value={option.id}>
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </div>
    );
}


