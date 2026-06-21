$(document).ready(function () {

    // Campus News
    $.getJSON('data/cnews.json', function (data) {

        data.news.reverse();

        $.each(data.news, function (i, f) {

            var newsCard =
                '<li class="news-card">' +
                '<div class="news-date">' + f.date + '</div>' +
                '<div class="news-msg">' +
                f.msg +
                ' <span class="new-badge">NEW</span>' +
                '</div>' +
                '</li>';

            $('#campusNews').append(newsCard);

        });

    });

    // Event News
    $.getJSON('data/eventnews.json', function (data) {

        $.each(data.news, function (i, f) {

            var eventCard =
                '<li class="event-card">' +
                '<span class="event-date">' + f.date + '</span>' +
                '<span class="event-msg">' + f.msg + '</span>' +
                '</li>';

            $('#eventNews').append(eventCard);

        });

    });

    // Notice Board
    $.getJSON('data/nboard.json', function (data) {

        $.each(data.news, function (i, f) {

            var noticeCard =
                '<li class="notice-card">' +
                '<i class="fas fa-bullhorn"></i> ' +
                f.msg +
                '</li>';

            $('#nboard').append(noticeCard);

        });

    });

});
