import React from 'react';

interface CustomCardProps {
  title: string;
  image: string;
  link: string;
  isActive: boolean;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, image, link, isActive }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className={`block transition-transform duration-300 ${isActive ? 'scale-105 z-10' : 'scale-90 opacity-70'}`}>
      <img src={image} alt={title} className="w-[360px] h-[190px] object-cover mb-2" />
      {isActive && <h3 className="text-lg text-white text-center mt-2">{title}</h3>}
    </a>
  );
};

export default CustomCard;
