import Box from '@mui/material/Box'
import SelfiePicker from '../Selfies/selfie-picker';
import Button from '@mui/material/Button';
import {useState} from "react";

function Home() {

   
const [toggle, setToggle] = useState<boolean>(false);

let SelfieType = {
    togglebtn: toggle
}
    
    return(
<>
<Box
display="flex"
justifyContent="center"
>
<SelfiePicker {...SelfieType}/>    
</Box>
<Box
        display="flex"
        justifyContent="center"
        m="2rem"
        >
<Button 
variant="contained"
onClick={() => setToggle(!toggle)}
>
    Change hair
    </Button>
        </Box>
</>
    )
}

export default Home;

