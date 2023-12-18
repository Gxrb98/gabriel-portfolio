import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    const { t } = useTranslation();


    const linkToCopy = 'gxrb98@gmail.com';
    const copyToClipboard = () => {
        const message: HTMLElement | null = document.querySelector("#message")
        const textField = document.createElement('textarea');
        textField.innerText = linkToCopy;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
        if (message !== null) {
            message.innerHTML = t('contact.copied');
            setTimeout(() => {
                message.innerHTML = "";
            }, 4000);
        }

    };
    return (
        <div id='contact' className='  md:h-[100%] md:flex  mt-20 text-white mx-[2rem] lg:mx-[8rem]'>
            <div className="">
                <header>
                    <h1 className='md:text-3xl text-2xl font-bold text-title'>{t('contact.title')}</h1>
                </header>
                <div className='flex gap-2 mt-4'><FontAwesomeIcon icon={faLocationDot} className='relative top-1' />
                    <p>Curitiba, Brasil</p>
                </div>
                <div className=''>
                    <div className='md:mt-4 flex gap-2'>
                        <FontAwesomeIcon icon={faEnvelope} className='relative md:top-1 top-2' />
                        <h1 >{t('contact.email')}</h1>
                    </div>

                    <p onClick={copyToClipboard} className='md:text-3xl text-xl text-title hover:cursor-pointer font-bold'>gxrb98@gmail.com</p>
                </div>
                <span id='message' className='absolute'></span>
            </div>


        </div>)
}

export default Contact;