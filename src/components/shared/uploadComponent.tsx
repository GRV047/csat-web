import "../css/emailComponent.css"
import { scheduleSurvey } from "../../environment/models/surveyController";
import { useRef } from "react";

import Swal from "sweetalert2";

export default function UploadComponent() {

    const inputFileRef: any = useRef(null);
    async function submitInput(event: any) {
        event.preventDefault()
        try {
            const response = await scheduleSurvey(inputFileRef.current.files[0])
            if (response.status === 202) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sending Mails',
                    showConfirmButton: true,
                })
            }
        } catch (err) {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Previous survey request undergoing. Please wait.",
                showConfirmButton: true,
            })
        }
    }

    return (
        <>
            <form onSubmit={submitInput}>
                <input type="file" accept=".xls,.xlsx" ref={inputFileRef} />
                <p>Drag your files here or click in this area.</p>
                <button type="submit">Upload</button>
            </form>
        </>
    )
}
