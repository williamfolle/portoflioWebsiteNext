"use server";

import React from "react";
import { getErrorMessage, validateString } from "@/lib/utils";
import { error } from "console";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";

const resend=new Resend(process.env.RESEND_API_KEY);



export const sendEmail = async (formData: FormData) =>{
   const senderEmail = formData.get('senderEmail');
   const message = formData.get('message');
   

  if(!validateString(senderEmail)){
    return{
        error:"invalid Sender Email"
    }
  }
  
  if(!validateString(message)){
    return{
        error:"invalid Message"
    }
  }

  let data;
  try{
    data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: "willifolle@gmail.com",
        subject: "Message from contact form",
        reply_to: senderEmail as string,
        react: React.createElement(ContactFormEmail, {message: message as string , senderEmail: senderEmail as string })
        
    })
  } catch (error: unknown){

    return {
        error: getErrorMessage(error),
    }
  }

  return{
    data,
  };
  
};


