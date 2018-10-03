export default () => {
  const $navHeaderWrapper = $('.navbar-header-wrapper');
  const $navItems = $('.navbar-nav > li');
  const $navbarToggler = $('.navbar-toggler');
  const $navbarNavItemWrapper = $('.navbar-nav-item-wrapper');
  const $navDescriptionDefault = $('#navbar-description-default');
  const $navDescriptionDefaultIcon = $('#navbar-description-default-icon');
  const $navDescriptionSet = $('#navbar-description-set');
  let $navDescriptionValue = '';

  const setNavDescription = () => {
    if ($('.navbar-nav > li').hasClass('active') === true) {
      $navDescriptionValue = $('.navbar-nav > li.active').find('.nav-description').html();
      $navDescriptionDefault.hide();
      $navDescriptionSet.html($navDescriptionValue);
      $navDescriptionSet.append("&nbsp;<i class='fab fa-pied-piper-alt'>");
    }
  };

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
  });

  Breakpoints.on('lg xl xxl xxxl', 'enter', () => {
    $navDescriptionDefaultIcon.html('');
    $navDescriptionDefaultIcon.append("<i class='fas fa-arrow-circle-right'>");
  });

  Breakpoints.on('sm md lg xl xxl xxxl', {
    enter() {
      setNavDescription();

      $navItems.on({
        mouseenter: (element) => {
          $navDescriptionDefault.hide();
          $navDescriptionSet.html($(element.currentTarget).find('.nav-description').html());
          $navDescriptionSet.append("&nbsp;<i class='fab fa-pied-piper-alt'>");
          $navDescriptionSet.fadeIn('fast');
        },
        mouseleave: () => {
          if ($navDescriptionValue.trim().length === 0) {
            $navDescriptionSet.hide();
            $navDescriptionSet.html($navDescriptionValue);
            $navDescriptionDefault.show();
          } else {
            $navDescriptionSet.html($navDescriptionValue);
            $navDescriptionSet.append("&nbsp;<i class='fab fa-pied-piper-alt'>");
          }
        },
      });
    },
    leave() {
      $navItems.off('mouseover');
      $navbarNavItemWrapper.off('mouseout');
    },
  });
};
