import { motion, useMotionValue, useTransform } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Image from "../../../src/assets/images/kj.png";
import { AgentDetails } from "./AgentDetails";

const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  perspective: 2000;
  background-color: #edede9;
`;

const CardContainer = styled(motion.div)`
  width: 285px;
  height: 500px;
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  box-shadow: 0 2px 7px 1px rgba(31, 31, 31, 0.2);
  background-color: #1d1f21;
  /* background: url("https://images.unsplash.com/photo-1586020435958-8298e2cb5f64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"); */
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  color: #fff;
  cursor: grab;
`;

const CircleWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  min-width: 100%;
  min-height: 100%;
  overflow: hidden;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
`;

const Circle = styled.div`
  position: absolute;
  width: 380px;
  height: 380px;
  top: -4.2rem;
  left: -12rem;
  z-index: 5;
  background-color: #fbbe01;
  border-radius: 50%;
`;
const Circle2 = styled.div`
  position: absolute;
  width: 90px;
  height: 90px;
  top: -1rem;
  right: -1rem;
  overflow: hidden;
  z-index: 5;
  background-color: #fbbe01;
  border-radius: 50%;
`;
const Square = styled.div`
  position: absolute;
  width: 20px;
  height: 1px;
  top: 8rem;
  right: 4rem;
  z-index: 5;
  background-color: #fbbc019d;
  /* border-radius: 50%; */
`;
const Square2 = styled.div`
  position: absolute;
  width: 7px;
  height: 7px;
  top: 4.2rem;
  left: 12rem;
  z-index: 5;
  background-color: #fbbc0189;
  /* border-radius: 50%; */
`;
const Square3 = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  top: 6rem;
  right: 1rem;
  z-index: 5;
  background-color: #fbbc019e;
  /* border-radius: 50%; */
`;

const TopContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex: 1.2;
  position: relative;
  align-items: center;
  justify-content: flex-end;
  padding: 1rem 1px;
`;
const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0.8;

  padding: 0 1rem;
`;

const AgentText = styled.h1`
  color: #fff;
  text-transform: uppercase;
  margin: 0;
  z-index: 7;
  font-family: "Unbounded", cursive;
  font-size: 2.8rem;
  font-weight: 700;

  letter-spacing: 3px;
`;

const CurrentAgentWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const CurrentAgent = styled(motion.div)`
  width: auto;
  height: 260px;
  z-index: 99;
  user-select: none;
  img {
    width: auto;
    height: 100%;
    object-fit: cover;
    user-select: none;
    border-radius: 10px;

    /* border: 1px solid #ffffff48; */
  }
`;

export function ValoAgent(props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);
  return (
    <CardWrapper>
      <CardContainer
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.16}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
      >
        <TopContainer>
          <CircleWrapper>
            <Circle />
            <Circle2 />
          </CircleWrapper>
          <Square />
          <Square2 />
          <Square3 />
          <CurrentAgentWrapper>
            <CurrentAgent
              style={{ x, y, rotateX, rotateY, z: 1000 }}
              drag
              dragElastic={0.12}
              dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
              whileTap={{ cursor: "grabbing" }}
            >
              <img src={Image} />
            </CurrentAgent>
          </CurrentAgentWrapper>
          <AgentText>KILLJOY</AgentText>
        </TopContainer>
        <BottomContainer>
          <AgentDetails />
        </BottomContainer>
      </CardContainer>
    </CardWrapper>
  );
}
