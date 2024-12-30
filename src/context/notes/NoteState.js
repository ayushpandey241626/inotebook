import NoteContext from './noteContext';
import {useState} from 'react';
const NoteState = (props) => {
    
    const notesInitial = [
        {
          "_id": "676fa3347f265fd9290453e22",
          "user": "6755ae2f27d8ade0ba34db92",
          "title": "My first Note",
          "description": "Maine peheli baar naya db bnaya",
          "tag": "Practice",
          "date": "2024-12-28T07:05:24.023Z",
          "__v": 0
        },
        {
          "_id": "676fa3347f265fd92904353e2",
          "user": "6755ae2f27d8ade0ba34db92",
          "title": "My first Note 1",
          "description": "Maine peheli baar naya db bnaya",
          "tag": "Practice",
          "date": "2024-12-28T07:05:24.023Z",
          "__v": 0
        },
        {
          "_id": "676fa3347f2645fd9290453e2",
          "user": "6755ae2f27d8ade0ba34db92",
          "title": "My first Note 2",
          "description": "Maine peheli baar naya db bnaya",
          "tag": "Practice",
          "date": "2024-12-28T07:05:24.023Z",
          "__v": 0
        },
        {
          "_id": "676fa3347f2655fd9290453e2",
          "user": "6755ae2f27d8ade0ba34db92",
          "title": "My first Note 4",
          "description": "Maine peheli baar naya db bnaya",
          "tag": "Practice",
          "date": "2024-12-28T07:05:24.023Z",
          "__v": 0
        },
        {
          "_id": "676fa33467f265fd9290453e2",
          "user": "6755ae2f27d8ade0ba34db92",
          "title": "My first Note 3",
          "description": "Maine peheli baar naya db bnaya",
          "tag": "Practice",
          "date": "2024-12-28T07:05:24.023Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(notesInitial)

    // Add a note

    const addNote = (title, description, tag) =>{
      const note =  {
        "_id": "676fa3347f265fd92943530453e22",
        "user": "6755ae2f27d8ade0ba34db92",
        "title": title,
        "description": description,
        "tag": tag,
        "date": "2024-12-28T07:05:24.023Z",
        "__v": 0
      }
      setNotes(notes.concat(note))
    }
    // Delete a note
    const deleteNote = (id) =>{
      console.log("Deleing a note testing" + id)
      const newNotes = notes.filter((note) => {return note._id !== id})
      setNotes(newNotes)
    }

    // Edit a note
    const editNote = () =>{
      
    }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;