import { useState } from "react";

type Technology = {
  id: number;
  name: string;
  icon: string;
  description: string;
  category: string;
  level: string;
  rating: number;
  badge: string;
  badgeColor: string;
};

type ToastData = {
  message: string;
  type: "success" | "info";
};

const technologies: Technology[] = [
  {
    id: 1,
    name: "React",
    icon: "⚛",
    description:
      "A declarative, component-based JavaScript library for building modern user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Popular",
    badgeColor: "bg-sky-50 text-sky-500",
  },

  {
    id: 2,
    name: "Vue.js",
    icon: "V",
    description:
      "An approachable, performant, and versatile framework for building web user interfaces.",
    category: "Frontend",
    level: "Beginner-Friendly",
    rating: 4.8,
    badge: "Versatile",
    badgeColor: "bg-emerald-50 text-emerald-500",
  },

  {
    id: 3,
    name: "Svelte",
    icon: "S",
    description:
      "Cybernetically enhanced web apps with compile-time reactivity and zero virtual DOM overhead.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Fast",
    badgeColor: "bg-orange-50 text-orange-500",
  },

  {
    id: 4,
    name: "Next.js",
    icon: "N",
    description:
      "The React framework for full-stack web applications with hybrid static and server rendering.",
    category: "Frontend",
    level: "Intermediate",
    rating: 4.9,
    badge: "",
    badgeColor: "",
  },

  {
    id: 5,
    name: "Node.js",
    icon: "JS",
    description:
      "An asynchronous event-driven JavaScript runtime built on Chrome's V8 engine.",
    category: "Backend",
    level: "Intermediate",
    rating: 4.8,
    badge: "Standard",
    badgeColor: "bg-emerald-50 text-emerald-500",
  },

  {
    id: 6,
    name: "PostgreSQL",
    icon: "🐘",
    description:
      "A powerful, open-source object-relational database system with proven reliability.",
    category: "Database",
    level: "Intermediate",
    rating: 4.9,
    badge: "Top SQL",
    badgeColor: "bg-blue-50 text-blue-500",
  },

  {
    id: 7,
    name: "Redis",
    icon: "▰",
    description:
      "In-memory data structure store used as a high-speed database, cache, and message broker.",
    category: "Database",
    level: "Intermediate",
    rating: 4.8,
    badge: "Cache",
    badgeColor: "bg-red-50 text-red-500",
  },

  {
    id: 8,
    name: "JavaScript",
    icon: "JS",
    description:
      "The versatile, ubiquitous scripting language powering dynamic behavior across the web.",
    category: "Language",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Ubiquitous",
    badgeColor: "bg-amber-50 text-amber-600",
  },

  {
    id: 9,
    name: "TypeScript",
    icon: "TS",
    description:
      "A strongly typed programming language that builds on JavaScript for robust tooling.",
    category: "Language",
    level: "Intermediate",
    rating: 4.9,
    badge: "Essential",
    badgeColor: "bg-sky-50 text-sky-500",
  },


  {
    id: 10,
    name: "Java",
    icon: "☕",
    description:
      "A popular object-oriented programming language used for backend, enterprise, and application development.",
    category: "Language",
    level: "Intermediate",
    rating: 4.8,
    badge: "Popular",
    badgeColor: "bg-orange-50 text-orange-500",
  },

  {
    id: 11,
    name: "Tailwind CSS",
    icon: "TW",
    description:
      "A utility-first CSS framework for rapidly building modern and responsive user interfaces.",
    category: "Styling",
    level: "Beginner-Friendly",
    rating: 4.9,
    badge: "Utility",
    badgeColor: "bg-cyan-50 text-cyan-500",
  },

  {
    id: 12,
    name: "Docker",
    icon: "D",
    description:
      "A platform for developing, shipping, and running applications inside lightweight containers.",
    category: "DevOps",
    level: "Intermediate",
    rating: 4.8,
    badge: "Containers",
    badgeColor: "bg-blue-50 text-blue-500",
  },
];

