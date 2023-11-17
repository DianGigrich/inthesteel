import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Tabs, Tab} from '@mui/material/';



export default function Navigationbar(props) {
  const navigate = useNavigate()

  const [value, setValue] = React.useState('Home');

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  
    <Box sx={{ width: '100%' }}>
      <Tabs
        centered
        value={value}
        variant="fullWidth"
        onChange={handleTabChange}
        indicatorColor="primary"
        aria-label="secondary tabs"
        sx={{ border: 5 , borderColor: 'primary.main'}}
      >
        <Tab className="Tab" value="Home" label="Home" onClick={() => navigate('/')} />

        <Tab className="Tab" value="Fence" label="Fence" onClick={() => navigate('/Fence')} />

      </Tabs>
    </Box>

  )
}

