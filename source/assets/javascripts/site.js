import breakpoints from './vendor/breakpoints';
import navigation from './components/navigation';
import index from './pages/index';
import visionAndPassion from './pages/vision-and-passion';
import careerPath from './pages/career-path';
import familyJourney from './pages/family-journey';
import workingTogether from './pages/working-together';
import thoughtsOnPaper from './pages/thoughts-on-paper';
import contactForm from './pages/contact-form';

const hidePreloader = () => {
  $('#preloader').fadeOut(500, () => {
    $('#cover').fadeOut(1000);
  });
};

$(document).ready(() => {
  const $body = $('body');
  const $bodyId = $body.attr('id');

  breakpoints();
  navigation();

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
    case 'contact-form':
      contactForm();
      break;
    default:
      break;
  }

  // https://stackoverflow.com/questions/23800165/remove-move-the-google-chrome-bottom-left-status-bar-link-address-bar
  $body.on('mouseover', 'a', (element) => {
    const $link = $(element.currentTarget);
    const href = $link.attr('href') || $link.data('href');

    $link.off('click.chrome');
    $link.on('click.chrome', () => {
      window.location.href = href;
    }).attr('data-href', href)
      .css({ cursor: 'pointer' })
      .removeAttr('href');
  });
});

$(window).on('load', () => {
  hidePreloader();
});
