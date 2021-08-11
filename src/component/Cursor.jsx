import React, { useRef, useState, useEffect } from 'react';


const Cursor = () => {


    const cursorRef = useRef();
    const [cursorPosition, setCursorPosition] = useState({ x: null, y: null, target: null });



    function updateCursorPostion(e) {
        setCursorPosition({ x: e.clientX, y: e.clientY, target: e.target });

    }

    // tracking cursor positions
    useEffect(() => {

        if (window.matchMedia('(min-width : 768px )').matches) {
            // setting on mouse move event according to viewport
            window.addEventListener('mousemove', updateCursorPostion);

            const cursorElement = cursorRef.current;

            if (cursorPosition.target != null) {

                // if( arrayHover.includes(cursorPosition.target.localName) ){
                //   cursorElement.classList.add('scale');

                //   cursorElement.innerHTML = cursorPosition.target.text;
                // }else{
                //     cursorElement.classList.remove('scale'); 
                //     cursorElement.innerHTML = '';
                // }

                // console.log();

                switch (cursorPosition.target.localName) {

                    case 'a':

                        if (cursorPosition.target.getAttribute('data-project')) {

                            // cursorElement.classList.add('blend-mode-img');

                        } else {
                            cursorElement.classList.add('scale');
                            cursorElement.innerHTML = cursorPosition.target.text;
                        }

                        break;

                    case 'img':
                        cursorElement.classList.add('blend-mode-img');
                        break;

                    case 'h1':
                        cursorElement.classList.add('blend-mode-img');
                        break;

                    case 'svg':
                        cursorElement.classList.add('blend-mode-img');
                        break;
                    case 'path':
                        cursorElement.classList.add('blend-mode-img');
                        break;

                    default:
                        cursorElement.classList.remove('scale');
                        cursorElement.classList.remove('blend-mode-img');
                        cursorElement.innerHTML = '';
                        break;
                }

            }

            cursorElement.style.cssText = `
            top:${cursorPosition.y}px; 
            left:${cursorPosition.x}px;
            border-radius:50%;
            transform:translate(-50%,-50%);
            z-index:99;
            pointer-events:none;`

        }



        // const arrayHover = ['a','h2','h1'];
        // const imgTextHover = 'h1'||'img'||'h2'






        return () => {
            window.removeEventListener('mousemove', updateCursorPostion);
        }
    }, [cursorPosition]);



    return (
        <div className="cursor position-fixed" ref={cursorRef} >

        </div>
    )
}

export default Cursor
