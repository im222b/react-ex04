
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
  flex-direction: column;
`;

const Box = styled(motion.div) `
  width: 400px;
  height: 200px;
  top: 100px;
  background-color: rgba(255, 255, 255, 1);
  position: absolute;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`

const box = {
  entry: (back:boolean) => ({
      x:back ? -500 : 500,
      opacity: 0,
      scale: 0,
  }),
  center:{
    x:0,
    opacity: 1,
    scale: 1,
    transition: {
      duration:1,
    }
  },
  exit: (back: boolean) =>({
    x: back ? 500: -500,
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
    }
  })
};


function App() {
  const [visible, setVisible] = useState(1);
  const [back , setBack] = useState(false);
  const nextPlease = () => {
    setBack(false);
    setVisible(prev => (prev === 10 ? 10: prev + 1 ));
  };
  const prvePlease = () => {
    setBack(true);
    setVisible(prev => (prev === 1? 1: prev - 1));
  };
    return (
    <Wrapper>
      <AnimatePresence custom={back}>

        <Box
          custom={back}
          variants={box} 
          initial="entry"
          animate="center"
          exit="exit"
          key={visible}>
        {visible} </Box> 
      </AnimatePresence>
      <button onClick={nextPlease}>next</button>
      <button onClick={prvePlease}>prve</button>
    </Wrapper>
    );
  }
  
  
export default App;
