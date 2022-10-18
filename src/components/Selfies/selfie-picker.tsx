import SelfieIcon from "./selfie-icon";
import EmoSelfieIcon from "./emoselfie-icon";
import AnimuSelfieIcon from "./animuselfie-icon";
import ShortHairSelfieIcon from "./shorthairselfie-icon";
import BraidedSelfieIcon from "./braidedselfie-icon";
import VulcanSelfieIcon from "./vulcanselfie-icon";
import StraightHairSelfieIcon from "./straighthairselfie-icon";

type SelfieType = {
    type: SelfieType
    randomImage: string
}

const SelfiePicker = (props: any) => {

const imageNames = props.randomImage

    switch (imageNames) {
        case "EmoLela":
            return <EmoSelfieIcon />
        case "Lela":
            return <SelfieIcon />
        case "AnimuLela":
            return <AnimuSelfieIcon />
        case "ShortHairLela":
            return <ShortHairSelfieIcon />
        case "BraidedLela":
            return <BraidedSelfieIcon />

        case "VulcanLela":
            return <VulcanSelfieIcon />
        case "StraightHairLela":
            return <StraightHairSelfieIcon />
        default:
            return <SelfieIcon />
    }
}

export default SelfiePicker;