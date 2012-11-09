/** 
 * easyloader - jQuery EasyUI 
 *  
 * Licensed under the GPL terms 
 * To use it on other terms please contact us 
 * 
 * Copyright(c) 2009-2012 stworthy [ stworthy@gmail.com ]  
 *  
 */ 
(function(){ 
	var modules = { 
		draggable:{ 
			js:'jquery.draggable.js' 
		}, 
		droppable:{ 
			js:'jquery.droppable.js' 
		}, 
		resizable:{ 
			js:'jquery.resizable.js' 
		}, 
		linkbutton:{ 
			js:'jquery.linkbutton.js', 
			css:'linkbutton.css' 
		}, 
		progressbar:{ 
			js:'jquery.progressbar.js', 
			css:'progressbar.css' 
		}, 
		pagination:{ 
			js:'jquery.pagination.js', 
			css:'pagination.css', 
			dependencies:['linkbutton'] 
		}, 
		datagrid:{ 
			js:'jquery.datagrid.js', 
			css:'datagrid.css', 
			dependencies:['panel','resizable','linkbutton','pagination'] 
		}, 
		treegrid:{ 
			js:'jquery.treegrid.js', 
			css:'tree.css', 
			dependencies:['datagrid'] 
		}, 
		propertygrid:{ 
			js:'jquery.propertygrid.js', 
			css:'propertygrid.css', 
			dependencies:['datagrid'] 
		}, 
		panel: { 
			js:'jquery.panel.js', 
			css:'panel.css' 
		}, 
		window:{ 
			js:'jquery.window.js', 
			css:'window.css', 
			dependencies:['resizable','draggable','panel'] 
		}, 
		dialog:{ 
			js:'jquery.dialog.js', 
			css:'dialog.css', 
			dependencies:['linkbutton','window'] 
		}, 
		messager:{ 
			js:'jquery.messager.js', 
			css:'messager.css', 
			dependencies:['linkbutton','window','progressbar'] 
		}, 
		layout:{ 
			js:'jquery.layout.js', 
			css:'layout.css', 
			dependencies:['resizable','panel'] 
		}, 
		form:{ 
			js:'jquery.form.js' 
		}, 
		menu:{ 
			js:'jquery.menu.js', 
			css:'menu.css' 
		}, 
		tabs:{ 
			js:'jquery.tabs.js', 
			css:'tabs.css', 
			dependencies:['panel','linkbutton'] 
		}, 
		splitbutton:{ 
			js:'jquery.splitbutton.js', 
			css:'splitbutton.css', 
			dependencies:['linkbutton','menu'] 
		}, 
		menubutton:{ 
			js:'jquery.menubutton.js', 
			css:'menubutton.css', 
			dependencies:['linkbutton','menu'] 
		}, 
		accordion:{ 
			js:'jquery.accordion.js', 
			css:'accordion.css', 
			dependencies:['panel'] 
		}, 
		calendar:{ 
			js:'jquery.calendar.js', 
			css:'calendar.css' 
		}, 
		combo:{ 
			js:'jquery.combo.js', 
			css:'combo.css', 
			dependencies:['panel','validatebox'] 
		}, 
		combobox:{ 
			js:'jquery.combobox.js', 
			css:'combobox.css', 
			dependencies:['combo'] 
		}, 
		combotree:{ 
			js:'jquery.combotree.js', 
			dependencies:['combo','tree'] 
		}, 
		combogrid:{ 
			js:'jquery.combogrid.js', 
			dependencies:['combo','datagrid'] 
		}, 
		validatebox:{ 
			js:'jquery.validatebox.js', 
			css:'validatebox.css' 
		}, 
		numberbox:{ 
			js:'jquery.numberbox.js', 
			dependencies:['validatebox'] 
		}, 
		searchbox:{ 
			js:'jquery.searchbox.js', 
			css:'searchbox.css', 
			dependencies:['menubutton'] 
		}, 
		spinner:{ 
			js:'jquery.spinner.js', 
			css:'spinner.css', 
			dependencies:['validatebox'] 
		}, 
		numberspinner:{ 
			js:'jquery.numberspinner.js', 
			dependencies:['spinner','numberbox'] 
		}, 
		timespinner:{ 
			js:'jquery.timespinner.js', 
			dependencies:['spinner'] 
		}, 
		tree:{ 
			js:'jquery.tree.js', 
			css:'tree.css', 
			dependencies:['draggable','droppable'] 
		}, 
		datebox:{ 
			js:'jquery.datebox.js', 
			css:'datebox.css', 
			dependencies:['calendar','combo'] 
		}, 
		datetimebox:{ 
			js:'jquery.datetimebox.js', 
			dependencies:['datebox','timespinner'] 
		}, 
		slider:{ 
			js:'jquery.slider.js', 
			dependencies:['draggable'] 
		}, 
		parser:{ 
			js:'jquery.parser.js' 
		} 
	}; 
	 
	var locales = { 
		'af':'easyui-lang-af.js', 
		'bg':'easyui-lang-bg.js', 
		'ca':'easyui-lang-ca.js', 
		'cs':'easyui-lang-cs.js', 
		'cz':'easyui-lang-cz.js', 
		'da':'easyui-lang-da.js', 
		'de':'easyui-lang-de.js', 
		'en':'easyui-lang-en.js', 
		'fr':'easyui-lang-fr.js', 
		'nl':'easyui-lang-nl.js', 
		'zh_CN':'easyui-lang-zh_CN.js', 
		'zh_TW':'easyui-lang-zh_TW.js' 
	}; 
	 
	var queues = {}; 
	 
	function loadJs(url, callback){ 
		var done = false; 
		var script = document.createElement('script'); 
		script.type = 'text/javascript'; 
		script.language = 'javascript'; 
		script.src = url; 
		script.onload = script.onreadystatechange = function(){ 
			if (!done && (!script.readyState || script.readyState == 'loaded' || script.readyState == 'complete')){ 
				done = true; 
				script.onload = script.onreadystatechange = null; 
				if (callback){ 
					callback.call(script); 
				} 
			} 
		} 
		document.getElementsByTagName("head")[0].appendChild(script); 
	} 
	 
	function runJs(url, callback){ 
		loadJs(url, function(){ 
			document.getElementsByTagName("head")[0].removeChild(this); 
			if (callback){ 
				callback(); 
			} 
		}); 
	} 
	 
	function loadCss(url, callback){ 
		var link = document.createElement('link'); 
		link.rel = 'stylesheet'; 
		link.type = 'text/css'; 
		link.media = 'screen'; 
		link.href = url; 
		document.getElementsByTagName('head')[0].appendChild(link); 
		if (callback){ 
			callback.call(link); 
		} 
	} 
	 
	function loadSingle(name, callback){ 
		queues[name] = 'loading'; 
		 
		var module = modules[name]; 
		var jsStatus = 'loading'; 
		var cssStatus = (easyloader.css && module['css']) ? 'loading' : 'loaded'; 
		 
		if (easyloader.css && module['css']){ 
			if (/^http/i.test(module['css'])){ 
				var url = module['css']; 
			} else { 
				var url = easyloader.base + 'themes/' + easyloader.theme + '/' + module['css']; 
			} 
			loadCss(url, function(){ 
				cssStatus = 'loaded'; 
				if (jsStatus == 'loaded' && cssStatus == 'loaded'){ 
					finish(); 
				} 
			}); 
		} 
		 
		if (/^http/i.test(module['js'])){ 
			var url = module['js']; 
		} else { 
			var url = easyloader.base + 'plugins/' + module['js']; 
		} 
		loadJs(url, function(){ 
			jsStatus = 'loaded'; 
			if (jsStatus == 'loaded' && cssStatus == 'loaded'){ 
				finish(); 
			} 
		}); 
		 
		function finish(){ 
			queues[name] = 'loaded'; 
			easyloader.onProgress(name); 
			if (callback){ 
				callback(); 
			} 
		} 
	} 
	 
	function loadModule(name, callback){ 
		var mm = []; 
		var doLoad = false; 
		 
		if (typeof name == 'string'){ 
			add(name); 
		} else { 
			for(var i=0; i<name.length; i++){ 
				add(name[i]); 
			} 
		} 
		 
		function add(name){ 
			if (!modules[name]) return; 
			var d = modules[name]['dependencies']; 
			if (d){ 
				for(var i=0; i<d.length; i++){ 
					add(d[i]); 
				} 
			} 
			mm.push(name); 
		} 
		 
		function finish(){ 
			if (callback){ 
				callback(); 
			} 
			easyloader.onLoad(name); 
		} 
		 
		var time = 0; 
		function loadMm(){ 
			if (mm.length){ 
				var m = mm[0];	// the first module 
				if (!queues[m]){ 
					doLoad = true; 
					loadSingle(m, function(){ 
						mm.shift(); 
						loadMm(); 
					}); 
				} else if (queues[m] == 'loaded'){ 
					mm.shift(); 
					loadMm(); 
				} else { 
					if (time < easyloader.timeout){ 
						time += 10; 
						setTimeout(arguments.callee, 10); 
					} 
				} 
			} else { 
				if (easyloader.locale && doLoad == true && locales[easyloader.locale]){ 
					var url = easyloader.base + 'locale/' + locales[easyloader.locale]; 
					runJs(url, function(){ 
						finish(); 
					}); 
				} else { 
					finish(); 
				} 
			} 
		} 
		 
		loadMm(); 
	} 
	 
	easyloader = { 
		modules:modules, 
		locales:locales, 
		 
		base:'.', 
		theme:'default', 
		css:true, 
		locale:null, 
		timeout:2000, 
	 
		load: function(name, callback){ 
			if (/\.css$/i.test(name)){ 
				if (/^http/i.test(name)){ 
					loadCss(name, callback); 
				} else { 
					loadCss(easyloader.base + name, callback); 
				} 
			} else if (/\.js$/i.test(name)){ 
				if (/^http/i.test(name)){ 
					loadJs(name, callback); 
				} else { 
					loadJs(easyloader.base + name, callback); 
				} 
			} else { 
				loadModule(name, callback); 
			} 
		}, 
		 
		onProgress: function(name){}, 
		onLoad: function(name){} 
	}; 
 
	var scripts = document.getElementsByTagName('script'); 
	for(var i=0; i<scripts.length; i++){ 
		var src = scripts[i].src; 
		if (!src) continue; 
		var m = src.match(/easyloader\.js(\W|$)/i); 
		if (m){ 
			easyloader.base = src.substring(0, m.index); 
		} 
	} 
 
	window.using = easyloader.load; 
	 
	if (window.jQuery){ 
		jQuery(function(){ 
			easyloader.load('parser', function(){ 
				jQuery.parser.parse(); 
			}); 
		}); 
	} 
	 
})();/** 
 * validatebox - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 */ 
(function($){ 
	 
	function init(target){ 
		$(target).addClass('validatebox-text'); 
	} 
	 
	/** 
	 * destroy the box, including it's tip object. 
	 */ 
	function destroyBox(target){ 
		var tip = $.data(target, 'validatebox').tip; 
		if (tip){ 
			tip.remove(); 
		} 
		$(target).remove(); 
	} 
	 
	function bindEvents(target){ 
		var box = $(target); 
		var tip = $.data(target, 'validatebox').tip; 
		 
		var time = null; 
		box.unbind('.validatebox').bind('focus.validatebox', function(){ 
			if (time){ 
				clearInterval(time); 
			} 
			time = setInterval(function(){ 
				validate(target); 
			}, 200); 
		}).bind('blur.validatebox', function(){ 
			clearInterval(time); 
			time = null; 
			hideTip(target); 
		}).bind('mouseover.validatebox', function(){ 
			if (box.hasClass('validatebox-invalid')){ 
				showTip(target); 
			} 
		}).bind('mouseout.validatebox', function(){ 
			hideTip(target); 
		}); 
	} 
	 
	/** 
	 * show tip message. 
	 */ 
	function showTip(target){ 
		var box = $(target); 
		var msg = $.data(target, 'validatebox').message; 
		var tip = $.data(target, 'validatebox').tip; 
		if (!tip){ 
			tip = $( 
				'<div class="validatebox-tip">' + 
					'<span class="validatebox-tip-content">' + 
					'</span>' + 
					'<span class="validatebox-tip-pointer">' + 
					'</span>' + 
				'</div>' 
			).appendTo('body'); 
			$.data(target, 'validatebox').tip = tip; 
		} 
		tip.find('.validatebox-tip-content').html(msg); 
		tip.css({ 
			display:'block', 
			left:box.offset().left + box.outerWidth(), 
			top:box.offset().top 
		}) 
	} 
	 
	/** 
	 * hide tip message. 
	 */ 
	function hideTip(target){ 
		var tip = $.data(target, 'validatebox').tip; 
		if (tip){ 
			tip.remove(); 
			$.data(target, 'validatebox').tip = null; 
		} 
	} 
	 
	/** 
	 * do validate action 
	 */ 
	function validate(target){ 
		var opts = $.data(target, 'validatebox').options; 
		var tip = $.data(target, 'validatebox').tip; 
		var box = $(target); 
		var value = box.val(); 
		 
		function setTipMessage(msg){ 
			$.data(target, 'validatebox').message = msg; 
		} 
		 
		// if the box is disabled, skip validate action. 
		var disabled = box.attr('disabled'); 
		if (disabled == true || disabled == 'true'){ 
			return true; 
		} 
		 
		if (opts.required){ 
			if (value == ''){ 
				box.addClass('validatebox-invalid'); 
				setTipMessage(opts.missingMessage); 
				showTip(target); 
				return false; 
			} 
		} 
		if (opts.validType){ 
			var result = /([a-zA-Z_]+)(.*)/.exec(opts.validType); 
			var rule = opts.rules[result[1]]; 
			if (value && rule){ 
				var param = eval(result[2]); 
				if (!rule['validator'](value, param)){ 
					box.addClass('validatebox-invalid'); 
					 
					var message = rule['message']; 
					if (param){ 
						for(var i=0; i<param.length; i++){ 
							message = message.replace(new RegExp("\\{" + i + "\\}", "g"), param[i]); 
						} 
					} 
					setTipMessage(opts.invalidMessage || message); 
					showTip(target); 
					return false; 
				} 
			} 
		} 
		 
		box.removeClass('validatebox-invalid'); 
		hideTip(target); 
		return true; 
	} 
	 
	$.fn.validatebox = function(options){ 
		if (typeof options == 'string'){ 
			switch(options){ 
			case 'destroy': 
				return this.each(function(){ 
					destroyBox(this); 
				}); 
			case 'validate': 
				return this.each(function(){ 
					validate(this); 
				}); 
			case 'isValid': 
				return validate(this[0]); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'validatebox'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				init(this); 
				var t = $(this); 
				state = $.data(this, 'validatebox', { 
					options: $.extend({}, $.fn.validatebox.defaults, { 
						required: (t.attr('required') ? (t.attr('required') == 'true' || t.attr('required') == true) : undefined), 
						validType: (t.attr('validType') || undefined), 
						missingMessage: (t.attr('missingMessage') || undefined), 
						invalidMessage: (t.attr('invalidMessage') || undefined) 
					}, options) 
				}); 
			} 
			 
			bindEvents(this); 
		}); 
	}; 
	 
	$.fn.validatebox.defaults = { 
		required: false, 
		validType: null, 
		missingMessage: 'This field is required.', 
		invalidMessage: null, 
		 
		rules: { 
			email:{ 
				validator: function(value){ 
					return /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i.test(value); 
				}, 
				message: 'Please enter a valid email address.' 
			}, 
			url: { 
				validator: function(value){ 
					return /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value); 
				}, 
				message: 'Please enter a valid URL.' 
			}, 
			length: { 
				validator: function(value, param){ 
					var len = $.trim(value).length; 
					return len >= param[0] && len <= param[1] 
				}, 
				message: 'Please enter a value between {0} and {1}.' 
			} 
		} 
	}; 
})(jQuery);/** 
 * spinner - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 *   validatebox 
 *  
 */ 
(function($){ 
	/** 
	 * initialize the spinner. 
	 */ 
	function init(target){ 
		var spinner = $( 
				'<span class="spinner">' + 
				'<span class="spinner-arrow">' + 
				'<span class="spinner-arrow-up"></span>' + 
				'<span class="spinner-arrow-down"></span>' + 
				'</span>' + 
				'</span>' 
				).insertAfter(target); 
		$(target).addClass('spinner-text').prependTo(spinner); 
		return spinner; 
	} 
	 
	function setSize(target, width){ 
		var opts = $.data(target, 'spinner').options; 
		var spinner = $.data(target, 'spinner').spinner; 
		if (width) opts.width = width; 
		if (isNaN(opts.width)){ 
			opts.width = $(target).outerWidth(); 
		} 
		var arrowWidth = spinner.find('.spinner-arrow').outerWidth(); 
		var width = opts.width - arrowWidth; 
		if ($.boxModel == true){ 
			width -= spinner.outerWidth() - spinner.width(); 
		} 
		$(target).width(width); 
	} 
	 
	function bindEvents(target){ 
		var opts = $.data(target, 'spinner').options; 
		var spinner = $.data(target, 'spinner').spinner; 
		 
		spinner.find('.spinner-arrow-up,.spinner-arrow-down').unbind('.spinner'); 
		if (!opts.disabled){ 
			spinner.find('.spinner-arrow-up').bind('mouseenter.spinner', function(){ 
				$(this).addClass('spinner-arrow-hover'); 
			}).bind('mouseleave.spinner', function(){ 
				$(this).removeClass('spinner-arrow-hover'); 
			}).bind('click.spinner', function(){ 
				opts.spin.call(target, false); 
				opts.onSpinUp.call(target); 
				$(target).validatebox('validate'); 
			}); 
			 
			spinner.find('.spinner-arrow-down').bind('mouseenter.spinner', function(){ 
				$(this).addClass('spinner-arrow-hover'); 
			}).bind('mouseleave.spinner', function(){ 
				$(this).removeClass('spinner-arrow-hover'); 
			}).bind('click.spinner', function(){ 
				opts.spin.call(target, true); 
				opts.onSpinDown.call(target); 
				$(target).validatebox('validate'); 
			}); 
		} 
	} 
	 
	/** 
	 * enable or disable the spinner. 
	 */ 
	function setDisabled(target, disabled){ 
		var opts = $.data(target, 'spinner').options; 
		if (disabled){ 
			opts.disabled = true; 
			$(target).attr('disabled', true); 
		} else { 
			opts.disabled = false; 
			$(target).removeAttr('disabled'); 
		} 
	} 
	 
	$.fn.spinner = function(options, param){ 
		if (typeof options == 'string'){ 
			var method = $.fn.spinner.methods[options]; 
			if (method){ 
				return method(this, param); 
			} else { 
				return this.validatebox(options, param); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'spinner'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				state = $.data(this, 'spinner', { 
					options: $.extend({}, $.fn.spinner.defaults, $.fn.spinner.parseOptions(this), options), 
					spinner: init(this) 
				}); 
				$(this).removeAttr('disabled'); 
			} 
			$(this).val(state.options.value); 
			$(this).attr('readonly', !state.options.editable); 
			setDisabled(this, state.options.disabled); 
			setSize(this); 
			$(this).validatebox(state.options); 
			bindEvents(this); 
		}); 
	}; 
	 
	$.fn.spinner.methods = { 
		options: function(jq){ 
			var opts = $.data(jq[0], 'spinner').options; 
			return $.extend(opts, { 
				value: jq.val() 
			}); 
		}, 
		destroy: function(jq){ 
			return jq.each(function(){ 
				var spinner = $.data(this, 'spinner').spinner; 
				$(this).validatebox('destroy'); 
				spinner.remove(); 
			}); 
		}, 
		resize: function(jq, width){ 
			return jq.each(function(){ 
				setSize(this, width); 
			}); 
		}, 
		enable: function(jq){ 
			return jq.each(function(){ 
				setDisabled(this, false); 
				bindEvents(this); 
			}); 
		}, 
		disable: function(jq){ 
			return jq.each(function(){ 
				setDisabled(this, true); 
				bindEvents(this); 
			}); 
		}, 
		getValue: function(jq){ 
			return jq.val(); 
		}, 
		setValue: function(jq, value){ 
			return jq.each(function(){ 
				var opts = $.data(this, 'spinner').options; 
				opts.value = value; 
				$(this).val(value); 
			}); 
		}, 
		clear: function(jq){ 
			return jq.each(function(){ 
				var opts = $.data(this, 'spinner').options; 
				opts.value = ''; 
				$(this).val(''); 
			}); 
		} 
	}; 
	 
	$.fn.spinner.parseOptions = function(target){ 
		var t = $(target); 
		return $.extend({}, $.fn.validatebox.parseOptions(target), { 
			width: (parseInt(target.style.width) || undefined), 
			value: (t.val() || undefined), 
			min: t.attr('min'), 
			max: t.attr('max'), 
			increment: (parseFloat(t.attr('increment')) || undefined), 
			editable: (t.attr('editable') ? t.attr('editable') == 'true' : undefined), 
			disabled: (t.attr('disabled') ? true : undefined) 
		}); 
	}; 
	 
	$.fn.spinner.defaults = $.extend({}, $.fn.validatebox.defaults, { 
		width: 'auto', 
		value: '', 
		min: null, 
		max: null, 
		increment: 1, 
		editable: true, 
		disabled: false, 
		 
		spin: function(down){},	// the function to implement the spin button click 
		 
		onSpinUp: function(){}, 
		onSpinDown: function(){} 
	}); 
})(jQuery);/** 
 * panel - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 */ 
(function($){ 
	function removeNode(node){ 
		node.each(function(){ 
			$(this).remove(); 
			if ($.browser.msie){ 
				this.outerHTML = ''; 
			} 
		}); 
	} 
	 
	function setSize(target, param){ 
		var opts = $.data(target, 'panel').options; 
		var panel = $.data(target, 'panel').panel; 
		var pheader = panel.find('>div.panel-header'); 
		var pbody = panel.find('>div.panel-body'); 
		 
		if (param){ 
			if (param.width) opts.width = param.width; 
			if (param.height) opts.height = param.height; 
			if (param.left != null) opts.left = param.left; 
			if (param.top != null) opts.top = param.top; 
		} 
		 
		if (opts.fit == true){ 
			var p = panel.parent(); 
			opts.width = p.width(); 
			opts.height = p.height(); 
		} 
		panel.css({ 
			left: opts.left, 
			top: opts.top 
		}); 
		panel.css(opts.style); 
		panel.addClass(opts.cls); 
		pheader.addClass(opts.headerCls); 
		pbody.addClass(opts.bodyCls); 
		 
		if (!isNaN(opts.width)){ 
			if ($.boxModel == true){ 
				panel.width(opts.width - (panel.outerWidth() - panel.width())); 
				pheader.width(panel.width() - (pheader.outerWidth() - pheader.width())); 
				pbody.width(panel.width() - (pbody.outerWidth() - pbody.width())); 
			} else { 
				panel.width(opts.width); 
				pheader.width(panel.width()); 
				pbody.width(panel.width()); 
			} 
		} else { 
			panel.width('auto'); 
			pbody.width('auto'); 
		} 
		if (!isNaN(opts.height)){ 
//			var height = opts.height - (panel.outerHeight()-panel.height()) - pheader.outerHeight(); 
//			if ($.boxModel == true){ 
//				height -= pbody.outerHeight() - pbody.height(); 
//			} 
//			pbody.height(height); 
			 
			if ($.boxModel == true){ 
				panel.height(opts.height - (panel.outerHeight() - panel.height())); 
				pbody.height(panel.height() - pheader.outerHeight() - (pbody.outerHeight() - pbody.height())); 
			} else { 
				panel.height(opts.height); 
				pbody.height(panel.height() - pheader.outerHeight()); 
			} 
		} else { 
			pbody.height('auto'); 
		} 
		panel.css('height', null); 
		 
		opts.onResize.apply(target, [opts.width, opts.height]); 
		 
		panel.find('>div.panel-body>div').triggerHandler('_resize'); 
	} 
	 
	function movePanel(target, param){ 
		var opts = $.data(target, 'panel').options; 
		var panel = $.data(target, 'panel').panel; 
		if (param){ 
			if (param.left != null) opts.left = param.left; 
			if (param.top != null) opts.top = param.top; 
		} 
		panel.css({ 
			left: opts.left, 
			top: opts.top 
		}); 
		opts.onMove.apply(target, [opts.left, opts.top]); 
	} 
	 
	function wrapPanel(target){ 
		var panel = $(target).addClass('panel-body').wrap('<div class="panel"></div>').parent(); 
		panel.bind('_resize', function(){ 
			var opts = $.data(target, 'panel').options; 
			if (opts.fit == true){ 
				setSize(target); 
			} 
			return false; 
		}); 
		 
		return panel; 
	} 
	 
	function addHeader(target){ 
		var opts = $.data(target, 'panel').options; 
		var panel = $.data(target, 'panel').panel; 
		removeNode(panel.find('>div.panel-header')); 
		if (opts.title && !opts.noheader){ 
			var header = $('<div class="panel-header"><div class="panel-title">'+opts.title+'</div></div>').prependTo(panel); 
			if (opts.iconCls){ 
				header.find('.panel-title').addClass('panel-with-icon'); 
				$('<div class="panel-icon"></div>').addClass(opts.iconCls).appendTo(header); 
			} 
			var tool = $('<div class="panel-tool"></div>').appendTo(header); 
			if (opts.closable){ 
				$('<div class="panel-tool-close"></div>').appendTo(tool).bind('click', onClose); 
			} 
			if (opts.maximizable){ 
				$('<div class="panel-tool-max"></div>').appendTo(tool).bind('click', onMax); 
			} 
			if (opts.minimizable){ 
				$('<div class="panel-tool-min"></div>').appendTo(tool).bind('click', onMin); 
			} 
			if (opts.collapsible){ 
				$('<div class="panel-tool-collapse"></div>').appendTo(tool).bind('click', onToggle); 
			} 
			if (opts.tools){ 
				for(var i=opts.tools.length-1; i>=0; i--){ 
					var t = $('<div></div>').addClass(opts.tools[i].iconCls).appendTo(tool); 
					if (opts.tools[i].handler){ 
						t.bind('click', eval(opts.tools[i].handler)); 
					} 
				} 
			} 
			tool.find('div').hover( 
				function(){$(this).addClass('panel-tool-over');}, 
				function(){$(this).removeClass('panel-tool-over');} 
			); 
			panel.find('>div.panel-body').removeClass('panel-body-noheader'); 
		} else { 
			panel.find('>div.panel-body').addClass('panel-body-noheader'); 
		} 
		 
		function onToggle(){ 
			if ($(this).hasClass('panel-tool-expand')){ 
				expandPanel(target, true); 
			} else { 
				collapsePanel(target, true); 
			} 
			return false; 
		} 
		 
		function onMin(){ 
			minimizePanel(target); 
			return false; 
		} 
		 
		function onMax(){ 
			if ($(this).hasClass('panel-tool-restore')){ 
				restorePanel(target); 
			} else { 
				maximizePanel(target); 
			} 
			return false; 
		} 
		 
		function onClose(){ 
			closePanel(target); 
			return false; 
		} 
	} 
	 
	/** 
	 * load content from remote site if the href attribute is defined 
	 */ 
	function loadData(target){ 
		var state = $.data(target, 'panel'); 
		if (state.options.href && (!state.isLoaded || !state.options.cache)){ 
			state.isLoaded = false; 
			var pbody = state.panel.find('>div.panel-body'); 
			pbody.html($('<div class="panel-loading"></div>').html(state.options.loadingMessage)); 
			pbody.load(state.options.href, null, function(){ 
				if ($.parser){ 
					$.parser.parse(pbody); 
				} 
				state.options.onLoad.apply(target, arguments); 
				state.isLoaded = true; 
			}); 
		} 
	} 
	 
	function openPanel(target, forceOpen){ 
		var opts = $.data(target, 'panel').options; 
		var panel = $.data(target, 'panel').panel; 
		 
		if (forceOpen != true){ 
			if (opts.onBeforeOpen.call(target) == false) return; 
		} 
		panel.show(); 
		opts.closed = false; 
		opts.onOpen.call(target); 
		 
		if (opts.maximized == true) maximizePanel(target); 
		if (opts.minimized == true) minimizePanel(target); 
		if (opts.collapsed == true) collapsePanel(target); 
		 
		if (!opts.collapsed){ 
			loadData(target); 
		} 
	} 
	 
	function closePanel(target, forceClose){ 
		var opts = $.data(target, 'panel').options; 
		var panel = $.data(target, 'panel').panel; 
		 
		if (forceClose != true){ 
			if (opts.onBeforeClose.call(target) == false) return; 
		} 
		panel.hide(); 
		opts.closed = true; 
		opts.onClose.call(target); 
	} 
	 
	function destroyPanel(target, forceDestroy){ 
		var opts = $.data(target, 'panel').options; 
		var panel = $.data(target, 'panel').panel; 
		 
		if (forceDestroy != true){ 
			if (opts.onBeforeDestroy.call(target) == false) return; 
		} 
		removeNode(panel); 
		opts.onDestroy.call(target); 
	} 
	 
	function collapsePanel(target, animate){ 
		var opts = $.data(target, 'panel').options; 
		var panel = $.data(target, 'panel').panel; 
		var body = panel.find('>div.panel-body'); 
		var tool = panel.find('>div.panel-header .panel-tool-collapse'); 
		 
		if (tool.hasClass('panel-tool-expand')) return; 
		 
		body.stop(true, true);	// stop animation 
		if (opts.onBeforeCollapse.call(target) == false) return; 
		 
		tool.addClass('panel-tool-expand'); 
		if (animate == true){ 
			body.slideUp('normal', function(){ 
				opts.collapsed = true; 
				opts.onCollapse.call(target); 
			}); 
		} else { 
			body.hide(); 
			opts.collapsed = true; 
			opts.onCollapse.call(target); 
		} 
	} 
	 
	function expandPanel(target, animate){ 
		var opts = $.data(target, 'panel').options; 
		var panel = $.data(target, 'panel').panel; 
		var body = panel.find('>div.panel-body'); 
		var tool = panel.find('>div.panel-header .panel-tool-collapse'); 
		 
		if (!tool.hasClass('panel-tool-expand')) return; 
		 
		body.stop(true, true);	// stop animation 
		if (opts.onBeforeExpand.call(target) == false) return; 
		 
		tool.removeClass('panel-tool-expand'); 
		if (animate == true){ 
			body.slideDown('normal', function(){ 
				opts.collapsed = false; 
				opts.onExpand.call(target); 
				loadData(target); 
			}); 
		} else { 
			body.show(); 
			opts.collapsed = false; 
			opts.onExpand.call(target); 
			loadData(target); 
		} 
	} 
	 
	function maximizePanel(target){ 
		var opts = $.data(target, 'panel').options; 
		var panel = $.data(target, 'panel').panel; 
		var tool = panel.find('>div.panel-header .panel-tool-max'); 
		 
		if (tool.hasClass('panel-tool-restore')) return; 
		 
		tool.addClass('panel-tool-restore'); 
		 
		$.data(target, 'panel').original = { 
			width: opts.width, 
			height: opts.height, 
			left: opts.left, 
			top: opts.top, 
			fit: opts.fit 
		}; 
		opts.left = 0; 
		opts.top = 0; 
		opts.fit = true; 
		setSize(target); 
		opts.minimized = false; 
		opts.maximized = true; 
		opts.onMaximize.call(target); 
	} 
	 
	function minimizePanel(target){ 
		var opts = $.data(target, 'panel').options; 
		var panel = $.data(target, 'panel').panel; 
		panel.hide(); 
		opts.minimized = true; 
		opts.maximized = false; 
		opts.onMinimize.call(target); 
	} 
	 
	function restorePanel(target){ 
		var opts = $.data(target, 'panel').options; 
		var panel = $.data(target, 'panel').panel; 
		var tool = panel.find('>div.panel-header .panel-tool-max'); 
		 
		if (!tool.hasClass('panel-tool-restore')) return; 
		 
		panel.show(); 
		tool.removeClass('panel-tool-restore'); 
		var original = $.data(target, 'panel').original; 
		opts.width = original.width; 
		opts.height = original.height; 
		opts.left = original.left; 
		opts.top = original.top; 
		opts.fit = original.fit; 
		setSize(target); 
		opts.minimized = false; 
		opts.maximized = false; 
		opts.onRestore.call(target); 
	} 
	 
	function setBorder(target){ 
		var opts = $.data(target, 'panel').options; 
		var panel = $.data(target, 'panel').panel; 
		if (opts.border == true){ 
			panel.find('>div.panel-header').removeClass('panel-header-noborder'); 
			panel.find('>div.panel-body').removeClass('panel-body-noborder'); 
		} else { 
			panel.find('>div.panel-header').addClass('panel-header-noborder'); 
			panel.find('>div.panel-body').addClass('panel-body-noborder'); 
		} 
	} 
	 
	function setTitle(target, title){ 
		$.data(target, 'panel').options.title = title; 
		$(target).panel('header').find('div.panel-title').html(title); 
	} 
	 
	$(window).unbind('.panel').bind('resize.panel', function(){ 
		var layout = $('body.layout'); 
		if (layout.length){ 
			layout.layout('resize'); 
		} else { 
			$('body>div.panel').triggerHandler('_resize'); 
		} 
	}); 
	 
	$.fn.panel = function(options, param){ 
		if (typeof options == 'string'){ 
			switch(options){ 
			case 'options': 
				return $.data(this[0], 'panel').options; 
			case 'panel': 
				return $.data(this[0], 'panel').panel; 
			case 'header': 
				return $.data(this[0], 'panel').panel.find('>div.panel-header'); 
			case 'body': 
				return $.data(this[0], 'panel').panel.find('>div.panel-body'); 
			case 'setTitle': 
				return this.each(function(){ 
					setTitle(this, param); 
				}); 
			case 'open': 
				return this.each(function(){ 
					openPanel(this, param); 
				}); 
			case 'close': 
				return this.each(function(){ 
					closePanel(this, param); 
				}); 
			case 'destroy': 
				return this.each(function(){ 
					destroyPanel(this, param); 
				}); 
			case 'refresh': 
				return this.each(function(){ 
					$.data(this, 'panel').isLoaded = false; 
					loadData(this); 
				}); 
			case 'resize': 
				return this.each(function(){ 
					setSize(this, param); 
				}); 
			case 'move': 
				return this.each(function(){ 
					movePanel(this, param); 
				}); 
			case 'maximize': 
				return this.each(function(){ 
					maximizePanel(this); 
				}); 
			case 'minimize': 
				return this.each(function(){ 
					minimizePanel(this); 
				}); 
			case 'restore': 
				return this.each(function(){ 
					restorePanel(this); 
				}); 
			case 'collapse': 
				return this.each(function(){ 
					collapsePanel(this, param);	// param: boolean,indicate animate or not 
				}); 
			case 'expand': 
				return this.each(function(){ 
					expandPanel(this, param);	// param: boolean,indicate animate or not 
				}); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'panel'); 
			var opts; 
			if (state){ 
				opts = $.extend(state.options, options); 
			} else { 
				var t = $(this); 
				opts = $.extend({}, $.fn.panel.defaults, { 
					width: (parseInt(t.css('width')) || undefined), 
					height: (parseInt(t.css('height')) || undefined), 
					left: (parseInt(t.css('left')) || undefined), 
					top: (parseInt(t.css('top')) || undefined), 
					title: t.attr('title'), 
					iconCls: t.attr('icon'), 
					cls: t.attr('cls'), 
					headerCls: t.attr('headerCls'), 
					bodyCls: t.attr('bodyCls'), 
					href: t.attr('href'), 
					cache: (t.attr('cache') ? t.attr('cache') == 'true' : undefined), 
					fit: (t.attr('fit') ? t.attr('fit') == 'true' : undefined), 
					border: (t.attr('border') ? t.attr('border') == 'true' : undefined), 
					noheader: (t.attr('noheader') ? t.attr('noheader') == 'true' : undefined), 
					collapsible: (t.attr('collapsible') ? t.attr('collapsible') == 'true' : undefined), 
					minimizable: (t.attr('minimizable') ? t.attr('minimizable') == 'true' : undefined), 
					maximizable: (t.attr('maximizable') ? t.attr('maximizable') == 'true' : undefined), 
					closable: (t.attr('closable') ? t.attr('closable') == 'true' : undefined), 
					collapsed: (t.attr('collapsed') ? t.attr('collapsed') == 'true' : undefined), 
					minimized: (t.attr('minimized') ? t.attr('minimized') == 'true' : undefined), 
					maximized: (t.attr('maximized') ? t.attr('maximized') == 'true' : undefined), 
					closed: (t.attr('closed') ? t.attr('closed') == 'true' : undefined) 
				}, options); 
				t.attr('title', ''); 
				state = $.data(this, 'panel', { 
					options: opts, 
					panel: wrapPanel(this), 
					isLoaded: false 
				}); 
			} 
			 
			if (opts.content){ 
				$(this).html(opts.content); 
				if ($.parser){ 
					$.parser.parse(this); 
				} 
			} 
			 
			addHeader(this); 
			setBorder(this); 
//			loadData(this); 
			 
			if (opts.doSize == true){ 
				state.panel.css('display','block'); 
				setSize(this); 
			} 
			if (opts.closed == true){ 
				state.panel.hide(); 
			} else { 
				openPanel(this); 
			} 
		}); 
	}; 
	 
	$.fn.panel.defaults = { 
		title: null, 
		iconCls: null, 
		width: 'auto', 
		height: 'auto', 
		left: null, 
		top: null, 
		cls: null, 
		headerCls: null, 
		bodyCls: null, 
		style: {}, 
		href: null, 
		cache: true, 
		fit: false, 
		border: true, 
		doSize: true,	// true to set size and do layout 
		noheader: false, 
		content: null,	// the body content if specified 
		 
		collapsible: false, 
		minimizable: false, 
		maximizable: false, 
		closable: false, 
		collapsed: false, 
		minimized: false, 
		maximized: false, 
		closed: false, 
		 
		// custom tools, every tool can contain two properties: iconCls and handler 
		// iconCls is a icon CSS class 
		// handler is a function, which will be run when tool button is clicked 
		tools: [],	 
		 
		href: null, 
		loadingMessage: 'Loading...', 
		onLoad: function(){}, 
		onBeforeOpen: function(){}, 
		onOpen: function(){}, 
		onBeforeClose: function(){}, 
		onClose: function(){}, 
		onBeforeDestroy: function(){}, 
		onDestroy: function(){}, 
		onResize: function(width,height){}, 
		onMove: function(left,top){}, 
		onMaximize: function(){}, 
		onRestore: function(){}, 
		onMinimize: function(){}, 
		onBeforeCollapse: function(){}, 
		onBeforeExpand: function(){}, 
		onCollapse: function(){}, 
		onExpand: function(){} 
	}; 
})(jQuery); 
/** 
 * accordion - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	 panel 
 *  
 */ 
