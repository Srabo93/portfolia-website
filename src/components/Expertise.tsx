import ComputerSVG from "../assets/computer.svg";
import ReactSVG from "../assets/react.svg";
import NodeSVG from "../assets/node.svg";

const Expertise = () => {
  return (
    <>
      <div className="divider">
        <h2 className="text-5xl my-5 font-mono font-bold text-center text-primary">
          Expertise
        </h2>
      </div>
      <section className="grid sm:grid-cols-3 md:grid-rows-3 md:grid-rows-none mt-10 my-4 mx-8 md:border-2 md:border-secondary">
        <article className="flex flex-wrap justify-center content-start p-5 md:border-e-2 md:border-secondary">
          <div className="flex sm:pb-2 md:pb-2 lg:pb-5">
            <img src={ComputerSVG} className="flex-initial w-12 mr-2" />
            <h3 className="flex-1 font-bold text-2xl text-secondary underline decoration-error underline-offset-8 decoration-8">
              Development
            </h3>
          </div>
          <p className="text-neutral text-center md:text-left p-2">
            Experienced in Javascript/Typescript and PHP. Cloud Platforms of
            Choice: Firebase and AWS
          </p>
        </article>
        <article className="flex flex-wrap justify-center content-start p-5 md:border-e-2 md:border-secondary">
          <div className="flex sm:pb-2 md:pb-2 lg:pb-5">
            <img src={ReactSVG} className="flex-initial w-12 mr-2" />
            <h3 className="flex-1 font-bold text-2xl text-secondary underline decoration-info underline-offset-8 decoration-8">
              Frontend
            </h3>
          </div>
          <p className="text-neutral  text-center md:text-left p-2">
            HTML, CSS, TailwindCSS, MUI, JS, Redux, React and NextJS frameworks
          </p>
        </article>
        <article className="flex flex-wrap justify-center content-start p-5">
          <div className="flex sm:pb-2 md:pb-2 lg:pb-5">
            <img src={NodeSVG} className="flex-initial w-12 mr-2" />
            <h3 className="flex-1 font-bold text-2xl text-secondary underline decoration-warning underline-offset-8 decoration-8">
              Backend
            </h3>
          </div>
          <ul className="text-neutral text-center md:text-left  p-2">
            <li>Languages: NodeJS, PHP</li>
            <li>Frameworks: ExpressJS, Symfony API-Platform</li>
            <li>Databases: postgreSQL, MongoDB</li>
          </ul>
        </article>
      </section>
    </>
  );
};

export default Expertise;
