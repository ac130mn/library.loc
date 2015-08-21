var gulp = require('gulp'),
	connect = require('gulp-connect'),
	opn = require('opn'),
	wiredep = require('wiredep').stream;


// Запускаем локальный сервер
gulp.task('connect', function () {
	connect.server({
		root: 'app',
		livereload: true,
		port: 8888
	});
	opn('http://localhost:8888');
});


gulp.task('html', function () {
	gulp.src('./app/*.html')
		.pipe(connect.reload());
});

gulp.task('css', function () {
	gulp.src('./app/assets/css/*.css')
		.pipe(connect.reload());
});

gulp.task('js', function () {
	gulp.src('./app/assets/js/*.js')
		.pipe(connect.reload());
});

// слежка
gulp.task('watch', function () {
	gulp.watch(['./app/*.html'], ['html']);
	gulp.watch(['./app/assets/css/*.css'], ['css']);
	gulp.watch(['./app/assets/js/*.js'], ['js']);
	// gulp.watch('bower.json', ['bower']);
});

gulp.task('bower', function  () {
	gulp.src('./app/index.html')
		.pipe(wiredep({
			directory: "app/bower_components/"
		}))
		.pipe(gulp.dest('./app'));
});




// Задача по умолчанию
gulp.task('default', ['connect', 'watch']);