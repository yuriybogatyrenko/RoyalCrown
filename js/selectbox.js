/*
 * jQuery SelectBox Styler v1.0.1
 * http://dimox.name/styling-select-boxes-using-jquery-css/
 *
 * Copyright 2012 Dimox (http://dimox.name/)
 * Released under the MIT license.
 *
 * Date: 2012.10.07
 *
 */

(function($) {
	$.fn.selectbox = function() {
		$(this).each(function() {
			var select = $(this);
			if (select.prev('span.selectbox').length < 1) {
				function doSelect() {
					var option = select.find('option');
					var optionSelected = option.filter(':selected');
					var optionText = option.filter(':first').text();
					var optionText_FIRST = option.filter(':first').text();
					if (optionSelected.length) optionText = optionSelected.text();
					var ddlist = '';
					for (i = 0; i < option.length; i++) {
						var selected = '';
						var round = '';
						var disabled = ' class="disabled"';
						if (option.eq(i).is(':selected')) selected = ' class="selected sel"';
						if (option.eq(i).is(':disabled')) selected = disabled;

						if(select.hasClass('select_js_color')) {
							var color = option.eq(i).attr('data-color');
							if (typeof color !== typeof undefined && color !== false) {
								round = '<span style="background-color:'+color+'" class="color_round"></span>';
							}
						}
						var trigger_class = select.attr('data-trigger-class');
						var trg = '<b class="trigger"><i class="arrow"></i></b>';
						if (typeof trigger_class !== typeof undefined && trigger_class !== false) {
							trg = '<b class="trigger '+trigger_class+'"><i class="arrow"></i></b>';
						}

						ddlist += '<li' + selected + '>'+ option.eq(i).text() + round +'</li>';
					}
					var selectbox =
						$('<span class="selectbox" style="display:inline-block;position:relative">'+
							'<div class="select" style="float:left;position:relative;z-index:5"><div class="text">' + optionText + '</div>'+
							trg+
							'</div>'+
							'<div class="dropdown" style="position:absolute;z-index:9999;overflow:auto;overflow-x:hidden;list-style:none">'+
							'<ul>' + ddlist + '</ul>'+
							'</div>'+
							'</span>');
					select.before(selectbox).css({position: 'absolute', top: -9999});
					var divSelect = selectbox.find('div.select');
					var divText = selectbox.find('div.text');
					var dropdown = selectbox.find('div.dropdown');
					var li = dropdown.find('li');
					var selectHeight = selectbox.outerHeight();
					if (dropdown.css('left') == 'auto') dropdown.css({left: 0});
					if (dropdown.css('top') == 'auto') dropdown.css({top: selectHeight});
					var liHeight = li.outerHeight();
					var position = dropdown.css('top');
					dropdown.hide();
					selectbox.removeClass('select-focused');
					/* РїСЂРё РєР»РёРєРµ РЅР° РїСЃРµРІРґРѕСЃРµР»РµРєС‚Рµ */
					divSelect.click(function() {
						/* СѓРјРЅРѕРµ РїРѕР·РёС†РёРѕРЅРёСЂРѕРІР°РЅРёРµ */
						var topOffset = selectbox.offset().top;
						var bottomOffset = $(window).height() - selectHeight - (topOffset - $(window).scrollTop());
						if (bottomOffset < 0 || bottomOffset < liHeight * 6)	{
							dropdown.height('auto').css({top: 'auto', bottom: position});
							if (dropdown.outerHeight() > topOffset - $(window).scrollTop() - 20 ) {
								dropdown.height(Math.floor((topOffset - $(window).scrollTop() - 20) / liHeight) * liHeight);
							}
						} else if (bottomOffset > liHeight * 6) {
							dropdown.height('auto').css({bottom: 'auto', top: position});
							if (dropdown.outerHeight() > bottomOffset - 20 ) {
								dropdown.height(Math.floor((bottomOffset - 20) / liHeight) * liHeight);
							}
						}
						$('span.selectbox').css({zIndex: 1}).removeClass('focused select-focused');
						selectbox.css({zIndex: 2});
						if (dropdown.is(':hidden')) {
							$('div.dropdown:visible').hide();
							dropdown.show();
							selectbox.addClass('select-focused');
						} else {
							dropdown.hide();
							selectbox.removeClass('select-focused');
						}
						return false;
					});
					/* РїСЂРё РЅР°РІРµРґРµРЅРёРё РєСѓСЂСЃРѕСЂР° РЅР° РїСѓРЅРєС‚ СЃРїРёСЃРєР° */
					li.hover(function() {
						$(this).siblings().removeClass('selected');
					});
					var selectedText = li.filter('.selected').text();
					/* РїСЂРё РєР»РёРєРµ РЅР° РїСѓРЅРєС‚ СЃРїРёСЃРєР° */
					li.filter(':not(.disabled)').click(function() {
						var liText = $(this).text();
						if ( selectedText != liText ) {
							$(this).addClass('selected sel').siblings().removeClass('selected sel');
							option.removeAttr('selected').eq($(this).index()).prop('selected', true);
							selectedText = liText;
							if(select.hasClass('select_js_color')) {
								var span_color = $(this).find('span').attr('style');
								divText.text(optionText_FIRST).append('<span class="color_round" style="'+span_color+'"></span>');
							} else {
								divText.text(liText);
							}
							select.change();

							if(liText != optionText_FIRST) {
								selectbox.addClass('select-changed');
							} else {
								selectbox.removeClass('select-changed');
							}
						}
						dropdown.hide();
						selectbox.removeClass('select-focused');
					});
					dropdown.mouseout(function() {
						dropdown.find('li.sel').addClass('selected');
					});
					/* С„РѕРєСѓСЃ РЅР° СЃРµР»РµРєС‚Рµ */
					select.focus(function() {
						$('span.selectbox').removeClass('focused');
						selectbox.addClass('focused');
					})
						/* РјРµРЅСЏРµРј СЃРµР»РµРєС‚ СЃ РєР»Р°РІРёР°С‚СѓСЂС‹ */
						.keyup(function() {
							divText.text(option.filter(':selected').text());
							li.removeClass('selected sel').eq(option.filter(':selected').index()).addClass('selected sel');
						});
					/* РїСЂСЏС‡РµРј РІС‹РїР°РґР°СЋС‰РёР№ СЃРїРёСЃРѕРє РїСЂРё РєР»РёРєРµ Р·Р° РїСЂРµРґРµР»Р°РјРё СЃРµР»РµРєС‚Р° */
					$(document).on('click', function(e) {
						if (!$(e.target).parents().hasClass('selectbox')) {
							dropdown.hide().find('li.sel').addClass('selected');
							selectbox.removeClass('focused').removeClass('select-focused');
						}
					});
				}
				doSelect();
				// РѕР±РЅРѕРІР»РµРЅРёРµ РїСЂРё РґРёРЅР°РјРёС‡РµСЃРєРѕРј РёР·РјРµРЅРµРЅРёРё
				select.on('refresh', function() {
					select.prev().remove();
					doSelect();
				})
			}
		});
	}
})(jQuery)