import React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../index.css'

function Header(props) {

    return (

        <React.Fragment >
            <Toolbar sx={{ border: 5, borderColor: 'primary.main' }}>
                <Typography

                    component="h2"
                    variant="h2"
                    align="center"
                    color="#FF0000"
                    sx={{ flex: 1, letterSpacing: 2 }}
                    className="dragons"
                >

                    <strong>In The Steel</strong>

                </Typography>

            </Toolbar>
            <Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >

            </Toolbar>
        </React.Fragment>

    );
}


export default Header;