(function($){ 
	 
	function setSize(container){ 
		var opts = $.data(container, 'accordion').options; 
		var panels = $.data(container, 'accordion').panels; 
		 
		var cc = $(container); 
		if (opts.fit == true){ 
			var p = cc.parent(); 
			opts.width = p.width(); 
			opts.height = p.height(); 
		} 
		 
		if (opts.width > 0){ 
			cc.width($.boxModel==true ? (opts.width-(cc.outerWidth()-cc.width())) : opts.width); 
		} 
		var panelHeight = 'auto'; 
		if (opts.height > 0){ 
			cc.height($.boxModel==true ? (opts.height-(cc.outerHeight()-cc.height())) : opts.height); 
			// get the first panel's header height as all the header height 
			var headerHeight = panels[0].panel('header').css('height', null).outerHeight(); 
			var panelHeight = cc.height() - (panels.length-1)*headerHeight; 
		} 
		for(var i=0; i<panels.length; i++){ 
			var panel = panels[i]; 
			var header = panel.panel('header'); 
			header.height($.boxModel==true ? (headerHeight-(header.outerHeight()-header.height())) : headerHeight); 
			panel.panel('resize', { 
				width: cc.width(), 
				height: panelHeight 
			}); 
		} 
	} 
	 
	/** 
	 * get the current panel DOM element 
	 */ 
	function getCurrent(container){ 
		var panels = $.data(container, 'accordion').panels; 
		for(var i=0; i<panels.length; i++){ 
			var panel = panels[i]; 
			if (panel.panel('options').collapsed == false){ 
				return panel; 
			} 
		} 
		return null; 
	} 
	 
	function wrapAccordion(container){ 
		var cc = $(container); 
		cc.addClass('accordion'); 
		if (cc.attr('border') == 'false'){ 
			cc.addClass('accordion-noborder'); 
		} else { 
			cc.removeClass('accordion-noborder'); 
		} 
		 
		// the original panel DOM elements 
		var panels = []; 
		 
		// if no panel selected set the first one active 
		if (cc.find('>div[selected=true]').length == 0){ 
			cc.find('>div:first').attr('selected', 'true'); 
		} 
		 
		cc.find('>div').each(function(){ 
			var pp = $(this); 
			panels.push(pp); 
			 
			pp.panel({ 
				collapsible: true, 
				minimizable: false, 
				maximizable: false, 
				closable: false, 
				doSize: false, 
				collapsed: pp.attr('selected') != 'true', 
				onBeforeExpand: function(){ 
					var curr = getCurrent(container); 
					if (curr){ 
						var header = $(curr).panel('header'); 
						header.removeClass('accordion-header-selected'); 
						header.find('.panel-tool-collapse').triggerHandler('click'); 
					} 
					pp.panel('header').addClass('accordion-header-selected'); 
				}, 
				onExpand: function(){ 
					pp.panel('body').find('>div').triggerHandler('_resize'); 
				}, 
				onBeforeCollapse: function(){ 
					pp.panel('header').removeClass('accordion-header-selected'); 
				} 
			}); 
			pp.panel('body').addClass('accordion-body'); 
			pp.panel('header').addClass('accordion-header').click(function(){ 
				$(this).find('.panel-tool-collapse').triggerHandler('click'); 
				return false; 
			}); 
		}); 
		 
		cc.bind('_resize', function(){ 
			var opts = $.data(container, 'accordion').options; 
			if (opts.fit == true){ 
				setSize(container); 
			} 
			return false; 
		}); 
		 
		return { 
			accordion: cc, 
			panels: panels 
		} 
	} 
	 
	/** 
	 * select and set the special panel active 
	 */ 
	function select(container, title){ 
		var panels = $.data(container, 'accordion').panels; 
		var curr = getCurrent(container); 
		if (curr && getTitle(curr) == title){ 
			return; 
		} 
		 
		for(var i=0; i<panels.length; i++){ 
			var panel = panels[i]; 
			if (getTitle(panel) == title){ 
				$(panel).panel('header').triggerHandler('click'); 
				return; 
			} 
		} 
		 
		curr = getCurrent(container); 
		curr.panel('header').addClass('accordion-header-selected'); 
		 
		 
		function getTitle(panel){ 
			return $(panel).panel('options').title; 
		} 
	} 
	 
	$.fn.accordion = function(options, param){ 
		if (typeof options == 'string'){ 
			switch(options){ 
			case 'select': 
				return this.each(function(){ 
					select(this, param); 
				}); 
			} 
		} 
		 
		options = options || {}; 
		 
		return this.each(function(){ 
			var state = $.data(this, 'accordion'); 
			var opts; 
			if (state){ 
				opts = $.extend(state.options, options); 
				state.opts = opts; 
			} else { 
				var t = $(this); 
				opts = $.extend({}, $.fn.accordion.defaults, { 
					width: (parseInt(t.css('width')) || undefined), 
					height: (parseInt(t.css('height')) || undefined), 
					fit: (t.attr('fit') ? t.attr('fit') == 'true' : undefined), 
					border: (t.attr('border') ? t.attr('border') == 'true' : undefined) 
				}, options); 
				var r = wrapAccordion(this); 
				$.data(this, 'accordion', { 
					options: opts, 
					accordion: r.accordion, 
					panels: r.panels 
				}); 
			} 
			 
			setSize(this); 
			select(this); 
		}); 
	}; 
	 
	$.fn.accordion.defaults = { 
		width: 'auto', 
		height: 'auto', 
		fit: false, 
		border: true 
	}; 
})(jQuery);/** 
 * calendar - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 */ 
(function($){ 
	 
	function setSize(target){ 
		var opts = $.data(target, 'calendar').options; 
		var t = $(target); 
		if (opts.fit == true){ 
			var p = t.parent(); 
			opts.width = p.width(); 
			opts.height = p.height(); 
		} 
		var header = t.find('.calendar-header'); 
		if ($.boxModel == true){ 
			t.width(opts.width - (t.outerWidth() - t.width())); 
			t.height(opts.height - (t.outerHeight() - t.height())); 
		} else { 
			t.width(opts.width); 
			t.height(opts.height); 
		} 
		var body = t.find('.calendar-body'); 
		var height = t.height() - header.outerHeight(); 
		if ($.boxModel == true){ 
			body.height(height - (body.outerHeight() - body.height())); 
		} else { 
			body.height(height); 
		} 
		 
	} 
	 
	function init(target){ 
		$(target).addClass('calendar').wrapInner( 
				'<div class="calendar-header">' + 
					'<div class="calendar-prevmonth"></div>' + 
					'<div class="calendar-nextmonth"></div>' + 
					'<div class="calendar-prevyear"></div>' + 
					'<div class="calendar-nextyear"></div>' + 
					'<div class="calendar-title">' + 
						'<span>Aprial 2010</span>' + 
					'</div>' + 
				'</div>' + 
				'<div class="calendar-body">' + 
					'<div class="calendar-menu">' + 
						'<div class="calendar-menu-year-inner">' + 
							'<span class="calendar-menu-prev"></span>' + 
							'<span><input class="calendar-menu-year" type="text"></input></span>' + 
							'<span class="calendar-menu-next"></span>' + 
						'</div>' + 
						'<div class="calendar-menu-month-inner">' + 
						'</div>' + 
					'</div>' + 
				'</div>' 
		); 
		 
		$(target).find('.calendar-title span').hover( 
			function(){$(this).addClass('calendar-menu-hover');}, 
			function(){$(this).removeClass('calendar-menu-hover');} 
		).click(function(){ 
			var menu = $(target).find('.calendar-menu'); 
			if (menu.is(':visible')){ 
				menu.hide(); 
			} else { 
				showSelectMenus(target); 
			} 
		}); 
		 
		$('.calendar-prevmonth,.calendar-nextmonth,.calendar-prevyear,.calendar-nextyear', target).hover( 
			function(){$(this).addClass('calendar-nav-hover');}, 
			function(){$(this).removeClass('calendar-nav-hover');} 
		); 
		$(target).find('.calendar-nextmonth').click(function(){ 
			showMonth(target, 1); 
		}); 
		$(target).find('.calendar-prevmonth').click(function(){ 
			showMonth(target, -1); 
		}); 
		$(target).find('.calendar-nextyear').click(function(){ 
			showYear(target, 1); 
		}); 
		$(target).find('.calendar-prevyear').click(function(){ 
			showYear(target, -1); 
		}); 
		 
		$(target).bind('_resize', function(){ 
			var opts = $.data(target, 'calendar').options; 
			if (opts.fit == true){ 
				setSize(target); 
			} 
			return false; 
		}); 
	} 
	 
	/** 
	 * show the calendar corresponding to the current month. 
	 */ 
	function showMonth(target, delta){ 
		var opts = $.data(target, 'calendar').options; 
		opts.month += delta; 
		if (opts.month > 12){ 
			opts.year++; 
			opts.month = 1; 
		} else if (opts.month < 1){ 
			opts.year--; 
			opts.month = 12; 
		} 
		show(target); 
		 
		var menu = $(target).find('.calendar-menu-month-inner'); 
		menu.find('td.calendar-selected').removeClass('calendar-selected'); 
		menu.find('td:eq(' + (opts.month-1) + ')').addClass('calendar-selected'); 
	} 
	 
	/** 
	 * show the calendar corresponding to the current year. 
	 */ 
	function showYear(target, delta){ 
		var opts = $.data(target, 'calendar').options; 
		opts.year += delta; 
		show(target); 
		 
		var menu = $(target).find('.calendar-menu-year'); 
		menu.val(opts.year); 
	} 
	 
	/** 
	 * show the select menu that can change year or month, if the menu is not be created then create it. 
	 */ 
	function showSelectMenus(target){ 
		var opts = $.data(target, 'calendar').options; 
		$(target).find('.calendar-menu').show(); 
		 
		if ($(target).find('.calendar-menu-month-inner').is(':empty')){ 
			$(target).find('.calendar-menu-month-inner').empty(); 
			var t = $('<table></table>').appendTo($(target).find('.calendar-menu-month-inner')); 
			var idx = 0; 
			for(var i=0; i<3; i++){ 
				var tr = $('<tr></tr>').appendTo(t); 
				for(var j=0; j<4; j++){ 
					$('<td class="calendar-menu-month"></td>').html(opts.months[idx++]).attr('abbr',idx).appendTo(tr); 
				} 
			} 
			 
			$(target).find('.calendar-menu-prev,.calendar-menu-next').hover( 
					function(){$(this).addClass('calendar-menu-hover');}, 
					function(){$(this).removeClass('calendar-menu-hover');} 
			); 
			$(target).find('.calendar-menu-next').click(function(){ 
				var y = $(target).find('.calendar-menu-year'); 
				if (!isNaN(y.val())){ 
					y.val(parseInt(y.val()) + 1); 
				} 
			}); 
			$(target).find('.calendar-menu-prev').click(function(){ 
				var y = $(target).find('.calendar-menu-year'); 
				if (!isNaN(y.val())){ 
					y.val(parseInt(y.val() - 1)); 
				} 
			}); 
			 
			$(target).find('.calendar-menu-year').keypress(function(e){ 
				if (e.keyCode == 13){ 
					setDate(); 
				} 
			}); 
			 
			$(target).find('.calendar-menu-month').hover( 
					function(){$(this).addClass('calendar-menu-hover');}, 
					function(){$(this).removeClass('calendar-menu-hover');} 
			).click(function(){ 
				var menu = $(target).find('.calendar-menu'); 
				menu.find('.calendar-selected').removeClass('calendar-selected'); 
				$(this).addClass('calendar-selected'); 
				setDate(); 
			}); 
		} 
		 
		function setDate(){ 
			var menu = $(target).find('.calendar-menu'); 
			var year = menu.find('.calendar-menu-year').val(); 
			var month = menu.find('.calendar-selected').attr('abbr'); 
			if (!isNaN(year)){ 
				opts.year = parseInt(year); 
				opts.month = parseInt(month); 
				show(target); 
			} 
			menu.hide(); 
		} 
		 
		var body = $(target).find('.calendar-body'); 
		var sele = $(target).find('.calendar-menu'); 
		var seleYear = sele.find('.calendar-menu-year-inner'); 
		var seleMonth = sele.find('.calendar-menu-month-inner'); 
		 
		seleYear.find('input').val(opts.year).focus(); 
		seleMonth.find('td.calendar-selected').removeClass('calendar-selected'); 
		seleMonth.find('td:eq('+(opts.month-1)+')').addClass('calendar-selected'); 
		 
		if ($.boxModel == true){ 
			sele.width(body.outerWidth() - (sele.outerWidth() - sele.width())); 
			sele.height(body.outerHeight() - (sele.outerHeight() - sele.height())); 
			seleMonth.height(sele.height() - (seleMonth.outerHeight() - seleMonth.height()) - seleYear.outerHeight()); 
		} else { 
			sele.width(body.outerWidth()); 
			sele.height(body.outerHeight()); 
			seleMonth.height(sele.height() - seleYear.outerHeight()); 
		} 
	} 
	 
	/** 
	 * get weeks data. 
	 */ 
	function getWeeks(year, month){ 
		var dates = []; 
		var lastDay = new Date(year, month, 0).getDate(); 
		for(var i=1; i<=lastDay; i++) dates.push([year,month,i]); 
		 
		// group date by week 
		var weeks = [], week = []; 
		while(dates.length > 0){ 
			var date = dates.shift(); 
			week.push(date); 
			if (new Date(date[0],date[1]-1,date[2]).getDay() == 6){ 
				weeks.push(week); 
				week = []; 
			} 
		} 
		if (week.length){ 
			weeks.push(week); 
		} 
		 
		var firstWeek = weeks[0]; 
		if (firstWeek.length < 7){ 
			while(firstWeek.length < 7){ 
				var firstDate = firstWeek[0]; 
				var date = new Date(firstDate[0],firstDate[1]-1,firstDate[2]-1) 
				firstWeek.unshift([date.getFullYear(), date.getMonth()+1, date.getDate()]); 
			} 
		} else { 
			var firstDate = firstWeek[0]; 
			var week = []; 
			for(var i=1; i<=7; i++){ 
				var date = new Date(firstDate[0], firstDate[1]-1, firstDate[2]-i); 
				week.unshift([date.getFullYear(), date.getMonth()+1, date.getDate()]); 
			} 
			weeks.unshift(week); 
		} 
		 
		var lastWeek = weeks[weeks.length-1]; 
		while(lastWeek.length < 7){ 
			var lastDate = lastWeek[lastWeek.length-1]; 
			var date = new Date(lastDate[0], lastDate[1]-1, lastDate[2]+1); 
			lastWeek.push([date.getFullYear(), date.getMonth()+1, date.getDate()]); 
		} 
		if (weeks.length < 6){ 
			var lastDate = lastWeek[lastWeek.length-1]; 
			var week = []; 
			for(var i=1; i<=7; i++){ 
				var date = new Date(lastDate[0], lastDate[1]-1, lastDate[2]+i); 
				week.push([date.getFullYear(), date.getMonth()+1, date.getDate()]); 
			} 
			weeks.push(week); 
		} 
		 
		return weeks; 
	} 
	 
	/** 
	 * show the calendar day. 
	 */ 
	function show(target){ 
		var opts = $.data(target, 'calendar').options; 
		$(target).find('.calendar-title span').html(opts.months[opts.month-1] + ' ' + opts.year); 
		 
		var body = $(target).find('div.calendar-body'); 
		body.find('>table').remove(); 
		 
		var t = $('<table cellspacing="0" cellpadding="0" border="0"><thead></thead><tbody></tbody></table>').prependTo(body); 
		var tr = $('<tr></tr>').appendTo(t.find('thead')); 
		for(var i=0; i<opts.weeks.length; i++){ 
			tr.append('<th>'+opts.weeks[i]+'</th>'); 
		} 
		var weeks = getWeeks(opts.year, opts.month); 
		for(var i=0; i<weeks.length; i++){ 
			var week = weeks[i]; 
			var tr = $('<tr></tr>').appendTo(t.find('tbody')); 
			for(var j=0; j<week.length; j++){ 
				var day = week[j]; 
				$('<td class="calendar-day calendar-other-month"></td>').attr('abbr',day[0]+','+day[1]+','+day[2]).html(day[2]).appendTo(tr); 
			} 
		} 
		t.find('td[abbr^='+opts.year+','+opts.month+']').removeClass('calendar-other-month'); 
		 
		var now = new Date(); 
		var today = now.getFullYear()+','+(now.getMonth()+1)+','+now.getDate(); 
		t.find('td[abbr='+today+']').addClass('calendar-today'); 
		 
		if (opts.current){ 
			t.find('.calendar-selected').removeClass('calendar-selected'); 
			var current = opts.current.getFullYear()+','+(opts.current.getMonth()+1)+','+opts.current.getDate(); 
			t.find('td[abbr='+current+']').addClass('calendar-selected'); 
		} 
		 
		t.find('tr').find('td:first').addClass('calendar-sunday'); 
		t.find('tr').find('td:last').addClass('calendar-saturday'); 
		 
		t.find('td').hover( 
			function(){$(this).addClass('calendar-hover');}, 
			function(){$(this).removeClass('calendar-hover');} 
		).click(function(){ 
			t.find('.calendar-selected').removeClass('calendar-selected'); 
			$(this).addClass('calendar-selected'); 
			var parts = $(this).attr('abbr').split(','); 
			opts.current = new Date(parts[0], parseInt(parts[1])-1, parts[2]); 
			opts.onSelect.call(target, opts.current); 
		}); 
	} 
	 
	$.fn.calendar = function(options){ 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'calendar'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				init(this); 
				state = $.data(this, 'calendar', { 
					options:$.extend({}, $.fn.calendar.defaults, options) 
				}); 
			} 
			if (state.options.border == false){ 
				$(this).addClass('calendar-noborder'); 
			} 
			setSize(this); 
			show(this); 
			$(this).find('div.calendar-menu').hide();	// hide the calendar menu 
		}); 
	}; 
	 
	$.fn.calendar.defaults = { 
		width:180, 
		height:180, 
		fit:false, 
		border:true, 
		weeks:['S','M','T','W','T','F','S'], 
		months:['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
		year:new Date().getFullYear(), 
		month:new Date().getMonth()+1, 
		current:new Date(), 
		 
		onSelect: function(date){} 
	}; 
})(jQuery);/** 
 * combo - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 *   panel 
 *   validatebox 
 *  
 */ 
(function($){ 
	function setSize(target, width){ 
		var opts = $.data(target, 'combo').options; 
		var combo = $.data(target, 'combo').combo; 
		var panel = $.data(target, 'combo').panel; 
		 
		if (width) opts.width = width; 
		 
		if (isNaN(opts.width)){ 
			opts.width = combo.find('input.combo-text').outerWidth(); 
		} 
		var arrowWidth = combo.find('.combo-arrow').outerWidth(); 
		var width = opts.width - arrowWidth; 
		combo.find('input.combo-text').width(width); 
		 
		panel.panel('resize', { 
			width: (opts.panelWidth ? opts.panelWidth : combo.outerWidth()), 
			height: opts.panelHeight 
		}); 
	} 
	 
	/** 
	 * create the combo component. 
	 */ 
	function init(target){ 
		$(target).hide(); 
		 
		var span = $('<span class="combo"></span>').insertAfter(target); 
		var input = $('<input type="text" class="combo-text">').appendTo(span); 
		$('<span><span class="combo-arrow"></span></span>').appendTo(span); 
		$('<input type="hidden" class="combo-value">').appendTo(span); 
		var panel = $('<div class="combo-panel"></div>').appendTo('body'); 
		panel.panel({ 
			doSize:false, 
			closed:true, 
			style:{ 
				position:'absolute' 
			}, 
			onOpen:function(){ 
				$(this).panel('resize'); 
			} 
		}); 
		 
		var name = $(target).attr('name'); 
		if (name){ 
			span.find('input.combo-value').attr('name', name); 
			$(target).removeAttr('name').attr('comboName', name); 
		} 
		input.attr('autocomplete', 'off'); 
		 
		return { 
			combo: span, 
			panel: panel 
		}; 
	} 
	 
	function destroy(target){ 
		$.data(target, 'combo').panel.panel('destroy'); 
		$.data(target, 'combo').combo.remove(); 
		$(target).remove(); 
	} 
	 
	function bindEvents(target){ 
		var opts = $.data(target, 'combo').options; 
		var combo = $.data(target, 'combo').combo; 
		var panel = $.data(target, 'combo').panel; 
		var input = combo.find('.combo-text'); 
		var arrow = combo.find('.combo-arrow'); 
		 
		$(document).unbind('.combo'); 
		combo.unbind('.combo'); 
		panel.unbind('.combo'); 
		input.unbind('.combo'); 
		arrow.unbind('.combo'); 
		 
		if (!opts.disabled){ 
			$(document).bind('mousedown.combo', function(e){ 
				$('div.combo-panel').panel('close'); 
			}); 
			panel.bind('mousedown.combo', function(e){ 
				return false; 
			}); 
			 
			input.bind('focus.combo', function(){ 
				showPanel(target); 
			}).bind('mousedown.combo', function(e){ 
				e.stopPropagation(); 
			}).bind('keyup.combo', function(e){ 
				switch(e.keyCode){ 
					case 37:	// left 
					case 38:	// up 
						opts.selectPrev.call(target); 
						break; 
					case 39:	// right 
					case 40:	// down 
						opts.selectNext.call(target); 
						break; 
					case 13:	// enter 
						opts.selectCurr.call(target); 
						break; 
					case 27:	// esc 
						hidePanel(target); 
						break; 
					default: 
						if (opts.editable){ 
							opts.filter.call(target, $(this).val()); 
						} 
				} 
				return false; 
			}); 
			 
			arrow.bind('click.combo', function(){ 
				input.focus(); 
			}).bind('mouseenter.combo', function(){ 
				$(this).addClass('combo-arrow-hover'); 
			}).bind('mouseleave.combo', function(){ 
				$(this).removeClass('combo-arrow-hover'); 
			}); 
		} 
	} 
	 
	/** 
	 * show the drop down panel. 
	 */ 
	function showPanel(target){ 
		var combo = $.data(target, 'combo').combo; 
		var panel = $.data(target, 'combo').panel; 
		 
		if ($.fn.window){ 
			panel.panel('panel').css('z-index', $.fn.window.defaults.zIndex++); 
		} 
		 
		panel.panel('open'); 
		 
		(function(){ 
			if (panel.is(':visible')){ 
				var top = combo.offset().top + combo.outerHeight(); 
				if (top + panel.outerHeight() > $(window).height() + $(document).scrollTop()){ 
					top = combo.offset().top - panel.outerHeight(); 
				} 
				if (top < $(document).scrollTop()){ 
					top = combo.offset().top + combo.outerHeight(); 
				} 
				panel.panel('move', { 
					left:combo.offset().left, 
					top:top 
				}); 
				setTimeout(arguments.callee, 200); 
			} 
		})(); 
	} 
	 
	/** 
	 * hide the drop down panel. 
	 */ 
	function hidePanel(target){ 
		var panel = $.data(target, 'combo').panel; 
		panel.panel('close'); 
	} 
	 
	function validate(target, doit){ 
		if ($.fn.validatebox){ 
			var opts = $.data(target, 'combo').options; 
			var input = $.data(target, 'combo').combo.find('input.combo-text'); 
			input.validatebox(opts); 
			if (doit){ 
				input.validatebox('validate'); 
				input.trigger('mouseleave'); 
			} 
		} 
	} 
	 
	function setDisabled(target, disabled){ 
		var opts = $.data(target, 'combo').options; 
		var combo = $.data(target, 'combo').combo; 
		if (disabled){ 
			opts.disabled = true; 
			$(target).attr('disabled', true); 
			combo.find('.combo-value').attr('disabled', true); 
			combo.find('.combo-text').attr('disabled', true); 
		} else { 
			opts.disabled = false; 
			$(target).removeAttr('disabled'); 
			combo.find('.combo-value').removeAttr('disabled'); 
			combo.find('.combo-text').removeAttr('disabled'); 
		} 
	} 
	 
	function clear(target){ 
		var combo = $.data(target, 'combo').combo; 
		combo.find('input.combo-value:gt(0)').remove(); 
		combo.find('input.combo-value').val(''); 
		combo.find('input.combo-text').val(''); 
	} 
	 
	function getText(target){ 
		var combo = $.data(target, 'combo').combo; 
		return combo.find('input.combo-text').val(); 
	} 
	 
	function setText(target, text){ 
		var combo = $.data(target, 'combo').combo; 
		combo.find('input.combo-text').val(text); 
		validate(target, true); 
	} 
	 
	function getValues(target){ 
		var values = []; 
		var combo = $.data(target, 'combo').combo; 
		combo.find('input.combo-value').each(function(){ 
			values.push($(this).val()); 
		}); 
		return values; 
	} 
	 
	function setValues(target, values){ 
		var opts = $.data(target, 'combo').options; 
		var oldValues = getValues(target); 
		 
		var combo = $.data(target, 'combo').combo; 
		combo.find('input.combo-value').remove(); 
		var name = $(target).attr('comboName'); 
		for(var i=0; i<values.length; i++){ 
			var input = $('<input type="hidden" class="combo-value">').appendTo(combo); 
			if (name) input.attr('name', name); 
			input.val(values[i]); 
		} 
		 
		var tmp = []; 
		for(var i=0; i<oldValues.length; i++){ 
			tmp[i] = oldValues[i]; 
		} 
		var aa = []; 
		for(var i=0; i<values.length; i++){ 
			for(var j=0; j<tmp.length; j++){ 
				if (values[i] == tmp[j]){ 
					aa.push(values[i]); 
					tmp.splice(j, 1); 
					break; 
				} 
			} 
		} 
		 
		if (aa.length != values.length || values.length != oldValues.length){ 
			if (opts.multiple){ 
				opts.onChange.call(target, values, oldValues); 
			} else { 
				opts.onChange.call(target, values[0], oldValues[0]); 
			} 
		} 
	} 
	 
	function getValue(target){ 
		var values = getValues(target); 
		return values[0]; 
	} 
	 
	function setValue(target, value){ 
		setValues(target, [value]); 
	} 
	 
	/** 
	 * parse options from markup. 
	 */ 
	function parseOptions(target){ 
		var t = $(target); 
		return { 
			width: (parseInt(target.style.width) || undefined), 
			panelWidth: (parseInt(t.attr('panelWidth')) || undefined), 
			panelHeight: (t.attr('panelHeight')=='auto' ? 'auto' : parseInt(t.attr('panelHeight')) || undefined), 
			separator: (t.attr('separator') || undefined), 
			multiple: (t.attr('multiple') ? (t.attr('multiple') == 'true' || t.attr('multiple') == true) : undefined), 
			editable: (t.attr('editable') ? t.attr('editable') == 'true' : undefined), 
			disabled: (t.attr('disabled') ? true : undefined), 
			required: (t.attr('required') ? (t.attr('required') == 'true' || t.attr('required') == true) : undefined), 
			missingMessage: (t.attr('missingMessage') || undefined) 
		}; 
	} 
	 
	$.fn.combo = function(options, param){ 
		if (typeof options == 'string'){ 
			return $.fn.combo.methods[options](this, param); 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'combo'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				var r = init(this); 
				state = $.data(this, 'combo', { 
					options: $.extend({}, $.fn.combo.defaults, parseOptions(this), options), 
					combo: r.combo, 
					panel: r.panel 
				}); 
				$(this).removeAttr('disabled'); 
			} 
			$('input.combo-text', state.combo).attr('readonly', !state.options.editable); 
			setDisabled(this, state.options.disabled); 
			setSize(this); 
			bindEvents(this); 
			validate(this); 
		}); 
	}; 
	 
	$.fn.combo.methods = { 
		parseOptions: function(jq){ 
			return parseOptions(jq[0]); 
		}, 
		options: function(jq){ 
			return $.data(jq[0], 'combo').options; 
		}, 
		panel: function(jq){ 
			return $.data(jq[0], 'combo').panel; 
		}, 
		textbox: function(jq){ 
			return $.data(jq[0], 'combo').combo.find('input.combo-text'); 
		}, 
		destroy: function(jq){ 
			return jq.each(function(){ 
				destroy(this); 
			}); 
		}, 
		resize: function(jq, width){ 
			return jq.each(function(){ 
				setSize(this, width); 
			}); 
		}, 
		showPanel: function(jq){ 
			return jq.each(function(){ 
				showPanel(this); 
			}); 
		}, 
		hidePanel: function(jq){ 
			return jq.each(function(){ 
				hidePanel(this); 
			}); 
		}, 
		disable: function(jq){ 
			return jq.each(function(){ 
				setDisabled(this, true); 
				bindEvents(this); 
			}); 
		}, 
		enable: function(jq){ 
			return jq.each(function(){ 
				setDisabled(this, false); 
				bindEvents(this); 
			}); 
		}, 
		clear: function(jq){ 
			return jq.each(function(){ 
				clear(this); 
			}); 
		}, 
		getText: function(jq){ 
			return getText(jq[0]); 
		}, 
		setText: function(jq, text){ 
			return jq.each(function(){ 
				setText(this, text); 
			}); 
		}, 
		getValues: function(jq){ 
			return getValues(jq[0]); 
		}, 
		setValues: function(jq, values){ 
			return jq.each(function(){ 
				setValues(this, values); 
			}); 
		}, 
		getValue: function(jq){ 
			return getValue(jq[0]); 
		}, 
		setValue: function(jq, value){ 
			return jq.each(function(){ 
				setValue(this, value); 
			}); 
		} 
	}; 
	 
	$.fn.combo.defaults = { 
		width: 'auto', 
		panelWidth: null, 
		panelHeight: 200, 
		multiple: false, 
		separator: ',', 
		editable: true, 
		disabled: false, 
		required: false, 
		missingMessage: 'This field is required.', 
		 
		selectPrev: function(){}, 
		selectNext: function(){}, 
		selectCurr: function(){}, 
		filter: function(query){}, 
		 
		onChange: function(newValue, oldValue){} 
	}; 
})(jQuery); 
/** 
 * combobox - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 *   combo 
 *  
 */ 
(function($){ 
	/** 
	 * select previous item 
	 */ 
	function selectPrev(target){ 
		var panel = $(target).combo('panel'); 
		var values = $(target).combo('getValues'); 
		var item = panel.find('div.combobox-item[value=' + values.pop() + ']'); 
		if (item.length){ 
			var prev = item.prev(':visible'); 
			if (prev.length){ 
				item = prev; 
			} 
		} else { 
			item = panel.find('div.combobox-item:visible:last'); 
		} 
		var value = item.attr('value'); 
		setValues(target, [value]); 
		 
		if (item.position().top <= 0){ 
			var h = panel.scrollTop() + item.position().top; 
			panel.scrollTop(h); 
		} else if (item.position().top + item.outerHeight() > panel.height()){ 
			var h = panel.scrollTop() + item.position().top + item.outerHeight() - panel.height(); 
			panel.scrollTop(h); 
		} 
	} 
	 
	/** 
	 * select next item 
	 */ 
	function selectNext(target){ 
		var panel = $(target).combo('panel'); 
		var values = $(target).combo('getValues'); 
		var item = panel.find('div.combobox-item[value=' + values.pop() + ']'); 
		if (item.length){ 
			var next = item.next(':visible'); 
			if (next.length){ 
				item = next; 
			} 
		} else { 
			item = panel.find('div.combobox-item:visible:first'); 
		} 
		var value = item.attr('value'); 
		setValues(target, [value]); 
		 
		if (item.position().top <= 0){ 
			var h = panel.scrollTop() + item.position().top; 
			panel.scrollTop(h); 
		} else if (item.position().top + item.outerHeight() > panel.height()){ 
			var h = panel.scrollTop() + item.position().top + item.outerHeight() - panel.height(); 
			panel.scrollTop(h); 
		} 
	} 
	 
	function selectCurr(target){ 
		var panel = $(target).combo('panel'); 
		var item = panel.find('div.combobox-item-selected'); 
		setValues(target, [item.attr('value')]); 
		$(target).combo('hidePanel'); 
	} 
	 
	/** 
	 * select the specified value 
	 */ 
	function select(target, value){ 
		var opts = $.data(target, 'combobox').options; 
		var data = $.data(target, 'combobox').data; 
		 
		if (opts.multiple){ 
			var values = $(target).combo('getValues'); 
			for(var i=0; i<values.length; i++){ 
				if (values[i] == value) return; 
			} 
			values.push(value); 
			setValues(target, values); 
		} else { 
			setValues(target, [value]); 
			$(target).combo('hidePanel'); 
		} 
		 
		for(var i=0; i<data.length; i++){ 
			if (data[i][opts.valueField] == value){ 
				opts.onSelect.call(target, data[i]); 
				return; 
			} 
		} 
	} 
	 
	/** 
	 * unselect the specified value 
	 */ 
	function unselect(target, value){ 
		var opts = $.data(target, 'combobox').options; 
		var data = $.data(target, 'combobox').data; 
		var values = $(target).combo('getValues'); 
		for(var i=0; i<values.length; i++){ 
			if (values[i] == value){ 
				values.splice(i, 1); 
				setValues(target, values); 
				break; 
			} 
		} 
		for(var i=0; i<data.length; i++){ 
			if (data[i][opts.valueField] == value){ 
				opts.onUnselect.call(target, data[i]); 
				return; 
			} 
		} 
	} 
	 
	/** 
	 * set values 
	 */ 
	function setValues(target, values, remainText){ 
		var opts = $.data(target, 'combobox').options; 
		var data = $.data(target, 'combobox').data; 
		var panel = $(target).combo('panel'); 
		 
		panel.find('div.combobox-item-selected').removeClass('combobox-item-selected'); 
		var vv = [], ss = []; 
		for(var i=0; i<values.length; i++){ 
			var v = values[i]; 
			var s = v; 
			for(var j=0; j<data.length; j++){ 
				if (data[j][opts.valueField] == v){ 
					s = data[j][opts.textField]; 
					break; 
				} 
			} 
			vv.push(v); 
			ss.push(s); 
			panel.find('div.combobox-item[value=' + v + ']').addClass('combobox-item-selected'); 
		} 
		 
		$(target).combo('setValues', vv); 
		if (!remainText){ 
			$(target).combo('setText', ss.join(opts.separator)); 
		} 
	} 
	 
	/** 
	 * set value 
	 */ 
	function setValue(target, value){ 
		var opts = $.data(target, 'combobox').options; 
		var v = value; 
		if (typeof value == 'object'){ 
			v = value[opts.valueField]; 
		} 
		setValues(target, [v]); 
	} 
	 
	function transformData(target){ 
		var opts = $.data(target, 'combobox').options; 
		var data = []; 
		$('>option', target).each(function(){ 
			var item = {}; 
			item[opts.valueField] = $(this).attr('value') || $(this).html(); 
			item[opts.textField] = $(this).html(); 
			item['selected'] = $(this).attr('selected'); 
			data.push(item); 
		}); 
		return data; 
	} 
	 
	/** 
	 * load data, the old list items will be removed. 
	 */ 
	function loadData(target, data){ 
		var opts = $.data(target, 'combobox').options; 
		var panel = $(target).combo('panel'); 
		 
		$.data(target, 'combobox').data = data; 
		 
		var selected = []; 
		panel.empty();	// clear old data 
		for(var i=0; i<data.length; i++){ 
			var item = $('<div class="combobox-item"></div>').appendTo(panel); 
			item.attr('value', data[i][opts.valueField]); 
			item.html(data[i][opts.textField]); 
			if (data[i]['selected']){ 
				selected.push(data[i][opts.valueField]); 
			} 
		} 
		if (opts.multiple){ 
			setValues(target, selected); 
		} else { 
			if (selected.length){ 
				setValues(target, [selected[0]]); 
			} else { 
				setValues(target, []); 
			} 
		} 
		 
		opts.onLoadSuccess.call(target, data); 
		 
		$('.combobox-item', panel).hover( 
			function(){$(this).addClass('combobox-item-hover');}, 
			function(){$(this).removeClass('combobox-item-hover');} 
		).click(function(){ 
			var item = $(this); 
			if (opts.multiple){ 
				if (item.hasClass('combobox-item-selected')){ 
					unselect(target, item.attr('value')); 
				} else { 
					select(target, item.attr('value')); 
				} 
			} else { 
				select(target, item.attr('value')); 
			} 
		}); 
	} 
	 
	/** 
	 * request remote data if the url property is setted. 
	 */ 
	function request(target, url){ 
		var opts = $.data(target, 'combobox').options; 
		if (url){ 
			opts.url = url; 
		} 
		if (!opts.url) return; 
 
		$.ajax({ 
			url:opts.url, 
			dataType:'json', 
			success:function(data){ 
				loadData(target, data); 
			}, 
			error:function(){ 
				opts.onLoadError.apply(this, arguments); 
			} 
		}) 
	} 
	 
	function filter(target, query){ 
		$(target).combo('showPanel'); 
		var data = $.data(target, 'combobox').data; 
		var panel = $(target).combo('panel'); 
		setValues(target, [], true); 
		panel.find('div.combobox-item').each(function(){ 
			var item = $(this); 
			if (item.text().indexOf(query) == 0){ 
				item.show(); 
				if (item.text() == query){ 
					item.addClass('combobox-item-selected'); 
				} 
			} else { 
				item.hide(); 
			} 
		}); 
	} 
	 
	function create(target){ 
		var opts = $.data(target, 'combobox').options; 
		$(target).combo(opts); 
	} 
	 
	/** 
	 * parse options from markup. 
	 */ 
	function parseOptions(target){ 
		var t = $(target); 
		return $.extend({}, t.combo('parseOptions'), { 
			valueField: t.attr('valueField'), 
			textField: t.attr('textField'), 
			url: t.attr('url') 
		}); 
	} 
	 
	$.fn.combobox = function(options, param){ 
		if (typeof options == 'string'){ 
			var method = $.fn.combobox.methods[options]; 
			if (method){ 
				return method(this, param); 
			} else { 
				return this.combo(options, param); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'combobox'); 
			if (state){ 
				$.extend(state.options, options); 
				create(this); 
			} else { 
				state = $.data(this, 'combobox', { 
					options: $.extend({}, $.fn.combo.defaults, $.fn.combobox.defaults, parseOptions(this), options) 
				}); 
				create(this); 
				loadData(this, transformData(this)); 
			} 
			if (state.options.data){ 
				loadData(this, state.options.data); 
			} 
			request(this); 
		}); 
	}; 
	 
	 
	$.fn.combobox.methods = { 
		parseOptions: function(jq){ 
			return parseOptions(jq[0]); 
		}, 
		options: function(jq){ 
			return $.data(jq[0], 'combobox').options; 
		}, 
		getData: function(jq){ 
			return $.data(jq[0], 'combobox').data; 
		}, 
		setValues: function(jq, values){ 
			return jq.each(function(){ 
				setValues(this, values); 
			}); 
		}, 
		setValue: function(jq, value){ 
			return jq.each(function(){ 
				setValue(this, value); 
			}); 
		}, 
		loadData: function(jq, data){ 
			return jq.each(function(){ 
				loadData(this, data); 
			}); 
		}, 
		reload: function(jq, url){ 
			return jq.each(function(){ 
				request(this, url); 
			}); 
		}, 
		select: function(jq, value){ 
			return jq.each(function(){ 
				select(this, value); 
			}); 
		}, 
		unselect: function(jq, value){ 
			return jq.each(function(){ 
				unselect(this, value); 
			}); 
		} 
	}; 
	 
	$.fn.combobox.defaults = { 
		valueField: 'value', 
		textField: 'text', 
		url: null, 
		data: null, 
		 
		selectPrev: function(){selectPrev(this);}, 
		selectNext: function(){selectNext(this);}, 
		selectCurr: function(){selectCurr(this);}, 
		filter: function(query){filter(this, query);}, 
		 
		onLoadSuccess: function(){}, 
		onLoadError: function(){}, 
		onSelect: function(record){}, 
		onUnselect: function(record){} 
	}; 
})(jQuery);/** 
 * resizable - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 */ 
