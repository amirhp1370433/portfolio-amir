import React, { useRef, useState } from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import {BiPhoneCall} from 'react-icons/bi'
import emailjs from '@emailjs/browser'
const Contact = () => {
  const form = useRef()
 const [swt , setSwt] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hio24pg', 'template_6xvzcrd', form.current, 'B1iQbN8LKxWsYVpV3')
      .then((result) => {       
        setSwt(true)
        setTimeout(()=>{
          setSwt(false)
        } , 3000)
      }, (error) => {
          console.log(error.text);
      });
  };
   return (
    <section id='contact'>
        <div className={swt ? 'message active' : 'message'}>
           your message has been sent .
        </div>
      <h5>
        get in touch
      </h5>
      <h2>
        contact me
      </h2>

      <div className="container contact__container">
        <div className=" contact contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>
              email
            </h4>
            <h5>
              amirhp1370433@gmail.com
            </h5>
            <a href="mailto:amirsade1370433@gmail.com">send an email</a>

          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>
              messenger
            </h4>
            <h5>
              my whatsApp
            </h5>
            <a href="https://api.whatsapp.com/send?phone=989198247460" target='_blank'>send a message</a>
          </article>
          <article className="contact__option">
            <BiPhoneCall className='contact__option-icon'/>
            <h4>
              phone call
            </h4>
            <h5>
              +98-9198247460
            </h5>
            <a href="tel:+989198247460">make a call</a>

          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='your subject' name='subject' required />
          <div className="inputs">
            <input type="text" placeholder='your full name' name='name' required />
            <input type="text" placeholder=' phone:+98-9198247460' name='phone' required />
          </div>
          <input type="email" placeholder='your email' name='email' required />
          <textarea name="message" rows="7" placeholder='your message ' required></textarea>          
          <button type='submit' className='btn btn-primary'>
            send message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact