(function () {

    // ----------------------
    // LEFT MENU FOR MOBILE
    // ----------------------

    window.addEventListener("DOMContentLoaded", function () {

        var createSlideOutMenu = function (callback) {
            var divSearchBarMobile =
                $('<div>', {
                    class: 'searchbar-mobile searchbar',
                    html: '<form method="get" action="/search"><input type="text" name="bjsq" placeholder="Search..."/>' +
                    '<button type="submit"><i class="fa fa-search"></i></button></form>'
                });

            var navigationLinks = [
                $('<a>', {
                    href: '/',
                    html: '<i class="fa fa-home"></i>Home'
                }),
                $('<a>', {
                    href: '/whats-new',
                    html: '<i class="fa fa-file-text-o"></i>What\'s new?'
                }),
                $('<a>', {
                    href: '/babylon101',
                    html: '<i class="fa fa-book"></i>Babylon 101'
                }), 
                $('<a>', {
                    href: '/examples',
                    html: '<i class="fa fa-slideshare"></i>Examples'
                }),                 
                $('<a>', {
                    href: '/How_To',
                    html: '<i class="fa fa-cogs"></i>How To...'
                }),
                $('<a>', {
                    href: '/features',
                    html: '<i class="fa fa-book"></i>Features'
                }),                     
                $('<a>', {
                    href: '/resources',
                    html: '<i class="fa fa-rocket"></i>Resources'
                }),
                $('<a>', {
                    href: '/extensions',
                    html: '<i class="fa fa-wrench"></i>Extensions'
                }),
                $('<a>', {
                    href: '/snippets',
                    html: '<i class="fa fa-book"></i>Snippets'
                }),
                $('<a>', {
                    href: '/api',
                    html: '<i class="fa fa-files-o"></i>API'
                }),
                $('<a>', {
                    href: '/playground',
                    html: '<i class="fa fa-cubes"></i>Playground'
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
                    href: 'https://forum.babylonjs.com',
                    target: '_blank',
                    html: '<i class="fa fa-html5"></i>Forum'
                }),
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
