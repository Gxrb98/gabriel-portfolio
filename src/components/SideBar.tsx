import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SideBar = () => {


    return (
        <div className='md:fixed flex md:flex-col md:top-[50vh] md:left-[95vw] md:gap-7 md:text-2xl text-white absolute w-full justify-center top-[90vh] gap-7'>
            <a className="transition-transform hover:-translate-y-1" href='https://www.instagram.com/garb_98/' target='_blank'><FaInstagram /></a>
            <a className="transition-transform hover:-translate-y-1" href='https://github.com/Gxrb98' target='_blank'><FaGithub /></a>
            <a className="transition-transform hover:-translate-y-1" href='https://www.linkedin.com/in/garb98/' target='_blank'><FaLinkedin /></a>
        </div>
    );
}

export default SideBar;