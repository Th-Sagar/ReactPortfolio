import { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [username, setusername] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");

  const [email, setemail] = useState("");

  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const [errMsg, seterrMsg] = useState("");

  const [successMsg, setsuccessMsg] = useState("");

  const emailvalidation=()=>{
    return String(email).toLocaleLowerCase().match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
  }

  const handleSend = (e) => {
    e.preventDefault();
    if(username===''){
      seterrMsg("Username is required")
    }else  if (!emailvalidation(email)) {
      seterrMsg("Email is required");
    } else if (phoneNumber === "") {
      seterrMsg("Phone Number is required");
    } else if (subject === "") {
      seterrMsg("Subject is required");
    } else if (message === "") {
      seterrMsg("Message is required");
    } else {
      setsuccessMsg(`Thank you ${username} for your message, Your message has been recorded successfullly.`);
      seterrMsg("");
      setemail("");
      setmessage("");
      setphoneNumber("");
      setsubject("");
      setusername("");
    }
  };
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      {" "}
      <div className="flex justify-center items-center text-center">
        <Title title="CONTACT" des="Contact With Me" />
      </div>
      <div className="w-full ">
        <div className="w-full h-auto flex justify-between">
          <ContactLeft />

          <div className="w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne ">
            <form className="w-full flex flex-col gap-6 py-5 ">
              {errMsg ? (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              ) : null}

              {successMsg ? (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              ) : null}

              <div className="w-full flex gap-10">
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    {" "}
                    YOUR NAME
                  </p>
                  <input
                    onChange={(e) => setusername(e.target.value)}
                    value={username}
                    className={`${
                      errMsg === "Username is required" && "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>

                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    {" "}
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setphoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      errMsg === "Phone Number is required" &&
                      "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {" "}
                  Email Address
                </p>
                <input
                  onChange={(e) => setemail(e.target.value)}
                  value={email}
                  className={`${
                    errMsg === "Email is required" && "outline-designColor"
                  } contactInput`}
                  type="email"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {" "}
                  Subject
                </p>
                <input
                  onChange={(e) => setsubject(e.target.value)}
                  value={subject}
                  className={`${
                    errMsg === "Subject is required" && "outline-designColor"
                  } contactInput`}
                  type="text"
                />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {" "}
                  Your Message
                </p>
                <textarea
                  onChange={(e) => setmessage(e.target.value)}
                  value={message}
                  className={`${
                    errMsg === "Message is required" && "outline-designColor"
                  } contactInput`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>

              <div className="w-full">
                <button
                  onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                  Send Message
                </button>
              </div>

              {errMsg ? (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {errMsg}
                </p>
              ) : null}

              {successMsg ? (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-green-500 text-base tracking-wide animate-bounce">
                  {successMsg}
                </p>
              ) : null}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
