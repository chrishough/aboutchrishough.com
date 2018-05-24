export const navigation = () => {
  const $navHeaderWrapper = $(".navbar-header-wrapper");
  const $navItems = $(".navbar-nav > li");
  const $navDescription = $("#nav-description");

  $navHeaderWrapper.on('click', () => {
    if($navHeaderWrapper.find('svg').attr('data-icon') === "angle-double-up") {
      $navHeaderWrapper.find('svg').attr('data-icon', "angle-double-down");
    } else {
      $navHeaderWrapper.find('svg').attr('data-icon', "angle-double-up");
    }
  });

  // $navItems.hover(
  //   function() {
  //     $navDescription.html($(this).find("span").html());
  //     $navDescription.stop(true,true).fadeIn("slow");
  //   }, function() {
  //     $navDescription.stop(true,true).fadeOut();
  //     $navDescription.html('&nbsp;');
  //   }
  // );
};
