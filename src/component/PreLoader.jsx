import React, { useRef, useEffect } from 'react';
function PreLoader() {

    const paths = useRef();
    
    useEffect(() => {  
        
        
        let elementPaths = paths.current.childNodes;
        elementPaths.forEach( (element, index) => {

            // getting the total length of all the word
            let totalLength = element.getTotalLength();
            let halfLength = totalLength/2;
  
            // adding css 
            element.style.cssText = `fill:none; opacity:0; stroke:#fff;  stroke-dasharray : ${totalLength}; stroke-dashoffset:${totalLength};`;
            


            // adding animations 
            let animationType = [
                {opacity:0.1, offset:0.1},
                {opacity:0.5, offset:0.5, strokeDashoffset : halfLength},
                {strokeDashoffset : 0, offset:0.9},
                {offset:1, opacity:1, strokeDashoffset : 0, fill:'#fff'}
            ];
            
            let animationTiming = {
                duration:800 ,
                fill:'forwards',
                delay: index * 250,
            }
            
            element.animate(
                animationType,
                animationTiming
                )

            });

    });


        
    return (
        <div className="wrapper preLoaderDiv py-8" >
        <svg xmlns="http://www.w3.org/2000/svg"  className="preloader" viewBox="0 0 1047.04 81">
          
        <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1" ref={paths}>
            <path className="cls-1"
                d="M55.8,9q.81,0,.81.45a4.17,4.17,0,0,1-1,2q-7.29,9.72-15.57,22.41a65.16,65.16,0,0,1,8.37,1.08q13.5,2.79,13.5,8.64,0,.36-.18.36t-.36-.45q-.9-2.25-9.9-3.06-2.7-.27-6.57-.27t-9.27.54Q22.32,61.83,17.91,72.27c-.3.66-.58,1-.85,1s-.41-.3-.41-.9q0-4.5,16.47-31.5-5.22.72-7.65,1.17Q9.63,44.82,4.59,50.67a5.76,5.76,0,0,0-1.53,3.51,4,4,0,0,0,1.8,3.06q.54.36-.18.36l-.81-.27Q0,54.36,0,50.4t3.69-7.56q5.4-5.4,18.45-7.74a86.6,86.6,0,0,1,14.67-1.35h.81Q53.46,9.09,55,9.09ZM91.8.63q.9,0,.9.45a4.17,4.17,0,0,1-1,2Q82.17,15.57,71.15,33.48T55.89,61.38q-.72,1.53-1.17.72a3.62,3.62,0,0,1-.09-1q0-3.69,9.77-20.16T82.12,12.6q8-11.88,9-11.88Z" />
            <path className="cls-1"
                d="M87.84,37a30.91,30.91,0,0,0-6.17,9.59q-2.48,5.81-2.47,8.14c0,1.56.61,2.34,1.84,2.34s3.27-.9,6.12-2.7a74.75,74.75,0,0,0,9.77-7.65q1.17-1.08,1.17.27a.52.52,0,0,1-.18.36q-4.32,3.78-7.29,6.21a43.71,43.71,0,0,1-7.07,4.63c-2.73,1.48-5,2.21-6.7,2.21A7,7,0,0,1,72,59a4.22,4.22,0,0,1-1.57-3.15,9.69,9.69,0,0,1,1.17-5.13,49.78,49.78,0,0,1,4-5.22c-.66.54-1.7,1.44-3.11,2.7s-2.38,2.1-2.92,2.52-.81.3-.81-.36q0-.63,1.44-1.8t6.25-5.94Q81.26,37.8,83,36.9A6.73,6.73,0,0,1,85.9,36a3.56,3.56,0,0,1,1.67.31C87.93,36.53,88,36.75,87.84,37ZM89,32.22a2.45,2.45,0,0,1-.81-2.34,6.34,6.34,0,0,1,1.62-3.24,4.8,4.8,0,0,1,3.87-1.71,2.5,2.5,0,0,1,1.53.67,2.41,2.41,0,0,1,.63,2.25,5.3,5.3,0,0,1-1.44,3,5.72,5.72,0,0,1-2.84,1.79A2.75,2.75,0,0,1,89,32.22Z" />
            <path className="cls-1"
                d="M104.8,51.57q2.3,0,3.06,1.26a5.06,5.06,0,0,1,.77,2.66,12.86,12.86,0,0,1-1.26,4.36A17.78,17.78,0,0,1,102.51,66,12.66,12.66,0,0,1,95,69.39q-.54,0-.63-.36a1.41,1.41,0,0,1,.36-.27A11.28,11.28,0,0,0,102,65a13.08,13.08,0,0,0,3.78-7.34l-.45.36a6.55,6.55,0,0,1-4.59,2.25A2.48,2.48,0,0,1,99,59.67a1.86,1.86,0,0,1-.67-1.39,9,9,0,0,1,.27-1.94,6.33,6.33,0,0,1,2-2.79A6,6,0,0,1,104.8,51.57Z" />
            <path className="cls-1"
                d="M198,9q.81,0,.81.45a4.17,4.17,0,0,1-1,2,432.85,432.85,0,0,0-27.27,41.13,49.44,49.44,0,0,1,10.3,2.11A16.9,16.9,0,0,1,188,59.08a9.51,9.51,0,0,1,2.7,6.62q0,2.43-.72,2.34c-.3,0-.41-.21-.32-.63a5.1,5.1,0,0,0,.14-.9q0-2.07-3.15-3.78Q181,59.67,170.1,59.67q-1.8,0-3.69.09a114.68,114.68,0,0,0-6.3,12.51c-.3.66-.59,1-.86,1s-.4-.33-.4-1q0-2.34,5.31-12.42a43.74,43.74,0,0,0-12.42,3.06c-1.74.66-3.15,1.21-4.23,1.67a19.92,19.92,0,0,1-3.69,1.08c-1.38.26-2.25.13-2.61-.41a1.86,1.86,0,0,1-.72-1.58,7.18,7.18,0,0,1,.4-2.25,8.22,8.22,0,0,1,1.67-2.65q2.7-3.33,10.8-5.4a33.29,33.29,0,0,1,8.55-1.17q4.14,0,6.48.18,8.19-13.86,18-28.58T197.19,9.09Zm9.54,3.78q0-2.79-4.32-3.87a44.33,44.33,0,0,0-10.58-1.08,97.22,97.22,0,0,0-16.33,1.8q-17.19,3.15-24.12,8.28-3,2.16-3,4.23t2.88,4.05c.42.24.4.38,0,.4a1.51,1.51,0,0,1-1.12-.31A8.48,8.48,0,0,1,147.69,22a8.25,8.25,0,0,1-.45-2.79q0-5.49,5.49-8.55A62.08,62.08,0,0,1,170,4.18,87.69,87.69,0,0,1,189.54,1.8a35.26,35.26,0,0,1,12.24,2.25,10.44,10.44,0,0,1,4.86,3.51,8,8,0,0,1,1.62,4.77c0,1.38-.17,2.06-.5,2s-.45-.22-.36-.58A4.13,4.13,0,0,0,207.54,12.78Z" />
            <path className="cls-1"
                d="M250.56,45.81c-.66.78-1.34,1.62-2,2.52S247,50.46,245.92,52a7.56,7.56,0,0,0-1.57,4c0,1.08.46,1.62,1.39,1.62a11.51,11.51,0,0,0,4.55-1.71,77,77,0,0,0,14-10.8c.59-.6,1-.69,1.17-.27v.36a1,1,0,0,1-.36.63q-15.48,14.58-22.5,14.58A4.75,4.75,0,0,1,239.08,59a4.5,4.5,0,0,1-1.39-3.29A17,17,0,0,1,239.31,50a32.63,32.63,0,0,1-8.69,7.79q-4.63,2.74-7.24,2.74a6.69,6.69,0,0,1-4.46-1.57A5,5,0,0,1,217.08,55q0-6.66,5.94-13.05a24.64,24.64,0,0,1,11.16-6.75,18.27,18.27,0,0,1,5.8-1,10.63,10.63,0,0,1,5.49,1.58,7.12,7.12,0,0,1,3.38,3.73,4.14,4.14,0,0,1,3.87,2,1.69,1.69,0,0,1,.18.9,2.4,2.4,0,0,1-.68,1.44ZM244,36.9a11.36,11.36,0,0,0-4.5,1.17,24.39,24.39,0,0,0-8.73,6.84q-6.57,7.74-6.57,11.34,0,1.89,1.53,1.89a10.55,10.55,0,0,0,4.18-1.62,39.17,39.17,0,0,0,7.7-6.39l2.07-2q1.8-1.71,3.06-3c2.82-2.94,4.23-5,4.23-6.35S246,36.9,244,36.9Z" />
            <path className="cls-1"
                d="M302.76,39.6q0,3.33-5.67,11c-2.29,3.06-3.42,5-3.42,5.67s.37,1.08,1.12,1.08A6.76,6.76,0,0,0,298,56a79.63,79.63,0,0,0,10.26-8.46q.72-.72,1-.36a1.09,1.09,0,0,1,.27.54,13.75,13.75,0,0,1-2,2.07q-2,1.89-4.37,4a44.87,44.87,0,0,1-6,4.27c-2.41,1.48-4.39,2.21-5.94,2.21q-4.86,0-4.86-4.32a14.55,14.55,0,0,1,.54-3.6q1.15-3.51,10.17-13.59a3.58,3.58,0,0,0,1.17-2c0-.48-.61-.72-1.8-.72s-3.1,1-5.67,3.15a33.68,33.68,0,0,0-3.33,3.19,37.24,37.24,0,0,0-4.64,6.8,52.1,52.1,0,0,0-3.91,8.28A2.12,2.12,0,0,1,276.75,59a5.55,5.55,0,0,1-.9-.09c-1.14-.3-1.6-.84-1.35-1.62q7-12.51,8.37-15.66a13.61,13.61,0,0,0,1.35-4.5q0-1.35-1.08-1.35-4.78,0-13.68,15.57a58.36,58.36,0,0,1-5.22,7.2q-2,2.16-3.6,2.16h-.36a7.11,7.11,0,0,1-4.59-1.89q.54-.81,2.61-3.51a126.67,126.67,0,0,0,8-10.8,83.81,83.81,0,0,1-6.57,6c-.6.48-.95.51-1,.09a1.15,1.15,0,0,1,.41-1.13l1.8-1.62,1.66-1.48c.27-.24.78-.7,1.53-1.4a20,20,0,0,0,1.67-1.66,36.11,36.11,0,0,0,3.69-5,5,5,0,0,0,.4-2.12,1.77,1.77,0,0,0-.45-1.34.74.74,0,0,1-.31-.77.63.63,0,0,1,.72-.72,2.3,2.3,0,0,1,.81.18c1.85.84,2.79,2.67,2.79,5.49a17.75,17.75,0,0,1-1,5.49q1.79-2.79,3.87-5.49,3.68-4.77,7.38-4.77c1.67,0,2.52,1,2.52,2.88s-1.26,5-3.78,9.63c2.52-3.24,4.46-5.61,5.85-7.11q4.75-4.95,9.18-4.95,4.67,0,5.31,4Z" />
            <path className="cls-1"
                d="M363.5,61.47q-.36,0-.36-.72,0-1.26,5-7.56.72-.9,5.85-7.11t7.11-8.73q7.38-9.54,9.86-14.49t2.47-8.19q0-7.38-12.24-7.38-13,0-33.66,7-14.49,4.95-14.49,9.18,0,1.53,2.07,3c.42.24.41.37,0,.41a1.92,1.92,0,0,1-1.13-.23,5.42,5.42,0,0,1-2.7-4.68A11.15,11.15,0,0,1,333,16.25a13.63,13.63,0,0,1,5.44-4.91,82.31,82.31,0,0,1,20.7-8A97.59,97.59,0,0,1,383.3,0q11.88,0,15.3,4.41A8.86,8.86,0,0,1,400.85,10a14.53,14.53,0,0,1-1.08,5.44,36.27,36.27,0,0,1-6.39,10.8q-.9,1.17-6.07,7.24t-8.06,9.68Q411.74,8.91,425,8.91a5.58,5.58,0,0,1,5.4,3.24,7.25,7.25,0,0,1,.9,3.15,29.54,29.54,0,0,1-.18,3.06q-.27,4.5-7.56,16.83a161.55,161.55,0,0,1,19.62-17.82Q453.59,9.63,461,9.63c2.82,0,4.23,1.19,4.23,3.55S463.7,19,460.7,23.4q-26.55,39-26.55,51.84,0,4,2.34,4.41a4,4,0,0,0,3.06-.9.69.69,0,0,1,1.08.13c.3.39.18.84-.36,1.36a2.7,2.7,0,0,1-1.89.76,20.64,20.64,0,0,1-2.52-.18,16,16,0,0,1-3.78-1.12,8.9,8.9,0,0,1-3.91-3.16,8.23,8.23,0,0,1-1.58-4.9,22.47,22.47,0,0,1,1-6.93Q430,57.6,450.35,29.25q6.12-8.55,6.12-12.24,0-2.79-2.88-2.79-3.87,0-9.09,4-11.16,8.46-24.93,23.58-3.78,6.12-9.36,14.31a2.3,2.3,0,0,1-1.89,1.17q-3.6,0-3.6-1.62a1.6,1.6,0,0,1,.18-.72Q419.84,29,421.64,21.69a20,20,0,0,0,.54-3.91,21.15,21.15,0,0,0-.09-2.21A3.05,3.05,0,0,0,418.85,13q-2.61,0-7.11,3-7.74,5-19.17,15.93t-22,22.77a.86.86,0,0,1-.63.27Q364.76,61.47,363.5,61.47Z" />
            <path className="cls-1"
                d="M466.55,58.14q-6,3.06-10.53,3.06-3.78,0-5.13-2.52a5.7,5.7,0,0,1-.72-2.88,16.27,16.27,0,0,1,1.71-7.2,15,15,0,0,1-2.25,1.89q-.9.81-.9-.18c0-.42.53-1.08,1.58-2s2.65-2.41,4.81-4.54S459,40.05,460.25,39a17.85,17.85,0,0,1,11.61-4.59,10.22,10.22,0,0,1,4.59,1.17q3.42,1.62,3.42,5.94,0,5.22-5.22,10.71a26.89,26.89,0,0,1-5.76,4.68q7.38-1.17,15.66-8.91a1.07,1.07,0,0,1,.81-.31.36.36,0,0,1,.36.4,1,1,0,0,1-.36.72q-9.9,9.36-18.45,9.36Zm8.73-9.45c1.5-2.28,2.25-4.21,2.25-5.81a4,4,0,0,0-2.07-3.64,4.06,4.06,0,0,0-2.7-1,14.57,14.57,0,0,0-10.12,4.32,21.54,21.54,0,0,0-6.17,9.18,10.22,10.22,0,0,0-.63,3.55,2.74,2.74,0,0,0,1.4,2.62,6.33,6.33,0,0,0,3.1.76,12,12,0,0,0,5-1.71,1.38,1.38,0,0,1-.54-.18,1.62,1.62,0,0,1-1.08-1.44q0-3.15,3.51-6.39a7.71,7.71,0,0,1,5.13-2.25Q474.92,46.71,475.28,48.69Z" />
            <path className="cls-1"
                d="M509,37.71q0-1.17-1.71-1.17-3.06,0-7.47,4.32-1.08,1.08-3.91,4.5a67.44,67.44,0,0,0-5.54,7.83l-2.25,5,.27-.9a5.58,5.58,0,0,0-.36,1.08q-.45,1.08-2.61,1.8a2.21,2.21,0,0,1-.81.18q-.9,0-.18-1.35c.24-.6,1.08-2.74,2.52-6.44s2.61-6.64,3.51-8.86a56.7,56.7,0,0,1-6.57,6.3q-.9.72-1.26.18a.52.52,0,0,1-.09-.36q0-.27.81-1A64.92,64.92,0,0,0,492,40a114.11,114.11,0,0,1,8.6-15.25A90.73,90.73,0,0,1,513.44,8.55,22.67,22.67,0,0,1,523,2.61a14.93,14.93,0,0,1,4.37-.72A7,7,0,0,1,531.13,3c1.17.76,1.75,2.15,1.75,4.19a14.94,14.94,0,0,1-2.7,8.19q-2.7,4.14-9.54,9.23A64.53,64.53,0,0,1,508,32.22c-.72.3-1.14.26-1.26-.14s.18-.73.9-1a60.15,60.15,0,0,0,11.75-7.38q6.52-5,8.73-8.59t2.2-5.77c0-1.46-.63-2.2-1.89-2.2q-2.16,0-6.84,3.6A89.8,89.8,0,0,0,507,26.28a154.59,154.59,0,0,0-13.1,20.16,67.57,67.57,0,0,1,4.59-5.94q5-5.67,9.81-5.67,4.5,0,5.31,4a9.9,9.9,0,0,1,.09,1.53,9.84,9.84,0,0,1-.67,2.93,48.33,48.33,0,0,1-3.78,7.1c-2.07,3.46-3.11,5.54-3.11,6.26s.24,1.08.72,1.08a6.52,6.52,0,0,0,3-1.26A97.29,97.29,0,0,0,523,45.81c.72-.72,1.07-.84,1-.36a2.27,2.27,0,0,1-.59,1.35,79.5,79.5,0,0,1-13.77,11.43,11.38,11.38,0,0,1-6,2.16,4.89,4.89,0,0,1-1.35-.18c-2.34-.48-3.51-1.78-3.51-3.92a13.7,13.7,0,0,1,2.52-7.15q.45-.63,3.33-4.23Q509,39.51,509,37.71Z" />
            <path className="cls-1"
                d="M553.4,45.81c-.66.78-1.33,1.62-2,2.52s-1.56,2.13-2.61,3.69a7.59,7.59,0,0,0-1.58,4c0,1.08.47,1.62,1.4,1.62a11.48,11.48,0,0,0,4.54-1.71,76.63,76.63,0,0,0,14-10.8q.9-.9,1.17-.27v.36a1,1,0,0,1-.36.63q-15.48,14.58-22.5,14.58A4.73,4.73,0,0,1,541.93,59a4.51,4.51,0,0,1-1.4-3.29A17,17,0,0,1,542.15,50a32.6,32.6,0,0,1-8.68,7.79q-4.63,2.74-7.25,2.74a6.66,6.66,0,0,1-4.45-1.57A5,5,0,0,1,519.92,55q0-6.66,5.94-13.05A24.7,24.7,0,0,1,537,35.19a18.33,18.33,0,0,1,5.81-1,10.63,10.63,0,0,1,5.49,1.58,7.09,7.09,0,0,1,3.37,3.73,4.14,4.14,0,0,1,3.87,2,1.69,1.69,0,0,1,.18.9,2.38,2.38,0,0,1-.67,1.44Zm-6.57-8.91a11.36,11.36,0,0,0-4.5,1.17,24.39,24.39,0,0,0-8.73,6.84Q527,52.65,527,56.25q0,1.89,1.53,1.89a10.58,10.58,0,0,0,4.19-1.62,39.17,39.17,0,0,0,7.69-6.39l2.07-2q1.8-1.71,3.06-3c2.82-2.94,4.23-5,4.23-6.35S548.81,36.9,546.83,36.9Z" />
            <path className="cls-1"
                d="M605.6,39.6q0,3.33-5.67,11-3.42,4.59-3.42,5.67c0,.72.37,1.08,1.13,1.08A6.7,6.7,0,0,0,600.83,56a79.63,79.63,0,0,0,10.26-8.46q.72-.72,1-.36a1.09,1.09,0,0,1,.27.54,13.13,13.13,0,0,1-2,2.07c-1.32,1.26-2.78,2.58-4.36,4A44.38,44.38,0,0,1,600,58c-2.4,1.48-4.38,2.21-5.94,2.21q-4.86,0-4.86-4.32a14.55,14.55,0,0,1,.54-3.6q1.17-3.51,10.17-13.59a3.52,3.52,0,0,0,1.17-2q0-.72-1.8-.72t-5.67,3.15a34.83,34.83,0,0,0-3.33,3.19,37.29,37.29,0,0,0-4.63,6.8,52.25,52.25,0,0,0-3.92,8.28A2.12,2.12,0,0,1,579.59,59a5.66,5.66,0,0,1-.9-.09q-1.71-.45-1.35-1.62,7-12.51,8.37-15.66a13.61,13.61,0,0,0,1.35-4.5q0-1.35-1.08-1.35-4.77,0-13.68,15.57a57.32,57.32,0,0,1-5.22,7.2q-2,2.16-3.6,2.16h-.36a7.11,7.11,0,0,1-4.59-1.89q.54-.81,2.61-3.51a124.56,124.56,0,0,0,8-10.8,83.81,83.81,0,0,1-6.57,6c-.6.48-.94.51-1,.09a1.14,1.14,0,0,1,.4-1.13l1.8-1.62,1.67-1.48L567,45a19.57,19.57,0,0,0,1.66-1.66,34.54,34.54,0,0,0,3.69-5,4.91,4.91,0,0,0,.41-2.12,1.82,1.82,0,0,0-.45-1.34.75.75,0,0,1-.32-.77.64.64,0,0,1,.72-.72,2.21,2.21,0,0,1,.81.18q2.79,1.26,2.79,5.49a17.46,17.46,0,0,1-1,5.49q1.8-2.79,3.87-5.49,3.69-4.77,7.38-4.77,2.52,0,2.52,2.88,0,2.7-3.78,9.63,3.78-4.86,5.85-7.11,4.77-4.95,9.18-4.95,4.68,0,5.31,4Z" />
            <path className="cls-1"
                d="M652.22,39.6q0,3.33-5.67,11-3.42,4.59-3.42,5.67c0,.72.37,1.08,1.12,1.08a6.72,6.72,0,0,0,3.2-1.35,79.63,79.63,0,0,0,10.26-8.46q.72-.72,1-.36a1.09,1.09,0,0,1,.27.54,13.13,13.13,0,0,1-2,2.07q-2,1.89-4.37,4a43.59,43.59,0,0,1-6,4.27c-2.4,1.48-4.38,2.21-5.94,2.21q-4.86,0-4.86-4.32a14.55,14.55,0,0,1,.54-3.6q1.17-3.51,10.17-13.59a3.52,3.52,0,0,0,1.17-2q0-.72-1.8-.72t-5.67,3.15a34.83,34.83,0,0,0-3.33,3.19,37.75,37.75,0,0,0-4.64,6.8,52.1,52.1,0,0,0-3.91,8.28A2.12,2.12,0,0,1,626.21,59a5.66,5.66,0,0,1-.9-.09q-1.71-.45-1.35-1.62,7-12.51,8.37-15.66a13.61,13.61,0,0,0,1.35-4.5q0-1.35-1.08-1.35-4.77,0-13.68,15.57a57.32,57.32,0,0,1-5.22,7.2q-2,2.16-3.6,2.16h-.36a7.11,7.11,0,0,1-4.59-1.89q.54-.81,2.61-3.51a124.56,124.56,0,0,0,8-10.8,83.81,83.81,0,0,1-6.57,6c-.6.48-1,.51-1,.09a1.15,1.15,0,0,1,.41-1.13l1.8-1.62L612,46.44c.27-.24.78-.7,1.53-1.4a20,20,0,0,0,1.67-1.66,34.54,34.54,0,0,0,3.69-5,4.9,4.9,0,0,0,.4-2.12,1.78,1.78,0,0,0-.44-1.34.73.73,0,0,1-.32-.77.64.64,0,0,1,.72-.72,2.21,2.21,0,0,1,.81.18q2.79,1.26,2.79,5.49a17.46,17.46,0,0,1-1,5.49q1.8-2.79,3.87-5.49,3.69-4.77,7.38-4.77,2.52,0,2.52,2.88,0,2.7-3.78,9.63,3.78-4.86,5.85-7.11,4.77-4.95,9.18-4.95,4.68,0,5.31,4Z" />
            <path className="cls-1"
                d="M690,45.81c-.66.78-1.34,1.62-2,2.52s-1.56,2.13-2.61,3.69a7.56,7.56,0,0,0-1.57,4c0,1.08.46,1.62,1.39,1.62a11.51,11.51,0,0,0,4.55-1.71,76.63,76.63,0,0,0,14-10.8q.9-.9,1.17-.27v.36a1,1,0,0,1-.36.63Q689,60.39,682,60.39A4.75,4.75,0,0,1,678.54,59a4.5,4.5,0,0,1-1.39-3.29A17,17,0,0,1,678.77,50a32.63,32.63,0,0,1-8.69,7.79q-4.64,2.74-7.24,2.74a6.69,6.69,0,0,1-4.46-1.57A5,5,0,0,1,656.54,55q0-6.66,5.94-13.05a24.7,24.7,0,0,1,11.16-6.75,18.27,18.27,0,0,1,5.8-1,10.63,10.63,0,0,1,5.49,1.58,7.12,7.12,0,0,1,3.38,3.73,4.14,4.14,0,0,1,3.87,2,1.69,1.69,0,0,1,.18.9,2.4,2.4,0,0,1-.68,1.44Zm-6.57-8.91a11.36,11.36,0,0,0-4.5,1.17,24.39,24.39,0,0,0-8.73,6.84q-6.57,7.74-6.57,11.34,0,1.89,1.53,1.89a10.55,10.55,0,0,0,4.18-1.62,39.17,39.17,0,0,0,7.7-6.39l2.07-2q1.8-1.71,3.06-3c2.82-2.94,4.23-5,4.23-6.35S685.43,36.9,683.45,36.9Z" />
            <path className="cls-1"
                d="M726.47,55.53a23.48,23.48,0,0,0-1.71,7.65,6.94,6.94,0,0,0,1.26,4.5c.18.24.21.4.09.49a.57.57,0,0,1-.27.14.69.69,0,0,1-.27-.09c-1.92-1.56-2.88-3.89-2.88-7a36.27,36.27,0,0,1,1.89-10.67,52,52,0,0,1-7.29,7.83,13.72,13.72,0,0,1-8.82,3.6,8.76,8.76,0,0,1-5.4-1.93q-2.52-1.94-2.52-6.35a14.4,14.4,0,0,1,.81-4.95c-1.2,1.08-2,1.74-2.3,2s-.55.24-.67,0a1.5,1.5,0,0,1-.18-.68c0-.2.19-.47.58-.8s2.48-2.54,6.26-6.62A23.63,23.63,0,0,1,713,36.9a21.25,21.25,0,0,1,8.73-2.07c2.52,0,4.36.44,5.53,1.3A4,4,0,0,1,729,39.42a144.13,144.13,0,0,1,7-13,65.34,65.34,0,0,1,5.81-8.51,7.28,7.28,0,0,1,5.67-2.52A8.16,8.16,0,0,1,753,17.28q-1.89,1.17-7.38,7.74T734.93,39.1A71.68,71.68,0,0,0,726.47,55.53Zm.72-17q0-1.8-2.25-1.8a9.11,9.11,0,0,0-3.06.72,22.12,22.12,0,0,0-8.37,6.3q-5.13,5.85-5.13,11.16,0,3.15,2.07,3.78a2.41,2.41,0,0,0,.9.18q3.69,0,11-7.38a21,21,0,0,0,3.33-4q.72-2.07,1.89-4.77c-.54.36-1,.4-1.31.13s-.25-.86.23-1.79A5.55,5.55,0,0,0,727.19,38.52Z" />
            <path className="cls-1"
                d="M754.19,72.27q-.45,1-.81,1t-.36-.9q0-5.22,15.84-30.47T790.1,10.26q2.34-7.38,5.31-9.63a3.33,3.33,0,0,1,1.93-.45,13.31,13.31,0,0,1,4.23,1.17c1.95.78,2.93,1.71,2.93,2.79a1.56,1.56,0,0,1-.72,1.26q-4,3.42-6.3,12.87a82.87,82.87,0,0,0-2.25,19.26q0,11.7,2.7,18.27,3.69-9.54,16.87-31.72T829.52,1.89l.81-.09q2.79-.36,2.79.45a4,4,0,0,1-.63,1.44q-9.18,12-19.08,27.9a245.51,245.51,0,0,0-14.58,26.19,10.31,10.31,0,0,0,4.23,4.14,4.63,4.63,0,0,0,2.07.54,3.06,3.06,0,0,0,1.53-.32c.36-.21.6-.26.72-.18a.48.48,0,0,1,.18.41.61.61,0,0,1-.18.45,6.56,6.56,0,0,1-3.78,1.53q-5.4,0-9.18-5.18a36.15,36.15,0,0,1-5.67-12.91,61.91,61.91,0,0,1-1.89-14.67,71.56,71.56,0,0,1,1.71-15.48q-9.63,13-20.07,30.1T754.19,72.27Z" />
            <path className="cls-1"
                d="M828.35,58.14q-6,3.06-10.53,3.06-3.78,0-5.13-2.52A5.7,5.7,0,0,1,812,55.8a16.27,16.27,0,0,1,1.71-7.2,15,15,0,0,1-2.25,1.89q-.9.81-.9-.18c0-.42.52-1.08,1.57-2s2.66-2.41,4.82-4.54,3.87-3.74,5.13-4.82a17.85,17.85,0,0,1,11.61-4.59,10.22,10.22,0,0,1,4.59,1.17q3.42,1.62,3.42,5.94,0,5.22-5.22,10.71a26.89,26.89,0,0,1-5.76,4.68q7.38-1.17,15.66-8.91a1.07,1.07,0,0,1,.81-.31.36.36,0,0,1,.36.4,1,1,0,0,1-.36.72q-9.9,9.36-18.45,9.36Zm8.73-9.45c1.5-2.28,2.25-4.21,2.25-5.81a4,4,0,0,0-2.07-3.64,4.06,4.06,0,0,0-2.7-1,14.59,14.59,0,0,0-10.13,4.32,21.52,21.52,0,0,0-6.16,9.18,10.22,10.22,0,0,0-.63,3.55A2.73,2.73,0,0,0,819,57.92a6.37,6.37,0,0,0,3.11.76,12,12,0,0,0,5-1.71,1.38,1.38,0,0,1-.54-.18,1.62,1.62,0,0,1-1.08-1.44q0-3.15,3.51-6.39a7.71,7.71,0,0,1,5.13-2.25Q836.72,46.71,837.08,48.69Z" />
            <path className="cls-1"
                d="M866.15,45.81q-.9,1.35-2.43,3.42c-1,1.38-2,2.7-2.88,4A5.84,5.84,0,0,0,859.49,56c0,.63.3.94.9.94q1.62,0,4.77-2.88L868,51.3q4.41-4.77,7.74-9.18l3.33-4a4.73,4.73,0,0,1,3.24-1.8,7.23,7.23,0,0,1,4.86,2c-.36.54-1,1.32-1.76,2.34s-1.62,2.06-2.43,3.11-1.74,2.26-2.79,3.64-2,2.67-2.74,3.87-1.58,2.47-2.39,3.83a21.59,21.59,0,0,0-1.75,3.46q-1.35,4,.09,5,.45.45-.18.45a.8.8,0,0,1-.36-.09c-2.29-.78-3.42-2.64-3.42-5.58s1-6.42,2.88-10.44q-9.63,12.42-15.66,12.42-4.59,0-4.59-4.32a12.29,12.29,0,0,1,.63-3.6q1.35-4,9.18-12.78a3.38,3.38,0,0,0,1-2q0-.81-1.08-.81a6.56,6.56,0,0,0-3.24,1.62,77.57,77.57,0,0,0-6,5.26C850,46,848.4,47.49,847.83,48s-.85.36-.85-.36c0-.36.57-1,1.71-1.94a55.41,55.41,0,0,0,4.68-4.5,45.15,45.15,0,0,1,5.17-4.76,8.15,8.15,0,0,1,5.09-1.67q3.24,0,4.41,2.43a5.24,5.24,0,0,1,.45,2.34,8.53,8.53,0,0,1-.72,3.2A19.09,19.09,0,0,1,866.15,45.81Z" />
            <path className="cls-1"
                d="M882.08,54.72a.37.37,0,0,1-.09-.27c0-.12.1-.18.31-.18a.41.41,0,0,1,.41.36,5.48,5.48,0,0,0,5.31,3.6c3.06,0,5.72-1.5,8-4.5a52.79,52.79,0,0,0,4.45-7c1.29-2.42,2.37-4.36,3.24-5.8a26.12,26.12,0,0,1,4-4.86,12.43,12.43,0,0,1,5-3.33,4.33,4.33,0,0,0-1.8-.27c-.85,0-2.42.62-4.73,1.84A41.7,41.7,0,0,0,899.36,39q-3.43,2.85-7.38,6.44c-2.65,2.4-4.23,3.81-4.77,4.23s-.87.42-1,0a1.09,1.09,0,0,1,.45-1.17q2.34-2,6.75-6.17c2.93-2.79,5.17-4.82,6.7-6.12a25.25,25.25,0,0,1,5.18-3.33,11.41,11.41,0,0,1,4.32-1.39c2.39,0,3.87.42,4.41,1.26-1.57.66-2.84,2.4-3.83,5.22s-2.1,6.09-3.33,9.81a25,25,0,0,1-4.63,8.73,42.41,42.41,0,0,0,7.24-4.19,53.87,53.87,0,0,0,8.69-7.15q.81-.72,1.17-.18v.41a9.56,9.56,0,0,1-1.71,1.93c-1.15,1.14-2.54,2.42-4.19,3.83s-3.71,3-6.16,4.72q-7.65,5.4-15.35,5.4T882.08,54.72Z" />
            <path className="cls-1"
                d="M939.67,37.71q0-1.17-1.71-1.17-3.06,0-7.47,4.32-1.08,1.08-3.91,4.5A67.44,67.44,0,0,0,921,53.19l-2.25,5,.27-.9a5.58,5.58,0,0,0-.36,1.08q-.45,1.08-2.61,1.8a2.21,2.21,0,0,1-.81.18c-.59,0-.66-.45-.18-1.35.24-.6,1.08-2.74,2.52-6.44s2.61-6.64,3.51-8.86a56.7,56.7,0,0,1-6.57,6.3q-.88.72-1.26.18a.58.58,0,0,1-.09-.36q0-.27.81-1A64.92,64.92,0,0,0,922.66,40a114.11,114.11,0,0,1,8.6-15.25A90.73,90.73,0,0,1,944.08,8.55a22.67,22.67,0,0,1,9.54-5.94A14.93,14.93,0,0,1,958,1.89,7,7,0,0,1,961.77,3c1.17.76,1.75,2.15,1.75,4.19a14.94,14.94,0,0,1-2.7,8.19q-2.7,4.14-9.54,9.23a64.53,64.53,0,0,1-12.69,7.6c-.72.3-1.14.26-1.26-.14s.18-.73.9-1A60.15,60.15,0,0,0,950,23.67q6.53-5,8.73-8.59t2.2-5.77c0-1.46-.63-2.2-1.89-2.2q-2.16,0-6.84,3.6a89.8,89.8,0,0,0-14.53,15.57,154.59,154.59,0,0,0-13.1,20.16,67.57,67.57,0,0,1,4.59-5.94q5-5.67,9.81-5.67,4.5,0,5.31,4a9.9,9.9,0,0,1,.09,1.53,9.84,9.84,0,0,1-.67,2.93,48.33,48.33,0,0,1-3.78,7.1c-2.07,3.46-3.11,5.54-3.11,6.26s.24,1.08.72,1.08a6.52,6.52,0,0,0,3-1.26,97.29,97.29,0,0,0,13.14-10.62c.72-.72,1.07-.84,1-.36a2.27,2.27,0,0,1-.59,1.35A79.5,79.5,0,0,1,940.3,58.23a11.38,11.38,0,0,1-6,2.16,4.89,4.89,0,0,1-1.35-.18c-2.34-.48-3.51-1.78-3.51-3.92a13.7,13.7,0,0,1,2.52-7.15q.45-.63,3.33-4.23Q939.67,39.51,939.67,37.71Z" />
            <path className="cls-1"
                d="M984,45.81c-.66.78-1.33,1.62-2,2.52s-1.56,2.13-2.61,3.69a7.59,7.59,0,0,0-1.58,4c0,1.08.47,1.62,1.4,1.62a11.48,11.48,0,0,0,4.54-1.71,76.63,76.63,0,0,0,14-10.8q.9-.9,1.17-.27v.36a1,1,0,0,1-.36.63Q983.05,60.39,976,60.39A4.73,4.73,0,0,1,972.57,59a4.51,4.51,0,0,1-1.4-3.29A17,17,0,0,1,972.79,50a32.6,32.6,0,0,1-8.68,7.79q-4.64,2.74-7.25,2.74a6.66,6.66,0,0,1-4.45-1.57A5,5,0,0,1,950.56,55q0-6.66,5.94-13.05a24.7,24.7,0,0,1,11.16-6.75,18.33,18.33,0,0,1,5.81-1A10.63,10.63,0,0,1,979,35.78a7.09,7.09,0,0,1,3.37,3.73,4.14,4.14,0,0,1,3.87,2,1.69,1.69,0,0,1,.18.9,2.38,2.38,0,0,1-.67,1.44Zm-6.57-8.91a11.36,11.36,0,0,0-4.5,1.17,24.39,24.39,0,0,0-8.73,6.84q-6.57,7.74-6.57,11.34,0,1.89,1.53,1.89a10.58,10.58,0,0,0,4.19-1.62,39.17,39.17,0,0,0,7.69-6.39l2.07-2q1.8-1.71,3.06-3c2.82-2.94,4.23-5,4.23-6.35S979.45,36.9,977.47,36.9Z" />
            <path className="cls-1"
                d="M1020.49,55.53a23.48,23.48,0,0,0-1.71,7.65,6.94,6.94,0,0,0,1.26,4.5c.18.24.21.4.09.49a.57.57,0,0,1-.27.14.69.69,0,0,1-.27-.09c-1.92-1.56-2.88-3.89-2.88-7a36.27,36.27,0,0,1,1.89-10.67,52,52,0,0,1-7.29,7.83,13.72,13.72,0,0,1-8.82,3.6,8.76,8.76,0,0,1-5.4-1.93q-2.52-1.94-2.52-6.35a14.4,14.4,0,0,1,.81-4.95c-1.2,1.08-2,1.74-2.29,2s-.56.24-.68,0a1.5,1.5,0,0,1-.18-.68c0-.2.2-.47.59-.8s2.47-2.54,6.25-6.62A23.63,23.63,0,0,1,1007,36.9a21.25,21.25,0,0,1,8.73-2.07c2.52,0,4.37.44,5.54,1.3a4,4,0,0,1,1.75,3.29,144.18,144.18,0,0,1,7-13,65.54,65.54,0,0,1,5.8-8.51,7.28,7.28,0,0,1,5.67-2.52,8.16,8.16,0,0,1,5.58,1.89q-1.89,1.17-7.38,7.74T1029,39.1A71.68,71.68,0,0,0,1020.49,55.53Zm.72-17q0-1.8-2.25-1.8a9.11,9.11,0,0,0-3.06.72,22.12,22.12,0,0,0-8.37,6.3q-5.13,5.85-5.13,11.16,0,3.15,2.07,3.78a2.41,2.41,0,0,0,.9.18q3.69,0,11-7.38a21,21,0,0,0,3.33-4q.72-2.07,1.89-4.77c-.54.36-1,.4-1.3.13s-.26-.86.22-1.79A5.55,5.55,0,0,0,1021.21,38.52Z" />
            <path className="cls-1"
                d="M1036.78,60.3a2.91,2.91,0,0,1-1.93-.72,2,2,0,0,1-.86-1.53,6,6,0,0,1,1.53-4.32,6.27,6.27,0,0,1,4.5-2.25,2.67,2.67,0,0,1,2.7,3.1,5.7,5.7,0,0,1-1.84,3.74A5.52,5.52,0,0,1,1036.78,60.3Z" />
        </g>
    </g>
</svg>
      </div>
    )
}

export default PreLoader;
