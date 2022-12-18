import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';
import contact from "./../../img/contact.png";
import "./Contact.css";
import fb from "./../../img/fb.png";
import inst from "./../../img/inst.png";
import google from "./../../img/google.png";

const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [text, setText] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name : name,
            email : email,
            number : number,
            text : text,
            loggedIn: true,
        }));
    }

  return (
    <section className='section'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <hr />
                    <h3>BESOIN D’AIDE ?</h3>
                    <p>Renseignez vos <br />
                        informations et nous <br />
                        prendrons contact<br />
                        avec vous.</p>
                </div>
                <div className='col-md-6'>
                    <img src={contact} />
                </div>
            </div>
        </div>
        <div className="login">
            <form className="login__form" onSubmit={(e) => handleSubmit(e)}>
                <input type="name" placeholder="Nom*" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="email" placeholder="E-mail*" value={email} onChange={(e) => setEmail(e.target.value)}/>
                <input type="number" placeholder="Tel*" value={number} onChange={(e) => setNumber(e.target.value)}/>
            </form>
            <form className="message" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Message*" value={text} onChange={(e) => setText(e.target.value)}/>
                <button type="submit">Envoyer&nbsp;&nbsp;-&gt;</button>
            </form>
        </div>
        <div className='butt'>
            <button>Livrer maintenent</button>
        </div>
        <footer className='foote'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <hr />
                        <p><b>Chaque jour est un nouveau jour<br />
                        pour nous et nous travaillons très <br />
                        dur pour satisfaire nos clients partout.</b></p>
                    </div>
                    <div className='col-md-6 mi'>
                        <h6>EXPÉDITIONS</h6>
                        <a href="#">&gt; Nos Tarifs</a> <br />
                        <a href="#">&gt; Suivi de Livraison</a>
                    </div>
                    <div className="col-md-4">
                      <img src={fb} style={{
                    width:"30%",
                    height:"60px"
                  }} />
                    </div>
                    <div className="col-md-4">
                      <img src={inst} style={{
                    width:"30%",
                    height:"60px"
                  }}/>
                    </div>
                    <div className="col-md-4">
                      <img src={google} style={{
                    width:"30%",
                    height:"60px"
                  }}/>
                    </div>
                </div>
            </div>
        </footer>
    </section>
  )
}

export default Contact