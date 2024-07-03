import QWER from "../../../../components/Music/고민중독-QWER.mp3";
import TTL from "../../../../components/Music/TTL-티아라.mp3";
import HelloHello from "../../../../components/Music/HelloHello-FTIsland.mp3";
import FtIsalndImg from "../../../../components/CSS/image/MusicImg/ftisland.png";
import QWERImg from "../../../../components/CSS/image/MusicImg/QWER.png";
import TTLImg from "../../../../components/CSS/image/MusicImg/TTL.png";

const handleName = (music: string) => {
  return music.replace("/static/media/", "").split("-")[0];
};

const handleAuthor = (music: string) => {
  return music.replace("/static/media/", "").split("-")[1].split(".")[0];
};

export interface MusicProps {
  id: number;
  name: string;
  author: string;
  play: string;
  img: string;
}

export const musicArr: MusicProps[] = [
  {
    id: 1,
    name: handleName(QWER),
    author: handleAuthor(QWER),
    play: QWER,
    img: QWERImg,
  },
  {
    id: 2,
    name: handleName(TTL),
    author: handleAuthor(TTL),
    play: TTL,
    img: TTLImg,
  },
  {
    id: 3,
    name: handleName(HelloHello),
    author: handleAuthor(HelloHello),
    play: HelloHello,
    img: FtIsalndImg,
  },
];
