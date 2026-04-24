import './styles/projects.css'
import { useEffect, useMemo, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import useObserver from '../hooks/useObserver'
import house18Logo from '../assets/house18-logo.png'
import interactiveHouseLogo from '../assets/Interactive-house-logo.png'
import portfolioPortraitFinal from '../assets/Portfolio-Portrait-final.png'
import solaceLogo from '../assets/solace-logo.png'
import tryggaLogo from '../assets/trygga-tillsammans.png'

const projects = [
  {
    id: 'house18',
    image: house18Logo,
    alt: 'house18-logo',
    imageId: 'house18-icon',
    tech: ['React', 'Node.js', 'MongoDB', 'CSS'],
    paragraphs: [
      '"House 18" is a fullstack web application built as part of a university project during the course Full Stack Development at Kristianstad University.',
      'The app simulates a modern clothing store with user authentication, a responsive shopping experience and admin product management.',
      'Please note: items on the store page may take a minute to load if the database has been inactive for a while.'
    ],
    links: [
      { href: 'https://github.com/nickem00/house-18', label: 'View project' },
      { href: 'https://house-18.vercel.app/', label: 'View website' },
    ],
  },
    {
    id: 'Interactive-house',
    image: interactiveHouseLogo,
    alt: 'interactive-house-logo',
    imageId: 'interactive-house-icon',
    tech: ['FastAPI', 'Python', 'PyTest', 'Firebase'],
    paragraphs: [
      '"Interactive House" is a multiplatform application built during the Software Development course at Kristianstad University.',
      'The application is made to control an arduino house, simulating a real house with lights and fans etc.',
      'My contributions to the project were part of the server group developing the central hub for the entire application.'
    ],
    links: [
      { href: 'https://github.com/interactive-house-hkr/interactive-house', label: 'View project' },
    ],
  },
  {
    id: 'trygga-1',
    image: tryggaLogo,
    alt: 'trygga-logo',
    imageId: 'trygga-icon',
    tech: ['Android', 'Kotlin', 'Firebase'],
    paragraphs: [
      '"Trygga tillsammans" is an Android application built during the Android development course at Kristianstad University in collaboration with Combitech.',
      'The application aims to educate the public, strengthening confidence and understanding of Sweden\'s total defense.',
    ],
    links: [
      {href: 'https://www.linkedin.com/feed/update/urn:li:activity:7397155490373357568/', label: 'View project'},
    ],
  },
  {
    id: 'portfolio',
    image: portfolioPortraitFinal,
    alt: 'portfolio-preview',
    imageId: 'portfolio-icon',
    tech: ['React', 'CSS', 'Vite'],
    paragraphs: [
      'This portfolio is a responsive React application designed and built to present my projects, technical stack and contact details.',
      'It is an ongoing project where I refine the design and responsive behavior as I continue improving the site. As well as adding new projects.',
    ],
    links: [
      {href: 'https://github.com/Jagge1/Portfolio', label: 'View project'},
    ],
  },
    {
    id: 'solace',
    image: solaceLogo,
    alt: 'solace-logo',
    imageId: 'solace-icon',
    tech: ['Python', 'Tkinter', 'Scrum', 'Firebase'],
    paragraphs: [
      'This desktop application is designed to help people deal with stress and anxiety by allowing them to track their mood and stress levels during a period of time.',
      'The application was created during the course Agile Development and was meant as an exercise to learn agile development and Scrum.',
    ],
    links: [
      { href: 'https://github.com/HugNil/Solace', label: 'View project' },
    ],
  },
];

function getSlidesPerView(width) {
  if (width <= 793) {
    return 1;
  }

  if (width <= 1200) {
    return 2;
  }

  return 3;
}

export default function Projects() {
  useObserver();

  const [slidesPerView, setSlidesPerView] = useState(() => {
    if (typeof window === 'undefined') {
      return 3;
    }

    return getSlidesPerView(window.innerWidth);
  });
  const [currentIndex, setCurrentIndex] = useState(slidesPerView);
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    function handleResize() {
      const nextSlidesPerView = getSlidesPerView(window.innerWidth);
      setSlidesPerView((prevSlidesPerView) => {
        if (prevSlidesPerView === nextSlidesPerView) {
          return prevSlidesPerView;
        }

        return nextSlidesPerView;
      });
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    setIsAnimating(false);
    setCurrentIndex(slidesPerView);

    const frame = window.requestAnimationFrame(() => {
      setIsAnimating(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, [slidesPerView]);

  const loopedProjects = useMemo(() => {
    const leadingClones = projects.slice(-slidesPerView);
    const trailingClones = projects.slice(0, slidesPerView);

    return [...leadingClones, ...projects, ...trailingClones];
  }, [slidesPerView]);

  function moveCarousel(direction) {
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + direction);
  }

  function handleTransitionEnd() {
    if (currentIndex >= projects.length + slidesPerView) {
      setIsAnimating(false);
      setCurrentIndex(slidesPerView);
      return;
    }

    if (currentIndex < slidesPerView) {
      setIsAnimating(false);
      setCurrentIndex(projects.length + currentIndex);
    }
  }

  useEffect(() => {
    if (!isAnimating) {
      const frame = window.requestAnimationFrame(() => {
        setIsAnimating(true);
      });

      return () => window.cancelAnimationFrame(frame);
    }
  }, [isAnimating]);

  return (
    <section className='project-container hidden' id='projects'>
      <h1 className='project-section-title'>My Projects</h1>

      <div className='projects-carousel'>
        <button
          type='button'
          className='carousel-button'
          aria-label='Show previous project'
          onClick={() => moveCarousel(-1)}
        >
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>

        <div className='projects-viewport'>
          <ul
            className='projects-track'
            style={{
              '--slides-per-view': slidesPerView,
              '--slide-size': `calc((100% - (var(--carousel-gap) * (${slidesPerView} - 1))) / ${slidesPerView})`,
              transform: `translateX(calc(-1 * ${currentIndex} * (var(--slide-size) + var(--carousel-gap))))`,
              transition: isAnimating ? 'transform 0.45s ease' : 'none',
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {loopedProjects.map((project, index) => (
              <li className='project-slide' key={`${project.id}-${index}`}>
                <article className='project-card'>
                  <img src={project.image} alt={project.alt} className='project-img' id={project.imageId} />

                  <div className='project-content'>
                    {project.paragraphs.map((paragraph, paragraphIndex) => (
                      <p
                        className='project-description'
                        id={paragraphIndex === 0 ? 'top-paragraph' : 'bottom-paragraph'}
                        key={`${project.id}-paragraph-${paragraphIndex}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <div className='project-card-footer'>
                    <div className='project-tech-list'>
                      {project.tech.map((item) => (
                        <span className='project-tech-badge' key={`${project.id}-${item}`}>
                          {item}
                        </span>
                      ))}
                    </div>

                    <div className='project-links'>
                      {project.links.map((link) => (
                        <a
                          href={link.href}
                          className='project-link'
                          target='_blank'
                          rel='noreferrer'
                          key={`${project.id}-${link.href}`}
                        >
                          {link.label} <span className='arrow-link'><FontAwesomeIcon icon={faArrowRight} /></span>
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              </li>
            ))}
          </ul>
        </div>

        <button
          type='button'
          className='carousel-button'
          aria-label='Show next project'
          onClick={() => moveCarousel(1)}
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </section>
  )
}
