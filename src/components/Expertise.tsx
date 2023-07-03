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
      <section className="grid grid-cols-3 gap-6 mt-10 mx-8 my-8 border-2 border-secondary">
        <article className="py-5 border-e-2 border-secondary">
          <div className="flex justify-center items-center pb-4">
            <img src={ComputerSVG} className="w-12 mr-6" />
            <h3 className="font-bold text-2xl text-secondary underline decoration-error underline-offset-8 decoration-8">
              Development
            </h3>
          </div>
          <p className="text-neutral text-center">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </article>
        <article className="py-5 border-e-2 border-secondary">
          <div className="flex justify-center items-center pb-4">
            <img src={ReactSVG} className="w-12 mr-6" />
            <h3 className="font-bold text-2xl text-secondary underline decoration-info underline-offset-8 decoration-8">
              Frontend
            </h3>
          </div>
          <p className="text-neutral text-center">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </article>
        <article className="py-5">
          <div className="flex justify-center items-center pb-4">
            <img src={NodeSVG} className="w-12 mr-6" />
            <h3 className="font-bold text-2xl text-secondary underline decoration-warning underline-offset-8 decoration-8">
              Backend
            </h3>
          </div>
          <p className="text-neutral text-center">
            Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint
            cillum sint consectetur cupidatat.
          </p>
        </article>
      </section>
    </>
  );
};

export default Expertise;
