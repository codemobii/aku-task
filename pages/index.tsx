/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import {
  IoEllipsisHorizontal,
  IoEllipsisVertical,
  IoLocationOutline,
} from "react-icons/io5";
import { FiArrowUpRight } from "react-icons/fi";
import ProjectCard from "@components/projectCard";

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Lead Product Designer",
      category: "Layers",
      image:
        "https://images.unsplash.com/photo-1636955860106-9eb89e576026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3JhZGllbnQlMjBiZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      time: "May 2020 – Present",
    },
    {
      id: 2,
      title: "Product Designer",
      category: "Sisyhus",
      image:
        "https://images.unsplash.com/photo-1636955860106-9eb89e576026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3JhZGllbnQlMjBiZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      time: "Jan 2018 – May 2020",
    },
    {
      id: 3,
      title: "UX Designer",
      category: "Catalog",
      image:
        "https://images.unsplash.com/photo-1636955860106-9eb89e576026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3JhZGllbnQlMjBiZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
      time: "Mar 2017 – Jan 2018",
    },
  ];

  return (
    <div className={"container mx-auto"}>
      <Head>
        <title>AKU Test Task</title>
      </Head>

      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1636955860106-9eb89e576026?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Z3JhZGllbnQlMjBiZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
          className="object-cover h-32 md:h-60 sm:h-10 w-full bg-primary"
          alt=""
        ></img>

        <div className="-mt-12">
          <div className="md:flex md:items-center justify-between md:px-10 px-4">
            <div className="md:flex md:items-center">
              <div className="rounded-full bg-white border-4 border-white relative md:w-40 md:h-40 h-24 w-24">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
                  className="object-cover h-full w-full rounded-full"
                  alt=""
                ></img>

                <div className="absolute md:bottom-1.5 md:right-1.5 bottom-0 right-0">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/7641/7641727.png"
                    className="w-6 h-6 md:w-8 md:h-8"
                    alt=""
                  ></img>
                </div>
              </div>

              {/* name */}

              <div className="mt-4 md:ml-4">
                <h1 className="text-2xl font-semibold">Olivia Rhya</h1>
                <p className="text-base text-text">
                  I&apos;m a Product Designer based in Melbourne.
                </p>
              </div>
            </div>

            {/* cta */}

            <div className="mt-4">
              <div className="flex md:justify-center">
                <button className="w-10 h-10 rounded-md flex items-center justify-center border border-border text-text">
                  <IoEllipsisHorizontal />
                </button>

                <button className="w-32 h-10 rounded-md border border-border text-text mx-2">
                  View portfolio
                </button>

                <button className="w-20 h-10 rounded-md bg-primary text-white">
                  Follow
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about */}

      <div className="my-10 md:px-10 px-4">
        <div className="flex items-center justify-between relative">
          <div>
            <h1 className="text-md font-semibold">Experience</h1>
            <p className="text-sm mt-1 text-text">
              I specialise in UX/UI design, brand strategy, and Webflow
              development.
            </p>
          </div>

          <button className="rounded-full flex items-center justify-center text-text absolute right-0 top-0">
            <IoEllipsisVertical />
          </button>
        </div>

        <hr className="my-4 border border-border" />

        <div className="md:flex justify-between gap-20">
          <div className="md:w-3/5 w-full">
            <h1 className="text-sm font-semibold">About me</h1>
            <p className="text-base mt-4 text-text">
              I&apos;m a Product Designer based in Melbourne, Australia. I
              specialise in UX/UI design, brand strategy, and Webflow
              development. I&apos;m always striving to grow and learn something
              new and I don&apos;t take myself too seriously.
              <br /> <br />
              I&apos;m passionate about helping startups grow, improve their
              customer experience, and to raise venture capital through good
              design.
              <br /> <br />
              <a className="text-md text-primary font-semibold">Read more</a>
            </p>
          </div>

          <hr className="my-4 border border-border md:display-none" />

          <div className="md:w-2/5 w-full">
            <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-6">
              <div>
                <p className="text-xs text-text font-medium">Location</p>
                <a className="text-md mt-2 flex items-center text-text gap-1 font-semibold">
                  <IoLocationOutline size={"20px"} /> Melbourne, Australia
                </a>
              </div>

              <div>
                <p className="text-xs text-text font-medium">Website</p>
                <a className="text-md mt-2 flex items-center text-primary font-semibold">
                  oliviarhye.com <FiArrowUpRight size={"20px"} />
                </a>
              </div>

              <div>
                <p className="text-xs text-text font-medium">Portfolio</p>
                <a className="text-md mt-2 flex items-center text-primary font-semibold">
                  @oliviarhye <FiArrowUpRight size={"20px"} />
                </a>
              </div>

              <div>
                <p className="text-xs text-text font-medium">Email</p>
                <a className="text-md mt-2 flex items-center text-primary font-semibold">
                  hello@oliviarhye.com <FiArrowUpRight size={"20px"} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* works */}

        <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard {...project} key={project.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
