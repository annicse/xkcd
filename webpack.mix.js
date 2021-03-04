const mix = require('laravel-mix');
require('laravel-mix-versionhash');
const localProxy = "http://xkcd.test/";
let productionSourceMaps = true;

mix.setPublicPath('./assets/build');

if (localProxy) {
    mix.browserSync({
        proxy: "xkcd.test",
        injectChanges: true,
        open: false,
        files: [
            'assets/build/**/*.{css,js}',
            {
                match: ["./**/*.php"],
            }
        ]
    });
}

mix.js('assets/js/main.js', 'js')
    .sourceMaps(productionSourceMaps, 'source-map');

mix.sass('assets/scss/main.scss', 'css')
    .sourceMaps(productionSourceMaps, 'source-map');

if (mix.inProduction()) {
    //mix.versionHash();
    mix.sourceMaps();
}