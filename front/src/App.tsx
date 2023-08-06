import { ToastContainer } from "react-toastify";
import { UserProvider } from "./providers/UserProvider";
import { AppRoutes } from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { GlobalStyles } from "./styles/globalStyles";
import { HomeProvider } from "./providers/HomeProvider";

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
            <HomeProvider>
                <UserProvider>
                    <AppRoutes />
                </UserProvider>
            </HomeProvider>
        </>
    );
};
