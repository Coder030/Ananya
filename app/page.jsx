"use client";

/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="">
      <div
        className="bg-[#E4F1FB] w-full h-[150px] flex justify-center items-center"
        id=""
      >
        <button
          className="bg-[#FFFFFF] p-[20px] md:w-[auto] text-[27px] mr-10 rounded-2xl"
          onClick={() => {
            router.push("/#stop_1");
          }}
        >
          About Me
        </button>
        <button
          className="bg-[#FFFFFF] p-[20px] w-[30%] md:w-[auto] text-[27px] rounded-2xl"
          onClick={() => {
            router.push("/#stop_2");
          }}
        >
          Journeys
        </button>
      </div>

      <h1
        className="text-center mt-[50px] text-[40px] font-extrabold"
        id="stop_1"
      >
        About me
      </h1>
      <div className="flex md:flex-row flex-col">
        <p className="md:w-[50%] ml-[10%] mt-[40px] text-[17px] w-[80%] mr-[50px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          libero dignissimos quidem est mollitia ipsa, cum fugit dolor
          assumenda, facere necessitatibus iure! Deserunt eius delectus et.
          Nihil nesciunt enim tenetur cupiditate magni qui odit laborum cumque
          aperiam voluptatum expedita ut non adipisci harum voluptas incidunt,
          iusto eveniet a facilis? Consectetur magni veniam vero labore repellat
          accusantium suscipit, consequuntur quam nam non minus nihil possimus
          velit veritatis eum! Laboriosam, distinctio obcaecati temporibus,
          rerum accusamus nesciunt ipsa veniam deserunt porro harum autem ullam
          doloribus eligendi deleniti voluptate quod! Mollitia dolore culpa id
          dignissimos nisi vero beatae, molestiae non atque, eum recusandae quo
          cumque maxime magni, dolores a soluta facere officia! Dignissimos
          tenetur doloribus ipsum quidem, necessitatibus distinctio quod autem
          cum cumque culpa labore ipsam mollitia exercitationem in pariatur.
          Quos, pariatur excepturi doloremque repellat reiciendis expedita
          tenetur cum fugit ad ea reprehenderit optio deserunt atque, omnis
          dolorum labore unde. Officia alias temporibus enim culpa qui,
          consequuntur praesentium incidunt. Eum eaque fuga perspiciatis
          veritatis omnis eveniet, corrupti ullam quos, itaque mollitia
          exercitationem non. Autem quisquam eius, minima itaque aut fugit
          pariatur officiis minus vel maxime unde accusamus vitae amet
          distinctio consequuntur doloremque velit sit exercitationem cumque
          ipsam magnam inventore voluptates! Veritatis vitae laborum sed.
        </p>
        <div className="flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1446889727648-8c23e3039b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
            alt=""
            className="md:w-[400px] md:h-[400px] mt-[50px] w-[80%] h-[80%] ml-[50px] mr-[10%]"
          />
        </div>
      </div>
      <p className="w-[100%] ml-[10%] mt-[40px] text-[17px] w-[80%] mr-[50px] ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        libero dignissimos quidem est mollitia ipsa, cum fugit dolor assumenda,
        facere necessitatibus iure! Deserunt eius delectus et. Nihil nesciunt
        enim tenetur cupiditate magni qui odit laborum cumque aperiam voluptatum
        expedita ut non adipisci harum voluptas incidunt, iusto eveniet a
        facilis? Consectetur magni veniam vero labore repellat accusantium
        suscipit, consequuntur quam nam non minus nihil possimus velit veritatis
        eum! Laboriosam, distinctio obcaecati temporibus, rerum accusamus
        nesciunt ipsa veniam deserunt porro harum autem ullam doloribus eligendi
        deleniti voluptate quod! Mollitia dolore culpa id dignissimos nisi vero
        beatae, molestiae non atque, eum recusandae quo cumque maxime magni,
        dolores a soluta facere officia! Dignissimos tenetur doloribus ipsum
        quidem, necessitatibus distinctio quod autem cum cumque culpa labore
        ipsam mollitia exercitationem in pariatur. Quos, pariatur excepturi
        doloremque repellat reiciendis expedita tenetur cum fugit ad ea
        reprehenderit optio deserunt atque, omnis dolorum labore unde. Officia
        alias temporibus enim culpa qui, consequuntur praesentium incidunt. Eum
        eaque fuga perspiciatis veritatis omnis eveniet, corrupti ullam quos,
        itaque mollitia exercitationem non. Autem quisquam eius, minima itaque
        aut fugit pariatur officiis minus vel maxime unde accusamus vitae amet
        distinctio consequuntur doloremque velit sit exercitationem cumque ipsam
        magnam inventore voluptates! Veritatis vitae laborum sed.
      </p>
      <h1
        className="text-center mt-[50px] text-[40px] font-extrabold	"
        id="stop_2"
      >
        My journeys
      </h1>
      <div>
        <div className="flex flex-wrap justify-center">
          <div
            className="bg-[#F5F7F8] w-full md:w-[45%] lg:w-[26%] h-fit p-[40px] mt-[50px] rounded-3xl mx-[30px] hover:scale-110 transition-transform duration-300 ease"
            onClick={() => {
              router.push("/Academics");
            }}
          >
            <p className="text-center mb-[30px] text-[20px] font-extrabold	">
              Academics
            </p>
            <img
              src="https://images.unsplash.com/photo-1446889727648-8c23e3039b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div
            className="bg-[#F5F7F8] w-full md:w-[45%] lg:w-[26%] h-fit p-[40px] ml-[5%] mt-[50px] rounded-3xl mx-[30px]  hover:scale-110 transition-transform duration-300 ease"
            onClick={() => {
              router.push("/Arts");
            }}
          >
            <p className="text-center mb-[30px] text-[20px] font-extrabold	">
              Arts
            </p>
            <img
              src="https://images.unsplash.com/photo-1446889727648-8c23e3039b24?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3F1YXJlJTIwaW1hZ2V8ZW58MHx8MHx8fDA%3D"
              alt=""
            />
          </div>
          <div
            className="bg-[#F5F7F8] w-full md:w-[45%] lg:w-[26%] h-fit p-[40px] ml-[5%] mt-[50px] rounded-3xl mx-[30px]  hover:scale-110 transition-transform duration-300 ease"
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
          <div
            className="bg-[#F5F7F8] w-full md:w-[45%] lg:w-[26%] h-fit p-[40px] ml-[5%] mt-[50px] rounded-3xl mx-[30px]  hover:scale-110 transition-transform duration-300 ease"
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
            className="bg-[#F5F7F8] w-full md:w-[45%] lg:w-[26%] h-fit p-[40px] ml-[5%] mt-[50px] rounded-3xl mx-[30px]  hover:scale-110 transition-transform duration-300 ease"
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
          </div>
        </div>
      </div>
    </div>
  );
}
