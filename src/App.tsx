import styled from "styled-components";
import {motion, useMotionValue,useTransform} from "framer-motion";
import { useEffect, useRef } from "react";

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


function App() {
  const x = useMotionValue(0);
  const tomatoScale = useTransform(x,[-800,0,800],[2,1,0]);
  useEffect(() => {
    // x.onChange(() => console.log(x.get()))
    x.onChange(() => console.log(tomatoScale.get()))
  },[x]);
  return (
    <Wrapper>
      <Box drag="x" style={{x,scale:tomatoScale}} dragSnapToOrigin />
  </Wrapper>
  );
}

export default App;
