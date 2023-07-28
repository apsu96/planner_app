import { createGlobalStyle } from "styled-components";

import OpenSansWoff from "./OpenSans/OpenSans.woff";
import OpenSansWoff2 from "./OpenSans/OpenSans.woff2";
import OpenSansTtf from "./OpenSans/OpenSans.ttf";

import OpenSansSemibold from "./OpenSans-SemiBold/OpenSans-SemiBold.ttf";

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'OpenSans';
        src: local('OpenSans'), local('OpenSans-Regular'),
        url(${OpenSansWoff2}) format('woff2'),
        url(${OpenSansWoff}) format('woff'),
        url(${OpenSansTtf}) format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    @font-face {
        font-family: 'OpenSans';
        src: local('OpenSans Semibold'), local('OpenSans-Semibold'),
        url(${OpenSansSemibold}) format('truetype');
        font-weight: 600;
        font-style: normal;
        font-display: swap;
    }
`;

export { GlobalFonts };
