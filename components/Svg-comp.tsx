"use client"

import * as React from "react";
import { useState , useEffect } from "react";

const SVGComponent = () => {
    
    const [rotate, setrotate] = useState(46.4092);
    const [scrollY, setScrollY] = useState(0);
  
    useEffect(() => {
        function handleScroll() {
            const newScrollY = window.scrollY;
            const scrollDirection = newScrollY > scrollY ? 'down' : 'up';
      
            // Increment or decrement rotate based on scroll direction
            if (scrollDirection === 'down') {
              setrotate((prevrotate) =>Math.max(prevrotate - .5 , 30.4092));
            } else if (scrollDirection === 'up') {
              setrotate((prevrotate) => Math.min(prevrotate + .5, 46.4092));
            }
      
            setScrollY(newScrollY);
          }
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, [scrollY]);


    return(
  <div className="w-full  z-10 sm:hidden flex  items-center justify-center   overflow-hidden ">
  <svg
    width={1728}
    height={994}
    viewBox="0 0 1728 994"

    fill="none"
    className=" origin-bottom w-[70%]   sm:w-full  "
    opacity="0.6"
    style={{
        // ${rotate}
      transform:
        `perspective(1200px) translateY(-79.876px) scale(1.22029) rotateX(50.4092deg)`,
    }}

  >
    <g clipPath="url(#clip0_252_174)">
      <g opacity={0.4}>
        <path
          d="M1585.72 1050V610.545C1585.72 604.778 1583.43 599.248 1579.35 595.17L1488.8 504.625C1484.73 500.547 1482.44 495.017 1482.44 489.25V297.128C1482.44 285.12 1472.7 275.385 1460.69 275.385H1343.82C1331.81 275.385 1322.08 265.65 1322.08 253.641V140.34C1322.08 134.573 1324.37 129.043 1328.45 124.965L1585.72 -132.308"
          stroke="url(#paint0_radial_252_174)"
          strokeWidth={2}
        />
        <path
          id="track12"
          d="M1944.49 128.616H795.648C789.881 128.616 784.35 130.906 780.273 134.984L685.651 229.606C681.573 233.684 676.042 235.975 670.276 235.975H540.16C534.394 235.975 528.863 238.265 524.785 242.343L425.407 341.721C421.329 345.799 415.799 348.09 410.032 348.09H197.699C191.932 348.09 186.401 350.381 182.324 354.458L-113 649.782"
          stroke="url(#paint1_linear_252_174)"
          strokeWidth={2}
        />
        <path
          id="track11"
          d="M1178.03 1025.54V863.314C1178.03 857.548 1175.73 852.017 1171.66 847.939L1130.03 806.317C1125.96 802.24 1120.43 799.949 1114.66 799.949H1048.42C1042.65 799.949 1037.12 797.658 1033.04 793.58L968.317 728.856C964.239 724.778 961.948 719.248 961.948 713.481V498.257"
          stroke="url(#paint2_linear_252_174)"
          strokeWidth={2}
        />
        <path
          id="track10"
          d="M1822.18 498.256H800.231C788.222 498.256 778.487 507.991 778.487 520V853.455C778.487 859.222 776.197 864.752 772.119 868.83L715.548 925.401C711.471 929.478 705.94 931.769 700.173 931.769H436.026C424.017 931.769 414.282 941.504 414.282 953.513V1009.23C414.282 1021.24 424.017 1030.97 436.026 1030.97H550.18C562.188 1030.97 571.923 1040.71 571.923 1052.72V1156"
          stroke="url(#paint3_linear_252_174)"
          strokeWidth={2}
        />
        <path
          id="track9"
          d="M1221.51 -162.205V308C1221.51 320.009 1211.78 329.744 1199.77 329.744H1023.1C1011.09 329.744 1001.36 320.009 1001.36 308V297.128C1001.36 285.12 991.624 275.385 979.615 275.385H762.179C750.171 275.385 740.436 285.12 740.436 297.128V308C740.436 320.009 730.701 329.744 718.692 329.744H675.205C663.196 329.744 653.461 320.009 653.461 308V-222"
          stroke="url(#paint4_linear_252_174)"
          strokeWidth={2}
        />
        <path
          id="track8"
          d="M1406.33 1030.97V689.365C1406.33 683.598 1404.04 678.068 1399.96 673.99L1135.47 409.497C1131.39 405.419 1125.86 403.128 1120.1 403.128H548.314C542.547 403.128 537.017 405.419 532.939 409.497L453.266 489.17C449.188 493.247 443.657 495.538 437.891 495.538H243.051C231.042 495.538 221.307 505.273 221.307 517.282V1030.97"
          stroke="url(#paint5_linear_252_174)"
          strokeWidth={2}
        />
        <path
          id="track7"
          d="M830.128 -156.769L967.811 -19.0866C971.889 -15.0089 974.18 -9.47832 974.18 -3.71156V358.788C974.18 364.555 971.889 370.086 967.811 374.163L740.01 601.965C735.932 606.042 730.401 608.333 724.635 608.333H602.673C596.907 608.333 591.376 610.624 587.298 614.702L561.305 640.695C557.227 644.773 554.936 650.304 554.936 656.07V728.429C554.936 734.196 552.645 739.727 548.568 743.804L462.779 829.593C458.701 833.671 453.171 835.961 447.404 835.961H221.308"
          stroke="url(#paint6_linear_252_174)"
          strokeWidth={2}
        />
        <path
          id="track6"
          d="M1339.05 858.872H461.153C449.145 858.872 439.41 849.137 439.41 837.128V291.673C439.41 285.907 437.119 280.376 433.041 276.298L342.496 185.753C338.419 181.676 336.128 176.145 336.128 170.378V-73.3843"
          stroke="url(#paint7_linear_252_174)"
          strokeWidth={2}
        />
        <path
          d="M1979.82 1011.95V806.237C1979.82 800.471 1977.53 794.94 1973.45 790.862L1915.52 732.933C1911.44 728.855 1905.91 726.564 1900.15 726.564H1748.79C1736.79 726.564 1727.05 716.829 1727.05 704.821V153.929C1727.05 148.163 1724.76 142.632 1720.68 138.554L1623.34 41.2146C1619.26 37.1369 1613.73 34.8461 1607.97 34.8461H406.128"
          stroke="url(#paint8_linear_252_174)"
          strokeWidth={2}
        />
      </g>
      <path
        id="track5"
        d="M404 37V360.373C404 364.616 405.686 368.686 408.686 371.686L475.314 438.314C478.314 441.314 480 445.384 480 449.627V591C480 599.837 487.163 607 496 607H582C590.837 607 598 614.163 598 623V706.373C598 710.616 596.314 714.686 593.314 717.686L404 907"
        stroke="url(#paint9_radial_252_174)"
        strokeWidth={3}
      />
      <path
        id="track4"
        d="M140 715H985.373C989.616 715 993.686 713.314 996.686 710.314L1066.31 640.686C1069.31 637.686 1073.38 636 1077.63 636H1173.37C1177.62 636 1181.69 634.314 1184.69 631.314L1257.81 558.186C1260.81 555.186 1264.88 553.5 1269.13 553.5H1425.37C1429.62 553.5 1433.69 551.814 1436.69 548.814L1654 331.5"
        stroke="url(#paint10_linear_252_174)"
        strokeWidth={3}
      />
      <path
        d="M704 55V174.373C704 178.616 705.686 182.686 708.686 185.686L739.314 216.314C742.314 219.314 746.384 221 750.627 221H799.373C803.616 221 807.686 222.686 810.686 225.686L858.314 273.314C861.314 276.314 863 280.384 863 284.627V443"
        stroke="url(#paint11_linear_252_174)"
        strokeWidth={3}
      />
      <path
        id="track1"
        d="M230 443H982C990.837 443 998 435.837 998 427V181.627C998 177.384 999.686 173.314 1002.69 170.314L1044.31 128.686C1047.31 125.686 1051.38 124 1055.63 124H1250C1258.84 124 1266 116.837 1266 108V67C1266 58.1634 1258.84 51 1250 51H1166C1157.16 51 1150 43.8366 1150 35V-41"
        stroke="url(#paint12_linear_252_174)"
        strokeWidth={3}
      />
      <path
        id="track3"
        d="M672 929V583C672 574.163 679.163 567 688 567H818C826.837 567 834 574.163 834 583V591C834 599.837 841.163 607 850 607H1010C1018.84 607 1026 599.837 1026 591V583C1026 574.163 1033.16 567 1042 567H1074C1082.84 567 1090 574.163 1090 583V973"
        stroke="url(#paint13_linear_252_174)"
        strokeWidth={3}
      />
      <path
        id="track2"
        d="M536 51V302.373C536 306.616 537.686 310.686 540.686 313.686L735.314 508.314C738.314 511.314 742.384 513 746.627 513H1167.37C1171.62 513 1175.69 511.314 1178.69 508.314L1237.31 449.686C1240.31 446.686 1244.38 445 1248.63 445H1392C1400.84 445 1408 437.837 1408 429V51"
        stroke="url(#paint13_linear_252_174)"
        strokeWidth={3}
      />
      <g transform="translate(855, 196)">
        <path
          d="M7 750L5.5 630.5C6 619 5.5 571 5.5 568L1 351.627C1 347.384 2.68597 343.314 5.68597 340.314L173.31 172.686C176.31 169.686 180.38 168 184.63 168H274.37C278.62 168 282.69 166.314 285.69 163.314L304.81 144.186C307.81 141.186 309.5 137.116 309.5 132.873V79.627C309.5 75.384 311.19 71.314 314.19 68.314L377.31 5.186C380.31 2.186 384.38 0.5 388.63 0.5H555"
          stroke="url(#paint15_linear_252_174)"
          strokeWidth={3}
        />
      </g>
      <path
        d="M534 185H1180C1188.84 185 1196 192.163 1196 201V602.373C1196 606.616 1197.69 610.686 1200.69 613.686L1267.31 680.314C1270.31 683.314 1272 687.384 1272 691.627V871"
        stroke="url(#paint16_linear_252_174)"
        strokeWidth={3}
      />
      <path
        d="M114 65V216.373C114 220.616 115.686 224.686 118.686 227.686L161.314 270.314C164.314 273.314 168.384 275 172.627 275H284C292.837 275 300 282.163 300 291V696.373C300 700.616 301.686 704.686 304.686 707.686L376.314 779.314C379.314 782.314 383.384 784 387.627 784H1272"
        stroke="url(#paint17_linear_252_174)"
        strokeWidth={3}
      />
      <path d="M1728 0H0V994H1728V0Z" fill="url(#paint18_radial_252_174)" />
      <g opacity={0} mask="url(#fadeMask)">
        <path
          id="track1-animated"
          d="M230 443H982C990.837 443 998 435.837 998 427V181.627C998 177.384 999.686 173.314 1002.69 170.314L1044.31 128.686C1047.31 125.686 1051.38 124 1055.63 124H1250C1258.84 124 1266 116.837 1266 108V67C1266 58.1634 1258.84 51 1250 51H1166C1157.16 51 1150 43.8366 1150 35V-41"
          strokeWidth={5}
          stroke="#E77123"
          strokeLinecap="round"
          strokeDasharray="84.113 1493.184"
          strokeDashoffset={1577.296630859375}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="10s"
            repeatCount="indefinite"
            from={0}
            to={1577.296630859375}
          />
        </path>
        <path
          id="track2-animated"
          d="M536 51V302.373C536 306.616 537.686 310.686 540.686 313.686L735.314 508.314C738.314 511.314 742.384 513 746.627 513H1167.37C1171.62 513 1175.69 511.314 1178.69 508.314L1237.31 449.686C1240.31 446.686 1244.38 445 1248.63 445H1392C1400.84 445 1408 437.837 1408 429V51"
          strokeWidth={5}
          stroke="#CAAF0F"
          strokeLinecap="round"
          strokeDasharray="110.217 4770.938"
          strokeDashoffset={4881.1556396484375}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="15s"
            repeatCount="indefinite"
            from={0}
            to={4881.1556396484375}
          />
        </path>
        <path
          id="track3-animated"
          d="M672 929V583C672 574.163 679.163 567 688 567H818C826.837 567 834 574.163 834 583V591C834 599.837 841.163 607 850 607H1010C1018.84 607 1026 599.837 1026 591V583C1026 574.163 1033.16 567 1042 567H1074C1082.84 567 1090 574.163 1090 583V973"
          strokeWidth={5}
          stroke="#107A6A"
          strokeLinecap="round"
          strokeDasharray="105.926 2343.717"
          strokeDashoffset={2449.64306640625}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="10s"
            repeatCount="indefinite"
            from={0}
            to={2449.64306640625}
          />
        </path>
        <path
          id="track4-animated"
          d="M140 715H985.373C989.616 715 993.686 713.314 996.686 710.314L1066.31 640.686C1069.31 637.686 1073.38 636 1077.63 636H1173.37C1177.62 636 1181.69 634.314 1184.69 631.314L1257.81 558.186C1260.81 555.186 1264.88 553.5 1269.13 553.5H1425.37C1429.62 553.5 1433.69 551.814 1436.69 548.814L1654 331.5"
          strokeWidth={5}
          stroke="#3C42E2"
          strokeLinecap="round"
          strokeDasharray="67.001 1602.412"
          strokeDashoffset={1669.412841796875}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="10s"
            repeatCount="indefinite"
            from={1669.412841796875}
            to={0}
          />
        </path>
        <path
          id="track5-animated"
          d="M404 37V360.373C404 364.616 405.686 368.686 408.686 371.686L475.314 438.314C478.314 441.314 480 445.384 480 449.627V591C480 599.837 487.163 607 496 607H582C590.837 607 598 614.163 598 623V706.373C598 710.616 596.314 714.686 593.314 717.686L404 907"
          strokeWidth={5}
          stroke="#107A6A"
          strokeLinecap="round"
          strokeDasharray="92.585 3159.552"
          strokeDashoffset={3252.1373291015625}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="15s"
            repeatCount="indefinite"
            from={3252.1373291015625}
            to={0}
          />
        </path>
        <path
          id="track6-animated"
          d="M1339.05 858.872H461.153C449.145 858.872 439.41 849.137 439.41 837.128V291.673C439.41 285.907 437.119 280.376 433.041 276.298L342.496 185.753C338.419 181.676 336.128 176.145 336.128 170.378V-73.3843"
          strokeWidth={5}
          stroke="#E77123"
          strokeLinecap="round"
          strokeDasharray="40.973 5549.462"
          strokeDashoffset={5590.435546875}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="15s"
            repeatCount="indefinite"
            from={0}
            to={5590.435546875}
          />
        </path>
        <path
          id="track7-animated"
          d="M830.128 -156.769L967.811 -19.0866C971.889 -15.0089 974.18 -9.47832 974.18 -3.71156V358.788C974.18 364.555 971.889 370.086 967.811 374.163L740.01 601.965C735.932 606.042 730.401 608.333 724.635 608.333H602.673C596.907 608.333 591.376 610.624 587.298 614.702L561.305 640.695C557.227 644.773 554.936 650.304 554.936 656.07V728.429C554.936 734.196 552.645 739.727 548.568 743.804L462.779 829.593C458.701 833.671 453.171 835.961 447.404 835.961H221.308"
          strokeWidth={5}
          stroke="#107A6A"
          strokeLinecap="round"
          strokeDasharray="58.263 3096.568"
          strokeDashoffset={3154.83056640625}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="10s"
            repeatCount="indefinite"
            from={3154.83056640625}
            to={0}
          />
        </path>
        <path
          id="track8-animated"
          d="M1406.33 1030.97V689.365C1406.33 683.598 1404.04 678.068 1399.96 673.99L1135.47 409.497C1131.39 405.419 1125.86 403.128 1120.1 403.128H548.314C542.547 403.128 537.017 405.419 532.939 409.497L453.266 489.17C449.188 493.247 443.657 495.538 437.891 495.538H243.051C231.042 495.538 221.307 505.273 221.307 517.282V1030.97"
          strokeWidth={5}
          stroke="#E77123"
          strokeLinecap="round"
          strokeDasharray="146.835 6486.486"
          strokeDashoffset={6633.32080078125}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="15s"
            repeatCount="indefinite"
            from={0}
            to={6633.32080078125}
          />
        </path>
        <path
          id="track9-animated"
          d="M1221.51 -162.205V308C1221.51 320.009 1211.78 329.744 1199.77 329.744H1023.1C1011.09 329.744 1001.36 320.009 1001.36 308V297.128C1001.36 285.12 991.624 275.385 979.615 275.385H762.179C750.171 275.385 740.436 285.12 740.436 297.128V308C740.436 320.009 730.701 329.744 718.692 329.744H675.205C663.196 329.744 653.461 320.009 653.461 308V-222"
          strokeWidth={5}
          stroke="#107A6A"
          strokeLinecap="round"
          strokeDasharray="125.809 3203.187"
          strokeDashoffset={3328.99560546875}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="10s"
            repeatCount="indefinite"
            from={0}
            to={3328.99560546875}
          />
        </path>
        <path
          id="track10-animated"
          d="M1822.18 498.256H800.231C788.222 498.256 778.487 507.991 778.487 520V853.455C778.487 859.222 776.197 864.752 772.119 868.83L715.548 925.401C711.471 929.478 705.94 931.769 700.173 931.769H436.026C424.017 931.769 414.282 941.504 414.282 953.513V1009.23C414.282 1021.24 424.017 1030.97 436.026 1030.97H550.18C562.188 1030.97 571.923 1040.71 571.923 1052.72V1156"
          strokeWidth={5}
          stroke="#CAAF0F"
          strokeLinecap="round"
          strokeDasharray="67.293 2076.21"
          strokeDashoffset={2143.502685546875}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="10s"
            repeatCount="indefinite"
            from={2143.502685546875}
            to={0}
          />
        </path>
        <path
          id="track11-animated"
          d="M1178.03 1025.54V863.314C1178.03 857.548 1175.73 852.017 1171.66 847.939L1130.03 806.317C1125.96 802.24 1120.43 799.949 1114.66 799.949H1048.42C1042.65 799.949 1037.12 797.658 1033.04 793.58L968.317 728.856C964.239 724.778 961.948 719.248 961.948 713.481V498.257"
          strokeWidth={5}
          stroke="#107A6A"
          strokeLinecap="round"
          strokeDasharray="98.089 564.312"
          strokeDashoffset={662.4010009765625}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="10s"
            repeatCount="indefinite"
            from={662.4010009765625}
            to={0}
          />
        </path>
        <path
          id="track12-animated"
          d="M1944.49 128.616H795.648C789.881 128.616 784.35 130.906 780.273 134.984L685.651 229.606C681.573 233.684 676.042 235.975 670.276 235.975H540.16C534.394 235.975 528.863 238.265 524.785 242.343L425.407 341.721C421.329 345.799 415.799 348.09 410.032 348.09H197.699C191.932 348.09 186.401 350.381 182.324 354.458L-113 649.782"
          strokeWidth={5}
          stroke="#CE2222"
          strokeLinecap="round"
          strokeDasharray="149.112 4388.261"
          strokeDashoffset={4537.373046875}
        >
          <animate
            attributeName="stroke-dashoffset"
            dur="10s"
            repeatCount="indefinite"
            from={4537.373046875}
            to={0}
          />
        </path>
        <animate
          attributeName="opacity"
          from={0}
          to={1}
          dur="5s"
          fill="freeze"
        />
      </g>
    </g>
    <mask id="fadeMask">
      <rect x={0} y={0} width="100%" height="100%" fill="url(#fadeGradient)" />
    </mask>
    <defs>
      <filter id="glow" x="-200%" y="-200%" width="400%" height="400%">
        <feGaussianBlur stdDeviation={4} result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
      <radialGradient id="fadeGradient" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="white" stopOpacity={1} />
        <stop offset="80%" stopColor="white" stopOpacity={1} />
        <stop offset="100%" stopColor="white" stopOpacity={0} />
      </radialGradient>
      <radialGradient
        id="paint0_radial_252_174"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(1417.2 772.769) rotate(-96.4108) scale(973.678 336.262)"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="paint1_linear_252_174"
        x1={1634.64}
        y1={536.308}
        x2={590.915}
        y2={-333.183}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={0.0636371} stopColor="white" />
        <stop offset={0.896428} stopColor="white" />
        <stop offset={0.951816} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint2_linear_252_174"
        x1={1178.03}
        y1={1025.54}
        x2={868.41}
        y2={911.76}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_252_174"
        x1={1143.76}
        y1={1365.28}
        x2={1372.21}
        y2={540.491}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_252_174"
        x1={937.487}
        y1={435.744}
        x2={725.678}
        y2={-40.9032}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.788462} stopColor="white" />
        <stop offset={0.858394} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint5_linear_252_174"
        x1={838.282}
        y1={949.436}
        x2={985.199}
        y2={-28.2844}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={0.0572125} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_252_174"
        x1={381.667}
        y1={1245.69}
        x2={-165.347}
        y2={388.964}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint7_linear_252_174"
        x1={1396.13}
        y1={720.257}
        x2={130.311}
        y2={278.558}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint8_linear_252_174"
        x1={1979.82}
        y1={1011.95}
        x2={1221.51}
        y2={3.58966}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <radialGradient
        id="paint9_radial_252_174"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(528 241) rotate(83.5892) scale(716.48 247.438)"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </radialGradient>
      <linearGradient
        id="paint10_linear_252_174"
        x1={368}
        y1={415}
        x2={1136.03}
        y2={1054.81}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={0.0636371} stopColor="white" />
        <stop offset={0.896428} stopColor="white" />
        <stop offset={0.951816} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint11_linear_252_174"
        x1={704}
        y1={55}
        x2={931.83}
        y2={138.724}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint12_linear_252_174"
        x1={729.212}
        y1={-195}
        x2={561.109}
        y2={411.922}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint13_linear_252_174"
        x1={881}
        y1={489}
        x2={1036.86}
        y2={839.74}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.788462} stopColor="white" />
        <stop offset={0.858394} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint14_linear_252_174"
        x1={954}
        y1={111}
        x2={845.891}
        y2={830.454}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={0.0572125} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
      </linearGradient>
      <linearGradient
        id="paint15_linear_252_174"
        x1={1290}
        y1={-107}
        x2={1692.52}
        y2={523.423}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint16_linear_252_174"
        x1={492}
        y1={287}
        x2={1423.45}
        y2={612.023}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <linearGradient
        id="paint17_linear_252_174"
        x1={114}
        y1={65}
        x2={672}
        y2={807}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity={0} />
        <stop offset={0.09375} stopColor="white" />
        <stop offset={0.875} stopColor="white" />
        <stop offset={1} stopColor="white" stopOpacity={0} />
      </linearGradient>
      <radialGradient
        id="paint18_radial_252_174"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(864 497) rotate(90) scale(608 1585.45)"
      >
        <stop stopOpacity={0} />
        <stop offset={1} />
      </radialGradient>
      <clipPath id="clip0_252_174">
        <rect width={1728} height={994} fill="white" />
      </clipPath>
    </defs>
  </svg>
  </div>
)}
export default SVGComponent;
