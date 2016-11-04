(function () {

    // ----------------------
    // LEFT MENU FOR MOBILE
    // ----------------------

    window.addEventListener("DOMContentLoaded", function () {

        var createSlideOutMenu = function (callback) {

             var navigationLinks = [
                $('<a>', {
                    href: '/',
                    html: '<i class="fa fa-home"></i>Home'
                }),
                $('<a>', {
                    href: '/begins',
                    html: '<i class="fa fa-book"></i>Begin Here.html'
                }),
                $('<a>', {
                    href: '/basics',
                    html: '<i class="fa fa-book"></i>Basics.html'
                }),
                $('<a>', {
                    href: '/intermediate',
                    html: '<i class="fa fa-book"></i>Intermediate.html'
                }),
                $('<a>', {
                    href: '/advanced',
                    html: '<i class="fa fa-book"></i>Advanced.html'
                }),
                $('<a>', {
                    href: '/gamelets',
                    html: '<i class="fa fa-book"></i>Gamelets.html'
                }),
                $('<a>', {
                    href: '/snippets',
                    html: '<i class="fa fa-book"></i>Snippets.html'
                })
            ];


            var links = [
                $('<a>', {
                    href: 'http://www.babylonjs.com',
                    target: '_blank',
                    html: '<i class="fa fa-play"></i>babylonjs.com'
                }),
                $('<a>', {
                    href: 'https://github.com/BabylonJS/Babylon.js',
                    target: '_blank',
                    html: '<i class="fa fa-github"></i>Github'
                }),
                $('<a>', {
                    href: 'https://github.com/BabylonJS/Documentation',
                    target: '_blank',
                    html: '<i class="fa fa-code-fork"></i>Contribute'
                }),
                $('<a>', {
                    href: 'http://www.html5gamedevs.com/forum/16-babylonjs',
                    target: '_blank',
                    html: '<i class="fa fa-html5"></i>Forum'
                })
            ];

            $('#menu').append(divSearchBarMobile)
                .append(navigationLinks)
                .append(links);

            callback();

        }(function () {
            var slideout = new Slideout({
                'panel': document.getElementById('wrapper'),
                'menu': document.getElementById('menu'),
                'padding': 256,
                'tolerance': 70,
                'touch': false
            });

            $("#mobilemenu").click(function () {
                slideout.toggle();
            });
        });
    });
})();
