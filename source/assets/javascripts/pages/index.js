export default () => {
  const getQuotes = () => {
    let json = null;
    $.ajax({
      async: false,
      global: false,
      url: 'https://raw.githubusercontent.com/chrishough/aboutchrishough.com/master/source/assets/data/quotes.json',
      dataType: 'json',
      success(data) {
        json = data;
      },
    });
    return json;
  };

  const $personalDataQuotesData = getQuotes();
  const $personalDataQuotes = $('#personal-data-quotes');
  const $personalDataQuotesText = $('#personal-data-quotes-text');
  const $personalDataQuotesAuthor = $('#personal-data-quotes-author');
  const $personalDataQuotesProgressBar = $('#personal-data-quotes-progress-bar');

  let $personalDataQuotePointer = 0;

  const $personalDataQuotesMaxLength = 250;

  const shuffleQuoteArray = () => {
    for (let i = $personalDataQuotesData.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));
      [$personalDataQuotesData[i], $personalDataQuotesData[j]] = [$personalDataQuotesData[j], $personalDataQuotesData[i]]; // eslint-disable-line no-param-reassign
    }
  };

  const trimQuote = (quote) => {
    if ($.trim(quote).length > $personalDataQuotesMaxLength) {
      const $newStr = quote.substring(0, quote.lastIndexOf(' ', $personalDataQuotesMaxLength));
      const $removedStr = quote.substring($newStr.length, $.trim(quote).length);
      return `${$newStr
      }... <a href="javascript:void(0);" id="personal-data-quotes-text-read-more">Read More</a>`
              + `<span id="personal-data-quotes-more-text">${$removedStr}</span>`;
    }
    return quote;
  };

  const verifyReadMore = () => {
    $('#personal-data-quotes-text-read-more').click(() => {
      $(this).siblings('#personal-data-quotes-more-text').contents().unwrap();
      $(this).remove();

      $personalDataQuotesText.text($personalDataQuotesText.text().replace('...', ' '));
    });
  };

  const updateQuoteValues = (currentItem = $personalDataQuotePointer) => {
    $personalDataQuotesText.html(trimQuote($personalDataQuotesData[currentItem].quote));
    $personalDataQuotesAuthor.html($personalDataQuotesData[currentItem].author);
    verifyReadMore();
  };

  const updateProgressBar = (currentProgress) => {
    $personalDataQuotesProgressBar.css('width', `${currentProgress}%`)
      .attr('aria-valuenow', currentProgress);
  };

  const triggerProgressBar = (callback) => {
    let $currentProgress = 0;
    const interval = setInterval(() => {
      $currentProgress += 10;

      updateProgressBar($currentProgress);

      if ($currentProgress >= 100) {
        clearInterval(interval);
        callback();
      }
    }, 2000);
  };

  const triggerUpdateQuote = () => {
    if ($personalDataQuotePointer === $personalDataQuotesData.length - 1) {
      $personalDataQuotePointer = 0;
    } else {
      $personalDataQuotePointer += 1;
    }

    $personalDataQuotes.fadeOut(500, () => {
      updateQuoteValues($personalDataQuotePointer);
      $personalDataQuotes.fadeIn(100);
      triggerProgressBar(() => {
        triggerUpdateQuote();
      });
    });
  };

  shuffleQuoteArray();

  updateQuoteValues();

  const $videoBackgroundVideo = '/assets/images/backgrounds/bungee.mp4';
  $('#video-background-video').attr('src', $videoBackgroundVideo);
  $('#video-background').get(0).load();

  Breakpoints.on('lg xl xxl xxxl', {
    enter() {
      if ($('#video-background-video').attr('src').trim().length === 0) {
        $('#video-background-video').attr('src', $videoBackgroundVideo);
        $('#video-background').get(0).load();
      }
    },

    leave() {
      $('#video-background-video').attr('src', '');
    },
  });

  Breakpoints.on('xs sm md', 'enter', () => {
    triggerProgressBar(() => {
      triggerUpdateQuote();
    });
  });
};
