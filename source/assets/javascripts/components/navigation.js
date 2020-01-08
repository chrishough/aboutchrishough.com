export default () => {
  const $navbarToggler = $('.navbar-toggler');

  Breakpoints.on('xs', {
    enter() {
      $navbarToggler.attr('data-toggle', 'collapse');
      $navbarToggler.on('click', () => {
        if ($('.navbar-toggler-wrapper').find('svg').attr('data-icon') === 'angle-double-down') {
          $('.navbar-toggler-wrapper').find('svg').attr('data-icon', 'angle-double-up');
        } else {
          $('.navbar-toggler-wrapper').find('svg').attr('data-icon', 'angle-double-down');
        }
      });
    },
    leave() {
      $navbarToggler.attr('data-toggle', '');
      $navbarToggler.off('click');
    },
  });

  Breakpoints.on('sm md', 'enter', () => {
    $navbarToggler.attr('data-toggle', '');
  });
};
