import React from "react";
import defaultAvatar from "../assets/avatar.png";
export function List({ name, nickName, images }) {
  // Long way
  const img = images && images[0] && images[0].small && images[0].small.url;

  // Short Way
  const img2 = images?.[0]?.small?.url || defaultAvatar;
  const img3 = images?.[0]?.small?.url ?? defaultAvatar;
  return (
    <div className="container">
      <img src={img2} alt={name} style={{ width: "50px" }} />
      <h1>{name}</h1>
      <h2>Nickname: {nickName || "Nickname not provided"}</h2>
    </div>
  );
}
