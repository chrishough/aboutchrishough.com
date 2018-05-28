export const navigation = () => {
  const $navHeaderWrapper = $(".navbar-header-wrapper");
  const $navItems = $(".navbar-nav > li");
  const $navbarNavItemWrapper = $(".navbar-nav-item-wrapper");
  const $navDescriptionDefault = $("#navbar-description-default");
  const $navDescriptionSet = $("#navbar-description-set");

  Breakpoints.on('sm md lg xl', {
    enter: function() {
      $navHeaderWrapper.off("click");

      $navItems.on('mouseover', function() {
        $navDescriptionDefault.hide();
        $navDescriptionSet.html($(this).find("span").html());
        $navDescriptionSet.fadeIn();
      });

      $navbarNavItemWrapper.on('mouseout', function() {
        $navDescriptionSet.hide();
        $navDescriptionSet.html('');
        $navDescriptionDefault.show();
      });
    },
    leave: function() {
      $navItems.off("mouseover");
      $navbarNavItemWrapper.off("mouseout");

      $navHeaderWrapper.on('click', () => {
        if($navHeaderWrapper.find('svg').attr('data-icon') === "angle-double-up") {
          $navHeaderWrapper.find('svg').attr('data-icon', "angle-double-down");
        } else {
          $navHeaderWrapper.find('svg').attr('data-icon', "angle-double-up");
        }
      });
    }
  });
};
