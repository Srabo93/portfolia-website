import { motion } from "framer-motion";
import TypeWriterEffect from "./TypeWriterEffect";

const Hero = () => {
  return (
    <section className="hero min-h-screen hero-content text-center ">
      <div className="max-w-md">
        <TypeWriterEffect text="Deeveloper is loading ....." />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
        >
          <figure className="avatar">
            <div className="w-48 rounded-full shadow-md shadow-accent">
              <img
                src="https://picsum.photos/300"
                alt="Avatar of Armin Srabovic"
                loading="lazy"
              />
            </div>
          </figure>
          <h1 className="my-5 text-5xl font-bold font-mono text-primary">
            Hello there
          </h1>
          <p className="text-lg mb-5 text-neutral">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;
