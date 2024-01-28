import "./FormStyle.css"
import React from 'react'

class Form  extends React.Component{
//   const data = useRef(0);
//   const nameInput = useRef(null)

//   console.log(name);

handleSubmit = (event) =>{
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
}
render(){

    return (
        <div className="form-content">
            <form onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name"></input>
                <label>Email</label>
                <input type="email" name="email"></input>
                <label>Message</label>
                <textarea rows={5} placeholder="Type Your message.."/>
                <button type="submit" className="btn btn-submit">Submit</button>
            </form>
        </div>
    )
}
}

export default Form