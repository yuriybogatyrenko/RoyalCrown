var body = $('body');
var header_type = 'static';

$(document).ready(function () {
    // $('head').append('<script src="http://q.gamm.biz/pp/PP.js"></script>');
    // var mhp = $(".header__popup-placeholder").offset().top,
    var mhh = $(".main_header_content").outerHeight();

    $(document).on('click', '[data-callPopup]', function (e) {
        var pop = $($(this).attr('data-callPopup'));

        pop.fadeIn(300);
        e.preventDefault()
    });

    $(document).on("click", "[data-popup_open]", function (e) {
        var this_data = $(this).data("popup_open"),
            delay = 400;

        // $(".header_standard_popup").stop().slideUp(delay);
        $(".header_standard_popup").css('display', "none")
        // $("[data-popup="+this_data+"]").stop().slideToggle(delay);


        if ($(this).hasClass("active")) {
            $(".main_header").removeClass("popup_open");
            body.removeClass("ovh");
            // setTimeout(function(){
            $(".main_section_header_item").removeClass("active");
            // },delay);
        } else {
            $(".main_section_header_item").removeClass("active");
            $(this).addClass("active");
            $(".main_header").addClass("popup_open");
            body.addClass("ovh");
            $("[data-popup=" + this_data + "]").css({display: 'block'});
        }
        e.preventDefault();
    });

    setTimeout(function () {
        header_position();
        abs_footer();
    }, 500)

    function abs_footer() {
        $('.main_wrapper').css({paddingBottom: $('.main_footer').outerHeight()})
    }


    function header_position() {
        if ($('.main_wrapper').hasClass('inside_page'))
            return
        var header_width = $(".main_section_header").outerWidth(),
            header_ml = header_width / 2;
        $(".main_section_header").css("margin-right", -header_ml);
    }

    $(document).on("click", ".promo_code_section .close", function (e) {
        /*var h = $('.promo_code_section').outerHeight();
         if ($('.main_wrapper').hasClass('inside_page')) {
         $('.main_header').animate({paddingTop: 0}, 300);
         } else {
         var pt = parseInt($('.main_header .logo_section').css("padding-top"));
         $('.main_header .logo_section').animate({paddingTop: pt - h}, 300);
         }
         $(".promo_code_section").slideUp(300);
         setTimeout(function () {
         mhp = mhp - h,
         mhh = $(".main_header_content").outerHeight();
         }, 600);*/

        $(this).closest('.promo_code_section').slideUp(300);
    });


    $(document).on("click", ".header_popup_close", function (e) {
        var delay = 400;
        // $(this).closest(".header_standard_popup").stop().slideUp(delay);
        $(this).closest(".header_standard_popup").css({display: 'none'});
        $(".main_header").toggleClass("popup_open");
        $("body").toggleClass("ovh");
        // setTimeout(function(){
        $(".main_section_header_item").removeClass("active");
        // },delay);
        e.preventDefault();
    });

    $(document).on("click", ".accordion_toggle", function (e) {
        var delay = 400,
            ac_toggle = $(this),
            ac_item = $(this).closest(".accordion_item");
        ac_toggle.closest(".accordion_item").find(".accordion_content").stop().slideToggle(delay);
        if (ac_item.hasClass("open")) {
            setTimeout(function () {
                ac_item.removeClass("open");
            }, delay);
        } else {
            ac_item.addClass("open");
        }
        e.preventDefault();
    });

    if ($("select").length > 0) {
        $('select:not(.chosen-select)').selectbox();
    }

    $(document).on("click", ".product_grid_content .toggle_visibility", function (e) {
        if ($(".product_grid_content").hasClass("filter_hidden")) {
            $(".product_grid_content").addClass("animation");
            $(".product_grid_content").addClass("opening");
            setTimeout(function () {
                $(".product_grid_content").removeClass("filter_hidden");
                $(".product_grid_content").removeClass("animation");
            }, 500);
        } else {
            $(".product_grid_content").removeClass("opening");
            $(".product_grid_content").addClass("animation");
            setTimeout(function () {
                $(".product_grid_content").removeClass("animation");
                $(".product_grid_content").addClass("filter_hidden");
            }, 500);
        }
        e.preventDefault();
    });

    if ($('input[data-inputmask]').length > 0) {
        $('input[data-inputmask]').mask("+7 999 999 99 99");
    }

    $(document).on("click", ".news_item_to_read ", function (e) {
        $(".article_popup").fadeIn(400);
        e.preventDefault();
    });

    $(document).on("click", ".standard_popup .close, .standard_popup .overlay_popup", function (e) {
        $(".standard_popup").fadeOut(400);
        e.preventDefault();
    });

    $(document).on("click", ".search_section_close", function (e) {
        $(".main_header_content .search_section_wrap").fadeOut(400);
        $('.main_header').removeClass('search_opened');
        e.preventDefault();
    });

    $(document).on("click", ".search_open", function (e) {
        $(".search_section_wrap").fadeIn(400);
        $('.search_section_wrap input').focus();
        $('.main_header').addClass('search_opened');
        search_plate_pos();
        e.preventDefault();
    });
    var search_plate_timeout;

    function search_plate_pos() {
        var h_a_w_pos = $(".header_absolute_wrapper").offset().left,
            s_o_pos = $('.search_open').find(".icon").offset().left,
            paddin_left = s_o_pos - h_a_w_pos;


        $(".search_section_wrap").find(".search_button").css("margin-left", paddin_left);

        setTimeout(function () {
            $(".search_section_wrap").find(".search_button").animate({"margin-left": 0});
        }, 300);
    }

    function header_determination() {
        var main_wrapper = $(".main_wrapper");
        if ((!body.hasClass("min_header")) && ($(window).scrollTop() >= mhp) && !body.hasClass('inside_page') && header_type != 'fixed') {
            body.addClass('min_header');
            header_type = 'fixed';
        } else if (body.hasClass('min_header') && ($(window).scrollTop() < mhp) && !body.hasClass('inside_page') && header_type != 'static') {
            body.removeClass('min_header');
            header_type = 'static';
        } else if (body.hasClass('inside_page') && ($(window).scrollTop() >= mhp) && header_type != 'fixed') {
            body.addClass('inside_fixed');
            header_type = 'fixed';
        } else if (body.hasClass('inside_page') && ($(window).scrollTop() < mhp) && header_type != 'static') {
            body.removeClass('inside_fixed');
            header_type = 'static';
        }

        // $('.header_popup_wrapper').css({top: $('.header__popup-placeholder').offset().top});


        // console.log(mhh)
        // console.log(mhp)
    }

    header_determination();
    $(document).scroll(function () {
        header_determination();
    });


    $(".product_calculator .calc_btn").click(function () {
        var need_block = $(this).closest(".product_calculator").find(".result");
        text_num = need_block.text(),
            num = parseInt(text_num);
        if ($(this).hasClass("minus") && !(need_block.hasClass("negative")) && (text_num < 1)) {
            return false;

        } else if ($(this).hasClass("minus")) {
            num = num - 1;
        } else if ($(this).hasClass("plus")) {
            num = num + 1;
        }
        need_block.text(num);
    });

    $(window).resize(function () {
        header_position();
        abs_footer();
    })

});

