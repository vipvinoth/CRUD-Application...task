import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Link, } from 'react-router-dom';
import axios from 'axios';
import { Api } from './api';
import './App.css';
import AddContact from './addcontact';
import { FaWhatsapp, FaPhoneAlt, FaTrash, FaUsers, FaMailBulk } from 'react-icons/fa'


export default function Contact() {

    const [name, setName] = useState([])
    useEffect(() => {
        axios.get(Api).then((data) => {
            setName(data.data)
            console.log(data.data);
        })
    }, [])

    const del = (a) => {
        console.log("data deleted");
        axios.delete(`${Api}/${a}`).then(() => {
            axios.get(Api).then((data) => {
                setName(data.data)
                console.log(data.data);
            })
        })
    }


    return (
        <div className='container'>

            <FaUsers color='limegreen' size={100}></FaUsers>
            <h1>Contacts</h1>
            <BrowserRouter>
                <button className='add'><Link to='/addcontact'>Add Contacts</Link></button>
                <Routes>
                    <Route path='/Addcontact' element={<AddContact />} />
                </Routes>
            </BrowserRouter>
            <table data-aos="flip-down">
                {/* <tr>
                    <th>S no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone Number</th>
                    <th>Actions</th>
                </tr> */}
                {
                    name.map((dat) => (
                        <tr className='zoom'>
                            <td>{dat.id}</td>
                            <td>{dat.name}</td>
                            <td>{dat.email}<button title='mail to'><a href={'https://mail.google.com/mail/' + (dat.email)}><FaMailBulk color='red'></FaMailBulk></a></button>
                            </td>
                            <td>{dat.phnumber}
                                <button title='call'><a href={'tel:' + (dat.phnumber)}><FaPhoneAlt></FaPhoneAlt></a></button>
                                <button title='whatsapp'><a href={"https://wa.me/" + (dat.phnumber)}><FaWhatsapp color='green' size={22}></FaWhatsapp></a></button>
                            </td>

                            <td>
                                {/* <button title='edit'><FaEdit></FaEdit></button> */}
                                <button title='delete' onClick={() => del(dat.id)}><FaTrash color='darkblue'></FaTrash>
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </table>









        </div>







    )
}