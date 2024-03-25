import { useState } from 'react';
import { marked } from 'marked';
import './styles.css';

function App() {
  const [text, setText] = useState('');

  function handleChange(e) {
    const inputText = e.target.value;
    const html = marked.parse(inputText);
    setText(html);
  }

  function RenderHTMLString({ htmlString }) {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: htmlString,
        }}
      />
    );
  }

  return (
    <div className="container">
      <h1 className="title">Markdown Previewer</h1>
      <div className="content">
        <div className="editor">
          <h2 className="editor-title">Editor</h2>
          <textarea
            className="textarea"
            name="markdown-input"
            id="markdown-input"
            cols="30"
            rows="10"
            onChange={handleChange}
            placeholder="Type your Markdown here..."
          ></textarea>
        </div>
        <div className="preview">
          <h2 className="preview-title">Preview</h2>
          <RenderHTMLString htmlString={text} />
        </div>
      </div>
    </div>
  );
}

export default App;