export const navigation = () => {
  const $navHeaderWrapper = $(".navbar-header-wrapper");
  const $navItems = $(".navbar-nav > li");
  const $navbarNavItemWrapper = $(".navbar-nav-item-wrapper");
  const $navDescription = $("#navbar-description");
  const $navDescriptionDefaultValue = $navDescription.html();

  $navHeaderWrapper.on('click', () => {
    if($navHeaderWrapper.find('svg').attr('data-icon') === "angle-double-up") {
      $navHeaderWrapper.find('svg').attr('data-icon', "angle-double-down");
    } else {
      $navHeaderWrapper.find('svg').attr('data-icon', "angle-double-up");
    }
  });

  $navItems.on('mouseover', function() {
    $navDescription.html($(this).find("span").html());
  });

  $navbarNavItemWrapper.on('mouseout', function() {
    $navDescription.html($navDescriptionDefaultValue);
  });
};
