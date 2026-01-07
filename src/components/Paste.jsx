import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditIcon from '@mui/icons-material/Edit';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { deletePaste, updatePaste } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router';
import react, { useState } from 'react';

const Paste = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const pasteData = useSelector((state) => state.paste);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deletePaste(id))
    toast.success("Paste deleted successfuly");
  }

  const filteredPaste = pasteData.filter((item) => item.title?.toLowerCase().includes(searchTerm?.toLowerCase()));
  return (
    <div className="container mt-4 m-auto w-[70%]">
      <div>
        <TextField onChange={(e) => setSearchTerm(e.target.value)} label="Search" size='small' fullWidth />
      </div>
      <div className="flex flex-col mt-2">
        {filteredPaste.map((item, index) => (
          <div className="card p-4 rounded flex justify-between items-center mt-2 bg-[#eff9fb]" key={index}>
            <div>
              <h3 className="mb-2">{item.title}</h3>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
            <div className='flex gap-2 items-center'>
              <DeleteOutlineIcon onClick={() => handleDelete(item.id)} className="cursor-pointer w-1.5" titleAccess='Delete paste' />
              <Link to={`/?pasteId=${item.id}`}><EditIcon className="cursor-pointer w-1.5" titleAccess='Update paste' /></Link>
              <Link to={`/paste/${item.id}`}><VisibilityIcon className="cursor-pointer w-1.5" titleAccess='View paste' /></Link>
            </div>
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default Paste