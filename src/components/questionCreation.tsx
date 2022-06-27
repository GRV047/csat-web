import './css/createquestion.css'

const typeArr: string[] = ["RADIO", "CHECKBOX", "BOOLEAN", "TEXT"]

export function CreateQuestion() {

    let typeSectionArr:any = [];

    typeArr.forEach(element => {
        typeSectionArr.push(
            <div>
                <QuestionTypeContainer typeText={element} />
                <br />
            </div>
        )
    })
    return (
        <>
            <div className="containerfluid">
                <div className="row">
                    <div className="col-lg-3">
                        {typeSectionArr}
                    </div>
                    <div className="col-lg-9">
                        
                    </div>
                </div>
            </div>
        </>
    )
}

const QuestionTypeContainer = (prop: {
    typeText: string,
}) => {
    return (
        <>
            <div className="type__container">
                <input type="button" name={prop.typeText} value={prop.typeText} />
            </div>
        </>
    )
}