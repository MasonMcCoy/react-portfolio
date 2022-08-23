import React from 'react';
// import './style.css';

function Form() {
    return (
        <div>
            <form className="form">
                <label>Name</label>
                <input
                    type="text"
                />
                <label>Email</label>
                <input
                    type="email"
                />
                <label>Message</label>
                <textarea>
                </textarea>
                <button type='button'>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Form;

// Email validation
// Message cannot be empty