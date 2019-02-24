import React from 'react';
import { AppBar, Toolbar, List, ListItem } from '@material-ui/core';
import { convertStringToValidId } from './utils';

const styles = {
  _appBar: {
    backgroundColor: '#FFF',
    boxShadow: '0px 3px 12px -6px rgba(0, 0, 0, 0.25)',
  },
  _toolBar: {
    padding: '0 20%',
    display: 'flex',
    justifyContent: 'center',
  },
  _list: {
    padding: 0,
    display: 'flex',
    flexDirection: 'row',
    color: '#333',
  },
  _listItem: {
    width: 'unset',
  },
};

const withAppBar = Component => props => {
  const { siteContext, section } = props.siteData;

  if (siteContext && siteContext.showHeader) {
    return (
      <>
        <AppBar style={styles._appBar}>
          <Toolbar style={styles._toolBar}>
            <List style={styles._list}>
              {section.map(({ config }) => {
                return (
                  <ListItem style={styles._listItem}>
                    <a
                      key={config.tooltip}
                      href={`#${convertStringToValidId(config.tooltip)}`}
                      className="header-link"
                    >
                      {config.tooltip}
                    </a>
                  </ListItem>
                );
              })}
            </List>
          </Toolbar>
        </AppBar>
        {siteContext.style === '1-page' ? <div style={{ height: 64 }} /> : null}
        <Component {...props} />
      </>
    );
  }

  return <Component {...props} />;
};

export default withAppBar;
