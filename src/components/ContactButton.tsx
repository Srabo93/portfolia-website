import MessageSVG from "../assets/message.svg";
import LinkedInSVG from "../assets/linkedIn.svg";
import GithubSVG from "../assets/github.svg";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactButton = () => {
  const [show, setShow] = useState(false);
  return (
    <section className="flex flex-col fixed bottom-0 right-0 p-4">
      {show && (
        <>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://www.linkedin.com/in/arminsrabovic/"
            target="_blank"
          >
            <motion.button
              className="btn btn-accent btn-circle m-1 flex-1"
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <img src={LinkedInSVG} alt="Contact me on LinkedIn" />
            </motion.button>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://github.com/Srabo93"
            target="_blank"
          >
            <motion.button
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="btn btn-accent btn-circle m-1 flex-1"
            >
              <img src={GithubSVG} alt="Contact me on Github" />
            </motion.button>
          </motion.a>
        </>
      )}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="btn btn-accent btn-circle m-1 flex-1"
        onClick={() => setShow((state) => !state)}
      >
        <img src={MessageSVG} alt="Contact me button" />
      </motion.button>
    </section>
  );
};
export default ContactButton;
