import {
    StyledTableCell,
    StyledTableRow
} from './tabelComponent'

import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import TableRow from '@mui/material/TableRow';

function createData(
    templateName: string,
    customerName: string,
    createdAt: string,
    responseJson: object[]
) {
    let data={}
    console.log(responseJson)
    
    return data;
}

export default function ResponseComponent(props: {
    dataSource: any
}) {
    console.log("inside",props.dataSource)
    const rows = props.dataSource.map((element: {
        templateName: string,
        customerName: string,
        createdAt: string,
        responseJson: object[]
    }) => {
        return createData(element.templateName,
            element.customerName,
            (element.createdAt).toString(),
            element.responseJson)
    });

    return (
        <>
            <div style={{ height: 400, width: '100%' }} className="mt-5">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Template Name</StyledTableCell>
                                <StyledTableCell align="center">Customer Name</StyledTableCell>
                                <StyledTableCell align="center">Submission Date</StyledTableCell>
                                <StyledTableCell align="center">Question Text</StyledTableCell>
                                <StyledTableCell align="center">Response</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row: any) => (
                                <StyledTableRow key={row.templateName}>
                                    <StyledTableCell component="th" scope="row">{row.templateName}</StyledTableCell>
                                    <StyledTableCell align="center">{row.customerName}</StyledTableCell>
                                    <StyledTableCell align="center">{row.createdAt}</StyledTableCell>
                                    {
                                        row.templateJson.map((x: any) => {
                                            (
                                                <>
                                                    <StyledTableCell align="center">{x.questionText}</StyledTableCell>
                                                    <StyledTableCell align="center">{x.response}</StyledTableCell>
                                                </>
                                            )
                                        })
                                    }
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}