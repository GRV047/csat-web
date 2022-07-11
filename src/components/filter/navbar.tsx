import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import '../css/home.css'
import { useContext } from 'react';
import { HomeContext } from '../context/homePageContext';
import { ReportContext } from '../context/reportsContext';


export default function Navbar() {

    const homeContext = useContext(HomeContext)
    const reportContext = useContext(ReportContext)
    function handelRout(e: any) {
        console.log(e)
        if(e.target.textContent ==='See Reports'){
            reportContext.setAllCustomerData();
        }
        homeContext.setVisibility(false)
    }
    return (
        <>
            <div className="menu_container">
                <Link to="" style={{ textDecoration: 'none', color: 'black' }} onClick={() => {
                    homeContext.setVisibility(true)
                }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </Link>


                <Link to="sendEmail" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItemButton onClick={handelRout}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Send Mail" />
                    </ListItemButton>
                </Link>


                <Link to="surveyReports" style={{ textDecoration: 'none', color: 'black' }}>
                    <ListItemButton onClick={handelRout}>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="See Reports" />
                    </ListItemButton>
                </Link>
            </div>
        </>
    )
}

