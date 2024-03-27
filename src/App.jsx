import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import CreateNote from './CreateNote'
import Note from './Note'


function App() {

    const [addData, setAddData] = useState([]);
  
    // const addNote = (note) => {
    //     setAddData((prevData) => {
    //       return [...prevData, note];
    //     });

    //     console.log(note);
    // }


    return (
      <>
        <Header />
        <CreateNote setAddData={setAddData} />

        {addData.map((currVal, index) => {
          return <Note 
          key={index} 
          id={index} 
          title={currVal.title} 
          content={currVal.content}
          setAddData={setAddData}
          />
        })}

        <Footer />
      </>
    )
}

export default App
