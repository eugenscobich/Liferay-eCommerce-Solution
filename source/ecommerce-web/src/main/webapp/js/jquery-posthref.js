(function($){ 
	$.fn.posthref = function(actionUrl, params) {
		var $form = $('<form style="display: none;"/>');
		$form.attr('method', 'post');
		$form.attr('action', actionUrl);
		$.each(params, function(key, value) {
			var $input = $('<input type="hidden"/>');
			$input.attr('name', key);
			$input.val(value);
			$form.append($input);
		});
		$(this).append($form);
		$form.submit();
	};
})(jQuery);