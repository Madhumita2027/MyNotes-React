import React from 'react';

function Note({title, content, id, setAddData}) {

    const deleteNote = () => {
        setAddData( (oldData) => 
            oldData.filter((currdata, index) => {
                return index !== id;
            })
        )
    }



    return ( 
        <div className='flex flex-row'>
            <div className='bg-gray-800 h-30 w-48 m-6 border-2 border-gray-600 rounded-md'>
                <h1 className='p-1 font-bold'>{title}</h1>
                <br />
                <p className='px-2'>{content}</p>
                <button onClick={deleteNote}>
                    <img src='https://cdn-icons-png.flaticon.com/512/5508/5508714.png' alt='delete note' className='h-7 w-7 ml-36'/>
                </button>
            </div>
        </div>
     );
}

export default Note;