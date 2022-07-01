import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import '../css/home.css'


export default function Navbar() {
    return (
        <>
            <div className="menu_container">
                <Link to="" style={{ textDecoration: 'none',color:'black' }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </Link>


                <Link to="sendEmail" style={{ textDecoration: 'none', color:'black' }}>
                    <ListItemButton>
                        <ListItemIcon>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText primary="Send Mail" />
                    </ListItemButton>
                </Link>


                <Link to="surveyReports" style={{ textDecoration: 'none' , color:'black' }}>
                    <ListItemButton>
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

