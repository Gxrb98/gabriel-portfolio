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
        <ul className={`fixed font-sans flex md:justify-normal md:h-auto md:flex-row-reverse w-[100vw] 
        md:gap-x-6 md:py-2 bg-main md:pr-9 h-full text-white justify-center flex-col items-center gap-y-6
        z-40 transition-all duration-500 ease-in bg-opacity-90 md:top-[0px] md:z-50 overflow-x-hidden
        ${show ? 'top-[0vh] bg-main' : 'top-[-100vh]  -z-20'}`}>
            {
                links.map((link) => (
                    <li key={link.name}><a href={link.link} className="md:nav">{link.name}</a></li>
                ))
            }
        </ul>
        <span className="fixed cursor-pointer md:hidden text-white mt-5 ml-4 text-2xl z-50" onClick={displayMenu}>
            {show ? <AiOutlineClose /> : <CgMenu />}
        </span>
    </>;
}

export default Nav;