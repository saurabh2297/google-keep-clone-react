import React,{useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import AddNote from "./AddNote";

function App() {
    const [notes, setNotes] = useState([]);
  
    function attachNote(newNote) {
      setNotes(prevNotes => {
        return [...prevNotes, newNote];
      });
    }
  
    function deleteNote(id) {
      setNotes(prevNotes => {
        return prevNotes.filter((noteItem, index) => {
          return index !== id;
        });
      });
    }
  
    return (
      <div>
        <Header />
        <AddNote onAdd={attachNote} />
        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={noteItem.title}
              content={noteItem.content}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    );
  }
  
  export default App;
