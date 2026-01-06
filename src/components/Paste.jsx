import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { deletePaste, updatePaste } from '../redux/pasteSlice';

const Paste = () => {
  const pasteData = useSelector((state) => state.paste);
  const dispatch = useDispatch();
  // console.log(pasteData)
  const handleDelete = (id) => {
    dispatch(deletePaste(id))

  }
  return (
    <div className="container mt-4 m-auto w-[70%]">
      <div>
        <TextField label="Search" size='small' fullWidth />
      </div>
      <div className="flex flex-col mt-2">
        {pasteData.map((item, index) => (
          <div className="card p-4 rounded flex justify-between items-center mt-2 bg-[#eff9fb]" key={index}>
            <div>
              <h3 className="mb-2">{item.title}</h3>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
            <div>
              <DeleteOutlineIcon onClick={() => handleDelete(item.id)} className="cursor-pointer w-1.5" titleAccess='Delete paste' />
            </div>
          </div>
        ))

        }
      </div>
    </div>
  )
}

export default Paste