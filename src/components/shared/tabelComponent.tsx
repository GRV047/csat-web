import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';


const StyledTableCell: any = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));


function createData(
    name: string,
    templateName: string,
    status: string,
    date: string,
    id: string,
) {
    return { name, templateName, status, date, id };
}


export default function TableComponent(props: {
    openDetails: any,
    dataSource: any
}) {

    const rows = props.dataSource.map((element: {
        name: string,
        templateName: string,
        status: string,
        date: string,
        id: string,
    }) => {
        return createData(element.name,
            element.templateName,
            element.status,
            element.date,
            element.id);
    });

    return (
        <>
            <div style={{ height: 400, width: '100%' }} className="mt-5">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Client Name</StyledTableCell>
                                <StyledTableCell align="center">Template Name</StyledTableCell>
                                <StyledTableCell align="center">Status</StyledTableCell>
                                <StyledTableCell align="center">Date</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row:any) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.templateName}</StyledTableCell>
                                    <StyledTableCell align="center">{row.status}</StyledTableCell>
                                    <StyledTableCell align="center">{row.date}</StyledTableCell>
                                    <StyledTableCell align="center">
                                        <button className='button_handler' onClick={props.openDetails} value={row.id}>
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