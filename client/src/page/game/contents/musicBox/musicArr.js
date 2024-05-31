import QWER from "../../../../components/Music/QWER-고민중독.mp3";
import TTL from "../../../../components/Music/TTL-티아라.mp3";
import HelloHello from "../../../../components/Music/HelloHello-FTIsland.mp3";
import FtIsalndImg from "../../../../components/CSS/image/MusicImg/ftisland.png";
import QWERImg from "../../../../components/CSS/image/MusicImg/QWER.png";
import TTLImg from "../../../../components/CSS/image/MusicImg/TTL.png";

const handleName = (music) => {
  return music.replace("/static/media/", "").split(".")[0];
};

export const musicArr = [
  {
    id: 1,
    name: handleName(QWER),
    play: QWER,
    img: QWERImg,
  },
  {
    id: 2,
    name: handleName(TTL),
    play: TTL,
    img: TTLImg,
  },
  {
    id: 3,
    name: handleName(HelloHello),
    play: HelloHello,
    img: FtIsalndImg,
  },
];
