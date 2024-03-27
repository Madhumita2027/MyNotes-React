import React from 'react';

function Note(props) {
    return ( 
        <>
            <div className='bg-gray-800 h-30 w-48 m-6 border-2 rounded-md'>
                <h1 className='p-1 font-bold'>{props.title}</h1>
                <br />
                <p className='px-2'>{props.content}</p>
                <button>
                    <img src='https://cdn-icons-png.flaticon.com/512/5508/5508714.png' alt='delete note' className='h-7 w-7 ml-32'/>
                </button>
            </div>
        </>
     );
}

export default Note;