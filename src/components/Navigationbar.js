import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Tabs, Tab, Typography} from '@mui/material/';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';



export default function Navigationbar(props) {
  const navigate = useNavigate()

  const [value, setValue] = React.useState('Home');

// start of popup menu
const [open, setOpen] = React.useState(false);
const anchorRef = React.useRef(null);

const handleToggle = () => {
  setOpen((prevOpen) => !prevOpen);
};

const handleClose = (event) => {
  if (anchorRef.current && anchorRef.current.contains(event.target)) {
    return;
  }
  

  setOpen(false);
};

function handleListKeyDown(event) {
  if (event.key === 'Tab') {
    event.preventDefault();
    setOpen(false);
  } else if (event.key === 'Escape') {
    setOpen(false);
  }
}

// return focus to the button when we transitioned from !open -> open
const prevOpen = React.useRef(open);
React.useEffect(() => {
  if (prevOpen.current === true && open === false) {
    anchorRef.current.focus();
  }

  prevOpen.current = open;
}, [open]);

  // end menu functions 

  const handleTabChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
  <>
  <Stack direction="row" spacing={2}>
      <Paper>
        <MenuList>
          <MenuItem onClick={() => navigate('/')} >Home</MenuItem>
          <MenuItem label="Fence" onClick={() => navigate('/Fence')}>Search</MenuItem>
          <MenuItem>Logout</MenuItem>
        </MenuList>
      </Paper>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          Dashboard
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem value='home' onClick={handleClose}>Home</MenuItem>
                    <MenuItem value='search' onClick={handleClose}>Search</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
    {/* end menu */}
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
</>
  )
}

