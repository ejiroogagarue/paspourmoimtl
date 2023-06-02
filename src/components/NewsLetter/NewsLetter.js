import React, { useRef } from 'react';

const NewsLetter = () => {

    const inputRef = useRef(null);

    const subscribeUser = async (e) => {
        e.preventDefault();

        //this is where your mailch8imp request is made
        const res = await fetch('/api/subscribeUser', {
            body: JSON.stringify({
                email: inputRef.current.value,
            }),

            headers : {
                'Content-Type': 'application/json',
            },

            method: 'POST',
        });
    };


    return (
        <form onSubmit={subscribeUser}> 
            <label htmlFor='emailInput' className='formLabel'>Your Best Email</label>
            <input type="email" id="email-input" name="email" placeholder='your best email' ref={inputRef} required autoCapitalize='off' autoCorrect="off" />
            <button type="submit" value="" name="subscibe">
                Subscribe
            </button>
        </form>
    );
};

export default NewsLetter;