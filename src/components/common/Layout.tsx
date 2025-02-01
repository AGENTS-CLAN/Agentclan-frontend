// src/components/common/Layout.tsx
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="relative flex justify-center items-center mb-12 px-4 sm:px-6 md:px-8 lg:px-10 overflow-clip">
            <Navbar />
                {children}
           
            <Footer />
        </div>
    );
};

export default Layout;
