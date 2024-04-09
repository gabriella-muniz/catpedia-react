import React from 'react';
import Image from 'next/image'; 
import Logo from '/public/logo.png'

export default function Header() {
    return (
        <header className="bg-orange-200 border-b border-gray-300 flex justify-between px-4 py-2 items-center ">
            <div>
                <div className="w-24 h-10">
                    <Image
                        className="logo"
                        src={Logo}
                        alt="logo"
                        width={200}
                        height={100}
                    />
                </div>
            </div>

            <nav>
                <ul className="flex font-bold text-xl">
                    <li>
                        <a href="#home" className="px-3 py-2 text-yellow-800  hover:text-black">INÍCIO</a>
                    </li>
                    <li>
                        <a href="#projects" className="px-3 py-2 text-yellow-800  hover:text-black">GRÁFICOS</a>
                    </li>
                    <li>
                        <a href="#contact" className="px-3 py-2 text-yellow-800 hover:text-black">CONTATO</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
