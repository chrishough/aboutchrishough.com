import breakpoints from './vendor/breakpoints';
import index from './pages/index';
import visionAndPassion from './pages/vision-and-passion';
import careerPath from './pages/career-path';
import familyJourney from './pages/family-journey';
import workingTogether from './pages/working-together';
import thoughtsOnPaper from './pages/thoughts-on-paper';
import contactMe from './pages/contact-me';

const hidePreloader = () => {
  $('#preloader').fadeOut(500, () => {
    $('#cover').fadeOut(1000);
  });
};

$(document).ready(() => {
  const $body = $('body');
  const $bodyId = $body.attr('id');

  breakpoints();

  switch ($bodyId) {
    case 'index':
      index();
      break;
    case 'vision-and-passion':
      visionAndPassion();
      break;
    case 'career-path':
      careerPath();
      break;
    case 'family-journey':
      familyJourney();
      break;
    case 'working-together':
      workingTogether();
      break;
    case 'thoughts-on-paper':
      thoughtsOnPaper();
      break;
    case 'contact-me':
      contactMe();
      break;
    default:
      break;
  }
});

$(window).on('load', () => {
  hidePreloader();
});
