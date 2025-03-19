import { useState } from "react";
import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [number, setNumber] = useState("");

  const [email, setemail] = useState("");

  const [subject, setsubject] = useState("");
  const [message, setmessage] = useState("");

  const [errMsg, seterrMsg] = useState("");

  const [successMsg, setsuccessMsg] = useState("");

  const emailvalidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (fullName === "") {
      seterrMsg("fullName is required");
    } else if (!emailvalidation(email)) {
      seterrMsg("Email is required");
    } else if (number === "") {
      seterrMsg("Phone Number is required");
    } else if (subject === "") {
      seterrMsg("Subject is required");
    } else if (message === "") {
      seterrMsg("Message is required");
    } else {
      try {
        const response = await fetch("http://localhost:9090/api/v1/add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullName,
            email,
            number,
            subject,
            message,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          setsuccessMsg(
            `Thank you ${fullName} for your message. Your message has been recorded successfully.`
          );
          seterrMsg("");
          setemail("");
          setmessage("");
          setNumber("");
          setsubject("");
          setFullName("");
        } else {
          seterrMsg(data.message || "Something went wrong. Please try again.");
        }
      } catch (error) {
        seterrMsg("Failed to send message. Please check your connection.");
      }
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
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />

          <div className="w-full lgl:w-[60%] h-full py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8  p-4 lgl:p-8 rounded-lg shadow-shadowOne ">
            <form className="w-full flex flex-col gap-4 lgl:gap-6 py-2 lgl:py-5 ">
              <div className="w-full flex flex-col lgl:flex-row  gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    {" "}
                    YOUR NAME
                  </p>
                  <input
                    onChange={(e) => setFullName(e.target.value)}
                    value={fullName}
                    className={`${
                      errMsg === "fullName is required" && "outline-designColor"
                    } contactInput`}
                    type="text"
                  />
                </div>

                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    {" "}
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setNumber(e.target.value)}
                    value={number}
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
