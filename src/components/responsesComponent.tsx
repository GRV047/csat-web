import { Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material";
import { useContext } from "react"
import { ReportContext } from "./context/reportsContext"
import { StyledTableCell, StyledTableRow } from "./shared/tabelComponent";
import Paper from '@mui/material/Paper';
import './css/reports.css';

function createData(
    questionText: string,
    responses: string,
    i: number
) {
    return { i, questionText, responses };
}

export default function ResponsesComponent() {
    //Featching all responses from context
    const respoponseDetails = useContext(ReportContext);

    

    const rows = respoponseDetails.allResponse.map((element: {
        question: string,
        response: string
    }, i: number) => {
        return createData(
            element.question,
            element.response,
            i+1
        )
    });

    return (
        <div className="parentContainer">
            <div className="place_holder mt-5">
                <div className="container">
                    <div className="row mt-2">
                        <h2>Response</h2>
                    </div>
                    <div className="row mt-2">
                        <div style={{ height: 400, width: '100%' }} className="mt-5">
                            <TableContainer component={Paper}>
                                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                                    <TableHead>
                                        <TableRow>
                                            <StyledTableCell>S. No</StyledTableCell>
                                            <StyledTableCell align="center">Question</StyledTableCell>
                                            <StyledTableCell align="center">Answare</StyledTableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {rows.map((row: any) => (
                                            <StyledTableRow key={row.i}>
                                                <StyledTableCell component="th" scope="row">{row.i}</StyledTableCell>
                                                <StyledTableCell component="th" scope="row">{row.questionText}</StyledTableCell>
                                                <StyledTableCell align="center">{row.responses ? row.responses : '---'}</StyledTableCell>
                                            </StyledTableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}