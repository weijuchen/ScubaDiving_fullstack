// importing React module and the useState hook:

import React, { useState } from "react";
import "./BlogComponent.css";
import TopImage from "../Images/Article1TopImage.jpg";
import Image2 from "../Images/Article1Image2.jpg";
import Image3 from "../Images/Article1Image3.jpg";
// import video1 from "./video1.mp4";

// #####################################################
// here I create a ReadMore component that will render the state of isReadMore

const ReadMore = ({ children }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };


  // renderContent function decides what content to display based on whether the user wants to read more or not (isReadMore value). If the user wants to read more, the entire children content is shown. If not, only part of content are displayed.
  const renderContent = () => {
    if (isReadMore) {
      return children;
    } else {
      return children.props.children.slice(0, 2); // Adjust the number as needed
    }
  };

  return (
    <div className="read-more">
      <div className="image-section">
        <img src={TopImage} alt="Missing" />
      </div>
      <div className="text-section">
        {renderContent()}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? "...show less" : " read more"}
        </span>
      </div>
    </div>
  );
};

// #####################################################
// here I create BlogComponent , this component will render the title of the article, and the content of the article ,and the video of the article.

const BlogComponent = () => {
  const youtubeVideoId = "g3j6zipQ9so";

  return (
    <div className="container">
      <h1>Scuba Diving in Alor, Indonesia</h1>
      <ReadMore>
        <div>
          <p>
            Alor Island was our first stop and it easily had the clearest water
            and healthiest coral life of the entire trip. In this article I’m
            going to explain the logistics of planning a dive trip to Alor so
            that you too can experience the incredible diving in this region.
            Indonesia is often cited as having the best scuba diving in the
            world and many of the top 100 dive sites are located in the azure
            waters of the Coral Triangle.
          </p>
          <h2>The Best Dive Sites in Alor</h2>
          <p>
            There are literally dozens of dive sites to choose from around Alor.
            We managed to fit in 6 amazing dives in 3 days, but you could easily
            spend a week and not see all of the sites on offer here. Below I’ve
            listed a few of my favorites:
          </p>
          <h3>Babylon</h3>
          <p>
            You won’t want to miss this one! A shallow reef wall drops off to 28
            meters, with most of the action happening between 15 – 25 meters.
            The coral and fish life here is bewildering and there are numerous
            photo opportunities for both macro and wide-angle lenses. I’ve
            probably never seen so many different species of reef fish in one
            place. In the shallows here, you might be lucky enough to see Bubu
            fishermen retrieving catches from their traditional bamboo woven
            traps.
          </p>
          <div className="image-in-text">
            <img src={Image2} alt="Missing" />
          </div>
          <h3>Mike’s Delight</h3>
          <p>
            Another fantastic dive site, Mike’s Delight is a slow drift dive
            (depending on currents) reaching a maximum of 25 meters. We saw 5
            sea snakes, lobster, lion fish, tons of box fish, and countless
            other reef fish.
          </p>
          <h3>Aquarium</h3>
          <p>
            The aptly named aquarium is probably the most visually stunning dive
            in Alor. The amount of fish here rivals Babylon, but the clarity of
            the water and the color of the coral is simply spectacular. The dive
            site is along a drop-off that goes down to around 30 meters.
          </p>
          <h3>Clown Valley</h3>
          <p>
            Another dive site that’s appropriately named, clown valley is known
            for having the highest concentration of sea anemones anywhere in the
            world. Not surprisingly, there are also countless clownfish who find
            refuge in the swaying tentacles of the brightly colored soft corals.
          </p>
          <div className="image-in-text">
            <img src={Image3} alt="Missing" />
            <br />
            <br />
            <br />
          </div>
          <div className="video-section">
            <h5>Here is the amamzing video about diving in Alor.</h5>
            <iframe
              width="900"
              height="500"
              src={`https://www.youtube.com/embed/${youtubeVideoId}`}
              title="YouTube Video"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </ReadMore>
    </div>
  );
};

export default BlogComponent;