const TechnologySection = () => {
  const [stack, setStack] = useState<Technology[]>([]);

  const [toast, setToast] = useState<ToastData | null>(null);


  const addToStack = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      setToast({
        message: `${technology.name} is already in your stack.`,
        type: "info",
      });

      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    setToast({
      message: `${technology.name} added to your stack!`,
      type: "success",
    });
  };


  const removeFromStack = (technologyId: number) => {
    setStack((previousStack) =>
      previousStack.filter(
        (technology) => technology.id !== technologyId
      )
    );
  };

  return (
    <section className="bg-white py-6">

      <div className="mx-auto max-w-7xl px-6 sm:py-12 lg:grid-cols-2 lg:gap-8">

        <div className="mb-7">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#10182d] sm:text-4xl">
            Explore the{" "}
            <span className="bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>

          <p className="mt-2 text-sm text-slate-400">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_190px]">

          {/*CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">

            {technologies.map((technology) => {
              const isAdded = stack.some(
                (item) => item.id === technology.id
              );

              return (
                <div
                  key={technology.id}
                  className="flex min-h-47.5 flex-col rounded-xl border border-slate-100 bg-white p-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)] transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
                >

                  <div className="flex items-start justify-between gap-2">


                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${
                        technology.name === "React"
                          ? "text-sky-400"
                          : technology.name === "Vue.js"
                            ? "text-emerald-500"
                            : technology.name === "Svelte"
                              ? "text-orange-500"
                              : technology.name === "Next.js"
                                ? "bg-black text-white"
                                : technology.name === "Node.js"
                                  ? "text-lime-500"
                                  : technology.name === "PostgreSQL"
                                    ? "text-sky-600"
                                    : technology.name === "Redis"
                                      ? "text-red-500"
                                      : technology.name === "JavaScript"
                                        ? "bg-yellow-400 text-black"
                                        : technology.name === "TypeScript"
                                          ? "bg-blue-600 text-white"
                                          : technology.name === "Java"
                                            ? "text-red-500"
                                            : technology.name ===
                                                "Tailwind CSS"
                                              ? "text-cyan-500"
                                              : "bg-blue-500 text-white"
                      }`}
                    >
                      {technology.icon}
                    </div>


                    {technology.badge && (
                      <span
                        className={`rounded-full px-2 py-1 text-[9px] font-medium ${technology.badgeColor}`}
                      >
                        {technology.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-sm font-bold text-[#10182d]">
                    {technology.name}
                  </h3>

                
                  <p className="mt-1.5 line-clamp-3 text-[10px] leading-relaxed text-slate-400">
                    {technology.description}
                  </p>

                  <div className="mt-auto pt-3">

        
                    <div className="mb-3 flex items-center justify-between gap-1 text-[9px]">
                      <span className="rounded bg-slate-50 px-2 py-1 text-slate-500">
                        {technology.category}
                      </span>

                      <span className="text-slate-400">
                        {technology.level}
                      </span>

                      <span className="whitespace-nowrap text-amber-500">
                        ★ {technology.rating}
                      </span>
                    </div>

                    <button
                      onClick={() => addToStack(technology)}
                      className={`w-full rounded-md px-3 py-2 text-[10px] font-medium text-white transition ${
                        isAdded
                          ? "cursor-default bg-emerald-500"
                          : "cursor-pointer bg-[#10182d] hover:bg-slate-700"
                      }`}
                    >
                      {isAdded
                        ? "Added to Stack ✓"
                        : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* YOUR STACK */}
          <aside className="h-fit rounded-xl border border-slate-100 bg-white p-4 shadow-[0_2px_10px_rgba(15,23,42,0.03)]">

            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-[#10182d]">
                Your Stack
              </h3>

              <span className="rounded-full bg-slate-100 px-2 py-0.5 text-[9px] text-slate-500">
                {stack.length}
              </span>
            </div>

            <p className="mt-1 text-[10px] text-slate-400">
              {stack.length === 0
                ? "No technologies selected yet."
                : `${stack.length} technologies selected.`}
            </p>

            
            {stack.length === 0 ? (
              <div className="mt-4 flex min-h-23.75 items-center justify-center rounded-lg border border-dashed border-slate-200 px-3 text-center">
                <p className="text-[10px] leading-relaxed text-slate-300">
                  Your stack is empty.
                  <br />
                  Add technologies to get started.
                </p>
              </div>
            ) : (

              /* STACK ITEMS */

              <div className="mt-4 space-y-2">
                {stack.map((technology) => (
                  <div
                    key={technology.id}
                    className="flex items-center gap-2 rounded-lg border border-slate-100 bg-slate-50 p-2"
                  >
                
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-white text-[9px] font-bold">
                      {technology.icon}
                    </span>

                  
                    <span className="min-w-0 flex-1 truncate text-[10px] font-semibold text-slate-600">
                      {technology.name}
                    </span>

                    
                    <button
                      onClick={() =>
                        removeFromStack(technology.id)
                      }
                      className="cursor-pointer text-xs text-slate-400 transition hover:text-red-500"
                    >
                      ×
                    </button>
                  </div>
                ))}

            
                <button
                  onClick={() => setStack([])}
                  className="mt-2 w-full cursor-pointer rounded-md border border-slate-200 py-2 text-[10px] font-medium text-slate-500 transition hover:border-red-200 hover:text-red-500"
                >
                  Clear Stack
                </button>
              </div>
            )}
          </aside>
        </div>
      </div>

      {toast && (
        <div
          role="status"
          className="fixed right-5 top-5 z-50 flex max-w-[calc(100vw-40px)] items-center gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3 shadow-xl"
        >
          {/* TOAST ICON */}
          <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-sm ${
              toast.type === "success"
                ? "bg-emerald-100 text-emerald-600"
                : "bg-blue-100 text-blue-600"
            }`}
          >
            {toast.type === "success" ? "✓" : "i"}
          </span>

          {/* MESSAGE */}
          <p className="text-xs font-medium text-slate-600">
            {toast.message}
          </p>

          {/* CLOSE */}
          <button
            onClick={() => setToast(null)}
            className="cursor-pointer text-slate-400 transition hover:text-slate-700"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
};

export default TechnologySection;