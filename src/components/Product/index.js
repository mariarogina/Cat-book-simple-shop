import React, { useState } from "react";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

import {
  Wrapper,
  OverlayWrapper,
  Card,
  CardImage,
  CardBody,
  CardTitle,
  CardPrice,
  Icon,
} from "./Styles";

export default function Product({ addProductToCart, ...props }) {
  const [isHover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <Wrapper
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      {isHover && (
        <OverlayWrapper onClick={() => addProductToCart({ ...props })}>
          <Icon style={{color:"red"}} icon={faCartArrowDown} />
        </OverlayWrapper>
      )}

      <Card>
        <CardImage src={props.imageURL} />
        <CardBody>
          <CardTitle>{props.title}</CardTitle>
          <CardPrice>${props.price}</CardPrice>
        </CardBody>
      </Card>
    </Wrapper>
  );
}
