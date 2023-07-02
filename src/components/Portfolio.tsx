const Portfolio = () => {
  return (
    <>
      <div className="divider">
        <h2 className="text-5xl my-5 font-bold text-center text-primary">
          Portfolio
        </h2>
      </div>
      <section className="flex items-center my-5">
        <article className="w-1/4 p-2">
          <img
            className="mask mask-parallelogram-2"
            src="https://picsum.photos/200"
            alt="project image"
          />
        </article>
        <article className="w-3/4 p-2">
          <h3 className="text-3xl font-bold pb-3 text-secondary">
            Project Name
          </h3>
          <p className="text-neutral">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </article>
      </section>
    </>
  );
};
export default Portfolio;
