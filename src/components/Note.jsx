import React from 'react';
import edit from '../assets/edit.png';
import dlt from '../assets/delete.png';


function Note({title, content, id, setAddData, addData}) {

    // delete item
    const deleteNote = () => {
        setAddData( (oldData) => 
            oldData.filter((currdata, index) => {
                return index !== id;
            })
        )
    }

    // edit note
    const editNote = (id) => {
        let editItem = addData.find( (elem, index) => {
            return index === id
        })
        console.log(editItem);
    }



    return ( 
        <div className= 'grid mx-6 my-8 float-left'>
            <div className='bg-gray-800 h-30 w-48 border-2 border-gray-600 rounded-md break-words'>
                <h1 className='p-1 font-bold'>{title}</h1>
                <p className='px-2'>{content}</p>
                <div className='flex justify-between p-2'>
                    <button onClick={() => editNote(id)}>
                        <img src={edit} alt='edit' className='h-6 w-6 hover:bg-gray-700 p-0.5' />
                    </button>
                    <button onClick={deleteNote}>
                        <img src={dlt} alt='delete' className='h-6 w-6'/>
                    </button>
                </div>
            </div>
        </div>
     );
}

export default Note;