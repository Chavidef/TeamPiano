import React, { useState, useEffect } from 'react';

import { send } from 'emailjs-com';


const ContactUs = () => {

    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        var activeLink = document.getElementById("_contact");
        console.log(activeLink);
        activeLink.className += " active";
    }, []);


    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_ajbkikh',
            'template_uy9fhn8',
            { name, email, phoneNumber, message, subject },
            '2wxqnW9FhdoJtNgEZ'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        }    

    return (
        <>
            <h1>ContactUs</h1>
            <div className="container">
                <form onSubmit={onSubmit}>
                    <input
                        type='text'
                        name='name'
                        placeholder='Full Name (eg. John Doe)'
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input
                        type='text'
                        name='phone_number'
                        placeholder='Phone Number (eg. 123-456-7890)'
                        value={phoneNumber}
                        onChange={e => setPhoneNumber(e.target.value)}
                    />
                    <input
                        type='text'
                        name='email'
                        placeholder='Email (eg. john@doe.com)'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        type='text'
                        name='subject'
                        placeholder='Subject'
                        value={subject}
                        onChange={e => setSubject(e.target.value)}
                    />
                    <textarea
                        name="message"
                        placeholder="Send us a message!"
                        value={message}
                        onChange={e => setMessage(e.target.value)}
                        rows="20">
                   </textarea>
                    <button onClick={onSubmit} > Submit</button>
                </form>
            </div>
        </>
                    )
}

export default ContactUs;