(function($){ 
	$.fn.resizable = function(options){ 
		function resize(e){ 
			var resizeData = e.data; 
			var options = $.data(resizeData.target, 'resizable').options; 
			if (resizeData.dir.indexOf('e') != -1) { 
				var width = resizeData.startWidth + e.pageX - resizeData.startX; 
				width = Math.min( 
							Math.max(width, options.minWidth), 
							options.maxWidth 
						); 
				resizeData.width = width; 
			} 
			if (resizeData.dir.indexOf('s') != -1) { 
				var height = resizeData.startHeight + e.pageY - resizeData.startY; 
				height = Math.min( 
						Math.max(height, options.minHeight), 
						options.maxHeight 
				); 
				resizeData.height = height; 
			} 
			if (resizeData.dir.indexOf('w') != -1) { 
				resizeData.width = resizeData.startWidth - e.pageX + resizeData.startX; 
				if (resizeData.width >= options.minWidth && resizeData.width <= options.maxWidth) { 
					resizeData.left = resizeData.startLeft + e.pageX - resizeData.startX; 
				} 
			} 
			if (resizeData.dir.indexOf('n') != -1) { 
				resizeData.height = resizeData.startHeight - e.pageY + resizeData.startY; 
				if (resizeData.height >= options.minHeight && resizeData.height <= options.maxHeight) { 
					resizeData.top = resizeData.startTop + e.pageY - resizeData.startY; 
				} 
			} 
		} 
		 
		function applySize(e){ 
			var resizeData = e.data; 
			var target = resizeData.target; 
			if ($.boxModel == true){ 
				$(target).css({ 
					width: resizeData.width - resizeData.deltaWidth, 
					height: resizeData.height - resizeData.deltaHeight, 
					left: resizeData.left, 
					top: resizeData.top 
				}); 
			} else { 
				$(target).css({ 
					width: resizeData.width, 
					height: resizeData.height, 
					left: resizeData.left, 
					top: resizeData.top 
				}); 
			} 
		} 
		 
		function doDown(e){ 
			$.data(e.data.target, 'resizable').options.onStartResize.call(e.data.target, e); 
			return false; 
		} 
		 
		function doMove(e){ 
			resize(e); 
			if ($.data(e.data.target, 'resizable').options.onResize.call(e.data.target, e) != false){ 
				applySize(e) 
			} 
			return false; 
		} 
		 
		function doUp(e){ 
			resize(e, true); 
			applySize(e); 
			$(document).unbind('.resizable'); 
			$.data(e.data.target, 'resizable').options.onStopResize.call(e.data.target, e); 
			return false; 
		} 
		 
		return this.each(function(){ 
			var opts = null; 
			var state = $.data(this, 'resizable'); 
			if (state) { 
				$(this).unbind('.resizable'); 
				opts = $.extend(state.options, options || {}); 
			} else { 
				opts = $.extend({}, $.fn.resizable.defaults, options || {}); 
			} 
			 
			if (opts.disabled == true) { 
				return; 
			} 
			 
			$.data(this, 'resizable', { 
				options: opts 
			}); 
			 
			var target = this; 
			 
			// bind mouse event using namespace resizable 
			$(this).bind('mousemove.resizable', onMouseMove) 
				   .bind('mousedown.resizable', onMouseDown); 
			 
			function onMouseMove(e) { 
				var dir = getDirection(e); 
				if (dir == '') { 
					$(target).css('cursor', 'default'); 
				} else { 
					$(target).css('cursor', dir + '-resize'); 
				} 
			} 
			 
			function onMouseDown(e) { 
				var dir = getDirection(e); 
				if (dir == '') return; 
				 
				var data = { 
					target: this, 
					dir: dir, 
					startLeft: getCssValue('left'), 
					startTop: getCssValue('top'), 
					left: getCssValue('left'), 
					top: getCssValue('top'), 
					startX: e.pageX, 
					startY: e.pageY, 
					startWidth: $(target).outerWidth(), 
					startHeight: $(target).outerHeight(), 
					width: $(target).outerWidth(), 
					height: $(target).outerHeight(), 
					deltaWidth: $(target).outerWidth() - $(target).width(), 
					deltaHeight: $(target).outerHeight() - $(target).height() 
				}; 
				$(document).bind('mousedown.resizable', data, doDown); 
				$(document).bind('mousemove.resizable', data, doMove); 
				$(document).bind('mouseup.resizable', data, doUp); 
			} 
			 
			// get the resize direction 
			function getDirection(e) { 
				var dir = ''; 
				var offset = $(target).offset(); 
				var width = $(target).outerWidth(); 
				var height = $(target).outerHeight(); 
				var edge = opts.edge; 
				if (e.pageY > offset.top && e.pageY < offset.top + edge) { 
					dir += 'n'; 
				} else if (e.pageY < offset.top + height && e.pageY > offset.top + height - edge) { 
					dir += 's'; 
				} 
				if (e.pageX > offset.left && e.pageX < offset.left + edge) { 
					dir += 'w'; 
				} else if (e.pageX < offset.left + width && e.pageX > offset.left + width - edge) { 
					dir += 'e'; 
				} 
				 
				var handles = opts.handles.split(','); 
				for(var i=0; i<handles.length; i++) { 
					var handle = handles[i].replace(/(^\s*)|(\s*$)/g, ''); 
					if (handle == 'all' || handle == dir) { 
						return dir; 
					} 
				} 
				return ''; 
			} 
			 
			function getCssValue(css) { 
				var val = parseInt($(target).css(css)); 
				if (isNaN(val)) { 
					return 0; 
				} else { 
					return val; 
				} 
			} 
			 
		}); 
	}; 
	 
	$.fn.resizable.defaults = { 
			disabled:false, 
			handles:'n, e, s, w, ne, se, sw, nw, all', 
			minWidth: 10, 
			minHeight: 10, 
			maxWidth: 10000,//$(document).width(), 
			maxHeight: 10000,//$(document).height(), 
			edge:5, 
			onStartResize: function(e){}, 
			onResize: function(e){}, 
			onStopResize: function(e){} 
	}; 
	 
})(jQuery);/** 
 * linkbutton - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 */ 
(function($){ 
	 
	function createButton(target) { 
		var opts = $.data(target, 'linkbutton').options; 
		 
		$(target).empty(); 
		$(target).addClass('l-btn'); 
		if (opts.id){ 
			$(target).attr('id', opts.id); 
		} else { 
			$(target).removeAttr('id'); 
		} 
		if (opts.plain){ 
			$(target).addClass('l-btn-plain'); 
		} else { 
			$(target).removeClass('l-btn-plain'); 
		} 
		 
		if (opts.text){ 
			$(target).html(opts.text).wrapInner( 
					'<span class="l-btn-left">' + 
					'<span class="l-btn-text">' + 
					'</span>' + 
					'</span>' 
			); 
			if (opts.iconCls){ 
				$(target).find('.l-btn-text').addClass(opts.iconCls).css('padding-left', '20px'); 
			} 
		} else { 
			$(target).html('&nbsp;').wrapInner( 
					'<span class="l-btn-left">' + 
					'<span class="l-btn-text">' + 
					'<span class="l-btn-empty"></span>' + 
					'</span>' + 
					'</span>' 
			); 
			if (opts.iconCls){ 
				$(target).find('.l-btn-empty').addClass(opts.iconCls); 
			} 
		} 
		 
		setDisabled(target, opts.disabled); 
	} 
	 
	function setDisabled(target, disabled){ 
		var state = $.data(target, 'linkbutton'); 
		if (disabled){ 
			state.options.disabled = true; 
			var href = $(target).attr('href'); 
			if (href){ 
				state.href = href; 
				$(target).attr('href', 'javascript:void(0)'); 
			} 
			var onclick = $(target).attr('onclick'); 
			if (onclick) { 
				state.onclick = onclick; 
				$(target).attr('onclick', null); 
			} 
			$(target).addClass('l-btn-disabled'); 
		} else { 
			state.options.disabled = false; 
			if (state.href) { 
				$(target).attr('href', state.href); 
			} 
			if (state.onclick) { 
				target.onclick = state.onclick; 
			} 
			$(target).removeClass('l-btn-disabled'); 
		} 
	} 
	 
	$.fn.linkbutton = function(options){ 
		if (typeof options == 'string'){ 
			switch(options){ 
			case 'options': 
				return $.data(this[0], 'linkbutton').options; 
			case 'enable': 
				return this.each(function(){ 
					setDisabled(this, false); 
				}); 
			case 'disable': 
				return this.each(function(){ 
					setDisabled(this, true); 
				}); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'linkbutton'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				var t = $(this); 
				$.data(this, 'linkbutton', { 
					options: $.extend({}, $.fn.linkbutton.defaults, { 
						id: t.attr('id'), 
						disabled: (t.attr('disabled') ? true : undefined), 
						plain: (t.attr('plain') ? t.attr('plain') == 'true' : undefined), 
						text: $.trim(t.html()), 
						iconCls: t.attr('icon') 
					}, options) 
				}); 
				t.removeAttr('disabled'); 
			} 
			 
			createButton(this); 
		}); 
	}; 
	 
	$.fn.linkbutton.defaults = { 
			id: null, 
			disabled: false, 
			plain: false, 
			text: '', 
			iconCls: null 
	}; 
	 
})(jQuery); 
/** 
 * pagination - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	linkbutton 
 *  
 */ 
(function($){ 
	function buildToolbar(target){ 
		var opts = $.data(target, 'pagination').options; 
		 
		var pager = $(target).addClass('pagination').empty(); 
		var t = $('<table cellspacing="0" cellpadding="0" border="0"><tr></tr></table>').appendTo(pager); 
		var tr = $('tr', t); 
		 
		if (opts.showPageList){ 
			var ps = $('<select class="pagination-page-list"></select>'); 
			for(var i=0; i<opts.pageList.length; i++) { 
				$('<option></option>') 
						.text(opts.pageList[i]) 
						.attr('selected', opts.pageList[i]==opts.pageSize ? 'selected' : '') 
						.appendTo(ps); 
			} 
			$('<td></td>').append(ps).appendTo(tr); 
			 
			opts.pageSize = parseInt(ps.val()); 
			 
			$('<td><div class="pagination-btn-separator"></div></td>').appendTo(tr); 
		} 
		 
		$('<td><a href="javascript:void(0)" icon="pagination-first"></a></td>').appendTo(tr); 
		$('<td><a href="javascript:void(0)" icon="pagination-prev"></a></td>').appendTo(tr); 
		$('<td><div class="pagination-btn-separator"></div></td>').appendTo(tr); 
		 
		$('<span style="padding-left:6px;"></span>') 
				.html(opts.beforePageText) 
				.wrap('<td></td>') 
				.parent().appendTo(tr); 
		$('<td><input class="pagination-num" type="text" value="1" size="2"></td>').appendTo(tr); 
		$('<span style="padding-right:6px;"></span>') 
//				.html(opts.afterPageText) 
				.wrap('<td></td>') 
				.parent().appendTo(tr); 
		 
		$('<td><div class="pagination-btn-separator"></div></td>').appendTo(tr); 
		$('<td><a href="javascript:void(0)" icon="pagination-next"></a></td>').appendTo(tr); 
		$('<td><a href="javascript:void(0)" icon="pagination-last"></a></td>').appendTo(tr); 
		 
		if (opts.showRefresh){ 
			$('<td><div class="pagination-btn-separator"></div></td>').appendTo(tr); 
			$('<td><a href="javascript:void(0)" icon="pagination-load"></a></td>').appendTo(tr); 
			 
//			if (opts.loading) { 
//				$('<td><a class="pagination-refresh" href="javascript:void(0)" icon="pagination-loading"></a></td>').appendTo(tr); 
//			} else { 
//				$('<td><a class="pagination-refresh" href="javascript:void(0)" icon="pagination-load"></a></td>').appendTo(tr); 
//			} 
		} 
		 
		if (opts.buttons){ 
			$('<td><div class="pagination-btn-separator"></div></td>').appendTo(tr); 
			for(var i=0; i<opts.buttons.length; i++){ 
				var btn = opts.buttons[i]; 
				if (btn == '-') { 
					$('<td><div class="pagination-btn-separator"></div></td>').appendTo(tr); 
				} else { 
					var td = $('<td></td>').appendTo(tr); 
					$('<a href="javascript:void(0)"></a>') 
							.addClass('l-btn') 
							.css('float', 'left') 
							.text(btn.text || '') 
							.attr('icon', btn.iconCls || '') 
							.bind('click', eval(btn.handler || function(){})) 
							.appendTo(td) 
							.linkbutton({plain:true}); 
				} 
			} 
		} 
		 
		$('<div class="pagination-info"></div>').appendTo(pager); 
		$('<div style="clear:both;"></div>').appendTo(pager); 
		 
		 
		$('a[icon^=pagination]', pager).linkbutton({plain:true}); 
		 
		pager.find('a[icon=pagination-first]').unbind('.pagination').bind('click.pagination', function(){ 
			if (opts.pageNumber > 1) selectPage(target, 1); 
		}); 
		pager.find('a[icon=pagination-prev]').unbind('.pagination').bind('click.pagination', function(){ 
			if (opts.pageNumber > 1) selectPage(target, opts.pageNumber - 1); 
		}); 
		pager.find('a[icon=pagination-next]').unbind('.pagination').bind('click.pagination', function(){ 
			var pageCount = Math.ceil(opts.total/opts.pageSize); 
			if (opts.pageNumber < pageCount) selectPage(target, opts.pageNumber + 1); 
		}); 
		pager.find('a[icon=pagination-last]').unbind('.pagination').bind('click.pagination', function(){ 
			var pageCount = Math.ceil(opts.total/opts.pageSize); 
			if (opts.pageNumber < pageCount) selectPage(target, pageCount); 
		}); 
		pager.find('a[icon=pagination-load]').unbind('.pagination').bind('click.pagination', function(){ 
			if (opts.onBeforeRefresh.call(target, opts.pageNumber, opts.pageSize) != false){ 
				selectPage(target, opts.pageNumber); 
				opts.onRefresh.call(target, opts.pageNumber, opts.pageSize); 
			} 
		}); 
		pager.find('input.pagination-num').unbind('.pagination').bind('keydown.pagination', function(e){ 
			if (e.keyCode == 13){ 
				var pageNumber = parseInt($(this).val()) || 1; 
				selectPage(target, pageNumber); 
			} 
		}); 
		pager.find('.pagination-page-list').unbind('.pagination').bind('change.pagination', function(){ 
			opts.pageSize = $(this).val(); 
			opts.onChangePageSize.call(target, opts.pageSize); 
			 
			var pageCount = Math.ceil(opts.total/opts.pageSize); 
			selectPage(target, opts.pageNumber); 
		}); 
	} 
	 
	function selectPage(target, page){ 
		var opts = $.data(target, 'pagination').options; 
		var pageCount = Math.ceil(opts.total/opts.pageSize); 
		var pageNumber = page; 
		if (page < 1) pageNumber = 1; 
		if (page > pageCount) pageNumber = pageCount; 
		opts.onSelectPage.call(target, pageNumber, opts.pageSize); 
		opts.pageNumber = pageNumber; 
		showInfo(target); 
	} 
	 
	function showInfo(target){ 
		var opts = $.data(target, 'pagination').options; 
		 
		var pageCount = Math.ceil(opts.total/opts.pageSize); 
		var num = $(target).find('input.pagination-num'); 
		num.val(opts.pageNumber); 
		num.parent().next().find('span').html(opts.afterPageText.replace(/{pages}/, pageCount)); 
		 
		var pinfo = opts.displayMsg; 
		pinfo = pinfo.replace(/{from}/, opts.pageSize*(opts.pageNumber-1)+1); 
		pinfo = pinfo.replace(/{to}/, Math.min(opts.pageSize*(opts.pageNumber), opts.total)); 
		pinfo = pinfo.replace(/{total}/, opts.total); 
		 
		$(target).find('.pagination-info').html(pinfo); 
		 
		$('a[icon=pagination-first],a[icon=pagination-prev]', target).linkbutton({ 
			disabled: (opts.pageNumber == 1) 
		}); 
		$('a[icon=pagination-next],a[icon=pagination-last]', target).linkbutton({ 
			disabled: (opts.pageNumber == pageCount) 
		}); 
		 
		if (opts.loading){ 
			$(target).find('a[icon=pagination-load]').find('.pagination-load').addClass('pagination-loading'); 
		} else { 
			$(target).find('a[icon=pagination-load]').find('.pagination-load').removeClass('pagination-loading'); 
		} 
	} 
	 
	function setLoadStatus(target, loading){ 
		var opts = $.data(target, 'pagination').options; 
		opts.loading = loading; 
		if (opts.loading){ 
			$(target).find('a[icon=pagination-load]').find('.pagination-load').addClass('pagination-loading'); 
		} else { 
			$(target).find('a[icon=pagination-load]').find('.pagination-load').removeClass('pagination-loading'); 
		} 
	} 
	 
	$.fn.pagination = function(options) { 
		if (typeof options == 'string'){ 
			switch(options){ 
				case 'options': 
					return $.data(this[0], 'pagination').options; 
				case 'loading': 
					return this.each(function(){ 
						setLoadStatus(this, true); 
					}); 
				case 'loaded': 
					return this.each(function(){ 
						setLoadStatus(this, false); 
					}); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var opts; 
			var state = $.data(this, 'pagination'); 
			if (state) { 
				opts = $.extend(state.options, options); 
			} else { 
				opts = $.extend({}, $.fn.pagination.defaults, options); 
				$.data(this, 'pagination', { 
					options: opts 
				}); 
			} 
			 
			buildToolbar(this); 
			showInfo(this); 
			 
		}); 
	}; 
	 
	$.fn.pagination.defaults = { 
		total: 1, 
		pageSize: 10, 
		pageNumber: 1, 
		pageList: [10,20,30,50], 
		loading: false, 
		buttons: null, 
		showPageList: true, 
		showRefresh: true, 
		 
		onSelectPage: function(pageNumber, pageSize){}, 
		onBeforeRefresh: function(pageNumber, pageSize){}, 
		onRefresh: function(pageNumber, pageSize){}, 
		onChangePageSize: function(pageSize){}, 
		 
		beforePageText: 'Page', 
		afterPageText: 'of {pages}', 
		displayMsg: 'Displaying {from} to {to} of {total} items' 
	}; 
})(jQuery);/** 
 * datagrid - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	resizable 
 * 	linkbutton 
 * 	pagination 
 *  
 */ 
(function($){ 
	 
	function setSize(target) { 
		var grid = $.data(target, 'datagrid').grid; 
		var opts = $.data(target, 'datagrid').options; 
		if (opts.fit == true){ 
			var p = grid.parent(); 
			opts.width = p.width(); 
			opts.height = p.height(); 
		} 
		 
		if (opts.rownumbers || (opts.frozenColumns && opts.frozenColumns.length>0)){ 
			$('.datagrid-body .datagrid-cell,.datagrid-body .datagrid-cell-rownumber',grid).addClass('datagrid-cell-height'); 
		} 
		 
		var gridWidth = opts.width; 
		if (gridWidth == 'auto') { 
			if ($.boxModel == true) { 
				gridWidth = grid.width(); 
			} else { 
				gridWidth = grid.outerWidth(); 
			} 
		} else { 
			if ($.boxModel == true){ 
				gridWidth -= grid.outerWidth() - grid.width(); 
			} 
		} 
		grid.width(gridWidth); 
		 
		var innerWidth = gridWidth; 
		if ($.boxModel == false) { 
			innerWidth = gridWidth - grid.outerWidth() + grid.width(); 
		} 
		 
		$('.datagrid-wrap', grid).width(innerWidth); 
		$('.datagrid-view', grid).width(innerWidth); 
		$('.datagrid-view1',grid).width($('.datagrid-view1 table',grid).width()); 
		$('.datagrid-view2',grid).width(innerWidth - $('.datagrid-view1',grid).outerWidth()); 
		$('.datagrid-view1 .datagrid-header',grid).width($('.datagrid-view1',grid).width()); 
		$('.datagrid-view1 .datagrid-body',grid).width($('.datagrid-view1',grid).width()); 
		$('.datagrid-view2 .datagrid-header',grid).width($('.datagrid-view2',grid).width()); 
		$('.datagrid-view2 .datagrid-body',grid).width($('.datagrid-view2',grid).width()); 
		 
		var hh; 
		var header1 = $('.datagrid-view1 .datagrid-header',grid); 
		var header2 = $('.datagrid-view2 .datagrid-header',grid); 
		header1.css('height', null); 
		header2.css('height', null); 
		if ($.boxModel == true){ 
			hh = Math.max(header1.height(), header2.height()); 
		} else { 
			hh = Math.max(header1.outerHeight(), header2.outerHeight()); 
		} 
		$('.datagrid-view1 .datagrid-header table',grid).height(hh); 
		$('.datagrid-view2 .datagrid-header table',grid).height(hh); 
		header1.height(hh); 
		header2.height(hh); 
		 
		if (opts.height == 'auto') { 
			$('.datagrid-body', grid).height($('.datagrid-view2 .datagrid-body table', grid).height()); 
		} else { 
			$('.datagrid-body', grid).height( 
					opts.height 
					- (grid.outerHeight() - grid.height()) 
					- $('.datagrid-header', grid).outerHeight(true) 
					- $('.datagrid-title', grid).outerHeight(true) 
					- $('.datagrid-toolbar', grid).outerHeight(true) 
					- $('.datagrid-pager', grid).outerHeight(true) 
			); 
		} 
		 
		$('.datagrid-view',grid).height($('.datagrid-view2',grid).height()); 
		$('.datagrid-view1',grid).height($('.datagrid-view2',grid).height()); 
		$('.datagrid-view2',grid).css('left', $('.datagrid-view1',grid).outerWidth()); 
	} 
	 
	/** 
	 * wrap and return the grid object, fields and columns 
	 */ 
	function wrapGrid(target, rownumbers) { 
		var grid = $(target).wrap('<div class="datagrid"></div>').parent(); 
		 
		grid.append( 
				'<div class="datagrid-wrap">' + 
					'<div class="datagrid-view">' + 
						'<div class="datagrid-view1">' + 
							'<div class="datagrid-header">' + 
								'<div class="datagrid-header-inner"></div>' + 
							'</div>' + 
							'<div class="datagrid-body">' + 
								'<div class="datagrid-body-inner">' + 
									'<table border="0" cellspacing="0" cellpadding="0"></table>' + 
								'</div>' + 
							'</div>' + 
						'</div>' + 
						'<div class="datagrid-view2">' + 
							'<div class="datagrid-header">' + 
								'<div class="datagrid-header-inner"></div>' + 
							'</div>' + 
							'<div class="datagrid-body"></div>' + 
						'</div>' + 
						'<div class="datagrid-resize-proxy"></div>' + 
					'</div>' + 
				'</div>' 
		); 
		 
		var frozenColumns = getColumns($('thead[frozen=true]', target)); 
		$('thead[frozen=true]', target).remove(); 
		var columns = getColumns($('thead', target)); 
		$('thead', target).remove(); 
		 
		$(target).attr({ 
			cellspacing: 0, 
			cellpadding: 0, 
			border: 0 
		}).removeAttr('width').removeAttr('height').appendTo($('.datagrid-view2 .datagrid-body', grid)); 
		 
		 
		function getColumns(thead){ 
			var columns = []; 
			$('tr', thead).each(function(){ 
				var cols = []; 
				$('th', this).each(function(){ 
					var th = $(this); 
					var col = { 
						title: th.html(), 
						align: th.attr('align') || 'left', 
						sortable: th.attr('sortable')=='true' || false, 
						checkbox: th.attr('checkbox')=='true' || false 
					}; 
					if (th.attr('field')) { 
						col.field = th.attr('field'); 
					} 
					if (th.attr('formatter')){ 
						col.formatter = eval(th.attr('formatter')); 
					} 
					if (th.attr('rowspan')) col.rowspan = parseInt(th.attr('rowspan')); 
					if (th.attr('colspan')) col.colspan = parseInt(th.attr('colspan')); 
					if (th.attr('width')) col.width = parseInt(th.attr('width')); 
					 
					cols.push(col); 
				}); 
				columns.push(cols); 
			}); 
			 
			return columns; 
		} 
		 
		var fields = getColumnFields(columns); 
		$('.datagrid-view2 .datagrid-body tr', grid).each(function(){ 
			for(var i=0; i<fields.length; i++){ 
				$('td:eq('+i+')', this) 
						.addClass('datagrid-column-'+fields[i]) 
						.wrapInner('<div class="datagrid-cell"></div>'); 
			} 
		}); 
		 
		grid.bind('_resize', function(){ 
			var opts = $.data(target, 'datagrid').options; 
			if (opts.fit == true){ 
				setSize(target); 
				fixColumnSize(target); 
			} 
			return false; 
		}); 
		 
		return { 
			grid: grid, 
			frozenColumns: frozenColumns, 
			columns: columns 
		}; 
	} 
	 
	function createColumnHeader(columns){ 
		var t = $('<table border="0" cellspacing="0" cellpadding="0"><thead></thead></table>'); 
		for(var i=0; i<columns.length; i++) { 
			var tr = $('<tr></tr>').appendTo($('thead', t)); 
			var cols = columns[i]; 
			for(var j=0; j<cols.length; j++){ 
				var col = cols[j]; 
				 
				var attr = ''; 
				if (col.rowspan) attr += 'rowspan="' + col.rowspan + '" '; 
				if (col.colspan) attr += 'colspan="' + col.colspan + '" '; 
				var th = $('<th ' + attr + '></th>').appendTo(tr); 
				 
				if (col.checkbox){ 
					th.attr('field', col.field); 
					$('<div class="datagrid-header-check"></div>') 
							.html('<input type="checkbox"/>') 
							.appendTo(th); 
				} else if (col.field){ 
					th.append('<div class="datagrid-cell"><span></span><span class="datagrid-sort-icon"></span></div>'); 
					th.attr('field', col.field); 
					$('.datagrid-cell', th).width(col.width); 
					$('span', th).html(col.title); 
					$('span.datagrid-sort-icon', th).html('&nbsp;'); 
				} else { 
					th.append('<div class="datagrid-cell-group"></div>'); 
					$('.datagrid-cell-group', th).html(col.title); 
				} 
			} 
			 
		} 
		return t; 
	} 
	 
	/** 
	 * set the common properties 
	 */ 
	function setProperties(target) { 
		var grid = $.data(target, 'datagrid').grid; 
		var opts = $.data(target, 'datagrid').options; 
		var data = $.data(target, 'datagrid').data; 
		 
		if (opts.striped) { 
			$('.datagrid-view1 .datagrid-body tr:odd', grid).addClass('datagrid-row-alt'); 
			$('.datagrid-view2 .datagrid-body tr:odd', grid).addClass('datagrid-row-alt'); 
		} 
		if (opts.nowrap == false) { 
			$('.datagrid-body .datagrid-cell', grid).css('white-space', 'normal'); 
		} 
		 
		$('.datagrid-header th:has(.datagrid-cell)', grid).hover( 
			function(){$(this).addClass('datagrid-header-over');}, 
			function(){$(this).removeClass('datagrid-header-over');} 
		); 
		 
		$('.datagrid-body tr', grid).mouseover(function(){ 
			var index = $(this).attr('datagrid-row-index'); 
			$('.datagrid-body tr[datagrid-row-index='+index+']',grid).addClass('datagrid-row-over'); 
		}).mouseout(function(){ 
			var index = $(this).attr('datagrid-row-index'); 
			$('.datagrid-body tr[datagrid-row-index='+index+']',grid).removeClass('datagrid-row-over'); 
		}).click(function(){ 
			var index = $(this).attr('datagrid-row-index'); 
			if ($(this).hasClass('datagrid-row-selected')){ 
				unselectRow(target, index); 
			} else { 
				selectRow(target, index); 
			} 
			if (opts.onClickRow){ 
				opts.onClickRow.call(this, index, data.rows[index]); 
			} 
		}).dblclick(function(){ 
			var index = $(this).attr('datagrid-row-index'); 
			if (opts.onDblClickRow){ 
				opts.onDblClickRow.call(this, index, data.rows[index]); 
			} 
		}); 
		 
		function onHeaderCellClick(){ 
			var field = $(this).parent().attr('field'); 
			var opt = getColumnOption(target, field); 
			if (!opt.sortable) return; 
			 
			opts.sortName = field; 
			opts.sortOrder = 'asc'; 
			 
			var c = 'datagrid-sort-asc'; 
			if ($(this).hasClass('datagrid-sort-asc')){ 
				c = 'datagrid-sort-desc'; 
				opts.sortOrder = 'desc'; 
			} 
			$('.datagrid-header .datagrid-cell', grid).removeClass('datagrid-sort-asc'); 
			$('.datagrid-header .datagrid-cell', grid).removeClass('datagrid-sort-desc'); 
			$(this).addClass(c); 
			 
			if (opts.onSortColumn){ 
				opts.onSortColumn.call(this, opts.sortName, opts.sortOrder); 
			} 
			request(target); 
		} 
		 
		function onHeaderCheckboxClick(){ 
			if ($(this).attr('checked')){ 
				$('.datagrid-view2 .datagrid-body tr', grid).each(function(){ 
					if (!$(this).hasClass('datagrid-row-selected')){ 
						$(this).trigger('click'); 
					} 
				}); 
			} else { 
				$('.datagrid-view2 .datagrid-body tr', grid).each(function(){ 
					if ($(this).hasClass('datagrid-row-selected')){ 
						$(this).trigger('click'); 
					} 
				}); 
			} 
		} 
		 
		$('.datagrid-header .datagrid-cell', grid).unbind('.datagrid'); 
		$('.datagrid-header .datagrid-cell', grid).bind('click.datagrid', onHeaderCellClick); 
		 
		$('.datagrid-header .datagrid-header-check input[type=checkbox]', grid).unbind('.datagrid'); 
		$('.datagrid-header .datagrid-header-check input[type=checkbox]', grid).bind('click.datagrid', onHeaderCheckboxClick); 
		 
		$('.datagrid-header .datagrid-cell', grid).resizable({ 
			handles:'e', 
			minWidth:50, 
			onStartResize: function(e){ 
				$('.datagrid-resize-proxy', grid).css({ 
					left:e.pageX - $(grid).offset().left - 1 
				}); 
				$('.datagrid-resize-proxy', grid).css('display', 'block'); 
			}, 
			onResize: function(e){ 
				$('.datagrid-resize-proxy', grid).css({ 
					left:e.pageX - $(grid).offset().left - 1 
				}); 
				return false; 
			}, 
			onStopResize: function(e){ 
				fixColumnSize(target, this); 
				$('.datagrid-view2 .datagrid-header', grid).scrollLeft($('.datagrid-view2 .datagrid-body', grid).scrollLeft()); 
				$('.datagrid-resize-proxy', grid).css('display', 'none'); 
			} 
		}); 
		$('.datagrid-view1 .datagrid-header .datagrid-cell', grid).resizable({ 
			onStopResize: function(e){ 
				fixColumnSize(target, this); 
				$('.datagrid-view2 .datagrid-header', grid).scrollLeft($('.datagrid-view2 .datagrid-body', grid).scrollLeft()); 
				$('.datagrid-resize-proxy', grid).css('display', 'none'); 
				setSize(target); 
			} 
		}); 
		 
		var body1 = $('.datagrid-view1 .datagrid-body', grid); 
		var body2 = $('.datagrid-view2 .datagrid-body', grid); 
		var header2 = $('.datagrid-view2 .datagrid-header', grid); 
		body2.scroll(function(){ 
			header2.scrollLeft(body2.scrollLeft()); 
			body1.scrollTop(body2.scrollTop()); 
		}); 
	} 
	 
	/** 
	 * fix column size with the special cell element 
	 */ 
	function fixColumnSize(target, cell) { 
		var grid = $.data(target, 'datagrid').grid; 
		var opts = $.data(target, 'datagrid').options; 
		 
		if (cell) { 
			fix(cell); 
		} else { 
			$('.datagrid-header .datagrid-cell', grid).each(function(){ 
				fix(this); 
			}); 
		} 
		 
		function fix(cell) { 
			var headerCell = $(cell); 
			if (headerCell.width() == 0) return; 
			 
			var fieldName = headerCell.parent().attr('field'); 
			$('.datagrid-body td.datagrid-column-' + fieldName + ' .datagrid-cell', grid).each(function(){ 
				var bodyCell = $(this); 
				if ($.boxModel == true) { 
					bodyCell.width(headerCell.outerWidth() - bodyCell.outerWidth() + bodyCell.width()); 
				} else { 
					bodyCell.width(headerCell.outerWidth()); 
				} 
				 
			}); 
			 
			var col = getColumnOption(target, fieldName); 
			col.width = $.boxModel==true ? headerCell.width() : headerCell.outerWidth(); 
			 
		} 
	} 
	 
	function getColumnOption(target, field){ 
		var opts = $.data(target, 'datagrid').options; 
		if (opts.columns){ 
			for(var i=0; i<opts.columns.length; i++){ 
				var cols = opts.columns[i]; 
				for(var j=0; j<cols.length; j++){ 
					var col = cols[j]; 
					if (col.field == field){ 
						return col; 
					} 
				} 
			} 
		} 
		if (opts.frozenColumns){ 
			for(var i=0; i<opts.frozenColumns.length; i++){ 
				var cols = opts.frozenColumns[i]; 
				for(var j=0; j<cols.length; j++){ 
					var col = cols[j]; 
					if (col.field == field){ 
						return col; 
					} 
				} 
			} 
		} 
		return null; 
	} 
	 
	/** 
	 * get column fields which will be show in row 
	 */ 
	function getColumnFields(columns){ 
		if (columns.length == 0) return []; 
		 
		function getFields(ridx,cidx,count){ 
			var fields = []; 
			while(fields.length < count){ 
				var col = columns[ridx][cidx]; 
				if (col.colspan && parseInt(col.colspan)>1){ 
					var ff = getFields(ridx+1, getSubColIndex(ridx,cidx), parseInt(col.colspan)); 
					fields = fields.concat(ff); 
				} else if (col.field){ 
					fields.push(col.field); 
				} 
				cidx++; 
			} 
			 
			return fields; 
		} 
		 
		function getSubColIndex(ridx, cidx){ 
			var index = 0; 
			for(var i=0; i<cidx; i++){ 
				var colspan = parseInt(columns[ridx][i].colspan || '1'); 
				if (colspan > 1){ 
					index += colspan; 
				} 
			} 
			return index; 
		} 
		 
		var fields = []; 
		for(var i=0; i<columns[0].length; i++){ 
			var col = columns[0][i]; 
			if (col.colspan && parseInt(col.colspan)>1){ 
				var ff = getFields(1, getSubColIndex(0,i), parseInt(col.colspan)); 
				fields = fields.concat(ff); 
			} else if (col.field){ 
				fields.push(col.field); 
			} 
		} 
		 
		return fields; 
	} 
	 
	/** 
	 * load data to the grid 
	 */ 
	function loadData(target, data){ 
		var grid = $.data(target, 'datagrid').grid; 
		var opts = $.data(target, 'datagrid').options; 
		var selectedRows = $.data(target, 'datagrid').selectedRows; 
		var rows = data.rows; 
		 
		var getWidthDelta = function(){ 
			if ($.boxModel == false) return 0; 
			 
			var headerCell = $('.datagrid-header .datagrid-cell:first'); 
			var headerDelta = headerCell.outerWidth() - headerCell.width(); 
			 
			var t = $('.datagrid-body table', grid); 
			t.append($('<tr><td><div class="datagrid-cell"></div></td></tr>')); 
			var bodyCell = $('.datagrid-cell', t); 
			 
			var bodyDelta = bodyCell.outerWidth() - bodyCell.width(); 
			 
			return headerDelta - bodyDelta; 
		}; 
		 
		var widthDelta = getWidthDelta(); 
		var frozen = opts.rownumbers || (opts.frozenColumns && opts.frozenColumns.length > 0); 
		 
		function getTBody(fields, rownumbers){ 
			function isSelected(row){ 
				if (!opts.idField) return false; 
				 
				for(var i=0; i<selectedRows.length; i++){ 
					if (selectedRows[i][opts.idField] == row[opts.idField]) return true; 
				} 
				return false; 
			} 
			 
			var tbody = ['<tbody>']; 
			for(var i=0; i<rows.length; i++) { 
				var row = rows[i]; 
				var selected = isSelected(row); 
				 
				if (i % 2 && opts.striped){ 
					tbody.push('<tr datagrid-row-index="' + i + '" class="datagrid-row-alt'); 
				} else { 
					tbody.push('<tr datagrid-row-index="' + i + '" class="'); 
				} 
				if (selected == true){ 
					tbody.push(' datagrid-row-selected'); 
				} 
				tbody.push('">'); 
				 
				if (rownumbers){ 
					var rownumber = i+1; 
					if (opts.pagination){ 
						rownumber += (opts.pageNumber-1)*opts.pageSize; 
					} 
					if (frozen){ 
						tbody.push('<td><div class="datagrid-cell-rownumber datagrid-cell-height">'+rownumber+'</div></td>'); 
					} else { 
						tbody.push('<td><div class="datagrid-cell-rownumber">'+rownumber+'</div></td>'); 
					} 
				} 
				for(var j=0; j<fields.length; j++){ 
					var field = fields[j]; 
					var col = getColumnOption(target, field); 
					if (col){ 
						var style = 'width:' + (col.width + widthDelta) + 'px;'; 
						style += 'text-align:' + (col.align || 'left'); 
						 
						tbody.push('<td class="datagrid-column-' + field + '">'); 
						 
						tbody.push('<div style="' + style + '" '); 
						if (col.checkbox){ 
							tbody.push('class="datagrid-cell-check '); 
						} else { 
							tbody.push('class="datagrid-cell '); 
						} 
						if (frozen){ 
							tbody.push('datagrid-cell-height '); 
						} 
						tbody.push('">'); 
						 
						if (col.checkbox){ 
							if (selected){ 
								tbody.push('<input type="checkbox" checked="checked"/>'); 
							} else { 
								tbody.push('<input type="checkbox"/>'); 
							} 
						} else if (col.formatter){ 
							tbody.push(col.formatter(row[field], row)); 
						} else { 
							tbody.push(row[field]); 
						} 
						tbody.push('</div>'); 
						tbody.push('</td>'); 
					} 
				} 
				 
				tbody.push('</tr>'); 
			} 
			tbody.push('</tbody>'); 
			return tbody.join(''); 
		} 
		 
		$('.datagrid-body, .datagrid-header', grid).scrollLeft(0).scrollTop(0); 
		var fields = getColumnFields(opts.columns); 
		$('.datagrid-view2 .datagrid-body table', grid).html(getTBody(fields)); 
		if (opts.rownumbers || (opts.frozenColumns && opts.frozenColumns.length > 0)){ 
			var frozenFields = getColumnFields(opts.frozenColumns); 
			$('.datagrid-view1 .datagrid-body table', grid).html(getTBody(frozenFields, opts.rownumbers)); 
		} 
		 
		$.data(target, 'datagrid').data = data; 
		$('.datagrid-pager', grid).pagination({total: data.total}); 
		setSize(target); 
		setProperties(target); 
	} 
	
	function getFieldValue(row, field) {
		var fields = field.split(".");
	}
	
	function getSelectedRows(target){ 
		var opts = $.data(target, 'datagrid').options; 
		var grid = $.data(target, 'datagrid').grid; 
		var data = $.data(target, 'datagrid').data; 
		 
		if (opts.idField){ 
			return $.data(target, 'datagrid').selectedRows; 
		} 
		 
		var rows = []; 
		$('.datagrid-view2 .datagrid-body tr.datagrid-row-selected', grid).each(function(){ 
			var index = parseInt($(this).attr('datagrid-row-index')); 
			if (data.rows[index]){ 
				rows.push(data.rows[index]); 
			} 
		}); 
		return rows; 
	} 
	 
	/** 
	 * clear all the selection records 
	 */ 
	function clearSelections(target){ 
		var grid = $.data(target, 'datagrid').grid; 
		 
		$('.datagrid-body tr.datagrid-row-selected', grid).removeClass('datagrid-row-selected'); 
		$('.datagrid-body .datagrid-cell-check input[type=checkbox]', grid).attr('checked', false); 
		var selectedRows = $.data(target, 'datagrid').selectedRows; 
		while(selectedRows.length > 0){ 
			selectedRows.pop(); 
		} 
	} 
	 
	/** 
	 * select a row with specified row index which start with 0. 
	 */ 
	function selectRow(target, index){ 
		var grid = $.data(target, 'datagrid').grid; 
		var opts = $.data(target, 'datagrid').options; 
		var data = $.data(target, 'datagrid').data; 
		var selectedRows = $.data(target, 'datagrid').selectedRows; 
		 
		var tr = $('.datagrid-body tr[datagrid-row-index='+index+']',grid); 
		var ck = $('.datagrid-body tr[datagrid-row-index='+index+'] .datagrid-cell-check input[type=checkbox]',grid); 
		if (opts.singleSelect == true){ 
			clearSelections(target); 
		} 
		tr.addClass('datagrid-row-selected'); 
		ck.attr('checked', true); 
		 
		if (opts.idField){ 
			var row = data.rows[index]; 
			for(var i=0; i<selectedRows.length; i++){ 
				if (selectedRows[i][opts.idField] == row[opts.idField]){ 
					return; 
				} 
			} 
			selectedRows.push(row); 
		} 
		opts.onSelect.call(target, index, data.rows[index]); 
	} 
	 
	/** 
	 * select record by idField. 
	 */ 
	function selectRecord(target, idValue){ 
		var opts = $.data(target, 'datagrid').options; 
		var data = $.data(target, 'datagrid').data; 
		if (opts.idField){ 
			var index = -1; 
			for(var i=0; i<data.rows.length; i++){ 
				if (data.rows[i][opts.idField] == idValue){ 
					index = i; 
					break; 
				} 
			} 
			if (index >= 0){ 
				selectRow(target, index); 
			} 
		} 
	} 
	 
	/** 
	 * unselect a row. 
	 */ 
	function unselectRow(target, index){ 
		var opts = $.data(target, 'datagrid').options; 
		var grid = $.data(target, 'datagrid').grid; 
		var selectedRows = $.data(target, 'datagrid').selectedRows; 
		 
		var tr = $('.datagrid-body tr[datagrid-row-index='+index+']',grid); 
		var ck = $('.datagrid-body tr[datagrid-row-index='+index+'] .datagrid-cell-check input[type=checkbox]',grid); 
		tr.removeClass('datagrid-row-selected'); 
		ck.attr('checked', false); 
		 
		var row = $.data(target, 'datagrid').data.rows[index]; 
		if (opts.idField){ 
			for(var i=0; i<selectedRows.length; i++){ 
				var row1 = selectedRows[i]; 
				if (row1[opts.idField] == row[opts.idField]){ 
					for(var j=i+1; j<selectedRows.length; j++){ 
						selectedRows[j-1] = selectedRows[j]; 
					} 
					selectedRows.pop(); 
					break; 
				} 
			} 
		} 
		opts.onUnselect.call(target, index, row); 
	} 
	 
	/** 
	 * request remote data 
	 */ 
	function request(target){ 
		var grid = $.data(target, 'datagrid').grid; 
		var opts = $.data(target, 'datagrid').options; 
		 
		if (!opts.url) return; 
		 
		var param = $.extend({}, opts.queryParams); 
		if (opts.pagination){ 
			$.extend(param, { 
				page: opts.pageNumber, 
				rows: opts.pageSize 
			}); 
		} 
		if (opts.sortName){ 
			$.extend(param, { 
				sort: opts.sortName, 
				order: opts.sortOrder 
			}); 
		} 
		 
		$('.datagrid-pager', grid).pagination({loading:true}); 
		 
		var wrap = $('.datagrid-wrap', grid); 
		$('<div class="datagrid-mask"></div>').css({ 
			display:'block', 
			width: wrap.width(), 
			height: wrap.height() 
		}).appendTo(wrap); 
		$('<div class="datagrid-mask-msg"></div>') 
				.html(opts.loadMsg) 
				.appendTo(wrap) 
				.css({ 
					display:'block', 
					left:(wrap.width()-$('.datagrid-mask-msg',grid).outerWidth())/2, 
					top:(wrap.height()-$('.datagrid-mask-msg',grid).outerHeight())/2 
				}); 
		 
		$.ajax({ 
			type: opts.method, 
			url: opts.url, 
			data: param, 
			dataType: 'json', 
			success: function(data){ 
				$('.datagrid-pager', grid).pagination({loading:false}); 
				$('.datagrid-mask', grid).remove(); 
				$('.datagrid-mask-msg', grid).remove(); 
				loadData(target, data); 
				if (opts.onLoadSuccess){ 
					opts.onLoadSuccess.apply(this, arguments); 
				} 
			}, 
			error: function(){ 
				$('.datagrid-pager', grid).pagination({loading:false}); 
				$('.datagrid-mask', grid).remove(); 
				$('.datagrid-mask-msg', grid).remove(); 
				if (opts.onLoadError){ 
					opts.onLoadError.apply(this, arguments); 
				} 
			} 
		}); 
	} 
	 
	$.fn.datagrid = function(options, param){ 
		if (typeof options == 'string') { 
			switch(options){ 
				case 'options': 
					return $.data(this[0], 'datagrid').options; 
					 
				case 'resize': 
					return this.each(function(){ 
						setSize(this); 
					}); 
					 
				case 'reload': 
					return this.each(function(){ 
						request(this); 
					}); 
					 
				case 'fixColumnSize': 
					return this.each(function(){ 
						fixColumnSize(this); 
					}); 
					 
				case 'loadData': 
					return this.each(function(){ 
						loadData(this, param); 
					}); 
					 
				case 'getSelected': 
					var rows = getSelectedRows(this[0]); 
					return rows.length>0 ? rows[0] : null; 
					 
				case 'getSelections': 
					return getSelectedRows(this[0]); 
					 
				case 'clearSelections': 
					return this.each(function(){ 
						clearSelections(this); 
					}); 
				 
				case 'selectRow': 
					return this.each(function(){ 
						selectRow(this, param); 
					}); 
					 
				case 'selectRecord': 
					return this.each(function(){ 
						selectRecord(this, param); 
					}); 
					 
				case 'unselectRow': 
					return this.each(function(){ 
						unselectRow(this, param); 
					}); 
			} 
		} 
		 
		options = options || {}; 
		 
		return this.each(function(){ 
			var state = $.data(this, 'datagrid'); 
			var opts; 
			if (state) { 
				opts = $.extend(state.options, options); 
				state.options = opts; 
			} else { 
				opts = $.extend({}, $.fn.datagrid.defaults, { 
					width: (parseInt($(this).css('width')) || 'auto'), 
					height: (parseInt($(this).css('height')) || 'auto'), 
					fit: $(this).attr('fit') == 'true' 
				}, options); 
				$(this).css('width', null).css('height', null); 
				 
				var wrapResult = wrapGrid(this, opts.rownumbers); 
				if (!opts.columns) opts.columns = wrapResult.columns; 
				if (!opts.frozenColumns) opts.frozenColumns = wrapResult.frozenColumns; 
				$.data(this, 'datagrid', { 
					options: opts, 
					grid: wrapResult.grid, 
					selectedRows: [] 
				}); 
			} 
			 
			var target = this; 
			var grid = $.data(this, 'datagrid').grid; 
			 
			if (opts.border == true){ 
				grid.removeClass('datagrid-noborder'); 
			} else { 
				grid.addClass('datagrid-noborder'); 
			} 
			 
			if (opts.frozenColumns){ 
				var t = createColumnHeader(opts.frozenColumns); 
				if (opts.rownumbers){ 
					var th = $('<th rowspan="'+opts.frozenColumns.length+'"><div class="datagrid-header-rownumber"></div></th>'); 
					if ($('tr',t).length == 0){ 
						th.wrap('<tr></tr>').parent().appendTo($('thead',t)); 
					} else { 
						th.prependTo($('tr:first', t)); 
					} 
				} 
				$('.datagrid-view1 .datagrid-header-inner', grid).html(t); 
			} 
			 
			if (opts.columns){ 
				var t = createColumnHeader(opts.columns); 
				$('.datagrid-view2 .datagrid-header-inner', grid).html(t); 
			} 
			 
		 
			$('.datagrid-title', grid).remove(); 
			if (opts.title) { 
				var title = $('<div class="datagrid-title"><span class="datagrid-title-text"></span></div>'); 
				$('.datagrid-title-text', title).html(opts.title); 
				title.prependTo(grid); 
				if (opts.iconCls) { 
					$('.datagrid-title-text', title).addClass('datagrid-title-with-icon'); 
					$('<div class="datagrid-title-icon"></div>').addClass(opts.iconCls).appendTo(title); 
				} 
			} 
			 
			$('.datagrid-toolbar', grid).remove(); 
			if (opts.toolbar) { 
				var tb = $('<div class="datagrid-toolbar"></div>').prependTo($('.datagrid-wrap', grid)); 
				for(var i=0; i<opts.toolbar.length; i++) { 
					var btn = opts.toolbar[i]; 
					if (btn == '-') { 
						$('<div class="datagrid-btn-separator"></div>').appendTo(tb); 
					} else { 
						var tool = $('<a href="javascript:void(0)"></a>'); 
						tool[0].onclick = eval(btn.handler || function(){}); 
						tool.css('float', 'left') 
							.text(btn.text) 
							.attr('icon', btn.iconCls || '') 
							.appendTo(tb) 
							.linkbutton({ 
								plain:true, 
								disabled:(btn.disabled || false) 
							}); 
					} 
				} 
			} 
			 
			$('.datagrid-pager', grid).remove(); 
			if (opts.pagination) { 
				var pager = $('<div class="datagrid-pager"></div>').appendTo($('.datagrid-wrap', grid)); 
				pager.pagination({ 
					pageNumber:opts.pageNumber, 
					pageSize:opts.pageSize, 
					pageList:opts.pageList, 
					onSelectPage: function(pageNum, pageSize){ 
						// save the page state 
						opts.pageNumber = pageNum; 
						opts.pageSize = pageSize; 
						 
						request(target);	// request new page data 
					} 
				}); 
				opts.pageSize = pager.pagination('options').pageSize;	// repare the pageSize value 
			} 
			 
			if (!state) { 
				fixColumnSize(target); 
			} 
			setSize(target); 
			 
			if (opts.url) { 
				request(target); 
			} 
			 
			setProperties(target); 
				 
		}); 
	}; 
	 
	$.fn.datagrid.defaults = { 
		title: null, 
		iconCls: null, 
		border: true, 
		width: 'auto', 
		height: 'auto', 
		frozenColumns: null, 
		columns: null, 
		striped: false, 
		method: 'post', 
		nowrap: true, 
		idField: null, 
		url: null, 
		loadMsg: 'Processing, please wait ...', 
		pagination: false, 
		rownumbers: false, 
		singleSelect: false, 
		fit: false, 
		pageNumber: 1, 
		pageSize: 10, 
		pageList: [10,20,30,40,50], 
		queryParams: {}, 
		sortName: null, 
		sortOrder: 'asc', 
		 
		onLoadSuccess: function(){}, 
		onLoadError: function(){}, 
		onClickRow: function(rowIndex, rowData){}, 
		onDblClickRow: function(rowIndex, rowData){}, 
		onSortColumn: function(sort, order){}, 
		onSelect: function(rowIndex, rowData){}, 
		onUnselect: function(rowIndex, rowData){} 
	}; 
})(jQuery);/** 
 * combogrid - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 *   combo 
 *   datagrid 
 *  
 */ 
