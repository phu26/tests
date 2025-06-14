   'use client';
   import { useState, useEffect } from 'react';

   interface WindowDimensions {
     width: number | undefined;
     height: number | undefined;
   }

export default function useWindowDimensions()  {
     const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>({
       width: undefined,
       height: undefined,
     });

     useEffect(() => {
       const handleResize = () => {
         setWindowDimensions({
           width: window.innerWidth,
           height: window.innerHeight,
         });
       };

       handleResize(); // Set initial dimensions
       window.addEventListener('resize', handleResize);

       return () => window.removeEventListener('resize', handleResize);
     }, []);

     return windowDimensions;
   }

   