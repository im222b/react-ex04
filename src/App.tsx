
import styled from "styled-components";
import { motion } from "framer-motion"
import { hover } from "@testing-library/user-event/dist/hover";
import { click } from "@testing-library/user-event/dist/click";

const Wrapper =styled.div `
  display: flex;
  height: 100vh;
  width: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  background-color: rgba(2555, 255, 255, 1);
  border-radius: 40px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;


const boxVariants = {
  hover : {scale:1.5 ,rotateZ: 90},
  click : {scale:1 , borderRadius: "100px"}
};



function App() {
    return (
    <Wrapper>
      <Box 
      variants={boxVariants}
      whileHover="hover" 
      whileTap="click" 
      />
    </Wrapper>
    );
  }
  
  
export default App;
