import { useTranslation } from "react-i18next";

const Home = () => {

    const { t } = useTranslation();
    return (
        <div className='select-none flex h-screen justify-center font-bold items-center md:items-end md:justify-normal text-white overflow-x-hidden'>
            <header className="font-sans my-1 md:text-left text-center">

                <span className="hidden md:block md:show md:absolute md:text-8xl text-4xl z-10 md:left-[5rem] md:bottom-[5rem] font-bold">
                    <h1 className="md:my-3 text-8xl uppercase md:text-secondary">{t('home.textBg')}<br />{t('home.textBg1')}</h1>
                </span>
                <div className="relative md:text-5xl z-20">
                    <span className="md:text-5xl text-2xl">
                        <h1 className="md:my-3">{t('home.title1')}</h1>
                        <h1 className="md:my-3">{t('home.title2')}</h1>
                        <h1 className="md:mt-3 uppercase">{t('home.title3')}</h1>
                    </span>
                </div>
                <h1 className="md:my-7 my-5 ">{t('home.title4')}</h1>
            </header>
        </div>
    );
}

export default Home;