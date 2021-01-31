import React,{useState} from 'react';
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import Zoom from '@material-ui/core/Zoom'

function AddNote(props){

    const [isExpand,setExpand] = useState(false)

    const [note,setNote] = useState({
        title:"",
        content:""
    });

    function handleChange(event){
        const {name,value} = event.target

        setNote(prevValue => {
            return {
                ...prevValue,
                [name]:value
            }
        })
    }

    function expand(){
        setExpand(true) 
    }

    function handleClick(event){
        props.onAdd(note)
        setNote({title:"",content:""})
        setExpand(false)
        event.preventDefault()
    }

    return (<div>
            <form className="create-note">
            {isExpand && (<input onChange={handleChange} value={note.title} name="title" type="text" placeholder="Title"/>)}
            <textarea onChange={handleChange} value={note.content}  name="content" type="text" placeholder="Take a note..." 
            rows={isExpand ? 3 : 1} onClick={expand}/>
            <Zoom in={isExpand}><Fab onClick={handleClick}><AddIcon /></Fab></Zoom>
            </form>
        </div>)
    }

export default AddNote;