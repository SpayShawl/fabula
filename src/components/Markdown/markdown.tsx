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

  if(!post) {
    return null;
  }

  return (
    <>
      <mk.default className="markdown-body">
        {post}
      </mk.default>
      <p className="author">Écrit par {(stories as Stories)[file_name].authors.join(' & ')}</p>
    </>
  );
}

export default Markdown;
