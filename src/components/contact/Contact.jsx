import Title from "../layouts/Title";
import ContactLeft from "./ContactLeft";

const Contact = () => {

    const handleSend =(e)=>{
        e.preventDefault();
    }
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
            <form className="w-full flex flex-col gap-6 py-2 ">
              <div className="w-full flex gap-10">
                <div className="w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    {" "}
                    YOUR NAME
                  </p>
                  <input className="contactInput" type="text" />
                </div>

                <div className="w-1/2 flex flex-col">
                  <p className="text-sm text-gray-400 uppercase tracking-wide">
                    {" "}
                    Phone Number
                  </p>
                  <input className="contactInput" type="text" />
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {" "}
                  Email Address
                </p>
                <input className="contactInput" type="email" />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {" "}
                  Subject
                </p>
                <input className="contactInput" type="text" />
              </div>

              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-400 uppercase tracking-wide">
                  {" "}
                 Your Message
                </p>
                <textarea  className="contactTextArea" cols="30" rows="8"></textarea>
              </div>

              <div className="w-full">
                <button onClick={handleSend} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
                    Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
