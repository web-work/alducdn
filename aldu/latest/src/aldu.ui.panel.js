Aldu.UI.Panel = {
  init : function(context) {
    Aldu.ready(function() {
      $('.aldu-ui-panel').each(function(i, panel) {
        var status = $(panel).data('status');
        var height = $(panel).outerHeight(true);
        var parent = $(panel).parent();
        switch (status) {
        case 'off':
          parent.animate({
            'height' : "0px"
          });
          break;
        case 'on':
        default:
          parent.animate({
            'height' : height + "px"
          });
        }
        $(panel).css('position', 'fixed');
        $('a.toggle', panel).click(function() {
          $(this).toggleClass('toggle-active');
          var shortcuts = $('.aldu-core-view-shortcuts');
          var status = shortcuts.data('status');
          var height = $(this).outerHeight(true);
          switch (status) {
          case 'off':
            $(panel).parent().animate({
              height : '+=' + height
            });
            shortcuts.slideDown();
            status = 'on';
            break;
          case 'on':
          default:
            $(panel).parent().animate({
              height : '-=' + height
            });
            shortcuts.slideUp();
            status = 'off';
            break;
          }
          $(shortcuts).data('status', status);
        });
      });
    });
  }
};
