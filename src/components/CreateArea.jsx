import React, {useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import {Fab, Zoom} from "@material-ui/core";

function CreateArea(props) {
    const [inputText, setInputText] = useState({
        title: "",
        content: ""
    });

    const [isClicked, setIsClicked] = useState(false)

    function expand() {
        setIsClicked(true);
    }

    function handleChange(event) {
        const {name, value} = event.target;
        setInputText(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        });
    }

    function submitNote(event) {
        props.addNote(inputText);

        setInputText({
            title: "",
            content: ""
        });
        event.preventDefault();

    }

    return (
        <div>
            <form className="create-note">

                {
                    isClicked && <input onChange={handleChange} name="title" placeholder="Title"
                                        value={inputText.title} autoComplete="off"/>
                }

                <textarea onClick={expand} onChange={handleChange} name="content" placeholder="Take a note..."
                          rows={isClicked ? 3 : 1}
                          value={inputText.content}/>

                {
                    (inputText.title !== "" || inputText.content !== "") &&
                    <Zoom in={true}>
                        <Fab onClick={submitNote}>
                            <AddIcon/>
                        </Fab>
                    </Zoom>

                }

            </form>
        </div>
    );
}

export default CreateArea;