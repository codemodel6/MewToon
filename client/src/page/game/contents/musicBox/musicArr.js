import QWER from "../../../../components/Music/QWER 고민중독.mp3";
import TTL from "../../../../components/Music/TTL.mp3";
import HelloHello from "../../../../components/Music/HelloHello.mp3";

const handleName = (music) => {
  return music.replace("/static/media/", "").split(".")[0];
};

export const musicArr = [
  {
    id: 1,
    name: handleName(QWER),
    play: QWER,
  },
  {
    id: 2,
    name: handleName(TTL),
    play: TTL,
  },
  {
    id: 3,
    name: handleName(HelloHello),
    play: HelloHello,
  },
];
