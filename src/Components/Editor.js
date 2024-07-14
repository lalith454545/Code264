import React, { useEffect, useRef } from "react";
import { EditorView, basicSetup } from 'codemirror';
import { EditorState } from "@codemirror/state";
import { javascript } from "@codemirror/lang-javascript";
import { oneDark } from "@codemirror/theme-one-dark";
import { closeBrackets } from "@codemirror/closebrackets"; 

const Editor = () => {
    const editorRef = useRef(null);

    useEffect(() => {
        if (editorRef.current) {
            const initialState = EditorState.create({
                doc: '',
                extensions: [
                    basicSetup,
                    javascript(),
                    oneDark,
                    closeBrackets(),
                ]
            });

            const view = new EditorView({
                state: initialState,
                parent: editorRef.current,
            });

            return () => {
                view.destroy();
            };
        }
    }, []);

    return (
        <div>
            <div ref={editorRef} id="realtimeeditor" style={{ height: "500px" }} />
        </div>
    );
};

export default Editor;
