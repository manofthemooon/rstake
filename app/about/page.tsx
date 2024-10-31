'use client';

import Particles from '../components/particles';
import { Navigation } from "../components/nav";
import React, { useRef, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import RotatingPoints from '../components/rotatingpoints';
import { Card } from "../components/card";
import ScrollIndicators from '../components/scrollindicators';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
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

  const articles = [
    { title: "Ocean Protocol: Empowering a Data-Driven Future", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*nVi3EPJDYW4e_hG4LZBZJw.png", link: "https://manofthemooon.medium.com/ocean-protocol-empowering-a-data-driven-future-d590bab9d55d" },
    { title: "Injective Protocol: Revolutionizing Decentralized Exchange", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*yALEUr8OA5wClbRw2B1zjg.jpeg", link: "https://manofthemooon.medium.com/injective-protocol-revolutionizing-decentralized-exchange-c5bfa8ef54a" },
    { title: "Introducing Uroboros Wallet", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*BebjtIVw7tlLoFk1pmsfIA.png", link: "https://manofthemooon.medium.com/introducing-uroboros-wallet-the-solution-for-seamless-defi-experience-b3d3ead45281" },
    { title: "Analyzing Injective (INJ) Crypto", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*Ur7oRfnXtq2PhTF9gLO3qg.png", link: "https://manofthemooon.medium.com/analyzing-injective-inj-crypto-price-consolidation-and-future-potential-b3743854b71f" },
    { title: "Hyperlane ISM", image: "https://miro.medium.com/v2/resize:fit:720/format:webp/1*off5F2vhlzvZeziKzVxGaw.png", link: "https://manofthemooon.medium.com/ru-hyperlane-isms-%D1%87%D1%82%D0%BE-%D1%8D%D1%82%D0%BE-748047675b89" },
  ];

  const threads = [
    { title: "Ocean Protocol Toolset: Ocean.py", image: "https://pbs.twimg.com/media/FzESL7wX0AIKa2g?format=jpg&name=small", link: "https://x.com/manoofthemooon/status/1671136940140142592" },
    { title: "Venom: A Blockchain Without Boundaries", image: "https://pbs.twimg.com/media/Fxjb8uyXwAA7cg-?format=jpg&name=small", link: "https://x.com/manoofthemooon/status/1664322123278565389" },
    { title: "Ocean Protocol InvestorsObserver Analysis", image: "https://i.ibb.co/mCQNcL3/123333.png", link: "https://x.com/manoofthemooon/status/1679111462789234688" },
    { title: "Injective SWOT Analysis ", image: "https://i.ibb.co/Qp7GjSj/123333.png", link: "https://x.com/manoofthemooon/status/1661490930304663553" },
    { title: "Decentralized Music Data Marketplace with Ocean Protocol", image: "https://i.ibb.co/h9HSKHF/123333.png", link: "https://x.com/manoofthemooon/status/1676230380158844928" },
  ];

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
        <div className="flex justify-between w-full">
          <div className="education-info text-left text-white ml-8 mt-16">
            <h3 className="text-2xl font-bold glow-text">Education</h3>
            <ul className="mt-4 space-y-2">
              <li className="neon-card">Bachelor’s Degree in Infocommunication Technologies, MTUCI (2019-2023)</li>
              <li className="neon-card">Master’s Degree in Quantum Communications, MTUCI (2023-2025)</li>
            </ul>
          </div>

          <div className="languages-info text-left text-white mr-12 mt-16">
            <h3 className="text-2xl font-bold glow-text">Languages</h3>
            <ul className="mt-4 ml-4 space-y-2 pl-4">
              <li className="neon-card">English - B2</li>
              <li className="neon-card">Russian - C2</li>
            </ul>
          </div>
        </div>

        <div className="tech-stack text-center text-white mt-8 ml-8">
          <h3 className="text-2xl font-bold glow-text">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {['React', 'TypeScript', 'Python', 'Java', 'C#', 'HTML/CSS', 'DevTools', 'XPath', 'Git', 'Jira', 'ZennoPoster', 'YouGile', 'API', 'ChatGPT', 'Figma'].map((tool) => (
              <span key={tool} className="holo-badge">{tool}</span>
            ))}
          </div>
        </div>

        <div className="skills-section text-center text-white mt-8">
          <h3 className="text-2xl font-bold glow-text">Skills</h3>
        </div>

        <div className="skills-info flex justify-between items-end text-white mt-4 w-full">
          {[{title: 'Coding and Testing', details: ['Installing nodes', 'Creating scripts and robots', 'Testing the product']},
            {title: 'Marketing Strategies', details: ['Discord communities', 'Twitter communities', 'Quest platforms']},
            {title: 'Content Creation', details: ['Medium', 'Twitter', 'Telegram', 'YouTube']},
            {title: 'Coaching and Teaching', details: ['Mentoring friends', 'Conducting webinars', 'Online courses']},
          ].map((skill, index) => (
            <div key={index} className="neon-card w-full md:w-[22%] h-[200px] flex flex-col items-center justify-center p-4">
              <h4 className="text-lg font-bold">{skill.title}</h4>
              <ul className="mt-2">
                {skill.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="text-sm">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="about-snap-block flex flex-col h-screen">
        <Particles className="absolute inset-0 w-full h-full -z-10" quantity={100} />
        <div className="flex justify-center items-center flex-col w-full h-full">
          <h3 className="text-2xl font-bold text-white">My Publications</h3>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full md:w-[80%] mt-4"
          >
            {articles.map((article, index) => (
              <SwiperSlide key={index} className="flex flex-col justify-center items-center">
                <h4 className="text-white text-xl mb-4">{activeBlock === 2 ? article.title : ''}</h4>
                <a href={article.link} target="_blank" rel="noreferrer">
                  <img src={article.image} alt={article.title} className="object-cover rounded-lg shadow-md" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className="about-snap-block flex flex-col h-screen">
        <Particles className="absolute inset-0 w-full h-full -z-10" quantity={100} />
        <div className="flex justify-center items-center flex-col w-full h-full">
          <h3 className="text-2xl font-bold text-white">My Threads</h3>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper w-full md:w-[80%] mt-4"
          >
            {threads.map((thread, index) => (
              <SwiperSlide key={index} className="flex flex-col justify-center items-center">
                <h4 className="text-white text-xl mb-4">{activeBlock === 3 ? thread.title : ''}</h4>
                <a href={thread.link} target="_blank" rel="noreferrer">
                  <img src={thread.image} alt={thread.title} className="object-cover rounded-lg shadow-md" />
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
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



      