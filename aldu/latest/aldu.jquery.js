(function( $ ){
  $.fn.autoload = function( plugin, options, each ) {
    if (typeof options === 'function') {
      each = options;
      options = {};
    }
    this.length && Aldu.CDN.require(plugin, options, function(jq, each) {
      jq.each(each);
    }, [ this, each ]);
  };
})( jQuery );