import React, { useEffect, useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'


function App() {

    const [addData, setAddData] = useState([]);
  
    const addNote = (note) => {
        setAddData((prevData) => {
          return [...prevData, note];
        });

        // console.log(note);
    }

    useEffect( () => {
      console.log(addData, "data added");
    }, [])


    return (
      <>
        <Header />
        <CreateNote passNote={addNote} />

        {addData.map((currVal, index) => {
          return <Note 
          key={index} 
          id={index} 
          title={currVal.title} 
          content={currVal.content}
          />
        })}

        {/* <Footer /> */}
      </>
    )
}

export default App
