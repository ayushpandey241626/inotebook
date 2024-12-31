import React,{ useContext,useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = () => {
    const [note, setNote] = useState({ title: "", description: "", tag: "default" });
    const context = useContext(noteContext);
    const handleClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
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
                            name="tag"
                            placeholder="Enter Tag"
                            onChange={onChange}
                        />
                    </div>
                    <button 
                        type="submit"
                        onClick={handleClick}
                        className="btn btn-primary my-3"
                    >
                        Add Note
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddNote;
