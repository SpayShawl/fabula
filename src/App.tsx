import Markdown from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import './App.css';

const App: React.FunctionComponent = () => {
  const file_name = 'vita.md';
  const [post, setPost] = useState('');
  
  useEffect(() => {
    import(`./stories/${file_name}`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setPost(res))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
  });

  return (
    <main>
      <Markdown className="markdown-body">
        {post}
      </Markdown>
    </main>
  );
}

export default App;
