
var gulp               = require('gulp');             
var fs                 = require('fs');
var es                 = require('event-stream');
var path               = require('path');
var uglify             = require('gulp-uglify'); 
var sass               = require('gulp-sass');
var cssmin             = require('gulp-minify-css'); 
var autoprefixer       = require('gulp-autoprefixer');
var include            = require('gulp-include');
var notify             = require("gulp-notify");
var imagemin           = require("gulp-imagemin"); 
var livereload         = require('gulp-livereload');
var sourcemaps         = require('gulp-sourcemaps');
var rename             = require('gulp-rename');
var concat             = require('gulp-concat');


var srcPath         = 'resources/assets/'; // Path to our source files
var distPath        = 'public/'; // Path to your distribution files

// Files/Paths that need to be watched by gulp
var watchPaths    = {
    sass:        [srcPath+'sass/**/*.scss'],
    scripts:     [
        srcPath+'/js/*.js',
    ],
    html:          [
        srcPath+'**/*.html',
    ]
};

// Task for sass files
gulp.task('sass', function () {
    gulp
        .src(['bower_components/components-font-awesome/scss/font-awesome.scss',srcPath + 'sass/main.scss']) 
        .pipe(sass())
        .pipe(cssmin())
        .pipe(concat('main.css'))
        // Save the compiled file as styles.css to our distribution location
        .pipe(gulp.dest(distPath + '/build/css'));

});
gulp.task('icons', function() { 
    return gulp.src('bower_components/components-font-awesome/fonts/**.*') 
        .pipe(gulp.dest('./public/fonts')); 
});
gulp.task('html', function () {
    gulp
        .src([srcPath + '*.html'])
        .pipe(include())
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running html task" }))
        .pipe(gulp.dest(distPath));
});

gulp.task('scripts', function(){
    gulp
        .src(srcPath + 'js/*.js')
        .pipe(include())
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .on("error", notify.onError({ message: "Error: <%= error.message %>", title: "Error running scripts task" }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(distPath + '/build/js'));
});
// Uglify Plugins
gulp.task('uglifyPlugins', function() {
  return gulp.src(['bower_components/bootstrap/dist/js/bootstrap.js',
    'bower_components/jquery/dist/jquery.js', 'bower_components/eonasdan-bootstrap-datetimepicker/src/js/bootstrap-datetimepicker.js', 'bower_components/moment/moment.js'])
    .pipe(rename({
      suffix: ".min",
      extname: ".js"
    }))
    .pipe(uglify())
    .pipe(gulp.dest(distPath + '/build/js'));
});
 

// The watch task will be executed upon each file change
gulp.task('watch', function() {
    gulp.watch(watchPaths.scripts, ['scripts']);
    gulp.watch(watchPaths.sass, ['sass']);
    gulp.watch(watchPaths.html, ['html']);

    livereload.listen();
    gulp.watch(distPath + '**').on('change', livereload.changed);
});

gulp.task('default', ['scripts','icons', 'sass', 'html', 'watch', 'uglifyPlugins']);