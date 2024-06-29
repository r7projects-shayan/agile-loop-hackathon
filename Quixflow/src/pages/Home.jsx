import React from 'react';
import Sidebar from '../components/SideBar';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import TabComponent from '../components/TabComponent';

function Home() {
    return (
        <div className="flex flex-row min-h-screen">
            <Sidebar/>
            <div className="flex-1 bg-[#141414] flex flex-col">
                <Navbar />
                <div className="flex-1 p-4">
                    <TabComponent />
                </div>
            </div>
        </div>
    );
}

export default Home;
