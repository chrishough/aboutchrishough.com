$(document).ready(() => {
  console.log("TEST-SITE-JS");
  console.log("jQuery Version: " + $().jquery);
  console.log("Bootstrap Version: " + $.fn.tooltip.Constructor.VERSION);
});

$(document).ready(() => {
  const $navBarHeader = $(".navbar-header");
  const $navButton = $("#nav-button");
  const $navToggler = $(".navbar-toggler");

  $navBarHeader.on('click', () => {
    if($navToggler.find('svg').attr('data-icon') === "angle-double-up") {
      console.log('a');
      $navToggler.find('svg').attr('data-icon', "angle-double-down");
    } else {
        console.log('b');
      $navToggler.find('svg').attr('data-icon', "angle-double-up");
    }
  });
});
