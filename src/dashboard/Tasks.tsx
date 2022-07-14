import { Button, Dialog, Divider, TableBody, TableCell, TableHead, TableRow, TextField,  Tooltip, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import SaveAsIcon from '@mui/icons-material/SaveAs';
import ClearIcon from '@mui/icons-material/Clear';

const Tasks = () => {
    const [data, setData] = useState( [
        {
            id: 1,
            name: 'Sign contract for "What are conference organizers afraid of?"'
        },
        {
            id: 2,
            name: 'Lines From Great Russian Literature? Or E-mails From My Boss?"'
        },
        {
            id: 3,
            name: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit"'
        },
        {
            id: 4,
            name: 'Create 4 Invisible User Experiences you Never Knew About'
        },
        {
            id: 5,
            name: 'Read "Following makes Medium better"'
        },
        {
            id: 6,
            name: 'Unfollow 5 enemies from twitter'
        }
    ])
    const [open, setOpen] = React.useState(false);
    const [task, setTask] = useState('')
    const [editId, setEditId] =  useState('')

    console.log('editid',editId)

    const handleClickOpen = (id : any) => {
        console.log('task', id)
        const findIndex:any = data.find((each:any) => each.id === id);
        console.log('findindex===', findIndex)
        setTask(findIndex?.name)
        setEditId(id)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const onClickHandle = (id : any) => {
        const deleteTodo = data.filter((each ) => each.id !== id)
        setData(deleteTodo)
    }

    const onClickUpdate = () => {
        // const findIndex = data.find((each:any) => each.id === editId);
        const res:any =  data?.map((each:any) => {
            if(each.id === editId){
                return {...each, name: task}
            }
            return each
        })
        setData(res)
        setOpen(false);
    }

  return (
       <>
        <Box >
        <TableHead>Tasks</TableHead>
        <Typography sx={{mb: 5, color: '#cee0d2'}}>Backend development</Typography>
        <Divider />
        <TableBody>
            {data.map((each, index) => {
                return (
                    <TableRow key={index} >
                    {/* <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}> */}
                        <TableCell sx={{display: 'flex', alignItems: 'center',}}>
                        <input type='checkbox' style={{marginRight: '15px', background: 'transparent'}} />
                        <Typography>{each.name}</Typography> 
                        </TableCell>
                        <TableCell>
                        <Tooltip title='edit'>
                        <SaveAsIcon style={{color: 'lightblue'}} onClick={() => handleClickOpen(each.id)}  />
                        </Tooltip>
                        </TableCell>
                        <TableCell>
                        <Tooltip title='delete' arrow>
                        <ClearIcon style={{color: 'error', marginLeft: '15px'}} onClick={() => onClickHandle(each.id)} />
                        </Tooltip>
                        </TableCell>
                    {/* </Box> */}
                    <Divider  />
                    </TableRow>
                )
            })}
        </TableBody>
        <Typography sx={{color: '#cee0d2'}}>Updated 3 minutes ago</Typography>
        </Box>
        <Dialog open={open} onClose={handleClose}>
            <Box sx={{padding:3}}>
            <TextField multiline fullWidth
              label="task" variant="standard"
              value={task} onChange={(e) => setTask(e.target.value)}  /> <br />
            <Button sx={{alignSelf: 'center', width: '255px'}} 
             onClick={onClickUpdate} >Update</Button>
            </Box>
        </Dialog>
       </>
  )
}

export default Tasks
