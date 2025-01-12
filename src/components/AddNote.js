import React,{ useContext,useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    const context = useContext(noteContext);
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
         props.showAlert("Note Added Successfully", "success");
     };
    const onChange = (e) => {
        setNote({...note,[e.target.name]: e.target.value});
    }
    const { addNote } = context;
    return (
        <>
            <div className="container my-3">
                <h2> Add Your Note </h2>
                <form className="my-3">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            minLength={5}
                            required
                            value={note.title}
                            aria-describedby="emailHelp"
                            placeholder="Enter Title"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            minLength={5}
                            value={note.description}
                            required
                            placeholder="Enter Description"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">Tag</label>
                        <input
                            type="text"
                            className="form-control"
                            id="tag"
                            minLength={5}
                            value={note.tag}
                            required                          
                            name="tag"
                            placeholder="Enter Tag"
                            onChange={onChange}
                        />
                    </div>
                    <button 
                        type="submit"
                        onClick={handleClick}
                        className="btn btn-primary my-3"
                        disabled={note.title.length<5 || note.description.length<5}
                    >
                        Add Note
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddNote;
