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
import { useContext } from 'react';
import { ReportContext } from '../context/reportsContext';
import { getResponseByClientId } from '../../environment/models/rsponse';

function createData(
    fileName: string,
    createdAt: any,
    reportId:string,
    customerName: string,
    projectName: string,
    customerId: string
) {
    let date = createdAt
    return { fileName, createdAt, reportId, customerName, projectName, customerId };
}

export default function ResponseComponent(props: {
    dataSource: any,
    customerDetails: any
}) {
    const reportContext = useContext(ReportContext)

    const rows = props.dataSource.map((element: {
        fileName: string,
        createdAt: string,
        _id:string
    }) => {
        return createData(
            element.fileName,
            element.createdAt,
            element._id,
            props.customerDetails.firstName + ' ' + props.customerDetails.lastName,
            props.customerDetails.project,
            props.customerDetails._id
        )
    });

    async function viewResponses(e: any) {
        e.preventDefault();
        console.log(e.target.value)
        // let param = {
        //     clientId: (e.target.value).toString()
        // }
        // const response = await getResponseByClientId(param)

        // reportContext.setAllResponsesData(response);
    }

    console.log(rows)
    return (
        <>
            <div style={{ height: 400, width: '100%' }} className="mt-5">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>File Name</StyledTableCell>
                                <StyledTableCell align="center">Created At</StyledTableCell>
                                <StyledTableCell align="center">Client Name  </StyledTableCell>
                                <StyledTableCell align="center">Project Name</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row: any) => (
                                <StyledTableRow key={row.fileName}>
                                    <StyledTableCell component="th" scope="row">{row.fileName}</StyledTableCell>
                                    <StyledTableCell align="center">{row.createdAt}</StyledTableCell>
                                    <StyledTableCell align="center">{row.customerName}</StyledTableCell>
                                    <StyledTableCell align="center">{row.projectName}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button className='button_handler' onClick={viewResponses} value={row.reportId}>
                                            view
                                        </button>
                                    </StyledTableCell>
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}