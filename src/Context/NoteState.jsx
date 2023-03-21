import { useState } from "react";
import noteContext from "./noteContext";

const NoteState = (props) => {
    const [open, setOpen] = useState(true);
    const toggleMenu = () => {
        setOpen(!open)
    }
    return(
        <noteContext.Provider value={{open, toggleMenu}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;