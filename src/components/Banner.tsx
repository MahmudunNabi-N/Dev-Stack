import bannerStack from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-300 grid-cols-1 items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-10 lg:py-20">

        {/* LEFT */}
        <div className="text-center lg:text-left">

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-[#10182d] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl">
            Build Your Ideal
            <br />

            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-162.5 text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl lg:mx-0 lg:mt-7">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

            <a href="#technologies">
              <button className="w-full cursor-pointer rounded-xl bg-linear-to-r from-orange-500 to-pink-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:scale-[1.02] sm:w-auto sm:text-base">
                Explore Technologies
              </button>
            </a>

            <a href="#technologies">
              <button className="w-full cursor-pointer rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm text-slate-700 transition hover:bg-slate-50 sm:w-auto sm:px-12 sm:text-base">
                Learn More
              </button>
            </a>

          </div>
        </div>

        {/* IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={bannerStack}
            alt="Development Stack"
            className="w-55 max-w-full object-contain sm:w-70 md:w-[320px] lg:w-97.5"
          />
        </div>

      </div>
    </section>
  );
};

export default Banner;