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
        <div className="mb-4 form-white md-outline">
            <MDBInput
                type={type}
                name={name}
                value={value}
                onChange={handle}
                label={label}
                className="form-control-lg form-outline"
            />
        </div>
    )
}

export default Input