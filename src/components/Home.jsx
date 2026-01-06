import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPaste } from '../redux/pasteSlice';
import { Button, Container, TextField } from '@mui/material';
import { Textarea } from '@mui/joy';

const Home = () => {
  const [data, setData] = useState({
    title: "",
    content: "",
  });


  

  const paste = useSelector((state) => state.paste)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefualt();
    console.log(paste)
  }


  return (

    <Container className="mt-4">
      <div className="flex content-center justify-between ">
        <TextField
          className="w-[79%]"
          name='title'
          onChange={(e) => {
            const {name, value} = e.target;
            setData({ ...data, [name]: value })
          }}
          size="small"
          id="outlined-basic"
          label="Title"
          variant="outlined" />
        <Button
          className="w-[19%]"
          type="submit"
          loading={false}
          onClick={handleSubmit}
          variant="contained"
        >Add to Paste
        </Button>
      </div>
      <div className="mt-3">
        <Textarea
          name='content'
          minRows={15}
          placeholder="Enter your code here"
          onChange={(e) => {
            const {name, value} = e.target;
            setData({ ...data, [name]: value })
          }}
          size="md"
          variant="outlined"
        />
      </div>
      <div>
        <Button onClick={() => dispatch(addPaste("waheed"))}>Click me</Button>
      </div>
    </Container>

  )
}

export default Home