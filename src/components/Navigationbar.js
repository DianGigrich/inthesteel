import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Tabs, Tab, Typography} from '@mui/material/';



export default function Navigationbar(props) {
  const navigate = useNavigate()

  const [value, setValue] = React.useState('Home');

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  
    <Box sx={{ width: '100%' }}>
      <Typography>
      Why dont my tab colors work
    </Typography>
      <Tabs
        centered
        value={value}
        variant="fullWidth"
        onChange={handleTabChange}
        indicatorColor="primary"
        aria-label="secondary tabs"
        sx={{ border: 5 , borderColor: 'primary.main' }}
      >
        <Tab sx={{ color: "#FFFFFF"}} value="Home" label="Home" onClick={() => navigate('/')} />

        <Tab value="Fence" label="Fence" onClick={() => navigate('/Fence')} />

      </Tabs>
    </Box>

  )
}