(function($){ 
	/** 
	 * create this component. 
	 */ 
	function create(target){ 
		var opts = $.data(target, 'combogrid').options; 
		var grid = $.data(target, 'combogrid').grid; 
		 
		$(target).combo(opts); 
		var panel = $(target).combo('panel'); 
		if (!grid){ 
			grid = $('<table></table>').appendTo(panel); 
			$.data(target, 'combogrid').grid = grid; 
		} 
		grid.datagrid($.extend({}, opts, { 
			border: false, 
			fit: true, 
			singleSelect: (!opts.multiple), 
			onSelect: function(){retrieveValues(target);}, 
			onUnselect: function(){retrieveValues(target);}, 
			onSelectAll: function(){retrieveValues(target);}, 
			onUnselectAll: function(){retrieveValues(target);} 
		})); 
	} 
	 
	/** 
	 * retrieve values from datagrid panel. 
	 */ 
	function retrieveValues(target){ 
		var opts = $.data(target, 'combogrid').options; 
		var grid = $.data(target, 'combogrid').grid; 
		var rows = grid.datagrid('getSelections'); 
		var vv = [],ss = []; 
		for(var i=0; i<rows.length; i++){ 
			vv.push(rows[i][opts.idField]); 
			ss.push(rows[i][opts.textField]); 
		} 
		$(target).combo('setValues', vv).combo('setText', ss.join(opts.separator)); 
	} 
	 
	/** 
	 * select the specified row via step value, 
	 * if the step is not assigned, the current row is selected as the combogrid value. 
	 */ 
	function selectRow(target, step){ 
		var opts = $.data(target, 'combogrid').options; 
		var grid = $.data(target, 'combogrid').grid; 
		if (opts.multiple) return; 
		 
		if (!step){ 
			var selected = grid.datagrid('getSelected'); 
			if (selected){ 
				setValues(target, [selected[opts.idField]]);	// set values 
				$(target).combo('hidePanel');	// hide the drop down panel 
			} 
			return; 
		} 
		 
		var selected = grid.datagrid('getSelected'); 
		if (selected){ 
			var index = grid.datagrid('getRowIndex', selected[opts.idField]); 
			grid.datagrid('unselectRow', index); 
			index += step; 
			if (index < 0) index = 0; 
			if (index >= grid.datagrid('getRows').length) index = grid.datagrid('getRows').length - 1; 
			grid.datagrid('selectRow', index); 
		} else { 
			grid.datagrid('selectRow', 0); 
		} 
	} 
	 
	/** 
	 * set combogrid values 
	 */ 
	function setValues(target, values){ 
		var opts = $.data(target, 'combogrid').options; 
		var grid = $.data(target, 'combogrid').grid; 
		var rows = grid.datagrid('getRows'); 
		grid.datagrid('clearSelections'); 
		for(var i=0; i<values.length; i++){ 
			var index = grid.datagrid('getRowIndex', values[i]); 
			grid.datagrid('selectRow', index); 
		} 
		retrieveValues(target); 
		if ($(target).combogrid('getValues').length == 0){ 
			$(target).combo('setValues', values).combo('setText', values.join(opts.separator)); 
		} 
	} 
	 
	$.fn.combogrid = function(options, param){ 
		if (typeof options == 'string'){ 
			var method = $.fn.combogrid.methods[options]; 
			if (method){ 
				return method(this, param); 
			} else { 
				return $.fn.combo.methods[options](this, param); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'combogrid'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				var t = $(this); 
				state = $.data(this, 'combogrid', { 
					options: $.extend({}, $.fn.combo.defaults, $.fn.combogrid.defaults, { 
						width: (parseInt(this.style.width) || undefined), 
						idField: (t.attr('idField') || undefined), 
						textField: (t.attr('textField') || undefined), 
						separator: (t.attr('separator') || undefined), 
						multiple: (t.attr('multiple') ? (t.attr('multiple') == 'true' || t.attr('multiple') == true) : undefined), 
						editable: (t.attr('editable') ? t.attr('editable') == 'true' : undefined), 
						disabled: (t.attr('disabled') ? true : undefined), 
						required: (t.attr('required') ? (t.attr('required') == 'true' || t.attr('required') == true) : undefined), 
						missingMessage: (t.attr('missingMessage') || undefined) 
					}, options) 
				}); 
			} 
			 
			create(this); 
		}); 
	}; 
	 
	$.fn.combogrid.methods = { 
		options: function(jq){ 
			return $.data(jq[0], 'combogrid').options; 
		}, 
		// get the datagrid object. 
		grid: function(jq){ 
			return $.data(jq[0], 'combogrid').grid; 
		}, 
		setValues: function(jq, values){ 
			return jq.each(function(){ 
				setValues(this, values); 
			}); 
		} 
	}; 
	 
	$.fn.combogrid.defaults = { 
		idField: null, 
		textField: null,	// the text field to display. 
		selectPrev: function(){selectRow(this, -1);}, 
		selectNext: function(){selectRow(this, 1);}, 
		select: function(){selectRow(this);} 
	}; 
})(jQuery); 
/** 
 * tree - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Node is a javascript object which contains following properties: 
 * 1 id: An identity value bind to the node. 
 * 2 text: Text to be showed. 
 * 3 checked: Indicate whether the node is checked selected. 
 * 3 attributes: Custom attributes bind to the node. 
 * 4 target: Target DOM object. 
 */ 
(function($){ 
	/** 
	 * wrap the <ul> tag as a tree and then return it. 
	 */ 
	function wrapTree(target){ 
		var tree = $(target); 
		tree.addClass('tree'); 
		 
		wrapNode(tree, 0); 
		 
		function wrapNode(ul, depth){ 
			$('>li', ul).each(function(){ 
				var node = $('<div class="tree-node"></div>').prependTo($(this)); 
				var text = $('>span', this).addClass('tree-title').appendTo(node).text(); 
				$.data(node[0], 'tree-node', { 
					text: text 
				}); 
				var subTree = $('>ul', this); 
				if (subTree.length){ 
					$('<span class="tree-folder tree-folder-open"></span>').prependTo(node); 
					$('<span class="tree-hit tree-expanded"></span>').prependTo(node); 
					wrapNode(subTree, depth+1); 
				} else { 
					$('<span class="tree-file"></span>').prependTo(node); 
					$('<span class="tree-indent"></span>').prependTo(node); 
				} 
				for(var i=0; i<depth; i++){ 
					$('<span class="tree-indent"></span>').prependTo(node); 
				} 
			}); 
		} 
		return tree; 
	} 
	 
	function expandNode(target, node){ 
		var opts = $.data(target, 'tree').options; 
		 
		var hit = $('>span.tree-hit', node); 
		if (hit.length == 0) return;	// is a leaf node 
		 
		if (hit.hasClass('tree-collapsed')){ 
			hit.removeClass('tree-collapsed tree-collapsed-hover').addClass('tree-expanded'); 
			hit.next().addClass('tree-folder-open'); 
			var ul = $(node).next(); 
			if (ul.length){ 
				if (opts.animate){ 
					ul.slideDown(); 
				} else { 
					ul.css('display','block'); 
				} 
			} else { 
				var id = $.data($(node)[0], 'tree-node').id; 
				var subul = $('<ul></ul>').insertAfter(node); 
				request(target, subul, {id:id});	// request children nodes data 
			} 
		} 
	} 
	 
	function collapseNode(target, node){ 
		var opts = $.data(target, 'tree').options; 
		 
		var hit = $('>span.tree-hit', node); 
		if (hit.length == 0) return;	// is a leaf node 
		 
		if (hit.hasClass('tree-expanded')){ 
			hit.removeClass('tree-expanded tree-expanded-hover').addClass('tree-collapsed'); 
			hit.next().removeClass('tree-folder-open'); 
			if (opts.animate){ 
				$(node).next().slideUp(); 
			} else { 
				$(node).next().css('display','none'); 
			} 
		} 
	} 
	 
	function toggleNode(target, node){ 
		var hit = $('>span.tree-hit', node); 
		if (hit.length == 0) return;	// is a leaf node 
		 
		if (hit.hasClass('tree-expanded')){ 
			collapseNode(target, node); 
		} else { 
			expandNode(target, node); 
		} 
	} 
	 
	function bindTreeEvents(target){ 
		var opts = $.data(target, 'tree').options; 
		var tree = $.data(target, 'tree').tree; 
		 
		$('.tree-node', tree).unbind('.tree').bind('dblclick.tree', function(){ 
			$('.tree-node-selected', tree).removeClass('tree-node-selected'); 
			$(this).addClass('tree-node-selected'); 
			 
			if (opts.onDblClick){ 
				var target = this;	// the target HTML DIV element 
				var data = $.data(this, 'tree-node'); 
				opts.onDblClick.call(this, { 
					id: data.id, 
					text: data.text, 
					attributes: data.attributes, 
					target: target 
				}); 
			} 
		}).bind('click.tree', function(){ 
			$('.tree-node-selected', tree).removeClass('tree-node-selected'); 
			$(this).addClass('tree-node-selected'); 
			 
			if (opts.onClick){ 
				var target = this;	// the target HTML DIV element 
				var data = $.data(this, 'tree-node'); 
				opts.onClick.call(this, { 
					id: data.id, 
					text: data.text, 
					attributes: data.attributes, 
					target: target 
				}); 
			} 
//			return false; 
		}).bind('mouseenter.tree', function(){ 
			$(this).addClass('tree-node-hover'); 
			return false; 
		}).bind('mouseleave.tree', function(){ 
			$(this).removeClass('tree-node-hover'); 
			return false; 
		}); 
		 
		$('.tree-hit', tree).unbind('.tree').bind('click.tree', function(){ 
			var node = $(this).parent(); 
			toggleNode(target, node); 
			return false; 
		}).bind('mouseenter.tree', function(){ 
			if ($(this).hasClass('tree-expanded')){ 
				$(this).addClass('tree-expanded-hover'); 
			} else { 
				$(this).addClass('tree-collapsed-hover'); 
			} 
		}).bind('mouseleave.tree', function(){ 
			if ($(this).hasClass('tree-expanded')){ 
				$(this).removeClass('tree-expanded-hover'); 
			} else { 
				$(this).removeClass('tree-collapsed-hover'); 
			} 
		}); 
		 
		$('.tree-checkbox', tree).unbind('.tree').bind('click.tree', function(){ 
			if ($(this).hasClass('tree-checkbox0')){ 
				$(this).removeClass('tree-checkbox0').addClass('tree-checkbox1'); 
			} else if ($(this).hasClass('tree-checkbox1')){ 
				$(this).removeClass('tree-checkbox1').addClass('tree-checkbox0'); 
			} else if ($(this).hasClass('tree-checkbox2')){ 
				$(this).removeClass('tree-checkbox2').addClass('tree-checkbox1'); 
			} 
			setParentCheckbox($(this).parent()); 
			setChildCheckbox($(this).parent()); 
			return false; 
		}); 
		 
		function setChildCheckbox(node){ 
			var childck = node.next().find('.tree-checkbox'); 
			childck.removeClass('tree-checkbox0 tree-checkbox1 tree-checkbox2') 
			if (node.find('.tree-checkbox').hasClass('tree-checkbox1')){ 
				childck.addClass('tree-checkbox1'); 
			} else { 
				childck.addClass('tree-checkbox0'); 
			} 
		} 
		 
		function setParentCheckbox(node){ 
			var pnode = getParentNode(target, node[0]); 
			if (pnode){ 
				var ck = $(pnode.target).find('.tree-checkbox'); 
				ck.removeClass('tree-checkbox0 tree-checkbox1 tree-checkbox2'); 
				if (isAllSelected(node)){ 
					ck.addClass('tree-checkbox1'); 
				} else if (isAllNull(node)){ 
					ck.addClass('tree-checkbox0'); 
				} else { 
					ck.addClass('tree-checkbox2'); 
				} 
				setParentCheckbox($(pnode.target)); 
			} 
			 
			function isAllSelected(n){ 
				var ck = n.find('.tree-checkbox'); 
				if (ck.hasClass('tree-checkbox0') || ck.hasClass('tree-checkbox2')) return false; 
				var b = true; 
				n.parent().siblings().each(function(){ 
					if (!$(this).find('.tree-checkbox').hasClass('tree-checkbox1')){ 
						b = false; 
					} 
				}); 
				return b; 
			} 
			function isAllNull(n){ 
				var ck = n.find('.tree-checkbox'); 
				if (ck.hasClass('tree-checkbox1') || ck.hasClass('tree-checkbox2')) return false; 
				var b = true; 
				n.parent().siblings().each(function(){ 
					if (!$(this).find('.tree-checkbox').hasClass('tree-checkbox0')){ 
						b = false; 
					} 
				}); 
				return b; 
			} 
		} 
	} 
	 
	function loadData(target, ul, data){ 
		// clear the tree when loading to the root 
		if (target == ul) { 
			$(target).empty(); 
		} 
		 
		var opts = $.data(target, 'tree').options; 
		function appendNodes(ul, children, depth){ 
			for(var i=0; i<children.length; i++){ 
				var li = $('<li></li>').appendTo(ul); 
				var item = children[i]; 
				 
				// the node state has only 'open' or 'closed' attribute 
				if (item.state != 'open' && item.state != 'closed'){ 
					item.state = 'open'; 
				} 
				 
				var node = $('<div class="tree-node"></div>').appendTo(li); 
				node.attr('node-id', item.id); 
				 
				// store node attributes 
				$.data(node[0], 'tree-node', { 
					id: item.id, 
					text: item.text, 
					attributes: item.attributes 
				}); 
				 
				$('<span class="tree-title"></span>').html(item.text).appendTo(node); 
				if (opts.checkbox){ 
					if (item.checked){ 
						$('<span class="tree-checkbox tree-checkbox1"></span>').prependTo(node); 
					} else { 
						$('<span class="tree-checkbox tree-checkbox0"></span>').prependTo(node); 
					} 
				} 
				if (item.children){ 
					var subul = $('<ul></ul>').appendTo(li); 
					if (item.state == 'open'){ 
						$('<span class="tree-folder tree-folder-open"></span>').addClass(item.iconCls).prependTo(node); 
						$('<span class="tree-hit tree-expanded"></span>').prependTo(node); 
					} else { 
						$('<span class="tree-folder"></span>').addClass(item.iconCls).prependTo(node); 
						$('<span class="tree-hit tree-collapsed"></span>').prependTo(node); 
						subul.css('display','none'); 
					} 
					appendNodes(subul, item.children, depth+1); 
				} else { 
					if (item.state == 'closed'){ 
						$('<span class="tree-folder"></span>').addClass(item.iconCls).prependTo(node); 
						$('<span class="tree-hit tree-collapsed"></span>').prependTo(node); 
					} else { 
//						$('<input type="checkbox" style="vertical-align:bottom;margin:0;height:18px;">').prependTo(node); 
						$('<span class="tree-file"></span>').addClass(item.iconCls).prependTo(node); 
						$('<span class="tree-indent"></span>').prependTo(node); 
					} 
				} 
				for(var j=0; j<depth; j++){ 
					$('<span class="tree-indent"></span>').prependTo(node); 
				} 
			} 
		} 
 
		var depth = $(ul).prev().find('>span.tree-indent,>span.tree-hit').length; 
		appendNodes(ul, data, depth); 
		 
	} 
	 
	/** 
	 * request remote data and then load nodes in the <ul> tag. 
	 */ 
	function request(target, ul, param){ 
		var opts = $.data(target, 'tree').options; 
		if (!opts.url) return; 
		 
		param = param || {}; 
		 
		var folder = $(ul).prev().find('>span.tree-folder'); 
		folder.addClass('tree-loading'); 
		$.ajax({ 
			type: 'post', 
			url: opts.url, 
			data: param, 
			dataType: 'json', 
			success: function(data){ 
				folder.removeClass('tree-loading'); 
				loadData(target, ul, data); 
				bindTreeEvents(target); 
				if (opts.onLoadSuccess){ 
					opts.onLoadSuccess.apply(this, arguments); 
				} 
			}, 
			error: function(){ 
				folder.removeClass('tree-loading'); 
				if (opts.onLoadError){ 
					opts.onLoadError.apply(this, arguments); 
				} 
			} 
		}); 
	} 
	 
	/** 
	 * get the parent node 
	 * param: DOM object, from which to search it's parent node  
	 */ 
	function getParentNode(target, param){ 
		var node = $(param).parent().parent().prev(); 
		if (node.length){ 
			return $.extend({}, $.data(node[0], 'tree-node'), { 
				target: node[0], 
				checked: node.find('.tree-checkbox').hasClass('tree-checkbox1') 
			}); 
		} else { 
			return null; 
		} 
	} 
	 
	function getCheckedNode(target){ 
		var nodes = []; 
		$(target).find('.tree-checkbox1').each(function(){ 
			var node = $(this).parent(); 
			nodes.push($.extend({}, $.data(node[0], 'tree-node'), { 
				target: node[0], 
				checked: node.find('.tree-checkbox').hasClass('tree-checkbox1') 
			})); 
		}); 
		return nodes; 
	} 
	 
	/** 
	 * Get the selected node data which contains following properties: id,text,attributes,target 
	 */ 
	function getSelectedNode(target){ 
		var node = $(target).find('div.tree-node-selected'); 
		if (node.length){ 
			return $.extend({}, $.data(node[0], 'tree-node'), { 
				target: node[0], 
				checked: node.find('.tree-checkbox').hasClass('tree-checkbox1') 
			}); 
		} else { 
			return null; 
		} 
	} 
	 
	/** 
	 * Append nodes to tree. 
	 * The param parameter has two properties: 
	 * 1 parent: DOM object, the parent node to append to. 
	 * 2 data: array, the nodes data. 
	 */ 
	function appendNodes(target, param){ 
		var node = $(param.parent); 
		var ul = node.next(); 
		if (ul.length == 0){ 
			ul = $('<ul></ul>').insertAfter(node); 
		} 
		 
		// ensure the node is a folder node 
		if (param.data && param.data.length){ 
			var nodeIcon = node.find('span.tree-file'); 
			if (nodeIcon.length){ 
				nodeIcon.removeClass('tree-file').addClass('tree-folder'); 
				var hit = $('<span class="tree-hit tree-expanded"></span>').insertBefore(nodeIcon); 
				if (hit.prev().length){ 
					hit.prev().remove(); 
				} 
			} 
		} 
		 
		loadData(target, ul, param.data); 
		bindTreeEvents(target); 
	} 
	 
	/** 
	 * Remove node from tree.  
	 * param: DOM object, indicate the node to be removed. 
	 */ 
	function removeNode(target, param){ 
		var node = $(param); 
		var li = node.parent(); 
		var ul = li.parent(); 
		li.remove(); 
		if (ul.find('li').length == 0){ 
			var node = ul.prev(); 
			node.find('.tree-folder').removeClass('tree-folder').addClass('tree-file'); 
			node.find('.tree-hit').remove(); 
			$('<span class="tree-indent"></span>').prependTo(node); 
			if (ul[0] != target){ 
				ul.remove(); 
			} 
		} 
	} 
	 
	/** 
	 * select the specified node. 
	 * param: DOM object, indicate the node to be selected. 
	 */ 
	function selectNode(target, param){ 
		$('div.tree-node-selected', target).removeClass('tree-node-selected'); 
		$(param).addClass('tree-node-selected'); 
	} 
	 
	/** 
	 * Check if the specified node is leaf. 
	 * param: DOM object, indicate the node to be checked. 
	 */ 
	function isLeaf(target, param){ 
		var node = $(param); 
		var hit = $('>span.tree-hit', node); 
		return hit.length == 0; 
	} 
	 
	 
	$.fn.tree = function(options, param){ 
		if (typeof options == 'string'){ 
			switch(options){ 
				case 'options': 
					return $.data(this[0], 'tree').options; 
				case 'reload': 
					return this.each(function(){ 
						$(this).empty(); 
						request(this, this); 
					}); 
				case 'getParent': 
					return getParentNode(this[0], param); 
				case 'getChecked': 
					return getCheckedNode(this[0]); 
				case 'getSelected': 
					return getSelectedNode(this[0]); 
				case 'isLeaf': 
					return isLeaf(this[0], param);	// param is the node object 
				case 'select': 
					return this.each(function(){ 
						selectNode(this, param); 
					}); 
				case 'collapse': 
					return this.each(function(){ 
						collapseNode(this, $(param));	// param is the node object 
					}); 
				case 'expand': 
					return this.each(function(){ 
						expandNode(this, $(param));		// param is the node object 
					}); 
				case 'append': 
					return this.each(function(){ 
						appendNodes(this, param); 
					}); 
				case 'toggle': 
					return this.each(function(){ 
						toggleNode(this, $(param)); 
					}); 
				case 'remove': 
					return this.each(function(){ 
						removeNode(this, param); 
					}); 
			} 
		} 
		 
		var options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'tree'); 
			var opts; 
			if (state){ 
				opts = $.extend(state.options, options); 
				state.options = opts; 
			} else { 
				opts = $.extend({}, $.fn.tree.defaults, { 
					url:$(this).attr('url'), 
					animate:($(this).attr('animate') ? $(this).attr('animate') == 'true' : undefined) 
				}, options); 
				$.data(this, 'tree', { 
					options: opts, 
					tree: wrapTree(this) 
				}); 
//				request(this, this); 
			} 
			 
			if (opts.url){ 
				request(this, this); 
			} 
			bindTreeEvents(this); 
		}); 
	}; 
	 
	$.fn.tree.defaults = { 
		url: null, 
		animate: false, 
		checkbox: false, 
		 
		onLoadSuccess: function(){}, 
		onLoadError: function(){}, 
		onClick: function(node){},	// node: id,text,attributes,target 
		onDblClick: function(node){}	// node: id,text,attributes,target 
	}; 
})(jQuery); 
/** 
 * combotree - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	 tree 
 *  
 */ 
(function($){ 
	function setSize(target){ 
		var opts = $.data(target, 'combotree').options; 
		var combo = $.data(target, 'combotree').combotree; 
		var content = $.data(target, 'combotree').content; 
		if (!isNaN(opts.width)){ 
			var arrowWidth = combo.find('.combotree-arrow').outerWidth(); 
			var width = opts.width - arrowWidth - (combo.outerWidth() - combo.width()); 
			combo.find('input.combotree-text').width(width); 
		} 
		if (opts.treeWidth){ 
			content.width(opts.treeWidth); 
		} else { 
			content.width($.boxModel==true ? combo.outerWidth()-(content.outerWidth()-content.width()) : combo.outerWidth()); 
		} 
		if (opts.treeHeight){ 
			content.height(opts.treeHeight); 
		} 
		 
		content.find('>ul').tree({ 
			url:opts.url, 
			onClick:function(node){ 
				var oldValue = combo.find('input.combotree-value').val(); 
				combo.find('input.combotree-value').val(node.id); 
				combo.find('input.combotree-text').val(node.text); 
				content.hide(); 
				 
				opts.onSelect.call(target, node); 
				if (oldValue != node.id){ 
					opts.onChange.call(target, node.id, oldValue); 
				} 
			} 
		}); 
	} 
	 
	function init(target){ 
		$(target).hide(); 
		 
		var span = $('<span class="combotree"></span>').insertAfter(target); 
		$('<input type="hidden" class="combotree-value"></input>').appendTo(span); 
		$('<input class="combotree-text" readonly="true"></input>').appendTo(span); 
		var arrow = $('<span><span class="combotree-arrow"></span></span>').appendTo(span); 
		var content = $('<div class="combotree-content"><ul></ul></div>').insertAfter(span); 
		 
		var name = $(target).attr('name'); 
		if (name){ 
			span.attr('name', name); 
			$(target).removeAttr('name'); 
		} 
		 
		/** 
		 * show tree panel 
		 */ 
		function show(){ 
			content.css({ 
				display:'block', 
				left:span.offset().left, 
				top:span.offset().top+span.outerHeight() 
			}); 
			 
			$(document).unbind('.combotree').bind('click.combotree', function(){ 
				content.hide(); 
				return false; 
			}); 
		} 
		 
		span.click(function(){ 
			show(); 
			return false; 
		}); 
		arrow.find('.combotree-arrow').hover( 
			function(){$(this).addClass('combotree-arrow-hover');}, 
			function(){$(this).removeClass('combotree-arrow-hover');} 
		); 
		 
		return { 
			combotree: span, 
			content: content 
		} 
	} 
	 
	/** 
	 * set the value. 
	 * node: object, must at lease contains two properties: id and text. 
	 */ 
	function setValue(target, node){ 
		var opts = $.data(target, 'combotree').options; 
		var combo = $.data(target, 'combotree').combotree; 
		var content = $.data(target, 'combotree').content; 
		 
		var oldValue = combo.find('input.combotree-value').val(); 
		combo.find('input.combotree-value').val(node.id); 
		combo.find('input.combotree-text').val(node.text); 
		 
		var root = content.find('>ul'); 
		var node1 = $('div.tree-node[node-id='+node.id+']', root); 
		root.tree('select', node1[0]); 
		 
		if (oldValue != node.id){ 
			opts.onChange.call(target, node.id, oldValue); 
		} 
	} 
	 
	/** 
	 * reload the tree panel 
	 */ 
	function reload(target, url){ 
		var opts = $.data(target, 'combotree').options; 
		var content = $.data(target, 'combotree').content; 
		if (url){ 
			opts.url = url; 
		} 
		content.find('>ul').tree({url:opts.url}).tree('reload'); 
	} 
	 
	$.fn.combotree = function(options, param){ 
		if (typeof options == 'string'){ 
			switch(options){ 
			case 'setValue': 
				return this.each(function(){ 
					setValue(this, param); 
				}); 
			case 'reload': 
				return this.each(function(){ 
					reload(this, param); 
				}); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'combotree'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				var r = init(this); 
				state = $.data(this, 'combotree', { 
					options: $.extend({}, $.fn.combotree.defaults, { 
						width: (parseInt($(this).css('width')) || 'auto'), 
						treeWidth: $(this).attr('treeWidth'), 
						treeHeight: ($(this).attr('treeHeight') || 200), 
						url: $(this).attr('url') 
					}, options), 
					combotree: r.combotree, 
					content: r.content 
				}); 
			} 
			 
			setSize(this); 
		}); 
	}; 
	 
	$.fn.combotree.defaults = { 
		width:'auto', 
		treeWidth:null, 
		treeHeight:200, 
		url:null, 
		onSelect:function(node){}, 
		onChange:function(newValue,oldValue){} 
	}; 
})(jQuery);/** 
 * timespinner - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 *   spinner 
 *  
 */ 
