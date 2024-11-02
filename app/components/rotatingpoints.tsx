import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingPoints = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const [logoPoints, setLogoPoints] = useState<number[]>([]);

  useEffect(() => {
    const img = new Image();
    img.src = '/favicon.png';
    
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const points: number[] = [];
      
      for (let y = 0; y < canvas.height; y += 2) { 
        for (let x = 0; x < canvas.width; x += 2) {
          const alpha = data[((y * canvas.width + x) * 4) + 3];
          if (alpha > 0) {
            const xPos = (x / canvas.width) * 2 - 1;
            const yPos = -(y / canvas.height) * 2 + 1;
            points.push(xPos, yPos, 0);
          }
        }
      }
      
      setLogoPoints(points);
    };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.005;
    }
  });

  if (logoPoints.length === 0) return null;

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={logoPoints.length / 3}
          array={new Float32Array(logoPoints)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#ffffff"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};

export default RotatingPoints; 