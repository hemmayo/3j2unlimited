var $cinnabar="#E64343",$mineShaft="#302D2D",$dustyGray="#A09C9C",$alto="#DEDEDE",$concrete="#F3F2F2",$white="#FFFFFF",$window=$(window),win_height_padded=1.1*$window.height();function formSubmit(e){(e=document.getElementById(e)).submit()}function showForm(e){$(".jobs-container").slideDown(),$("#jobs .selected-option").html(e),$("#jobs #jobs_form_position").val(e)}function isValidPhone(e){return!!e.val().match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/)||(e.parent().prev().text("Incorrect phone number"),!1)}function isValidEmailAddress(e){var t=e.val();return!!/^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i.test(t)||(e.parent().prev().text("Incorrect email address"),!1)}function isValidName(e){var t=e.val();return!!(isNaN(t)&&t.length>3)||(e.parent().prev().text("Incorrect name"),!1)}function checkJobs(){var e=isValidPhone($("#jobs_form_phone")),t=isValidEmailAddress($("#jobs_form_email")),n=isValidName($("#jobs_form_name"));return!!(e&&t&&n)}function checkForm(){var e=document.getElementById("contact_form_username"),t=e.value,n=!1;e.addEventListener("click",function(){e.placeholder="",e.style.cursor="initial",e.value=t,e.className=""}),t?(e.className="",n=!0):(e.placeholder="Fill your Name",e.style.cursor="pointer",e.className="formError",n=!1);var i=document.getElementById("contact_form_subject"),o=i.value,a=!1;i.addEventListener("click",function(){i.placeholder="",i.style.cursor="initial",i.value=o,i.className=""}),o?(i.className="",a=!0):(i.placeholder="Fill Subject",i.style.cursor="pointer",i.className="formError",a=!1);var s=document.getElementById("contact_form_email"),l=s.value,c=!1;s.addEventListener("click",function(){s.placeholder="",s.style.cursor="initial",s.value=l,s.className=""}),l?0==s.checkValidity()?(s.style.cursor="pointer",s.value="Check your email",s.className="formError",c=!1):(s.className="",c=!0):(s.placeholder="Fill your Email",s.style.cursor="pointer",s.className="formError",c=!1);var r=document.getElementById("contact_form_phone"),u=r.value,d=!1;r.addEventListener("click",function(){r.placeholder="",r.style.cursor="initial",r.value=u,r.className=""}),u?(r.className="",d=!0):(r.placeholder="Fill your Phone",r.style.cursor="pointer",r.className="formError",d=!1);var m=document.getElementById("contact_form_msg"),h=m.value,F=!1;m.addEventListener("click",function(){m.placeholder="",m.style.cursor="initial",m.value=h,m.className=""}),h?(m.className="",F=!0):(m.placeholder="Share your thoughts",m.style.cursor="pointer",m.className="formError",F=!1),n&&a&&c&&d&&F&&document.getElementById("contact-menu").submit()}function submitNewsletter(){var e=document.getElementById("mce-EMAIL");e.required=!0;var t=e.value;if(e.addEventListener("click",function(){e.placeholder="",e.style.cursor="initial",e.value=t}),!t)return e.placeholder="Email cannot be empty",void(e.style.cursor="pointer");0==e.checkValidity()?(e.style.cursor="pointer",e.value="Invalid email"):document.getElementById("mc-embedded-subscribe-form").submit()}function setCookie(e,t,n){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3);var o=e+"="+t+";expires="+i.toGMTString()+";path=/";document.cookie=o}$(".Clients img").one("load",function(){$(this).parent().css({height:this.height/2})}).each(function(){this.complete&&$(this).load()}),$(document).ready(function(){AOS.init({offset:100,duration:600,easing:"ease-out",delay:100,disable:"mobile",once:!0});var e=function(){$ClientsElementWidth=$(".Clients").find(".element").css("width"),window.innerWidth<1580&&$(".Clients").find(".element").css({height:$ClientsElementWidth})};e(),$(window).resize(function(){$(".Clients img").each(function(){$(this).parent().css({height:this.height/2})}),e()}),$('a[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if((e=e.length?e:$("[name="+this.hash.slice(1)+"]")).length)return $("html, body").animate({scrollTop:e.offset().top},1e3),!1}}),$(document).ready(function(){$(".js-floating-menu").mouseover(function(){$(".js-floating-menu").hasClass("closed")||($(".js-floating-menu").removeClass("collapsed"),$(".js-floating-menu-btn").addClass("active"))}),$(".js-floating-menu").mouseleave(function(){$(".js-floating-menu").addClass("collapsed"),$(".js-floating-menu-btn").removeClass("active"),$(".js-floating-menu").removeClass("closed")}),$(".js-floating-menu-btn").click(function(){$(this).toggleClass("active"),$(".js-floating-menu").toggleClass("collapsed closed"),$(".js-floating-menu-btn").toggleClass("active")}),$(".FloatingMenu-menu-item a").click(function(){var e=$(this).text();$(".selected-item p").first().text(e)})});const t=window.location.pathname.substr(window.location.pathname.lastIndexOf("/")+1);$("header .menu > li").each(function(){$("a",this).attr("href")==t&&($(this).addClass("active"),$(this).siblings().removeClass("active"))}),$(".menu-btn").click(function(){$(this).toggleClass("active"),$(this).parent().find(".menu").toggleClass("expanded")});var n=document.querySelector(".Header:not(.game-header)"),i=window.scrollY;n&&window.addEventListener("scroll",function(e){var t=window.scrollY;t>90?n.classList.add("sticky"):n.classList.remove("sticky"),t>180&&(t>i?n.classList.remove("active"):t<i&&n.classList.add("active"),i=t)});var o=0;function a(){screen.width>1050?($(".testimonial .subtitle").each(function(){$(this).height()>o&&(o=$(this).height())}),$(".testimonial .subtitle").height(o)):$(".testimonial .subtitle").height("auto")}function s(e){var t,n=0,i=0,o=new Array;$(e).each(function(){if(t=$(this),$(t).height("auto"),topPostion=t.position().top,i!=topPostion){for(currentDiv=0;currentDiv<o.length;currentDiv++)o[currentDiv].height(n);o.length=0,i=topPostion,n=t.height(),o.push(t)}else o.push(t),n=n<t.height()?t.height():n;for(currentDiv=0;currentDiv<o.length;currentDiv++)o[currentDiv].height(n)})}if($(window).resize(function(){a()}),a(),$(window).load(function(){s(".element > .content > .text > .title")}),$(window).resize(function(){s(".element > .content > .text > .title")}),"function"==typeof Waypoint)new Waypoint({element:document.querySelector(".Testimonials"),offset:$(".Testimonials").outerHeight(),handler:function(e){"down"==e&&$("[onScrollCount]").each(function(){$counter=$(this),$(this).easyPieChart({easing:"easeOutBack",animate:3e3,onStep:function(e,t,n){$(this.el).html(Math.round(n))}}),$(this).data("easyPieChart").update($(this).data("value"))})}})}),$(document).ready(function(){$(".MainBanner .title").addClass("title-animation"),$(".MainBanner .subtitle").addClass("subtitle-animation"),$(".MainBanner .description").addClass("description-animation"),$(".MainBanner .overtitle").addClass("overtitle-animation"),$(".MainBanner .arrow-down").addClass("arrow-down-showup-animation")}),$("#jobs .Select").click(function(){$(this).toggleClass("is-expanded")}),$("#jobs .select-option").click(function(){var e=$(this).html();$("#jobs .selected-option").html(e),$("#jobs #jobs_form_position").val(e)}),$("#jobs input[type='file']").on("change",function(){$("#jobs .uploaded-files").empty();var e=$(this),t=e[0].files.length,n=e[0].files,i="";if(t>0){for(var o=0;o<t;o++){i+="<li class='uploaded-file'>"+n[o].name+"</li>"}$("#jobs .uploaded-files").append(i)}}),$("#jobs label input").on("click",function(){$(this).parent().prev().text("")}),$("#jobs .submit-link").on("click",function(){checkJobs()&&$("#jobs").submit()}),$(document).ready(function(){var e=$("#Video"),t=40;function n(){var n=$(window).scrollTop()+t,i=$(window).scrollTop()+$(window).height()-t;e.each(function(e,t){var o=$(this).offset().top,a=$(this).height()+o;n<a&&i>o?$(this).get(0).play():$(this).get(0).pause()})}$(document).on("scroll",n),$(window).resize(n())}),$(document).ready(function(){var e=document.querySelector(".notification--cookie"),t=document.getElementById("agree"),n=document.getElementById("disagree");t&&(t.addEventListener("click",function(){e.classList.add("hidden"),setCookie("cookie_status","allow",365)}),n.addEventListener("click",function(){e.classList.add("hidden");for(var t=document.cookie.split("; "),n=0;n<t.length;n++)for(var i=window.location.hostname.split(".");i.length>0;){var o=encodeURIComponent(t[n].split(";")[0].split("=")[0])+"=; expires=Thu, 01-Jan-1970 00:00:01 GMT; domain="+i.join(".")+" ;path=",a=location.pathname.split("/");for(document.cookie=o+"/";a.length>0;)document.cookie=o+a.join("/"),a.pop();i.shift()}setCookie("cookie_status","deny",1)}))});