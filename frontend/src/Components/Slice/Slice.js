import React from "react";
import PropTypes from "prop-types";
import "./style.css"; // You can include the common styles here

const Slice = ({ className, sliceNumber }) => {
  return (
    <svg
      className={`slice-${sliceNumber} ${className}`}
      fill="none"
      height="322"
      viewBox="0 0 320 322"
      width="320"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d={`M${sliceNumber === 1 ? 253.877 : 66.1234} 290.443L160.169 321V1L${
          sliceNumber === 1 ? 253.877 : 66.1234
        } 31.5573L${sliceNumber === 1 ? 312 : 8} 111.557V210.443L${
          sliceNumber === 1 ? 253.877 : 66.1234
        } 290.443Z`}
        fill={`url(#paint0_linear_16_69${sliceNumber})`}
        opacity="0.4"
      />
      <path
        className="path"
        d={`M160.169 1L${sliceNumber === 1 ? 253.877 : 66.1234} 31.5573L${
          sliceNumber === 1 ? 312 : 8
        } 111.557V210.443L${sliceNumber === 1 ? 253.877 : 66.1234} 290.443L160.169 321`}
        stroke={`url(#paint1_linear_16_69${sliceNumber})`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="1"
        strokeWidth="2"
      />
      <defs className="defs">
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id={`paint0_linear_16_69${sliceNumber}`}
          x1="160.001"
          x2="160"
          y1="1.00066"
          y2="321"
        >
          <stop className="stop" stopColor="white" />
          <stop className="stop" offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          className="linear-gradient"
          gradientUnits="userSpaceOnUse"
          id={`paint1_linear_16_69${sliceNumber}`}
          x1="160.001"
          x2="160"
          y1="1.00066"
          y2="321"
        >
          <stop className="stop" stopColor="white" />
          <stop className="stop" offset="1" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

Slice.propTypes = {
  className: PropTypes.string,
  sliceNumber: PropTypes.oneOf([1, 2]).isRequired,
};

export default Slice;
