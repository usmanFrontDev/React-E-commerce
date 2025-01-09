import React, { useState } from 'react'

function Contact() {

const [user, setuser] = useState(
  {
    fname: '',
    lname: '',
    email: '',
    subject: '',
    message: '',
  }
)

const handleform = (e)=>{
  let name = e.target.name
  setuser((prev)=> ({...prev, [name]:e.target.value}))
  // console.log(user)
}
console.log(user)


const validateEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const send = async (e)=>{
  const{fname, lname, email, subject, message} = user
  e.preventDefault()
  if (!fname || !lname || !email || !subject || !message) {
    alert("Please fill all required fields.");
    return;
  }
  if (!validateEmail(email)) {
    alert('Please enter a valid email address.');
    return;
  }
  const  option = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      fname, lname, email, subject, message
    })
  }

  const sendToBackEnd = await  fetch(
    'https://react-e-commerce-app-974e0-default-rtdb.firebaseio.com/Message_From_E-commerce.json', option
  )

  if(send){
    alert('Message Sent')
  }
  else{
    alert('Message dont sent due to some issue')
  }
  setuser( {
    fname: '',
    lname: '',
    email: '',
    subject: '',
    message: '',
  })

}


  return (
    <div className='contact_main'>
      
      <form method='POST'>
       <div className="inputfeild">
       <label htmlFor="fname">
          FIrst Name
        </label>
        <input required id='fname' name='fname'  value={user.fname} type="text" placeholder='Enter Your First Name' onChange={handleform} />
       </div>
       <div className="inputfeild">
       <label htmlFor="lname">
          Last Name
        </label>
        <input required id='lname' name='lname' value={user.lname} type="text" placeholder='Enter Your Last Name' onChange={handleform}/>
        </div>
        <div className="inputfeild">
       <label htmlFor="email">
          Email
        </label>
        <input required id='email' name='email' value={user.email} type='email' placeholder='Enter Your Email Adress' onChange={handleform}/>
        </div>
        <div className="inputfeild">
       <label htmlFor="subject">
          Subject
        </label>
        <input id='subject' name='subject' value={user.subject} type="text" placeholder='Subject please' onChange={handleform}/>
        </div>
        <div className="inputfeild">
       <label htmlFor="message">
          Message
        </label>
        <textarea id='message' name='message'  rows="5" value={user.message} cols="40"  type="text" placeholder='Enter Your Message' onChange={handleform}/>
        </div>
        <button type='submit' onClick={send}> Submit</button>
      </form>

    </div>
  )
}

export default Contact