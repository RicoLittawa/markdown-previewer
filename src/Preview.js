import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMaximize } from "@fortawesome/free-solid-svg-icons";

const Preview = ({
  content,
  isPreviewVisible,
  setPreviewVisible,
  isEditorVisible,
}) => {

  const handlePreviewToggle = () => {
    setPreviewVisible(!isPreviewVisible);
  };

  return (
    <div className={`previewWrap py-3 ${isEditorVisible ? "d-none" : ""}`}>
      <div className="toolbar d-flex justify-content-between px-1">
        <h4 className="titleColor ms-2 my-2 fw-bold">Preview</h4>
        <button onClick={handlePreviewToggle} className="btn my-1">
          <FontAwesomeIcon className="iconColor" icon={faMaximize} />
        </button>
      </div>
      <div id="preview" className="container">
        {content}
      </div>
    </div>
  );
};

export default Preview;
