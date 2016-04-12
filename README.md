## Install

```javascript
npm install gulp.insert
```

## Usage
Insert content into the file

```javascript
var insert = require("gulp.insert");

gulp.task("insert", function() {
    return gulp.src("/*.js")
        .pipe(insert("some content"))
        .pipe(gulp.dest("build"))
});
```

Insert content into the file header
```javascript
var insert = require("gulp.insert");

gulp.task("insert", function() {
    return gulp.src("/*.js")
        .pipe(insert("some content",true))
        .pipe(gulp.dest("build"))
});
```

or 
```javascript
var insert = require("gulp.insert");

gulp.task("insert", function() {
    return gulp.src("/*.js")
        .pipe(insert(function(){
            return "some content"
        },true))
        .pipe(gulp.dest("build"))
});
```

## LICENSE
MIT