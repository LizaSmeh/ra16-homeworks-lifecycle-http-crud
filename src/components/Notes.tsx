import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import Form from './Form';

interface NotesProps {
    id: number;
    content: string;
  }
  
  const Notes = () => {
    const [notes, setNotes] = useState<NotesProps[]>([]);
  
    const fetchNotes = async () => {
      const response = await axios.get('http://localhost:7070/notes');
      setNotes(response.data);
    };
  
    useEffect(() => {
      fetchNotes();
    }, []);
  
    const handleAddNote = async (content: string) => {
      await axios.post('http://localhost:7070/notes', {
        id: 0,
        content,
      });
      fetchNotes();
    };
  
    const handleDeleteNote = async (id: number) => {
      await axios.delete(`http://localhost:7070/notes/${id}`);
      fetchNotes();
    };
  
    const handleRefresh = () => {
      fetchNotes();
    };
  
    return (
      <div className='notes-container'>
        <Form onAdd={handleAddNote} />
        <button className='refresh-btn' onClick={handleRefresh}>↻</button>
        <div className='card-container'>
          {notes.map((note) => (
            <Card
              key={note.id}
              id={note.id}
              content={note.content}
              onDelete={handleDeleteNote}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Notes;