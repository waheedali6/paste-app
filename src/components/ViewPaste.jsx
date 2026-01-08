import React, { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button, TextField } from '@mui/material';
import { Textarea } from '@mui/joy';
import toast from 'react-hot-toast';
import { useParams } from 'react-router';

const ViewPaste = () => {

    const { id } = useParams();
    const [pasteData, setPasteData] = useState({});
    const pastes = useSelector((state) => state.paste);

    useMemo(() => {
        if (id) {
            const paste = pastes.find((paste) => paste.id === id);
            if (paste) {
                setPasteData({
                    id: paste.id,
                    title: paste.title,
                    content: paste.content
                })
            }
        }
    }, [id])


    return (

        <div className="container mt-4 m-auto w-[70%]">
            <div className="flex content-center justify-between">
                <TextField
                    className="w-[79%]"
                    value={pasteData.title}
                    size="small"
                    id="outlined-basic"
                    variant="outlined"
                    disabled
                />
                <Button
                    className="w-[19%]"
                    type="submit"
                    loading={false}
                    variant="contained"
                    onClick={() => {
                        navigator.clipboard.writeText(pasteData.content);
                        toast.success("Copied to clipboard");
                    }}
                >
                    Copy code
                </Button>

            </div>
            <div className="mt-3">
                <Textarea
                    minRows={18}
                    value={pasteData.content}
                    size="md"
                    variant="outlined"
                    disabled
                />
            </div>
        </div>
    )
}

export default ViewPaste