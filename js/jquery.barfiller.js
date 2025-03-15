/* Custom Progress Bar (Replaces jquery.barfiller.js) */
(function ($) {
    $.fn.barfiller = function (options) {
        var defaults = {
            barColor: '#16b597',
            tooltip: true,
            duration: 1000,
            animateOnResize: true,
            symbol: "%"
        };
        
        var settings = $.extend(defaults, options);
        var object = $(this);
        var fill = object.find('.fill');
        var toolTip = object.find('.tip');
        var fillPercentage = parseInt(fill.attr('data-percentage')) || 0;

        // Apply initial styles
        fill.css({
            'background': settings.barColor,
            'width': '0%'
        });

        if (settings.tooltip) {
            toolTip.text(fillPercentage + settings.symbol);
            toolTip.css('left', '0%');
        } else {
            toolTip.hide();
        }

        // Animate the progress bar
        setTimeout(() => {
            fill.css({
                'transition': `width ${settings.duration}ms ease-in-out`,
                'width': fillPercentage + '%'
            });
            if (settings.tooltip) {
                toolTip.css({
                    'transition': `left ${settings.duration}ms ease-in-out`,
                    'left': fillPercentage + '%'
                });
            }
        }, 100);
    };
})(jQuery);
