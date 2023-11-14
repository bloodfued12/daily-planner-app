// Declared .container as a jquery element so that it can be accessed to insert the timeblocks
var container = $(".container");

$.each(function () {
    var timeEl = $("<div>");
    var titleEl = $("<h3>");
    timeEl.append(titleEl);
    var time = $.each( function () {
        var count = $("count");
        count = count++;
    }) 
    titleEl.text(count);
    container.append(timeEl);
});

