import Projects from "./Projects";

const Portfolio = () => {
  return (
    <>
      <div className="divider">
        <h2 className="text-5xl my-5 font-mono font-bold text-center text-primary">
          Portfolio
        </h2>
      </div>
      <p className="text-lg text-center text-neutral py-5">
        Here are some of my latest Projects, you can find more on{" "}
        <span className="underline text-accent hover:italic">
          <a href="https://github.com/Srabo93" target="_blank">
            Github
          </a>
        </span>
      </p>
      <Projects />
    </>
  );
};
export default Portfolio;
