import { useId, useReducer, useState } from "react"
import Options from "./options"

export default function RadioCheckboxComponent() {
    const id = useId()

    

    return (
        <>
            <div className="container">
                <div className="row">
                    <input type="text" name="questionLabel" id={id} />
                </div>

                <div className="row">
                    <Options/>
                </div>
            </div>
        </>
    )
}

