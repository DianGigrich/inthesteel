import React, { useState, useEffect } from 'react'
import {Grid, Button } from '@mui/material';

import API from '../utils/APIs';

export default function FenceList(props) {


    const [newItem, setItems] = useState("")
    const [newName, setNewName] = useState("")
    const [newART, setNewART] = useState()
    const [newDescription, setNewDescription] = useState("")

    useEffect(() => {
        API.getUserFence(props.userId).then(data => {
            console.log(data)
            setItems(data.Fence)
        })
    }, [props.userId])

    const handleFormSubmit = e => {
        e.preventDefault();
        const newItem = {
            name: newName,
            ART: newART,
            description: newDescription,
        }
        setNewName("")
        setNewART()
        setNewDescription("")
        API.createFence(newItem, props.token).then(newItemData => {
            API.getUserFence(props.userId).then(data => {
                setItems(data.Item)
            })
        })
    }

    return (
        <Grid>
            <form onSubmit={handleFormSubmit}>
                <input name="newName" placeholder="new item" value={newName} onChange={e => setNewName(e.target.value)} />
                <input name="newART" placeholder="new ART" value={newART} onChange={e => setNewART(e.target.value)} />
                <input name="newDescription" placeholder="new Description" value={newDescription} onChange={e => setNewDescription(e.target.value)} />
                <Button>ADD</Button>
            </form>
        </Grid>

    )
}