import React from 'react'
import { useState } from 'react';
import './Form.css';

const FormComp = () => {
    let mycourse = ['python', 'java', 'js', 'dotnet', 'react', 'angular'];
    const [user, setuser] = useState({
        fname: '',
        fpass: '',
        fmail: '',
        fcon: '',
        term: false

    });

    const changeip = (event) => {
        const { type, name, value, checked } = event.target;
        setuser({ ...user, [name]: type === 'checkbox' ? checked : value });

    }
    const checkData = (event) => {
        event.preventDefault();
        if (user.fname.trim() === "") {
            window.alert('fname is required');
            return false;
        }
        if (!user.fname.trim().match("^[a-zA-Z ]{3,20}$")) {
            window.alert("fname should be in correct format");
            return false;
        }
        if (user.fpass.trim() === "") {
            window.alert('fpass is required');
            return false;
        }
        if (!user.fpass.trim().match(/^.*(?=.{8,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&? ]).*$/)) {
            window.alert('fpass is required in correct format');
            return false;
        }

        if (user.fmail.trim() === '') {
            window.alert('fmails is required');
            return false;
        }
        if (!user.fmail.trim().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
            window.alert("Enter a valid email address.");
            return false;
        }
        if (user.fcon.trim() === '') {
            window.alert('fcon is required');
            return false;
        }
        if (!user.fcon.trim().match(/^[7-9][0-9]{9}$/)) {
            window.alert("Enter a valid 10-digit contact number starting with 7, 8, or 9.");
            return false;
        }
        if (user.course.trim() === '') {
            window.alert('course is required');
            return false;
        }
        if (user.term === false) {
            window.alert('please accept the term');
            return false;
        }
        window.alert(JSON.stringify(user));
    }
    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>This is a form validation</h2>
            <form onSubmit={checkData} className='form'>
                <div>
                    <label class="form-label">enter your firstname:</label>
                    <input type='text' class="form-control" name='fname' onChange={changeip} value={user.fname} />
                </div>

                <div>
                    <label class="form-label">enter your password:</label>
                    <input type='password' class="form-control" name='fpass' onChange={changeip} value={user.fpass} />
                </div>
                <div>
                    <label class="form-label">enter your email:</label>
                    <input type='txt' class="form-control" name='fmail' onChange={changeip} value={user.fmail} />
                </div>
                <div>
                    <label class="form-label">enter your contact:</label>
                    <input type='tel' class="form-control" name='fcon' onChange={changeip} value={user.fcon} />
                </div>

                <div>
                    <input type='checkbox' name='term' onChange={changeip} value={user.term} />accept the terms & condition
                </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.2367465191173!2d80.2125868735702!3d13.084176812403177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526507bf21ec23%3A0x5d2c634e29e1313e!2sGRT%20Jewellers%2C%20Anna%20Nagar%20Roundtana!5e0!3m2!1sen!2sin!4v1733674712169!5m2!1sen!2sin" style={{width:"600", height:"450" ,border:"0", allowfullscreen:"" ,loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}>
                </iframe>
                </div>
                    <button type='submit'>submit</button>

            </form>
        </div>
    )
}

export default FormComp