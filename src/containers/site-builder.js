import React from 'react';

import ReactFullpage from '@fullpage/react-fullpage';
import '@fullpage/react-fullpage/node_modules/fullpage.js/vendors/scrolloverflow.min';

import { getFullpageOptionsConfig } from '../config/fullpage-options';

import { getAllSectionData } from '../data/bridge';
import { buildSectionViews, getFullpageOption } from './section-builder';

class Site extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionData: {
        section: [],
      },
    };
  }

  componentDidMount() {
    getAllSectionData(/*3000*/) // intended 3 second delay
      .then(sectionData => {
        this.setState({ sectionData });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { sectionData } = this.state;
    const { siteContext, section } = sectionData;
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
  }
}

export default Site;
