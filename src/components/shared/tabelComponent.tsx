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
    account: string,
    project: string,
    email: string,
    id: string,
) {
    return { name, account, project, email, id };
}


export default function TableComponent(props: {
    openDetails: any,
    dataSource: any
}) {

    const rows = props.dataSource.map((element: {
        firstName: string,
        lastName:string,
        account:string,
        email:string,
        isActive:boolean,
        project: string,
        _id: string,
    }) => {
        return createData(element.firstName+' '+element.lastName,
            element.account,
            element.project,
            element.email,
            element._id);
    });

    return (
        <>
            <div style={{ height: 400, width: '100%' }} className="mt-5">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>Client Name</StyledTableCell>
                                <StyledTableCell align="center">Account</StyledTableCell>
                                <StyledTableCell align="center">Project Name</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Action</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row:any) => (
                                <StyledTableRow key={row.name}>
                                    <StyledTableCell component="th" scope="row">
                                        {row.name}
                                    </StyledTableCell>
                                    <StyledTableCell align="center">{row.account}</StyledTableCell>
                                    <StyledTableCell align="center">{row.project}</StyledTableCell>
                                    <StyledTableCell align="center">{row.email}</StyledTableCell>
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

export {
    StyledTableCell,
    StyledTableRow
}