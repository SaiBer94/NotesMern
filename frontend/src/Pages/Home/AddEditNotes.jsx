import React, { useState } from 'react';
import TagInput from '../../Components/TagInput/TagInput';
import './AddEditNotes.css';  // Import the CSS file
import { MdClose } from 'react-icons/md';

const AddEditNotes = ({onClose}) => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);

    const [error, setError] = useState(null);

    const addNewNote = async()=> {
        //build with backend
    }

    const editNote = async()=> {
        //build with backend
    }

    const handleAddNote = ()=> {
        if(!title) {

        }
        if(!content) {

        }

        setError(null)

        if(type === 'edit') {
            editNote()
        } else {
            addNewNote()
        }
    }

    return (
        <div className="add-edit-notes-container">
            <button classname="closeBtn" onClick={onClose}><MdClose/></button>
            <div>
                <label htmlFor="title">Title</label>
                <input 
                    type="text" 
                    placeholder='Title' 
                    value={title} 
                    onChange={({ target }) => setTitle(target.value)}
                />
            </div>
            <div>
                <label htmlFor="content">Content</label>
                <textarea 
                    placeholder="Note's content" 
                    rows={15} 
                    value={content} 
                    onChange={({ target }) => setContent(target.value)}
                />
            </div>
            <div>
                <label htmlFor="tags">Tags</label>
                <TagInput tags={tags} setTags={setTags} />
            </div>

            {error}

            <button onClick={() => {handleAddNote}}>Add</button>
            
            
        </div>
    );
}

export default AddEditNotes;
