jQuery(document).ready(function(a){var b,c,d,e;if(jQuery(".comment-respond .comment-reply-title").length&&!jQuery(".comment-respond .comment-reply-title").parents(".woocommerce-tabs").length){for(b=avadaCommentVars.title_style_type.split(" "),c="","",e=0;e<b.length;e++)c+=" sep-"+b[e];c.indexOf("underline")>-1&&c,jQuery("body").hasClass("rtl")?jQuery(".comment-respond .comment-reply-title").addClass("title-heading-right"):jQuery(".comment-respond .comment-reply-title").addClass("title-heading-left"),d=' style="margin-top:'+avadaCommentVars.title_margin_top+";margin-bottom:"+avadaCommentVars.title_margin_bottom+';"',jQuery(".comment-respond .comment-reply-title").wrap('<div class="fusion-title title fusion-title-size-three'+c+'"'+d+"></div>"),-1==c.indexOf("underline")&&jQuery(".comment-respond .comment-reply-title").parent().append('<div class="title-sep-container"><div class="title-sep'+c+' "></div></div>')}jQuery(".textarea-comment").each(function(){jQuery(this).css("max-width",jQuery("#content").width())}),jQuery(window).on("resize",function(){jQuery(".textarea-comment").each(function(){jQuery(this).css("max-width",jQuery("#content").width())})})});