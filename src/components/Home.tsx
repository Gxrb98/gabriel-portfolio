import { useTranslation } from "react-i18next";

const Home = () => {

    const { t } = useTranslation();
    return (
        <div className='select-none flex h-screen justify-center font-bold items-center md:justify-normal text-white overflow-x-hidden'>
            <header className="font-sans my-1 md:text-left text-center">

                <span className="hidden md:block md:show md:absolute text-4xl z-10 md:left-[5rem]   font-bold">
                    <h1 className="md:my-3 md:text-8xl lg:text-[7.5rem] lg:ml-[4rem] uppercase md:text-secondary">{t('home.textBg')}<br />{t('home.textBg1')}</h1>
                </span>
                <div className="relative  z-20 lg:mx-[8rem] mx-[2rem]  lg:mt-[4rem]">
                    <span className="md:text-5xl text-2xl lg:text-7xl ">
                        <h1 className="md:my-3">{t('home.title1')}</h1>
                        <h1 className="md:my-3">{t('home.title2')}</h1>
                        <h1 className="md:mt-3 uppercase text-title">{t('home.title3')}</h1>
                    </span>
                </div>
                <h1 className="relative mx-[2rem] md:my-7 my-5 z-20 lg:mx-[8rem] lg:text-lg">{t('home.title4')}</h1>
            </header>
        </div>
    );
}

export default Home;