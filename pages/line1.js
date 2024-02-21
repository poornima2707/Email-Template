import { css } from "@emotion/css";

const Line11 = () => {
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        border-top: 3px solid var(--color-white);
        box-sizing: border-box;
        height: 3px;
        transform: rotate(0.12deg);
        transform-origin: 0 0;
      `}
    />
  );
};

export default Line11;
