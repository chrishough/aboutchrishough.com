$(document).ready(() => {
  const $navBarHeader = $(".navbar-header");
  const $navButton = $("#nav-button");
  const $navToggler = $(".navbar-toggler");

  $navBarHeader.on('click', () => {
    if($navToggler.find('svg').attr('data-icon') === "angle-double-up") {
      $navToggler.find('svg').attr('data-icon', "angle-double-down");
    } else {
      $navToggler.find('svg').attr('data-icon', "angle-double-up");
    }
  });
});
