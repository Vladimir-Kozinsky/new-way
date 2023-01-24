import { useSelector } from "react-redux";
import SuccessMessage from "../../common/messages/SuccessMessage/SuccessMessage";

const withAircraftSuccMess = (Component: any) => ({ ...props }) => {
    const isSuccessMessage = useSelector((state: any) => state.aircraft.isSuccessMessage)
    return (
        <>
            <Component {...props} />
            <SuccessMessage toggle={isSuccessMessage} />
        </>
    )
}

export default withAircraftSuccMess;