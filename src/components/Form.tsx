import { useState } from 'react';
import ReactQuill from 'react-quill';

interface FormProps {
    onAdd: (content: string) => void;
  }
  
  const Form: React.FC<FormProps> = ({ onAdd }) => {
    const [content, setContent] = useState('');
  
    const handleAdd = () => {
      onAdd(content);
      setContent('');
    };
  
    return (
      <div>
        <h2>Notes</h2>
        <ReactQuill
          value={content}
          onChange={(value) => setContent(value)}
          modules={{ toolbar: [['bold', 'italic', 'underline', 'strike']] }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
    );
  };
  
  export default Form;