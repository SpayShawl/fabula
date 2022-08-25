import { Stories } from '../../types/Stories';
import stories from "../../stories/stories.json"

type Props = {}

const Glossary: React.FunctionComponent<Props> = () => {
  return (
    <main className="glossary">
    {Object.keys(stories as Stories).map(story => (
      <a href={`/?story=${story}`}>{story}</a>
    ))}
    </main>
  );
}

export default Glossary;
