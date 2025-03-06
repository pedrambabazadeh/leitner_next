const gulp = require("gulp"); 
gulp.task("copy-assets", () => { 
    return gulp.src("public/**/*").pipe(gulp.dest("dist/public")); 
    }); 

/* gulp.task() defines a new Gulp task.
It takes two arguments:
o Task name (string) — e.g., "default"
o Task function (callback) — code to run */