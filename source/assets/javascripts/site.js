import { breakpoints } from "./vendor/breakpoints";
import { navigation } from "./components/navigation";
import { fontawesome } from '@fortawesome/fontawesome';

$(document).ready(() => {
  const $body = $("body");

  breakpoints();
  navigation();

  $body.on("mouseover", "a", function (e) {
    const $link = $(this);
    const href = $link.attr("href") || $link.data("href");

    $link.off("click.chrome");
    $link.on("click.chrome", function () {
      window.location.href = href;
    })
    .attr("data-href", href)
    .css({cursor: "pointer"})
    .removeAttr("href");
  });
});
