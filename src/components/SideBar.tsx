import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const SideBar = () => {


    return (
        <div className='md:fixed flex md:flex-col md:top-[50vh] md:left-[95vw] md:gap-7 md:text-2xl text-white absolute w-full justify-center top-[90vh] gap-7 overflow-x-hidden'>
            <a href='https://www.instagram.com/garb_98/' target='_blank'><FaInstagram /></a>
            <a href='https://github.com/Gxrb98' target='_blank'><FaGithub /></a>
            <a href='https://www.linkedin.com/in/garb98/' target='_blank'><FaLinkedin /></a>
        </div>
    );
}

export default SideBar;