(function($){ 
	function create(target){ 
		var opts = $.data(target, 'timespinner').options; 
		$(target).spinner(opts); 
		 
		$(target).unbind('.timespinner'); 
		$(target).bind('click.timespinner', function(){ 
			var start = 0; 
			if (this.selectionStart != null){ 
				start = this.selectionStart; 
			} else if (this.createTextRange){ 
				var range = target.createTextRange(); 
				var s = document.selection.createRange(); 
				s.setEndPoint("StartToStart", range); 
				start = s.text.length; 
			} 
			if (start >= 0 && start <= 2){ 
				opts.highlight = 0; 
			} else if (start >= 3 && start <= 5){ 
				opts.highlight = 1; 
			} else if (start >= 6 && start <= 8){ 
				opts.highlight = 2; 
			} 
			highlight(target); 
		}).bind('blur.timespinner', function(){ 
			fixValue(target); 
		}); 
	} 
	 
	/** 
	 * highlight the hours or minutes or seconds. 
	 */ 
	function highlight(target){ 
		var opts = $.data(target, 'timespinner').options; 
		var start = 0, end = 0; 
		if (opts.highlight == 0){ 
			start = 0; 
			end = 2; 
		} else if (opts.highlight == 1){ 
			start = 3; 
			end = 5; 
		} else if (opts.highlight == 2){ 
			start = 6; 
			end = 8; 
		} 
		if (target.selectionStart != null){ 
			target.setSelectionRange(start, end); 
		} else if (target.createTextRange){ 
			var range = target.createTextRange(); 
			range.collapse(); 
			range.moveEnd('character', end); 
			range.moveStart('character', start); 
			range.select(); 
		} 
		$(target).focus(); 
	} 
	 
	/** 
	 * parse the time and return it or return null if the format is invalid 
	 */ 
	function parseTime(target, value){ 
		var opts = $.data(target, 'timespinner').options; 
		if (!value) return null; 
		var vv = value.split(opts.separator); 
		for(var i=0; i<vv.length; i++){ 
			if (isNaN(vv[i])) return null; 
		} 
		while(vv.length < 3){ 
			vv.push(0); 
		} 
		return new Date(1900, 0, 0, vv[0], vv[1], vv[2]); 
	} 
	 
	function fixValue(target){ 
		var opts = $.data(target, 'timespinner').options; 
		var value = $(target).val(); 
		var time = parseTime(target, value); 
		if (!time){ 
			time = parseTime(target, opts.value); 
		} 
		if (!time){ 
			opts.value = ''; 
			$(target).val(''); 
			return; 
		} 
		 
		var minTime = parseTime(target, opts.min); 
		var maxTime = parseTime(target, opts.max); 
		if (minTime && minTime > time) time = minTime; 
		if (maxTime && maxTime < time) time = maxTime; 
		 
		var tt = [formatNumber(time.getHours()), formatNumber(time.getMinutes())]; 
		if (opts.showSeconds){ 
			tt.push(formatNumber(time.getSeconds())); 
		} 
		var val = tt.join(opts.separator); 
		opts.value = val; 
		$(target).val(val); 
		 
//		highlight(target); 
		 
		function formatNumber(value){ 
			return (value < 10 ? '0' : '') + value; 
		} 
	} 
	 
	function doSpin(target, down){ 
		var opts = $.data(target, 'timespinner').options; 
		var val = $(target).val(); 
		if (val == ''){ 
			val = [0,0,0].join(opts.separator); 
		} 
		var vv = val.split(opts.separator); 
		for(var i=0; i<vv.length; i++){ 
			vv[i] = parseInt(vv[i], 10); 
		} 
		if (down == true){ 
			vv[opts.highlight] -= opts.increment; 
		} else { 
			vv[opts.highlight] += opts.increment; 
		} 
		$(target).val(vv.join(opts.separator)); 
		fixValue(target); 
		highlight(target); 
	} 
	 
	 
	$.fn.timespinner = function(options, param){ 
		if (typeof options == 'string'){ 
			var method = $.fn.timespinner.methods[options]; 
			if (method){ 
				return method(this, param); 
			} else { 
				return this.spinner(options, param); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'timespinner'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				$.data(this, 'timespinner', { 
					options: $.extend({}, $.fn.timespinner.defaults, $.fn.timespinner.parseOptions(this), options) 
				}); 
				create(this); 
			} 
		}); 
	}; 
	 
	$.fn.timespinner.methods = { 
		options: function(jq){ 
			var opts = $.data(jq[0], 'timespinner').options; 
			return $.extend(opts, { 
				value: jq.val() 
			}); 
		}, 
		setValue: function(jq, value){ 
			return jq.each(function(){ 
				$(this).val(value); 
				fixValue(this); 
			}); 
		} 
	}; 
	 
	$.fn.timespinner.parseOptions = function(target){ 
		var t = $(target); 
		return $.extend({}, $.fn.spinner.parseOptions(target), { 
			separator: t.attr('separator'), 
			showSeconds: (t.attr('showSeconds') ? t.attr('showSeconds') == 'true' : undefined), 
			highlight: (parseInt(t.attr('highlight')) || undefined) 
		}); 
	}; 
	 
	$.fn.timespinner.defaults = $.extend({}, $.fn.spinner.defaults, { 
		separator: ':', 
		showSeconds: false, 
		highlight: 0,	// The field to highlight initially, 0 = hours, 1 = minutes, ... 
		spin: function(down){doSpin(this, down);} 
	}); 
})(jQuery);/** 
 * datebox - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	 calendar 
 *   combo 
 *  
 */ 
(function($){ 
	/** 
	 * create date box 
	 */ 
	function createBox(target){ 
		var state = $.data(target, 'datebox'); 
		var opts = state.options; 
		 
		$(target).combo($.extend({}, opts, { 
			onShowPanel:function(){ 
				state.calendar.calendar('resize'); 
				opts.onShowPanel.call(target); 
			} 
		})); 
		$(target).combo('textbox').parent().addClass('datebox'); 
		 
		/** 
		 * if the calendar isn't created, create it. 
		 */ 
		if (!state.calendar){ 
			createCalendar(); 
		} 
		 
		function createCalendar(){ 
			var panel = $(target).combo('panel'); 
			state.calendar = $('<div></div>').appendTo(panel).wrap('<div class="datebox-calendar-inner"></div>'); 
			state.calendar.calendar({ 
				fit:true, 
				border:false, 
				onSelect:function(date){ 
					var value = opts.formatter(date); 
					setValue(target, value); 
					$(target).combo('hidePanel'); 
					opts.onSelect.call(target, date); 
				} 
			}); 
			setValue(target, opts.value); 
			 
			var button = $('<div class="datebox-button"></div>').appendTo(panel); 
			$('<a href="javascript:void(0)" class="datebox-current"></a>').html(opts.currentText).appendTo(button); 
			$('<a href="javascript:void(0)" class="datebox-close"></a>').html(opts.closeText).appendTo(button); 
			button.find('.datebox-current,.datebox-close').hover( 
					function(){$(this).addClass('datebox-button-hover');}, 
					function(){$(this).removeClass('datebox-button-hover');} 
			); 
			button.find('.datebox-current').click(function(){ 
				state.calendar.calendar({ 
					year:new Date().getFullYear(), 
					month:new Date().getMonth()+1, 
					current:new Date() 
				}); 
			}); 
			button.find('.datebox-close').click(function(){ 
				$(target).combo('hidePanel'); 
			}); 
		} 
	} 
	 
	/** 
	 * called when user inputs some value in text box 
	 */ 
	function doQuery(target, q){ 
		setValue(target, q); 
	} 
	 
	/** 
	 * called when user press enter key 
	 */ 
	function doEnter(target){ 
		var opts = $.data(target, 'datebox').options; 
		var c = $.data(target, 'datebox').calendar; 
		var value = opts.formatter(c.calendar('options').current); 
		setValue(target, value); 
		$(target).combo('hidePanel'); 
	} 
	 
	function setValue(target, value){ 
		var state = $.data(target, 'datebox'); 
		var opts = state.options; 
		$(target).combo('setValue', value).combo('setText', value); 
		state.calendar.calendar('moveTo', opts.parser(value)); 
	} 
	 
	$.fn.datebox = function(options, param){ 
		if (typeof options == 'string'){ 
			var method = $.fn.datebox.methods[options]; 
			if (method){ 
				return method(this, param); 
			} else { 
				return this.combo(options, param); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'datebox'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				$.data(this, 'datebox', { 
					options: $.extend({}, $.fn.datebox.defaults, $.fn.datebox.parseOptions(this), options) 
				}); 
			} 
			createBox(this); 
		}); 
	}; 
	 
	$.fn.datebox.methods = { 
		options: function(jq){ 
			return $.data(jq[0], 'datebox').options; 
		}, 
		calendar: function(jq){	// get the calendar object 
			return $.data(jq[0], 'datebox').calendar; 
		}, 
		setValue: function(jq, value){ 
			return jq.each(function(){ 
				setValue(this, value); 
			}); 
		} 
	}; 
	 
	$.fn.datebox.parseOptions = function(target){ 
		var t = $(target); 
		return $.extend({}, $.fn.combo.parseOptions(target), { 
		}); 
	}; 
	 
	$.fn.datebox.defaults = $.extend({}, $.fn.combo.defaults, { 
		panelWidth:180, 
		panelHeight:'auto', 
		 
		keyHandler: { 
			up:function(){}, 
			down:function(){}, 
			enter:function(){doEnter(this);}, 
			query:function(q){doQuery(this, q);} 
		}, 
		 
		currentText:'Today', 
		closeText:'Close', 
		okText:'Ok', 
		 
		formatter:function(date){ 
			var y = date.getFullYear(); 
			var m = date.getMonth()+1; 
			var d = date.getDate(); 
			return m+'/'+d+'/'+y; 
		}, 
		parser:function(s){ 
			var t = Date.parse(s); 
			if (!isNaN(t)){ 
				return new Date(t); 
			} else { 
				return new Date(); 
			} 
		}, 
		 
		onSelect:function(date){} 
	}); 
})(jQuery); 
/** 
 * datetimebox - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	 datebox 
 *   timespinner 
 *  
 */ 
(function($){ 
	function createBox(target){ 
		var state = $.data(target, 'datetimebox'); 
		var opts = state.options; 
		 
		$(target).datebox($.extend({}, opts, { 
			onShowPanel:function(){ 
				var value = $(target).datetimebox('getValue'); 
				setValue(target, value, true); 
				opts.onShowPanel.call(target); 
			} 
		})); 
		 
		// override the calendar onSelect event, don't close panel when selected 
		$(target).datebox('calendar').calendar({ 
			onSelect:function(date){ 
				opts.onSelect.call(target, date); 
			} 
		}); 
		 
		var panel = $(target).datebox('panel'); 
		if (!state.spinner){ 
			var p = $('<div style="padding:2px"><input style="width:80px"></div>').insertAfter(panel.children('div.datebox-calendar-inner')); 
			state.spinner = p.children('input'); 
			state.spinner.timespinner({ 
				showSeconds: true 
			}).bind('mousedown',function(e){ 
				e.stopPropagation(); 
			}); 
			setValue(target, opts.value); 
			 
			var button = panel.children('div.datebox-button'); 
			var ok = $('<a href="javascript:void(0)" class="datebox-ok"></a>').html(opts.okText).appendTo(button); 
			ok.hover( 
				function(){$(this).addClass('datebox-button-hover');}, 
				function(){$(this).removeClass('datebox-button-hover');} 
			).click(function(){ 
				doEnter(target); 
			}); 
		} 
	} 
	 
	/** 
	 * get current date, including time 
	 */ 
	function getCurrentDate(target){ 
		var c = $(target).datetimebox('calendar'); 
		var t = $(target).datetimebox('spinner'); 
		var date = c.calendar('options').current; 
		return new Date(date.getFullYear(), date.getMonth(), date.getDate(), t.timespinner('getHours'), t.timespinner('getMinutes'), t.timespinner('getSeconds')); 
	} 
	 
	 
	/** 
	 * called when user inputs some value in text box 
	 */ 
	function doQuery(target, q){ 
		setValue(target, q, true); 
	} 
	 
	/** 
	 * called when user press enter key 
	 */ 
	function doEnter(target){ 
		var opts = $.data(target, 'datetimebox').options; 
		var date = getCurrentDate(target); 
		setValue(target, opts.formatter(date)); 
		$(target).combo('hidePanel'); 
	} 
	 
	/** 
	 * set value, if remainText is assigned, don't change the text value 
	 */ 
	function setValue(target, value, remainText){ 
		var opts = $.data(target, 'datetimebox').options; 
		 
		$(target).combo('setValue', value); 
		if (!remainText){ 
			if (value){ 
				var date = opts.parser(value); 
				$(target).combo('setValue', opts.formatter(date)); 
				$(target).combo('setText', opts.formatter(date)); 
			} else { 
				$(target).combo('setText', value); 
			} 
		} 
		var date = opts.parser(value); 
		$(target).datetimebox('calendar').calendar('moveTo', opts.parser(value)); 
		$(target).datetimebox('spinner').timespinner('setValue', getTimeS(date)); 
		 
		/** 
		 * get the time formatted string such as '03:48:02' 
		 */ 
		function getTimeS(date){ 
			function formatNumber(value){ 
				return (value < 10 ? '0' : '') + value; 
			} 
			 
			var tt = [formatNumber(date.getHours()), formatNumber(date.getMinutes())]; 
			if (opts.showSeconds){ 
				tt.push(formatNumber(date.getSeconds())); 
			} 
			return tt.join($(target).datetimebox('spinner').timespinner('options').separator); 
		} 
	} 
	 
	$.fn.datetimebox = function(options, param){ 
		if (typeof options == 'string'){ 
			var method = $.fn.datetimebox.methods[options]; 
			if (method){ 
				return method(this, param); 
			} else { 
				return this.datebox(options, param); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'datetimebox'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				$.data(this, 'datetimebox', { 
					options: $.extend({}, $.fn.datetimebox.defaults, $.fn.datetimebox.parseOptions(this), options) 
				}); 
			} 
			createBox(this); 
		}); 
	} 
	 
	$.fn.datetimebox.methods = { 
		options: function(jq){ 
			return $.data(jq[0], 'datetimebox').options; 
		}, 
		spinner: function(jq){ 
			return $.data(jq[0], 'datetimebox').spinner; 
		}, 
		setValue: function(jq, value){ 
			return jq.each(function(){ 
				setValue(this, value); 
			}); 
		} 
	}; 
	 
	$.fn.datetimebox.parseOptions = function(target){ 
		var t = $(target); 
		return $.extend({}, $.fn.datebox.parseOptions(target), { 
		}); 
	}; 
	 
	$.fn.datetimebox.defaults = $.extend({}, $.fn.datebox.defaults, { 
		showSeconds:true, 
		 
		keyHandler: { 
			up:function(){}, 
			down:function(){}, 
			enter:function(){doEnter(this);}, 
			query:function(q){doQuery(this, q);} 
		}, 
		 
		formatter:function(date){ 
			var h = date.getHours(); 
			var M = date.getMinutes(); 
			var s = date.getSeconds(); 
			function formatNumber(value){ 
				return (value < 10 ? '0' : '') + value; 
			} 
			return $.fn.datebox.defaults.formatter(date) + ' ' + formatNumber(h)+':'+formatNumber(M)+':'+formatNumber(s); 
		}, 
		parser:function(s){ 
			if ($.trim(s) == ''){ 
				return new Date(); 
			} 
			var dt = s.split(' '); 
			var d = $.fn.datebox.defaults.parser(dt[0]); 
			var tt = dt[1].split(':'); 
			var hour = parseInt(tt[0], 10); 
			var minute = parseInt(tt[1], 10); 
			var second = parseInt(tt[2], 10); 
			return new Date(d.getFullYear(), d.getMonth(), d.getDate(), hour, minute, second); 
		} 
	}); 
})(jQuery); 
/** 
 * window - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	 panel 
 *   draggable 
 *   resizable 
 *  
 */ 
(function($){ 
	function setSize(target, param){ 
		$(target).panel('resize'); 
	} 
	 
	/** 
	 * create and initialize window, the window is created based on panel component  
	 */ 
	function init(target, options){ 
		var state = $.data(target, 'window'); 
		var opts; 
		if (state){ 
			opts = $.extend(state.opts, options); 
		} else { 
			var t = $(target); 
			opts = $.extend({}, $.fn.window.defaults, { 
				title: t.attr('title'), 
				collapsible: (t.attr('collapsible') ? t.attr('collapsible') == 'true' : undefined), 
				minimizable: (t.attr('minimizable') ? t.attr('minimizable') == 'true' : undefined), 
				maximizable: (t.attr('maximizable') ? t.attr('maximizable') == 'true' : undefined), 
				closable: (t.attr('closable') ? t.attr('closable') == 'true' : undefined), 
				closed: (t.attr('closed') ? t.attr('closed') == 'true' : undefined), 
				shadow: (t.attr('shadow') ? t.attr('shadow') == 'true' : undefined), 
				modal: (t.attr('modal') ? t.attr('modal') == 'true' : undefined) 
			}, options); 
			$(target).attr('title', ''); 
			state = $.data(target, 'window', {}); 
		} 
		 
		// create window 
		var win = $(target).panel($.extend({}, opts, { 
			border: false, 
			doSize: true,	// size the panel, the property undefined in window component 
			closed: true,	// close the panel 
			cls: 'window', 
			headerCls: 'window-header', 
			bodyCls: 'window-body', 
			onBeforeDestroy: function(){ 
				if (opts.onBeforeDestroy){ 
					if (opts.onBeforeDestroy.call(target) == false) return false; 
				} 
				var state = $.data(target, 'window'); 
				if (state.shadow) state.shadow.remove(); 
				if (state.mask) state.mask.remove(); 
			}, 
			onClose: function(){ 
				var state = $.data(target, 'window'); 
				if (state.shadow) state.shadow.hide(); 
				if (state.mask) state.mask.hide(); 
				 
				if (opts.onClose) opts.onClose.call(target); 
			}, 
			onOpen: function(){ 
				var state = $.data(target, 'window'); 
				if (state.mask){ 
					state.mask.css({ 
						display:'block', 
						zIndex: $.fn.window.defaults.zIndex++ 
					}); 
				} 
				if (state.shadow){ 
					state.shadow.css({ 
						display:'block', 
						zIndex: $.fn.window.defaults.zIndex++, 
						left: state.options.left, 
						top: state.options.top, 
						width: state.window.outerWidth(), 
						height: state.window.outerHeight() 
					}); 
				} 
				state.window.css('z-index', $.fn.window.defaults.zIndex++); 
//				if (state.mask) state.mask.show(); 
				 
				if (opts.onOpen) opts.onOpen.call(target); 
			}, 
			onResize: function(width, height){ 
				var state = $.data(target, 'window'); 
				if (state.shadow){ 
					state.shadow.css({ 
						left: state.options.left, 
						top: state.options.top, 
						width: state.window.outerWidth(), 
						height: state.window.outerHeight() 
					}); 
				} 
				 
				if (opts.onResize) opts.onResize.call(target, width, height); 
			}, 
			onMove: function(left, top){ 
				var state = $.data(target, 'window'); 
				if (state.shadow){ 
					state.shadow.css({ 
						left: state.options.left, 
						top: state.options.top 
					}); 
				} 
				 
				if (opts.onMove) opts.onMove.call(target, left, top); 
			}, 
			onMinimize: function(){ 
				var state = $.data(target, 'window'); 
				if (state.shadow) state.shadow.hide(); 
				if (state.mask) state.mask.hide(); 
				 
				if (opts.onMinimize) opts.onMinimize.call(target); 
			}, 
			onBeforeCollapse: function(){ 
				if (opts.onBeforeCollapse){ 
					if (opts.onBeforeCollapse.call(target) == false) return false; 
				} 
				var state = $.data(target, 'window'); 
				if (state.shadow) state.shadow.hide(); 
			}, 
			onExpand: function(){ 
				var state = $.data(target, 'window'); 
				if (state.shadow) state.shadow.show(); 
				if (opts.onExpand) opts.onExpand.call(target); 
			} 
		})); 
		 
		// save the window state 
		state.options = win.panel('options'); 
		state.opts = opts; 
		state.window = win.panel('panel'); 
		 
		// create mask 
		if (state.mask) state.mask.remove(); 
		if (opts.modal == true){ 
			state.mask = $('<div class="window-mask"></div>').appendTo('body'); 
			state.mask.css({ 
//				zIndex: $.fn.window.defaults.zIndex++, 
				width: getPageArea().width, 
				height: getPageArea().height, 
				display: 'none' 
			}); 
		} 
		 
		// create shadow 
		if (state.shadow) state.shadow.remove(); 
		if (opts.shadow == true){ 
			state.shadow = $('<div class="window-shadow"></div>').insertAfter(state.window); 
			state.shadow.css({ 
//				zIndex: $.fn.window.defaults.zIndex++, 
				display: 'none' 
			}); 
		} 
		 
//		state.window.css('z-index', $.fn.window.defaults.zIndex++); 
		 
		 
		// if require center the window 
		if (state.options.left == null){ 
			var width = state.options.width; 
			if (isNaN(width)){ 
				width = state.window.outerWidth(); 
			} 
			state.options.left = ($(window).width() - width) / 2 + $(document).scrollLeft(); 
		} 
		if (state.options.top == null){ 
			var height = state.window.height; 
			if (isNaN(height)){ 
				height = state.window.outerHeight(); 
			} 
			state.options.top = ($(window).height() - height) / 2 + $(document).scrollTop(); 
		} 
		win.window('move'); 
		 
		if (state.opts.closed == false){ 
			win.window('open');	// open the window 
		} 
	} 
	 
	/** 
	 * set window drag and resize property 
	 */ 
	function setProperties(target){ 
		var state = $.data(target, 'window'); 
		 
		state.window.draggable({ 
			handle: '>div.panel-header>div.panel-title', 
			disabled: state.options.draggable == false, 
			onStartDrag: function(e){ 
				if (state.mask) state.mask.css('z-index', $.fn.window.defaults.zIndex++); 
				if (state.shadow) state.shadow.css('z-index', $.fn.window.defaults.zIndex++); 
				state.window.css('z-index', $.fn.window.defaults.zIndex++); 
				 
				if (!state.proxy){ 
					state.proxy = $('<div class="window-proxy"></div>').insertAfter(state.window); 
				} 
				state.proxy.css({ 
					display:'none', 
					zIndex: $.fn.window.defaults.zIndex++, 
					left: e.data.left, 
					top: e.data.top, 
					width: ($.boxModel==true ? (state.window.outerWidth()-(state.proxy.outerWidth()-state.proxy.width())) : state.window.outerWidth()), 
					height: ($.boxModel==true ? (state.window.outerHeight()-(state.proxy.outerHeight()-state.proxy.height())) : state.window.outerHeight()) 
				}); 
				setTimeout(function(){ 
					if (state.proxy) state.proxy.show(); 
				}, 500); 
			}, 
			onDrag: function(e){ 
				state.proxy.css({ 
					display:'block', 
					left: e.data.left, 
					top: e.data.top 
				}); 
				return false; 
			}, 
			onStopDrag: function(e){ 
				state.options.left = e.data.left; 
				state.options.top = e.data.top; 
				$(target).window('move'); 
				state.proxy.remove(); 
				state.proxy = null; 
			} 
		}); 
		 
		state.window.resizable({ 
			disabled: state.options.resizable == false, 
			onStartResize:function(e){ 
				if (!state.proxy){ 
					state.proxy = $('<div class="window-proxy"></div>').insertAfter(state.window); 
				} 
				state.proxy.css({ 
					zIndex: $.fn.window.defaults.zIndex++, 
					left: e.data.left, 
					top: e.data.top, 
					width: ($.boxModel==true ? (e.data.width-(state.proxy.outerWidth()-state.proxy.width())) : e.data.width), 
					height: ($.boxModel==true ? (e.data.height-(state.proxy.outerHeight()-state.proxy.height())) : e.data.height) 
				}); 
			}, 
			onResize: function(e){ 
				state.proxy.css({ 
					left: e.data.left, 
					top: e.data.top, 
					width: ($.boxModel==true ? (e.data.width-(state.proxy.outerWidth()-state.proxy.width())) : e.data.width), 
					height: ($.boxModel==true ? (e.data.height-(state.proxy.outerHeight()-state.proxy.height())) : e.data.height) 
				}); 
				return false; 
			}, 
			onStopResize: function(e){ 
				state.options.left = e.data.left; 
				state.options.top = e.data.top; 
				state.options.width = e.data.width; 
				state.options.height = e.data.height; 
				setSize(target); 
				state.proxy.remove(); 
				state.proxy = null; 
			} 
		}); 
	} 
	 
	function getPageArea() { 
		if (document.compatMode == 'BackCompat') { 
			return { 
				width: Math.max(document.body.scrollWidth, document.body.clientWidth), 
				height: Math.max(document.body.scrollHeight, document.body.clientHeight) 
			} 
		} else { 
			return { 
				width: Math.max(document.documentElement.scrollWidth, document.documentElement.clientWidth), 
				height: Math.max(document.documentElement.scrollHeight, document.documentElement.clientHeight) 
			} 
		} 
	} 
	 
	// when window resize, reset the width and height of the window's mask 
	$(window).resize(function(){ 
		$('.window-mask').css({ 
			width: $(window).width(), 
			height: $(window).height() 
		}); 
		setTimeout(function(){ 
			$('.window-mask').css({ 
				width: getPageArea().width, 
				height: getPageArea().height 
			}); 
		}, 50); 
	}); 
	 
	$.fn.window = function(options, param){ 
		if (typeof options == 'string'){ 
			switch(options){ 
			case 'options': 
				return $.data(this[0], 'window').options; 
			case 'window': 
				return $.data(this[0], 'window').window; 
			case 'setTitle': 
				return this.each(function(){ 
					$(this).panel('setTitle', param); 
				}); 
			case 'open': 
				return this.each(function(){ 
					$(this).panel('open', param); 
				}); 
			case 'close': 
				return this.each(function(){ 
					$(this).panel('close', param); 
				}); 
			case 'destroy': 
				return this.each(function(){ 
					$(this).panel('destroy', param); 
				}); 
			case 'refresh': 
				return this.each(function(){ 
					$(this).panel('refresh'); 
				}); 
			case 'resize': 
				return this.each(function(){ 
					$(this).panel('resize', param); 
				}); 
			case 'move': 
				return this.each(function(){ 
					$(this).panel('move', param); 
				}); 
			case 'maximize': 
				return this.each(function(){ 
					$(this).panel('maximize'); 
				}); 
			case 'minimize': 
				return this.each(function(){ 
					$(this).panel('minimize'); 
				}); 
			case 'restore': 
				return this.each(function(){ 
					$(this).panel('restore'); 
				}); 
			case 'collapse': 
				return this.each(function(){ 
					$(this).panel('collapse', param); 
				}); 
			case 'expand': 
				return this.each(function(){ 
					$(this).panel('expand', param); 
				}); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			init(this, options); 
			setProperties(this); 
		}); 
	}; 
	 
	$.fn.window.defaults = { 
		zIndex: 9000, 
		draggable: true, 
		resizable: true, 
		shadow: true, 
		modal: false, 
		 
		// window's property which difference from panel 
		title: 'New Window', 
		collapsible: true, 
		minimizable: true, 
		maximizable: true, 
		closable: true, 
		closed: false 
	}; 
})(jQuery);/** 
 * dialog - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	 window 
 *  
 */ 
(function($){ 
	/** 
	 * wrap dialog and return content panel. 
	 */ 
	function wrapDialog(target){ 
		var t = $(target); 
		t.wrapInner('<div class="dialog-content"></div>'); 
		var contentPanel = t.find('>div.dialog-content'); 
		 
		contentPanel.css('padding', t.css('padding')); 
		t.css('padding', 0); 
		 
		contentPanel.panel({ 
			border:false 
		}); 
		 
		return contentPanel; 
	} 
	 
	/** 
	 * build the dialog 
	 */ 
	function buildDialog(target){ 
		var opts = $.data(target, 'dialog').options; 
		var contentPanel = $.data(target, 'dialog').contentPanel; 
		 
		$(target).find('div.dialog-toolbar').remove(); 
		$(target).find('div.dialog-button').remove(); 
		if (opts.toolbar){ 
			var toolbar = $('<div class="dialog-toolbar"></div>').prependTo(target); 
			for(var i=0; i<opts.toolbar.length; i++){ 
				var p = opts.toolbar[i]; 
				if (p == '-'){ 
					toolbar.append('<div class="dialog-tool-separator"></div>'); 
				} else { 
					var tool = $('<a href="javascript:void(0)"></a>').appendTo(toolbar); 
					tool.css('float','left').text(p.text); 
					if (p.iconCls) tool.attr('icon', p.iconCls); 
					if (p.handler) tool[0].onclick = p.handler; 
					tool.linkbutton({ 
						plain: true, 
						disabled: (p.disabled || false) 
					}); 
				} 
			} 
			toolbar.append('<div style="clear:both"></div>'); 
		} 
		 
		if (opts.buttons){ 
			var buttons = $('<div class="dialog-button"></div>').appendTo(target); 
			for(var i=0; i<opts.buttons.length; i++){ 
				var p = opts.buttons[i]; 
				var button = $('<a href="javascript:void(0)"></a>').appendTo(buttons); 
				if (p.handler) button[0].onclick = p.handler; 
				button.linkbutton(p); 
			} 
		} 
		 
		if (opts.href){ 
			contentPanel.panel({ 
				href: opts.href, 
				onLoad: opts.onLoad 
			}); 
			 
			opts.href = null; 
		} 
		 
		$(target).window($.extend({}, opts, { 
			onResize:function(width, height){ 
				var wbody = $(target).panel('panel').find('>div.panel-body'); 
				 
				contentPanel.panel('resize', { 
					width: wbody.width(), 
					height: (height=='auto') ? 'auto' : 
							wbody.height() 
							- wbody.find('>div.dialog-toolbar').outerHeight() 
							- wbody.find('>div.dialog-button').outerHeight() 
				}); 
				 
				if (opts.onResize) opts.onResize.call(target, width, height); 
			} 
		})); 
	} 
	 
	function refresh(target){ 
		var contentPanel = $.data(target, 'dialog').contentPanel; 
		contentPanel.panel('refresh'); 
	} 
	 
	$.fn.dialog = function(options, param){ 
		if (typeof options == 'string'){ 
			switch(options){ 
			case 'options': 
				return $(this[0]).window('options'); 
			case 'dialog': 
				return $(this[0]).window('window'); 
			case 'setTitle': 
				return this.each(function(){ 
					$(this).window('setTitle', param); 
				}); 
			case 'open': 
				return this.each(function(){ 
					$(this).window('open', param); 
				}); 
			case 'close': 
				return this.each(function(){ 
					$(this).window('close', param); 
				}); 
			case 'destroy': 
				return this.each(function(){ 
					$(this).window('destroy', param); 
				}); 
			case 'refresh': 
				return this.each(function(){ 
					refresh(this); 
				}); 
			case 'resize': 
				return this.each(function(){ 
					$(this).window('resize', param); 
				}); 
			case 'move': 
				return this.each(function(){ 
					$(this).window('move', param); 
				}); 
			case 'maximize': 
				return this.each(function(){ 
					$(this).window('maximize'); 
				}); 
			case 'minimize': 
				return this.each(function(){ 
					$(this).window('minimize'); 
				}); 
			case 'restore': 
				return this.each(function(){ 
					$(this).window('restore'); 
				}); 
			case 'collapse': 
				return this.each(function(){ 
					$(this).window('collapse', param); 
				}); 
			case 'expand': 
				return this.each(function(){ 
					$(this).window('expand', param); 
				}); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'dialog'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				var t = $(this); 
				var opts = $.extend({}, $.fn.dialog.defaults, { 
					title:(t.attr('title') ? t.attr('title') : undefined), 
					href:t.attr('href'), 
					collapsible: (t.attr('collapsible') ? t.attr('collapsible') == 'true' : undefined), 
					minimizable: (t.attr('minimizable') ? t.attr('minimizable') == 'true' : undefined), 
					maximizable: (t.attr('maximizable') ? t.attr('maximizable') == 'true' : undefined), 
					resizable: (t.attr('resizable') ? t.attr('resizable') == 'true' : undefined) 
				}, options); 
				$.data(this, 'dialog', { 
					options: opts, 
					contentPanel: wrapDialog(this) 
				}); 
			} 
			buildDialog(this); 
		}); 
	}; 
	 
	$.fn.dialog.defaults = { 
		title: 'New Dialog', 
		href: null, 
		collapsible: false, 
		minimizable: false, 
		maximizable: false, 
		resizable: false, 
		 
		toolbar:null, 
		buttons:null 
	}; 
})(jQuery);/** 
 * shadow - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2009 stworthy [ stworthy@gmail.com ]  
 *  
 * options: 
 * 	hidden: boolean false to show the shadow and true to hide the shadow  
 * 	fit: boolean true to fit the parent container and false not 
 * 	width: integer width The width in pixels of the shadow. Default: 8 
 *  
 */ 
(function($){ 
	$.fn.shadow = function(options){ 
		 
		return this.each(function(){ 
			 
			// wrap the element and return the jQuery object 
			function wrapElem(target) { 
				var wraps = [ 
				             '<div class="shadow">', 
				             '<div class="shadow-one">', 
				             '<div class="shadow-corner-a"></div>', 
				             '<div class="shadow-corner-b"></div>', 
				             '<div class="shadow-two">', 
				             '	<div class="shadow-three">', 
				             '		<div class="shadow-four">', 
				             '		</div>', 
				             '	</div>', 
				             '</div>', 
				             '</div>', 
				             '</div>' 
				             ]; 
				 
				var shadow = $(wraps.join('')).insertAfter($(target)); 
				$(target).appendTo($('.shadow-four', shadow)); 
				return shadow; 
			} 
			 
			if ($.data(this, 'shadow')) { 
				$.extend($.data(this, 'shadow').options, options || {}); 
			} else { 
				$.data(this, 'shadow', { 
					options: $.extend({}, $.fn.shadow.defaults, options || {}), 
					shadow: wrapElem(this), 
					oldWidth: $(this).width(),	// the element old width and height 
					oldHeight: $(this).height() 
				}); 
			} 
			 
			if (!$.data(this, 'shadow').shadow) { 
				$.data(this, 'shadow').shadow = wrapElem(this); 
			} 
			 
			var opts = $.data(this, 'shadow').options; 
			var shadow = $.data(this, 'shadow').shadow; 
			 
			if (opts.hidden == true) { 
				$(this).insertAfter(shadow); 
				shadow.remove(); 
				$.data(this, 'shadow').shadow = null; 
				return; 
			} 
			 
			$('.shadow-one', shadow).css({ 
				paddingLeft: opts.width * 2, 
				paddingTop: opts.width * 2 
			}); 
			$('.shadow-corner-a', shadow).css({ 
				width: opts.width * 2, 
				height: opts.width * 2 
			}); 
			$('.shadow-corner-b', shadow).css({ 
				width: opts.width * 2, 
				height: opts.width * 2 
			}); 
			$('.shadow-three', shadow).css({ 
				left: opts.width * -2, 
				top: opts.width * -2 
			}); 
			$('.shadow-four', shadow).css({ 
				left: opts.width, 
				top: opts.width 
			}); 
			 
			if (opts.fit == true) { 
				// make element and shadow fit the parent container 
				 
				var parent = $(shadow).parent();	// the parent container 
				 
				if ($.boxModel == true) { 
					var delta = $(this).outerWidth(true) - $(this).width(); 
					$(this).css({ 
						width: parent.width() - 2*opts.width - delta, 
						height: parent.height() - 2*opts.width - delta 
					}); 
					$(shadow).css({ 
						width: parent.width(), 
						height: parent.height() 
					}); 
					$('.shadow-one', shadow).css({ 
						width: parent.width() - 2*opts.width, 
						height: parent.height() - 2*opts.width 
					}); 
				 
				} else { 
					$(this).css({ 
						width:'100%', 
						height:'100%' 
					}); 
					$(shadow).css({ 
						width: parent.width(), 
						height: parent.height() 
					}); 
					$('.shadow-one', shadow).css({ 
						width: parent.width(), 
						height: parent.height() 
					}); 
				} 
			} else { 
				// restore the element's width and height 
				$(this).width($.data(this, 'shadow').oldWidth) 
						.height($.data(this, 'shadow').oldHeight); 
				 
				$('.shadow-one', shadow).css({ 
					width:'100%', 
					height:'100%' 
				}); 
				 
				if ($.boxModel == true) { 
					$(shadow).css({ 
						width: $(this).outerWidth(), 
						height: $(this).outerHeight() 
					}); 
				} else { 
					$(shadow).css({ 
						width: $.data(this, 'shadow').oldWidth + 2*opts.width, 
						height: $.data(this, 'shadow').oldHeight + 2*opts.width 
					}); 
				} 
			} 
			 
		}); 
	}; 
	 
	$.fn.shadow.defaults = { 
			hidden: false, 
			fit: false, 
			width: 8 
	}; 
})(jQuery);/** 
 * dmenu - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2009 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	shadow 
 *  
 * Options: 
 * 	minWidth: integer, the menu minimum width. default 150 
 * 	shadow: boolean, true to show shadow and false to hide. default true 
 * 	minZIndex: integer, the menu's zIndex value. default 500 
 */ 
(function($){ 
	$.fn.dmenu = function(options){ 
		options = $.extend({}, $.fn.dmenu.defaults, options || {}); 
		 
		return this.each(function(){ 
			 
			$('li ul li a', this).each(function(){ 
				if (/^[u4E00-u9FA5]/.test($(this).html()) == false && $.browser.msie) { 
					$(this).css('padding', '7px 20px 5px 30px'); 
				} 
			}); 
			$('li.dmenu-sep', this).html('&nbsp;'); 
			 
			var mainmenu = $(this); 
			var menus = mainmenu.find('ul').parent(); 
			menus.each(function(i) { 
				$(this).css('z-index', options.minZIndex + menus.length - i); 
				if (mainmenu[0] != $(this).parent()[0]) { 
					if ($('>ul', this).length > 0) { 
						$('>a', this).append('<span class="dmenu-right-arrow"></span>'); 
					} 
				} else { 
					if ($('>ul', this).length > 0) { 
						$('<span></span>').addClass('dmenu-down-arrow') 
								.css('top', $(this).height()/2-4) 
								.appendTo($('>a', this)); 
					} 
				} 
				if (options.shadow) { 
					var shadow = $('<div class="dmenu-shadow"><div class="dmenu-shadow-inner"></div></div>'); 
					shadow.css({ 
						width:20, 
						height:20 
					}); 
					shadow.prependTo(this); 
					$('.dmenu-shadow-inner', shadow).shadow({width:5, fit:true, hidden:true}); 
				} 
				 
			}); 
			 
			$('a', this).each(function(){ 
				var icon = $(this).attr('icon'); 
				if (icon) { 
					$('<span></span>').addClass('dmenu-icon').addClass(icon).appendTo(this); 
				} 
			}); 
			 
			// show the main menu 
			$('>li', this).hover( 
					function(){ 
						var menu = $(this).find('ul:eq(0)'); 
						if (menu.length == 0) return; 
						 
						$('a', menu).css('width', 'auto'); 
						var menuWidth = menu.width(); 
						if (menuWidth < options.minWidth) { 
							menuWidth = options.minWidth; 
						} 
						if ($.boxModel == true) { 
							$('>li>a', menu).css('width', menuWidth - 45); 
						} else { 
							$('>li', menu).css('width', menuWidth); 
							$('>li>a', menu).css('width', menuWidth); 
						} 
						 
						var parent = menu.parent(); 
						if (parent.offset().left + menu.outerWidth() > $(window).width()) { 
							var left = menu.offset().left; 
							left -= parent.offset().left + menu.outerWidth() - $(window).width() + 5; 
							menu.css('left', left); 
						} 
						$('li:last', menu).css('border-bottom', '0px'); 
						 
						menu.fadeIn('normal'); 
						$('>div.dmenu-shadow', this).css({ 
							left: parseInt(menu.css('left')) - 5, 
							top: $(this).height(), 
							width: menu.outerWidth() + 10, 
							height: menu.outerHeight() + 5, 
							display: 'block' 
						}); 
						$('.dmenu-shadow-inner', this).shadow({hidden:false}); 
					}, 
					 
					function(){ 
						var menu = $(this).find('ul:eq(0)'); 
						menu.fadeOut('normal'); 
						$('div.dmenu-shadow', this).css('display', 'none'); 
					} 
			); 
			 
			// show the sub menu 
			$('li ul li', this).hover( 
					function(){ 
						var menu = $(this).find('ul:eq(0)'); 
						if (menu.length == 0) return; 
						 
						$('a', menu).css('width', 'auto'); 
						var menuWidth = menu.width(); 
						if (menuWidth < options.minWidth) { 
							menuWidth = options.minWidth; 
						} 
						if ($.boxModel == true) { 
							$('>li>a', menu).css('width', menuWidth - 45); 
						} else { 
							$('>li', menu).css('width', menuWidth); 
							$('>li>a', menu).css('width', menuWidth); 
						} 
						 
						var parent = menu.parent(); 
						if (parent.offset().left + parent.outerWidth() + menu.outerWidth() > $(window).width()) { 
							menu.css('left', - menu.outerWidth() + 5); 
						} else { 
							menu.css('left', parent.outerWidth() - 5); 
						} 
						 
						menu.fadeIn('normal'); 
						$('>div.dmenu-shadow', this).css({ 
							left: parseInt(menu.css('left')) - 5, 
							top: parseInt(menu.css('top')), 
							width: menu.outerWidth() + 10, 
							height: menu.outerHeight() + 5, 
							display: 'block' 
						}); 
						$('.dmenu-shadow-inner', this).shadow({hidden:false}); 
					}, 
					 
					function(){ 
						$('>div.dmenu-shadow', this).css('display', 'none'); 
						$(this).children('ul:first').animate({height:'hide',opacity:'hide'}); 
					} 
			); 
		}); 
	}; 
	 
	$.fn.dmenu.defaults = { 
			minWidth:150, 
			shadow:true, 
			minZIndex:500 
	}; 
	 
	$(function(){ 
		$('ul.dmenu').dmenu(); 
	}); 
})(jQuery);/** 
 * draggable - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 */ 
