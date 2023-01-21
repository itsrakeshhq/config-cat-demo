import React, { useEffect, useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Fab, Zoom } from "@material-ui/core";
import { useFeatureFlag } from "configcat-react";

function CreateArea(props) {
  const [inputText, setInputText] = useState({
    title: "",
    content: "",
  });

  const {
    value: isTitleFeatureEnabled,
    loading: isTitleFeatureEnabledLoading,
  } = useFeatureFlag("isTitleFeatureEnabled", false);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputText((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.addNote(inputText);

    setInputText({
      title: "",
      content: "",
    });
    event.preventDefault();
  }

  return (
    <div>
      <form className="create-note">
        {!isTitleFeatureEnabledLoading && isTitleFeatureEnabled && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={inputText.title}
            autoComplete="off"
          />
        )}

        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows={3}
          value={inputText.content}
        />

        {(inputText.title !== "" || inputText.content !== "") && (
          <Zoom in={true}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        )}
      </form>
    </div>
  );
}

export default CreateArea;
