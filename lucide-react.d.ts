declare module 'lucide-react' {
    import { FC, SVGProps } from 'react';
    export interface LucideProps extends SVGProps<SVGSVGElement> {
      size?: string | number;
      color?: string;
      strokeWidth?: string | number;
    }
    export type LucideIcon = FC<LucideProps>;
    
    export const Github: LucideIcon;
    export const Mail: LucideIcon;
    export const Twitter: LucideIcon;
    export const Telegram: LucideIcon;
    export const Discord: LucideIcon;
 
  }