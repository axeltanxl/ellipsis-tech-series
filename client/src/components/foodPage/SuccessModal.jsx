import { Dialog, DialogActions, DialogContent, Button, DialogTitle, CircularProgress } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { setSuccessModal } from "../../store/ExampleSlice";
import DisplayAnalysis from "./DisplayAnalysis";
export const SuccessModal = () => {
    const openDialog = useSelector((state) => state.example.successModal)
    const dispatch = useDispatch()


        return (
        <Dialog open={openDialog} onClose={() => dispatch(setSuccessModal(false))}>
            {!!open && <DisplayAnalysis/>}
        </Dialog>);
    }
