import React ,{useState}from 'react'
import QuestionApi from './data'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function List({ question, answer }) {
    const [show,setShow]=useState(false)
    const toggle=()=>{
        setShow(!show)
    }
    return (
        <>
            <div className='Qst'>
                <button onClick={() => toggle()}>  {show ? <RemoveIcon /> : <AddIcon />}  </button>

                <h3>{question}</h3>
            </div>
            {show ? <p >{answer}</p> : ""}
        </>
    )
}

export default List
