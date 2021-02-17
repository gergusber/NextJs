import React from 'react';
import Header from './header';


function AppLayout({ children }) {
    return (

        <div className="AppLayout">
            <Header />
            <div>
                {...children}
            </div>
        </div>
    );
}

export default AppLayout;