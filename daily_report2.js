(function (f) {
  if (window.jQuery && jQuery().jquery > '1.6') {
    f(jQuery)
  } else {
    (function (d, f, s) {
      s = d.createElement('script');
      s.src = '//goo.gl/N6zv6e';
      s.onload = function () {
        f(jQuery.noConflict(1))
      };
      d.body.appendChild(s)
    })(document, f)
  }
})
(function ($) {
  var dailyText = "";

  $('.L1Ysrb').each(function(oneday) {
    var timeList = [];
    var event = [];
    dailyText += "■\n";
    $(this).find('.taTyDe').each(function () {
      if ($(this).find('.vXnnM').text().indexOf('～') != -1) {
        var time = $(this).find('.vXnnM').text().split('～');
        if (new Date('2017-1-1 ' + time[0]).getTime() >= new Date('2017-1-1 9:30').getTime() && new Date('2017-1-1 ' + time[1]).getTime() <= new Date('2017-1-1 20:00').getTime()) {
          timeList.push($(this).find('.vXnnM').text());
          event.push($(this).find('.NlL62b').text());
        }
      } else {
        timeList.push($(this).find('.vXnnM').text());
        event.push($(this).find('.NlL62b').text());
      }
    });
    $.each(timeList, function(index, roop_t) {
      dailyText += roop_t + " " + event[index] + "\n";
    });
    dailyText += "\n";
  });

  $('.AOL3Kb').before('<textarea id="daily_text" style="font-size: 15px; width: 40%;">' + dailyText + '</textarea>');
})
