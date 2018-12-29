import React from 'react';

import 'fullpage.js/vendors/scrolloverflow.min';
import ReactFullpage from '@fullpage/react-fullpage';

const fullpageOptions = {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  navigation: true,
  navigationPosition: 'left',
  navigationTooltips: ['First Page', 'Second Page', 'Third Page'],
  anchors: ['firstPage', 'secondPage', 'thirdPage'],
  sectionsColor: ['#FFF', '#CCC', '#666'],
  scrollOverflow: true,
};

const Site = () => (
  <ReactFullpage
    {...fullpageOptions}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <p>Section 1</p>
            <button
              onClick={() => {
                fullpageApi.moveSectionDown();
              }}
            >
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
          <div className="section">
            <p>Section 3</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

export default Site;
