import { useRef, useState, useEffect, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const RotatingPoints = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const [logoPoints, setLogoPoints] = useState<number[]>([]);

  useEffect(() => {
    const img = new Image();
    img.src = '/favicon.png';
    
    const processImage = async () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      
      const offscreen = new OffscreenCanvas(canvas.width, canvas.height);
      const offscreenCtx = offscreen.getContext('2d');
      if (!offscreenCtx) return;

      offscreenCtx.drawImage(canvas, 0, 0);
      const imageData = offscreenCtx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      const points = await new Promise<number[]>((resolve) => {
        const worker = new Worker(new URL('./imageWorker.ts', import.meta.url));
        
        worker.onmessage = (e) => {
          resolve(e.data);
          worker.terminate();
        };

        worker.postMessage({
          data: data,
          width: canvas.width,
          height: canvas.height,
          density: 0.0002,
          scale: 9
        });
      });

      setLogoPoints(points);
    };

    img.onload = () => {
      requestIdleCallback(() => {
        processImage();
      });
    };
  }, []);

  const geometry = useMemo(() => {
    if (logoPoints.length === 0) return null;
    
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(logoPoints, 3)
    );
    return geometry;
  }, [logoPoints]);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.005;
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  if (!geometry) return null;

  return (
    <points ref={pointsRef}>
      <primitive object={geometry} />
      <pointsMaterial
        size={0.004}
        color="#ffffff"
        sizeAttenuation={true}
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
}

export default RotatingPoints;