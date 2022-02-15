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
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  height: 200px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};


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
 const [id,setId] = useState<null | string>(null);
 console.log(id)
  return ( 
    <Wrapper>
      <Grid>
      {["1","2","3","4"].map(n => <Box onClick={() => setId(n)} key={n} layoutId={n}/>)}
      </Grid>
      <AnimatePresence>{id ? 
        (<Overlay 
          onClick={() => setId(null)}
        variants={overlay} 
        initial="hidden" animate="visible" exit="exit">
          <Box layoutId={id}  style={{width:400, height:400}}/>
        </Overlay>
        ):null}
        </AnimatePresence>
     </Wrapper>
  );
}

export default App;
