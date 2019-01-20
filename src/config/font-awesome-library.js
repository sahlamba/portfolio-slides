import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  fas,
  faAt,
  faEnvelope,
  faGraduationCap,
  faUniversity,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';

const availableIcons = [
  fab,
  fas,
  faAt,
  faEnvelope,
  faGithub,
  faLinkedin,
  faGraduationCap,
  faUniversity,
  faSchool,
];

library.add(...availableIcons);
