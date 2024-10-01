import ReactQuill from 'react-quill';

interface CardProps {
    id: number;
    content: string;
    onDelete: (id: number) => void;
  }

  const Card: React.FC<CardProps> = ({ id, content, onDelete }) => {
    return (
      <div>
        <ReactQuill
          value={content}
          readOnly
          theme="snow"
          modules={{ toolbar: false }}
        />
        <button onClick={() => onDelete(id)}>⨯</button>
      </div>
    );
  };
  
  export default Card;