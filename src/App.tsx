
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll, useViewportScroll } from "framer-motion"
import { useEffect } from "react";


const Wrapper =styled(motion.div) `
  display: flex;
  height: 500vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,rgb(238,0,153),rgb(221,0,238));
  
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-800, +800], [-360,  360]);
  const gradient = useTransform(
    x, [-800, 800], 
    [
      "linear-gradient(135deg,rgb(21, 169, 192),rgb(0, 87, 238))",
      "linear-gradient(135deg,rgb(39, 221, 7),rgb(171, 203, 11))"
    ])
  const {scrollXProgress} = useScroll();
    return (
    <Wrapper style={{background:gradient}}>
        <Box
          style={{ x , rotateZ , scale : scrollXProgress }} 
          drag="x" 
          dragSnapToOrigin

          />
    </Wrapper>
    );
  }
  
  
export default App;
