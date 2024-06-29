import React from 'react'

function Footer() {
    return (
        <footer className="">
            <div className='flex flex-row md:justify-between'>
                <div className='flex w-full p-2 items-center justify-center '>
                    <img
                        className=""
                        alt="Mask group"
                        src="images/mask-group.svg"
                    />

                </div>
            </div>
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-gray-400">&copy; 2024 QuixFlow. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer