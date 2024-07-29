import FtIsalndImg from "../../../../components/CSS/image/MusicImg/ftisland.png";
import QWERImg from "../../../../components/CSS/image/MusicImg/QWER.png";
import TTLImg from "../../../../components/CSS/image/MusicImg/TTL.png";
import HelloHello from "../../../../components/Music/HelloHello-FTIsland.mp3";
import TTL from "../../../../components/Music/TTL-티아라.mp3";
import QWER from "../../../../components/Music/고민중독-QWER.mp3";
import Lomentic from "../../../../components/Music/로맨틱 겨울 - 김찬호.mp3";
import Ben from "../../../../components/Music/혼술하고 싶은 밤-벤.mp3";
import Seventeen from "../../../../components/Music/청춘찬가-세븐틴.mp3";
import LomenticImg from "../../../../components/CSS/image/MusicImg/Lomentic.jpg";
import BenImg from "../../../../components/CSS/image/MusicImg/Ben.jpg";
import SeventeenImg from "../../../../components/CSS/image/MusicImg/Seventeen.png";

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
  {
    id: 4,
    name: handleName(Seventeen),
    author: handleAuthor(Seventeen),
    play: Seventeen,
    img: SeventeenImg,
  },
  {
    id: 5,
    name: handleName(Lomentic),
    author: handleAuthor(Lomentic),
    play: Lomentic,
    img: LomenticImg,
  },
  {
    id: 6,
    name: handleName(Ben),
    author: handleAuthor(Ben),
    play: Ben,
    img: BenImg,
  },
];
