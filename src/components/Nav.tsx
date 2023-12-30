import { useTranslation } from "react-i18next";
import { CgMenu } from "react-icons/cg"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react";

const Nav = () => {
    const { t } = useTranslation();
    const [show, useShow] = useState(false)

    const displayMenu = () => {
        useShow(!show)
    }

    let links = [
        {
            name: `${t('nav.li1')}`,
            link: '#contact'
        }, {
            name: `${t('nav.li2')}`,
            link: '#projects'
        },
        {
            name: `${t('nav.li3')}`,
            link: '#about'
        },
    ]
    return <>
        {/* <div>{t('greetings')}</div>
        <button></button> */}
        <ul className={`fixed font-sans flex md:justify-normal md:h-auto md:flex-row-reverse w-[100vw] bg-main bg-opacity-80
        md:gap-x-6 md:pr-[8rem] lg:pt-[1.2rem] lg:pr-[11rem] h-full text-white justify-center flex-col items-center gap-y-6
        z-40 transition-all duration-500 ease-in md:top-[0px] md:z-40 overflow-x-hidden 
        ${show ? 'top-[0vh] bg-main' : 'top-[-100vh]  -z-20'}`}>
            {
                links.map((link) => (
                    <li key={link.name} className="my-2"><a href={link.link} className="md:nav">{link.name}</a></li>
                ))
            }
        </ul>
        <span className="fixed cursor-pointer md:hidden text-white mt-3 ml-4 text-2xl z-50 " onClick={displayMenu}>
            {show ? <AiOutlineClose /> : <CgMenu />}
        </span>
    </>;
}

export default Nav;