import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import '@fullpage/react-fullpage/node_modules/fullpage.js/vendors/scrolloverflow.min';
import { getFullpageOptionsConfig } from '../config/fullpage-options';
import { buildSectionViews, getFullpageOption } from './section-builder';
import withAppBar from './with-app-bar';

const Site = props => {
  const { siteContext, section } = props.siteData;
  if (!section || section.length < 1) {
    return <div className="loading-title">Loading...</div>;
  }

  if (siteContext.style === '1-page') {
    return <>{buildSectionViews(section, siteContext)}</>;
  }

  const fullpageOptions = {
    ...getFullpageOptionsConfig(),
    navigationTooltips: getFullpageOption('navigationTooltips')(section),
    anchors: getFullpageOption('anchors')(section),
    sectionsColor: getFullpageOption('sectionsColor')(section),
  };

  return (
    <ReactFullpage
      {...fullpageOptions}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            {buildSectionViews(section)}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default withAppBar(Site);
