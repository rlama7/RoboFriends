import React from "react";
import ReactRoboHash from "react-robohash";

const Card = ({name, email, id}) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <image alt="robot friends" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <ReactRoboHash
          name="megan"
          type=""
          background={1}
          fileType="svg"
          gravatar
          size={200}
        />
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
