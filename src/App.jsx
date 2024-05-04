import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import AddNote from './components/AddNote';
import Note from './components/Note';


function App() {

    const [addData, setAddData] = useState([]);


    return (
      <>
        <Header />

        <AddNote 
          setAddData={setAddData}
          addData={addData} />

        {addData.map((currVal, index) => {
          return <Note 
          key={index} 
          id={index} 
          title={currVal.title} 
          content={currVal.content}
          setAddData={setAddData}
          addData={addData}
          />
        })}

        <Footer />
      </>
    )
}

export default App
