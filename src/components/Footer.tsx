import { useTranslation } from "react-i18next";



const Footer = () => {
    const { t } = useTranslation();
    const year = new Date().getFullYear();
    return (
        <footer className="text-white text-center mt-4 mb-4 overflow-x-hidden">
            <p>© {year} Gabriel. {t('footer.text')}</p>
        </footer>
    );
}

export default Footer;