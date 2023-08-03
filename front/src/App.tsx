import { ToastContainer } from "react-toastify";
import { UserProvider } from "./providers/UserProvider";
import { AppRoutes } from "./routes/routes";
import { GlobalStyles } from "./styles/global";
import "react-toastify/dist/ReactToastify.css";

export const App = () => {
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <GlobalStyles />
            <UserProvider>
                <AppRoutes />
            </UserProvider>
        </>
    );
};
