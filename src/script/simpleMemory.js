/*!
 * UPDATES AND DOCS AT: https://github.com/BNDong
 * https://www.cnblogs.com/bndong/
 * @author: BNDong, dbnuo@foxmail.com
 **/
window.cnblogsConfig = {
    cdn: "gitee",
    menuNavList: [
        ["Github", "https://github.com/wjkang"],
        ["Blog", "https://jaycewu.site/"],
        ["掘金", "https://juejin.im/user/57bab5a45bbb500063fd28bc/posts"],
        ["Segmentfault", "https://segmentfault.com/blog/ruoxie"],
        ["简书", "https://www.jianshu.com/u/1e9a94bda7fb"]
    ]
}
if (initCheck()) {
    var sidebarHtml =
        '<div class="container">' +
        '    <div class="menu-wrap optiscroll" id="menuWrap" style="display:none">' +
        '        <nav class="menu">' +
        '            <!-- 个人简介 -->' +
        '            <div class="introduce-box">' +
        '                <div class="introduce-head">' +
        '                    <div class="introduce-via" id="menuBlogAvatar"></div>' +
        '                </div>' +
        '                <div id="introduce"></div>' +
        '            </div>' +
        '            <!-- 导航 -->' +
        '            <div class="nav-title"></div>' +
        '            <div class="icon-list">' +
        '                <ul id="m-nav-list">' +
        '                </ul>' +
        '            </div>' +
        '            <!-- 最新随笔 -->' +
        '            <div class="m-list-title"><span>最新随笔</span></div>' +
        '            <div class="m-icon-list" id="sb-sidebarRecentposts"></div>' +
        '            <!-- 我的标签 -->' +
        '            <div class="m-list-title"><span>我的标签</span></div>' +
        '            <div class="m-icon-list" id="sb-toptags"></div>' +
        '            <!-- 随笔分类 -->' +
        '            <div class="m-list-title"><span>随笔分类</span></div>' +
        '            <div class="m-icon-list" id="sb-classify"></div>' +
        '            <!-- 随笔档案 -->' +
        '            <div class="m-list-title"><span>随笔档案</span></div>' +
        '            <div class="m-icon-list" id="sb-record"></div>' +
        '            <!-- 阅读排行 -->' +
        '            <div class="m-list-title"><span>阅读排行</span></div>' +
        '            <div class="m-icon-list" id="sb-topview"></div>' +
        '            <!-- 推荐排行 -->' +
        '            <div class="m-list-title"><span>推荐排行</span></div>' +
        '            <div class="m-icon-list" id="sb-topDiggPosts"></div>' +
        '            <!-- 自定义列表 -->' +
        '            <span id="menuCustomList"></span>' +
        '        </nav>' +
        '        <button class="close-button" id="close-button">Close Menu</button>' +
        '        <div class="morph-shape" id="morph-shape" data-morph-open="M-7.312,0H15c0,0,66,113.339,66,399.5C81,664.006,15,800,15,800H-7.312V0z;M-7.312,0H100c0,0,0,113.839,0,400c0,264.506,0,400,0,400H-7.312V0z">' +
        '            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 800" preserveAspectRatio="none">' +
        '                <path d="M-7.312,0H0c0,0,0,113.839,0,400c0,264.506,0,400,0,400h-7.312V0z"/>' +
        '            </svg>' +
        '        </div>' +
        '    </div>' +
        '    <button class="menu-button" id="open-button">MENU</button>' +
        '    <div class="content-wrap" id="content-wrap"></div><!-- /content-wrap -->' +
        '</div>' +
        '<div class="main-header">' +
        '    <canvas id="notHomeTopCanvas" style=" position: absolute;margin: auto;width: 100%;height: 100%;top: 0;bottom: 0;left: 0;right: 0;"></canvas>' +
        '    <div class="vertical">' +
        '        <div class="main-header-content inner">' +
        '            <link href="https://fonts.googleapis.com/css?family=Playball" rel="stylesheet">' +
        '            <h1 class="page-title" style="font-family: \'Playball\', cursive;" id="homeTopTitle"></h1>' +
        '            <h2 class="page-description" id="hitokoto"></h2>' +
        '            <h3 class="page-author" id="hitokotoAuthor"></h3>' +
        '        </div>' +
        '    </div>' +
        '    <a class="scroll-down" href="javascript:void(0);" data-offset="-45">' +
        '        <span class="hidden">Scroll Down</span>' +
        '        <i class="scroll-down-icon iconfont icon-fanhui"></i>' +
        '    </a>' +
        '</div>' +
        '<div id="loading"></div>' +
        '<div id="bottomProgressBar"></div>' +
        '<div id="rightMenu"></div>';

    window.cnblogsConfigDefault = {
        GhUserName: 'wjkang',
        GhRepositories: 'Cnblogs-Theme-SimpleMemory',
        GhVersions: 'v1.1.2',
        GiteeUserName: 'jaycewu',
        GiteeRepositories: 'cnblogs-theme-simplememory',
        blogUser: "若邪",
        blogAvatar: "https://pic.cnblogs.com/avatar/738362/20161029152559.png",
        blogStartDate: "2015-03-31",
        menuCustomList: {},
        menuNavList: [],
        webpageTitleOnblur: "页面崩了！",
        webpageTitleOnblurTimeOut: 500,
        webpageTitleFocus: "(*´∇｀*) 咦！又好了！",
        webpageTitleFocusTimeOut: 1000,
        webpageIcon: "https://jaycewu.site/favicon.png",
        fontIconExtend: "",
        progressBar: {
            id: 'top-progress-bar',
            color: '#77b6ff',
            height: '2px',
            duration: 0.2
        },
        loading: {
            rebound: {
                tension: 16,
                friction: 5
            },
            spinner: {
                id: 'spinner',
                radius: 90,
                sides: 3,
                depth: 4,
                colors: {
                    background: '#f0f0f0',
                    stroke: '#272633',
                    base: null,
                    child: '#272633'
                },
                alwaysForward: true,
                restAt: 0.5,
                renderBase: false
            }
        },
        homeTopAnimationRendered: true,
        homeTopAnimation: {
            radius: 15,
            density: 0.2,
            color: 'rgba(255,255,255, .2)',
            clearOffset: 0.3
        },
        essayTopAnimationRendered: true,
        essayTopAnimation: {
            triW: 14,
            triH: 20,
            neighbours: ["side", "top", "bottom"],
            speedTrailAppear: .1,
            speedTrailDisappear: .1,
            speedTriOpen: 1,
            trailMaxLength: 30,
            trailIntervalCreation: 100,
            delayBeforeDisappear: 2,
            colors: [
                '#D9B6D4', '#A29AC3',
                '#9091BF', '#9394C2',
                '#FBCACE', '#7E84B8',
                '#FCD5CE', '#6C79B5'
            ]
        },
        bgAnimationRendered: true,
        backgroundAnimation: {
            colorSaturation: "60%",
            colorBrightness: "50%",
            colorAlpha: 0.5,
            colorCycleSpeed: 5,
            verticalPosition: "random",
            horizontalSpeed: 200,
            ribbonCount: 3,
            strokeSize: 0,
            parallaxAmount: -0.2,
            animateSections: true
        },
        homeTopImg: [
            "https://jaycewu.gitee.io/cnblogs-theme-simplememory/img/home_top_bg.jpg"
        ],
        homeBannerText: "",
        essayTopImg: [
        ],
        essayCodeHighlightingType: 'highlightjs',
        essayCodeHighlighting: 'monokai-sublime',
        essaySuffix: {
            aboutHtml: '',
            copyrightHtml: '',
            supportHtml: ''
        },
        bottomBlogroll: [],
        bottomText: {
            icon: "❤️",
            left: "面朝大海",
            right: "春暖花开"
        },
        consoleList: [],
        themeAuthor: false,
        cdn: 'jsdelivr'
    };

    window.cnblogsConfig = $.extend(true, window.cnblogsConfigDefault, window.cnblogsConfig);

    // set sidebar html
    var url = window.location.href, tmp = [];
    tmp = url.split("/");
    var user = tmp[3];
    var navListHtml = '<li><a href="https://www.cnblogs.com/' + user + '/" target="_self">首页</a></li>' +
        '<li><a href="https://msg.cnblogs.com/send/' + user + '" target="_blank">联系</a></li>' +
        '<li><a href="https://www.cnblogs.com/' + user + '/rss" target="_blank">订阅</a></li>' +
        '<li><a href="https://i.cnblogs.com/" target="_blank">管理</a></li>';

    var menuNavList = window.cnblogsConfig.menuNavList;
    if (menuNavList.length > 0) {
        $.each(menuNavList, function (i) {
            navListHtml += '<li><a href="' + (menuNavList[i][1]) + '" target="_blank">' + (menuNavList[i][0]) + '</a></li>';
        });
    }

    $('#blog-news').prepend(sidebarHtml);
    $('#m-nav-list').append(navListHtml);

    // set userName
    if (window.cnblogsConfig.blogUser === "") window.cnblogsConfig.blogUser = user;

    // start cache
    $.ajaxSetup({ cache: true });

    // load loadingJs
    $.getScript(getJsDelivrUrl('loading.js'), function () {

        // Loading start
        pageLoading.initRebound();
        pageLoading.initSpinner();
        pageLoading.spinner.init(pageLoading.spring, true);

        $.getScript(getJsDelivrUrl('jquery.mCustomScrollbar.min.js'), function () {
            $.getScript(getJsDelivrUrl('require.min.js'), function () {
                $.getScript(getJsDelivrUrl('config.js'), function () {
                    var staticResource = [
                        'optiscroll', 'ToProgress', 'rotate',
                        'snapSvg', 'classie', 'main4', 'tools'];
                    require(staticResource, function () {
                        require(['base'], function () {
                            (new Base).init();
                        });
                    });
                });
            });
        });
    });
} else {
    $('a[name="top"]').text("SimpleMemory：基础配置有误，请阅读文档，检查配置！").css({
        'display': 'block',
        'text-align': 'center',
        'padding-top': '45vh',
        'font-size': '20px',
        'color': '#333'
    });
}

