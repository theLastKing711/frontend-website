import { useSelector } from "react-redux";
import useControlDialog from "./useControlDialog"
import { tokenSelector } from "../redux/features/auth/auth";

const useAuthControlDialog = () => {

    const isUserLogged = useSelector(tokenSelector);
    const  { isOpen, closeDialog, openDialog } = useControlDialog(); 
    
    const openIfLoggedDialog = ( cb: () => void ) => {
        
        if(isUserLogged) {
            cb();
        }
        else {
            openDialog();
        }

    }
    

    return {
        isOpen,
        closeDialog,
        openIfLoggedDialog
    }

}

export default useAuthControlDialog