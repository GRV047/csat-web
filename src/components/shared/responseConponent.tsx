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
import { useNavigate } from 'react-router-dom';

function createData(
    fileName: string,
    surveyName:string,
    createdAt: any,
    surveyId:string,
    customerName: string,
    projectName: string,
    customerId: string
) {
    return { fileName, surveyName, createdAt, surveyId, customerName, projectName, customerId };
}

export default function ResponseComponent(props: {
    dataSource: any,
    customerDetails: any
}) {
    const nav = useNavigate();

    const reportContext = useContext(ReportContext)

    const rows = props.dataSource.map((element: {
        fileName: string,
        createdAt: string,
        surveyName:string,
        _id:string
    }) => {
        return createData(
            element.fileName,
            element.surveyName?element.surveyName:'---', //ADDED Survey Name
            element.createdAt,
            element._id,
            props.customerDetails.firstName + ' ' + props.customerDetails.lastName,
            props.customerDetails.project,
            props.customerDetails._id
        )
    });

    async function viewResponses(e: any) {
        e.preventDefault();
        let param = {
            surveyId: e.target.value,
            clientId: props.customerDetails._id
        }
        const response = await getResponseByClientId(param)

        reportContext.setAllResponsesData(response.data.data);

        nav("/responseComponent");
    }

    return (
        <>
            <div style={{ height: 400, width: '100%' }} className="mt-5">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>File Name</StyledTableCell>
                                <StyledTableCell align="center">Survey Name</StyledTableCell>
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
                                    <StyledTableCell align="center">{row.surveyName?row.surveyName:'---'}</StyledTableCell>
                                    <StyledTableCell align="center">{row.createdAt}</StyledTableCell>
                                    <StyledTableCell align="center">{row.customerName}</StyledTableCell>
                                    <StyledTableCell align="center">{row.projectName}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button className='button_handler' onClick={viewResponses} value={row.surveyId}>
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