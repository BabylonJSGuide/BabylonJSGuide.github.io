(function () {

    // ----------------------
    // LEFT MENU FOR MOBILE
    // ----------------------

    window.addEventListener("DOMContentLoaded", function () {

        var createSlideOutMenu = function (callback) {
             var divSearchBarMobile =
                $('<div>', {
                    class: 'searchbar-mobile searchbar',
                }); 

             var navigationLinks = [
                $('<a>', {
                    href: '/',
                    html: '<i class="fa fa-home"></i>Home'
                }),
                $('<a>', {
                    href: '/begins.html',
                    html: '<i class="fa fa-book"></i>Begin Here'
                }),
                $('<a>', {
                    href: '/basics.html',
                    html: '<i class="fa fa-book"></i>Basics'
                }),
                $('<a>', {
                    href: '/intermediate.html',
                    html: '<i class="fa fa-book"></i>Intermediate'
                }),
                $('<a>', {
                    href: '/advanced.html',
                    html: '<i class="fa fa-book"></i>Advanced'
                }),
                $('<a>', {
                    href: '/gamelets.html',
                    html: '<i class="fa fa-book"></i>Gamelets'
                }),
                $('<a>', {
                    href: '/snippets.html',
                    html: '<i class="fa fa-book"></i>Snippets'
                }),
                $('<a>', {
                    href: '/indx.html',
                    html: '<i class="fa fa-book"></i>Index'
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