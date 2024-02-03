import React from "react";
import styled from "styled-components";
import post1 from "../../assets/post1.jpeg";
import post2 from "../../assets/post3.jpeg";
import post3 from "../../assets/post3.jpeg";
import post4 from "../../assets/post4.jpeg";
import post5 from "../../assets/post5.jpeg";
import post6 from "../../assets/post6.jpeg";
import post7 from "../../assets/post7.jpeg";
import post8 from "../../assets/post8.jpeg";
import post9 from "../../assets/post9.jpeg";

const postImages = [
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  post9,
];

const GridWrapper = styled.div`
  margin-top: 4px;
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  max-width: 100%; /* Adjust the max-width as needed */

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function PostGrid() {
  return (
    <GridWrapper>
      {postImages.map((postImage, index) => (
        <img key={index} src={postImage} alt={`Post ${index + 1}`} />
      ))}
    </GridWrapper>
  );
}

export default PostGrid;
