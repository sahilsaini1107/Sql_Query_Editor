import Editor from '@monaco-editor/react';

const SqlEditor = () => {
  return (
    <div>
      <Editor
      height ='39.2vh'
      width ='70vw'
      theme = 'vs-dark'
      defaultLanguage='sql'
      ></Editor>
    </div>
  )
}
export default SqlEditor
