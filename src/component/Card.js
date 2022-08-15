import '../App.css';
import React, { useState } from 'react';

function Cards({ addTodo }) {
    const [title, settitle] = useState('');
    const [desc, setdesc] = useState('');

    function onsubmit(title, desc, e) {
        e.preventDefault();
        if (title === '' || desc === '') {
            alert('fill the  all details')
        }
        else {
            let sno;
            addTodo(title, desc, sno);
            settitle('');
            setdesc('');
        }
    }
    return (
        <div className="">
            <div>
                <h1 className='hh'>Add your Todo list</h1>
            </div>
            <div>
                <form className="text-center my-5">
                    <div className="text-center">
                        <div className="mb-3">
                            <input type="title" value={title} onChange={(e) => { settitle(e.target.value) }} className="form-control centre w-50  mx-auto text-left" id="" placeholder='Your title' />
                        </div>
                        <div className="mb-3">
                            <input type="text" value={desc} onChange={(e) => { setdesc(e.target.value) }} className="form-control w-50 text-left mx-auto " id="" placeholder='Your description' />
                        </div>
                        <button type="submit" onClick={(e) => { onsubmit(title, desc, e) }} className="btn w-50 btn-success btn-sm">Add Todo</button>
                    </div>
                </form>
            </div>
            <h1 className="hhh">YOUR TODO LIST</h1>
        </div>
    );
}
export default Cards;