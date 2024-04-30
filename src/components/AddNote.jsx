import React, { useEffect, useState } from 'react';
import add from '../assets/add.png';


function AddNote({setAddData}) {

    const [note, setNote] = useState({
        title: '',
        content: ''
    });
    const [expand, setExpand] = useState(false);

    const InputEvent = (e) => {
        const {name, value} = e.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    const addEvent = (e) => {
        e.preventDefault()
        // setAddData( prev => [...prev, note])
        if(note.title !== "" || note.content !== "") {
            setAddData( (prev) => [...prev, note]) 
        }
        setNote({
            title: '',
            content: ''
        })
    }

    const expandIt = () => {
        setExpand(true);
    }

    const collapseIt = () => {
        setExpand(false);
    }


    return ( 
        <>
            <div className='relative mx-auto w-1/3'>
                <div className='mt-10 rounded-md bg-gray-800 border-2 border-gray-600'>
                    <form className='flex flex-col mt-4 mb-2 p-2 text-black'>
                        <input 
                            className='p-2 font-bold outline-none'
                            type='text' 
                            name='title'
                            value={note.title} 
                            onChange={InputEvent}
                            placeholder='Title' 
                            autoComplete='off'
                            onClick={expandIt}
                            />

                        { expand ?
                        <textarea 
                            className='pl-2 outline-none'
                            type="text" 
                            name='content'
                            value={note.content} 
                            onChange={InputEvent}
                            placeholder='Write a note...' 
                            /> : null }
                        <br/>

                        <div className='flex flex-row justify-between'>                         
                        { expand ?
                        <button onClick={addEvent}>
                            <img src={add} alt='add note' className='h-8 w-8 p-2 bg-yellow-400 rounded-full' />                            
                        </button> : null }                        
                        {expand ?
                        <button className='text-white hover:bg-gray-700 p-2' onClick={collapseIt}>
                            Close
                        </button> : null }
                        </div>
                    </form>
                </div>
            </div>
        </>
     );
}

export default AddNote;