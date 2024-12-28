import {react} from 'react';
import NoteContext from './noteContext';
import {useState} from 'react';
const NoteState = (props) => {
    
    const notesInitial = [
        {
          "_id": "676fa3347f265fd9290453e2",
          "user": "6755ae2f27d8ade0ba34db92",
          "title": "My first Note",
          "description": "Maine peheli baar naya db bnaya",
          "tag": "Practice",
          "date": "2024-12-28T07:05:24.023Z",
          "__v": 0
        },
        {
          "_id": "676fa3347f265fd9290453e2",
          "user": "6755ae2f27d8ade0ba34db92",
          "title": "My first Note 1",
          "description": "Maine peheli baar naya db bnaya",
          "tag": "Practice",
          "date": "2024-12-28T07:05:24.023Z",
          "__v": 0
        },
        {
          "_id": "676fa3347f265fd9290453e2",
          "user": "6755ae2f27d8ade0ba34db92",
          "title": "My first Note 2",
          "description": "Maine peheli baar naya db bnaya",
          "tag": "Practice",
          "date": "2024-12-28T07:05:24.023Z",
          "__v": 0
        },
        {
          "_id": "676fa3347f265fd9290453e2",
          "user": "6755ae2f27d8ade0ba34db92",
          "title": "My first Note 4",
          "description": "Maine peheli baar naya db bnaya",
          "tag": "Practice",
          "date": "2024-12-28T07:05:24.023Z",
          "__v": 0
        },
        {
          "_id": "676fa3347f265fd9290453e2",
          "user": "6755ae2f27d8ade0ba34db92",
          "title": "My first Note 3",
          "description": "Maine peheli baar naya db bnaya",
          "tag": "Practice",
          "date": "2024-12-28T07:05:24.023Z",
          "__v": 0
        }
      ]
    const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;