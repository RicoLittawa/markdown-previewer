import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { marked } from "marked"; // Import specific member(s) from 'marked'

const Editor = ({
  content,
  setContent,
  isPreviewVisible,
  setEditorVisible,
  isEditorVisible,
}) => {
  const [maximize, setMaximize] = useState(false);

  useEffect(() => {
    // Function to convert markdown to HTML using marked
    const convertToHtml = () => {
      const htmlText = marked(content, { breaks: true });
      document.getElementById("preview").innerHTML = htmlText;
    };

    convertToHtml(); // Convert initial markdown text to HTML on component mount
  }, [content]);

  const handleEditorToggle = () => {
    setMaximize(!maximize);
    setEditorVisible(!isEditorVisible);
  };
  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <div className={`editorWrap py-3 ${isPreviewVisible ? "d-none" : ""}`}>
      <div className="toolbar d-flex justify-content-between px-1">
        <h4 className="titleColor ms-2 my-2 fw-bold">Editor</h4>
        <button onClick={handleEditorToggle} className="btn my-1">
          <FontAwesomeIcon className="iconColor" icon={faMaximize} />
        </button>
      </div>
      <textarea
        value={content}
        onChange={handleChange}
        id="editor"
        rows={maximize ? 22 : 7}
      ></textarea>
    </div>
  );
};

export default Editor;
