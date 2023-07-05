import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      className="md:flex items-start text-center p-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <article className="sm:w-full md:w-3/4 lg:w-1/4 xl:w-1/4 p-4">
        <motion.a
          className="hover:italic cursor-pointer block"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          href="https://photo-gallery-d7cb4.web.app/"
          target="_blank"
        >
          <h3 className="text-2xl lg:text-3xl font-bold pb-3 text-secondary">
            Social Platform
          </h3>
        </motion.a>
        <p className="text-neutral">
          <span className="uppercase underline underline-offset-2 decoration-error decoration-2 ">
            Tech Stack:
          </span>{" "}
          React, MaterialUI, Zustand, Firebase{" "}
        </p>
      </article>
      <article className="sm:w-full md:w-3/4 lg:w-1/4 xl:w-1/4 p-4">
        <motion.a
          className="hover:italic cursor-pointer block"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          href="https://proshop-9112.onrender.com/"
          target="_blank"
        >
          <h3 className="text-2xl lg:text-3xl font-bold pb-3 text-secondary">
            E-Commerce
          </h3>
        </motion.a>
        <p className="text-neutral">
          <span className="uppercase underline underline-offset-2 decoration-error decoration-2 ">
            Tech Stack:
          </span>{" "}
          MERN, Redux Toolkit, RTK Query
        </p>
      </article>
      <article className="sm:w-full md:w-3/4 lg:w-1/4 xl:w-1/4 p-4">
        <motion.a
          className="hover:italic cursor-pointer block"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          href="https://documenter.getpostman.com/view/19017681/UVyoXeJR#edf40417-8721-4332-b33c-54e633e6f791"
          target="_blank"
        >
          <h3 className="text-2xl lg:text-3xl  font-bold pb-3 text-secondary">
            Bootcamps
          </h3>
        </motion.a>
        <p className="text-neutral">
          <span className="uppercase underline underline-offset-2 decoration-error decoration-2 ">
            Tech Stack:
          </span>{" "}
          Node / Express, MongoDB, Mongoose
        </p>
      </article>
      <article className="sm:w-full md:w-3/4 lg:w-1/4 xl:w-1/4 p-4">
        <motion.a
          className="hover:italic cursor-pointer block"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          href="https://e-shop-nodejs.onrender.com/"
          target="_blank"
        >
          <h3 className="text-2xl lg:text-3xl font-bold pb-3 text-secondary">
            E-Commerce
          </h3>
        </motion.a>
        <p className="text-neutral">
          <span className="uppercase underline underline-offset-2 decoration-error decoration-2 ">
            Tech Stack:
          </span>{" "}
          Node / Express, EJS, postgreSQL, Sequelize, Stripe{" "}
        </p>
      </article>
    </motion.section>
  );
};
export default Projects;
