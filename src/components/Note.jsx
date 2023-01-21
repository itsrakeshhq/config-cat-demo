import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { useFeatureFlag } from "configcat-react";

function Note(props) {
  const userObject = {
    identifier: "643564",
    email: "rakesh@example.com",
    country: "Japan",
  };

  const {
    value: isDeleteFeatureEnabled,
    loading: isDeleteFeatureEnabledLoading,
  } = useFeatureFlag("isDeleteFeatureEnabled", false, userObject);

  function handleClick() {
    if (!isDeleteFeatureEnabled) {
      return;
    }
    props.deleteNote(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      {!isDeleteFeatureEnabledLoading && (
        <button onClick={handleClick} disabled={!isDeleteFeatureEnabled}>
          <DeleteIcon />
        </button>
      )}
    </div>
  );
}

export default Note;
