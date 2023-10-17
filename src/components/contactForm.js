import React from 'react';
import '../components/contactForm.css'

const ContactForm = () => {
  return (
    <>
    <div className='container'>
   
       
       <div className="client-care-container">
       <h1 className='highlights-text'>I am delighted to have the opportunity to contribute to the success of your esteemed business.</h1>
           <form className="customer-care-form">
               <label for="motor-category">Position</label>
               <select id="unitModel" name="category" className="customer-concern-list" required>
                   <option value="" disabled>------------</option>
                   <option>Junior Full Stack Web Developer</option>
                   <option>Process Engineer</option>
                   <option>Facebook Ads Manager</option>
                  
               </select>
               <label for="MeetingSched">Meeting Schedule:</label>
               <input type="date" className="mDate" id="date"required></input>
               <label for="time">Schedule Time:</label>
               <input type="time" className="mTime" id="time"required></input>
  
               <br></br>

               <div className="personal-info-container">
                   <div className="labelNames">
                       <div className="names">First Name</div>
                       <div className="names">Middle Name</div>
                       <div className="names">Last Name</div>
                   </div>
                   <div className="nameInput">
                       <input type="text" className="CCfirstName" id="firstName" placeholder="Juan" required></input>
                       <input type="text" className="CCmiddleName" id="middleName" placeholder="Tamad" required></input>
                       <input type="text" className="CClastName" id="lastName" placeholder="Dela Cruz" required></input>
                   </div>

                   <div className="lineSep"></div>
                   
                   <div className="emailContainer">
                       <div className="eAddress">Email Address:</div>
                       <div className="mobileNumber">Mobile Number:</div>
                   </div>
                   <div className="emailInputContainer">
                       <input type="text" id="email" className="emailAddress" placeholder="Ex.juandelacruz@gmail.com" required></input>
                       <input type="number" id="mobileNum" className="mobileNumberInput" placeholder="09012332345" required></input>
                   </div>

                   <div className="lineSep"></div>

                   <div className="houseAddressContainer">
                       <div className="fullAddress">House Number|Barangay|Municipality|Province</div>
                       <input type="text" className="addressInput" id="address" placeholder="123 Barangay Tibay Tondo Manila"required></input>
                   </div>
               </div> 

               <br></br>

               <button id="pms-submit-button" className="psubmitButton" >Submit Form</button>
           </form>
       </div>
       </div>
    
    </>
  )
}

export default ContactForm;