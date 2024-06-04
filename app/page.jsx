"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <div
        className="border-b-[1px] border-[#fff] bg-[#000] w-full h-fit p-[30px] flex pr-[50px] justify-center items-center sticky z-50 top-0 right-0"
        dir="rtl"
        id=""
      >
        <button
          className="p-[5px] w-fit lg:w-[auto] text-[17px] text-[#cccaca] focus:border-b-[2px] hover:border-b-[2px] border-[#cccaca]"
          onClick={() => {
            router.push("/#stop_2");
          }}
        >
          Experiences
        </button>
        <button
          className="p-[5px] lg:w-[auto] text-[17px] mr-10 text-[#cccaca] focus:border-b-[2px] hover:border-b-[2px] border-[#cccaca]"
          onClick={() => {
            router.push("/#stop_1");
          }}
        >
          About Me
        </button>
      </div>
      <div id="stop_1" className="relative bottom-[180px]"></div>
      {/* <h1 className="text-center mt-[50px] text-[40px] font-extrabold text-[#fff]">
        About me
      </h1> */}
      <div className="flex lg:flex-row flex-col bg-[#000] lg:justify-content lg:items-center py-[50px]">
        <div className="flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1446889727648-8c23e3039b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="lg:w-[600px] lg:h-[500px] w-[80%] h-[80%] lg:ml-[10%] mr-[10%] lg:ml-[25%] lg:mt-[0px] mt-[30px] md:ml-[50px] ml-[30px] rounded-2xl"
          />
        </div>
        <div className="lg:w-[50%] w-[80%] text-[#fff] text-[#fff] lg:ml-[5%] md:text-center lg:text-start ml-[7%]">
          <div className="flex leading-[50px] p-[0px] md:w-auto md:ml-[20%] lg:ml-[0px] flex-wrap md:mt-[20px] sm:mt-[20px]">
            <p className="lg:text-[40px] md:text-[30px] md:text-center m-none mr-[20px] mb-[10px] text-[25px]">
              I'm Ananya Garg.
            </p>
            <p className="lg:text-[40px] md:text-[30px] m-none mb-[20px] text-[22px] ">
              A mathematician
            </p>
          </div>

          <p className="text-[17px]">
            iusto eveniet a facilis? Consectetur magni veniam vero labore
            repellat accusantium suscipit, consequuntur quam nam non minus nihil
            possimus velit veritatis eum! Laboriosam, distinctio obcaecati
            temporibus, rerum accusamus nesciunt ipsa veniam deserunt porro
            harum autem ullam doloribus eligendi deleniti voluptate quod!
            Mollitia dolore culpa id dignissimos nisi vero beatae, molestiae non
            atque, eum recusandae quo cumque maxime magni, dolores a soluta
            facere officia! Dignissimos tenetur doloribus ipsum quidem,
            necessitatibus distinctio quod autem cum cumque culpa labore ipsam
            mollitia exercitationem in pariatur. Quos, pariatur excepturi
            doloremque repellat reiciendis expedita tenetur cum fugit ad ea
            reprehenderit optio deserunt atque, omnis dolorum labore unde.
            Officia alias temporibus enim culpa qui, consequuntur praesentium
            incidunt. Eum eaque fuga perspiciatis veritatis omnis eveniet,
            corrupti ullam quos, itaque mollitia exercitationem non. Autem
            quisquam eius, minima itaque aut fugit pariatur officiis minus vel
            maxime unde accusamus vitae amet distinctio consequuntur doloremque
            velit sit exercitationem cumque ipsam magnam inventore voluptates!
            Veritatis vitae laborum sed.
          </p>
        </div>
      </div>
      <div id="stop_2" className="relative bottom-[155px]"></div>
      <h1 className="text-center mt-[50px] text-[40px] font-extrabold	">
        My Experiences
      </h1>
      <div>
        <div className="flex flex-wrap justify-center">
          <div
            className="bg-[#F5F7F8] w-full lg:w-[35%] lg:w-[26%] md:w-[35%] md:w-[26%] h-fit p-[40px] mt-[50px] rounded-3xl mx-[30px] hover:scale-110 transition-transform duration-300 ease"
            onClick={() => {
              router.push("/Tutor");
            }}
          >
            <p className="text-center mb-[30px] text-[20px] font-extrabold	">
              Tutoring a kid
            </p>
            <img
              src="https://images.unsplash.com/photo-1446889727648-8c23e3039b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div
            className="bg-[#F5F7F8] w-full lg:w-[35%] lg:w-[26%] md:w-[35%] md:w-[26%] h-fit p-[40px] ml-[5%] mt-[50px] rounded-3xl mx-[30px]  hover:scale-110 transition-transform duration-300 ease"
            onClick={() => {
              router.push("/Food");
            }}
          >
            <p className="text-center mb-[30px] text-[20px] font-extrabold	">
              Food Distribution
            </p>
            <img
              src="https://images.unsplash.com/photo-1446889727648-8c23e3039b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div
            className="bg-[#F5F7F8] w-full lg:w-[35%] lg:w-[26%] md:w-[35%] md:w-[26%] h-fit p-[40px] ml-[5%] mt-[50px] rounded-3xl mx-[30px]  hover:scale-110 transition-transform duration-300 ease"
            onClick={() => {
              router.push("/PROMYS");
            }}
          >
            <p className="text-center mb-[30px] text-[20px] font-extrabold	">
              PROMYS
            </p>
            <img
              src="https://images.unsplash.com/photo-1446889727648-8c23e3039b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          {/* <div
            className="bg-[#F5F7F8] w-full lg:w-[45%] lg:w-[26%] h-fit p-[40px] ml-[5%] mt-[50px] rounded-3xl mx-[30px]  hover:scale-110 transition-transform duration-300 ease"
            onClick={() => {
              router.push("/Sports");
            }}
          >
            <p className="text-center mb-[30px] text-[20px] font-extrabold	">
              Sports
            </p>
            <img
              src="https://images.unsplash.com/photo-1446889727648-8c23e3039b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div
            className="bg-[#F5F7F8] w-full lg:w-[45%] lg:w-[26%] h-fit p-[40px] ml-[5%] mt-[50px] rounded-3xl mx-[30px]  hover:scale-110 transition-transform duration-300 ease"
            onClick={() => {
              router.push("/School");
            }}
          >
            <p className="text-center mb-[30px] text-[20px] font-extrabold	">
              School
            </p>
            <img
              src="https://images.unsplash.com/photo-1446889727648-8c23e3039b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div> */}
        </div>
      </div>
    </div>
  );
}
