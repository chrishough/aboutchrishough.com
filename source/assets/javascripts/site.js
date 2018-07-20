import breakpoints from './vendor/breakpoints';

import navigation from './components/navigation';

import index from './pages/index';

$(document).ready(() => {
  const $body = $('body');

  breakpoints();
  navigation();
  index();

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
