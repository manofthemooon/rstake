import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingPoints = () => {
  const linesRef = useRef<THREE.LineSegments>(null);
  const [logoGeometry, setLogoGeometry] = useState<number[]>([]);

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
      const density = 2;
      const scale = 9;
      
      for (let y = 0; y < canvas.height; y += density) {
        for (let x = 0; x < canvas.width; x += density) {
          const i = (Math.floor(y) * canvas.width + Math.floor(x)) * 4;
          const alpha = data[i + 3];
          const brightness = (data[i] + data[i + 1] + data[i + 2]) / 3;
          
          if (alpha > 128 && brightness < 128) {
            const xPos = ((x - canvas.width / 2) / canvas.width) * scale;
            const yPos = ((canvas.height / 2 - y) / canvas.height) * scale;
            const zPos = 0;
            
            if (x < canvas.width - density) {
              const nextI = (Math.floor(y) * canvas.width + Math.floor(x + density)) * 4;
              const nextAlpha = data[nextI + 3];
              const nextBrightness = (data[nextI] + data[nextI + 1] + data[nextI + 2]) / 3;
              
              if (nextAlpha > 128 && nextBrightness < 128) {
                const nextX = (((x + density) - canvas.width / 2) / canvas.width) * scale;
                points.push(xPos, yPos, zPos, nextX, yPos, zPos);
              }
            }

            if (y < canvas.height - density) {
              const nextI = (Math.floor(y + density) * canvas.width + Math.floor(x)) * 4;
              const nextAlpha = data[nextI + 3];
              const nextBrightness = (data[nextI] + data[nextI + 1] + data[nextI + 2]) / 3;
              
              if (nextAlpha > 128 && nextBrightness < 128) {
                const nextY = ((canvas.height / 2 - (y + density)) / canvas.height) * scale;
                points.push(xPos, yPos, zPos, xPos, nextY, zPos);
              }
            }
          }
        }
      }
      
      setLogoGeometry(points);
    };
  }, []);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.y += 0.005;
      linesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  if (logoGeometry.length === 0) return null;

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={logoGeometry.length / 3}
          array={new Float32Array(logoGeometry)}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#ffffff"
        transparent={true}
        opacity={0.8}
        linewidth={1}
      />
    </lineSegments>
  );
};

export default RotatingPoints; 