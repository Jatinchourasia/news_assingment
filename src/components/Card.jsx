import React from "react";
import styled from "styled-components";

export const Card = (props) => {
  const { source, description, title, image } = props;

  return (
    <StyledComponent.Card bgImg={image}>
      <div className="blogImageDiv"></div>
      <div className="cardWrap">
        <p className="source">{source && source}</p>
        <h2 className="title">{title && title.slice(0, 80)}...</h2>
        <p className="description">
          {description && description.slice(0, 100)}...
        </p>
      </div>
    </StyledComponent.Card>
  );
};

const StyledComponent = {
  Card: styled.div`
    box-shadow: 7px 7px 9px rgba(66, 65, 65, 0.12);
    border-radius: 2px;
    background: #ffffff;
    min-width: 90%;
    border-radius: 6px;
    .source {
      color: #a8a8a8;
    }
    .title {
      font-size: 1.2rem;
    }
    .description {
      font-size: 1rem;
      overflow: hidden !important;
      text-overflow: ellipsis;
    }
    .blogImageDiv {
      height: 12rem;
      background: ${(props) => `url(${props.bgImg})`};
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    .cardWrap {
      padding: 1rem;
      min-height: 15rem;
    }
  `,
};
