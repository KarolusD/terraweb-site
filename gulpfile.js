var gulp = require("gulp"),
  browserSync = require("browser-sync"),
  $ = require("gulp-load-plugins")({ lazy: true }),
  wait = require("gulp-wait"),
  plumber = require("gulp-plumber"),
  svgSprite = require("gulp-svg-sprites"),
  babel = require("gulp-babel"),
  uglify = require("gulp-uglify"),
  pump = require("pump");
	

gulp.task( 'styles', function () {
	return gulp
	.src("./src/sass/**/*.scss")
	.pipe(wait(1000))
    .pipe(plumber())
    .pipe($.sass().on("error", $.sass.logError))
    .pipe($.autoprefixer("last 2 version", "safari 5", "ie 8", "ie 9", "opera 12.1", "ios 6", "android 4"))
    .pipe($.cleanCss())
    .pipe(gulp.dest("public/css"))
    .pipe(browserSync.reload({ stream: true }));
} );

gulp.task('vendorScripts', function() {
	gulp
    .src("./src/js/vendor/**/*.js")
	.pipe(plumber())
	// .pipe(uglify())
	.pipe(gulp.dest("public/js/vendor"));
});

gulp.task( 'scripts', function () {
	return gulp
    .src(["./src/js/!(vendor)**/!(app)*.js", "./src/js/scripts/*.js"])
	.pipe(babel({
		presets: ['@babel/preset-env']
	}))
	.pipe($.concat("app.js"))
    .pipe(gulp.dest("src/js"))
	// .pipe(uglify())
    .pipe(gulp.dest("public/js"))
    .pipe(browserSync.reload({ stream: true }));
} );

// Optimizes the images that exists
gulp.task( 'images', function () {
	return gulp
		.src( 'src/images/**' )
		.pipe( $.changed( 'images' ) )
		.pipe( $.imagemin( {
			// Lossless conversion to progressive JPGs
			progressive: true,
			// Interlace GIFs for progressive rendering
			interlaced: true
		} ) )
		.pipe( gulp.dest( 'public/images' ) )
		.pipe( $.size( {title: 'images'} ) );
} );

gulp.task('sprites', function () {
	return gulp
    .src("src/icons/*.svg")
	.pipe(svgSprite({mode:"symbols"})) //You'll get an SVG file and a preview file showing how to use it
    .pipe(gulp.dest("public/icons")) // Write the sprite-sheet + CSS + Preview
   
});

<<<<<<< HEAD
gulp.task( 'html', function () {
	return gulp
	.src("./src/**/*.php")
	.pipe(wait(1000))
    .pipe(plumber())
    .pipe(gulp.dest("public/"));
} );

=======
>>>>>>> 61b72e3f24234bc8e9146633c822f9b5b6e9c2d4
gulp.task( 'browser-sync', ['styles', 'scripts'], function () {
	browserSync( {
		server: {
			baseDir: "./public/",
			injectChanges: true // this is new
		}
	} );
} );

gulp.task( 'deploy', function () {
	return gulp
		.src( './public/**/*' )
		.pipe( ghPages() );
} );



gulp.task( 'watch', function () {
	// Watch .html files
<<<<<<< HEAD
	gulp.watch( 'src/**/*.php', ['html', browserSync.reload] );
	gulp.watch( "public/*.php" ).on( 'change', browserSync.reload );
=======
	gulp.watch( "*.php" ).on( 'change', browserSync.reload );
>>>>>>> 61b72e3f24234bc8e9146633c822f9b5b6e9c2d4
	// Watch .sass files
	gulp.watch( 'src/sass/**/*.scss', ['styles', browserSync.reload] );
	// Watch .js files
	gulp.watch( 'src/js/*/*.js', ['scripts', browserSync.reload] );
	// Watch .js files
	gulp.watch( 'src/js/vendor/*', ['vendorScripts', browserSync.reload] );
	// Watch image files
	gulp.watch( 'src/images/**/*', ['images', browserSync.reload] );
} );

gulp.task( 'default', function () {
	gulp.start(
		'styles',
		'vendorScripts',
		'scripts',
		'images',
		'browser-sync',
		'watch'
	);
} );
