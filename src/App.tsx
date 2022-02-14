import styled from "styled-components";
import {motion} from "framer-motion";

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
 hover:{scale:2,rotateZ:180},
 click:{borderRadius:"100px",scale:1},
 drag:{backgroundColor:"rgb(255, 121, 121)", transition:{duration:10}},
}


function App() {
  return (
    <Wrapper>
    <Box drag variants={boxVariants} whileDrag="drag" whileHover="hover" whileTap="click"/>
  </Wrapper>
  );
}

export default App;
