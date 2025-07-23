import styles from "./LogoutButton.module.css";
import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
  return (
    <button
      className={styles.container}
      onClick={() => {
        localStorage.removeItem("AppInventarioToken");
        window.location.href = "/login";
      }}
    >
      Log out <CiLogout />
    </button>
  );
};

export default LogoutButton;
