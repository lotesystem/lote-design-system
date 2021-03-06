import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import SquareImage from './SquareImage';
import { photos } from './photos';

export const PhotoGallery4 = () => {
  const [selectAll, setSelectAll] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
  };

  const imageRenderer = useCallback(
    ({ index, left, top, key, photo }) => (
      <SquareImage
        selected={selectAll ? true : false}
        key={key}
        margin={'2px'}
        index={index}
        photo={photo}
        left={left}
        top={top}
      />
    ),
    [selectAll]
  );

  return <Gallery photos={photos} renderImage={imageRenderer} />;
};
