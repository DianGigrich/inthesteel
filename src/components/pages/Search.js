import React,{useState,useEffect} from 'react'
import { Box, Typography} from '@mui/material';
import API from '../../utils/API'

export default function Fence(props) {
  const [newItem, setNewItem] = useState("")
  // fix the todos and tasks
      // useEffect(()=>{
      //     API.getUserFence(props.userId).then(data=>{
      //         console.log(data)
      //         setTasks(data.Items)
      //     })
      // },[props.userId])
  return (
    <Box sx={{
      pt: 8,
      pb: 6,
    }}
    >
      <Typography
        color="text.primary"
      >
        Fence item</Typography>
    </Box>
  )
}