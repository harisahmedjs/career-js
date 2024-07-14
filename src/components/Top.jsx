import React from "react";
import img from "../assets/Branches.png";
import img1 from "../assets/Branches1.png";
import img2 from "../assets/Branches2.png";
import img3 from "../assets/Branches3.png";
import img4 from "../assets/1.png";
import img5 from "../assets/2.png";
import img6 from "../assets/3.png";
import img7 from "../assets/4.png";
import img8 from "../assets/5.png";

const Top = () => {
  const image = [
    {
      image: img,
    },
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
  ];

  const diaries = [
    {
      image: img4,
      button: "Diary Number 01",
      head: "A Day in the Life of an Ambassador",
      para: "Today, I attended a series of meetings with foreign diplomats to discuss international trade agreements. The discussions were intense but productive, and we made significant progress on key issues.",
    },
    {
      image: img5,
      button: "Diary Number 02",
      head: "Cultural Exchange in Japan",
      para: "Visited a local school in Tokyo to promote cultural exchange. The students were enthusiastic and eager to learn about different cultures. It was a heartwarming experience that highlighted the importance of global education.",
    },
    {
      image: img6,
      button: "Diary Number 03",
      head: "Negotiating Peace",
      para: "Participated in a high-stakes negotiation aimed at resolving a longstanding conflict between two nations. The atmosphere was tense, but by the end of the day, we had laid the groundwork for a potential peace treaty.",
    },
    {
      image: img7,
      button: "Diary Number 04",
      head: "Humanitarian Efforts in Africa",
      para: "Visited several humanitarian projects in Kenya. Met with local leaders and volunteers who are making a significant impact in their communities. The resilience and dedication of these individuals are truly inspiring.",
    },
    {
      image: img8,
      button: "Diary Number 05",
      head: "Economic Summit in Berlin",
      para: "Attended the annual economic summit in Berlin, where global leaders discussed strategies for economic growth and sustainability. The sessions were enlightening, and several innovative ideas were proposed.",
    },
  ];

  return (
    <div>
      {/* case studies strt */}
      <div>
        <div className="w-[30%] mx-auto text-center">
          <h1 className="font-bold text-4xl ">Case studies</h1>
          <p className="mt-8">
            Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna,
            imperdiet id leo quis, luctus auctor nisi.{" "}
          </p>
        </div>

        <div className="grid grid-cols-4 w-[80%] gap-10 mx-auto mt-10">
          {image.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt="" />
            </div>
          ))}
        </div>
      </div>
      {/* case studies end */}

      <div className="bg-[#363636] ">
        <div className=" w-[80%] mx-auto flex flex-col justify-end">
          <div>
            <div className="w-[40%]">
              <h1 className="font-bold text-4xl ">Diplomatic Diaries</h1>
              <p className="mt-6">
                Phasellus sed quam eu eros faucibus cursus. Quisque mauris urna,
                imperdiet id leo quis, luctus auctor nisi.
              </p>
            </div>

            <div className="">
              {diaries.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#FFFFFF] mt-10 rounded-2xl flex w-[80%] gap-6 p-2 h-auto items-center"
                >
                  <div className="">
                    <img src={item.image} className="w-72" alt="" />
                  </div>

                  <div className="w-[60%]">
                    <button className="text-[#D2940A] border border-solid border-[#D2940A] px-4">
                      {item.button}
                    </button>
                    <h2 className="text-[#343434] font-semibold text-2xl mt-4">
                      {item.head}
                    </h2>
                    <p className="text-[#525151] mt-4">{item.para}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
