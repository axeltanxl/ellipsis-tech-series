import React, { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./pages/HomePage";

function App() {
  return (
    <React.StrictMode>
      <Layout>
        <Home />
      </Layout>
    </React.StrictMode>
  );
}

export default App;
