import { useState } from 'react';
// Email JS
import emailjs from 'emailjs-com';
// Css
import './contact.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [done, setDone] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    emailjs.send('service_1i0sf7o', 'template_64e6erm', {
      user_subject: subject,
      user_name: name,
      message: message,
      user_email: email
    }, 'ybBKckugggjG2VjTh')
      .then(() => {
        setDone('Thank you...');
          setTimeout(() => {
            setDone('');
            setName('');
            setMessage('');
            setEmail('');
            setSubject('');
          }, 3000)
      }, () => {
        setError('Something went wrong...');
        setTimeout(() => {
          setError('');
          setName('');
            setMessage('');
            setEmail('');
            setSubject('');
        }, 3000)
      });
  }

  return (
    <div className='contact'>
      <div className="contact-left">
        <form onSubmit={handleSubmit}>
          <h4>Send me email</h4>
          {done && <p className='done-p'>{done}</p>}
          {error && <p className='error-p'>{error}</p>}
          <input 
            type='text'
            onChange={({target}) => setName(target.value)}
            value={name}
            placeholder='Name' 
            name='user_name' 
          />
          <input 
            type='text'
            onChange={({target}) => setSubject(target.value)} 
            value={subject}
            placeholder='Subject' 
            name='user_subject' 
          />
          <input 
            type='text'
            onChange={({target}) => setEmail(target.value)} 
            value={email}
            placeholder='Email'
            name='user_email' 
          />
          <textarea 
            placeholder='Message' 
            name='message'
            onChange={({target}) => setMessage(target.value)}
            value={message}
          >

          </textarea>
          <input type='submit' value='Submit' />
        </form>
      </div>
      <div className="contact-right">
        <a href='https://github.com/datodat' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <i className="fa-brands fa-square-github"></i>
          gitHub
        </a>
        <a href='https://www.linkedin.com/in/dato-kevlishvili-8365131b9/' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <i className="fa-brands fa-linkedin"></i>
          linkedin
        </a>
        <a href='https://www.facebook.com/dato.kevlishvili.12/' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <i className="fa-brands fa-square-facebook"></i>
          facebook
        </a>
        <a href='mailto:dato.kevlishvili.1990@gmail.com' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <i className="fa-solid fa-envelope"></i>
          email
        </a>
        <a href='tel:597066910' 
          target='_blank' 
          rel='noopener noreferrer'
        >
          <i className="fa-solid fa-square-phone"></i>
          phone
        </a>
      </div>
    </div>
  );
}

export default Contact;