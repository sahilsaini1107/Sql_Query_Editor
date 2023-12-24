import Editor from '@monaco-editor/react';

const SqlEditor = ({code}) => {
  const options = {
    autoIndent: 'full',
    contextmenu: true,
    fontFamily: 'monospace',
    fontSize: 13,
    lineHeight: 24,
    hideCursorInOverviewRuler: true,
    matchBrackets: 'always',
    minimap: {
      enabled: true,
    },
    scrollbar: {
      horizontalSliderSize: 4,
      verticalSliderSize: 18,
    },
    selectOnLineNumbers: true,
    roundedSelection: false,
    readOnly: false,
    cursorStyle: 'line',
    automaticLayout: true,
  }; 
  
  return (
    <div>
      <Editor
      height ='39.2vh'
      width ='70vw'
      theme = 'vs-dark'
      defaultLanguage='sql'
      options={options}
      value={code}
      ></Editor>
    </div>
  )
}
export default SqlEditor
