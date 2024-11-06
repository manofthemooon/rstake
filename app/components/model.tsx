import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

const Model: React.FC = () => {
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(
      '/alien.glb', 
      (gltf) => {
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
      },
      undefined,
      (error) => {
        console.error('Ошибка при загрузке модели:', error);
      }
    );
  }, []);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
      modelRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <primitive ref={modelRef} object={modelRef.current || new THREE.Group()} />
    </>
  );
};

export default Model;
