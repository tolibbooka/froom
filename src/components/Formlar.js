import React, { useState } from 'react';

export function Formlar() {
    const [harakat, setHarakat] = useState('')
    const [stil, setStil] = useState({});


    const tutish = (e) => {
        setHarakat(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault();

        let stil = {};
        if (harakat === '') {
            stil = {
                border: "2px solid red",
            };
    }
        else {
        stil = {
            border: "3px solid green",
        };
    }
    setStil(stil);
}
return (
    
    <div className='formlar'>
        <form onSubmit={submit}>
        <input type="text" placeholder='Isim' style={stil} onChange={tutish} />
        <input type="text" placeholder='Familanggiz' style={stil} onChange={tutish} />
        <input type="email"placeholder='Email' style={stil} onChange={tutish} />
        <input type="password" placeholder='Password' style={stil} onChange={tutish} />
        <button  type='submit'>submit</button>
        <p>{harakat}</p>
        </form>
    </div>
);
}

