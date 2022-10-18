import Box from '@mui/material/Box'
import SelfiePicker from '../Selfies/selfie-picker';
import Button from '@mui/material/Button';
import { useState } from "react";


function Home() {

    const images = [
        "Lela",
        "EmoLela",
        "AnimuLela",
        "ShortHairLela",
        
    ];

    const [image, setImage] = useState<string>("Lela");

    let SelfieType = {
        randomImage: image
    }

    function randomizeImg() {
        const randomImage = images[Math.floor(images.length * Math.random())];
        setImage(randomImage);
    }

    return (
        <>
            <Box
                display="flex"
                justifyContent="center"
            >
                <SelfiePicker {...SelfieType} />
            </Box>
            <Box
                display="flex"
                justifyContent="center"
                m="2rem"
            >
                <Button
                    variant="contained"
                    onClick={() => randomizeImg()}
                >
                    Change hair
                </Button>
            </Box>
        </>
    )
}

export default Home;

