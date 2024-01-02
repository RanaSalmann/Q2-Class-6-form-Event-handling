"use client"
//this is the First Example of Form handling.
//where we will define useState each variables, will make each sub functions of defined variables for reciving input, then add a each handle in html tag 
//then will define display tag for output of our entry
//will make a page for take a input
//will make a type of onchangeeventtype and sub functions event type
//done!!!
import DisplayContact1 from "../displayContact1";
import {onChangeEventType} from "@/types/componentsType";
import React, { useState } from 'react';
    //First, we made a useState
//import the all necessary files first as Above.
//then First make the const useState hook variables of userName, Email and Message in function and above return.
//1. make a function

//First, we made a useState variables of userName, email, onmessage.
function ContactForm () {
  const [userName, setUserName]=useState<string>("")
  const [email, setEmail]=useState<string>("")
  const [onmessage, setOnmessage] = useState<string>("")


//then we made each sub function of specified 3 names Handlers which we define the variables in main function.

//1. userName function:-
  const getUserNameHandler = (event: onChangeEventType) => {
    console.log(getUserNameHandler, event.target.value);
    setUserName(event.target.value)}
  
  //2. email function:-
  const onChangeEmailHandler = (event: onChangeEventType) => {
    console.log(onChangeEmailHandler, event.target.value);
    setEmail(event.target.value)}

  //3. onMessage function:-
    const onChangeMsgHandler = (event: onChangeEventType) => {
      console.log(onChangeMsgHandler, event.target.value);
        setOnmessage(event.target.value)}

  //4. in the end, we make a form submitted button function of "onClickHandle" for recieve the input      
    const onClickHandler = ()=>{
    alert("Form Submitted")

  }
//no we are giving html codes for displaying endUser Form in the return..
//now we will call all the above specified functions in the specified tags..
  return (
    <>
    <hr /> <div className="border-2 text-black border-gray-300 p-2 w-full rounded"><center style={{backgroundColor: 'lightseagreen'}} ><h1>This is 1st Contact Form</h1></center></div><hr />
    <form style={{backgroundColor: 'lightseagreen'}} className="max-w-md mx-auto my-8 p-8 bg-white rounded shadow-md">
      
    
      <div className="mb-4">
        <label  htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name:</label>       
       
        <input  
        //for reciving userName value, related handling tag is placed down..
          onChange={getUserNameHandler}
          type="text"
          id="name"
          name="name"
          className="border-2 text-gray-700 border-gray-300 p-2 w-full rounded"
          placeholder="Your Name"
        />
      </div>


      <div className="mb-4"><label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
        
        <input
        //for recieving Email value, related handling tag is placed down..
          onChange={onChangeEmailHandler}
          type="email"
          id="email"
          name="email"
          className="border-2 text-gray-700 border-gray-300 p-2 w-full rounded"
          placeholder="Your Email"
        />
      </div>


      <div className="mb-4"><label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
        
        <textarea
        //for recieving onMessage value, related handling tag is placed down..
        onChange={onChangeMsgHandler}
          id="message"
          name="message"
          rows={4}
          className="border-2 text-gray-700 border-gray-300 p-2 w-full rounded"
          placeholder="Your Message"
        ></textarea>
      </div>


      <div className="flex justify-end">
        <button
        //for Submit Button value, related handling tag is placed down..
          onClick={onClickHandler}
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue">
          Submit
        </button>
      </div>

    </form>
    <div style={{backgroundColor: 'lightseagreen'}}  className="border-2 text-gray-700 border-gray-300 p-2 w-full rounded">
    <DisplayContact1 contactInfo={{userName, email, onmessage}}/>
    </div>
    </>
  )}
//now we want to display the input result in html page thats y we declare the displaypage and its property "contactInfo" and pass the related variable names

 export default ContactForm;