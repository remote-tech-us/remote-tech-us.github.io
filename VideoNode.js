/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { UX2, constants as coreConstants } from '@wsb/guac-widget-core';
import dataAids from './constants/dataAids';

const { DISPLAY } = coreConstants.renderModes;

const VideoNode = props => {
  const { video, videoBackground, videoStyle, renderMode, showMobileVideo, videoPoster } = props;
  const formatUrl = url => (isEmpty(url) || url.indexOf('https') === 0 ? url : `https:${url}`);
  const baseStyle = { width: '100%', display: 'block', ...videoStyle };
  const commonVideoProps = {
    'title': video?.alt,
    'data-aid': dataAids.HEADER_VIDEO,
    'type': 'video/mp4',
    'poster': formatUrl(videoPoster),
    'autoPlay': renderMode !== DISPLAY,
    'loop': true,
    'muted': true,
    'playsInline': true
  };

  return (
    <React.Fragment>
      <UX2.Element.Block style={{ 'width': '100%', '@xs-only': { display: 'none' } }}>
        <video { ...commonVideoProps } style={ baseStyle } src={ formatUrl(videoBackground) } />
      </UX2.Element.Block>
      <UX2.Element.Block
        style={{
          'display': 'none',
          '@xs-only': { display: 'block' }
        }}
      >
        <video { ...commonVideoProps } src={ showMobileVideo && formatUrl(videoBackground) } />
      </UX2.Element.Block>
    </React.Fragment>
  );
};

VideoNode.propTypes = {
  video: PropTypes.object,
  videoBackground: PropTypes.string,
  videoStyle: PropTypes.object,
  renderMode: PropTypes.string,
  showMobileVideo: PropTypes.bool,
  videoPoster: PropTypes.string
};

export default VideoNode;
