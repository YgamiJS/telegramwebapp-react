import styled from "./Header.css";
import { useTelegram } from "../../hooks/useTelegram";

const Header = () => {
  const { user, onClose } = useTelegram();

  return (
    <div>
      <button onClick={onClose}>закрыть</button>
      <span className={styled.username}>{user?.username}</span>
    </div>
  );
};

export default Header;
