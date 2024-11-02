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
      const density = 0.25;
      const scale = 9;
      
      for (let y = 0; y < canvas.height; y += density) {
        for (let x = 0; x < canvas.width; x += density) {
          const i = (Math.floor(y) * canvas.width + Math.floor(x)) * 4;
          const alpha = data[i + 3];
          const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
          
          if (alpha > 128 && brightness < 128) {
            const xPos = ((x - canvas.width / 2) / canvas.width) * scale;
            const yPos = ((canvas.height / 2 - y) / canvas.height) * scale;
            const zPos = (Math.random() - 0.5) * 0.03;
            
            points.push(xPos, yPos, zPos);
          }
        }
      }
      
      setLogoPoints(points);
    };
  }, []);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.005;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
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
        size={0.015}
        color="#ffffff"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};

export default RotatingPoints; 