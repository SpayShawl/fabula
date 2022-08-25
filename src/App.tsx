import './App.css';
import Glossary from './components/Glossary/glossary';
import Markdown from './components/Markdown/markdown';
import { getQueryparameter } from './utils/queries';

const App: React.FunctionComponent = () => {
  const file_name = getQueryparameter('story');

  if(!file_name) {
    return <Glossary></Glossary>;
  }

  return (
    <main>
      <Markdown file_name={file_name}></Markdown>
    </main>
  );
}

export default App;
