import { useTranslation } from "react-i18next";
import { useState } from "react"
import cvEs from '../pdfs/ES-CV-Gabriel.pdf';
import cvEn from '../pdfs/EN-CV-Gabriel.pdf';
import cvPt from '../pdfs/PT-CV-Gabriel.pdf';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHtml5, faCss3Alt, faSquareJs, faReact, faVuejs, faGitAlt } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const { t, i18n } = useTranslation();
    const [CV, setCV] = useState('')

    const cvSelector = () => {
        if (i18n.resolvedLanguage === 'es') {
            setCV(cvEs)
        }

        if (i18n.resolvedLanguage === 'en') {
            setCV(cvEn)
        }

        if (i18n.resolvedLanguage === 'pt') {
            setCV(cvPt)
        }
    }
    return (
        <div id="about" className="text-white py-1 mt-10 bg-secondary rounded-md overflow-x-hidden mx-[1rem] lg:mx-[8rem]">
            <div className="md:mx-10 ">
                <div className="md:m-5 m-5 md:mx-5 ">
                    <h1 className="md:text-3xl text-center text-2xl text-title font-bold">{t('about.title')}</h1>
                    <p className="mt-4 md:text-lg">{t('about.paragraph1')} <br /> {t('about.paragraph2')} <br />{t('about.paragraph3')}</p>
                </div>
                <div className="md:flex justify-center md:mt-7 mb-5 py-5">
                    <div className="md:text-6xl gap-10">
                        <h1 className="mt-2 md:mt-0 md:text-center text-xl text-title md:text-3xl font-bold mb-5 flex justify-center">{t('about.title2')}</h1>
                        <div className="flex md:text-6xl gap-4 justify-center mt-2 md:gap-10 flex-wrap">
                            <div className="bg-secondary p-1 rounded-lg transition-transform hover:-translate-y-1">
                                <FontAwesomeIcon icon={faHtml5} style={{ color: "#f07e36", }} />
                            </div>
                            <div className="bg-secondary p-1 rounded-lg transition-transform hover:-translate-y-1">
                                <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#2d53e5", }} />
                            </div>
                            <div className="bg-secondary p-1 rounded-lg transition-transform hover:-translate-y-1">
                                <FontAwesomeIcon icon={faSquareJs} style={{ color: "#f7e025", }} />
                            </div>
                            <div className="bg-secondary p-1 rounded-lg transition-transform hover:-translate-y-1">
                                <FontAwesomeIcon icon={faReact} style={{ color: "#f7e025", }} />
                            </div>
                            <div className="bg-secondary p-1 rounded-lg transition-transform hover:-translate-y-1">
                                <FontAwesomeIcon icon={faVuejs} style={{ color: "#394d64", }} />
                            </div>
                            <div className="bg-secondary p-1 rounded-lg transition-transform hover:-translate-y-1">
                                <FontAwesomeIcon icon={faGitAlt} style={{ color: "#f05639", }} />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center pb-5">
                    <a href={CV} onClick={() => cvSelector()} className="btn" target="_blank" rel="noopener noreferrer">
                        {t('about.btnText')}

                    </a>
                </div>
            </div>
        </div>
    );
}

export default About;