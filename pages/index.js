import React, { useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Home() {
  const [data] = useState([
    {
      id: 1,
      pic: "../static/pic/shirt.png",
      demo: "https://diamond-ring-3-d.vercel.app/",
      source: "https://github.com/saman-tofighian/DiamondRing_3D",
      text: "Diamond",
    },
    {
      id: 2,
      pic: "../static/pic/shirt.png",
      demo: "https://t-shirt-3-d.vercel.app/",
      source: "https://github.com/saman-tofighian/T-Shirt_3D",
      text: "T-Shirt",
    },
    {
      id: 3,
      pic: "../static/pic/chrome-capture-2025-2-24.png",
      demo: "https://monitor3-d-ha3o.vercel.app/",
      source: "https://github.com/saman-tofighian/Monitor3D",
      text: "Monitor3D",
    },
    {
      id: 4,
      pic: "../static/pic/chrome-capture-2025-2-24 (1).png",
      demo: "https://air-jordan-r3-f.vercel.app/",
      source: "https://github.com/saman-tofighian/air_jordan_R3F",
      text: "air-jordan_3D",
    },
    {
      id: 5,
      pic: "../static/pic/chrome-capture-2025-2-16 (2).png",
      demo: "https://car-show-3-d.vercel.app/",
      source: "https://github.com/saman-tofighian/CarShow_3D",
      text: "CarShow_3D (ptlcntls)",
    },
    {
      id: 6,
      pic: "../static/pic/chrome-capture-2025-2-16 (3).png",
      demo: "https://gallery-show-3-d.vercel.app/",
      source: "https://github.com/saman-tofighian/GalleryShow_3D",
      text: "GalleryShow_3D (ptlcntls)",
    },
    {
      id: 7,
      pic: "../static/pic/chrome-capture-2025-2-26.png",
      demo: "https://sun-glasses-3-d.vercel.app/",
      source: "https://github.com/saman-tofighian/SunGlasses_3D",
      text: "SunGlasses_3D",
    },
    {
      id: 8,
      pic: "../static/pic/chrome-capture-2025-2-16 (5).png",
      demo: "https://gallexy-3-d.vercel.app/",
      source: "https://github.com/saman-tofighian/Gallexy_3D",
      text: "Gallexy_3D",
    },
    {
      id: 9,
      pic: "../static/pic/chrome-capture-2025-2-16 (6).png",
      demo: "https://3-d-text-phi.vercel.app/",
      source: "https://github.com/saman-tofighian/3D_Text",
      text: "Text3D",
    },
    {
      id: 10,
      pic: "../static/pic/chrome-capture-2025-2-18.png",
      demo: "https://scroll-animation-3d.vercel.app/",
      source: "https://github.com/saman-tofighian/scroll_animation_3d",
      text: "ScrollAnimation",
    },
    {
      id: 11,
      pic: "../static/pic/hall.png",
      demo: "https://king-hall-3-d.vercel.app/",
      source: "https://github.com/saman-tofighian/KingHall_3D",
      text: "King Hall",
    },
  ]);
  return (
    <main className="w-full">
      <section className="w-full grid grid-cols-12 px-[6%] place-items-center py-[6rem] gap-y-16">
        {data.map((val) => {
          return (
            <div
              className="col-span-12 mb-5 bg-blue-950 px-5 py-7 md:px-8 md:py-10 rounded-xl shadow-xl"
              key={val.id}
            >
              <figure className="w-full">
                <img
                  src={val.pic}
                  className="w-[340px] h-[340px] md:w-[500px] lg:w-[700px] md:h-[400px] bg-cover rounded-xl "
                  alt=""
                />
              </figure>
              <h3 className="text-center text-white text-[2rem] my-8">
                {val.text}
              </h3>
              <div className="w-full flex justify-center mt-5">
                <a
                  href={val.demo}
                  className="bg-red-400 px-16 py-3 rounded-xl text-white"
                  target="_blank"
                >
                  Demo Model
                </a>
              </div>
              <div className="w-full flex justify-center">
                <a
                  href={val.source}
                  className="bg-green-600 px-16 py-3 rounded-xl text-white mt-4"
                  target="_blank"
                >
                  Source Code
                </a>
              </div>
            </div>
          );
        })}
      </section>
      <footer className="bg-blue-900 w-full px-[6%] pt-14 pb-2">
        <section className="w-full grid grid-cols-12">
          <div className="col-span-12 flex justify-center items-end mb-6">
            <a
              href="https://www.linkedin.com/in/saman-tofighian/"
              className="no-underline w-[40px] h-[40px] rounded-[50%] p-3 flex justify-center items-center shadow-lg bg-white"
              target="_blank"
            >
              <LinkedInIcon className="text-blue-500 text-[1.7rem]" />
            </a>
            <a
              href="https://github.com/saman-tofighian"
              className="no-underline w-[40px] h-[40px] rounded-[50%] p-3 flex justify-center items-center shadow-lg bg-white ml-5"
              target="_blank"
            >
              <GitHubIcon className="text-[1.7rem]" />
            </a>
          </div>
          <div className="col-span-12 flex justify-center items-end">
            <p className="text-white text-[1.2rem]">
              Developed by Saman Tofighian
            </p>
          </div>
        </section>
      </footer>
    </main>
  );
}
