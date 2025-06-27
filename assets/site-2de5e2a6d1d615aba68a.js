(self.webpackChunk = self.webpackChunk || []).push([ [ 378 ], {
  /***/ 1305: 
  /***/ function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {
    "use strict";
    // ./source/assets/javascripts/vendor/breakpoints.js
    /* harmony default export */ var fontawesome_svg_core = __webpack_require__(7107), faAngleDoubleDown = __webpack_require__(1651), faAngleDoubleUp = __webpack_require__(5894), faLightbulb = __webpack_require__(2882), faHeart = __webpack_require__(3021), faRoad = __webpack_require__(9883), faEye = __webpack_require__(900), faMapSigns = __webpack_require__(649), faMapMarkerAlt = __webpack_require__(2298), faMapMarker = __webpack_require__(1933), faQuestionCircle = __webpack_require__(2033), faArrowCircleRight = __webpack_require__(8388), faSync = __webpack_require__(990), faArrowCircleDown = __webpack_require__(8628), faHandHoldingHeart = __webpack_require__(733), faMicroscope = __webpack_require__(7457), faBrain = __webpack_require__(3765), faDumbbell = __webpack_require__(8276), faChess = __webpack_require__(3017), faPoo = __webpack_require__(3263), faHome = __webpack_require__(2378), faCoffee = __webpack_require__(5781), faGlobe = __webpack_require__(7064), faBook = __webpack_require__(6064), faHandshake = __webpack_require__(6420), faWrench = __webpack_require__(4588), faExclamation = __webpack_require__(5532), faMugHot = __webpack_require__(1679), faTrophy = __webpack_require__(3855), faTwitter = __webpack_require__(2789), faLinkedinIn = __webpack_require__(3574), faLinkedin = __webpack_require__(1198), faFacebookF = __webpack_require__(9100), faInstagram = __webpack_require__(9562), faGithub = __webpack_require__(3827), faPiedPiperAlt = __webpack_require__(8087), faFly = __webpack_require__(7019), faEnvelope = __webpack_require__(6728), faCalendarAlt = __webpack_require__(3707);
    // EXTERNAL MODULE: ./node_modules/@fortawesome/fontawesome-svg-core/index.mjs
        // ./source/assets/javascripts/vendor/fontawesome.js
    fontawesome_svg_core /* library */ .Yv.add(faAngleDoubleDown /* faAngleDoubleDown */ .Wx, faAngleDoubleUp /* faAngleDoubleUp */ .$s, faLightbulb /* faLightbulb */ .rC, faHeart /* faHeart */ .qc, faRoad /* faRoad */ .cO, faEye /* faEye */ .pS, faMapSigns /* faMapSigns */ .kn, faMapMarkerAlt /* faMapMarkerAlt */ .Pc, faMapMarker /* faMapMarker */ .sF, faQuestionCircle /* faQuestionCircle */ .wR, faArrowCircleRight /* faArrowCircleRight */ .vh, faSync /* faSync */ .VN, faArrowCircleDown /* faArrowCircleDown */ .pO, faHandHoldingHeart /* faHandHoldingHeart */ .uU, faMicroscope /* faMicroscope */ .yC, faBrain /* faBrain */ .GQ, faMugHot /* faMugHot */ .ES, faExclamation /* faExclamation */ .bx, faDumbbell /* faDumbbell */ .Vw, faChess /* faChess */ .Q9, faPoo /* faPoo */ ._b, faHome /* faHome */ .v0, faTrophy /* faTrophy */ .iH, faCoffee /* faCoffee */ .eu, faGlobe /* faGlobe */ .Bw, faBook /* faBook */ .LB, faHandshake /* faHandshake */ .Z8, faWrench /* faWrench */ .h6, faTwitter /* faTwitter */ .HQ, faLinkedinIn /* faLinkedinIn */ .B_, faLinkedin /* faLinkedin */ .IA, faFacebookF /* faFacebookF */ .Kj, faInstagram /* faInstagram */ .QV, faGithub /* faGithub */ .Vz, faPiedPiperAlt /* faPiedPiperAlt */ .TW, faFly /* faFly */ .F_, faCalendarAlt /* faCalendarAlt */ .BE, faEnvelope /* faEnvelope */ .y_), 
    // Watch for DOM changes and replace <i> tags with SVGs
    fontawesome_svg_core /* dom */ .tT.watch(), // Also process any existing icons on page load
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", function() {
      fontawesome_svg_core /* dom */ .tT.i2svg();
    }) : 
    // DOM is already loaded
    fontawesome_svg_core /* dom */ .tT.i2svg();
    // ./source/assets/javascripts/components/navigation.js
    /* provided dependency */ var $ = __webpack_require__(2726), pages_$ = __webpack_require__(2726), pages = function() {
      var $personalDataQuotesData = function getQuotes() {
        var json = null;
        return pages_$.ajax({
          async: !1,
          global: !1,
          url: "https://raw.githubusercontent.com/chrishough/aboutchrishough.com/master/source/assets/data/quotes.json",
          dataType: "json",
          success: function success(data) {
            json = data;
          }
        }), json;
      }(), $personalDataQuotes = pages_$("#personal-data-quotes"), $personalDataQuotesText = pages_$("#personal-data-quotes-text"), $personalDataQuotesAuthor = pages_$("#personal-data-quotes-author"), $personalDataQuotesProgressBar = pages_$("#personal-data-quotes-progress-bar"), $personalDataQuotePointer = 0, updateQuoteValues = function updateQuoteValues() {
        var currentItem = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : $personalDataQuotePointer;
        $personalDataQuotesText.html(function trimQuote(quote) {
          if (pages_$.trim(quote).length > 250) {
            var $newStr = quote.substring(0, quote.lastIndexOf(" ", 250)), $removedStr = quote.substring($newStr.length, pages_$.trim(quote).length);
            return "".concat($newStr, '... <a href="javascript:void(0);" id="personal-data-quotes-text-read-more">Read More</a>') + '<span id="personal-data-quotes-more-text">'.concat($removedStr, "</span>");
          }
          return quote;
        }($personalDataQuotesData[currentItem].quote)), $personalDataQuotesAuthor.html($personalDataQuotesData[currentItem].author), 
        function verifyReadMore() {
          pages_$("#personal-data-quotes-text-read-more").click(function() {
            pages_$(void 0).siblings("#personal-data-quotes-more-text").contents().unwrap(), 
            pages_$(void 0).remove(), $personalDataQuotesText.text($personalDataQuotesText.text().replace("...", " "));
          });
        }();
      }, triggerProgressBar = function triggerProgressBar(callback) {
        var $currentProgress = 0, interval = setInterval(function() {
          (function updateProgressBar(currentProgress) {
            $personalDataQuotesProgressBar.css("width", "".concat(currentProgress, "%")).attr("aria-valuenow", currentProgress);
          })($currentProgress += 10), $currentProgress >= 100 && (clearInterval(interval), 
          callback());
        }, 2e3);
      }, triggerUpdateQuote = function triggerUpdateQuote() {
        $personalDataQuotePointer === $personalDataQuotesData.length - 1 ? $personalDataQuotePointer = 0 : $personalDataQuotePointer += 1, 
        $personalDataQuotes.fadeOut(500, function() {
          updateQuoteValues($personalDataQuotePointer), $personalDataQuotes.fadeIn(100), triggerProgressBar(function() {
            triggerUpdateQuote();
          });
        });
      };
      !function shuffleQuoteArray() {
        for (var i = $personalDataQuotesData.length - 1; i > 0; i -= 1) {
          var j = Math.floor(Math.random() * (i + 1)), _ref = [ $personalDataQuotesData[j], $personalDataQuotesData[i] ];
          $personalDataQuotesData[i] = _ref[0], $personalDataQuotesData[j] = _ref[1];
        }
      }(), updateQuoteValues();
      pages_$("#video-background-video").attr("src", "/assets/images/backgrounds/bungee.mp4"), 
      pages_$("#video-background").get(0).load(), Breakpoints.on("lg xl xxl xxxl", {
        enter: function enter() {
          0 === pages_$("#video-background-video").attr("src").trim().length && (pages_$("#video-background-video").attr("src", "/assets/images/backgrounds/bungee.mp4"), 
          pages_$("#video-background").get(0).load());
        },
        leave: function leave() {
          pages_$("#video-background-video").attr("src", "");
        }
      }), Breakpoints.on("xs sm md", "enter", function() {
        triggerProgressBar(function() {
          triggerUpdateQuote();
        });
      });
    }, family_journey_$ = __webpack_require__(2726), site_$ = __webpack_require__(2726);
    /* harmony default export */    site_$(document).ready(function() {
      var $navbarToggler, $bodyId = site_$("body").attr("id");
      switch (Breakpoints({
        xs: {
          min: 0,
          max: 576
        },
        minimium: {
          min: 350,
          max: 576
        },
        transition: {
          min: 450,
          max: 576
        },
        sm: {
          min: 576,
          max: 768
        },
        md: {
          min: 768,
          max: 992
        },
        lg: {
          min: 992,
          max: 1200
        },
        maximum: {
          min: 1e3,
          max: 1200
        },
        xl: {
          min: 1200,
          max: 1800
        },
        xxl: {
          min: 1800,
          max: 2450
        },
        xxxl: {
          min: 2450,
          max: 1 / 0
        }
      }), $navbarToggler = $(".navbar-toggler"), Breakpoints.on("xs", {
        enter: function enter() {
          $navbarToggler.attr("data-toggle", "collapse"), $navbarToggler.on("click", function() {
            "angle-double-down" === $(".navbar-toggler-wrapper").find("svg").attr("data-icon") ? $(".navbar-toggler-wrapper").find("svg").attr("data-icon", "angle-double-up") : $(".navbar-toggler-wrapper").find("svg").attr("data-icon", "angle-double-down");
          });
        },
        leave: function leave() {
          $navbarToggler.attr("data-toggle", ""), $navbarToggler.off("click");
        }
      }), Breakpoints.on("sm md", "enter", function() {
        $navbarToggler.attr("data-toggle", "");
      }), $bodyId) {
       case "index":
        pages();
        break;

       case "vision-and-passion":
       case "career-path":
       case "working-together":
       case "thoughts-on-paper":
       default:
        break;

       case "family-journey":
        family_journey_$(".skyline").mouseenter(function() {
          family_journey_$(this).addClass("rotate-location").delay(5e3).queue(function() {
            family_journey_$(this).removeClass("rotate-location").dequeue();
          });
        });
      }
    }), site_$(window).on("load", function() {
      !function hidePreloader() {
        site_$("#preloader").fadeOut(500, function() {
          site_$("#cover").fadeOut(1e3);
        });
      }();
    });
  },
  /***/ 1597: 
  /***/ function(module) {
    module.exports = "/assets/site-a05b97bfbb11b5391b085d6187e881cb.css";
    /***/  }
}, 
/******/ function(__webpack_require__) {
  // webpackRuntimeModules
  /******/ var __webpack_exec__ = function(moduleId) {
    return __webpack_require__(__webpack_require__.s = moduleId);
  }
  /******/;
  __webpack_exec__(1597), __webpack_exec__(1305);
} ]);
//# sourceMappingURL=site-2de5e2a6d1d615aba68a.js.map