import moviesApp from '../assets/moviesApp.png'
import { useTranslation } from "react-i18next";

const Projects = () => {
    const { t } = useTranslation();
    return (
        <div className="text-white mt-10 overflow-x-hidden mx-[2rem]" id='projects'>
            <h1 className="md:text-3xl font-bold mb-4 text-2xl text-title">{t('projects.title')}</h1>
            <h2>{t('projects.subtitle')}</h2>
            <div className='md:flex md:justify-between mt-5'>
                <div className='text-center' >
                    <h1>Popular Movie Trailers</h1>
                    <a target='_blank' href='https://gxrb98.github.io/popular-movie-trailers/'>
                        <img src={moviesApp} className='img m-1' alt="Movie trailers app" width='450px' />
                    </a>
                    <p>{t('projects.movieDescription')}</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;