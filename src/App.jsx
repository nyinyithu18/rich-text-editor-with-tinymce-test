import React, { useState } from 'react'
import './App.css'
import { Editor } from '@tinymce/tinymce-react'

const App = () => {
  const [text, setText] = useState()
  const [value, setValue] = useState('<p>Tiny MCE editor....</p>')
  console.log("text => ", text);
  console.log("value => ", value);
  return (
    <div className='app'>
      <Editor
      apiKey='sws1roo2zm031ob4l9dw3a82a3eo9d3hg6s7kadvklg509lb'
      onEditorChange={(newValue, editor) => {
        setText(editor.getContent({format: 'text'}))
        setValue(newValue)
      }}
      onInit={(evt, editor) => {
        setText(editor.getContent({format: 'text'}))
      }}
      init={{
        plugins: 'export anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
        toolbar: 'export undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
        tinycomments_mode: 'embedded',
        tinycomments_author: 'Author name',
        //skin:  'oxide-dark' ,
        content_css: 'writer',
        //height: 300,
        //width: 300,
        mergetags_list: [
          { value: 'First.Name', title: 'First Name' },
          { value: 'Email', title: 'Email' },
        ],
        ai_request: (request, respondWith) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
      }}
      initialValue="Hello, Welcom ....."
    />
    </div>
  )
}

export default App