"use strict";

// https://stackoverflow.com/questions/47711951/font-awesome-5-bundle-via-npm
import fontawesome from '@fortawesome/fontawesome';
import faFacebookSquare from '@fortawesome/fontawesome-free-brands/faFacebookSquare';
import faPhoneSquare from '@fortawesome/fontawesome-free-solid/faPhoneSquare';

// This enables using FontAwesome in CSS pseudo elements
// see: https://fontawesome.com/how-to-use/svg-with-js#pseudo-elements
fontawesome.config.searchPseudoElements = true;

// Icons should be imported individually to keep bundle size down
fontawesome.library.add(faFacebookSquare, faPhoneSquare);

// If really necessary, entire styles can be loaded instead of specifying individual icons
// import solid from '@fortawesome/fontawesome-pro-solid';
// fontawesome.library.add(solid);

// Execute SVG replacement
fontawesome.dom.i2svg();
