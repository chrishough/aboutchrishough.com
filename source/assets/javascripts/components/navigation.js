export let navigation = () => {
  let $navHeaderWrapper = $(".navbar-header-wrapper");

  $navHeaderWrapper.on('click', () => {
    console.log('TESTA');
    if($navHeaderWrapper.find('svg').attr('data-icon') === "angle-double-up") {
      $navHeaderWrapper.find('svg').attr('data-icon', "angle-double-down");
      console.log('TESTB');
    } else {
      $navHeaderWrapper.find('svg').attr('data-icon', "angle-double-up");
      console.log('TESTC');
    }
  });
};
