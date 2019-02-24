import { DEFAULT_COLOR } from '../config/fullpage-options';
import { getTemplate } from '../templates/provider';
import { convertStringToValidId } from '../containers/utils';

const getNavigationTooltips = sectionList =>
  sectionList.length > 0
    ? sectionList.map(section =>
        section.config && section.config.tooltip ? section.config.tooltip : ''
      )
    : [];

const getAnchors = sectionList =>
  sectionList.length > 0
    ? sectionList.map(section =>
        section.config && section.config.tooltip
          ? convertStringToValidId(section.config.tooltip)
          : `${section.order}`
      )
    : [];

const getSectionsColor = sectionList =>
  sectionList.length > 0
    ? sectionList.map(section =>
        section.config && section.config.color
          ? section.config.color
          : DEFAULT_COLOR
      )
    : [];

const getFullpageOption = optionName => {
  switch (optionName) {
    case 'navigationTooltips':
      return getNavigationTooltips;
    case 'anchors':
      return getAnchors;
    case 'sectionsColor':
      return getSectionsColor;
    default:
      return null;
  }
};

const buildSectionViews = (sectionList, siteContext) =>
  sectionList.length > 0
    ? sectionList.map(templateData => {
        const { template, order, config, data } = templateData;
        if (template) {
          return getTemplate(template, order, {
            config,
            data,
            order,
            siteContext,
          });
        }
        return getTemplate('empty', templateData.order);
      })
    : getTemplate('empty');

export { buildSectionViews, getFullpageOption };
