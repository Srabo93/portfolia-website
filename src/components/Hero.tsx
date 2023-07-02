const Hero = () => {
  return (
    <section className="hero min-h-screen hero-content text-center ">
      <div className="max-w-md">
        <figure className="avatar">
          <div className="w-48 rounded-full">
            <img
              src="https://picsum.photos/300"
              alt="Avatar of Armin Srabovic"
            />
          </div>
        </figure>
        <h1 className="mb-5 text-5xl font-bold ">Hello there</h1>
        <p className="mb-5 text-neutral">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </div>
    </section>
  );
};
export default Hero;
