import { useState } from "react";
import "./App.css";
import Editor from "./Editor";
import Preview from "./Preview";

const App = () => {
  const defaultContent = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\`\\\`\\\`' && lastLine == '\\\`\`\\\`\\\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.

1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)`;
  const [content, setContent] = useState(defaultContent);
  const [isEditorVisible, setEditorVisible] = useState(false);
  const [isPreviewVisible, setPreviewVisible] = useState(false);

  return (
    <div className="App">
      <div className="container" style={{ width: 500 }}>
        <Editor
          content={content}
          setContent={setContent}
          isPreviewVisible={isPreviewVisible}
          isEditorVisible={isEditorVisible}
          setEditorVisible={setEditorVisible}
        />
      </div>
      <div className="container" style={{ width: 800, height: "auto" }}>
        <Preview
          content={content}
          isEditorVisible={isEditorVisible}
          setPreviewVisible={setPreviewVisible}
          isPreviewVisible={isPreviewVisible}
        />
      </div>
    </div>
  );
};

export default App;
