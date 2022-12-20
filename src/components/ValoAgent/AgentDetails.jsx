import React from "react";
import styled from "styled-components";

const DetailsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 8px 0 8px;
`;
const Titles = styled.span`
  font-size: 0.9rem;
  margin: 0.2rem 0;
  font-family: "Outfit", sans-serif;
`;
const WeightedText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  font-family: "Unbounded", cursive;
`;
const MediumText = styled.span`
  font-size: 0.8rem;
  font-weight: 200;
  margin-top: 0.3rem;
  font-family: "Outfit", sans-serif;
`;

export function AgentDetails(props) {
  return (
    <DetailsContainer>
      <Titles>// Role</Titles>
      <WeightedText>SENTINEL</WeightedText>
      <Titles>// Biography</Titles>
      <MediumText>
        The genius of Germany. Killjoy secures the battlefield with ease using
        her arsenal of inventions.
      </MediumText>
    </DetailsContainer>
  );
}
