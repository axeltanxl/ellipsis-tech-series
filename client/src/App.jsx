// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { CssBaseline, ThemeProvider } from "@mui/material";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// import TopNavBar from "./global/TopNavbar";
// import Home from "./scenes/Home";
// import Example from "./scenes/Example";
// import { theme } from "./theme";
// import { StyledEngineProvider } from "@mui/material/styles";

// import { Provider } from "react-redux";
// import { store } from "./store";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistStore } from "redux-persist";

// const App = () => {
//   const queryClient = new QueryClient();
//   let persistor = persistStore(store);

//   return (
//     <QueryClientProvider client={queryClient}>
//       <Provider store={store}>
//         <PersistGate loading={null} persistor={persistor}>
//           <StyledEngineProvider injectFirst>
//             <ThemeProvider theme={theme}>
//               <CssBaseline />
//               <BrowserRouter>
//                 <div className="relative z-0 bg-bg h-screen flex flex-col">
//                   {/* global components */}
//                   <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//                     <TopNavBar />
//                   </div>

//                   {/* contents*/}
//                   <div className="w-full h-full p-5">
//                     <Routes>
//                       <Route path="/" element={<Home />}></Route>
//                       <Route path="/example" element={<Example />}></Route>
//                     </Routes>
//                   </div>
//                 </div>
//                 <div className="relative w-full h-[200px] bg-primary">
//                   footer section
//                 </div>
//               </BrowserRouter>
//             </ThemeProvider>
//           </StyledEngineProvider>
//         </PersistGate>
//       </Provider>
//       <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
//     </QueryClientProvider>
//   );
// };
// export default App;

import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const checkLoginStatus = () => {
    setIsLoggedIn(localStorage.getItem("token"));
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <React.StrictMode>
      <Layout>
        <div className="flex justify-center xs:flex-col sm:flex-row xs:my-8 md:my-10 xs:mx-8 sm:mx-10 md:mx-16">
          <div className="xs:hidden sm:flex items-center mx-4 sm:w-1/2 lg:w-1/4 font-bold sm:text-2xl lg:text-4xl xl:text-5xl">
            Good health starts with what you eat.
          </div>
          <div className="flex justify-center items-center ml-10 sm:mt-10">
            <div className="flex justify-start xs:w-3/4 sm:w-1/2 h-full mt-10 xs:pb-10 sm:pb-0 bg-yellow-500 rounded-2xl">
              <img
                src="https://media.istockphoto.com/id/1090509610/photo/asian-woman-in-joyful-postures-with-salad-bowl-on-the-side.jpg?s=612x612&w=0&k=20&c=kNNkd2WAYrM10CBE_1iqKCiiLO2XVuhlKiliza3mceQ="
                alt="Woman eating healthy food"
                className="object-cover object-left-top w-full h-full -mt-10 -ml-10 rounded-2xl z-10"
              ></img>
            </div>
          </div>
          <div className="sm:hidden flex justify-center text-center m-4 ml-10 w-3/4 font-bold text-2xl">
            Good health starts with what you eat.
          </div>
        </div>
      </Layout>
    </React.StrictMode>
  );
}

export default App;
