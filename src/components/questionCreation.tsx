import { useState } from 'react';
import './css/createquestion.css'
import DropDown from './shared/dropDown';
import RadioCheckboxComponent from './shared/radioCheckboxQuestion';



export function CreateQuestion() {

    const [selected, setSelected] = useState("Choose One")

    return (
        <>
            <div className="containerfluid">
                <div className="row">
                    <DropDown selected={selected} setSelected={setSelected} />
                </div>

                <div className="row">
                    <RadioCheckboxComponent />
                </div>
            </div>
        </>
    )
}