if (ifBrowser("safari") == true) {
    $("body").addClass("safari_browser");
}

function ifBrowser(obj) {
    var none = obj["none"] || "none";

    function cBrowser() {
        var ua = navigator.userAgent;

        var bName = function () {
            if (ua.search(/MSIE/) > -1) return "ie";
            if (ua.search(/Firefox/) > -1) return "firefox";
            if (ua.search(/Opera/) > -1) return "opera";
            if (ua.search(/Chrome/) > -1) return "chrome";
            if (ua.search(/Safari/) > -1) return "safari";
            if (ua.search(/Konqueror/) > -1) return "konqueror";
            if (ua.search(/Iceweasel/) > -1) return "iceweasel";
            if (ua.search(/SeaMonkey/) > -1) return "seamonkey";
        }();
        var version = function (bName) {
            switch (bName) {
                case "ie" :
                    return (ua.split("MSIE ")[1]).split(";")[0];
                    break;
                case "firefox" :
                    return ua.split("Firefox/")[1];
                    break;
                case "opera" :
                    return ua.split("Version/")[1];
                    break;
                case "chrome" :
                    return (ua.split("Chrome/")[1]).split(" ")[0];
                    break;
                case "safari" :
                    return (ua.split("Version/")[1]).split(" ")[0];
                    break;
                case "konqueror" :
                    return (ua.split("KHTML/")[1]).split(" ")[0];
                    break;
                case "iceweasel" :
                    return (ua.split("Iceweasel/")[1]).split(" ")[0];
                    break;
                case "seamonkey" :
                    return ua.split("SeaMonkey/")[1];
                    break;
            }
        }(bName);
        return bName;
        //return [bName,bName + version.split(".")[0],bName + version]

    }

    var current_browser = cBrowser();
    for (var key in obj) {
        var trg = key.toLowerCase();
        if (trg.indexOf(current_browser[2]) > -1) return obj[key];
        else if (trg.indexOf(current_browser[1]) > -1) return obj[key];
        else {
            var nsymbol = trg.charAt(trg.indexOf(current_browser[0]) + current_browser[0].length);
            if (trg.indexOf(current_browser[0]) > -1 && (nsymbol == " " || nsymbol == "")) return obj[key];
        }
        ;
    }

    if (cBrowser() == obj) {
        return true;
    } else {
        return false;
    }

    // return none;
}

