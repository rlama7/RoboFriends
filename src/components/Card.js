import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img
        alt="robot friends"
        src={`https://robohash.org/${id}?size=200x200`}
      />
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card;
