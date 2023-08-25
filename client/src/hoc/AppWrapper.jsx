import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { StyledEngineProvider } from "@mui/material/styles";
import { theme } from "../theme"
import { Provider } from "react-redux";
import { store } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const AppWrapper = ({children}) => {
    const queryClient = new QueryClient();
    let persistor = persistStore(store);

    return (
        <QueryClientProvider client={queryClient}>
           <Provider store={store}>
             <PersistGate loading={null} persistor={persistor}>
               <StyledEngineProvider injectFirst>
                 <ThemeProvider theme={theme}>
                   <CssBaseline />
                   {children}
                 </ThemeProvider>
               </StyledEngineProvider>
             </PersistGate>
           </Provider>
           <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
         </QueryClientProvider>
    )
}
export default AppWrapper;