import { useTranslation } from "react-i18next";
import SideBar from "./SideBar";


const Footer = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();
    return (
        <footer className="text-white text-center mt-12 mb-4 overflow-x-hidden">
            <div className="flex justify-center mb-5 md:hidden">
                <SideBar />
            </div>

            <p>©Copyright {year}. {t('footer.text')}</p>
        </footer>
    );
}

export default Footer;