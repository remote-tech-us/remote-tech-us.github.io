import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { UX2, constants } from '@wsb/guac-widget-core';

const { PREVIEW, PUBLISH } = constants.renderModes;

function VideoComponent({
  containerStyle,
  alt,
  url,
  poster,
  height,
  width,
  renderMode,
  embedVideoStyles = {},
  ...props
}) {
  const [fluidPadding, setFluidPadding] = useState(null);
  const [isStockVideo, setIsStockVideo] = useState(false);
  useEffect(() => {
    const stockVideoRegex = new RegExp(/\/\/[^/]*.godaddy.com\//);
    setIsStockVideo(url.match(stockVideoRegex));
  }, [url]);
  useEffect(() => {
    if (!height || !width) {
      return;
    }
    setFluidPadding(`${(height / width) * 100}%`);
  }, [height, width]);
  const dataAid = props['data-aid'];
  const baseContainerStyles = {
    pointerEvents: renderMode === PREVIEW || renderMode === PUBLISH ? 'auto' : 'none',
    paddingHorizontal: 0
  };
  const fluidStyles = fluidPadding ? { paddingBottom: fluidPadding } : containerStyle;
  const stockVideoStyles = {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    width: '100%',
    height: '100%'
  };
  const videoContent = isStockVideo ? ( // eslint-disable-next-line jsx-a11y/media-has-caption
    <video
      title={ alt }
      src={ url }
      type='video/mp4'
      poster={ poster }
      style={ stockVideoStyles }
      data-aid={ dataAid }
      controls
      playsInline
    />
  ) : (
    <UX2.Element.Embed
      tag='iframe'
      allowFullScreen
      type='text/html'
      frameBorder='0'
      style={{ ...embedVideoStyles }}
      src={ url }
      title={ alt }
      data-aid={ dataAid }
    />
  );

  return (
    <UX2.Element.Embed.Container style={{ ...baseContainerStyles, ...fluidStyles }} tag='div'>
      { typeof window !== 'undefined' ? videoContent : null }
    </UX2.Element.Embed.Container>
  );
}

VideoComponent.propTypes = {
  'containerStyle': PropTypes.object,
  'data-aid': PropTypes.string,
  'width': PropTypes.string,
  'height': PropTypes.string,
  'url': PropTypes.string,
  'poster': PropTypes.string,
  'alt': PropTypes.string,
  'renderMode': PropTypes.oneOf(Object.values(constants.renderModes)),
  'embedVideoStyles': PropTypes.object
};

export default VideoComponent;

