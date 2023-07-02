import MessageSVG from "../assets/message.svg";
import LinkedInSVG from "../assets/linkedIn.svg";
import GithubSVG from "../assets/github.svg";
import { useState } from "react";

const ContactButton = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="flex flex-col fixed bottom-0 right-0 p-4">
      {show && (
        <>
          <button className="btn btn-info btn-circle m-1 flex-1">
            <img src={LinkedInSVG} alt="Contact me on LinkedIn" />
          </button>
          <button className="btn btn-info btn-circle m-1 flex-1">
            <img src={GithubSVG} alt="Contact me on Github" />
          </button>
        </>
      )}
      <button
        className="btn btn-info btn-circle m-1 flex-1"
        onClick={() => setShow((state) => !state)}
      >
        <img src={MessageSVG} alt="Contact me button" />
      </button>
    </section>
  );
};
export default ContactButton;