// init check
function initCheck() {

    // check base theme
    var baseStyle = $('#mobile-style').attr('href');
    if (typeof baseStyle != 'undefined') {
        var bt = baseStyle.split('/');
        if ($.inArray('SimpleMemory', bt) !== -1) {
            return true;
        }
    }
    return false;
}

// get file url
function getJsDelivrUrl(file, directory) {
    file = setFileNameMin(file, directory);
    if (window.cnblogsConfig.cdn === "gitee") {
        return 'https://' + (window.cnblogsConfig.GiteeUserName) + '.gitee.io/' + (window.cnblogsConfig.GiteeRepositories) + '/' + (file ? file : '');
    } else {
        return 'https://cdn.jsdelivr.net/gh/' + (window.cnblogsConfig.GhUserName) + '/' + (window.cnblogsConfig.GhRepositories) + '@' + (window.cnblogsConfig.GhVersions) + '/' + (file ? file : '');
    }
}

// optimization file name
function setFileNameMin(file, directory) {
    if (typeof file == 'undefined') return '';
    var suffix = null, fileArr = file.split('.');
    if (fileArr.length > 0 && $.inArray(fileArr[(fileArr.length - 1)], ['js', 'css']) !== -1) {
        suffix = fileArr.pop();
        switch (suffix) {
            case 'js': directory = 'script'; break;
            case 'css': directory = 'style'; break;
        }
    } else {
        if (typeof directory == 'undefined') return '';
        switch (directory) {
            case 'js': directory = 'script'; break;
            case 'css': directory = 'style'; break;
        }
    }
    file.search('.min') === -1 && window.cnblogsConfig.cdn !== "gitee" && fileArr.push('min');
    suffix != null && fileArr.push(suffix);
    return (typeof directory !== 'undefined' ? ('src/' + directory + '/' + fileArr.join('.')) : (fileArr.join('.')));
}