import React from "react";
import { BlurbDiv, ImgStyle, LandingStyle } from "./LandingStyle";

export const Landing = () => {
  return (
    <LandingStyle>
      <div>
        <ImgStyle
          src="https://avatars.githubusercontent.com/u/53596354?v=4"
          alt=""
        />
      </div>
      <BlurbDiv>
        <h1>Michael Desormeaux</h1>
        <h3>Virtual Visionary</h3>
        <p>
          I am a Software Development student with a passion for Linux, Python,
          and Automation. Currently in my second year with DeVry and working
          towards my Bachelor of Science in Software Development. As well as
          going to school, I am learning web development to broaden my skills
          and create more things.
        </p>
        <p>
          Currently, I am learning the proper foundations and information to be
          a successful web developer. I am so very thankful for the mentors that
          have helped me get to where I am. Thanks to them, I have gotten to a
          point where I feel confident enough to learn on my merit. Despite
          this, I would like to ensure a solid foundation.
        </p>
      </BlurbDiv>
    </LandingStyle>
  );
};
