export default () => {
  const $navHeaderWrapper = $('.navbar-header-wrapper');
  const $navItems = $('.navbar-nav > li');
  const $navbarToggler = $('.navbar-toggler');
  const $navbarNavItemWrapper = $('.navbar-nav-item-wrapper');
  const $navDescriptionDefault = $('#navbar-description-default');
  const $navDescriptionDefaultIcon = $('#navbar-description-default-icon');
  const $navDescriptionSet = $('#navbar-description-set');

  Breakpoints.on('xs', {
    enter() {
      $navDescriptionDefaultIcon.html('');
      $navbarToggler.attr('data-toggle', 'collapse');
      $navHeaderWrapper.on('click', () => {
        if ($('.navbar-header-wrapper').find('svg').attr('data-icon') === 'angle-double-up') {
          $('.navbar-header-wrapper').find('svg').attr('data-icon', 'angle-double-down');
        } else {
          $('.navbar-header-wrapper').find('svg').attr('data-icon', 'angle-double-up');
        }
      });
    },
    leave() {
      $navbarToggler.attr('data-toggle', '');
      $navHeaderWrapper.off('click');
    },
  });

  Breakpoints.on('sm md', 'enter', () => {
    $navbarToggler.attr('data-toggle', '');
    $navDescriptionDefaultIcon.html('');
    $navDescriptionDefaultIcon.append("<i class='fas fa-arrow-circle-down'>");
    FontAwesome.dom.i2svg();
  });

  Breakpoints.on('lg xl xxl xxxl', 'enter', () => {
    $navDescriptionDefaultIcon.html('');
    $navDescriptionDefaultIcon.append("<i class='fas fa-arrow-circle-right'>");
    FontAwesome.dom.i2svg();
  });

  Breakpoints.on('sm md lg xl xxl xxxl', {
    enter() {
      $navItems.on({
        mouseenter: (element) => {
          $navDescriptionDefault.hide();
          $navDescriptionSet.html($(element.currentTarget).find('span').html());
          $navDescriptionSet.fadeIn('fast');
        },
        mouseleave: () => {
          $navDescriptionSet.hide();
          $navDescriptionSet.html('');
          $navDescriptionDefault.show();
        },
      });
    },
    leave() {
      $navItems.off('mouseover');
      $navbarNavItemWrapper.off('mouseout');
    },
  });
};
