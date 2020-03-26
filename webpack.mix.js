const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const src = "./src/",
			dist = "./dist/",
			port = 8070;

mix
	.js(
		`${src}js/index.js`, 
		`${dist}js/index.js`
	).sass(
		`${src}css/index.scss`, 
		`${dist}css/index.css`
	)

mix.options({
	hmrOptions: {
		host: "localhost",
		port: port,
	}
});

mix.webpackConfig({
	devServer: {
		port: port
	}
});
	