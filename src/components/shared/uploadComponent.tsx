import "../css/emailComponent.css"
export default function UploadComponent() {
    function submitInput(event:any){
        event.preventDefault();
        console.log("THIS")
    }
    return (
        <>
            <form onSubmit={submitInput}>
                <input type="file" accept=".xls,.xlsx"/>
                <p>Drag your files here or click in this area.</p>
                <button type="submit">Upload</button>
            </form>
        </>
    )
}