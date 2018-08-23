export default () => {
  const $dataToggleToolTip = $('[data-toggle="tooltip"]');
  const $skyline = $('.skyline');

  $skyline.mouseenter(function () {
    $(this).addClass('rotate-location').delay(5000).queue(function () {
      $(this).removeClass('rotate-location').dequeue();
    });
  });

  $dataToggleToolTip.tooltip();
};
