import React from "react";
import Lottie from "lottie-react";
import SpaceBoy from "../../LottieFiles/SpaceBoy.json";
import Typed from "../../Components/Typed.js";
import Tilt from "react-parallax-tilt";
import Avatar from "../../images/Avatar.png";
import { CiCoffeeCup } from "react-icons/ci";
import nightsky from "../../LottieFiles/night-sky.json";
import Skills from "../../Components/Skills.js";
import Coder from "../../LottieFiles/coder.json";
import { ResponsivePie } from "@nivo/pie";

const Home = () => {
  const data = [
    {
      id: "java",
      label: "java",
      value: 195,
      color: "hsl(90, 70%, 50%)",
    },
    {
      id: "erlang",
      label: "erlang",
      value: 419,
      color: "hsl(56, 70%, 50%)",
    },
    {
      id: "ruby",
      label: "ruby",
      value: 407,
      color: "hsl(103, 70%, 50%)",
    },
    {
      id: "haskell",
      label: "haskell",
      value: 474,
      color: "hsl(186, 70%, 50%)",
    },
    {
      id: "go",
      label: "go",
      value: 71,
      color: "hsl(104, 70%, 50%)",
    },
  ];
  return (
    <div>
      <div className="HomePage">
        <Lottie className="bg" animationData={nightsky} loop={true} />
        <Lottie className="bgtwo" animationData={nightsky} loop={true} />
        <Lottie className="bgtemp" animationData={nightsky} loop={true} />
        <div className="HomeText">
          <h1>Hi There!</h1>
          <h1>
            I'M <b>Hamid Hussain</b>
          </h1>
          <Typed />
        </div>

        <Lottie className="illustration" animationData={SpaceBoy} loop={true} />
      </div>

      <div className="AboutPage" id="About">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Brief <b>introduction</b>
          </h1>
          <p>
            I love the process of changing a raw idea into a website or a
            product that impacts lives. I want to do work that challenges me as
            a developer & work that I can be proud of.
            <br />
            <br />I am fluent in <b>C++</b> and know a bit of <b>Python</b> and
            am working on a few projects in the <b>MERN</b> stack.
            <br />I plan to learn <b>Next.js</b>, <b>Three.js</b> and
            <b> Typescript</b> in the near future. <br />
            <br />
            Also, I love <b>coffee</b>{" "}
            <CiCoffeeCup style={{ scale: "1.5", rotate: "15deg" }} />
          </p>
        </div>
        <Tilt>
          <img className="Avatar" src={Avatar} alt="" />
        </Tilt>
      </div>

      <div>
        <div className="AboutPage">
          <div className="AboutText">
            <h1 className="AboutTextHeading">
              Get to <b>know</b> me!
            </h1>
            <p>
              Hi, my name is <b>Devansh Sahni</b> and I am from New Delhi,
              India. I'm a <b>MERN stack web developer</b> and a final year
              college student pursuing <b>BTech in CSE</b>. <br />
              <br />I have done an internship as a <b>software developer</b> at
              GoalFi which is a fintech startup. I love to create original
              projects with beautiful designs, you can check out some of my work
              in the projects section.
              <br />
              <br />I am <b>open</b> to new collaborations or work where I can
              contribute and grow. Feel free to connect with me, links are in
              the footer.
              <br />
              Apart from coding I love to do photography, you can check out some
              of my shots here{" "}
              <a
                href="https://www.instagram.com/devansh_sahni_/?hl=en"
                target="_blank"
              >
                Instagram.
              </a>
            </p>
          </div>

          <div>
            <Tilt>
              <Lottie
                className="illustration"
                animationData={Coder}
                loop={true}
              />
            </Tilt>
          </div>
        </div>

         <h1 className="SkillsHeading">Professional Skillset</h1>
        <div className="chatDiv">
          <div className="pieDiscription">
            <div className="skills">
              {/* <Skills skill='React' /> */}
              <Skills skill="RN" />
              <Skills skill="html" />
              <Skills skill="css" />
              <Skills skill="java" />
              <Skills skill="Node" />
              {/* <Skills skill='Express' /> */}
              {/* <Skills skill='MongoDb' /> */}
              {/* <Skills skill='Git' /> */}
              <Skills skill="Github" />
              <Skills skill="Javascript" />
              <Skills skill="C++" />
              {/* <Skills skill='Postman' /> */}
              {/* <Skills skill='Figma' /> */}
              {/* <Skills skill='Vercel' /> */}
              <Skills skill="Npm" />
              {/* <Skills skill='Bootstrap'/> */}
            </div>
          </div>
          <div className="pie">
            <ResponsivePie
              className="arc-labels"
              data={data}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              activeOuterRadiusOffset={8}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              arcLinkLabelsSkipAngle={10}
              arcLinkLabelsTextColor="white"
              arcLinkLabelsTextThickness={12}
              arcLinkLabelsColor={{ from: "color" }}
              arcLabelsSkipAngle={10}
              arcLabelsTextColor={{ from: "color", modifiers: [["darker", 9]] }}
              legends={[
                {
                  anchor: "bottom", // Position of the legend
                  direction: "row", // Layout direction ('column' or 'row')
                  translateY: 56, // Vertical offset from the bottom
                  itemWidth: 100, // Width of each legend item
                  itemHeight: 18, // Height of each legend item
                  itemTextColor: "#999", // Color of legend text
                  symbolSize: 20, // Size of the legend symbol
                  symbolShape: "circle", // Shape of the legend symbol
                  effects: [
                    {
                      on: "hover", // Effect on hover
                      style: {
                        itemTextColor: "#000",
                        itemTextFontSize: 23,
                      },
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
