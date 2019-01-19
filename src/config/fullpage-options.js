const fullpageOptions = {
  licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
  navigation: true,
  navigationPosition: 'left',
  // navigationTooltips: ['First Page', 'Second Page'],
  // anchors: ['firstPage', 'secondPage'],
  // sectionsColor: ['#FFF', '#CCC'],
  scrollOverflow: true,
};

const getFullpageOptionsConfig = () => ({ ...fullpageOptions });

const DEFAULT_COLOR = '#FAFBFC';

export { getFullpageOptionsConfig, DEFAULT_COLOR };
