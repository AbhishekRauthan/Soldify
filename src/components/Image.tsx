import React, { FC, ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  Src: string;
  Alt: string;
  h: string;
  w: string;
}

const BrandImage: FC<Props> = ({ Alt, Src, h, w, ...rest }) => {
  return (
    <img
      src={Src}
      alt={Alt}
      className={`lg:filter lg:grayscale lg:hover:grayscale-0 h-${h} w-${w} mx-auto`}
      {...rest}
    />
  );
};

export default BrandImage;
