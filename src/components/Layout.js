import React from 'react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
    return (
        <>
        <Navigation/>
            <main>
               {children}
            </main>
            <footer>
                Footer
            </footer>
        </>
    );
};

export default Layout;