"use client"

import React from 'react'
import { useState } from 'react'
import * as yup from "yup"
import DisplayContact3 from "@/app/components/displayContact3"
import {onChangeEventType, contactTypes} from "@/types/form"


export default function ContactForm3 ()
{

const [contactInfo, setContactInfo] = useState<contactTypes>({userName: "", email: "", phone: 0, onmessage:""});
//const {userName, email, phone, onmessage} = contactInfo;

const [errors, setError ] = useState<string[]>([])

const contactInfoSchema = yup.object().shape({
  userName: yup.string(). required(). min(5). max(10),
  email: yup.string(). email(). required(),
  phone: yup.number(). required(),
  onmessage: yup.string(). required(),
})

const [successMessage, setSuccessMessage] = useState("");

const [contactList, setContactList]=useState<contactTypes[]>([])

const onChangeHandler = (event: onChangeEventType) => {
let userDetails = {...contactInfo, [event.target.name]: event.target.value}
      setContactInfo(userDetails);
  };
console.log("ContactInformation", contactInfo)


const onClickHandler = async (event: React.FormEvent) => {
    event.preventDefault();  

    try {
      const result = await contactInfoSchema.validate(contactInfo,{ abortEarly: false })
      console.log(result);
      
       
      if (!result) {
        return 
      }
      else {setSuccessMessage("Congratulations!!! Your data has been saved")}
      
      let newContactList:contactTypes[] = [...contactList, contactInfo]
      setContactList(newContactList)
  
      setError([])
      setContactInfo({
        userName:"",
        email:"",
        phone:0,
        onmessage:""
      })
     } catch (err:any) {

      setError(err.errors)
      let errorsObject:any = {}
      err.inner.forEach((err:any) => {
        errorsObject[err.path] = err.errors;
    });

    console.log(errorsObject);

       console.log("error",err.errors);

       
     }
   
    
  }

  









return (
    <>
   <hr /> 
   



   <div className="border-2 text-black border-gray-300 p-2 w-full rounded"><center style={{backgroundColor: 'lightpink'}} ><h1>This is 3rd Contact Form</h1></center></div><hr />
    
    <form style={{backgroundColor: 'lightpink'}} className="max-w-md mx-auto my-8 p-8 bg-white rounded shadow-md">
      

      <div className="mb-4" >
        <label  htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>       
       
        <input
          value={contactInfo.userName}   
          onChange={onChangeHandler}
          type="text"
          id="name"
          name="userName" // changed from 'name' to 'userName'
          className="border-2 text-gray-700 border-gray-300 p-2 w-full rounded"
          placeholder="Your Name"
        />

      </div>


      <div className="mb-4"><label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        
        <input
        //for recieving Email value, related handling tag is placed down..
          value={contactInfo.email} 
          onChange={onChangeHandler}
          type="email"
          id="email"
          name="email"
          className="border-2 text-gray-700 border-gray-300 p-2 w-full rounded"
          placeholder="Your Email"
        />
      </div>

      <div className="mb-4" >
        <label  htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Phone No:</label>       
       
        <input   
          value={contactInfo.phone} 
          onChange={onChangeHandler}
          type="number"
          id="number"
          name="phone" 
          className="border-2 text-gray-700 border-gray-300 p-2 w-full rounded"
          placeholder="Your phone number"
        />

      </div>

      <div className="mb-4"><label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
        
      <textarea
        value={contactInfo.onmessage} 
        onChange={onChangeHandler}
        id="message"
        name="onmessage"
        rows={4}
        className="border-2 text-gray-700 border-gray-300 p-2 w-full rounded"
        placeholder="Your Message"
      ></textarea>

      </div>
      {errors.map((item, index)=>{
          return (
            <div key={index} style={{color:"red"}}>
              <h1>{item}</h1>
            </div>
            
          )
        })}
             <div>
              {successMessage}
              </div>
      <div className="mb-4">
        <button  onClick={onClickHandler} type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
        Submit
         </button>
          </div>
    </form>
        <div>
         <hr />
         <form style={{backgroundColor: 'lightgreen'}} className="max-w mx-auto my-8 p-8 bg-gray rounded shadow-md opacity-75 bg-red-400">
          
           <div className="border-2 text-black border-black p-2 w-full rounded"><center style={{backgroundColor: 'darkgreen'}}><h1>Your Form Data Saved Below</h1></center>
           </div>
              <hr /> <br /> 
           <DisplayContact3 contactInfos={contactList} />  
        
        
        
         </form>
     </div>
  </>
  )
}