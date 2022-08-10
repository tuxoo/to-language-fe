import React from "react";
import {MDBInput} from "mdb-react-ui-kit";

interface InputProps {
    type: string,
    name: string,
    value: string,
    label: string,
    handle: (e: any) => void
}

const Input = ({name, type, value, label, handle}: InputProps) => {
    return (
        <div className="form-outline form-white mb-4">
            <MDBInput
                type={type}
                name={name}
                value={value}
                onChange={handle}
                label={label}
                className="form-control form-control-lg"
            />
        </div>
    )
}

export default Input