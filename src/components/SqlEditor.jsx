import Editor from '@monaco-editor/react';

const SqlEditor = () => {
  return (
    <div>
      <Editor
      height ='39.2vh'
      width ='79.75vw'
      theme = 'vs-dark'
      defaultLanguage='sql'
      ></Editor>
    </div>
  )
}
export default SqlEditor
