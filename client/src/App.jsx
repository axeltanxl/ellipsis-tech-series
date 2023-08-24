import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import TopNavBar from './global/TopNavbar';
import Home from './scenes/Home';
import Example from './scenes/Example';
import { theme } from './theme';
import { StyledEngineProvider } from '@mui/material/styles';

import { Provider } from "react-redux"
import { store } from "./store"
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const App = () => {
    const queryClient = new QueryClient(); 
    let persistor = persistStore(store);

    return (
        <QueryClientProvider client={queryClient}>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        
        <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
        <CssBaseline/>
        <BrowserRouter>
            <div className='relative z-0 bg-bg h-screen flex flex-col' >
                {/* global components */}
                <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
                    <TopNavBar/>
                </div>

                {/* contents*/}
                <div className="w-full h-full p-5">
                    <Routes>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/example" element={<Example/>}></Route>                    
                    </Routes>
                </div>
            </div>
            <div className='relative w-full h-[200px] bg-primary'>
                footer section
            </div>
        </BrowserRouter>
        </ThemeProvider>
        </StyledEngineProvider>
        
        </PersistGate>
        </Provider>
        <ReactQueryDevtools initialIsOpen={false} position='bottom-right'/>
        </QueryClientProvider>
    )
}
export default App;