(function($){ 
	function drag(e){ 
		var opts = $.data(e.data.target, 'draggable').options; 
		 
		var dragData = e.data; 
		var left = dragData.startLeft + e.pageX - dragData.startX; 
		var top = dragData.startTop + e.pageY - dragData.startY; 
		 
		if (opts.deltaX != null && opts.deltaX != undefined){ 
			left = e.pageX + opts.deltaX; 
		} 
		if (opts.deltaY != null && opts.deltaY != undefined){ 
			top = e.pageY + opts.deltaY; 
		} 
		 
		if (e.data.parnet != document.body) { 
			if ($.boxModel == true) { 
				left += $(e.data.parent).scrollLeft(); 
				top += $(e.data.parent).scrollTop(); 
			} 
		} 
		 
		if (opts.axis == 'h') { 
			dragData.left = left; 
		} else if (opts.axis == 'v') { 
			dragData.top = top; 
		} else { 
			dragData.left = left; 
			dragData.top = top; 
		} 
	} 
	 
	function applyDrag(e){ 
		var opts = $.data(e.data.target, 'draggable').options; 
		var proxy = $.data(e.data.target, 'draggable').proxy; 
		if (proxy){ 
			proxy.css('cursor', opts.cursor); 
		} else { 
			proxy = $(e.data.target); 
			$.data(e.data.target, 'draggable').handle.css('cursor', opts.cursor); 
		} 
		proxy.css({ 
			left:e.data.left, 
			top:e.data.top 
		}); 
	} 
	 
	function doDown(e){ 
		var opts = $.data(e.data.target, 'draggable').options; 
		 
		var droppables = $('.droppable').filter(function(){ 
			return e.data.target != this; 
		}).filter(function(){ 
			var accept = $.data(this, 'droppable').options.accept; 
			if (accept){ 
				return $(accept).filter(function(){ 
					return this == e.data.target; 
				}).length > 0; 
			} else { 
				return true; 
			} 
		}); 
		$.data(e.data.target, 'draggable').droppables = droppables; 
		 
		var proxy = $.data(e.data.target, 'draggable').proxy; 
		if (!proxy){ 
			if (opts.proxy){ 
				if (opts.proxy == 'clone'){ 
					proxy = $(e.data.target).clone().insertAfter(e.data.target); 
				} else { 
					proxy = opts.proxy.call(e.data.target, e.data.target); 
				} 
				$.data(e.data.target, 'draggable').proxy = proxy; 
			} else { 
				proxy = $(e.data.target); 
			} 
		} 
		 
		proxy.css('position', 'absolute'); 
		drag(e); 
		applyDrag(e); 
		 
		opts.onStartDrag.call(e.data.target, e); 
		return false; 
	} 
	 
	function doMove(e){ 
		 
		drag(e); 
		if ($.data(e.data.target, 'draggable').options.onDrag.call(e.data.target, e) != false){ 
			applyDrag(e); 
		} 
		 
		var source = e.data.target; 
		$.data(e.data.target, 'draggable').droppables.each(function(){ 
			var dropObj = $(this); 
			var p2 = $(this).offset(); 
			if (e.pageX > p2.left && e.pageX < p2.left + dropObj.outerWidth() 
					&& e.pageY > p2.top && e.pageY < p2.top + dropObj.outerHeight()){ 
				if (!this.entered){ 
					$(this).trigger('_dragenter', [source]); 
					this.entered = true; 
				} 
				$(this).trigger('_dragover', [source]); 
			} else { 
				if (this.entered){ 
					$(this).trigger('_dragleave', [source]); 
					this.entered = false; 
				} 
			} 
		}); 
		 
		return false; 
	} 
	 
	function doUp(e){ 
		drag(e); 
		 
		var proxy = $.data(e.data.target, 'draggable').proxy; 
		var opts = $.data(e.data.target, 'draggable').options; 
		if (opts.revert){ 
			if (checkDrop() == true){ 
				removeProxy(); 
				$(e.data.target).css({ 
					position:e.data.startPosition, 
					left:e.data.startLeft, 
					top:e.data.startTop 
				}); 
			} else { 
				if (proxy){ 
					proxy.animate({ 
						left:e.data.startLeft, 
						top:e.data.startTop 
					}, function(){ 
						removeProxy(); 
					}); 
				} else { 
					$(e.data.target).animate({ 
						left:e.data.startLeft, 
						top:e.data.startTop 
					}, function(){ 
						$(e.data.target).css('position', e.data.startPosition); 
					}); 
				} 
			} 
		} else { 
			$(e.data.target).css({ 
				position:'absolute', 
				left:e.data.left, 
				top:e.data.top 
			}); 
			removeProxy(); 
			checkDrop(); 
		} 
		 
		 
		 
		opts.onStopDrag.call(e.data.target, e); 
		 
		function removeProxy(){ 
			if (proxy){ 
				proxy.remove(); 
			} 
			$.data(e.data.target, 'draggable').proxy = null; 
		} 
		 
		function checkDrop(){ 
			var dropped = false; 
			$.data(e.data.target, 'draggable').droppables.each(function(){ 
				var dropObj = $(this); 
				var p2 = $(this).offset(); 
				if (e.pageX > p2.left && e.pageX < p2.left + dropObj.outerWidth() 
						&& e.pageY > p2.top && e.pageY < p2.top + dropObj.outerHeight()){ 
					if (opts.revert){ 
						$(e.data.target).css({ 
							position:e.data.startPosition, 
							left:e.data.startLeft, 
							top:e.data.startTop 
						}); 
					} 
					$(this).trigger('_drop', [e.data.target]); 
					dropped = true; 
					this.entered = false; 
				} 
			}); 
			return dropped; 
		} 
		 
		$(document).unbind('.draggable'); 
		return false; 
	} 
	 
	$.fn.draggable = function(options){ 
		if (typeof options == 'string'){ 
			switch(options){ 
			case 'options': 
				return $.data(this[0], 'draggable').options; 
			case 'proxy': 
				return $.data(this[0], 'draggable').proxy; 
			case 'enable': 
				return this.each(function(){ 
					$(this).draggable({disabled:false}); 
				}); 
			case 'disable': 
				return this.each(function(){ 
					$(this).draggable({disabled:true}); 
				}); 
			} 
		} 
		 
		return this.each(function(){ 
//			$(this).css('position','absolute'); 
			 
			var opts; 
			var state = $.data(this, 'draggable'); 
			if (state) { 
				state.handle.unbind('.draggable'); 
				opts = $.extend(state.options, options); 
			} else { 
				opts = $.extend({}, $.fn.draggable.defaults, options || {}); 
			} 
			 
			if (opts.disabled == true) { 
				$(this).css('cursor', 'default'); 
				return; 
			} 
			 
			var handle = null; 
            if (typeof opts.handle == 'undefined' || opts.handle == null){ 
                handle = $(this); 
            } else { 
                handle = (typeof opts.handle == 'string' ? $(opts.handle, this) : handle); 
            } 
			$.data(this, 'draggable', { 
				options: opts, 
				handle: handle 
			}); 
			 
			// bind mouse event using event namespace draggable 
			handle.bind('mousedown.draggable', {target:this}, onMouseDown); 
			handle.bind('mousemove.draggable', {target:this}, onMouseMove); 
			 
			function onMouseDown(e) { 
				if (checkArea(e) == false) return; 
 
				var position = $(e.data.target).position(); 
				var data = { 
					startPosition: $(e.data.target).css('position'), 
					startLeft: position.left, 
					startTop: position.top, 
					left: position.left, 
					top: position.top, 
					startX: e.pageX, 
					startY: e.pageY, 
					target: e.data.target, 
					parent: $(e.data.target).parent()[0] 
				}; 
				 
				$(document).bind('mousedown.draggable', data, doDown); 
				$(document).bind('mousemove.draggable', data, doMove); 
				$(document).bind('mouseup.draggable', data, doUp); 
			} 
			 
			function onMouseMove(e) { 
				if (checkArea(e)){ 
					$(this).css('cursor', opts.cursor); 
				} else { 
					$(this).css('cursor', 'default'); 
				} 
			} 
			 
			// check if the handle can be dragged 
			function checkArea(e) { 
				var offset = $(handle).offset(); 
				var width = $(handle).outerWidth(); 
				var height = $(handle).outerHeight(); 
				var t = e.pageY - offset.top; 
				var r = offset.left + width - e.pageX; 
				var b = offset.top + height - e.pageY; 
				var l = e.pageX - offset.left; 
				 
				return Math.min(t,r,b,l) > opts.edge; 
			} 
			 
		}); 
	}; 
	 
	$.fn.draggable.defaults = { 
			proxy:null,	// 'clone' or a function that will create the proxy object,  
						// the function has the source parameter that indicate the source object dragged. 
			revert:false, 
			cursor:'move', 
			deltaX:null, 
			deltaY:null, 
			handle: null, 
			disabled: false, 
			edge:0, 
			axis:null,	// v or h 
			 
			onStartDrag: function(e){}, 
			onDrag: function(e){}, 
			onStopDrag: function(e){} 
	}; 
})(jQuery);/** 
 * droppable - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 */ 
(function($){ 
	function init(target){ 
		$(target).addClass('droppable'); 
		$(target).bind('_dragenter', function(e, source){ 
			$.data(target, 'droppable').options.onDragEnter.apply(target, [e, source]); 
		}); 
		$(target).bind('_dragleave', function(e, source){ 
			$.data(target, 'droppable').options.onDragLeave.apply(target, [e, source]); 
		}); 
		$(target).bind('_dragover', function(e, source){ 
			$.data(target, 'droppable').options.onDragOver.apply(target, [e, source]); 
		}); 
		$(target).bind('_drop', function(e, source){ 
			$.data(target, 'droppable').options.onDrop.apply(target, [e, source]); 
		}); 
	} 
	 
	$.fn.droppable = function(options){ 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'droppable'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				init(this); 
				$.data(this, 'droppable', { 
					options: $.extend({}, $.fn.droppable.defaults, options) 
				}); 
			} 
		}); 
	}; 
	 
	$.fn.droppable.defaults = { 
		accept:null, 
		onDragEnter:function(e, source){}, 
		onDragOver:function(e, source){}, 
		onDragLeave:function(e, source){}, 
		onDrop:function(e, source){} 
	}; 
})(jQuery);/** 
 * form - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 */ 
(function($){ 
	/** 
	 * submit the form 
	 */ 
	function ajaxSubmit(target, options){ 
		options = options || {}; 
		 
		if (options.onSubmit){ 
			if (options.onSubmit.call(target) == false) { 
				return; 
			} 
		} 
		 
		var form = $(target); 
		if (options.url){ 
			form.attr('action', options.url); 
		} 
		var frameId = 'easyui_frame_' + (new Date().getTime()); 
		var frame = $('<iframe id='+frameId+' name='+frameId+'></iframe>') 
				.attr('src', window.ActiveXObject ? 'javascript:false' : 'about:blank') 
				.css({ 
					position:'absolute', 
					top:-1000, 
					left:-1000 
				}); 
		var t = form.attr('target'), a = form.attr('action'); 
		form.attr('target', frameId); 
		try { 
			frame.appendTo('body'); 
			frame.bind('load', cb); 
			form[0].submit(); 
		} finally { 
			form.attr('action', a); 
			t ? form.attr('target', t) : form.removeAttr('target'); 
		} 
		 
		var checkCount = 10; 
		function cb(){ 
			frame.unbind(); 
			var body = $('#'+frameId).contents().find('body'); 
			var data = body.html(); 
			if (data == ''){ 
				if (--checkCount){ 
					setTimeout(cb, 100); 
					return; 
				} 
				return; 
			} 
			var ta = body.find('>textarea'); 
			if (ta.length){ 
				data = ta.value(); 
			} else { 
				var pre = body.find('>pre'); 
				if (pre.length){ 
					data = pre.html(); 
				} 
			} 
			if (options.success){ 
				options.success(data); 
			} 
//			try{ 
//				eval('data='+data); 
//				if (options.success){ 
//					options.success(data); 
//				} 
//			} catch(e) { 
//				if (options.failure){ 
//					options.failure(data); 
//				} 
//			} 
			setTimeout(function(){ 
				frame.unbind(); 
				frame.remove(); 
			}, 100); 
		} 
	} 
	 
	/** 
	 * load form data 
	 * if data is a URL string type load from remote site,  
	 * otherwise load from local data object.  
	 */ 
	function load(target, data){ 
		if (typeof data == 'string'){ 
			$.ajax({ 
				url: data, 
				dataType: 'json', 
				success: function(data){ 
					_load(data); 
				} 
			}); 
		} else { 
			_load(data); 
		} 
		 
		function _load(data){ 
			var form = $(target); 
			for(var name in data){ 
				var val = data[name]; 
				$('input[name='+name+']', form).val(val); 
				$('textarea[name='+name+']', form).val(val); 
				$('select[name='+name+']', form).val(val); 
			} 
		} 
	} 
	 
	/** 
	 * clear the form fields 
	 */ 
	function clear(target){ 
		$('input,select,textarea', target).each(function(){ 
			var t = this.type, tag = this.tagName.toLowerCase(); 
			if (t == 'text' || t == 'password' || tag == 'textarea') 
				this.value = ''; 
			else if (t == 'checkbox' || t == 'radio') 
				this.checked = false; 
			else if (tag == 'select') 
				this.selectedIndex = -1; 
			 
		}); 
	} 
	 
	/** 
	 * set the form to make it can submit with ajax. 
	 */ 
	function setForm(target){ 
		var options = $.data(target, 'form').options; 
		var form = $(target); 
		form.unbind('.form').bind('submit.form', function(){ 
			ajaxSubmit(target, options); 
			return false; 
		}); 
	} 
	 
	$.fn.form = function(options, param){ 
		if (typeof options == 'string'){ 
			switch(options){ 
			case 'submit': 
				return this.each(function(){ 
					ajaxSubmit(this, $.extend({}, $.fn.form.defaults, param||{})); 
				}); 
			case 'load': 
				return this.each(function(){ 
					load(this, param); 
				}); 
			case 'clear': 
				return this.each(function(){ 
					clear(this); 
				}); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			if (!$.data(this, 'form')){ 
				$.data(this, 'form', { 
					options: $.extend({}, $.fn.form.defaults, options) 
				}); 
			} 
			setForm(this); 
		}); 
	}; 
	 
	$.fn.form.defaults = { 
		url: null, 
		onSubmit: function(){}, 
		success: function(data){} 
	}; 
})(jQuery);/** 
 * layout - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 *   resizable 
 *   panel 
 */ 
(function($){ 
	var resizing = false;	// indicate if the region panel is resizing 
	 
	function setSize(container){ 
		var opts = $.data(container, 'layout').options; 
		var panels = $.data(container, 'layout').panels; 
		 
		var cc = $(container); 
		 
		if (opts.fit == true){ 
			var p = cc.parent(); 
			cc.width(p.width()).height(p.height()); 
		} 
		 
		var cpos = { 
			top:0, 
			left:0, 
			width:cc.width(), 
			height:cc.height() 
		}; 
		 
		// set north panel size 
		function setNorthSize(pp){ 
			if (pp.length == 0) return; 
			pp.panel('resize', { 
				width: cc.width(), 
				height: pp.panel('options').height, 
				left: 0, 
				top: 0 
			}); 
			cpos.top += pp.panel('options').height; 
			cpos.height -= pp.panel('options').height; 
		} 
		if (isVisible(panels.expandNorth)){ 
			setNorthSize(panels.expandNorth); 
		} else { 
			setNorthSize(panels.north); 
		} 
		 
		// set south panel size 
		function setSouthSize(pp){ 
			if (pp.length == 0) return; 
			pp.panel('resize', { 
				width: cc.width(), 
				height: pp.panel('options').height, 
				left: 0, 
				top: cc.height() - pp.panel('options').height 
			}); 
			cpos.height -= pp.panel('options').height; 
		} 
		if (isVisible(panels.expandSouth)){ 
			setSouthSize(panels.expandSouth); 
		} else { 
			setSouthSize(panels.south); 
		} 
		 
		// set east panel size 
		function setEastSize(pp){ 
			if (pp.length == 0) return; 
			pp.panel('resize', { 
				width: pp.panel('options').width, 
				height: cpos.height, 
				left: cc.width() - pp.panel('options').width, 
				top: cpos.top 
			}); 
			cpos.width -= pp.panel('options').width; 
		} 
		if (isVisible(panels.expandEast)){ 
			setEastSize(panels.expandEast); 
		} else { 
			setEastSize(panels.east); 
		} 
		 
		// set west panel size 
		function setWestSize(pp){ 
			if (pp.length == 0) return; 
			pp.panel('resize', { 
				width: pp.panel('options').width, 
				height: cpos.height, 
				left: 0, 
				top: cpos.top 
			}); 
			cpos.left += pp.panel('options').width; 
			cpos.width -= pp.panel('options').width; 
		} 
		if (isVisible(panels.expandWest)){ 
			setWestSize(panels.expandWest); 
		} else { 
			setWestSize(panels.west); 
		} 
		 
		panels.center.panel('resize', cpos); 
	} 
	 
	/** 
	 * initialize and wrap the layout 
	 */ 
	function init(container){ 
		var cc = $(container); 
		 
		if (cc[0].tagName == 'BODY'){ 
			$('html').css({ 
				height: '100%', 
				overflow: 'hidden' 
			}); 
			$('body').css({ 
				height: '100%', 
				overflow: 'hidden', 
				border: 'none' 
			}); 
		} 
		cc.addClass('layout'); 
		cc.css({ 
			margin:0, 
			padding:0 
		}); 
		 
		 
		function createPanel(dir){ 
			var pp = $('>div[region='+dir+']', container).addClass('layout-body'); 
			 
			var toolCls = null; 
			if (dir == 'north'){ 
				toolCls = 'layout-button-up'; 
			} else if (dir == 'south'){ 
				toolCls = 'layout-button-down'; 
			} else if (dir == 'east'){ 
				toolCls = 'layout-button-right'; 
			} else if (dir == 'west'){ 
				toolCls = 'layout-button-left'; 
			} 
			 
			var cls = 'layout-panel layout-panel-' + dir; 
			if (pp.attr('split') == 'true'){ 
				cls += ' layout-split-' + dir; 
			} 
			pp.panel({ 
				cls: cls, 
				doSize: false, 
				border: (pp.attr('border') == 'false' ? false : true), 
				tools: [{ 
					iconCls: toolCls,  
					handler: function(){ 
						collapsePanel(container, dir); 
					} 
				}] 
			}); 
			 
			if (pp.attr('split') == 'true'){ 
				var panel = pp.panel('panel'); 
				 
				var handles = ''; 
				if (dir == 'north') handles = 's'; 
				if (dir == 'south') handles = 'n'; 
				if (dir == 'east') handles = 'w'; 
				if (dir == 'west') handles = 'e'; 
				 
				panel.resizable({ 
					handles:handles, 
					onStartResize: function(e){ 
						resizing = true; 
						 
						if (dir == 'north' || dir == 'south'){ 
							var proxy = $('>div.layout-split-proxy-v', container); 
						} else { 
							var proxy = $('>div.layout-split-proxy-h', container); 
						} 
						var top=0,left=0,width=0,height=0; 
						var pos = {display: 'block'}; 
						if (dir == 'north'){ 
							pos.top = parseInt(panel.css('top')) + panel.outerHeight() - proxy.height(); 
							pos.left = parseInt(panel.css('left')); 
							pos.width = panel.outerWidth(); 
							pos.height = proxy.height(); 
						} else if (dir == 'south'){ 
							pos.top = parseInt(panel.css('top')); 
							pos.left = parseInt(panel.css('left')); 
							pos.width = panel.outerWidth(); 
							pos.height = proxy.height(); 
						} else if (dir == 'east'){ 
							pos.top = parseInt(panel.css('top')) || 0; 
							pos.left = parseInt(panel.css('left')) || 0; 
							pos.width = proxy.width(); 
							pos.height = panel.outerHeight(); 
						} else if (dir == 'west'){ 
							pos.top = parseInt(panel.css('top')) || 0; 
							pos.left = panel.outerWidth() - proxy.width(); 
							pos.width = proxy.width(); 
							pos.height = panel.outerHeight(); 
						} 
						proxy.css(pos); 
						 
						$('<div class="layout-mask"></div>').css({ 
							left:0, 
							top:0, 
							width:cc.width(), 
							height:cc.height() 
						}).appendTo(cc); 
					}, 
					onResize: function(e){ 
						if (dir == 'north' || dir == 'south'){ 
							var proxy = $('>div.layout-split-proxy-v', container); 
							proxy.css('top', e.pageY - $(container).offset().top - proxy.height()/2); 
						} else { 
							var proxy = $('>div.layout-split-proxy-h', container); 
							proxy.css('left', e.pageX - $(container).offset().left - proxy.width()/2); 
						} 
						return false; 
					}, 
					onStopResize: function(){ 
						$('>div.layout-split-proxy-v', container).css('display','none'); 
						$('>div.layout-split-proxy-h', container).css('display','none'); 
						var opts = pp.panel('options'); 
						opts.width = panel.outerWidth(); 
						opts.height = panel.outerHeight(); 
						opts.left = panel.css('left'); 
						opts.top = panel.css('top'); 
						pp.panel('resize'); 
						setSize(container); 
						resizing = false; 
						 
						cc.find('>div.layout-mask').remove(); 
					} 
				}); 
			} 
			return pp; 
		} 
		 
		 
		$('<div class="layout-split-proxy-h"></div>').appendTo(cc); 
		$('<div class="layout-split-proxy-v"></div>').appendTo(cc); 
		 
		var panels = { 
			center: createPanel('center') 
		}; 
		 
		panels.north = createPanel('north'); 
		panels.south = createPanel('south'); 
		panels.east = createPanel('east'); 
		panels.west = createPanel('west'); 
		 
		$(container).bind('_resize', function(){ 
			var opts = $.data(container, 'layout').options; 
			if (opts.fit == true){ 
				setSize(container); 
			} 
			return false; 
		}); 
		$(window).resize(function(){ 
			setSize(container); 
		}); 
		 
		return panels; 
	} 
	 
	function collapsePanel(container, region){ 
		var panels = $.data(container, 'layout').panels; 
		var cc = $(container); 
		 
		function createExpandPanel(dir){ 
			var icon; 
			if (dir == 'east') icon = 'layout-button-left' 
				else if (dir == 'west') icon = 'layout-button-right' 
					else if (dir == 'north') icon = 'layout-button-down' 
						else if (dir == 'south') icon = 'layout-button-up'; 
			 
			var p = $('<div></div>').appendTo(cc).panel({ 
				cls: 'layout-expand', 
				title: '&nbsp;', 
				closed: true, 
				doSize: false, 
				tools: [{ 
					iconCls: icon, 
					handler:function(){ 
						expandPanel(container, region); 
					} 
				}] 
			}); 
			p.panel('panel').hover( 
				function(){$(this).addClass('layout-expand-over');}, 
				function(){$(this).removeClass('layout-expand-over');} 
			); 
			return p; 
		} 
		 
		if (region == 'east'){ 
			if (panels.east.panel('options').onBeforeCollapse.call(panels.east) == false) return; 
			 
			panels.center.panel('resize', { 
				width: panels.center.panel('options').width + panels.east.panel('options').width - 28 
			}); 
			panels.east.panel('panel').animate({left:cc.width()}, function(){ 
				panels.east.panel('close'); 
				panels.expandEast.panel('open').panel('resize', { 
					top: panels.east.panel('options').top, 
					left: cc.width() - 28, 
					width: 28, 
					height: panels.east.panel('options').height 
				}); 
				panels.east.panel('options').onCollapse.call(panels.east); 
			}); 
			if (!panels.expandEast) { 
				panels.expandEast = createExpandPanel('east'); 
				panels.expandEast.panel('panel').click(function(){ 
					panels.east.panel('open').panel('resize', {left:cc.width()}); 
					panels.east.panel('panel').animate({ 
						left: cc.width() - panels.east.panel('options').width 
					}); 
					return false; 
				}); 
			} 
		} else if (region == 'west'){ 
			if (panels.west.panel('options').onBeforeCollapse.call(panels.west) == false) return; 
			 
			panels.center.panel('resize', { 
				width: panels.center.panel('options').width + panels.west.panel('options').width - 28, 
				left: 28 
			}); 
			panels.west.panel('panel').animate({left:-panels.west.panel('options').width}, function(){ 
				panels.west.panel('close'); 
				panels.expandWest.panel('open').panel('resize', { 
					top: panels.west.panel('options').top, 
					left: 0, 
					width: 28, 
					height: panels.west.panel('options').height 
				}); 
				panels.west.panel('options').onCollapse.call(panels.west); 
			}); 
			if (!panels.expandWest) { 
				panels.expandWest = createExpandPanel('west'); 
				panels.expandWest.panel('panel').click(function(){ 
					panels.west.panel('open').panel('resize', {left: -panels.west.panel('options').width}); 
					panels.west.panel('panel').animate({ 
						left: 0 
					}); 
					return false; 
				}); 
			} 
		} else if (region == 'north'){ 
			if (panels.north.panel('options').onBeforeCollapse.call(panels.north) == false) return; 
			 
			var hh = cc.height() - 28; 
			if (isVisible(panels.expandSouth)){ 
				hh -= panels.expandSouth.panel('options').height; 
			} else if (isVisible(panels.south)){ 
				hh -= panels.south.panel('options').height; 
			} 
			panels.center.panel('resize', {top:28, height:hh}); 
			panels.east.panel('resize', {top:28, height:hh}); 
			panels.west.panel('resize', {top:28, height:hh}); 
			if (isVisible(panels.expandEast)) panels.expandEast.panel('resize', {top:28, height:hh}); 
			if (isVisible(panels.expandWest)) panels.expandWest.panel('resize', {top:28, height:hh}); 
			 
			panels.north.panel('panel').animate({top:-panels.north.panel('options').height}, function(){ 
				panels.north.panel('close'); 
				panels.expandNorth.panel('open').panel('resize', { 
					top: 0, 
					left: 0, 
					width: cc.width(), 
					height: 28 
				}); 
				panels.north.panel('options').onCollapse.call(panels.north); 
			}); 
			if (!panels.expandNorth) { 
				panels.expandNorth = createExpandPanel('north'); 
				panels.expandNorth.panel('panel').click(function(){ 
					panels.north.panel('open').panel('resize', {top:-panels.north.panel('options').height}); 
					panels.north.panel('panel').animate({top:0}); 
					return false; 
				}); 
			} 
		} else if (region == 'south'){ 
			if (panels.south.panel('options').onBeforeCollapse.call(panels.south) == false) return; 
			 
			var hh = cc.height() - 28; 
			if (isVisible(panels.expandNorth)){ 
				hh -= panels.expandNorth.panel('options').height; 
			} else if (isVisible(panels.north)){ 
				hh -= panels.north.panel('options').height; 
			} 
			panels.center.panel('resize', {height:hh}); 
			panels.east.panel('resize', {height:hh}); 
			panels.west.panel('resize', {height:hh}); 
			if (isVisible(panels.expandEast)) panels.expandEast.panel('resize', {height:hh}); 
			if (isVisible(panels.expandWest)) panels.expandWest.panel('resize', {height:hh}); 
			 
			panels.south.panel('panel').animate({top:cc.height()}, function(){ 
				panels.south.panel('close'); 
				panels.expandSouth.panel('open').panel('resize', { 
					top: cc.height() - 28, 
					left: 0, 
					width: cc.width(), 
					height: 28 
				}); 
				panels.south.panel('options').onCollapse.call(panels.south); 
			}); 
			if (!panels.expandSouth) { 
				panels.expandSouth = createExpandPanel('south'); 
				panels.expandSouth.panel('panel').click(function(){ 
					panels.south.panel('open').panel('resize', {top:cc.height()}); 
					panels.south.panel('panel').animate({top:cc.height()-panels.south.panel('options').height}); 
					return false; 
				}); 
			} 
		} 
	} 
	 
	function expandPanel(container, region){ 
		var panels = $.data(container, 'layout').panels; 
		var cc = $(container); 
		if (region == 'east' && panels.expandEast){ 
			if (panels.east.panel('options').onBeforeExpand.call(panels.east) == false) return; 
			 
			panels.expandEast.panel('close'); 
			panels.east.panel('panel').stop(true,true); 
			panels.east.panel('open').panel('resize', {left:cc.width()}); 
			panels.east.panel('panel').animate({ 
				left: cc.width() - panels.east.panel('options').width 
			}, function(){ 
				setSize(container); 
				panels.east.panel('options').onExpand.call(panels.east); 
			}); 
		} else if (region == 'west' && panels.expandWest){ 
			if (panels.west.panel('options').onBeforeExpand.call(panels.west) == false) return; 
			 
			panels.expandWest.panel('close'); 
			panels.west.panel('panel').stop(true,true); 
			panels.west.panel('open').panel('resize', {left: -panels.west.panel('options').width}); 
			panels.west.panel('panel').animate({ 
				left: 0 
			}, function(){ 
				setSize(container); 
				panels.west.panel('options').onExpand.call(panels.west); 
			}); 
		} else if (region == 'north' && panels.expandNorth){ 
			if (panels.north.panel('options').onBeforeExpand.call(panels.north) == false) return; 
			 
			panels.expandNorth.panel('close'); 
			panels.north.panel('panel').stop(true,true); 
			panels.north.panel('open').panel('resize', {top:-panels.north.panel('options').height}); 
			panels.north.panel('panel').animate({top:0}, function(){ 
				setSize(container); 
				panels.north.panel('options').onExpand.call(panels.north); 
			}); 
		} else if (region == 'south' && panels.expandSouth){ 
			if (panels.south.panel('options').onBeforeExpand.call(panels.south) == false) return; 
			 
			panels.expandSouth.panel('close'); 
			panels.south.panel('panel').stop(true,true); 
			panels.south.panel('open').panel('resize', {top:cc.height()}); 
			panels.south.panel('panel').animate({top:cc.height()-panels.south.panel('options').height}, function(){ 
				setSize(container); 
				panels.south.panel('options').onExpand.call(panels.south); 
			}); 
		} 
	} 
	 
	function bindEvents(container){ 
		var panels = $.data(container, 'layout').panels; 
		var cc = $(container); 
		 
		// bind east panel events 
		if (panels.east.length){ 
			panels.east.panel('panel').bind('mouseover','east',collapsePanel); 
		} 
		 
		// bind west panel events 
		if (panels.west.length){ 
			panels.west.panel('panel').bind('mouseover','west',collapsePanel); 
		} 
		 
		// bind north panel events 
		if (panels.north.length){ 
			panels.north.panel('panel').bind('mouseover','north',collapsePanel); 
		} 
		 
		// bind south panel events 
		if (panels.south.length){ 
			panels.south.panel('panel').bind('mouseover','south',collapsePanel); 
		} 
		 
		panels.center.panel('panel').bind('mouseover','center',collapsePanel); 
		 
		function collapsePanel(e){ 
			if (resizing == true) return; 
			 
			if (e.data != 'east' && isVisible(panels.east) && isVisible(panels.expandEast)){ 
				panels.east.panel('panel').animate({left:cc.width()}, function(){ 
					panels.east.panel('close'); 
				}); 
			} 
			if (e.data != 'west' && isVisible(panels.west) && isVisible(panels.expandWest)){ 
				panels.west.panel('panel').animate({left:-panels.west.panel('options').width}, function(){ 
					panels.west.panel('close'); 
				}); 
			} 
			if (e.data != 'north' && isVisible(panels.north) && isVisible(panels.expandNorth)){ 
				panels.north.panel('panel').animate({top:-panels.north.panel('options').height}, function(){ 
					panels.north.panel('close'); 
				}); 
			} 
			if (e.data != 'south' && isVisible(panels.south) && isVisible(panels.expandSouth)){ 
				panels.south.panel('panel').animate({top:cc.height()}, function(){ 
					panels.south.panel('close'); 
				}); 
			} 
			return false; 
		} 
		 
	} 
	 
	function isVisible(pp){ 
		if (!pp) return false; 
		if (pp.length){ 
			return pp.panel('panel').is(':visible'); 
		} else { 
			return false; 
		} 
	} 
	 
	$.fn.layout = function(options, param){ 
		if (typeof options == 'string'){ 
			switch(options){ 
			case 'panel': 
				return $.data(this[0], 'layout').panels[param]; 
			case 'collapse': 
				return this.each(function(){ 
					collapsePanel(this, param); 
				}); 
			case 'expand': 
				return this.each(function(){ 
					expandPanel(this, param); 
				}); 
			} 
		} 
		 
		return this.each(function(){ 
			var state = $.data(this, 'layout'); 
			if (!state){ 
				var opts = $.extend({}, { 
					fit: $(this).attr('fit') == 'true' 
				}); 
//				var t1=new Date().getTime(); 
				$.data(this, 'layout', { 
					options: opts, 
					panels: init(this) 
				}); 
				bindEvents(this); 
//				var t2=new Date().getTime(); 
//				alert(t2-t1) 
			} 
			setSize(this); 
		}); 
	}; 
})(jQuery); 
/** 
 * menu - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 */ 
(function($){ 
	 
	/** 
	 * initialize the target menu, the function can be invoked only once 
	 */ 
	function init(target){ 
		$(target).appendTo('body'); 
		$(target).addClass('menu-top');	// the top menu 
		 
		var menus = []; 
		adjust($(target)); 
		 
		for(var i=0; i<menus.length; i++){ 
			var menu = menus[i]; 
			wrapMenu(menu); 
			menu.find('>div.menu-item').each(function(){ 
				bindMenuItemEvent($(this)); 
			}); 
			 
			menu.find('div.menu-item').click(function(){ 
				// only the sub menu clicked can hide all menus 
				if (!this.submenu){ 
					hideAll(target); 
				} 
				return false; 
			}); 
		} 
		 
		 
		function adjust(menu){ 
			menus.push(menu); 
			menu.find('>div').each(function(){ 
				var item = $(this); 
				var submenu = item.find('>div'); 
				if (submenu.length){ 
					submenu.insertAfter(target); 
					item[0].submenu = submenu; 
					adjust(submenu); 
				} 
			}); 
		} 
		 
		/** 
		 * bind menu item event 
		 */ 
		function bindMenuItemEvent(item){ 
			item.hover( 
				function(){ 
					// hide other menu 
					item.siblings().each(function(){ 
						if (this.submenu){ 
							hideMenu(this.submenu); 
						} 
						$(this).removeClass('menu-active'); 
					}); 
					 
					// show this menu 
					item.addClass('menu-active'); 
					var submenu = item[0].submenu; 
					if (submenu){ 
						var left = item.offset().left + item.outerWidth() - 2; 
						if (left + submenu.outerWidth() > $(window).width()){ 
							left = item.offset().left - submenu.outerWidth() + 2; 
						} 
						showMenu(submenu, { 
							left: left, 
							top:item.offset().top - 3 
						}); 
					} 
				}, 
				function(e){ 
					item.removeClass('menu-active'); 
					var submenu = item[0].submenu; 
					if (submenu){ 
						if (e.pageX>=parseInt(submenu.css('left'))){ 
							item.addClass('menu-active'); 
						} else { 
							hideMenu(submenu); 
						} 
						 
					} else { 
						item.removeClass('menu-active'); 
					} 
					 
				} 
			); 
		} 
		 
		/** 
		 * wrap a menu and set it's status to hidden 
		 * the menu not include sub menus 
		 */ 
		function wrapMenu(menu){ 
			menu.addClass('menu').find('>div').each(function(){ 
				var item = $(this); 
				if (item.hasClass('menu-sep')){ 
					item.html('&nbsp;'); 
				} else { 
					var text = item.addClass('menu-item').html(); 
					item.empty().append($('<div class="menu-text"></div>').html(text)); 
					var icon = item.attr('icon'); 
					if (icon){ 
						$('<div class="menu-icon"></div>').addClass(icon).appendTo(item); 
					} 
					if (item[0].submenu){ 
						$('<div class="menu-rightarrow"></div>').appendTo(item);	// has sub menu 
					} 
					 
					if ($.boxModel == true){ 
						var height = item.height(); 
						item.height(height - (item.outerHeight() - item.height())); 
					} 
				} 
			}); 
			menu.hide(); 
		} 
	} 
	 
	 
	 
	function onDocClick(e){ 
		var target = e.data; 
		hideAll(target); 
		return false; 
	} 
	 
	/** 
	 * hide top menu and it's all sub menus 
	 */ 
	function hideAll(target){ 
		var opts = $.data(target, 'menu').options; 
		hideMenu($(target)); 
		$(document).unbind('.menu'); 
		opts.onHide.call(target); 
		 
//		var state = $.data(target, 'menu'); 
//		if (state){ 
//			hideMenu($(target)); 
//			$(document).unbind('.menu'); 
//			state.options.onHide.call(target); 
//		} 
		return false; 
	} 
	 
	/** 
	 * show the top menu 
	 */ 
	function showTopMenu(target, pos){ 
		var opts = $.data(target, 'menu').options; 
		if (pos){ 
			opts.left = pos.left; 
			opts.top = pos.top; 
		} 
		showMenu($(target), {left:opts.left,top:opts.top}, function(){ 
			$(document).bind('click.menu', target, onDocClick); 
			opts.onShow.call(target); 
		}); 
	} 
	 
	function showMenu(menu, pos, callback){ 
		if (!menu) return; 
		 
		if (pos){ 
			menu.css(pos); 
		} 
		menu.show(1, function(){ 
			if (!menu[0].shadow){ 
				menu[0].shadow = $('<div class="menu-shadow"></div>').insertAfter(menu); 
			} 
			menu[0].shadow.css({ 
				display:'block', 
				zIndex:$.fn.menu.defaults.zIndex++, 
				left:menu.css('left'), 
				top:menu.css('top'), 
				width:menu.outerWidth(), 
				height:menu.outerHeight() 
			}); 
			menu.css('z-index', $.fn.menu.defaults.zIndex++); 
			 
			if (callback){ 
				callback(); 
			} 
		}); 
	} 
	 
	function hideMenu(menu){ 
		if (!menu) return; 
		 
		hideit(menu); 
		menu.find('div.menu-item').each(function(){ 
			if (this.submenu){ 
				hideMenu(this.submenu); 
			} 
			$(this).removeClass('menu-active'); 
		}); 
		 
		function hideit(m){ 
			if (m[0].shadow){ 
				m[0].shadow.hide(); 
			} 
			m.hide(); 
			 
		} 
	} 
	 
	$.fn.menu = function(options, param){ 
		if (typeof options == 'string'){ 
			switch(options){ 
				case 'show': 
					return this.each(function(){ 
						showTopMenu(this, param); 
					}); 
				case 'hide': 
					return this.each(function(){ 
						hideAll(this); 
					}); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'menu'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				state = $.data(this, 'menu', { 
					options: $.extend({}, $.fn.menu.defaults, options) 
				}); 
				init(this); 
			} 
			$(this).css({ 
				left: state.options.left, 
				top: state.options.top 
			}); 
		}); 
	}; 
	 
	$.fn.menu.defaults = { 
		zIndex:110000, 
		left: 0, 
		top: 0, 
		onShow: function(){}, 
		onHide: function(){} 
	}; 
})(jQuery); 
/** 
 * menubutton - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 *   linkbutton 
 *   menu 
 */ 
