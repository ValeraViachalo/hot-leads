import classNames from "classnames";
import Image from "next/image";
import React from "react";

import "./Card.scss";

export const Card = ({ data }) => {
  const top = data.top;
  return (
    <div
      className={classNames("result-card", {
        "result-card--buy": data.type === "buy",
        "result-card--sell": data.type === "sell",
      })}
    >
      <Bg isBuy={data.type === "buy"} />
      <div className="result-card__title fz--30 fz--mobile-30 bold uppercase">
        {data.type}
      </div>
      <div className="card-wrapper">
        <div className="result-card__top">
          <div className="left">
            {top.title?.topTitle && (
              <p
                className="top-title fz--15 fz--mobile-12 uppercase"
                dangerouslySetInnerHTML={{ __html: top.title?.topTitle }}
              />
            )}
            {top.title?.mainTitle && (
              <p
                className="main-title fz--30 fz--mobile-20 bold"
                dangerouslySetInnerHTML={{ __html: top.title?.mainTitle }}
              />
            )}
          </div>
          <div className="right">
            {top.type === "titleImage" && top.title?.image && (
              <Image
                src={top.title?.image}
                alt=""
                width={144}
                height={144}
                className="right__image"
              />
            )}
            {top.type === "doubleTitle" && (
              <p className="right__text bold fz--40 fz--mobile-22">
                {top.title?.secondTitle}
              </p>
            )}
          </div>
        </div>
        <div className="content">
          {data.text?.map((item, index) => {
            if (item.type === "textFull") {
              return (
                <div key={index} className="content__section">
                  {item.title && (
                    <p
                      className="fz--15 fz--mobile-12 content__title"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  )}
                  {item.content && (
                    <p
                      className="fz--15 fz--mobile-12 shadow light"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  )}
                </div>
              );
            }
            if (item.type === "list") {
              return (
                <div key={index} className="content__section">
                  {item.title && (
                    <p
                      className="fz--15 fz--mobile-12 content__title"
                      dangerouslySetInnerHTML={{ __html: item.title }}
                    />
                  )}
                  <ul className="list">
                    {item.list?.map((listItem, listIndex) => (
                      <li
                        key={listIndex}
                        className="fz--15 fz--mobile-12 shadow light item"
                        dangerouslySetInnerHTML={{ __html: listItem }}
                      />
                    ))}
                  </ul>
                </div>
              );
            }
            if (item.type === "doubleText") {
              const firstText = item.first;
              const secondText = item.second;
              return (
                <div key={index} className="content__section double-section">
                  <div className="double-section__text">
                    {firstText.title && (
                      <p
                        className="fz--15 fz--mobile-12 content__title"
                        dangerouslySetInnerHTML={{ __html: firstText.title }}
                      />
                    )}
                    {firstText.content && (
                      <p
                        className="fz--15 fz--mobile-12 shadow light"
                        dangerouslySetInnerHTML={{ __html: firstText.content }}
                      />
                    )}
                  </div>
                  <div className="double-section__text">
                    {secondText.title && (
                      <p
                        className="fz--15 fz--mobile-12 content__title"
                        dangerouslySetInnerHTML={{ __html: secondText.title }}
                      />
                    )}
                    {secondText.content && (
                      <p
                        className="fz--15 fz--mobile-12 shadow light"
                        dangerouslySetInnerHTML={{ __html: secondText.content }}
                      />
                    )}
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

const Bg = ({ isBuy }) => {
  return (
    <div className="background">
      <div className="blur-bg" />
      {/* {isBuy ? (
        <svg
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <foreignObject x="-39.3" y="-39.3" width="478.6" height="678.6">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                backdropFilter: "blur(19.65px)",
                clipPath: "url(#bgblur_0_1082_578_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g data-figma-bg-blur-radius="39.3">
            <path
              d="M399.5 52.1828V580C399.5 590.77 390.77 599.5 380 599.5H20C9.23045 599.5 0.5 590.77 0.5 580V20C0.5 9.23046 9.23045 0.5 20 0.5H167.407C173.838 0.5 179.857 3.67162 183.492 8.9773L193.63 23.7708C197.452 29.3486 203.778 32.6828 210.54 32.6828H380C390.77 32.6828 399.5 41.4133 399.5 52.1828Z"
              fill="black"
              fillOpacity="0.3"
            />
            <path
              d="M399.5 52.1828V580C399.5 590.77 390.77 599.5 380 599.5H20C9.23045 599.5 0.5 590.77 0.5 580V20C0.5 9.23046 9.23045 0.5 20 0.5H167.407C173.838 0.5 179.857 3.67162 183.492 8.9773L193.63 23.7708C197.452 29.3486 203.778 32.6828 210.54 32.6828H380C390.77 32.6828 399.5 41.4133 399.5 52.1828Z"
              fill="url(#paint0_radial_1082_578)"
              fillOpacity="0.2"
            />
            <path
              d="M399.5 52.1828V580C399.5 590.77 390.77 599.5 380 599.5H20C9.23045 599.5 0.5 590.77 0.5 580V20C0.5 9.23046 9.23045 0.5 20 0.5H167.407C173.838 0.5 179.857 3.67162 183.492 8.9773L193.63 23.7708C197.452 29.3486 203.778 32.6828 210.54 32.6828H380C390.77 32.6828 399.5 41.4133 399.5 52.1828Z"
              stroke="#00CF3C"
            />
          </g>
          <defs>
            <clipPath id="bgblur_0_1082_578_clip_path">
              <path
                transform="translate(39.3 39.3)"
                d="M399.5 52.1828V580C399.5 590.77 390.77 599.5 380 599.5H20C9.23045 599.5 0.5 590.77 0.5 580V20C0.5 9.23046 9.23045 0.5 20 0.5H167.407C173.838 0.5 179.857 3.67162 183.492 8.9773L193.63 23.7708C197.452 29.3486 203.778 32.6828 210.54 32.6828H380C390.77 32.6828 399.5 41.4133 399.5 52.1828Z"
              />
            </clipPath>
            <radialGradient
              id="paint0_radial_1082_578"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(391.192 362.99) rotate(-90) scale(332.032 505.699)"
            >
              <stop stopColor="#00CF3C" />
              <stop offset="1" stopColor="#00CF3C" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      ) : (
        <svg
          viewBox="0 0 400 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <foreignObject x="-39.3" y="-39.3" width="478.6" height="678.6">
            <div
              xmlns="http://www.w3.org/1999/xhtml"
              style={{
                backdropFilter: "blur(19.65px)",
                clipPath: "url(#bgblur_0_1082_605_clip_path)",
                height: "100%",
                width: "100%",
              }}
            ></div>
          </foreignObject>
          <g data-figma-bg-blur-radius="39.3">
            <path
              d="M399.5 52.1828V580C399.5 590.77 390.77 599.5 380 599.5H20C9.23045 599.5 0.5 590.77 0.5 580V20C0.5 9.23046 9.23045 0.5 20 0.5H167.407C173.838 0.5 179.857 3.67162 183.492 8.9773L193.63 23.7708C197.452 29.3486 203.778 32.6828 210.54 32.6828H380C390.77 32.6828 399.5 41.4133 399.5 52.1828Z"
              fill="black"
              fill-opacity="0.3"
            />
            <path
              d="M399.5 52.1828V580C399.5 590.77 390.77 599.5 380 599.5H20C9.23045 599.5 0.5 590.77 0.5 580V20C0.5 9.23046 9.23045 0.5 20 0.5H167.407C173.838 0.5 179.857 3.67162 183.492 8.9773L193.63 23.7708C197.452 29.3486 203.778 32.6828 210.54 32.6828H380C390.77 32.6828 399.5 41.4133 399.5 52.1828Z"
              fill="url(#paint0_radial_1082_605)"
              fill-opacity="0.2"
            />
            <path
              d="M399.5 52.1828V580C399.5 590.77 390.77 599.5 380 599.5H20C9.23045 599.5 0.5 590.77 0.5 580V20C0.5 9.23046 9.23045 0.5 20 0.5H167.407C173.838 0.5 179.857 3.67162 183.492 8.9773L193.63 23.7708C197.452 29.3486 203.778 32.6828 210.54 32.6828H380C390.77 32.6828 399.5 41.4133 399.5 52.1828Z"
              stroke="#FF2400"
            />
          </g>
          <defs>
            <clipPath id="bgblur_0_1082_605_clip_path">
              <path
                transform="translate(39.3 39.3)"
                d="M399.5 52.1828V580C399.5 590.77 390.77 599.5 380 599.5H20C9.23045 599.5 0.5 590.77 0.5 580V20C0.5 9.23046 9.23045 0.5 20 0.5H167.407C173.838 0.5 179.857 3.67162 183.492 8.9773L193.63 23.7708C197.452 29.3486 203.778 32.6828 210.54 32.6828H380C390.77 32.6828 399.5 41.4133 399.5 52.1828Z"
              />
            </clipPath>
            <radialGradient
              id="paint0_radial_1082_605"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(391.192 362.99) rotate(-90) scale(332.032 505.699)"
            >
              <stop stopColor="#FF2400" />
              <stop offset="1" stopColor="#FF2400" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      )} */}
      {/* {isBuy ? (
        <Image
          src="/images/results/green-bg.svg"
          alt=""
          fill
        />
      )   : (
        <Image
          src="/images/results/red-bg.svg"
          alt=""
          fill
        />
      )} */}
    </div>
  );
};
