import { useState } from "react"
import Label from "./label"

export default function TextAreaSection(props: any) {

    const [comment, setComent] = useState("")

    // function onChange(e: any) {
    //     const value = e.target.value;

    //     setComent(value);
    // }
    const {
        questionObject: {
            _id,
            questionText,
        },
        onChange
    } = props || {}
    return (
        <>
            <div className="mt-5">
                <Label labelName="Question"
                    className="form-label"
                    text={questionText} />
                <textarea id={_id}
                    name={"messege"}
                    rows={4}
                    cols={40}
                    placeholder={"Enter Text"}
                    value={props.value}
                    onChange={props.onChange}></textarea>
            </div>
            {/* <textarea id={props.id} name={props.name} rows={props.rows} cols={props.cols} placeholder={props.placeHolder} value={props.value} onChange={props.onChange}></textarea> */}
        </>
    )
}