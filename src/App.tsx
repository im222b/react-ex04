
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
  height: 200px;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  position: absolute;
  top: 100px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`
const boxVariants ={
  initial: {
    opacity:0,
    scale:0
  },
  visible: {
    opacity:1,
    scale:1,
    Z:10,
  },
  leaving: {
    opacity:0,
    scale:0,
    y:50,
  },

};


function App() {
  const [showing, setshowing] = useState(false);
  const toggleShowing = () => setshowing((prev) => !prev);
    return (
    <Wrapper>
      <button onClick={toggleShowing}>Click</button>
        <AnimatePresence>{showing ? <Box 
          variants={boxVariants} 
          initial="initial" 
          animate="visible"
          exit="leaving"
          /> : null}
        </AnimatePresence>
    </Wrapper>
    );
  }
  
  
export default App;
