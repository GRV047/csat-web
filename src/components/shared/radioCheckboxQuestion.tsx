import { useId, useState } from "react"

export default function RadioCheckboxComponent(){
    const id = useId()

    const [option,setOption]=useState(["Option 1","Option 2"])

    
    return(
        <>
            <div className="container">
                <div className="row">
                    <input type="text" name="questionLabel" id={id} />
                </div>

                <div className="row">
                    
                </div>
            </div>
        </>
    )
}

