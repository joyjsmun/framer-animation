import styled from "styled-components";
import {motion, useMotionValue,useTransform,useViewportScroll,AnimatePresence} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
height:100vh;
width:100vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Box = styled(motion.div)`
  width:200px;
  height:200px;
  background-color: white;
  border-radius: 20px;
  display:flex;
  justify-content: center;
  position: absolute;
  align-items: center;
  top:100px;
  font-size: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  
`
const box = {
  invisible:{
    x:500,
    opacity:0,
    scale:0,
  },
  visible:{
    x:0,
    opacity:1,
    scale:1,
    transition:{
      duration:1,
    }
  },
  leaving:{
    x:-500,
    opacity:0,
    scale:0,
    transition:{
      duration:1,
    }
  }
}

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
  const [visible,setVisible] =useState(1);
  const next = () => setVisible((prev) => (prev === 10 ? 10 : prev+1));
  return ( 
    <Wrapper>
      <AnimatePresence>
        {[1,2,3,4,5,6,7,8,9,10].map((i) => (
          i === visible ? <Box variants={box} initial="invisible" animate="visible" exit="leaving" key={i}>{i}</Box> :null
        ))}
      </AnimatePresence>
      <button onClick={next}>next</button>
     </Wrapper>
  );
}

export default App;
