import { motion } from "framer-motion";
import React from "react";

const Python = ({ icon }) => {
  return (
    <div className="svgElement">
      <motion.svg
        width="2270"
        height="2500"
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMinYMin meet"
      >
        <motion.path
          variants={icon}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 7, ease: "easeInOut" },
            fill: { duration: 4, ease: [1, 0, 0.8, 1] },
          }}
          d="M128.02 0c-35.19 0-32.96 15.25-32.96 15.25l.03 15.77h33.6v4.71H80.02S44.8 32.88 44.8 80.02c0 47.14 31.06 45.41 31.06 45.41l18.49.01v-26.04s-.23-31.06 30.34-31.06h47.1c30.56 0 30.56 26.25 30.56 26.25v37.8c0 30.56-25.06 29.57-25.06 29.57H102.13s-35.19-1.24-35.19 33.95v46.1s-2.19 33.96 32.96 33.96c35.15 0 32.96-15.25 32.96-15.25l-.03-15.77h-33.6v-4.71h48.67s35.22 2.85 35.22-44.29c0-47.14-31.06-45.41-31.06-45.41l-18.49-.01v26.04s.23 31.06-30.34 31.06H55.23c-30.56 0-30.56-26.25-30.56-26.25v-37.8c0-30.56 25.06-29.57 25.06-29.57h75.1c35.19 1.24 35.19-33.95 35.19-33.95v-46.1S163.17 0 128.02 0zM92.11 15.11a7.48 7.48 0 0 1 7.48 7.48 7.48 7.48 0 1 1-14.96 0 7.48 7.48 0 0 1 7.48-7.48zM163.93 233.41a7.48 7.48 0 0 1 7.48 7.48 7.48 7.48 0 1 1-14.96 0 7.48 7.48 0 0 1 7.48-7.48z"
        />
      </motion.svg>
    </div>
  );
};

export default Python;