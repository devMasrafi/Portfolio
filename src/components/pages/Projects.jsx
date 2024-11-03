import React, { useState } from "react";

const Projects = () => {
  const [inputField, setInputField] = useState({
    fullName:"",
    emailAdd: "",
    subject:"",
    message: "",
  })


  const onchangeHandler = (e) =>{
    setInputField({
      ...inputField, [e.target.name]: e.target.value

    })
  }

  const onSubmitHandler = (e) =>{
    e.preventDefault()
    console.log(inputField);
    
  }

  return (
    <>
      <section className="bg-bg-main-col h-screen">
        <div className="pt-24 ">
          <form
            onSubmit={onSubmitHandler}
            className="bg-formBg h-[30rem] w-[31rem] rounded-2xl mx-auto p-4 font-inter "
            name="contact" method="POST" data-netlify="true"
          >
            <div>
              <div className="flex justify-between items-center ">
                <div className="flex flex-col">
                  <label htmlFor="fullName" className="capitalize text-sec-color ">
                    name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={inputField.fullName}
                    onChange={onchangeHandler}
                    className="py-2 rounded-md outline-none"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="emailAdd" className="capitalize text-sec-color">email</label>
                  <input
                    type="email"
                    name="emailAdd"
                    value={inputField.emailAdd}
                    onChange={onchangeHandler}
                    className=" py-2 rounded-md outline-none"
                  />
                </div>
              </div>
              <div className="py-3 flex flex-col ">
                <label htmlFor="messageSubject" className="capitalize text-sec-color">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="messageSubject"
                  value={inputField.subject}
                  onChange={onchangeHandler}
                  className="py-2 rounded-md outline-none"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="contactMessage" className="capitalize pb-2 text-sec-color ">
                  message
                </label>
                <textarea
                  name="message"
                  id="contactMessage"
                  rows={5}
                  value={inputField.message}
                  onChange={onchangeHandler}
                  className="rounded-md outline-none"
                />
              </div>
            </div>
            {/* btn */}
            <div className="text-center font-inter">
              <div className="py-4">
                <button className="bg-sec-color drop-shadow-lg py-2 w-full rounded-md uppercase" type="submit"
                >
                 send
                </button>
              </div>
              <button className="text-sec-color">close</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Projects;
