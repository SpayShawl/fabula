import { Stories } from '../../types/Stories';
import stories from "../../stories/stories.json"
import * as mk from 'markdown-to-jsx';

type Props = {}

const Glossary: React.FunctionComponent<Props> = () => {
  return (
    <main className="glossary">
      <mk.default className="markdown-body">{
        "## Mnémosyne" + "  \n" +
        "`L'Ichor suintant liquoreux au coin des yeux,`" + "  \n" +
        "`Au coin des lèvres, au coin d'avant, au coin du monde,`" + "  \n" +
        "`Sur le bord du Styx le temps immuable tombe,`" + "  \n" +
        "`T'incombe d'une obole aux sens fêlés, calleux.`" + "  \n" + "  \n" +

        "`Au Léthé s'abreuvent, Mnémosyne charriée,`" + "  \n" +
        "`Âmes défuntes, âmes perdues, âmes damnées,`" + "  \n" +
        "`Cherchant véhémentes le temps de perdition,`" + "  \n" +
        "`Des fantômes pâles aux champs des lamentations.`" + "  \n" +

        "`Malheureux qui celui, dépourvu de la paix,`" + "  \n" +
        "`Centenaire d'abandon, centenaire d'olivaie,`" + "  \n" +
        "`Suppliera Chéron de lui prendre sa vie,`" + "  \n" +
        "`Sa mort et sa passion, pour un peu de répit.`" + "  \n" + "  \n" +

        "`Ô Phlégéthon ignescent, emporte avec toi`" + "  \n" +
        "`Sa rage et ses tourments, ses mépris, ses ébats,`" + "  \n" +
        "`Qui sans mesure, sans état indéniable font,`" + "  \n" +
        "`Sombrer son âme en les tréfonds de l'Achéron.`"+ "  \n" +
        "## Histoires"
      }
      </mk.default>
      {Object.keys(stories as Stories).map(s => (
        <a className="underline"  href={`/?story=${s}`}>{(stories as any)[s].title}</a>
      ))}
    </main>
  );
}

export default Glossary;
