import "./FormStyle.css"
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from "react"
import {BsPatchCheckFill} from 'react-icons/bs'


const Form = ()=> {
  const form = useRef();
  const [emailSend,setEmailSend]=useState(false);
  

// Send email using EmailJs by useRef()
const handleSubmit = (event) =>{
    event.preventDefault();

    emailjs
    .sendForm('service_ezyy0bo', 'template_nchkr5i', form.current, {
        publicKey: 'bMAmRZqqXftA2DTa1',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        //   prompt("Your Message has been sent")
        setEmailSend(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

}


    return (
        <div className="form-content">
            <form ref={form} onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="text" name="name"></input>
                <label>Email</label>
                <input type="email" name="email" ></input>
                <label>Message</label>
                <textarea rows={5} placeholder="Type Your message.." name="message"/>
                <button type="submit" value="Send" className="btn btn-submit">Submit</button>
            </form>
            {emailSend&&<div className="sendEmail">
            <BsPatchCheckFill color="#3a5a40" size="3rem"/>
                <h2>Email Sent Successfully</h2>
            </div>}
        </div>
    )

}

export default Form