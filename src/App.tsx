import { ToastContainer } from "react-toastify";
import { Providers } from "./redux/provider";
import MuiThemeProvider from "./theme/ThemeRegistry";
import AppRouter from "./AppRouter";
import "react-toastify/dist/ReactToastify.css";
import { NotificationProvider } from "./shared/socket/NotificationProvider";

function App() {
  return (
    <MuiThemeProvider>
      <Providers>
        <NotificationProvider>
          <AppRouter />
          <ToastContainer
            theme="dark"
            position="bottom-right"
            autoClose={5000}
            hideProgressBar
            closeOnClick
            pauseOnFocusLoss={false}
            pauseOnHover={false}
          />
        </NotificationProvider>
      </Providers>
    </MuiThemeProvider>
  );
}

export default App;
