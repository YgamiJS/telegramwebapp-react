import styled from "./Header.css";
import { useTelegram } from "../../hooks/useTelegram";

const tg = window.Telegram.WebApp;

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div>
      <button onClick={onClose}>закрыть</button>
      <span className={styled.username}>
        {tg.initDataUnsafe?.user?.username}
      </span>
    </div>
  );
};

export default Header;
