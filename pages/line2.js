import { css } from "@emotion/css";

const Line21 = () => {
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        border-top: 4px solid var(--color-black);
        box-sizing: border-box;
        height: 4px;
        transform: rotate(-0.21deg);
        transform-origin: 0 0;
      `}
    />
  );
};

export default Line21;
