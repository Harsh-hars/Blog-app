import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const Editor = ({value , setContent}) => {
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };
  return (
    <div>
       <ReactQuill theme="snow" value={value} onChange={setContent} modules={modules} />
    </div>
  )
}

export default Editor
