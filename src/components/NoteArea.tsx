import { Editor } from "@tinymce/tinymce-react";
import { useReducer } from "react";

type Props = { tiny_mce_api_key: string | undefined };

export type NotesState = {
  text: string;
};

export const DEFAULT_NOTE_STATE: NotesState = {
  text: "",
};

export type SetNotesAction = {
  type: "SET_NOTES";
  payload: {
    text: string;
  };
};

export const notesReducer = (state: NotesState, action: SetNotesAction) => {
  switch (action.type) {
    case "SET_NOTES":
      return {
        ...state,
        text: action.payload.text,
      };
    default:
      return state;
  }
};

const NoteArea = ({ tiny_mce_api_key }: Props) => {
  const [notes, dispatchNotes] = useReducer(notesReducer, DEFAULT_NOTE_STATE);

  return (
    <div className="mt-2">
      <Editor
        onEditorChange={(content, editor) => {
          dispatchNotes({ type: "SET_NOTES", payload: { text: content } });
        }}
        value={notes.text}
        apiKey={tiny_mce_api_key}
      />
    </div>
  );
};

export default NoteArea;
