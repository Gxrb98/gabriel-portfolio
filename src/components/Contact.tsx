import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    const [msj, setMsj] = useState('');
    const { t } = useTranslation();
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('contact_service', 'contact_form', e.target, 'FeauU2-plERrxk0An')
            .then(function () {
                setMsj('Message Sent');
                setTimeout(() => setMsj(''), 2000);
            }, function (error) {
                setMsj('Something, went wrong');
                setTimeout(() => setMsj(''), 2000);
            });
        e.target.reset()
    }

    const linkToCopy = 'gxrb98@gmail.com';

    const copyToClipboard = () => {
        const textField = document.createElement('textarea');
        textField.innerText = linkToCopy;
        document.body.appendChild(textField);
        textField.select();
        document.execCommand('copy');
        textField.remove();
    };
    return (
        <div id='contact' className='md:w-[100%]  md:h-[100%] md:flex  mt-8 text-white overflow-x-hidden mx-[2rem]'>
            <div>
                <header>
                    <h1 className='md:text-3xl text-xl font-bold text-title'>{t('contact.title')}</h1>
                </header>
                <div className='flex gap-2 md:mt-2'><FontAwesomeIcon icon={faLocationDot} className='relative top-1' />
                    <p>Curitiba, Brasil</p>
                </div>
                <form className='mt-2 md:w-[25rem]' onSubmit={sendEmail}>
                    <div className=''>
                        <div>
                            <div>
                                <label htmlFor='name font-bold text-title'>{t('contact.name')}</label>
                            </div>
                            <div>
                                <input className='outline-none md:w-full mt-1 w-60 bg-secondary border-4 pl-1 rounded-sm border-secondary' name='name' type='text' required />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor='email'>Email</label>
                            </div>
                            <div>
                                <input className='outline-none md:w-full mt-1 w-60 bg-secondary border-4 pl-1 rounded-sm border-secondary' name='email' type='email' required />
                            </div>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div>
                            <label htmlFor='message'>{t('contact.message')}</label>
                        </div>
                        <div>
                            <textarea className='md:w-full w-60 h-40 resize-none outline-none mt-1 bg-secondary border-4 pl-1 rounded-sm border-secondary' name='message' required>
                            </textarea>
                        </div>
                    </div>
                    <div className='flex w-full justify-center md:inline-block'>
                        <input className="btn mt-2"
                            type='submit' id='btn-submit' value='Submit' />
                        <p>{msj} </p>
                    </div>

                </form>
            </div>
            <div className='md:mx-[3rem]  mx-1 mt-4 md:mt-0'>
                <div className='md:mt-11 flex gap-2'>
                    <FontAwesomeIcon icon={faEnvelope} className='relative md:top-1 top-2' />
                    <h1 >{t('contact.email')}</h1>
                </div>

                <p onClick={copyToClipboard} className='md:text-3xl text-xl text-title hover:cursor-pointer font-bold'>gxrb98@gmail.com</p>
            </div>

        </div>)
}

export default Contact;