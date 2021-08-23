import Button from "../UI/Button/Button";
import Modal from "../UI/Input/Modal";


const Score = (props) => {

    return(
        <Modal onClose={props.onClose}>
            <h6>Your Total Score is : {props.newscore}</h6>
            <h1>Thank you..!!😊</h1>
            <Button onClick={props.onClose}>Close</Button>
        </Modal>
    )
}
export default Score;