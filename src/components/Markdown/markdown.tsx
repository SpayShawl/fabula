import { BsArrowLeftCircle } from 'react-icons/bs';
import * as mk from 'markdown-to-jsx';
import { useEffect, useState } from 'react';
import stories from '../../stories/stories.json';
import { Stories } from '../../types/Stories';

type Props = {
  file_name: string
}

const Markdown: React.FunctionComponent<Props> = ({
  file_name
}) => {
  const [post, setPost] = useState('');
  
  useEffect(() => {
    import(`../../stories/${file_name}.md`)
        .then(res => {
            fetch(res.default)
                .then(res => res.text())
                .then(res => setPost(res))
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
  });

  const formatText = (text: string): string => {
    return text
      .replaceAll(/(.)(\n){1}\\-/g, `$1\n\n\\-`)
      .replaceAll('	', '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;')

  }

  if(!post) {
    return null;
  }

  return (
    <div className="markdown">
      <a className="back" href='/'><BsArrowLeftCircle></BsArrowLeftCircle></a>
      <mk.default className="markdown-body">
        {formatText(post)}
      </mk.default>
      <p className="author">Écrit par {(stories as Stories)[file_name].authors.join(' & ')}</p>
    </div>
  );
}

export default Markdown;
