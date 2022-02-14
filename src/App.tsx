import styled from "styled-components";
import {motion, useMotionValue,useTransform,useViewportScroll,AnimatePresence} from "framer-motion";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled(motion.div)`
height:100vh;
width:100vw;
display: flex;
justify-content: space-around;
align-items: center;

`

const Box = styled(motion.div)`
  width:400px;
  height:400px;
  background-color: white;
  border-radius: 20px;
  display:flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
  
`
const Circle = styled(motion.div)`
  background-color: #00a5ff;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);

`


// const box = {
//   entry:(isBack:boolean) => ({
//         x:isBack? -500:500,
//         opacity:0,
//         scale:0,
//   }),
//   center:{
//     x:0,
//     opacity:1,
//     scale:1,
//     transition:{
//       duration:0.2,
//     }
//   },
//   leaving:(isBack:boolean) => ({
    
//       x:isBack? 500:-500,
//       opacity:0,
//       scale:0,
//       rotateX:180,
//       transition:{
//         duration:0.2,    
//   }
// })
// }

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

// const boxVariants = {
//   entry:{
//     opacity:0,
//     scale:0,
//   },
//   center:{
//     opacity:1,
//     scale:1,
//     rotateZ:360,
//   },
//   leaving:{
//     opacity:0,
//     scale:0,
//     transition:{duration:5}
//   }
// }


function App() {
  const [clicked,setClick] = useState(false);
  const toggleClicked = () => setClick((prev) => !prev);
  return ( 
    <Wrapper onClick={toggleClicked}>
      <Box>
        {clicked ? <Circle layoutId="circle" style={{borderRadius:50}}/> :null}
      </Box>
      <Box>
        {!clicked ? <Circle layoutId="circle"  style={{borderRadius:0}}/>:null }
      </Box>
     </Wrapper>
  );
}

export default App;
