import { useEffect } from "react";
import { css, keyframes } from "@emotion/css";

const animationFadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
  `;

const Desktop = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        background-color: var(--color-white);
        height: 4865px;
        overflow: hidden;
        text-align: left;
        font-size: var(--font-size-36xl);
        color: var(--color-black);
        font-family: var(--font-inter);
        @media screen and (max-width: 1200px) {
          opacity: 0;
          &.animate {
            animation: 1s ease 0s 1 normal forwards ${animationFadeIn};
          }
        }
      `}
      data-animate-on-scroll
    >
      <img
        className={css`
          position: absolute;
          top: 746px;
          left: 935px;
          width: 374px;
          height: 77px;
          mix-blend-mode: linear-burn;
        `}
        alt=""
        src="/rectangle-26.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 4083px;
          left: 747px;
          background-color: var(--color-white);
          width: 593px;
          height: 139px;
          mix-blend-mode: linear-burn;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 4222px;
          left: 63px;
          background-color: var(--color-white);
          width: 593px;
          height: 139px;
          mix-blend-mode: linear-burn;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 2812px;
          left: 747px;
          background-color: var(--color-white);
          width: 593px;
          height: 139px;
          mix-blend-mode: linear-burn;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: 0px;
          left: calc(50% - 720px);
          width: 1440px;
          height: 284px;
        `}
        alt=""
        src="/rectangle-14.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 2452px;
          left: 450.7px;
          width: 173.7px;
          height: 171.8px;
          transform: rotate(111.15deg);
          transform-origin: 0 0;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: 4522px;
          left: 559px;
          border-radius: 50%;
          width: 51.1px;
          height: 68.5px;
          object-fit: contain;
        `}
        alt=""
        src="/ellipse-5@2x.png"
      />
      <img
        className={css`
          position: absolute;
          top: 4524px;
          left: 775px;
          border-radius: 50%;
          width: 51.1px;
          height: 68.5px;
          object-fit: contain;
        `}
        alt=""
        src="/ellipse-6@2x.png"
      />
      <img
        className={css`
          position: absolute;
          top: 4526px;
          left: 849px;
          border-radius: 50%;
          width: 51.1px;
          height: 68.5px;
          object-fit: contain;
        `}
        alt=""
        src="/ellipse-7@2x.png"
      />
      <img
        className={css`
          position: absolute;
          top: 4526px;
          left: 630px;
          border-radius: 50%;
          width: 51.1px;
          height: 68.5px;
          object-fit: contain;
        `}
        alt=""
        src="/ellipse-8@2x.png"
      />
      <img
        className={css`
          position: absolute;
          top: 4524px;
          left: 704px;
          border-radius: 50%;
          width: 51.1px;
          height: 68.5px;
          object-fit: contain;
        `}
        alt=""
        src="/ellipse-9@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          background: linear-gradient(
            180deg,
            rgba(93, 53, 135, 0.87),
            rgba(137, 61, 217, 0)
          );
          width: 1440px;
          height: 154px;
        `}
      />
      <img
        className={css`
          position: absolute;
          top: 123px;
          left: 197px;
          width: 1024px;
          height: 2.1px;
          object-fit: contain;
        `}
        alt=""
      />
      <img
        className={css`
          position: absolute;
          top: 194px;
          left: 197px;
          width: 1024px;
          height: 2.1px;
          object-fit: contain;
        `}
        alt=""
      />
      <div
        className={css`
          position: absolute;
          top: 135px;
          left: 284px;
          font-size: var(--font-size-13xl);
          color: var(--color-white);
        `}
      >
        WOMEN
      </div>
      <div
        className={css`
          position: absolute;
          top: 135px;
          left: 548px;
          font-size: var(--font-size-13xl);
          color: var(--color-white);
        `}
      >
        MEN
      </div>
      <div
        className={css`
          position: absolute;
          top: 135px;
          left: 758px;
          font-size: var(--font-size-13xl);
          color: var(--color-white);
        `}
      >
        CHILDREN
      </div>
      <div
        className={css`
          position: absolute;
          top: 135px;
          left: 1057px;
          font-size: var(--font-size-13xl);
          color: var(--color-white);
        `}
      >
        SALE
      </div>
      <img
        className={css`
          position: absolute;
          top: 296px;
          left: 0px;
          width: 1440px;
          height: 631px;
          object-fit: cover;
        `}
        alt=""
        src="/rectangle-16@2x.png"
      />
      <img
        className={css`
          position: absolute;
          top: 1478px;
          left: 74px;
          width: 607px;
          height: 636px;
          object-fit: cover;
        `}
        alt=""
        src="/rectangle-17@2x.png"
      />
      <img
        className={css`
          position: absolute;
          top: 1478px;
          left: 754px;
          width: 607px;
          height: 1027px;
          object-fit: cover;
        `}
        alt=""
        src="/rectangle-18@2x.png"
      />
      <b
        className={css`
          position: absolute;
          top: 2539px;
          left: 754px;
        `}
      >
        FANCYS
      </b>
      <b
        className={css`
          position: absolute;
          top: 3904px;
          left: 74px;
        `}
      >
        TRADITIONAL
      </b>
      <img
        className={css`
          position: absolute;
          top: 2777px;
          left: 74px;
          width: 607px;
          height: 1062px;
          object-fit: cover;
        `}
        alt=""
        src="/rectangle-19@2x.png"
      />
      <img
        className={css`
          position: absolute;
          top: 3024px;
          left: 747px;
          width: 607px;
          height: 668px;
          object-fit: cover;
        `}
        alt=""
        src="/rectangle-20@2x.png"
      />
      <img
        className={css`
          position: absolute;
          top: 4420px;
          left: 71px;
          width: 1269px;
          height: 4.6px;
          object-fit: contain;
        `}
        alt=""
      />
      <b
        className={css`
          position: absolute;
          top: 4458.3px;
          left: 614px;
          font-size: var(--font-size-21xl);
        `}
      >
        FOLLOW US
      </b>
      <b
        className={css`
          position: absolute;
          top: 4622.3px;
          left: 285px;
          font-size: var(--font-size-13xl);
        `}
      >
        <p
          className={css`
            margin: 0;
          `}
        >
          If you prefer to receive emails like this, you may unsubscribe
        </p>
        <p
          className={css`
            margin: 0;
            white-space: pre-wrap;
          `}
        >
          {" "}
          (c)2024 .All rights reserved.
        </p>
        <p
          className={css`
            margin: 0;
            font-size: var(--font-size-21xl);
            white-space: pre-wrap;
          `}
        >
          {" "}
          COMPANY.COM
        </p>
      </b>
      <div
        className={css`
          position: absolute;
          top: 2488px;
          left: 74px;
          background-color: var(--color-white);
          border: 2px solid var(--color-black);
          box-sizing: border-box;
          width: 607px;
          height: 139px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 4079px;
          left: 747px;
          background-color: var(--color-white);
          border: 2px solid var(--color-black);
          box-sizing: border-box;
          width: 607px;
          height: 139px;
        `}
      />
      <b
        className={css`
          position: absolute;
          top: 2524px;
          left: 217px;
        `}
      >
        SHOP NOW
      </b>
      <b
        className={css`
          position: absolute;
          top: 4115px;
          left: 897px;
        `}
      >
        SHOP NOW
      </b>
      <div
        className={css`
          position: absolute;
          top: 2481px;
          left: 88px;
          background-color: var(--color-white);
          width: 593px;
          height: 139px;
          mix-blend-mode: darken;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 743px;
          left: 944px;
          background-color: var(--color-white);
          border: 2px solid var(--color-black);
          box-sizing: border-box;
          width: 365px;
          height: 77px;
        `}
      />
      <b
        className={css`
          position: absolute;
          top: 763px;
          left: 1020px;
          font-size: var(--font-size-21xl);
          display: inline-block;
          width: 319px;
          height: 38px;
        `}
      >
        SHOP NOW
      </b>
      <b
        className={css`
          position: absolute;
          top: 3733px;
          left: 755px;
        `}
      >
        LOOKS
      </b>
      <div
        className={css`
          position: absolute;
          top: 4218px;
          left: 63px;
          background-color: var(--color-white);
          border: 2px solid var(--color-black);
          box-sizing: border-box;
          width: 607px;
          height: 139px;
        `}
      />
      <b
        className={css`
          position: absolute;
          top: 4254px;
          left: 213px;
        `}
      >
        SHOP NOW
      </b>
      <div
        className={css`
          position: absolute;
          top: 2818px;
          left: 758px;
          background-color: var(--color-white);
          border: 2px solid var(--color-black);
          box-sizing: border-box;
          width: 607px;
          height: 139px;
          display: none;
        `}
      />
      <b
        className={css`
          position: absolute;
          top: 2175px;
          left: 71px;
        `}
      >
        SPORTS
      </b>
      <img
        className={css`
          position: absolute;
          top: 942px;
          left: 0px;
          width: 1440px;
          height: 512px;
          object-fit: cover;
        `}
        alt=""
        src="/rectangle-31@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: 1028px;
          left: 482px;
          background-color: #d9d9d9;
          width: 462px;
          height: 374px;
          mix-blend-mode: multiply;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 2263px;
          left: 56px;
          font-size: var(--font-size-21xl);
          text-align: center;
          display: inline-block;
          width: 643px;
        `}
      >
        <p
          className={css`
            margin: 0;
          `}
        >
          "High-performance sports clothes engineered
        </p>
        <p
          className={css`
            margin: 0;
          `}
        >
          {" "}
          for maximum comfort and agility."
        </p>
      </div>
      <div
        className={css`
          position: absolute;
          top: 2630px;
          left: 720px;
          font-size: var(--font-size-21xl);
          text-align: center;
          display: inline-block;
          width: 643px;
        `}
      >
        <p
          className={css`
            margin: 0;
          `}
        >
          "Fashion-forward attire for the style-savvy."
        </p>
      </div>
      <div
        className={css`
          position: absolute;
          top: 2808px;
          left: 747px;
          background-color: var(--color-white);
          border: 2px solid var(--color-black);
          box-sizing: border-box;
          width: 607px;
          height: 139px;
        `}
      />
      <b
        className={css`
          position: absolute;
          top: 2844px;
          left: 897px;
        `}
      >
        SHOP NOW
      </b>
      <div
        className={css`
          position: absolute;
          top: 3824px;
          left: 791px;
          font-size: var(--font-size-21xl);
          text-align: center;
          display: inline-block;
          width: 519px;
        `}
      >
        "Style is a way to say who you are without having to speak - clothes
        speak volumes."
      </div>
      <div
        className={css`
          position: absolute;
          top: 4759px;
          left: 0px;
          background-color: #0f2167;
          width: 1472px;
          height: 101px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 4016px;
          left: 100px;
          font-size: var(--font-size-21xl);
          text-align: center;
          display: inline-block;
          width: 519px;
        `}
      >
        <p
          className={css`
            margin: 0;
          `}
        >
          "Traditional cloths woven with intricate patterns and vibrant colors."
        </p>
      </div>
      <div
        className={css`
          position: absolute;
          top: -9px;
          left: 276px;
          font-size: 96px;
          font-family: var(--font-oleo-script-swash-caps);
          color: #fdfbfc;
          text-align: center;
          display: inline-block;
          width: 888px;
          height: 124px;
        `}
      >
        Unique Fashion
      </div>
    </div>
  );
};

export default Desktop;
