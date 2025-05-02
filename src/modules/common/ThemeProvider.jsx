import React from 'react';
import {useSelector} from "react-redux";

function ThemeProvider({ children }) {
    const {theme} = useSelector(state => state.theme);
    console.log(theme);
    return (
        <div className={theme}>
            <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-900 text-slate-100' : 'bg-white text-gray-800'}`}>
                {children}
            </div>

        </div>
    );
}

export default ThemeProvider;