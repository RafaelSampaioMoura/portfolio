import React from "react";
import { Carousel } from "react-responsive-carousel";
import reactIcon from "../images/react-icon.jpeg";

const ProjectCarousel = () => {
  return (
    <Carousel showArrows={true} showIndicators={true} autoPlay>
      <div className="w-32">
        <img src={reactIcon} alt="" />
        <p>Placeholder #1</p>
      </div>
      <div className="w-32">
        <img src={reactIcon} alt="" />
        <p>Placeholder #2</p>
      </div>
      <div className="w-32">
        <img src={reactIcon} alt="" />
        <p>Placeholder #3</p>
      </div><div className="w-32">
        <img src={reactIcon} alt="" />
        <p>Placeholder #4</p>
      </div><div className="w-32">
        <img src={reactIcon} alt="" />
        <p>Placeholder #5</p>
      </div>
    </Carousel>
  );
};

export default ProjectCarousel;
