import React from "react";

const YachtIcon = ({ color }) => {
  const MyGradient = (
    <linearGradient id="MyGradient" x1="0%" y1="90%" x2="100%" y2="0%">
      <stop offset="0%" stopColor="#d1355f" />
      <stop offset="100%" stopColor="#49b9b3" />
    </linearGradient>
  );
  return (
    <>
      {color == "g" ? (
        <svg
          width="70"
          height="130"
          viewBox="0 0 36 36"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          class=""
        >
          <path
            d="M10.34 26.967a.703.703 0 00-.703-.703H5.285a.703.703 0 000 1.406h4.352a.703.703 0 00.704-.703z"
            fill="url(#yacht-entry_svg__paint0_linear_8955_9927)"
          ></path>
          <path
            d="M20.421 26.967a.703.703 0 00-.703-.703h-4.352a.703.703 0 000 1.406h4.352a.703.703 0 00.703-.703z"
            fill="url(#yacht-entry_svg__paint1_linear_8955_9927)"
          ></path>
          <path
            d="M30.502 26.967a.703.703 0 00-.703-.703h-4.353a.703.703 0 100 1.406h4.352a.703.703 0 00.704-.703z"
            fill="url(#yacht-entry_svg__paint2_linear_8955_9927)"
          ></path>
          <path
            d="M5.055 30.6H.703a.703.703 0 000 1.406h4.352a.703.703 0 000-1.406z"
            fill="url(#yacht-entry_svg__paint3_linear_8955_9927)"
          ></path>
          <path
            d="M15.136 30.6h-4.352a.703.703 0 000 1.406h4.352a.703.703 0 000-1.406z"
            fill="url(#yacht-entry_svg__paint4_linear_8955_9927)"
          ></path>
          <path
            d="M25.216 30.6h-4.352a.703.703 0 000 1.406h4.352a.703.703 0 000-1.406z"
            fill="url(#yacht-entry_svg__paint5_linear_8955_9927)"
          ></path>
          <path
            d="M35.297 30.6h-4.352a.703.703 0 000 1.406h4.352a.703.703 0 000-1.406z"
            fill="url(#yacht-entry_svg__paint6_linear_8955_9927)"
          ></path>
          <path
            d="M.703 23.334h6.235a.703.703 0 000-1.406H1.406v-.48c0-2.372 1.93-4.301 4.301-4.301h24.73a12.59 12.59 0 003.642-.534l-2.053 5.315h-18.76a.703.703 0 000 1.406h22.03a.703.703 0 000-1.406h-1.763l2.42-6.262a.703.703 0 00-.942-.896c-1.449.644-2.988.97-4.574.97h-.075l-2.519-2.53h.099a.703.703 0 00.703-.704 3.52 3.52 0 00-3.515-3.515H19.3a3.802 3.802 0 00-3.73-3.094h-4.996L8.477 3.805A.702.702 0 007.98 3.6H4.805a.703.703 0 00-.543 1.15l3.261 3.964v.348a3.521 3.521 0 00-2.811 3.444c0 .389.314.703.703.703h2.36l-2.552 2.554A5.714 5.714 0 000 21.448v1.183c0 .389.315.703.703.703zm27.675-7.593h-5.394l-2.518-2.532h5.393l2.52 2.532zM15.571 7.303c1.073 0 1.984.712 2.284 1.688H12.72v-.666a.703.703 0 00-.207-.498l-.526-.524h3.585zM6.294 5.006H7.69l3.623 3.611v.374H8.93v-.529a.704.704 0 00-.16-.447L6.294 5.006zm1.933 5.39H25.13c.916 0 1.698.589 1.989 1.407H6.239a2.113 2.113 0 011.988-1.406zm10.255 2.813L21 15.741H7.233l2.532-2.532h8.717z"
            fill="url(#yacht-entry_svg__paint7_linear_8955_9927)"
          ></path>
          <path
            d="M18.506 20.035a.709.709 0 00.206-.497.706.706 0 00-1.2-.497.704.704 0 00.497 1.2.71.71 0 00.497-.206z"
            fill="url(#yacht-entry_svg__paint8_linear_8955_9927)"
          ></path>
          <path
            d="M22.693 20.035a.709.709 0 00.206-.497.708.708 0 00-.704-.703.705.705 0 00-.497 1.2c.131.13.313.206.497.206a.71.71 0 00.498-.206z"
            fill="url(#yacht-entry_svg__paint9_linear_8955_9927)"
          ></path>
          <path
            d="M26.88 20.035a.709.709 0 00.205-.497.708.708 0 00-.703-.703.703.703 0 10.497 1.2z"
            fill="url(#yacht-entry_svg__paint10_linear_8955_9927)"
          ></path>
          <path
            d="M9.604 22.134a.707.707 0 000 .995.71.71 0 00.498.206.708.708 0 00.497-.206.709.709 0 00.206-.498.707.707 0 00-.703-.703.706.706 0 00-.498.206z"
            fill="url(#yacht-entry_svg__paint11_linear_8955_9927)"
          ></path>
          <defs>
            <linearGradient
              id="yacht-entry_svg__paint0_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint1_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint2_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint3_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint4_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint5_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint6_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint7_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint8_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint9_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint10_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint11_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
          </defs>
        </svg>
      ) : (
        <svg
          width="70"
          height="130"
          viewBox="0 0 36 36"
          fill="#fff"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          class=""
        >
          <path
            d="M10.34 26.967a.703.703 0 00-.703-.703H5.285a.703.703 0 000 1.406h4.352a.703.703 0 00.704-.703z"
            fill="#fff"
          ></path>
          <path
            d="M20.421 26.967a.703.703 0 00-.703-.703h-4.352a.703.703 0 000 1.406h4.352a.703.703 0 00.703-.703z"
            fill="#fff"
          ></path>
          <path
            d="M30.502 26.967a.703.703 0 00-.703-.703h-4.353a.703.703 0 100 1.406h4.352a.703.703 0 00.704-.703z"
            fill="#fff"
          ></path>
          <path
            d="M5.055 30.6H.703a.703.703 0 000 1.406h4.352a.703.703 0 000-1.406z"
            fill="#fff"
          ></path>
          <path
            d="M15.136 30.6h-4.352a.703.703 0 000 1.406h4.352a.703.703 0 000-1.406z"
            fill="#fff"
          ></path>
          <path
            d="M25.216 30.6h-4.352a.703.703 0 000 1.406h4.352a.703.703 0 000-1.406z"
            fill="#fff"
          ></path>
          <path
            d="M35.297 30.6h-4.352a.703.703 0 000 1.406h4.352a.703.703 0 000-1.406z"
            fill="#fff"
          ></path>
          <path
            d="M.703 23.334h6.235a.703.703 0 000-1.406H1.406v-.48c0-2.372 1.93-4.301 4.301-4.301h24.73a12.59 12.59 0 003.642-.534l-2.053 5.315h-18.76a.703.703 0 000 1.406h22.03a.703.703 0 000-1.406h-1.763l2.42-6.262a.703.703 0 00-.942-.896c-1.449.644-2.988.97-4.574.97h-.075l-2.519-2.53h.099a.703.703 0 00.703-.704 3.52 3.52 0 00-3.515-3.515H19.3a3.802 3.802 0 00-3.73-3.094h-4.996L8.477 3.805A.702.702 0 007.98 3.6H4.805a.703.703 0 00-.543 1.15l3.261 3.964v.348a3.521 3.521 0 00-2.811 3.444c0 .389.314.703.703.703h2.36l-2.552 2.554A5.714 5.714 0 000 21.448v1.183c0 .389.315.703.703.703zm27.675-7.593h-5.394l-2.518-2.532h5.393l2.52 2.532zM15.571 7.303c1.073 0 1.984.712 2.284 1.688H12.72v-.666a.703.703 0 00-.207-.498l-.526-.524h3.585zM6.294 5.006H7.69l3.623 3.611v.374H8.93v-.529a.704.704 0 00-.16-.447L6.294 5.006zm1.933 5.39H25.13c.916 0 1.698.589 1.989 1.407H6.239a2.113 2.113 0 011.988-1.406zm10.255 2.813L21 15.741H7.233l2.532-2.532h8.717z"
            fill="url(#yacht-entry_svg__paint7_linear_8955_9927)"
          ></path>
          <path
            d="M18.506 20.035a.709.709 0 00.206-.497.706.706 0 00-1.2-.497.704.704 0 00.497 1.2.71.71 0 00.497-.206z"
            fill="#fff"
          ></path>
          <path
            d="M22.693 20.035a.709.709 0 00.206-.497.708.708 0 00-.704-.703.705.705 0 00-.497 1.2c.131.13.313.206.497.206a.71.71 0 00.498-.206z"
            fill="#fff"
          ></path>
          <path
            d="M26.88 20.035a.709.709 0 00.205-.497.708.708 0 00-.703-.703.703.703 0 10.497 1.2z"
            fill="#fff"
          ></path>
          <path
            d="M9.604 22.134a.707.707 0 000 .995.71.71 0 00.498.206.708.708 0 00.497-.206.709.709 0 00.206-.498.707.707 0 00-.703-.703.706.706 0 00-.498.206z"
            fill="#fff"
          ></path>
          <defs>
            <linearGradient
              id="yacht-entry_svg__paint5_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff"></stop>
              <stop offset="1" stop-color="#fff"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint6_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff"></stop>
              <stop offset="1" stop-color="#fff"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint7_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff"></stop>
              <stop offset="1" stop-color="#fff"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint8_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#fff"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint9_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint10_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#49B9B3"></stop>
            </linearGradient>
            <linearGradient
              id="yacht-entry_svg__paint11_linear_8955_9927"
              x1="37.828"
              y1="-30.132"
              x2="6.264"
              y2="-28.182"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#D84E6A"></stop>
              <stop offset="1" stop-color="#fff"></stop>
            </linearGradient>
          </defs>
        </svg>
      )}
    </>
  );
};

export default YachtIcon;
