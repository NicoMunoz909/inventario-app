import { useNavigate } from "react-router-dom";
import styles from "./logoutButton.module.css";
import { CiLogout } from "react-icons/ci";

const LogoutButton = () => {
  const navigate = useNavigate();

  return (
    <button
      className={styles.container}
      onClick={() => {
        localStorage.removeItem("AppInventarioToken");
        navigate("/login");
      }}
    >
      Log out <CiLogout />
    </button>
  );
};

export default LogoutButton;
