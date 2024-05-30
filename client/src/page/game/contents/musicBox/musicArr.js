import QWER from "../../../../components/Music/QWER 고민중독.mp3";
import TTL from "../../../../components/Music/TTL.mp3";

const handleName = (music) => {
  return music.replace("/static/media/", "").split(".")[0];
};

export const musicArr = [
  {
    name: handleName(QWER),
    play: QWER,
  },
  {
    name: handleName(TTL),
    play: TTL,
  },
];
