import React from 'react';

interface CustomCardProps {
  title: string;
  image: string;
  link: string;
  active: boolean;
}

const CustomCard: React.FC<CustomCardProps> = ({ title, image, link, active }) => {
  return (
    <div className={`card ${active ? 'active' : ''}`}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <a href={link} target="_blank" rel="noopener noreferrer">
        Learn More
      </a>
    </div>
  );
};

export default CustomCard;