(function($){ 
	 
	function init(target){ 
		var opts = $.data(target, 'menubutton').options; 
		var btn = $(target); 
		btn.removeClass('m-btn-active m-btn-plain-active'); 
		btn.linkbutton(opts); 
		if (opts.menu){ 
			$(opts.menu).menu({ 
				onShow: function(){ 
					btn.addClass((opts.plain==true) ? 'm-btn-plain-active' : 'm-btn-active'); 
				}, 
				onHide: function(){ 
					btn.removeClass((opts.plain==true) ? 'm-btn-plain-active' : 'm-btn-active'); 
				} 
			}); 
		} 
		btn.unbind('.menubutton'); 
		if (opts.disabled == false && opts.menu){ 
			btn.bind('click.menubutton', function(){ 
				showMenu(); 
				return false; 
			}); 
			var timeout = null; 
			btn.bind('mouseenter.menubutton', function(){ 
				timeout = setTimeout(function(){ 
					showMenu(); 
				}, opts.duration); 
				return false; 
			}).bind('mouseleave.menubutton', function(){ 
				if (timeout){ 
					clearTimeout(timeout); 
				} 
			}); 
		} 
		 
		function showMenu(){ 
			var left = btn.offset().left; 
			if (left + $(opts.menu).outerWidth() + 5 > $(window).width()){ 
				left = $(window).width() - $(opts.menu).outerWidth() - 5; 
			} 
			 
			$('.menu-top').menu('hide'); 
			$(opts.menu).menu('show', { 
				left: left, 
				top: btn.offset().top + btn.outerHeight() 
			}); 
			btn.blur(); 
		} 
	} 
	 
	$.fn.menubutton = function(options){ 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'menubutton'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				$.data(this, 'menubutton', { 
					options: $.extend({}, $.fn.menubutton.defaults, { 
						disabled: $(this).attr('disabled') == 'true', 
						plain: ($(this).attr('plain')=='false' ? false : true), 
						menu: $(this).attr('menu'), 
						duration: (parseInt($(this).attr('duration')) || 100) 
					}, options) 
				}); 
				$(this).removeAttr('disabled'); 
				$(this).append('<span class="m-btn-downarrow">&nbsp;</span>'); 
			} 
			 
			init(this); 
		}); 
	}; 
	 
	$.fn.menubutton.defaults = { 
			disabled: false, 
			plain: true, 
			menu: null, 
			duration: 100 
	}; 
})(jQuery); 
/** 
 * messager - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	draggable 
 * 	resizable 
 * 	linkbutton 
 * 	panel 
 *  window 
 */ 
(function($){ 
	/** 
	 * show window with animate, after sometime close the window 
	 */ 
	function show(win, type, speed, timeout){ 
		if (!win) return; 
		 
		switch(type){ 
		case null: 
			win.show(); 
			break; 
		case 'slide': 
			win.slideDown(speed); 
			break; 
		case 'fade': 
			win.fadeIn(speed); 
			break; 
		case 'show': 
			win.show(speed); 
			break; 
		} 
		 
		var timer = null; 
		if (timeout > 0){ 
			timer = setTimeout(function(){ 
				hide(win, type, speed); 
			}, timeout); 
		} 
		win.hover( 
				function(){ 
					if (timer){ 
						clearTimeout(timer); 
					} 
				}, 
				function(){ 
					if (timeout > 0){ 
						timer = setTimeout(function(){ 
							hide(win, type, speed); 
						}, timeout); 
					} 
				} 
		) 
		 
	} 
	 
	/** 
	 * hide window with animate 
	 */ 
	function hide(win, type, speed){ 
		if (!win) return; 
		 
		switch(type){ 
		case null: 
			win.hide(); 
			break; 
		case 'slide': 
			win.slideUp(speed); 
			break; 
		case 'fade': 
			win.fadeOut(speed); 
			break; 
		case 'show': 
			win.hide(speed); 
			break; 
		} 
		 
		setTimeout(function(){ 
			win.remove(); 
		}, speed); 
	} 
	 
	/** 
	 * create a dialog, when dialog is closed destroy it 
	 */ 
	function createDialog(title, content, buttons){ 
		var win = $('<div class="messager-body"></div>').appendTo('body'); 
		win.append(content); 
		if (buttons){ 
			var tb = $('<div class="messager-button"></div>').appendTo(win); 
			for(var label in buttons){ 
				$('<a></a>').attr('href', 'javascript:void(0)').text(label) 
							.css('margin-left', 10) 
							.bind('click', eval(buttons[label])) 
							.appendTo(tb).linkbutton(); 
			} 
		} 
		win.window({ 
			title: title, 
			width: 300, 
			height: 'auto', 
			modal: true, 
			collapsible: false, 
			minimizable: false, 
			maximizable: false, 
			resizable: false, 
			onClose: function(){ 
				setTimeout(function(){ 
					win.window('destroy'); 
				}, 100); 
			} 
		}); 
		return win; 
	} 
	 
	$.messager = { 
		show: function(options){ 
			var opts = $.extend({ 
				showType: 'slide', 
				showSpeed: 600, 
				width: 250, 
				height: 100, 
				msg: '', 
				title: '', 
				timeout: 4000 
			}, options || {}); 
			 
			var win = $('<div class="messager-body"></div>').html(opts.msg).appendTo('body'); 
			win.window({ 
				title: opts.title, 
				width: opts.width, 
				height: opts.height, 
				collapsible: false, 
				minimizable: false, 
				maximizable: false, 
				shadow: false, 
				draggable: false, 
				resizable: false, 
				closed: true, 
				onBeforeOpen: function(){ 
					show($(this).window('window'), opts.showType, opts.showSpeed, opts.timeout); 
					return false; 
				}, 
				onBeforeClose: function(){ 
					hide(win.window('window'), opts.showType, opts.showSpeed); 
					return false; 
				} 
			}); 
			 
			// set the message window to the right bottom position 
			win.window('window').css({ 
				left: null, 
				top: null, 
				right: 0, 
				bottom: -document.body.scrollTop-document.documentElement.scrollTop 
			}); 
			win.window('open'); 
		}, 
		 
		alert: function(title, msg, icon, fn) { 
			var content = '<div>' + msg + '</div>'; 
			switch(icon) { 
				case 'error': 
					content = '<div class="messager-icon messager-error"></div>' + content; 
					break; 
				case 'info': 
					content = '<div class="messager-icon messager-info"></div>' + content; 
					break; 
				case 'question': 
					content = '<div class="messager-icon messager-question"></div>' + content; 
					break; 
				case 'warning': 
					content = '<div class="messager-icon messager-warning"></div>' + content; 
					break; 
			} 
			content += '<div style="clear:both;"/>'; 
			 
			var buttons = {}; 
			buttons[$.messager.defaults.ok] = function(){ 
				win.dialog({closed:true}); 
				if (fn){ 
					fn(); 
					return false; 
				} 
			}; 
			buttons[$.messager.defaults.ok] = function(){ 
				win.window('close'); 
				if (fn){ 
					fn(); 
					return false; 
				} 
			}; 
			var win = createDialog(title,content,buttons); 
		}, 
		 
		confirm: function(title, msg, fn) { 
			var content = '<div class="messager-icon messager-question"></div>' 
					+ '<div>' + msg + '</div>' 
					+ '<div style="clear:both;"/>'; 
			var buttons = {}; 
			buttons[$.messager.defaults.ok] = function(){ 
				win.window('close'); 
				if (fn){ 
					fn(true); 
					return false; 
				} 
			}; 
			buttons[$.messager.defaults.cancel] = function(){ 
				win.window('close'); 
				if (fn){ 
					fn(false); 
					return false; 
				} 
			}; 
			var win = createDialog(title,content,buttons); 
		}, 
		 
		prompt: function(title, msg, fn) { 
			var content = '<div class="messager-icon messager-question"></div>' 
						+ '<div>' + msg + '</div>' 
						+ '<br/>' 
						+ '<input class="messager-input" type="text"/>' 
						+ '<div style="clear:both;"/>'; 
			var buttons = {}; 
			buttons[$.messager.defaults.ok] = function(){ 
				win.window('close'); 
				if (fn){ 
					fn($('.messager-input', win).val()); 
					return false; 
				} 
			}; 
			buttons[$.messager.defaults.cancel] = function(){ 
				win.window('close'); 
				if (fn){ 
					fn(); 
					return false; 
				} 
			}; 
			var win = createDialog(title,content,buttons); 
		} 
	}; 
	 
	$.messager.defaults = { 
		ok: 'Ok', 
		cancel: 'Cancel' 
	}; 
	 
})(jQuery); 
/** 
 * numberbox - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	 validatebox 
 *  
 */ 
(function($){ 
	function fixValue(target){ 
		var opts = $.data(target, 'numberbox').options; 
		var val = parseFloat($(target).val()).toFixed(opts.precision); 
		if (isNaN(val)){ 
			$(target).val(''); 
			return; 
		} 
		 
		if (opts.min != null && opts.min != undefined && val < opts.min){ 
			$(target).val(opts.min.toFixed(opts.precision)); 
		} else if (opts.max != null && opts.max != undefined && val > opts.max){ 
			$(target).val(opts.max.toFixed(opts.precision)); 
		} else { 
			$(target).val(val); 
		} 
	} 
	 
	function bindEvents(target){ 
		$(target).unbind('.numberbox'); 
		$(target).bind('keypress.numberbox', function(e){ 
			if (e.which == 45){	//- 
				return true; 
			} if (e.which == 46) {	//. 
				return true; 
			} 
			else if ((e.which >= 48 && e.which <= 57 && e.ctrlKey == false && e.shiftKey == false) || e.which == 0 || e.which == 8) { 
				return true; 
			} else if (e.ctrlKey == true && (e.which == 99 || e.which == 118)) { 
				return true; 
			} else { 
				return false; 
			} 
		}).bind('paste.numberbox', function(){ 
			if (window.clipboardData) { 
				var s = clipboardData.getData('text'); 
				if (! /\D/.test(s)) { 
					return true; 
				} else { 
					return false; 
				} 
			} else { 
				return false; 
			} 
		}).bind('dragenter.numberbox', function(){ 
			return false; 
		}).bind('blur.numberbox', function(){ 
			fixValue(target); 
		}); 
	} 
	 
	/** 
	 * do the validate if necessary. 
	 */ 
	function validate(target){ 
		if ($.fn.validatebox){ 
			var opts = $.data(target, 'numberbox').options; 
			$(target).validatebox(opts); 
		} 
	} 
	 
	function setDisabled(target, disabled){ 
		var opts = $.data(target, 'numberbox').options; 
		if (disabled){ 
			opts.disabled = true; 
			$(target).attr('disabled', true); 
		} else { 
			opts.disabled = false; 
			$(target).removeAttr('disabled'); 
		} 
	} 
	 
	$.fn.numberbox = function(options){ 
		if (typeof options == 'string'){ 
			switch(options){ 
			case 'disable': 
				return this.each(function(){ 
					setDisabled(this, true); 
				}); 
			case 'enable': 
				return this.each(function(){ 
					setDisabled(this, false); 
				}); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'numberbox'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				var t = $(this); 
				state = $.data(this, 'numberbox', { 
					options: $.extend({}, $.fn.numberbox.defaults, { 
						disabled: (t.attr('disabled') ? true : undefined), 
						min: (t.attr('min')=='0' ? 0 : parseFloat(t.attr('min')) || undefined), 
						max: (t.attr('max')=='0' ? 0 : parseFloat(t.attr('max')) || undefined), 
						precision: (parseInt(t.attr('precision')) || undefined) 
					}, options) 
				}); 
				t.removeAttr('disabled'); 
				$(this).css({imeMode:"disabled"}); 
			} 
			 
			setDisabled(this, state.options.disabled); 
			bindEvents(this); 
			validate(this); 
		}); 
	}; 
	 
	$.fn.numberbox.defaults = { 
		disabled: false, 
		min: null, 
		max: null, 
		precision: 0 
	}; 
})(jQuery);/** 
 * numberspinner - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	 spinner 
 * 	 numberbox 
 */ 
(function($){ 
	function create(target){ 
		var opts = $.data(target, 'numberspinner').options; 
		$(target).spinner(opts).numberbox(opts); 
	} 
	 
	function doSpin(target, down){ 
		var opts = $.data(target, 'numberspinner').options; 
		 
		var v = parseFloat($(target).val() || opts.value) || 0; 
		if (down == true){ 
			v -= opts.increment; 
		} else { 
			v += opts.increment; 
		} 
		$(target).val(v).numberbox('fix'); 
	} 
	 
	$.fn.numberspinner = function(options, param){ 
		if (typeof options == 'string'){ 
			var method = $.fn.numberspinner.methods[options]; 
			if (method){ 
				return method(this, param); 
			} else { 
				return this.spinner(options, param); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'numberspinner'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				$.data(this, 'numberspinner', { 
					options: $.extend({}, $.fn.numberspinner.defaults, $.fn.numberspinner.parseOptions(this), options) 
				}); 
			} 
			create(this); 
		}); 
	}; 
	 
	$.fn.numberspinner.methods = { 
		options: function(jq){ 
			var opts = $.data(jq[0], 'numberspinner').options; 
			return $.extend(opts, { 
				value: jq.val() 
			}); 
		}, 
		setValue: function(jq, value){ 
			return jq.each(function(){ 
				$(this).val(value).numberbox('fix'); 
			}); 
		} 
	}; 
	 
	$.fn.numberspinner.parseOptions = function(target){ 
		return $.extend({}, $.fn.spinner.parseOptions(target), $.fn.numberbox.parseOptions(target), { 
		}); 
	}; 
	 
	$.fn.numberspinner.defaults = $.extend({}, $.fn.spinner.defaults, $.fn.numberbox.defaults, { 
		spin: function(down){doSpin(this, down);} 
	}); 
})(jQuery);/** 
 * numberTextBox - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2009 stworthy [ stworthy@gmail.com ]  
 *  
 * usage: <input class="number-textbox" min="1" max="100" precision="2"> 
 * The plugin will make the input can only input number chars 
 * Options: 
 * 	 min: The minimum allowed value 
 *   max: The maximum allowed value 
 *   precision: The maximum precision to display after the decimal separator 
 */ 
(function($){ 
	$.fn.numberTextBox = function(){ 
		function fixValue(target){ 
			var min = parseFloat($(target).attr('min')); 
			var max = parseFloat($(target).attr('max')); 
			var precision = $(target).attr("precision") || 0; 
			var val = parseFloat($(target).val()).toFixed(precision); 
			if (isNaN(val)) { 
				$(target).val(''); 
				return; 
			} 
 
			if (min && val < min) { 
				$(target).val(min.toFixed(precision)); 
			} else if (max && val > max) { 
				$(target).val(max.toFixed(precision)); 
			} else { 
				$(target).val(val); 
			} 
		} 
		 
		return this.each(function(){ 
			$(this).css({imeMode:"disabled"}); 
			$(this).keypress(function(e){ 
				if (e.which == 46) { 
					return true; 
				} 
				else if ((e.which >= 48 && e.which <= 57 && e.ctrlKey == false && e.shiftKey == false) || e.which == 0 || e.which == 8) { 
					return true; 
				} else if (e.ctrlKey == true && (e.which == 99 || e.which == 118)) { 
					return true; 
				} else { 
					return false; 
				} 
			}).bind('paste', function(){ 
				if (window.clipboardData) { 
					var s = clipboardData.getData('text'); 
					if (! /\D/.test(s)) { 
						return true; 
					} else { 
						return false; 
					} 
				} else { 
					return false; 
				} 
			}).bind('dragenter', function(){ 
				return false; 
			}).blur(function(){ 
				fixValue(this); 
			}); 
		}); 
	}; 
	 
	$(function(){ 
		$('.number-textbox').numberTextBox(); 
	}); 
})(jQuery);
/** 
 * parser - jQuery EasyUI 
 *  
 * Licensed under the GPL terms 
 * To use it on other terms please contact us 
 * 
 * Copyright(c) 2009-2012 stworthy [ stworthy@gmail.com ]  
 *  
 */ 
 
(function($){ 
	$.parser = { 
		auto: true, 
		onComplete: function(context){}, 
		plugins:['linkbutton','menu','menubutton','splitbutton','progressbar', 
				 'tree','combobox','combotree','numberbox','validatebox','searchbox', 
				 'numberspinner','timespinner','calendar','datebox','datetimebox','slider', 
				 'layout','panel','datagrid','propertygrid','treegrid','tabs','accordion','window','dialog' 
		], 
		parse: function(context){ 
			var aa = []; 
			for(var i=0; i<$.parser.plugins.length; i++){ 
				var name = $.parser.plugins[i]; 
				var r = $('.easyui-' + name, context); 
				if (r.length){ 
					if (r[name]){ 
						r[name](); 
					} else { 
						aa.push({name:name,jq:r}); 
					} 
				} 
			} 
			if (aa.length && window.easyloader){ 
				var names = []; 
				for(var i=0; i<aa.length; i++){ 
					names.push(aa[i].name); 
				} 
				easyloader.load(names, function(){ 
					for(var i=0; i<aa.length; i++){ 
						var name = aa[i].name; 
						var jq = aa[i].jq; 
						jq[name](); 
					} 
					$.parser.onComplete.call($.parser, context); 
				}); 
			} else { 
				$.parser.onComplete.call($.parser, context); 
			} 
		} 
	}; 
	$(function(){ 
		if (!window.easyloader && $.parser.auto){ 
			$.parser.parse(); 
		} 
	}); 
})(jQuery);/** 
 * progressbar - jQuery EasyUI 
 *  
 * Licensed under the GPL terms 
 * To use it on other terms please contact us 
 * 
 * Copyright(c) 2009-2012 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	 none 
 *  
 */ 
(function($){ 
	function init(target){ 
		$(target).addClass('progressbar'); 
		$(target).html('<div class="progressbar-text"></div><div class="progressbar-value">&nbsp;</div>'); 
		return $(target); 
	} 
	 
	function setSize(target,width){ 
		var opts = $.data(target, 'progressbar').options; 
		var bar = $.data(target, 'progressbar').bar; 
		if (width) opts.width = width; 
		bar._outerWidth(opts.width); 
		bar.find('div.progressbar-text').width(bar.width()); 
	} 
	 
	$.fn.progressbar = function(options, param){ 
		if (typeof options == 'string'){ 
			var method = $.fn.progressbar.methods[options]; 
			if (method){ 
				return method(this, param); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'progressbar'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				state = $.data(this, 'progressbar', { 
					options: $.extend({}, $.fn.progressbar.defaults, $.fn.progressbar.parseOptions(this), options), 
					bar: init(this) 
				}); 
			} 
			$(this).progressbar('setValue', state.options.value); 
			setSize(this); 
		}); 
	}; 
	 
	$.fn._outerWidth = function(width){ 
		return this.each(function(){ 
			if (!$.boxModel && $.browser.msie){ 
				$(this).width(width); 
			} else { 
				$(this).width(width - ($(this).outerWidth() - $(this).width())); 
			} 
		}); 
	}; 
	 
	$.fn.progressbar.methods = { 
		options: function(jq){ 
			return $.data(jq[0], 'progressbar').options; 
		}, 
		resize: function(jq, width){ 
			return jq.each(function(){ 
				setSize(this, width); 
			}); 
		}, 
		getValue: function(jq){ 
			return $.data(jq[0], 'progressbar').options.value; 
		}, 
		setValue: function(jq, value){ 
			if (value < 0) value = 0; 
			if (value > 100) value = 100; 
			return jq.each(function(){ 
				var opts = $.data(this, 'progressbar').options; 
				var text = opts.text.replace(/{value}/, value); 
				var oldValue = opts.value; 
				opts.value = value; 
				$(this).find('div.progressbar-value').width(value+'%'); 
				$(this).find('div.progressbar-text').html(text); 
				if (oldValue != value){ 
					opts.onChange.call(this, value, oldValue); 
				} 
			}); 
		} 
	}; 
	 
	$.fn.progressbar.parseOptions = function(target){ 
		var t = $(target); 
		return { 
			width: (parseInt(target.style.width) || undefined), 
			value: (t.attr('value') ? parseInt(t.attr('value')) : undefined), 
			text: t.attr('text') 
		}; 
	}; 
	 
	$.fn.progressbar.defaults = { 
		width: 'auto', 
		value: 0,	// percentage value 
		text: '{value}%', 
		onChange:function(newValue,oldValue){} 
	}; 
})(jQuery);/** 
 * propertygrid - jQuery EasyUI 
 *  
 * Licensed under the GPL terms 
 * To use it on other terms please contact us 
 * 
 * Copyright(c) 2009-2012 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	 datagrid 
 *  
 */ 
(function($){ 
	function buildGrid(target){ 
		var opts = $.data(target, 'propertygrid').options; 
		$(target).datagrid($.extend({}, opts, { 
			view:(opts.showGroup ? groupview : undefined), 
			onClickRow:function(index, row){ 
				if (opts.editIndex != index){ 
					var col = $(this).datagrid('getColumnOption', "value"); 
					col.editor = row.editor; 
					leaveRow(opts.editIndex); 
					$(this).datagrid('beginEdit', index); 
					$(this).datagrid('getEditors', index)[0].target.focus(); 
					opts.editIndex = index; 
				} 
				opts.onClickRow.call(target, index, row); 
			} 
		})); 
		$(target).datagrid('getPanel').panel('panel').addClass('propertygrid'); 
		$(target).datagrid('getPanel').find('div.datagrid-body').unbind('.propertygrid').bind('mousedown.propertygrid', function(e){ 
			e.stopPropagation(); 
		}); 
		$(document).unbind('.propertygrid').bind('mousedown.propertygrid', function(){ 
			leaveRow(opts.editIndex); 
			opts.editIndex = undefined; 
		}); 
		 
		function leaveRow(index){ 
			if (index == undefined) return; 
			var t = $(target); 
			if (t.datagrid('validateRow', index)){ 
				t.datagrid('endEdit', index); 
			} else { 
				t.datagrid('cancelEdit', index); 
			} 
		} 
	} 
	 
	$.fn.propertygrid = function(options, param){ 
		if (typeof options == 'string'){ 
			var method = $.fn.propertygrid.methods[options]; 
			if (method){ 
				return method(this, param); 
			} else { 
				return this.datagrid(options, param); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'propertygrid'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				$.data(this, 'propertygrid', { 
					options: $.extend({}, $.fn.propertygrid.defaults, $.fn.propertygrid.parseOptions(this), options) 
				}); 
			} 
			buildGrid(this); 
		}); 
	} 
	 
	$.fn.propertygrid.methods = { 
	}; 
	 
	$.fn.propertygrid.parseOptions = function(target){ 
		var t = $(target); 
		return $.extend({}, $.fn.datagrid.parseOptions(target), { 
			showGroup:(t.attr('showGroup') ? t.attr('showGroup')=='true' : undefined) 
		}); 
	}; 
	 
	// the group view definition 
	var groupview = $.extend({}, $.fn.datagrid.defaults.view, { 
		render: function(target, container, frozen){ 
			var opts = $.data(target, 'datagrid').options; 
			var rows = $.data(target, 'datagrid').data.rows; 
			var fields = $(target).datagrid('getColumnFields', frozen); 
			 
			var table = []; 
			var index = 0; 
			var groups = this.groups; 
			for(var i=0; i<groups.length; i++){ 
				var group = groups[i]; 
				 
				table.push('<div class="datagrid-group" group-index=' + i + ' style="">'); 
				table.push('<table cellspacing="0" cellpadding="0" border="0" style="height:100%"><tbody>'); 
				table.push('<tr>'); 
				table.push('<td style="border:0;">'); 
				if (!frozen){ 
					table.push('<span style="color:#666;font-weight:bold;">'); 
					table.push(opts.groupFormatter.call(target, group.fvalue, group.rows)); 
					table.push('</span>'); 
				} 
				table.push('</td>'); 
				table.push('</tr>'); 
				table.push('</tbody></table>'); 
				table.push('</div>'); 
				 
				table.push('<table cellspacing="0" cellpadding="0" border="0"><tbody>'); 
				for(var j=0; j<group.rows.length; j++) { 
					// get the class and style attributes for this row 
					var cls = (index % 2 && opts.striped) ? 'class="datagrid-row-alt"' : ''; 
					var styleValue = opts.rowStyler ? opts.rowStyler.call(target, index, group.rows[j]) : ''; 
					var style = styleValue ? 'style="' + styleValue + '"' : ''; 
					 
					table.push('<tr datagrid-row-index="' + index + '" ' + cls + ' ' + style + '>'); 
					table.push(this.renderRow.call(this, target, fields, frozen, index, group.rows[j])); 
					table.push('</tr>'); 
					index++; 
				} 
				table.push('</tbody></table>'); 
			} 
			 
			$(container).html(table.join('')); 
		}, 
		 
		onAfterRender: function(target){ 
			var opts = $.data(target, 'datagrid').options; 
			var dc = $.data(target, 'datagrid').dc; 
			var view = dc.view; 
			var view1 = dc.view1; 
			var view2 = dc.view2; 
			 
			$.fn.datagrid.defaults.view.onAfterRender.call(this, target); 
			 
			if (opts.rownumbers || opts.frozenColumns.length){ 
				var group = view1.find('div.datagrid-group'); 
			} else { 
				var group = view2.find('div.datagrid-group'); 
			} 
			$('<td style="border:0"><div class="datagrid-row-expander datagrid-row-collapse" style="width:25px;height:16px;cursor:pointer"></div></td>').insertBefore(group.find('td')); 
			 
			view.find('div.datagrid-group').each(function(){ 
				var groupIndex = $(this).attr('group-index'); 
				$(this).find('div.datagrid-row-expander').bind('click', {groupIndex:groupIndex}, function(e){ 
					if ($(this).hasClass('datagrid-row-collapse')){ 
						$(target).datagrid('collapseGroup', e.data.groupIndex); 
					} else { 
						$(target).datagrid('expandGroup', e.data.groupIndex); 
					} 
				}); 
			}); 
		}, 
		 
		onBeforeRender: function(target, rows){ 
			var opts = $.data(target, 'datagrid').options; 
			var groups = []; 
			for(var i=0; i<rows.length; i++){ 
				var row = rows[i]; 
				var group = getGroup(row[opts.groupField]); 
				if (!group){ 
					group = { 
						fvalue: row[opts.groupField], 
						rows: [row], 
						startRow: i 
					}; 
					groups.push(group); 
				} else { 
					group.rows.push(row); 
				} 
			} 
			 
			function getGroup(fvalue){ 
				for(var i=0; i<groups.length; i++){ 
					var group = groups[i]; 
					if (group.fvalue == fvalue){ 
						return group; 
					} 
				} 
				return null; 
			} 
			 
			this.groups = groups; 
			 
			var newRows = []; 
			for(var i=0; i<groups.length; i++){ 
				var group = groups[i]; 
				for(var j=0; j<group.rows.length; j++){ 
					newRows.push(group.rows[j]); 
				} 
			} 
			$.data(target, 'datagrid').data.rows = newRows; 
		} 
	}); 
 
	$.extend($.fn.datagrid.methods, { 
	    expandGroup:function(jq, groupIndex){ 
	        return jq.each(function(){ 
	            var view = $.data(this, 'datagrid').dc.view; 
	            if (groupIndex!=undefined){ 
	                var group = view.find('div.datagrid-group[group-index="'+groupIndex+'"]'); 
	            } else { 
	                var group = view.find('div.datagrid-group'); 
	            } 
	            var expander = group.find('div.datagrid-row-expander'); 
	            if (expander.hasClass('datagrid-row-expand')){ 
	                expander.removeClass('datagrid-row-expand').addClass('datagrid-row-collapse'); 
	                group.next('table').show(); 
	            } 
	            $(this).datagrid('fixRowHeight'); 
	        }); 
	    }, 
	    collapseGroup:function(jq, groupIndex){ 
	        return jq.each(function(){ 
	            var view = $.data(this, 'datagrid').dc.view; 
	            if (groupIndex!=undefined){ 
	                var group = view.find('div.datagrid-group[group-index="'+groupIndex+'"]'); 
	            } else { 
	                var group = view.find('div.datagrid-group'); 
	            } 
	            var expander = group.find('div.datagrid-row-expander'); 
	            if (expander.hasClass('datagrid-row-collapse')){ 
	                expander.removeClass('datagrid-row-collapse').addClass('datagrid-row-expand'); 
	                group.next('table').hide(); 
	            } 
	            $(this).datagrid('fixRowHeight'); 
	        }); 
	    } 
	}); 
	// end of group view definition 
	 
	$.fn.propertygrid.defaults = $.extend({}, $.fn.datagrid.defaults, { 
		singleSelect:true, 
		remoteSort:false, 
		fitColumns:true, 
		loadMsg:'', 
		frozenColumns:[[ 
		    {field:'f',width:16,resizable:false} 
		]], 
		columns:[[ 
		    {field:'name',title:'Name',width:100,sortable:true}, 
		    {field:'value',title:'Value',width:100,resizable:false} 
		]], 
		 
		showGroup:false, 
		groupField:'group', 
		groupFormatter:function(fvalue){return fvalue} 
	}); 
})(jQuery);/** 
 * searchbox - jQuery EasyUI 
 *  
 * Licensed under the GPL terms 
 * To use it on other terms please contact us 
 * 
 * Copyright(c) 2009-2012 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	menubutton 
 *  
 */ 
(function($){ 
	function init(target){ 
		$(target).hide(); 
		var span = $('<span class="searchbox"></span>').insertAfter(target); 
		var input = $('<input type="text" class="searchbox-text">').appendTo(span); 
		$('<span><span class="searchbox-button"></span></span>').appendTo(span); 
		 
		var name = $(target).attr('name'); 
		if (name){ 
			input.attr('name', name); 
			$(target).removeAttr('name').attr('searchboxName', name); 
		} 
		 
		return span; 
	} 
	 
	function setSize(target, width){ 
		var opts = $.data(target, 'searchbox').options; 
		var sb = $.data(target, 'searchbox').searchbox; 
		if (width) opts.width = width; 
		sb.appendTo('body'); 
		 
		if (isNaN(opts.width)){ 
			opts.width = sb.outerWidth(); 
		} 
		sb._outerWidth(opts.width); 
		sb.find('input.searchbox-text')._outerWidth(sb.width() - sb.find('a.searchbox-menu').outerWidth() - sb.find('span.searchbox-button').outerWidth()); 
		 
		sb.insertAfter(target); 
	} 
	 
	function buildMenu(target){ 
		var state = $.data(target, 'searchbox'); 
		var opts = state.options; 
		 
		if (opts.menu){ 
			state.menu = $(opts.menu).menu({ 
				onClick:function(item){ 
					attachMenu(item); 
				} 
			}); 
			var selected = state.menu.children('div.menu-item:first[selected]'); 
			if (!selected.length){ 
				selected = state.menu.children('div.menu-item:first'); 
			} 
			selected.triggerHandler('click'); 
			 
//			var item = state.menu.menu('getItem', state.menu.children('div.menu-item')[0]); 
//			state.menu.children('div.menu-item').triggerHandler('click'); 
		} else { 
			state.searchbox.find('a.searchbox-menu').remove(); 
			state.menu = null; 
		} 
		 
		function attachMenu(item){ 
			state.searchbox.find('a.searchbox-menu').remove(); 
			var mb = $('<a class="searchbox-menu" href="javascript:void(0)"></a>').html(item.text); 
			mb.prependTo(state.searchbox).menubutton({ 
				menu:state.menu, 
				iconCls:item.iconCls 
			}); 
			state.searchbox.find('input.searchbox-text').attr('name', $(item.target).attr('name') || item.text); 
			setSize(target); 
		} 
	} 
	 
	function bindEvents(target){ 
		var state = $.data(target, 'searchbox'); 
		var opts = state.options; 
		var input = state.searchbox.find('input.searchbox-text'); 
		var button = state.searchbox.find('.searchbox-button'); 
		input.unbind('.searchbox').bind('blur.searchbox', function(e){ 
			opts.value = $(this).val(); 
			if (opts.value == ''){ 
				$(this).val(opts.prompt); 
				$(this).addClass('searchbox-prompt'); 
			} else { 
				$(this).removeClass('searchbox-prompt'); 
			} 
		}).bind('focus.searchbox', function(e){ 
			if ($(this).val() != opts.value){ 
				$(this).val(opts.value); 
			} 
			$(this).removeClass('searchbox-prompt'); 
		}).bind('keydown.searchbox', function(e){ 
			if (e.keyCode == 13){ 
				e.preventDefault(); 
				var name = $.fn.prop ? input.prop('name') : input.attr('name'); 
				opts.value = $(this).val(); 
				opts.searcher.call(target, opts.value, name); 
				return false; 
			} 
		}); 
		 
		button.unbind('.searchbox').bind('click.searchbox', function(){ 
			var name = $.fn.prop ? input.prop('name') : input.attr('name'); 
			opts.searcher.call(target, opts.value, name); 
		}).bind('mouseenter.searchbox', function(){ 
			$(this).addClass('searchbox-button-hover'); 
		}).bind('mouseleave.searchbox', function(){ 
			$(this).removeClass('searchbox-button-hover'); 
		}); 
	} 
	 
	function initValue(target){ 
		var state = $.data(target, 'searchbox'); 
		var opts = state.options; 
		var input = state.searchbox.find('input.searchbox-text'); 
		if (opts.value == ''){ 
			input.val(opts.prompt); 
			input.addClass('searchbox-prompt'); 
		} else {  
			input.val(opts.value); 
			input.removeClass('searchbox-prompt'); 
		} 
	} 
	 
	$.fn.searchbox = function(options, param){ 
		if (typeof options == 'string'){ 
			return $.fn.searchbox.methods[options](this, param); 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'searchbox'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				state = $.data(this, 'searchbox', { 
					options: $.extend({}, $.fn.searchbox.defaults, $.fn.searchbox.parseOptions(this), options), 
					searchbox: init(this) 
				}); 
			} 
			buildMenu(this); 
			initValue(this); 
			bindEvents(this); 
			setSize(this); 
		}); 
	} 
	 
	$.fn.searchbox.methods = { 
		options: function(jq){ 
			return $.data(jq[0], 'searchbox').options; 
		}, 
		menu: function(jq){ 
			return $.data(jq[0], 'searchbox').menu; 
		}, 
		textbox: function(jq){ 
			return $.data(jq[0], 'searchbox').searchbox.find('input.searchbox-text'); 
		}, 
		getValue: function(jq){ 
			return $.data(jq[0], 'searchbox').options.value; 
		}, 
		setValue: function(jq, value){ 
			return jq.each(function(){ 
				$(this).searchbox('options').value = value; 
				$(this).searchbox('textbox').val(value); 
				$(this).searchbox('textbox').blur(); 
			}); 
		}, 
		getName: function(jq){ 
			return $.data(jq[0], 'searchbox').searchbox.find('input.searchbox-text').attr('name'); 
		}, 
		selectName: function(jq, name){ 
			return jq.each(function(){ 
				var menu = $.data(this, 'searchbox').menu; 
				if (menu){ 
					menu.children('div.menu-item[name="'+name+'"]').triggerHandler('click'); 
				} 
			}); 
		}, 
		destroy: function(jq){ 
			return jq.each(function(){ 
				var menu = $(this).searchbox('menu'); 
				if (menu){ 
					menu.menu('destroy'); 
				} 
				$.data(this, 'searchbox').searchbox.remove(); 
				$(this).remove(); 
			}); 
		}, 
		resize: function(jq, width){ 
			return jq.each(function(){ 
				setSize(this, width); 
			}); 
		} 
	}; 
	 
	$.fn.searchbox.parseOptions = function(target){ 
		var t = $(target); 
		return { 
			width: (parseInt(target.style.width) || undefined), 
			prompt: t.attr('prompt'), 
			value: t.val(), 
			menu: t.attr('menu'), 
			searcher: (t.attr('searcher') ? eval(t.attr('searcher')) : undefined) 
		}; 
	}; 
	 
	$.fn.searchbox.defaults = { 
		width:'auto', 
		prompt:'', 
		value:'', 
		menu:null, 
		searcher:function(value,name){} 
	}; 
})(jQuery);/** 
 * slider - jQuery EasyUI 
 *  
 * Licensed under the GPL terms 
 * To use it on other terms please contact us 
 * 
 * Copyright(c) 2009-2012 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 *  draggable 
 *  
 */ 
