import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps:wght@400&display=swap');
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--font-oleo-script-swash-caps: 'Oleo Script Swash Caps';
--font-inter: Inter;

/* font sizes */
--font-size-21xl: 40px;
--font-size-36xl: 55px;
--font-size-13xl: 32px;

/* Colors */
--color-white: #fff;
--color-black: #000;

}
`;
}
