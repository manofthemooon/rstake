import { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);
  const [modelLoaded, setModelLoaded] = useState(false);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load('/app/components/alien.glb', (gltf) => {
      const model = gltf.scene;
      model.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          mesh.material = new THREE.MeshStandardMaterial({
            color: 0x7f7f7f,
            metalness: 1.0,
            roughness: 0.2,
          });
        }
      });
      if (modelRef.current) {
        modelRef.current.add(model);
      }
      setModelLoaded(true);
    });
  }, []);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
      modelRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  if (!modelLoaded) return null;

  return <primitive ref={modelRef} object={modelRef.current || new THREE.Group()} />;
};

export default Model;
