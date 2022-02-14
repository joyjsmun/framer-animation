import styled from "styled-components";
import {motion, useMotionValue,useTransform,useViewportScroll,AnimatePresence} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
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


// const Svg = styled.svg`
//  height: 600px;
//  width: 600px;
//  path{
//    stroke:white;
//    stroke-width:2;
//  }
// `

// const svg = {
//   start:{
//     pathLength:0,fill:"rgba(255,255,255,0)"
//   },
//   end:{
//     fill:"rgba(255,255,255,1)",
//     pathLength:1,
//   }
// }

const boxVariants = {
  initial:{
    opacity:0,
    scale:0,
  },
  visible:{
    opacity:1,
    scale:1,
    rotateZ:360,
  },
  leaving:{
    opacity:0,
    scale:0,
    transition:{duration:5}
  }
}


function App() {
  const [showing,setShowing] = useState(false);
  const toggleShowing = () => setShowing((prev) => !prev);
  return (
    <Wrapper>
     <button onClick={toggleShowing}>CLick</button>
    <AnimatePresence > {showing? <Box variants={boxVariants} initial="initial" animate="visible" exit="leaving"/> : null}</AnimatePresence>
  </Wrapper>
  );
}

export default App;
