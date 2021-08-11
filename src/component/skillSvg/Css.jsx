import { motion } from 'framer-motion';
import React from 'react';

const Css = ({icon}) => {
    return (
        <div className="svgElement">
        <motion.svg
           height="1693pt" viewBox="-0.1 0 1199.3 1692.8" width="1600" xmlns="http://www.w3.org/2000/svg"
        >
            <motion.path 
            variants={icon}
            initial="hidden"
            animate="visible"
            transition={{
              default: { duration: 7, ease: "easeInOut" },
              fill: { duration: 4, ease: [1, 0, 0.8, 1] },
            }}
            d="M282 114v114h182v-76H358V76h106V0H282zM500.2 74.2l.3 74.3 52.8.3 52.7.2v13H500v69h182V79H576V66h106V0H500zM719 74.5V149h105v13H719v69h181V79H795V66h105V0H719zM.4 336.2C.7 338 25.3 613.3 55.1 948s54.2 608.6 54.3 608.7 110.2 30.8 244.8 68.1l244.7 68 245.3-68c134.9-37.4 245.4-68.1 245.4-68.2.1 0 24.5-273.7 54.3-608.1s54.4-609.7 54.7-611.8l.6-3.7H-.1zm974.6 249c0 2.2-7.1 82.1-48.9 550.2-10.4 116.5-19.3 212.2-19.8 212.6-1.1 1-304.7 85-307.1 85-1.9 0-307-84.4-307.7-85.2-.2-.2-4.9-51.4-10.4-113.8-5.6-62.4-10.3-115.4-10.7-117.8l-.5-4.2h75.5c41.6 0 75.6.1 75.7.2 0 .2 2.4 27 5.4 59.6 2.9 32.7 5.5 59.5 5.7 59.7s37.7 10.5 83.5 22.8l83.1 22.5 83.3-22.5c45.9-12.4 83.6-22.7 83.8-22.8.4-.5 17-185.7 17.1-190.8v-3.7H263v-2.5c0-1.4-2.9-35.1-6.5-74.8s-6.5-72.3-6.5-72.5c0-.1 123.1-.2 273.5-.2H797v-2.5c0-1.3 2.9-35.3 6.5-75.3 3.6-40.1 6.5-73.7 6.5-74.6 0-1.5-22.1-1.6-286.7-1.8l-286.8-.3-6.1-68c-3.4-37.4-6.5-71-6.9-74.8l-.6-6.7H975z"/>
        </motion.svg>
      </div>
    )
}

export default Css
