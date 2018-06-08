"use strict";

// https://stackoverflow.com/questions/47711951/font-awesome-5-bundle-via-npm
import fontawesome from '@fortawesome/fontawesome';
import faAngleDoubleDown from '@fortawesome/fontawesome-free-solid/faAngleDoubleDown';
import faAngleDoubleUp from '@fortawesome/fontawesome-free-solid/faAngleDoubleUp';
import faLightbulb from '@fortawesome/fontawesome-free-solid/faLightbulb';
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart';
import faRoad from '@fortawesome/fontawesome-free-solid/faRoad';
import faEye from '@fortawesome/fontawesome-free-solid/faEye';
import faMapSigns from '@fortawesome/fontawesome-free-solid/faMapSigns';
import faMapMarkerAlt from '@fortawesome/fontawesome-free-solid/faMapMarkerAlt';
import faArrowCircleDown from '@fortawesome/fontawesome-free-solid/faArrowCircleDown';
import faWrench from '@fortawesome/fontawesome-free-solid/faWrench';
import faArrowCircleRight from '@fortawesome/fontawesome-free-solid/faArrowCircleRight';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import faFacebookF from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faEnvelope from '@fortawesome/fontawesome-free-regular/faEnvelope';
// This enables using FontAwesome in CSS pseudo elements
// see: https://fontawesome.com/how-to-use/svg-with-js#pseudo-elements
fontawesome.config.searchPseudoElements = true;
// https://stackoverflow.com/questions/48358529/failed-to-execute-removechild-on-node-with-fontawesome-in-react/48552226#48552226
fontawesome.config.autoReplaceSvg = 'nest'
// Icons should be imported individually to keep bundle size down
fontawesome.library.add(faAngleDoubleDown,
                        faAngleDoubleUp,
                        faLightbulb,
                        faMapSigns,
                        faMapMarkerAlt,
                        faArrowCircleRight,
                        faArrowCircleDown,
                        faLinkedinIn,
                        faWrench,
                        faInstagram,
                        faTwitter,
                        faGithub,
                        faEnvelope,
                        faFacebookF,
                        faRoad,
                        faHeart,
                        faEye);

// If really necessary, entire styles can be loaded instead of specifying individual icons
// import solid from '@fortawesome/fontawesome-pro-solid';
// fontawesome.library.add(solid);

// Execute SVG replacement
fontawesome.dom.i2svg();
