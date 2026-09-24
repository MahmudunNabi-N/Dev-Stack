import bannerStack from '../assets/banner-stack.png'
const Banner = () => {
    return (
       <section className="mx-auto max-w-[1280px] px-6 flex justify-between items-center sm:py-12 lg:grid-cols-2 lg:gap-8 lg:py-20">
      <div className="max-w-5xl">
        {/* Heading */}
        <h1 className="text-5xl font-extrabold leading-tight text-[#10182d] md:text-6xl lg:text-7xl">
          Build Your Ideal
          <br />

          <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            Development Stack
          </span>
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-4xl text-xl leading-relaxed text-slate-600 md:text-2xl">
          Explore frontend, backend, database, and tooling options,
          compare them side by side, and put together the stack that fits
          your next project.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex gap-5">
         <a href="#technologies" className="text-white"> <button className= "cursor-pointer rounded-xl bg-linear-to-r from-orange-500 to-pink-500 px-6 py-4 text-lg font-semibold text-white shadow-sm transition hover:scale-105">
            Explore Technologies
          </button></a>

         <a href="#technologies" className="text-black"> <button className="cursor-pointer rounded-xl border border-slate-200 bg-white px-16 py-4 text-lg text-slate-700 transition hover:bg-slate-50">
            Learn More
          </button></a>
        </div>
      </div>
        {/* Image */}

        <div className="sm:py-12 lg:grid-cols-2 lg:gap-8 lg:py-20">
            <img src={bannerStack} alt="Banner" className='' />
        </div>


    </section>
    );
};

export default Banner;