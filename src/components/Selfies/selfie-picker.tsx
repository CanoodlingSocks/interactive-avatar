import SelfieIcon from "./selfie-icon";
import EmoSelfieIcon from "./emoselfie-icon";
import AnimuSelfieIcon from "./animuselfie-icon";

type SelfieType = {
    type: SelfieType
    randomImage: string
}

const SelfiePicker = (props: any) => {

    //TODO: Change this to a switch case

    if (props.randomImage === "EmoLela") {
        return <EmoSelfieIcon />
    } else if (props.randomImage == "Lela") {
        return <SelfieIcon />
    } else {
        return <AnimuSelfieIcon />
    }
}

export default SelfiePicker;