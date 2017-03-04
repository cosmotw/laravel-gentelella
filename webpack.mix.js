const { mix } = require('laravel-mix');

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

/********************/
/* Copy Stylesheets */
/********************/

// Bootstrap
mix.copy('node_modules/gentelella/vendors/bootstrap/dist/css/bootstrap.min.css', 'public/css');

// Font awesome
mix.copy('node_modules/gentelella/vendors/font-awesome/css/font-awesome.min.css', 'public/css');

// Gentelella
mix.copy('node_modules/gentelella/build/css/custom.min.css', 'public/css/gentelella.min.css');

// Datatables
mix.copy('node_modules/gentelella/vendors/datatables.net-bs/css/dataTables.bootstrap.min.css', 'public/css');
mix.copy('node_modules/gentelella/vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css', 'public/css');
mix.copy('node_modules/gentelella/vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css', 'public/css');

// Switchery
mix.copy('node_modules/gentelella/vendors/switchery/dist/switchery.min.css', 'public/css');

/****************/
/* Copy Scripts */
/****************/

// iCheck
mix.copy('node_modules/gentelella/vendors/iCheck/icheck.min.js', 'public/js');

// Gentelella
mix.copy('node_modules/gentelella/build/js/custom.min.js', 'public/js/gentelella.min.js');

// Switchery
mix.copy('node_modules/gentelella/vendors/switchery/dist/switchery.min.js', 'public/js');

// FastClick
mix.copy('node_modules/gentelella/vendors/fastclick/lib/fastclick.js', 'public/js');

// Validator
mix.copy('node_modules/gentelella/vendors/validator/validator.min.js', 'public/js');

/********************/
/* Compile Scripts */
/********************/
mix.js('resources/assets/js/bootstrap.js', 'public/js/bootstrap.js');

/**************/
/* Copy Fonts */
/**************/

// Bootstrap
mix.copy('node_modules/gentelella/vendors/bootstrap/fonts/', 'public/fonts');

// Font awesome
mix.copy('node_modules/gentelella/vendors/font-awesome/fonts/', 'public/fonts');

// Datatables
mix.copy('node_modules/gentelella/vendors/datatables.net/js/jquery.dataTables.min.js', 'public/js');
mix.copy('node_modules/gentelella/vendors/datatables.net-bs/js/dataTables.bootstrap.min.js', 'public/js');
mix.copy('node_modules/gentelella/vendors/datatables.net-responsive/js/dataTables.responsive.min.js', 'public/js');