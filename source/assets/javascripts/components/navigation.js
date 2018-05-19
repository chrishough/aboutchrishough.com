export const navigation = () => {
  const $navHeaderWrapper = $(".navbar-header-wrapper");

  $navHeaderWrapper.on('click', () => {
    if($navHeaderWrapper.find('svg').attr('data-icon') === "angle-double-up") {
      $navHeaderWrapper.find('svg').attr('data-icon', "angle-double-down");
    } else {
      $navHeaderWrapper.find('svg').attr('data-icon', "angle-double-up");
    }
  });
};
