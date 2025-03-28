import React from "react";
import ContactUsForm from "../../ContactUs/ContactUsForm";
const ContactForm = () => {
  return (
    <div className="flex flex-col justify-center items-center  w-11/12 mx-auto max-w-maxContent pt-20">
      <h1 className=" text-richblack-5 text-3xl font-bold mx-auto text-center">
        Get in Touch
      </h1>
      <p className=" text-richblack-300 py-3 mb-10  mx-auto text-center">
        We'd loved to here for you, Please fill out this form
      </p>
      <div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactForm;
