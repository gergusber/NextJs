import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/global.css";
import Header from "../components/header";

function App({ Component, pageProps }) {
    return (
        <div>
            <Header />
            <Component {...pageProps} />
        </div>
    )
}

export default App;