import React from "react";
import PROMYS1 from "../assets/PROMYS1.jpg";
import PROMYS2 from "../assets/PROMYS2.jpg";
import PROMYS3 from "../assets/PROMYS3.jpg";
import PROMYS4 from "../assets/PROMYS4.jpg";
import PROMYS5 from "../assets/PROMYS5.jpg";
import PROMYS6 from "../assets/PROMYS6.jpg";
import PROMYS7 from "../assets/PROMYS7.jpg";
import PROMYS8 from "../assets/PROMYS8.jpg";
import PROMYS9 from "../assets/PROMYS9.jpg";
import PROMYS10 from "../assets/PROMYS10.jpg";
import Image from "next/image";

function Page() {
  console.log(PROMYS1["src"]);
  return (
    <div>
      <h1 className="text-[50px] font-bold text-center mt-[20px]">PROMYS</h1>
      <p className="text-center mx-[10%] mt-[30px] text-[17px]">
        So,,, I got a chance to have the best experience one can have in their
        high school, attending a 6 week long Summer program named PROMYS. Since
        a very young age, I always enjoyed solving math problems which were not
        very common in schools... so, when somehow, surfing through the internet
        trying to find such problems, I came across the problem set (P-set) for
        the PROMYS application. I was very fascinated, it was the perfect food
        for my mind for the next few weeks. This was the time when all the kids
        my age were preparing for “the board exams of class 10th” and I, on the
        other hand, was trying to find different approaches to the problems on
        the P-set. Weeks went by, I submitted the application, gave my board
        exams and finally was the time of the results of the applications, which
        was not specified when they would be out.
      </p>
      <p className="text-center mx-[10%] mt-[30px] text-[17px]">
        So one evening I screamed out of nowhere, “I got in!!!”. That was when I
        knew my life has taken a new turn. Soon me and my family found ourselves
        on the beautiful campus of IISC Bangalore. I had always heard about it
        being the best for research students and I was very excited to finally
        be able to feel all that. We reached to check out the hostel which would
        be my home for the next few weeks. That's where I first met a few others
        who were also a part of PROMYS. Little did I know that they would be my
        family and we would make memories together that would stay with us
        lifelong.
      </p>
      <div className="flex justify-center my-[60px]">
        <Image src={PROMYS1["src"]} alt="" width={1000} height={1000} />
      </div>
      <p className="text-center mx-[10%] mt-[30px] text-[17px]">
        After interacting with some of the other students and discussing
        problems, I met my counselor who would be helping and guiding me
        throughout my time there, but would never ever tell the solution to any
        problem, rather, counter question me which would leave me more confused.
        That was a long day. The classes began the next day, and professor Ila
        got us familiar with all the basics of number theory we would be
        requiring. She made us think about basic concepts the way we had never
        done before and we had to prove every single thing. At night every day
        we had to submit the problem set, popularly known as p-set, to our
        respective counselors. The difficulty kept increasing till a point, when
        I had to wake up late at night to finish them !
      </p>
      <div className="flex justify-center my-[60px] flex-wrap">
        <Image
          src={PROMYS4["src"]}
          alt=""
          width={800}
          height={1}
          className="h-[1200px] w-[600px] mr-[20px] mb-[20px]"
        />
        <Image
          src={PROMYS3["src"]}
          alt=""
          width={800}
          height={1}
          className="h-[1200px] w-[600px] m-0"
        />
      </div>
      <div className="flex justify-center my-[60px] flex-wrap">
        <Image
          src={PROMYS5["src"]}
          alt=""
          width={800}
          height={1}
          className="h-[600px] w-[600px] mr-[20px] mb-[20px]"
        />
      </div>
      <p className="text-center mx-[10%] mt-[30px] text-[27px]">
        Meeting Phil - this is just temporary
      </p>
      <p className="text-center mx-[10%] mt-[30px] text-[17px]">
        A week later an advanced lecture was beginning for the returning
        students, which was Projective geometry. I was really fascinated by its
        concept so I decided to take that lecture as well, which probably was
        the best decision I had taken because it opened a new world for me. Our
        Professor
      </p>
      <div className="flex justify-center my-[60px] flex-wrap">
        <Image
          src={PROMYS2["src"]}
          alt=""
          width={800}
          height={1}
          className="h-[600px] w-[600px] mr-[20px] mb-[20px]"
        />
        <Image
          src={PROMYS6["src"]}
          alt=""
          width={800}
          height={1}
          className="h-[600px] w-[600px] mr-[20px] mb-[20px]"
        />
      </div>
      <p className="text-center mx-[10%] mt-[30px] text-[27px]">
        Meeting new proffs. - this is just temporary
      </p>
      <p className="text-center mx-[10%] mt-[30px] text-[17px]">
        I mew with new proff.s and they were amazing. I learned a lot from them
      </p>
      <div className="flex justify-center my-[60px] flex-wrap">
        <Image
          src={PROMYS7["src"]}
          alt=""
          width={800}
          height={1}
          className="h-[600px] w-[600px] mr-[20px] mb-[20px]"
        />
        <Image
          src={PROMYS8["src"]}
          alt=""
          width={800}
          height={1}
          className="h-[600px] w-[600px] mr-[20px] mb-[20px]"
        />
      </div>
      <div className="flex justify-center my-[60px] flex-wrap">
        <Image
          src={PROMYS9["src"]}
          alt=""
          width={800}
          height={1}
          className="h-[600px] w-[600px] mr-[20px] mb-[20px]"
        />
      </div>
      <p className="text-center mx-[10%] mt-[30px] text-[27px]">
        Conclusion - this is just temporary
      </p>
      <p className="text-center mx-[10%] mt-[30px] text-[17px]">
        So it was a great experience over all,,, I loved watching the beautiful
        campus of IISC, the great friends I made, the amazing proff.s I met and
        the great problems I solved. And,,, of course, eating ice-cream at 2am!
      </p>
      <div className="flex justify-center my-[60px] flex-wrap">
        <Image
          src={PROMYS10["src"]}
          alt=""
          width={800}
          height={1}
          className="h-[600px] w-[1200px] mr-[20px] mb-[20px]"
        />
      </div>
    </div>
  );
}

export default Page;
