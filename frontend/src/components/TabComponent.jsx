import React, { useState, useEffect } from 'react';
import { FaPlus, FaX } from 'react-icons/fa6';


const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [tabs, setTabs] = useState([{ id: 0, name: "New Chat", input: "" }]);

    useEffect(() => {
        if (!tabs.find(tab => tab.id === activeTab)) {
            if (tabs.length) {
                setActiveTab(tabs[0].id); // Set to the first tab if there are still tabs
            } else {
                setActiveTab(null); // No tabs left, set activeTab to null
            }
        }
    }, [tabs])

    const addTab = () => {
        const newTab = {
            id: tabs.length ? tabs[tabs.length - 1].id + 1 : 0,
            name: `New Chat`,
            input: ""
        };
        setTabs([...tabs, newTab]);
        setActiveTab(newTab.id);
    };

    const handleInputChange = (id, value) => {
        const updatedTabs = tabs.map(tab =>
            tab.id === id ? { ...tab, input: value } : tab
        );
        setTabs(updatedTabs);
    };

    const removeTab = (id) => {
        console.log(activeTab, 'original')
        const updatedTabs = tabs.filter(tab => tab.id !== id);

        setTabs(updatedTabs);


    };

    return (
        <div className='max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-10'>
            <div className=" pb-4 md:w-[60%] h-[80vh] flex flex-col justify-between bg-[#202020] shadow-md rounded-lg">
                <div className="flex flex-col mb-4">
                    <div className='flex flex-row mb-4 bg-[#0d0d0d] rounded-t-lg'>
                        {tabs.map((tab, index) => (
                            <div key={index} className="flex items-center">
                                <div className={`flex flex-row gap-2 px-4 py-2 rounded-t-lg items-center justify-center 
                                                ${activeTab === tab.id ? 'bg-[#202020] text-gray-400' : 'bg-[#d0d0d0d] text-white'}`}
                                    onClick={() => setActiveTab(tab.id)}
                                >
                                    <p className='font-semibold ' >{tab.name}</p>
                                    <button
                                        className="px-2 py-2 text-red-500 "
                                        onClick={() => removeTab(tab.id)}
                                    >
                                        <FaX className='h-2 w-2' />
                                    </button>

                                </div>

                            </div>
                        ))}
                        <button
                            className="px-4 py-2 ml-2 text-white rounded"
                            onClick={addTab}
                        >

                            <FaPlus />
                        </button>
                    </div>
                    <div className='flex mx-4 items-center'>
                        <img className="md:block hidden  p-2 w-[20vw]" alt="Mask group" src="images/mask-group.png" />
                        <p className='text-xl text-gray-200 font-semibold'>Hi Darel <br /> How can i help you</p>
                    </div>
                </div>

                <div className='bg-[#0d0d0d] flex flex-row gap-2 mx-4 p-4 rounded-lg'>
                    {tabs.map(tab => (
                        activeTab === tab.id && (
                            <div key={tab.id} className='flex w-[75%] flex-row'>
                                <input
                                    type="text"
                                    className="bg-[#0d0d0d] text-gray-200 p-2 w-full outline-none"
                                    value={tab.input}
                                    onChange={(e) => handleInputChange(tab.id, e.target.value)}
                                    placeholder={`Type your chat prompt here`}
                                />

                            </div>

                        )
                    ))}
                    <div className='flex items-center'>
                        <img
                            className=""
                            alt="Picture"
                            src="images/picture1-1.png"
                        />
                    </div>
                </div>
            </div>
            <div className='p-4 md:w-[40%] bg-[#202020] shadow-md rounded-lg flex items-center 
            justify-center text-gray-300'>
                <p>Visualization here</p>
            </div>
        </div>
    );
};

export default TabComponent;
