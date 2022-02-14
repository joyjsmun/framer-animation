import styled from "styled-components";
import {motion} from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
height:100vh;
width:100vw;
display: flex;
justify-content: center;
align-items: center;
`

const Box = styled(motion.div)`
  width:200px;
  height:200px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  
`


const boxVariants = {
 hover:{rotateZ:180}

}

const BigBox = styled(motion.div)`
  width: 600px;
  height: 600px;
  background-color: violet;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
 
`  

function App() {
  const biggerBoxRef = useRef<HTMLDivElement>(null)
  return (
    <Wrapper>
      <BigBox ref={biggerBoxRef} >
      <Box drag dragSnapToOrigin dragConstraints={biggerBoxRef}  variants={boxVariants} whileDrag="drag" whileHover="hover" whileTap="click"/>
      </BigBox>
    
  </Wrapper>
  );
}

export default App;
