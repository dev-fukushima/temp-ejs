
var gulp = require('gulp');
var fs = require('fs');
var ejs = require('gulp-ejs');
var rename = require('gulp-rename');

/* ejs */

gulp.task('ejs', function() {
	var pagesData = JSON.parse(fs.readFileSync('./_frontend/data/page.json','utf8'));
	pagesData.pages.forEach(function(data,index){
		gulp.src(pagesData.load)
		.pipe(ejs({
			data:data}))
		.pipe(rename(data.filename))
		.pipe(gulp.dest(pagesData.output + data.dir))
	})
});
gulp.task('watch', function() {
	gulp.watch('./_frontend/ejs/**/*.ejs', gulp.series('ejs'));
});
