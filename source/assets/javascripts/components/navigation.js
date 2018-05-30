export const navigation = () => {
  const $navHeaderWrapper = $(".navbar-header-wrapper");
  const $navItems = $(".navbar-nav > li");
  const $navbarNavItemWrapper = $(".navbar-nav-item-wrapper");
  const $navDescriptionDefault = $("#navbar-description-default");
  const $navDescriptionDefaultIcon = $("#navbar-description-default-icon");
  const $navDescriptionSet = $("#navbar-description-set");

  Breakpoints.on('sm md lg xl', {
    enter: function() {
      $navHeaderWrapper.off("click");

      $navItems.on('mouseover', function() {
        $navDescriptionDefault.hide();
        $navDescriptionSet.html($(this).find("span").html());
        $navDescriptionSet.fadeIn("fast");
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

  Breakpoints.on('xs', "enter", function() {
    $navDescriptionDefaultIcon.html('');
    console.log('xs');
  });

  Breakpoints.on('sm md', "enter", function() {
    $navDescriptionDefaultIcon.html("");
    $navDescriptionDefaultIcon.append("<i class='fas fa-arrow-circle-down'>");
    FontAwesome.dom.i2svg();
    console.log('sm md');
  });

  Breakpoints.on('lg xl', "enter", function() {
    $navDescriptionDefaultIcon.html("");
    $navDescriptionDefaultIcon.append("<i class='fas fa-arrow-circle-right'>");
    FontAwesome.dom.i2svg();
    console.log('lg xl');
  });
};
