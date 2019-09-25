import React from "react";
import ReactRoboHash from "react-robohash";

const Card = () => {
  return (
    <div>
      <image
        alt="robot friends"
        src={{ uri: "https://robohash.org/testadfd" }}
      />
      <div>
        <ReactRoboHash
          name="cat"
          type="head"
          background={1}
          fileType="svg"
          gravatar
          size={200}
        />
        <p>Jane Doe</p>
        <p>jdoe@gmail.com</p>
      </div>
    </div>
  );
};

export default Card;
