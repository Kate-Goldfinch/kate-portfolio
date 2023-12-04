import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ImageCarousel from "../components/ImageCarousel";
import { useLocation } from "react-router-dom";
import SkillTags from "../components/SkillTags";

const PortfolioItemPage = () => {
  const location = useLocation();
  let { title, description, skills, imagePath, github_url, deployment_url } = location.state;

  const [images, setImages] = useState([]);
  useEffect(() => {
    function importAll(r) {
      let images = [];
      for (let image of Object.values(r)) {
        images.push(image);
      }
      return images;
    }
    let urls = import.meta.glob("../assets/**", { eager: true, as: "url" });
    let filterSrc = Object.keys(urls)
      .filter((k) => k.startsWith(imagePath))
      .map((item) => urls[item]);
    setImages(importAll(filterSrc));
  }, []);

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-top: 10px;
    margin-bottom: 30px;
    gap: 30px;
  `;

  const SkillsContainer = styled.div`
    align-self: center;
    display: flex;
    gap: 5px;
    width: 100%;
    flex-wrap: wrap;
  `;
  const LinkContainer = styled.div`
    align-self: center;
    display: flex;
    gap: 20px;
    width: 100%;
    flex-wrap: wrap;
  `;

  const Header = styled.h4`
    font-size: 4rem;
    letter-spacing: 0px;
    font-weight: 500;
    margin: 0;
  `;
  const Text = styled.p`
    font-weight: 400;
    letter-spacing: 0px;
    margin: 0;
    text-align: left;
  `;

  const Link = styled.a`
  font-weight: 400;
  font-size: 1.5rem;
  text-decoration: underline
  `

  return (
    <Container>
      <TextContainer>
        <Header>{title}</Header>
        <SkillsContainer>
          <SkillTags skills={skills} />
        </SkillsContainer>
        <LinkContainer>
        {deployment_url&&(<Link href={`${deployment_url}`}>View Site</Link>)}
        {github_url&&(<Link href={`${github_url}`}>Github</Link>)}
        </LinkContainer>
        <Text>{description}</Text>
      </TextContainer>
      <ImageCarousel images={images} />
    </Container>
  );
};

export default PortfolioItemPage;
