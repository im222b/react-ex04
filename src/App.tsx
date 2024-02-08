
import styled from "styled-components";
import { motion, useMotionValue, useTransform, useScroll, useViewportScroll, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react";
import { start } from "repl";


const Wrapper =styled(motion.div) `
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg,rgb(41, 213, 58),rgb(17, 174, 114));
`;

const Box = styled(motion.div) `
  width: 400px;
  height: 400px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
const Circle = styled(motion.div)`
  background-color: #193ffb;
  width: 100px;
  height: 100px;
 
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

`

function App() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => setClicked((prev) => !prev);
    return (
      <Wrapper onClick={toggleClicked}>
          <Box>{!clicked ? <Circle layoutId="circle" style={{borderRadius: 50}} /> : null }</Box>
          <Box>{clicked ? <Circle layoutId="circle" style={{borderRadius: 0,scale:2} } /> : null}</Box>
      </Wrapper>
    );
  }
  
  
export default App;
