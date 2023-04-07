import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { selectTheme } from "redux/theme/selectors";

export const Alert = () => {
  const theme = useSelector(selectTheme);

  const handleTheme = theme === "light" ? "light" : "dark";

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={true}
      theme={handleTheme}
    />
  );
};

export default Alert;
