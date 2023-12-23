import React,{useState,useEffect} from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';


export default function Home(props) {
    const [newItem, setNewItem] = useState("")
// fix the todos and tasks
    useEffect(()=>{
        API.getUserFence(props.userId).then(data=>{
            console.log(data)
            setTasks(data.Items)
        })
    },[props.userId])

    return (
        <>
            <Container
                sx={{
                    pt: 8,
                    pb: 6,
                }}>

                <Typography
                    component="h1"
                    variant="h3"
                    align="left"
                    gutterBottom
                >
                    Welcome cowhole renegades
                </Typography>
            </Container>
            <Grid container sx={{ p: 4 }}>


                <Grid >
                    <Card
                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                        <CardContent sx={{ flexGrow: 1 }}>

                            <Typography>
                                Note: &ensp; Use Responsibly &emsp; --thanks
                            </Typography>
                        </CardContent>
                        <CardContent sx={{ flexGrow: 1 }}>

                            <Typography>
                                For exclusive use of Dian and those deemed worthy.
                            </Typography>
                        </CardContent>
                    </Card>
                    <Button></Button>
                </Grid>


            </Grid>
        </>
    )
}
