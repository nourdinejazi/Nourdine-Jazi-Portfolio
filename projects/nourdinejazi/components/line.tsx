"use client"

import { useEffect } from "react";

import * as React from "react";
const Line = (props : any) => {

    useEffect(() => {
        let path = document.querySelector('.path') as SVGPathElement | null;

        let length = path!.getTotalLength();
        path!.style.strokeDasharray=length + ' ' + length;

        path!.style.strokeDashoffset=String(length)



        window.addEventListener('scroll',()=>{

            let scrollPercentage=(document.documentElement.scrollTop+document.body.scrollTop) /(document.documentElement.scrollHeight-document.documentElement.clientHeight)
            var drawLength = length*scrollPercentage


            path!.style.strokeDashoffset= String(length-drawLength)

        } ); 

      }, []);

    return (
      <svg
      width={957}
      className="z-0  absolute  top-[1100px] left-32   w-[70%]"
      height={3047}
      viewBox="0 0 957 3047"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M940 0V527.3C940 536.024 934.344 543.742 926.025 546.371L33.975 828.189C25.6556 830.818 20 838.535 20 847.26V1068.81C20 1077.75 25.9303 1085.6 34.5271 1088.04L925.473 1341.52C934.07 1343.97 940 1351.82 940 1360.76V1779.11C940 1787.79 934.4 1795.48 926.138 1798.14L33.8619 2085.87C25.6 2088.54 20 2096.23 20 2104.91L20.0003 3047"
        stroke="#969595"
        className="path"
        strokeOpacity={0.3}
        strokeWidth={5}
      />
      <path
        d="M940 0V527.3C940 536.024 934.344 543.742 926.025 546.371L33.975 828.189C25.6556 830.818 20 838.535 20 847.26V1068.81C20 1077.75 25.9303 1085.6 34.5271 1088.04L925.473 1341.52C934.07 1343.97 940 1351.82 940 1360.76V1779.11C940 1787.79 934.4 1795.48 926.138 1798.14L33.8619 2085.87C25.6 2088.54 20 2096.23 20 2104.91L20.0003 3047"
        stroke="#969595"
        strokeOpacity={0.1}
        strokeWidth={5}
      />
      <path
        d="M922 0V513.872C922 522.583 916.362 530.293 908.06 532.932L15.9402 816.568C7.63847 819.207 2 826.917 2 835.628V1087.31C2 1096.29 7.98148 1104.17 16.6288 1106.58L907.371 1354.92C916.019 1357.33 922 1365.21 922 1374.19V1758.94C922 1767.62 916.403 1775.31 908.144 1777.97L15.856 2066.03C7.59718 2068.69 2.00029 2076.38 2.00029 2085.06V3045.5"
        stroke="#969595"
        strokeOpacity={0.3}
        strokeWidth={3}
      />
      <path
        d="M955 1.5V542.872C955 551.583 949.361 559.293 941.059 561.932L48.9402 845.568C40.6385 848.207 35 855.917 35 864.628V1052.86C35 1061.82 40.9522 1069.68 49.5705 1072.11L940.429 1323.39C949.047 1325.82 955 1333.68 955 1342.64V1797.49C955 1806.15 949.434 1813.82 941.208 1816.5L60.7918 2104C52.5655 2106.68 47 2114.35 47 2123.01V3045"
        stroke="#969595"
        strokeOpacity={0.3}
        strokeWidth={3}
      />
    </svg>
      )
}

export default Line;

