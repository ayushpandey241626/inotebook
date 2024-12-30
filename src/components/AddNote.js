import React from "react";
import noteContext from "../context/notes/noteContext";
import { useContext,useState } from "react";

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
                            placeholder="Enter email"
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
                            placeholder="Password"
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label className="form-check-label" htmlFor="exampleCheck1">
                            Check me out
                        </label>
                    </div>
                    <button
                        type="submit"
                        onClick={handleClick}
                        className="btn btn-primary"
                    >
                        Add Note
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddNote;
