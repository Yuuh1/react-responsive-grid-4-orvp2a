import React from 'react';
import { ResponsiveImage, ResponsiveImageSize } from 'react-responsive-image';

const small = 'https://i.imgur.com/NPqmOcC.gif', smallMinWidth = 0;
const mediumUp = 'https://i.imgur.com/IKbwhjG.gif', mediumUpMinWidth = 768;

const KendoImage = () => {
  return (
    <ResponsiveImage>
      <ResponsiveImageSize minWidth={smallMinWidth} path={small} />
      <ResponsiveImageSize minWidth={mediumUpMinWidth} path={mediumUp} />
    </ResponsiveImage>
  );
}

export default KendoImage;
