var project = "app";
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var gulpPlumber = require("gulp-plumber");
var autoprefixer = require('gulp-autoprefixer');
const babel = require('gulp-babel');
var proxy = require('http-proxy-middleware')

var useref = require('gulp-useref');

changeRootDir()

function changeRootDir() {
    var argvs = process.argv;
    var _p = argvs.find(function(a) {
        return /^--\$/.test(a);
    })

    if (_p) {
        project = _p.slice(3)
    }
};
gulp.task('lr', () => {
    browserSync.init({
        server: {
            baseDir: project + '/'
        },
        open: "external",
        middleware: [
            proxy('/api', {
                target: 'http://192.168.1.188',
                changeOrigin: true,
            }),
        ],
    });
})
gulp.task('babel', function() {
    return gulp.src([project + '/es6/**/*.js', project + '/components/**/*.js'])
        .pipe(gulpPlumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(project + '/js'));
});


gulp.task('images', function() {
    return gulp.src(project + '/images/**/*.+(png|jpg|gif|svg)')
        .pipe(gulpPlumber())
        .pipe(imagemin([
            imagemin.gifsicle({ interlaced: true }),
            imagemin.jpegtran({ progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ]))
        //.pipe(cache())
        .pipe(gulp.dest(project + '/dist/images'))
});

gulp.task('sass', function() {
    return gulp.src(project + '/scss/**/*.scss')
        .pipe(gulpPlumber()) //compressed compact expanded
        .pipe(sass({ outputStyle: 'compact' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(project + '/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});
gulp.task("minSass", function() {
    return gulp.src(project + '/components/**/*.scss')
        .pipe(gulpPlumber()) //compressed compact expanded
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 4 versions'],
            cascade: false
        }))
        .pipe(gulp.dest(project + '/css'))
        .pipe(browserSync.reload({
            stream: true
        }))
})
gulp.task('useref', ["babel", 'sass'], function() {
    return gulp.src(project + '/*/*.html')
        .pipe(gulpPlumber())
        .pipe(useref())
        .pipe(gulp.dest(project + '/dist'));
});
gulp.task('watch', function() {
    gulp.watch(project + '/scss/**/*.scss', ['sass']);
    gulp.watch(project + '/components/**/*.scss', ['minSass']);
    gulp.watch([project + '/es6/**/*.js', project + '/components/**/*.js'], ['babel']);
    gulp.watch(project + '/*/*.html', browserSync.reload);
    gulp.watch(project + '/js/**/*.js', browserSync.reload);
})
gulp.task("default", ['lr', "babel", 'sass', 'minSass', 'watch']);
gulp.task("build", ["images", 'useref'])