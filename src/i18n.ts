import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'pt',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            en: {
                translation: {
                    nav: {
                        li1: 'Contact',
                        li2: 'Projects',
                        li3: 'About me'
                    },
                    home: {
                        title1: "Hi",
                        title2: "I'm Gabriel,",
                        title3: "Web Developer",
                        title4: "A passionate Systems Engineer with a love for web development",
                        textBg: "Engineer &",
                        textBg1: "Developer",
                    },
                    about: {
                        title: "Crafting Extraordinary Digital Experiences, One Line of Code at a Time",
                        paragraph1: "I transform ideas into exceptional web experiences. With strong technical knowledge and a passion for continuous learning, I create functional and visually appealing solutions.",
                        paragraph2: "I love translating creativity into efficient code. My focus on web development combines technical skills with a solution-oriented mindset. I'm excited about the opportunities to innovate and collaborate in talented teams.",
                        paragraph3: "If you're looking for someone passionate and committed to web development, I'm ready to contribute and grow together!",
                        title1: "Education",
                        subtitle: "Gran Mariscal de Ayacucho",
                        subtitle1: "Systems Engineer",
                        subtitle2: "2014-2020",
                        title2: "Technologies I use",
                        btnText: "Download CV",
                    },
                    projects: {
                        movieDescription: "SPA that allows you to watch trailers of popular movies",
                        title: 'Projects',
                        subtitle: 'Click the image to go to the web page',

                    },
                    contact: {
                        title: "Contact me",
                        name: "Name",
                        message: "Message",
                        email: "Or click on the text and send an Email"
                    },
                    footer: {
                        text: "All rights reserved",
                    },

                }
            },
            pt: {
                translation: {
                    nav: {
                        li1: 'Contato',
                        li2: 'Projetos',
                        li3: 'Sobre mim',
                    },
                    home: {
                        title1: "Oiê",
                        title2: "sou Gabriel,",
                        title3: "Desenvolvedor Web",
                        title4: "Engenheiro de Sistemas apaixonado por desenvolvimento web",
                        textBg: "Engenheiro e",
                        textBg1: "Desenvolvedor",
                    },
                    about: {
                        title: "Criando Experiências Digitais Excepcionais, Uma Linha de Código de Cada Vez",
                        paragraph1: "Transformo ideias em experiências web excepcionais. Com sólidos conhecimentos técnicos e paixão pelo aprendizado constante, crio soluções funcionais e visualmente atrativas.",
                        paragraph2: "Adoro transformar a criatividade em código eficiente. Meu foco no desenvolvimento web combina habilidades técnicas com uma mente orientada para soluções. Estou empolgado com as oportunidades de inovação e colaboração em equipes talentosas.",
                        paragraph3: "Se você está em busca de alguém apaixonado e comprometido com o desenvolvimento web, estou pronto para contribuir e crescer juntos!",
                        title1: "Educação",
                        subtitle: "Gran Mariscal de Ayacucho",
                        subtitle1: "Engenheiro de Sistemas",
                        subtitle2: "2014-2020",
                        title2: "Tecnologias que eu uso",
                        btnText: "Descarregar CV"
                    },
                    projects: {
                        movieDescription: "SPA que permite ver trailers de filmes populares.",
                        title: 'Projetos',
                        subtitle: 'Clique na imagem para ir para a página web',
                    },
                    contact: {
                        title: "Envia-me uma mensagem",
                        name: "Nome",
                        message: "Mensagem",
                        email: "Ou clique no texto e envie um e-mail"
                    },
                    footer: {
                        text: "Todos os direitos reservados",
                    },
                }

            },
            es: {
                translation: {
                    nav: {
                        li1: 'Contacto',
                        li2: 'Proyectos',
                        li3: 'Sobre mi'
                    },
                    home: {
                        title1: "Hola",
                        title2: "soy Gabriel,",
                        title3: "Desarrollador Web",
                        title4: "Ingeniero de Sistemas con pasión por el desarrollo web",
                        textBg: "Ingeniero y",
                        textBg1: "Desarrollador",
                    },
                    about: {
                        title: "Creando Experiencias Digitales Excepcionales, Una Línea de Código a la Vez",
                        paragraph1: "Transformo ideas en experiencias web excepcionales. Con sólidos conocimientos técnicos y pasión por el aprendizaje constante, creo soluciones funcionales y visualmente atractivas.",
                        paragraph2: "Me encanta convertir la creatividad en código eficiente. Mi enfoque en el desarrollo web combina habilidades técnicas con una mente orientada a soluciones. Estoy emocionado por las oportunidades de innovar y colaborar en equipos talentosos.",
                        paragraph3: "Si buscas a alguien apasionado y comprometido con el desarrollo web, ¡estoy listo para contribuir y crecer juntos!",
                        title1: "Educación",
                        subtitle: "Gran Mariscal de Ayacucho",
                        subtitle1: "Ingeniero de Sistemas",
                        subtitle2: "2014-2020",
                        title2: "Tecnologías que uso",
                        btnText: "Descargar CV",
                    },
                    projects: {
                        movieDescription: "SPA que permite ver trailers de peliculas populares",
                        title: 'Proyectos',
                        subtitle: 'Haz clic en la imagen para ir a la página web',
                    },
                    contact: {
                        title: "Contactame",
                        name: "Nombre",
                        message: "Mensaje",
                        email: "O haga click en el texto y envie un Email"
                    },
                    footer: {
                        text: "Todos los derechos reservados",
                    },
                }
            }
        }
    });

export default i18n;