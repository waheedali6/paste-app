import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPaste } from '../redux/pasteSlice';
import { Button, TextField } from '@mui/material';
import { Textarea } from '@mui/joy';
import toast from 'react-hot-toast';

const Home = () => {
  const [pasteData, setPasteData] = useState({
    title: "",
    content: "",
  });




  const paste = useSelector((state) => state.paste);
  const dispatch = useDispatch();
  localStorage.setItem('username', 'Alice');

  const handleSubmit = () => {
    const data = {
      id : Math.random().toString(16).slice(2,6),
      title : pasteData.title,
      content : pasteData.content
    }
    dispatch(addPaste(data));
    toast.success("Paste Created Successfuly")
    setPasteData({
      title: "",
      content: "",
    })
  }


  return (

    <div className="container mt-4 m-auto w-[70%]">
      <div className="flex content-center justify-between">
        <TextField
          className="w-[79%]"
          name='title'
          value={pasteData.title}
          onChange={(e) => {
            const { name, value } = e.target;
            setPasteData({ ...pasteData, [name]: value })
          }}
          size="small"
          id="outlined-basic"
          placeholder="Enter title here"
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
          minRows={18}
          value={pasteData.content}
          placeholder="Enter your code here"
          onChange={(e) => {
            const { name, value } = e.target;
            setPasteData({ ...pasteData, [name]: value })
          }}
          size="md"
          variant="outlined"
        />
      </div>
      <div>
        <Button onClick={() => console.log(paste)}>Click me</Button>
      </div>
    </div>

  )
}

export default Home