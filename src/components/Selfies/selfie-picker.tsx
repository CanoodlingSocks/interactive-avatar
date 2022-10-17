import SelfieIcon from "./selfie-icon";
import EmoSelfieIcon from "./emoselfie-icon";

type SelfieType = {
    type: SelfieType
    togglebtn: boolean
}

const SelfiePicker = (props: any) => {

        if (props.togglebtn === true){
            return <EmoSelfieIcon />
            } else {
                return <SelfieIcon />
            }
}

export default SelfiePicker;