import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Box } from '@mui/material';


export default function Home(props) {
    return (
        <>
                    <Container  
            sx={{
                pt: 8,
                pb: 6,
            }}>

                <Typography
                border={4}
                 borderLeft={0}
                 borderRight={0}
                 borderTop={0}
                 borderColor="primary.main"
                    component="h1"
                    variant="h3"
                    align="left"
                    gutterBottom
                >
                    Welcome Costco Wholesale Renegades
                </Typography>
            </Container>
            <Grid container sx={{ p: 4}}>

                                
                <Grid >
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardContent sx={{ flexGrow: 1}}>
                            
                            <Typography>
                                Note: &ensp; Use Responsibly &emsp; --thanks
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>

                


            </Grid>
        </>
    )
}
