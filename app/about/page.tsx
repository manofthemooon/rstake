'use client';

import Particles from '../components/particles';
import { Navigation } from "../components/nav";
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import RotatingPoints from '../components/rotatingpoints';
import ScrollIndicators from '../components/scrollindicators';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { articles, threads } from '@/content/articles-data';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';



const AboutPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeBlock, setActiveBlock] = useState(0);
  const blockCount = 4;

  const handleScroll = (event: WheelEvent) => {
    event.preventDefault();
    if (pageRef.current) {
      const blocks = pageRef.current.querySelectorAll('.about-snap-block');
      const nextBlock = activeBlock + (event.deltaY > 0 ? 1 : -1);
      if (nextBlock >= 0 && nextBlock < blocks.length) {
        blocks[nextBlock].scrollIntoView({ behavior: 'smooth' });
        setActiveBlock(nextBlock);
      }
    }
  };

  const handleClick = (index: number) => {
    const blocks = pageRef.current?.querySelectorAll('.about-snap-block');
    if (blocks) {
      blocks[index].scrollIntoView({ behavior: 'smooth' });
      setActiveBlock(index);
    }
  };

  useEffect(() => {
    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [activeBlock]);

  return (
    <div ref={pageRef} className="about-snap-container overflow-hidden relative">
      <Navigation />
      <ScrollIndicators activeBlock={activeBlock} onClick={handleClick} blockCount={blockCount} />

      <div className="about-snap-block flex items-center justify-center h-screen relative">
        <Particles className="absolute inset-0 w-full h-full -z-10" quantity={100} />
        <div className="text-container text-left text-white">
          <h1 className="text-4xl md:text-6xl font-display mt-4">My name is Andrey.</h1>
          <h2 className="text-2xl md:text-4xl font-sans mt-2">I am a Web3 enjoyer from Russia.</h2>
        </div>
        <div className="canvas-container w-full md:w-[37.5%] h-full">
          <Canvas className="w-full h-full">
            <RotatingPoints />
          </Canvas>
        </div>
      </div>

      <div className="about-snap-block flex flex-col justify-between h-screen p-8 relative">
        <Particles className="absolute inset-0 w-full h-full -z-10" quantity={100} />
        
        <div className="flex justify-between w-full mt-16">
          <div className="education-info text-left text-white w-1/4 ml-8">
            <h3 className="text-2xl font-bold glow-text mb-6">Education</h3>
            <ul className="space-y-4">
              <li className="glass-card p-4 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300">
                <p className="font-semibold">Bachelor's Degree</p>
                <p className="text-gray-300">Infocommunication Technologies</p>
                <p className="text-sm text-gray-400">MTUCI (2019-2023)</p>
              </li>
              <li className="glass-card p-4 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300">
                <p className="font-semibold">Master's Degree</p>
                <p className="text-gray-300">Quantum Communications</p>
                <p className="text-sm text-gray-400">MTUCI (2023-2025)</p>
              </li>
            </ul>
          </div>

          <div className="tech-stack text-center text-white w-2/4 mx-12">
            <h3 className="text-2xl font-bold glow-text mb-6">Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {['React', 'TypeScript', 'Python', 'Java', 'C#', 'HTML/CSS', 'DevTools', 'XPath', 'Git', 'Jira', 'ZennoPoster', 'YouGile', 'API', 'ChatGPT', 'Figma'].map((tool) => (
                <span 
                  key={tool} 
                  className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm 
                           border border-white/10 hover:border-white/30 transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div className="languages-info text-left text-white w-1/4 mr-8">
            <h3 className="text-2xl font-bold glow-text mb-6">Languages</h3>
            <ul className="space-y-4">
              <li className="glass-card p-4 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300">
                <p className="font-semibold">English</p>
                <div className="mt-2 bg-gray-700 h-2 rounded-full">
                  <div className="bg-white h-full rounded-full w-4/5"></div>
                </div>
                <p className="text-sm text-gray-400 mt-1">B2 Level</p>
              </li>
              <li className="glass-card p-4 rounded-lg backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-all duration-300">
                <p className="font-semibold">Russian</p>
                <div className="mt-2 bg-gray-700 h-2 rounded-full">
                  <div className="bg-white h-full rounded-full w-full"></div>
                </div>
                <p className="text-sm text-gray-400 mt-1">C2 Level</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 mb-8 px-8">
          <h3 className="text-2xl font-bold text-white glow-text mb-6 text-center">Skills</h3>
          <div className="skills-info grid grid-cols-4 gap-4">
            {[
              {title: 'Coding and Testing', details: ['Installing nodes', 'Creating scripts and robots', 'Testing the product']},
              {title: 'Marketing Strategies', details: ['Discord communities', 'Twitter communities', 'Quest platforms']},
              {title: 'Content Creation', details: ['Infographics and banners', 'Articles, guides, blogs, educational videos', 'Translating the docs, etc.']},
              {title: 'Community Organizing', details: ['Holding events online, AMAs, etc.', 'Moderating, setting up chats and roles', 'Helping new members']}
            ].map((skill, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-xl backdrop-blur-sm bg-white/5 hover:bg-white/10 
                           transition-all duration-300 border border-white/10 hover:border-white/20"
              >
                <h3 className="text-xl font-bold text-white mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.details.map((detail, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <span className="mr-2 text-white">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-snap-block flex items-center justify-center h-screen relative">
  <Particles className="absolute inset-0 w-full h-full -z-10" quantity={100} />

  <div className="flex w-full px-8 justify-between">
    <div className="w-1/2 pr-4">
      <h2 className="text-3xl text-white mb-6 text-center">Top Articles</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        initialSlide={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        pagination={{ 
          clickable: true, 
          el: '.swiper-pagination',
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full flex justify-center"
        slideToClickedSlide={true}
        watchSlidesProgress={true}
        preventInteractionOnTransition={false}
        allowTouchMove={true}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
          }
        }}
        onTouchEnd={(swiper) => {
          setTimeout(() => {
            const currentIndex = swiper.activeIndex;
            if (currentIndex < 1) {
              swiper.slideTo(1);
            } else if (currentIndex > 3) {
              swiper.slideTo(3);
            }
          }, 1000);
        }}
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center transition-all duration-300">
            {({ isActive }) => (
              <>
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="block">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className={`w-[350px] h-[250px] object-cover mb-2 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-90 opacity-50'}`} 
                  />
                  {isActive && (
                    <h3 className="text-lg text-white text-center animate-fade-in mb-8">{article.title}</h3>
                  )}
                </a>
              </>
            )}
          </SwiperSlide>
        ))}
        <div className="swiper-pagination !bottom-0" />
      </Swiper>
    </div>

    <div className="w-1/2 pl-4">
      <h2 className="text-3xl text-white mb-6 text-center">Top Threads</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        centeredSlides={true}
        initialSlide={1}
        autoplay={{
          delay: 10000,
          disableOnInteraction: false
        }}
        pagination={{ 
          clickable: true, 
          el: '.swiper-pagination',
          dynamicBullets: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full flex justify-center"
        slideToClickedSlide={true}
        watchSlidesProgress={true}
        preventInteractionOnTransition={false}
        allowTouchMove={true}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
          }
        }}
        onTouchEnd={(swiper) => {
          setTimeout(() => {
            const currentIndex = swiper.activeIndex;
            if (currentIndex < 1) {
              swiper.slideTo(1);
            } else if (currentIndex > 3) {
              swiper.slideTo(3);
            }
          }, 1000);
        }}
      >
        {threads.map((thread, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center transition-all duration-300">
            {({ isActive }) => (
              <>
                <a href={thread.link} target="_blank" rel="noopener noreferrer" className="block">
                  <img 
                    src={thread.image} 
                    alt={thread.title} 
                    className={`w-[3500px] h-[250px] object-cover mb-2 transition-transform duration-300 ${isActive ? 'scale-110' : 'scale-90 opacity-50'}`} 
                  />
                  {isActive && (
                    <h3 className="text-lg text-white text-center animate-fade-in mb-8">{thread.title}</h3>
                  )}
                </a>
              </>
            )}
          </SwiperSlide>
        ))}
        <div className="swiper-pagination !bottom-0" />
      </Swiper>
    </div>
  </div>
</div>
<div className="about-snap-block flex items-center justify-center h-screen bg-black">
        <Particles className="absolute inset-0 w-full h-full -z-10" quantity={100} />
        <h2 className="text-4xl font-bold text-white">Fourth Block Content</h2>
      </div>
    </div>
  );
};

export default AboutPage;
