import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { fas, faAt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const availableIcons = [fab, fas, faAt, faEnvelope, faGithub, faLinkedin];

library.add(...availableIcons);

import Site from './containers/site-builder';

const App = () => <Site />;

export default App;
