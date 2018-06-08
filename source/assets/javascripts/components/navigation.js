export const navigation = () => {
  const $navHeaderWrapper = $(".navbar-header-wrapper");
  const $navItems = $(".navbar-nav > li");
  const $navbarToggler= $(".navbar-toggler");
  const $navbarNavItemWrapper = $(".navbar-nav-item-wrapper");
  const $navDescriptionDefault = $("#navbar-description-default");
  const $navDescriptionDefaultIcon = $("#navbar-description-default-icon");
  const $navDescriptionSet = $("#navbar-description-set");

  Breakpoints.on('xs', {
    enter: function() {
      $navDescriptionDefaultIcon.html('');
      $navbarToggler.attr("data-toggle", "collapse");
      $navHeaderWrapper.on('click', () => {
        if($(".navbar-header-wrapper").find('svg').attr('data-icon') === "angle-double-up") {
          $(".navbar-header-wrapper").find('svg').attr('data-icon', "angle-double-down");
        } else {
          $(".navbar-header-wrapper").find('svg').attr('data-icon', "angle-double-up");
        }
      });
    },
    leave: function() {
      $navbarToggler.attr("data-toggle", "");
      $navHeaderWrapper.off('click');
    }
  });

  Breakpoints.on('sm md', "enter", function() {
    $navbarToggler.attr("data-toggle", "");
    $navDescriptionDefaultIcon.html("");
    $navDescriptionDefaultIcon.append("<i class='fas fa-arrow-circle-down'>");
    FontAwesome.dom.i2svg();
  });

  Breakpoints.on('lg xl', "enter", function() {
    $navDescriptionDefaultIcon.html("");
    $navDescriptionDefaultIcon.append("<i class='fas fa-arrow-circle-right'>");
    FontAwesome.dom.i2svg();
  });

  Breakpoints.on('sm md lg xl', {
    enter: function() {
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
    }
  });
};
