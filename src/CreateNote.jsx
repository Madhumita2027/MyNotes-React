import React, { useState } from 'react';


function CreateNote(props) {

    const [note, setNote] = useState({})

    const InputEvent = (e) => {
        // const value = e.target.value;
        // const name = e.target.name;
        const {name, value} = e.target;     // object destructuring

        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value
            }
        })
        console.log(note, "note");
    }

    const addEvent = () => {
        props.passNote(note);
    }



    return ( 
        <>
            <div className='flex justify-center'>
                <div className='mt-10 w-1/3 rounded-md bg-gray-800 border-2'>
                    <form className='flex flex-col mt-4 mb-2 p-2 text-black'>
                        <input 
                            type='text' 
                            name='title'
                            value={note.title} 
                            onChange={InputEvent}
                            placeholder='Title' 
                            autoComplete='off'
                            className='p-1 font-bold'/>
                        <textarea 
                            type="text" 
                            name='content'
                            value={note.content} 
                            onChange={InputEvent}
                            placeholder='Write a note...' 
                            className='p-1'/>
                        <br/>
                        <button onClick={addEvent}>
                            <img src='https://pnghq.com/wp-content/uploads/2023/02/plus-icon-white-png-1593.png' alt='add note' className='h-8 w-8 p-2 bg-yellow-400 rounded-full'/>
                        </button>
                    </form>
                </div>
            </div>
        </>
     );
}

export default CreateNote;