var BrowserDetect = {
    init: function () {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent)
            || this.searchVersion(navigator.appVersion)
            || "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";
    },
    searchString: function (data) {
        for (var i = 0; i < data.length; i++) {
            var dataString = data[i].string;
            var dataProp = data[i].prop;
            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if (dataString) {
                if (dataString.indexOf(data[i].subString) != -1)
                    return data[i].identity;
            }
            else if (dataProp)
                return data[i].identity;
        }
    },
    searchVersion: function (dataString) {
        var index = dataString.indexOf(this.versionSearchString);
        if (index == -1) return;
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    },
    dataBrowser: [
        {
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        },
        {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        },
        {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        },
        {
            prop: window.opera,
            identity: "Opera"
        },
        {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        },
        {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        },
        {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        },
        {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        },
        {		// for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        },
        {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        },
        {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        },
        { 		// for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }
    ],
    dataOS: [
        {
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        },
        {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        },
        {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        },
        {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }
    ]
};


BrowserDetect.init();

/*if (BrowserDetect.subString == "Firefox") {
 $("body").addClass('windows_os');
 } else if (BrowserDetect.versionSearchString == "Windows") {

 }*/

if ($('#countdown1').length > 0) {

    var note = $('#countdown1'),
        ts = new Date(2012, 0, 1),
        newYear = false;

    tr = new Date();
    tr.setDate(tr.getDate() + 1);
    tr.setHours(0, 0, 0);
    ts = tr.getTime();

    $('#countdown').countdown({
        timestamp: ts,
        callback: function (days, hours, minutes, seconds) {

            var message = "<div class='wrap'>";
            if (hours < 10) hours = '0' + hours;
            message += "<div class='item'><span class='time_num'>" + hours + "<span class='time_text'>ч</span></span> <span class='sep'>:</span></div>";
            if (minutes < 10) minutes = '0' + minutes;
            message += "<div class='item'><span class='time_num'>" + minutes + "<span class='time_text'>м</span></span><span class='sep'>:</span></div>";
            if (seconds < 10) seconds = '0' + seconds;
            message += "<div class='item'><span class='time_num'>" + seconds + "<span class='time_text'>c</span></span></div>";
            message += '</div>';
            note.html(message);
        }
    });
}