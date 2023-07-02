import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      className="flex flex-wrap items-center p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <article className="pw-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <h3 className="text-3xl font-bold pb-3 text-secondary">Project Name</h3>
        <p className="text-neutral">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </article>
      <article className="pw-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <h3 className="text-3xl font-bold pb-3 text-secondary">Project Name</h3>
        <p className="text-neutral">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </article>
      <article className="pw-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <h3 className="text-3xl font-bold pb-3 text-secondary">Project Name</h3>
        <p className="text-neutral">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </article>
      <article className="pw-full sm:w-1/2 md:w-1/4 lg:w-1/4 xl:w-1/4 p-4">
        <h3 className="text-3xl font-bold pb-3 text-secondary">Project Name</h3>
        <p className="text-neutral">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </article>
    </motion.section>
  );
};
export default Projects;
