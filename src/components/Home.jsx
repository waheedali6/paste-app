import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPaste, updatePaste } from '../redux/pasteSlice';
import { Button, TextField } from '@mui/material';
import { Textarea } from '@mui/joy';
import toast from 'react-hot-toast';
import { useSearchParams } from 'react-router';

const Home = () => {
  const [pasteData, setPasteData] = useState({
    title: "",
    content: "",
  });
  const [ searchParams, setSearchParams ] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  // console.log(pasteId)

  const dispatch = useDispatch();
  const pastes = useSelector((state) => state.paste)

  const handleSubmit = () => {
    const data = {
      id: Math.random().toString(16).slice(2, 6),
      title: pasteData.title,
      content: pasteData.content
    }

    if (pasteId) {
      dispatch(updatePaste(pasteData));
    } else {
      dispatch(addPaste(data));
      setPasteData({
        title: "",
        content: "",
      });
    }
  }

  useMemo(() => {
    if (pasteId) {
      const paste = pastes.find((paste) => paste.id === pasteId);
      // dispatch((updatePaste(paste)))
      if (paste) {
        setPasteData({
          id: paste.id,
          title: paste.title,
          content: paste.content
        })
      }
    }
    // if () {

    // } else {

    // }

  }, [pasteId])


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
        >{pasteId ? "Update paste" : "Add paste"}
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
    </div>
  )
}

export default Home