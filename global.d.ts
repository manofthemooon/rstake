import { OrbitControls } from 'three-stdlib';
declare module 'three-stdlib';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      orbitControls: any; 
    }
  }
}