(function($){ 
	function init(target){ 
		var slider = $('<div class="slider">' + 
				'<div class="slider-inner">' + 
				'<a href="javascript:void(0)" class="slider-handle"></a>' + 
				'<span class="slider-tip"></span>' + 
				'</div>' + 
				'<div class="slider-rule"></div>' + 
				'<div class="slider-rulelabel"></div>' + 
				'<div style="clear:both"></div>' + 
				'<input type="hidden" class="slider-value">' + 
				'</div>').insertAfter(target); 
		var name = $(target).hide().attr('name'); 
		if (name){ 
			slider.find('input.slider-value').attr('name', name); 
			$(target).removeAttr('name').attr('sliderName', name); 
		} 
		return slider; 
	} 
	 
	/** 
	 * set the slider size, for vertical slider, the height property is required 
	 */ 
	function setSize(target, param){ 
		var opts = $.data(target, 'slider').options; 
		var slider = $.data(target, 'slider').slider; 
		 
		if (param){ 
			if (param.width) opts.width = param.width; 
			if (param.height) opts.height = param.height; 
		} 
		if (opts.mode == 'h'){ 
			slider.css('height', ''); 
			slider.children('div').css('height', ''); 
			if (!isNaN(opts.width)){ 
				slider.width(opts.width); 
			} 
		} else { 
			slider.css('width', ''); 
			slider.children('div').css('width', ''); 
			if (!isNaN(opts.height)){ 
				slider.height(opts.height); 
				slider.find('div.slider-rule').height(opts.height); 
				slider.find('div.slider-rulelabel').height(opts.height); 
				slider.find('div.slider-inner')._outerHeight(opts.height); 
			} 
		} 
		initValue(target); 
	} 
	 
	/** 
	 * show slider rule if needed 
	 */ 
	function showRule(target){ 
		var opts = $.data(target, 'slider').options; 
		var slider = $.data(target, 'slider').slider; 
		 
		if (opts.mode == 'h'){ 
			_build(opts.rule); 
		} else { 
			_build(opts.rule.slice(0).reverse()); 
		} 
		 
		function _build(aa){ 
			var rule = slider.find('div.slider-rule'); 
			var label = slider.find('div.slider-rulelabel'); 
			rule.empty(); 
			label.empty(); 
			for(var i=0; i<aa.length; i++){ 
				var distance = i*100/(aa.length-1)+'%'; 
				var span = $('<span></span>').appendTo(rule); 
				span.css((opts.mode=='h'?'left':'top'), distance); 
				 
				// show the labels 
				if (aa[i] != '|'){ 
					span = $('<span></span>').appendTo(label); 
					span.html(aa[i]); 
					if (opts.mode == 'h'){ 
						span.css({ 
							left: distance, 
							marginLeft: -Math.round(span.outerWidth()/2) 
						}); 
					} else { 
						span.css({ 
							top: distance, 
							marginTop: -Math.round(span.outerHeight()/2) 
						}); 
					} 
				} 
			} 
		} 
	} 
	 
	/** 
	 * build the slider and set some properties 
	 */ 
	function buildSlider(target){ 
		var opts = $.data(target, 'slider').options; 
		var slider = $.data(target, 'slider').slider; 
		 
		slider.removeClass('slider-h slider-v slider-disabled'); 
		slider.addClass(opts.mode == 'h' ? 'slider-h' : 'slider-v'); 
		slider.addClass(opts.disabled ? 'slider-disabled' : ''); 
		 
		slider.find('a.slider-handle').draggable({ 
			axis:opts.mode, 
			cursor:'pointer', 
			disabled: opts.disabled, 
			onDrag:function(e){ 
				var left = e.data.left; 
				var width = slider.width(); 
				if (opts.mode!='h'){ 
					left = e.data.top; 
					width = slider.height(); 
				} 
				if (left < 0 || left > width) { 
					return false; 
				} else { 
					var value = pos2value(target, left); 
					adjustValue(value); 
					return false; 
				} 
			}, 
			onStartDrag:function(){ 
				opts.onSlideStart.call(target, opts.value); 
			}, 
			onStopDrag:function(e){ 
				var value = pos2value(target, (opts.mode=='h'?e.data.left:e.data.top)); 
				adjustValue(value); 
				opts.onSlideEnd.call(target, opts.value); 
			} 
		}); 
		 
		function adjustValue(value){ 
			var s = Math.abs(value % opts.step); 
			if (s < opts.step/2){ 
				value -= s; 
			} else { 
				value = value - s + opts.step; 
			} 
			setValue(target, value); 
		} 
	} 
	 
	/** 
	 * set a specified value to slider 
	 */ 
	function setValue(target, value){ 
		var opts = $.data(target, 'slider').options; 
		var slider = $.data(target, 'slider').slider; 
		var oldValue = opts.value; 
		if (value < opts.min) value = opts.min; 
		if (value > opts.max) value = opts.max; 
		 
		opts.value = value; 
		$(target).val(value); 
		slider.find('input.slider-value').val(value); 
		 
		var pos = value2pos(target, value); 
		var tip = slider.find('.slider-tip'); 
		if (opts.showTip){ 
			tip.show(); 
			tip.html(opts.tipFormatter.call(target, opts.value)); 
		} else { 
			tip.hide(); 
		} 
		 
		if (opts.mode == 'h'){ 
			var style = 'left:'+pos+'px;'; 
			slider.find('.slider-handle').attr('style', style); 
			tip.attr('style', style +  'margin-left:' + (-Math.round(tip.outerWidth()/2)) + 'px'); 
		} else { 
			var style = 'top:' + pos + 'px;'; 
			slider.find('.slider-handle').attr('style', style); 
			tip.attr('style', style + 'margin-left:' + (-Math.round(tip.outerWidth())) + 'px'); 
		} 
		 
		if (oldValue != value){ 
			opts.onChange.call(target, value, oldValue); 
		} 
	} 
	 
	function initValue(target){ 
		var opts = $.data(target, 'slider').options; 
		var fn = opts.onChange; 
		opts.onChange = function(){}; 
		setValue(target, opts.value); 
		opts.onChange = fn; 
	} 
	 
	/** 
	 * translate value to slider position 
	 */ 
	function value2pos(target, value){ 
		var opts = $.data(target, 'slider').options; 
		var slider = $.data(target, 'slider').slider; 
		if (opts.mode == 'h'){ 
			var pos = (value-opts.min)/(opts.max-opts.min)*slider.width(); 
		} else { 
			var pos = slider.height() - (value-opts.min)/(opts.max-opts.min)*slider.height(); 
		} 
		return pos.toFixed(0); 
	} 
	 
	/** 
	 * translate slider position to value 
	 */ 
	function pos2value(target, pos){ 
		var opts = $.data(target, 'slider').options; 
		var slider = $.data(target, 'slider').slider; 
		if (opts.mode == 'h'){ 
			var value = opts.min + (opts.max-opts.min)*(pos/slider.width()); 
		} else { 
			var value = opts.min + (opts.max-opts.min)*((slider.height()-pos)/slider.height()); 
		} 
		return value.toFixed(0); 
	} 
	 
	$.fn.slider = function(options, param){ 
		if (typeof options == 'string'){ 
			return $.fn.slider.methods[options](this, param); 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'slider'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				state = $.data(this, 'slider', { 
					options: $.extend({}, $.fn.slider.defaults, $.fn.slider.parseOptions(this), options), 
					slider: init(this) 
				}); 
				$(this).removeAttr('disabled'); 
			} 
			buildSlider(this); 
			showRule(this); 
			setSize(this); 
		}); 
	}; 
	 
	$.fn._outerHeight = function(height){ 
		return this.each(function(){ 
			if (!$.boxModel && $.browser.msie){ 
				$(this).height(height); 
			} else { 
				$(this).height(height - ($(this).outerHeight() - $(this).height())); 
			} 
		}); 
	}; 
	 
	$.fn.slider.methods = { 
		options: function(jq){ 
			return $.data(jq[0], 'slider').options; 
		}, 
		destroy: function(jq){ 
			return jq.each(function(){ 
				$.data(this, 'slider').slider.remove(); 
				$(this).remove(); 
			}); 
		}, 
		resize: function(jq, param){ 
			return jq.each(function(){ 
				setSize(this, param); 
			}); 
		}, 
		getValue: function(jq){ 
			return jq.slider('options').value; 
		}, 
		setValue: function(jq, value){ 
			return jq.each(function(){ 
				setValue(this, value); 
			}); 
		}, 
		enable: function(jq){ 
			return jq.each(function(){ 
				$.data(this, 'slider').options.disabled = false; 
				buildSlider(this); 
			}); 
		}, 
		disable: function(jq){ 
			return jq.each(function(){ 
				$.data(this, 'slider').options.disabled = true; 
				buildSlider(this); 
			}); 
		} 
	}; 
	 
	$.fn.slider.parseOptions = function(target){ 
		var t = $(target); 
		return { 
			width: (parseInt(target.style.width) || undefined), 
			height: (parseInt(target.style.height) || undefined), 
			value: (t.val() || undefined), 
			mode: (t.attr('mode') ? t.attr('mode') : undefined), 
			showTip: (t.attr('showTip') ? t.attr('showTip') == 'true' : undefined), 
			disabled: (t.attr('disabled') ? true : undefined), 
			min: (t.attr('min')=='0' ? 0 : parseInt(t.attr('min')) || undefined), 
			max: (t.attr('max')=='0' ? 0 : parseInt(t.attr('max')) || undefined), 
			step: (t.attr('step')=='0' ? 0 : parseInt(t.attr('step')) || undefined), 
			rule: (t.attr('rule') ? eval(t.attr('rule')) : undefined) 
		}; 
	}; 
	 
	$.fn.slider.defaults = { 
		width: 'auto', 
		height: 'auto', 
		mode: 'h',	// 'h'(horizontal) or 'v'(vertical) 
		showTip: false, 
		disabled: false, 
		value: 0, 
		min: 0, 
		max: 100, 
		step: 1, 
		rule: [],	// [0,'|',100] 
		tipFormatter: function(value){return value}, 
		onChange: function(value, oldValue){}, 
		onSlideStart: function(value){}, 
		onSlideEnd: function(value){} 
	}; 
})(jQuery); 
/** 
 * splitbutton - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 *   linkbutton 
 *   menu 
 */ 
(function($){ 
	 
	function init(target){ 
		var opts = $.data(target, 'splitbutton').options; 
		 
		if (opts.menu){ 
			$(opts.menu).menu({ 
				onShow: function(){ 
					btn.addClass((opts.plain==true) ? 's-btn-plain-active' : 's-btn-active'); 
				}, 
				onHide: function(){ 
					btn.removeClass((opts.plain==true) ? 's-btn-plain-active' : 's-btn-active'); 
				} 
			}); 
		} 
		 
		var btn = $(target); 
		btn.removeClass('s-btn-active s-btn-plain-active'); 
		btn.linkbutton(opts); 
		 
		var menubtn = btn.find('.s-btn-downarrow'); 
		menubtn.unbind('.splitbutton'); 
		if (opts.disabled == false && opts.menu){ 
			menubtn.bind('click.splitbutton', function(){ 
				showMenu(); 
				return false; 
			}); 
			var timeout = null; 
			menubtn.bind('mouseenter.splitbutton', function(){ 
				timeout = setTimeout(function(){ 
					showMenu(); 
				}, opts.duration); 
				return false; 
			}).bind('mouseleave.splitbutton', function(){ 
				if (timeout){ 
					clearTimeout(timeout); 
				} 
			}); 
		} 
		 
		function showMenu(){ 
			var left = btn.offset().left; 
			if (left + $(opts.menu).outerWidth() + 5 > $(window).width()){ 
				left = $(window).width() - $(opts.menu).outerWidth() - 5; 
			} 
			 
			$('.menu-top').menu('hide'); 
			$(opts.menu).menu('show', { 
				left: left, 
				top: btn.offset().top + btn.outerHeight() 
			}); 
			btn.blur(); 
		} 
	} 
	 
	$.fn.splitbutton = function(options){ 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'splitbutton'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				var t = $(this); 
				$.data(this, 'splitbutton', { 
					options: $.extend({}, $.fn.splitbutton.defaults, { 
						disabled: (t.attr('disabled') ? t.attr('disabled') == 'true' : undefined), 
						plain: (t.attr('plain') ? t.attr('plain') == 'true' : undefined), 
						menu: t.attr('menu'), 
						duration: t.attr('duration') 
					}, options) 
				}); 
				$(this).removeAttr('disabled'); 
				$(this).append('<span class="s-btn-downarrow">&nbsp;</span>'); 
			} 
			init(this); 
		}); 
	}; 
	 
	$.fn.splitbutton.defaults = { 
		disabled: false, 
		menu: null, 
		plain: true, 
		duration: 100 
	}; 
})(jQuery);/** 
 * tabs - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 */ 
(function($){ 
	 
	// get the left position of the tab element 
	function getTabLeftPosition(container, tab) { 
		var w = 0; 
		var b = true; 
		$('>div.tabs-header ul.tabs li', container).each(function(){ 
			if (this == tab) { 
				b = false; 
			} 
			if (b == true) { 
				w += $(this).outerWidth(true); 
			} 
		}); 
		return w; 
	} 
	 
	// get the max tabs scroll width(scope) 
	function getMaxScrollWidth(container) { 
		var header = $('>div.tabs-header', container); 
		var tabsWidth = 0;	// all tabs width 
		$('ul.tabs li', header).each(function(){ 
			tabsWidth += $(this).outerWidth(true); 
		}); 
		var wrapWidth = $('.tabs-wrap', header).width(); 
		var padding = parseInt($('.tabs', header).css('padding-left')); 
		 
		return tabsWidth - wrapWidth + padding; 
	} 
	 
	// set the tabs scrollers to show or not, 
	// dependent on the tabs count and width 
	function setScrollers(container) { 
		var header = $('>div.tabs-header', container); 
		var tabsWidth = 0; 
		$('ul.tabs li', header).each(function(){ 
			tabsWidth += $(this).outerWidth(true); 
		}); 
		 
		if (tabsWidth > header.width()) { 
			$('.tabs-scroller-left', header).css('display', 'block'); 
			$('.tabs-scroller-right', header).css('display', 'block'); 
			$('.tabs-wrap', header).addClass('tabs-scrolling'); 
			 
			if ($.boxModel == true) { 
				$('.tabs-wrap', header).css('left',2); 
			} else { 
				$('.tabs-wrap', header).css('left',0); 
			} 
			var width = header.width() 
				- $('.tabs-scroller-left', header).outerWidth() 
				- $('.tabs-scroller-right', header).outerWidth(); 
			$('.tabs-wrap', header).width(width); 
			 
		} else { 
			$('.tabs-scroller-left', header).css('display', 'none'); 
			$('.tabs-scroller-right', header).css('display', 'none'); 
			$('.tabs-wrap', header).removeClass('tabs-scrolling').scrollLeft(0); 
			$('.tabs-wrap', header).width(header.width()); 
			$('.tabs-wrap', header).css('left',0); 
			 
		} 
	} 
	 
	// set size of the tabs container 
	function setSize(container) { 
		var opts = $.data(container, 'tabs').options; 
		var cc = $(container); 
		if (opts.fit == true){ 
			var p = cc.parent(); 
			opts.width = p.width(); 
			opts.height = p.height(); 
		} 
		cc.width(opts.width).height(opts.height); 
		 
		var header = $('>div.tabs-header', container); 
		if ($.boxModel == true) { 
			var delta = header.outerWidth() - header.width(); 
//			var delta = header.outerWidth(true) - header.width(); 
			header.width(cc.width() - delta); 
		} else { 
			header.width(cc.width()); 
		} 
		 
		setScrollers(container); 
		 
		var panels = $('>div.tabs-panels', container); 
		var height = opts.height; 
		if (!isNaN(height)) { 
			if ($.boxModel == true) { 
				var delta = panels.outerHeight() - panels.height(); 
				panels.css('height', (height - header.outerHeight() - delta) || 'auto'); 
			} else { 
				panels.css('height', height - header.outerHeight()); 
			} 
		} else { 
			panels.height('auto'); 
		} 
		var width = opts.width; 
		if (!isNaN(width)){ 
			if ($.boxModel == true) { 
				var delta = panels.outerWidth() - panels.width(); 
//				var delta = panels.outerWidth(true) - panels.width(); 
				panels.width(width - delta); 
			} else { 
				panels.width(width); 
			} 
		} else { 
			panels.width('auto'); 
		} 
		 
		if ($.parser){ 
			$.parser.parse(container); 
		} 
		 
//		// resize the children tabs container 
//		$('div.tabs-container', container).tabs();	 
	} 
	 
	/** 
	 * make the selected tab panel fit layout 
	 */ 
	function fitContent(container){ 
		var tab = $('>div.tabs-header ul.tabs li.tabs-selected', container); 
		if (tab.length){ 
			var panelId = $.data(tab[0], 'tabs.tab').id; 
			var panel = $('#'+panelId); 
			var panels = $('>div.tabs-panels', container); 
			if (panels.css('height').toLowerCase() != 'auto'){ 
				if ($.boxModel == true){ 
					panel.height(panels.height() - (panel.outerHeight()-panel.height())); 
					panel.width(panels.width() - (panel.outerWidth()-panel.width())); 
				} else { 
					panel.height(panels.height()); 
					panel.width(panels.width()); 
				} 
			} 
			$('>div', panel).triggerHandler('_resize'); 
		} 
		 
	} 
	 
	// wrap the tabs header and body 
	function wrapTabs(container) { 
		$(container).addClass('tabs-container'); 
		$(container).wrapInner('<div class="tabs-panels"/>'); 
		$('<div class="tabs-header">' 
				+ '<div class="tabs-scroller-left"></div>' 
				+ '<div class="tabs-scroller-right"></div>' 
				+ '<div class="tabs-wrap">' 
				+ '<ul class="tabs"></ul>' 
				+ '</div>' 
				+ '</div>').prependTo(container); 
		 
		var header = $('>div.tabs-header', container); 
		 
		$('>div.tabs-panels>div', container).each(function(){ 
			if (!$(this).attr('id')) { 
				$(this).attr('id', 'gen-tabs-panel' + $.fn.tabs.defaults.idSeed++); 
			} 
			 
			var options = { 
				id: $(this).attr('id'), 
				title: $(this).attr('title'), 
				content: null, 
				href: $(this).attr('href'), 
				closable: $(this).attr('closable') == 'true', 
				icon: $(this).attr('icon'), 
				selected: $(this).attr('selected') == 'true', 
				cache: $(this).attr('cache') == 'false' ? false : true 
			}; 
			$(this).attr('title',''); 
			createTab(container, options); 
		}); 
		 
		$('.tabs-scroller-left, .tabs-scroller-right', header).hover( 
			function(){$(this).addClass('tabs-scroller-over');}, 
			function(){$(this).removeClass('tabs-scroller-over');} 
		); 
		$(container).bind('_resize', function(){ 
			var opts = $.data(container, 'tabs').options; 
			if (opts.fit == true){ 
				setSize(container); 
				fitContent(container); 
			} 
			return false; 
		}); 
	} 
	 
	function setProperties(container){ 
		var opts = $.data(container, 'tabs').options; 
		var header = $('>div.tabs-header', container); 
		var panels = $('>div.tabs-panels', container); 
		var tabs = $('ul.tabs', header); 
		 
		if (opts.plain == true) { 
			header.addClass('tabs-header-plain'); 
		} else { 
			header.removeClass('tabs-header-plain'); 
		} 
		if (opts.border == true){ 
			header.removeClass('tabs-header-noborder'); 
			panels.removeClass('tabs-panels-noborder'); 
		} else { 
			header.addClass('tabs-header-noborder'); 
			panels.addClass('tabs-panels-noborder'); 
		} 
		 
		$('li', tabs).unbind('.tabs').bind('click.tabs', function(){ 
			$('.tabs-selected', tabs).removeClass('tabs-selected'); 
			$(this).addClass('tabs-selected'); 
			$(this).blur(); 
			 
			$('>div.tabs-panels>div', container).css('display', 'none'); 
			 
			var wrap = $('.tabs-wrap', header); 
			var leftPos = getTabLeftPosition(container, this); 
			var left = leftPos - wrap.scrollLeft(); 
			var right = left + $(this).outerWidth(); 
			if (left < 0 || right > wrap.innerWidth()) { 
				var pos = Math.min( 
						leftPos - (wrap.width()-$(this).width()) / 2, 
						getMaxScrollWidth(container) 
				); 
				wrap.animate({scrollLeft:pos}, opts.scrollDuration); 
			} 
			 
			var tabAttr = $.data(this, 'tabs.tab'); 
			var panel = $('#' + tabAttr.id); 
			panel.css('display', 'block'); 
			 
			if (tabAttr.href && (!tabAttr.loaded || !tabAttr.cache)) { 
				panel.load(tabAttr.href, null, function(){ 
					if ($.parser){ 
						$.parser.parse(panel); 
					} 
					opts.onLoad.apply(this, arguments); 
					tabAttr.loaded = true; 
				}); 
			} 
			 
			fitContent(container); 
			 
			opts.onSelect.call(panel, tabAttr.title); 
		}); 
		 
		$('a.tabs-close', tabs).unbind('.tabs').bind('click.tabs', function(){ 
			var elem = $(this).parent()[0]; 
			var tabAttr = $.data(elem, 'tabs.tab'); 
			closeTab(container, tabAttr.title); 
		}); 
		 
		$('.tabs-scroller-left', header).unbind('.tabs').bind('click.tabs', function(){ 
			var wrap = $('.tabs-wrap', header); 
			var pos = wrap.scrollLeft() - opts.scrollIncrement; 
			wrap.animate({scrollLeft:pos}, opts.scrollDuration); 
		}); 
		 
		$('.tabs-scroller-right', header).unbind('.tabs').bind('click.tabs', function(){ 
			var wrap = $('.tabs-wrap', header); 
			var pos = Math.min( 
					wrap.scrollLeft() + opts.scrollIncrement, 
					getMaxScrollWidth(container) 
			); 
			wrap.animate({scrollLeft:pos}, opts.scrollDuration); 
		}); 
	} 
	 
	function createTab(container, options) { 
		var header = $('>div.tabs-header', container); 
		var tabs = $('ul.tabs', header); 
		 
		var tab = $('<li></li>'); 
		var tab_span = $('<span></span>').html(options.title); 
		var tab_a = $('<a class="tabs-inner"></a>') 
				.attr('href', 'javascript:void(0)') 
				.append(tab_span); 
		tab.append(tab_a).appendTo(tabs); 
		 
		if (options.closable) { 
			tab_span.addClass('tabs-closable'); 
			tab_a.after('<a href="javascript:void(0)" class="tabs-close"></a>'); 
		} 
		if (options.icon) { 
			tab_span.addClass('tabs-with-icon'); 
			tab_span.after($('<span/>').addClass('tabs-icon').addClass(options.icon)); 
		} 
		if (options.selected) { 
			tab.addClass('tabs-selected'); 
		} 
		if (options.content) { 
			$('#' + options.id).html(options.content); 
		} 
		 
		$('#' + options.id).removeAttr('title'); 
		$.data(tab[0], 'tabs.tab', { 
			id: options.id, 
			title: options.title, 
			href: options.href, 
			loaded: false, 
			cache: options.cache 
		}); 
	} 
	 
	function addTab(container, options) { 
		options = $.extend({ 
			id: null, 
			title: '', 
			content: '', 
			href: null, 
			cache: true, 
			icon: null, 
			closable: false, 
			selected: true, 
			height: 'auto', 
			width: 'auto' 
		}, options || {}); 
		 
		if (options.selected) { 
			$('.tabs-header .tabs-wrap .tabs li', container).removeClass('tabs-selected'); 
		} 
		options.id = options.id || 'gen-tabs-panel' + $.fn.tabs.defaults.idSeed++; 
		 
		$('<div></div>').attr('id', options.id) 
				.attr('title', options.title) 
				.height(options.height) 
				.width(options.width) 
				.appendTo($('>div.tabs-panels', container)); 
		 
		createTab(container, options); 
	} 
	 
	// close a tab with specified title 
	function closeTab(container, title) { 
		var opts = $.data(container, 'tabs').options; 
		var elem = $('>div.tabs-header li:has(a span:contains("' + title + '"))', container)[0]; 
		if (!elem) return; 
		 
		var tabAttr = $.data(elem, 'tabs.tab'); 
		var panel = $('#' + tabAttr.id); 
		 
		if (opts.onClose.call(panel, tabAttr.title) == false) return; 
		 
		var selected = $(elem).hasClass('tabs-selected'); 
		$.removeData(elem, 'tabs.tab'); 
		$(elem).remove(); 
		panel.remove(); 
		 
		setSize(container); 
		if (selected) { 
			selectTab(container); 
		} else { 
			var wrap = $('>div.tabs-header .tabs-wrap', container); 
			var pos = Math.min( 
					wrap.scrollLeft(), 
					getMaxScrollWidth(container) 
			); 
			wrap.animate({scrollLeft:pos}, opts.scrollDuration); 
		} 
	} 
	 
	// active the selected tab item, if no selected item then active the first item 
	function selectTab(container, title){ 
		if (title) { 
			var elem = $('>div.tabs-header li:has(a span:contains("' + title + '"))', container)[0]; 
			if (elem) { 
				$(elem).trigger('click'); 
			} 
		} else { 
		 
			var tabs = $('>div.tabs-header ul.tabs', container); 
			if ($('.tabs-selected', tabs).length == 0) { 
				$('li:first', tabs).trigger('click'); 
			} else { 
				$('.tabs-selected', tabs).trigger('click'); 
			} 
		} 
	} 
	 
	function exists(container, title){ 
		return $('>div.tabs-header li:has(a span:contains("' + title + '"))', container).length > 0; 
	} 
	 
	 
	$.fn.tabs = function(options, param){ 
		if (typeof options == 'string') { 
			switch(options) { 
				case 'resize': 
					return this.each(function(){ 
						setSize(this); 
					}); 
				case 'add': 
					return this.each(function(){ 
						addTab(this, param); 
						$(this).tabs(); 
					}); 
				case 'close': 
					return this.each(function(){ 
						closeTab(this, param); 
					}); 
				case 'select': 
					return this.each(function(){ 
						selectTab(this, param); 
					}); 
				case 'exists': 
					return exists(this[0], param); 
			} 
		} 
		 
		options = options || {}; 
		 
		return this.each(function(){ 
			var state = $.data(this, 'tabs'); 
			var opts; 
			if (state) { 
				opts = $.extend(state.options, options); 
				state.options = opts; 
			} else { 
				var t = $(this); 
				opts = $.extend({},$.fn.tabs.defaults, { 
					width: (parseInt(t.css('width')) || undefined), 
					height: (parseInt(t.css('height')) || undefined), 
					fit: (t.attr('fit') ? t.attr('fit') == 'true' : undefined), 
					border: (t.attr('border') ? t.attr('border') == 'true' : undefined), 
					plain: (t.attr('plain') ? t.attr('plain') == 'true' : undefined) 
				}, options); 
				wrapTabs(this); 
				$.data(this, 'tabs', { 
					options: opts 
				}); 
			} 
			 
			setProperties(this); 
			setSize(this); 
			selectTab(this); 
		}); 
	}; 
	 
	$.fn.tabs.defaults = { 
		width: 'auto', 
		height: 'auto', 
		idSeed: 0, 
		plain: false, 
		fit: false, 
		border: true, 
		scrollIncrement: 100, 
		scrollDuration: 400, 
		onLoad: function(){}, 
		onSelect: function(title){}, 
		onClose: function(title){} 
	}; 
})(jQuery);/** 
 * treegrid - jQuery EasyUI 
 *  
 * Licensed under the GPL: 
 *   http://www.gnu.org/licenses/gpl.txt 
 * 
 * Copyright 2010 stworthy [ stworthy@gmail.com ]  
 *  
 * Dependencies: 
 * 	 datagrid 
 *  
 */ 
(function($){ 
	function buildGrid(target){ 
		var opts = $.data(target, 'treegrid').options; 
		$(target).datagrid($.extend({}, opts, { 
			url: null, 
			onResizeColumn: function(field, width){ 
				setRowHeight(target); 
			} 
		})); 
	} 
	 
	function getColumnFields(columns){ 
		if (columns.length == 0) return []; 
		 
		function getFields(ridx,cidx,count){ 
			var fields = []; 
			while(fields.length < count){ 
				var col = columns[ridx][cidx]; 
				if (col.colspan && parseInt(col.colspan)>1){ 
					var ff = getFields(ridx+1, getSubColIndex(ridx,cidx), parseInt(col.colspan)); 
					fields = fields.concat(ff); 
				} else if (col.field){ 
					fields.push(col.field); 
				} 
				cidx++; 
			} 
			 
			return fields; 
		} 
		 
		function getSubColIndex(ridx, cidx){ 
			var index = 0; 
			for(var i=0; i<cidx; i++){ 
				var colspan = parseInt(columns[ridx][i].colspan || '1'); 
				if (colspan > 1){ 
					index += colspan; 
				} 
			} 
			return index; 
		} 
		 
		var fields = []; 
		for(var i=0; i<columns[0].length; i++){ 
			var col = columns[0][i]; 
			if (col.colspan && parseInt(col.colspan)>1){ 
				var ff = getFields(1, getSubColIndex(0,i), parseInt(col.colspan)); 
				fields = fields.concat(ff); 
			} else if (col.field){ 
				fields.push(col.field); 
			} 
		} 
		 
		return fields; 
	} 
	function getColumnOption(target, field){ 
		var opts = $.data(target, 'datagrid').options; 
		if (opts.columns){ 
			for(var i=0; i<opts.columns.length; i++){ 
				var cols = opts.columns[i]; 
				for(var j=0; j<cols.length; j++){ 
					var col = cols[j]; 
					if (col.field == field){ 
						return col; 
					} 
				} 
			} 
		} 
		if (opts.frozenColumns){ 
			for(var i=0; i<opts.frozenColumns.length; i++){ 
				var cols = opts.frozenColumns[i]; 
				for(var j=0; j<cols.length; j++){ 
					var col = cols[j]; 
					if (col.field == field){ 
						return col; 
					} 
				} 
			} 
		} 
		return null; 
	} 
	function setRowHeight(target, idValue){ 
		var opts = $.data(target, 'datagrid').options; 
		var panel = $.data(target, 'datagrid').panel; 
		 
		var view = panel.find('>div.datagrid-view'); 
		var view1 = view.find('>div.datagrid-view1'); 
		var view2 = view.find('>div.datagrid-view2'); 
		if (opts.rownumbers || (opts.frozenColumns && opts.frozenColumns.length>0)){ 
			if (idValue){ 
				view2.find('tr[node-id=' + idValue + ']').next('tr.treegrid-tr-tree').find('tr[node-id]').each(function(){ 
					setHeight($(this).attr('node-id')); 
				}); 
			} else { 
				view2.find('tr[node-id]').each(function(){ 
					setHeight($(this).attr('node-id')); 
				}); 
			} 
		} 
		if (opts.height == 'auto'){ 
			var height = view2.find('div.datagrid-body table').height() + 18; 
			view1.find('div.datagrid-body').height(height); 
			view2.find('div.datagrid-body').height(height); 
			view.height(view2.height()); 
		} 
		console.log('ss') 
		 
		function setHeight(idValue){ 
			var tr1 = view1.find('tr[node-id='+idValue+']'); 
			var tr2 = view2.find('tr[node-id='+idValue+']'); 
			tr1.css('height', null); 
			tr2.css('height', null); 
			var height = Math.max(tr1.height(), tr2.height()); 
			tr1.css('height', height); 
			tr2.css('height', height); 
		} 
	} 
	 
	function bindEvents(target){ 
		var body = $(target).datagrid('getPanel').find('div.datagrid-body'); 
		body.find('span.tree-hit').unbind('.treegrid').bind('click.treegrid', function(){ 
			var tr = $(this).parent().parent().parent(); 
			var id = tr.attr('node-id'); 
			toggle(target, id); 
			return false; 
		}).bind('mouseenter.treegrid', function(){ 
			if ($(this).hasClass('tree-expanded')){ 
				$(this).addClass('tree-expanded-hover'); 
			} else { 
				$(this).addClass('tree-collapsed-hover'); 
			} 
		}).bind('mouseleave.treegrid', function(){ 
			if ($(this).hasClass('tree-expanded')){ 
				$(this).removeClass('tree-expanded-hover'); 
			} else { 
				$(this).removeClass('tree-collapsed-hover'); 
			} 
		});; 
		body.find('tr').unbind('.treegrid').bind('click.treegrid', function(){ 
			select(target, $(this).attr('node-id')); 
			return false; 
		}); 
	} 
	 
	function loadData(target, parentId, data, append){ 
		var opts = $.data(target, 'datagrid').options; 
		var wrap = $.data(target, 'datagrid').panel; 
		var view = wrap.find('>div.datagrid-view'); 
		var view1 = view.find('>div.datagrid-view1'); 
		var view2 = view.find('>div.datagrid-view2'); 
		 
		var frozenFields = getColumnFields(opts.frozenColumns); 
		var fields = getColumnFields(opts.columns); 
		 
		if (parentId){ 
			var subtree1 = createSubTree(parentId, view1, frozenFields); 
			var subtree2 = createSubTree(parentId, view2, fields); 
			var body1 = subtree1.body; 
			var body2 = subtree2.body; 
			var level = subtree1.level + subtree2.level; 
		} else { 
			var body1 = view1.find('>div.datagrid-body>div.datagrid-body-inner'); 
			var body2 = view2.find('>div.datagrid-body'); 
			var level = 0; 
		} 
		if (!append){ 
			body1.empty(); 
			body2.empty(); 
		} 
		 
		if (opts.rownumbers || (opts.frozenColumns && opts.frozenColumns.length > 0)){ 
			var table1 = $('<table cellspacing="0" cellpadding="0" border="0"></table>').appendTo(body1); 
			appendRows(table1, data, level, frozenFields); 
		} 
		var table2 = $('<table cellspacing="0" cellpadding="0" border="0"></table>').appendTo(body2); 
		appendRows(table2, data, level, fields); 
		 
		setRowHeight(target); 
		bindEvents(target); 
		 
		function createSubTree(idValue, view, fields){ 
			var r = {}; 
			var tr = view.find('>div.datagrid-body tr[node-id=' + idValue + ']'); 
			var subtr = tr.next('tr.treegrid-tr-tree'); 
			if (subtr.length){ 
				r.body = subtr.find('>td'); 
			} else { 
				var subtr = $('<tr class="treegrid-tr-tree"></tr>').insertAfter(tr); 
				var body = $('<td style="border:0"></td>').attr('colspan', fields.length).appendTo(subtr); 
				r.body = body; 
			} 
			var td = tr.find('td[field=' + opts.treeField + ']'); 
			r.level = td.find('span.tree-indent,span.tree-hit').length; 
			 
			return r; 
		} 
		 
		function appendRows(ptable, children, depth, fields){ 
			for(var i=0; i<children.length; i++){ 
				var row = children[i]; 
				if (row.state != 'open' && row.state != 'closed'){ 
					row.state = 'open'; 
				} 
				 
				var tr = $('<tr></tr>').attr('node-id', row[opts.idField]).appendTo(ptable); 
				$.data(tr[0], 'treegrid-node', row); 
				 
				var table = []; 
				for(var j=0; j<fields.length; j++){ 
					var field = fields[j]; 
					var col = getColumnOption(target, field); 
					if (col){ 
						var style = 'width:' + (col.width) + 'px;'; 
						style += 'text-align:' + (col.align || 'left') + ';'; 
						style += opts.nowrap == false ? 'white-space:normal;' : ''; 
						 
						table.push('<td field="' + field + '">'); 
						 
						table.push('<div style="' + style + '" '); 
						if (col.checkbox){ 
							table.push('class="datagrid-cell-check '); 
						} else { 
							table.push('class="datagrid-cell '); 
						} 
						table.push('">'); 
						 
						if (col.checkbox){ 
							if (selected){ 
								table.push('<input type="checkbox" checked="checked"/>'); 
							} else { 
								table.push('<input type="checkbox"/>'); 
							} 
						} else if (col.formatter){ 
							table.push(col.formatter(row[field], row, i)); 
						} else { 
							table.push(row[field] || '&nbsp;'); 
						} 
						table.push('</div>'); 
						table.push('</td>'); 
					} 
				} 
				tr.html(table.join('')); 
				 
				var cell = tr.find('td[field='+opts.treeField+'] div.datagrid-cell'); 
				cell.wrapInner('<span class="tree-title"></span>'); 
				if (row.children && row.children.length){ 
					var subtr = $('<tr class="treegrid-tr-tree"></tr>').insertAfter(tr); 
					var td = $('<td style="border:0"></td>').attr('colspan', fields.length).appendTo(subtr); 
					var table = $('<table cellspacing="0" cellpadding="0" border="0"></table>').appendTo(td); 
					 
					if (row.state == 'open'){ 
						$('<span class="tree-icon tree-folder tree-folder-open"></span>').addClass(row.iconCls).prependTo(cell); 
						$('<span class="tree-hit tree-expanded"></span>').prependTo(cell); 
					} else { 
						$('<span class="tree-icon tree-folder"></span>').addClass(row.iconCls).prependTo(cell); 
						$('<span class="tree-hit tree-collapsed"></span>').prependTo(cell); 
						subtr.css('display','none'); 
					} 
					 
					appendRows(table, row.children, depth+1, fields); 
				} else { 
					if (row.state == 'closed'){ 
						$('<span class="tree-folder"></span>').addClass(row.iconCls).prependTo(cell); 
						$('<span class="tree-hit tree-collapsed"></span>').prependTo(cell); 
					} else { 
						$('<span class="tree-icon tree-file"></span>').addClass(row.iconCls).prependTo(cell); 
						$('<span class="tree-indent"></span>').prependTo(cell); 
					} 
				} 
				for(var j=0; j<depth; j++){ 
					$('<span class="tree-indent"></span>').prependTo(cell); 
				} 
			} 
		} 
	} 
	 
	function request(target, parentId, param, callback){ 
		var opts = $.data(target, 'treegrid').options; 
		var body = $(target).datagrid('getPanel').find('div.datagrid-body'); 
		param = param || {}; 
		 
		var row = null; 
		var tr = body.find('tr[node-id=' + parentId + ']'); 
		if (tr.length){ 
			row = $.data(tr[0], 'treegrid-node'); 
		} 
		 
		if (opts.onBeforeLoad.call(target, row, param) == false) return; 
		if (!opts.url) return; 
		 
		var folder = tr.find('span.tree-folder'); 
		folder.addClass('tree-loading'); 
		$.ajax({ 
			type: opts.method, 
			url: opts.url, 
			data: param, 
			dataType: 'json', 
			success: function(data){ 
				folder.removeClass('tree-loading'); 
				loadData(target, parentId, data); 
				if (callback) { 
					callback(); 
				} 
			}, 
			error: function(){ 
				folder.removeClass('tree-loading'); 
				opts.onLoadError.apply(target, arguments); 
				if (callback){ 
					callback(); 
				} 
			} 
		}); 
	} 
	 
	function select(target, idValue){ 
		var body = $(target).datagrid('getPanel').find('div.datagrid-body'); 
		body.find('tr.tree-node-selected').removeClass('tree-node-selected'); 
		body.find('tr[node-id=' + idValue + ']').addClass('tree-node-selected'); 
	} 
	 
	function collapse(target, idValue){ 
		var opts = $.data(target, 'treegrid').options; 
		var body = $(target).datagrid('getPanel').find('div.datagrid-body'); 
		var tr = body.find('tr[node-id=' + idValue + ']'); 
		var row = $.data(tr[0], 'treegrid-node'); 
		var hit = tr.find('span.tree-hit'); 
		 
		if (hit.length == 0) return;	// is leaf 
		if (hit.hasClass('tree-collapsed')) return;	// has collapsed 
		if (opts.onBeforeCollapse.call(target, row) == false) return; 
		 
		hit.removeClass('tree-expanded tree-expanded-hover').addClass('tree-collapsed'); 
		hit.next().removeClass('tree-folder-open'); 
		tr.next('tr.treegrid-tr-tree').hide(); 
		opts.onCollapse.call(target, row); 
	} 
	 
	function expand(target, idValue){ 
		var opts = $.data(target, 'treegrid').options; 
		var body = $(target).datagrid('getPanel').find('div.datagrid-body'); 
		var tr = body.find('tr[node-id=' + idValue + ']'); 
		var row = $.data(tr[0], 'treegrid-node'); 
		var hit = tr.find('span.tree-hit'); 
		 
		if (hit.length == 0) return;	// is leaf 
		if (hit.hasClass('tree-expanded')) return;	// has expanded 
		if (opts.onBeforeExpand.call(target, row) == false) return; 
		 
		hit.removeClass('tree-collapsed tree-collapsed-hover').addClass('tree-expanded'); 
		hit.next().addClass('tree-folder-open'); 
		var subtree = tr.next('tr.treegrid-tr-tree'); 
		if (subtree.length){ 
			subtree.show(); 
			$(target).datagrid('fixColumnSize'); 
			setRowHeight(target, idValue); 
			opts.onExpand.call(target, row); 
		} else { 
			request(target, row[opts.idField], {id:row[opts.idField]}, function(){ 
				opts.onExpand.call(target, row); 
			}); 
		} 
	} 
	 
	function toggle(target, idValue){ 
		var body = $(target).datagrid('getPanel').find('div.datagrid-body'); 
		var tr = body.find('tr[node-id=' + idValue + ']'); 
		var hit = tr.find('span.tree-hit'); 
		if (hit.hasClass('tree-expanded')){ 
			collapse(target, idValue); 
		} else { 
			expand(target, idValue); 
		} 
	} 
	 
	$.fn.treegrid = function(options, param){ 
		if (typeof options == 'string'){ 
			switch(options){ 
			case 'select': 
				return this.each(function(){ 
					select(this, param);	// param: the row id value 
				}); 
			case 'collapse': 
				return this.each(function(){ 
					collapse(this, param);	// param: the row id value 
				}); 
			case 'expand': 
				return this.each(function(){ 
					expand(this, param);	// param: the row id value 
				}); 
			case 'toggle': 
				return this.each(function(){ 
					toggle(this, param);	// param: the row id value 
				}); 
			} 
		} 
		 
		options = options || {}; 
		return this.each(function(){ 
			var state = $.data(this, 'treegrid'); 
			if (state){ 
				$.extend(state.options, options); 
			} else { 
				$.data(this, 'treegrid', { 
					options: $.extend({}, $.fn.treegrid.defaults, options) 
				}); 
			} 
			 
			buildGrid(this); 
			request(this); 
		}); 
	}; 
	 
	$.fn.treegrid.defaults = { 
		treeField:null, 
		 
		onBeforeLoad: function(row, param){}, 
		onLoadSuccess: function(row){}, 
		onLoadError: function(){}, 
		onBeforeCollapse: function(row){}, 
		onCollapse: function(row){}, 
		onBeforeExpand: function(row){}, 
		onExpand: function(row){} 
	}; 
})(jQuery);