import './addcontact.css';
import { useState } from "react";
import axios from 'axios';
import { Api } from './api';
import { useNavigate } from "react-router-dom";
import { FaMailBulk, FaPhone, FaUserCircle } from "react-icons/fa";


export default function AddContact() {
    const navi = useNavigate('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phnumber, setPhnumber] = useState('')
    const handlesubmit = (event) => {
        event.preventDefault();
        navi('/App')
        axios.post(Api, {
            name, email, phnumber
        })
        setName("");
        setEmail("");
        setPhnumber("");
    }
    return(
        <>
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" className="contact">
            <form onSubmit={handlesubmit}>
                    <div className='main'>
                        <div className='submain'>
                        <div>
                            <FaUserCircle size={18}></FaUserCircle> <input value={name} onChange={(e) => setName(e.target.value)} name='urname' type='text' placeholder="enter name" required></input></div><br></br>

                        <div>
                            <FaMailBulk size={18}></FaMailBulk><input value={email} onChange={(e) => setEmail(e.target.value)} name='uremail' type='text' placeholder="enter email" required></input></div><br></br>

                        <div>
                            <FaPhone size={18}></FaPhone><input value={phnumber} onChange={(e) => setPhnumber(e.target.value)} name='urphnumber' type='text' placeholder="enter number" required></input></div><br></br>

                        <button className="save">Save</button>
                    </div>
                    </div>
            </form>
        </div>
        </>
    )
}