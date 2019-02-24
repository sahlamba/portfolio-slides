import React from 'react';
import './config/font-awesome-library';
import { getAllSectionData } from './data/bridge';
import Site from './containers/site-builder';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      siteData: {
        siteContext: {},
        section: [],
      },
    };
  }

  componentDidMount() {
    getAllSectionData(/*3000*/) // intended 3 second delay
      .then(siteData => {
        this.setState({ siteData });
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    return <Site siteData={this.state.siteData} />;
  }
}

export default App;
