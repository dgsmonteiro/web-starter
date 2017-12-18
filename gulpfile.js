var gulp         = require("gulp")
,runSequence   = require('run-sequence')
,clean         = require('gulp-clean')
,sass          = require("gulp-sass")
,htmlreplace   = require('gulp-html-replace')
,svgSprite     = require('gulp-svg-sprite')
,svgInject     = require('gulp-svg-inject')
,uglify        = require("gulp-uglify")
,concat        = require("gulp-concat")
,webserver     = require("gulp-webserver")
,htmlmin       = require('gulp-htmlmin')
,htmlhint      = require("gulp-htmlhint")
,injectHtml    = require('gulp-inject-stringified-html')
,jshint        = require("gulp-jshint");

//limpa a pasta de build
gulp.task("limpaBuild", limpaBuild);
//copia as imagens
gulp.task("copiaImagens", copiaImagens);
//copia o index
gulp.task("copiaIndex", copiaIndex);
//gera o css
gulp.task("geraCss", geraCss);
//gera o svg sprite
gulp.task("geraSvgSprite", geraSvgSprite);
//insere o svg sprite no index
gulp.task("insereSvgSprite", insereSvgSprite);
//concatena todos os js
gulp.task("concatenaJs", concatenaJs);
//insere o js no index
gulp.task("insereCssJs", insereCssJs);
//copia as views
gulp.task("copiaPaginasHtml", copiaPaginasHtml);
//exclui arquivos temporarios
gulp.task("excluiArquivosTemporarios", excluiArquivosTemporarios);
//roda o build final
gulp.task("build", build);
//roda o build sem tarefa SVG
gulp.task("buildDev", buildDev);
//roda o serve
gulp.task("serve", serve);
//tarefa de watch
gulp.task("build:watch", buildWatch);

//tarefa de watch[Sem SVG]
gulp.task("build:watchDev", buildWatchDev);

//aplica o jshint
gulp.task("jsHint", jsHint);


///////////////////////////////////////////////

function jsHint () {
return gulp.src('./app/**/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter('default'))
  .pipe(jshint.reporter('fail'));
}

function buildWatch () {
var files = [
  './app/**/*.js'
  ,'./images/**/*'
  ,'./css/**/*.scss'
  ,'./app/**/*.scss'
  ,'./app/**/*.html'
  ,'./images/**/*.svg'
];

gulp.watch(files, ['build']);
}

function buildWatchDev () {
var files = [
  './app/**/*.js'
  ,'./images/**/*'
  ,'./css/**/*.scss'
  ,'./app/**/*.scss'
  ,'./app/**/*.html'
  ,'./images/**/*.svg'
];

gulp.watch(files, ['buildDev']);
}

function serve () {
var options = {
  livereload: true
  ,port: 8090
  ,open: true
};

gulp.src("./dist")
  .pipe(webserver(options));
}

function build () {
return runSequence ("limpaBuild","copiaImagens", "copiaIndex", "geraCss", "concatenaJs", "jsHint", "geraSvgSprite", "insereSvgSprite", "insereCssJs", "copiaPaginasHtml", "excluiArquivosTemporarios")

}

function buildDev () {
return runSequence ("copiaIndex", "concatenaJs", "jsHint", "insereCssJs", "copiaPaginasHtml")
}

function excluiArquivosTemporarios () {
return gulp.src("./dist/tmp")
  .pipe(clean());
}

function copiaPaginasHtml () {

return gulp.src("./app/**/*.html")
  //minifica o html
  .pipe(htmlmin({collapseWhitespace: true}))
  //roda no hint no html
  .pipe(htmlhint(".htmlhintrc"))
  .pipe(htmlhint.reporter())
  .pipe(htmlhint.failReporter())
  .pipe(gulp.dest("./dist/app"));
}

function insereCssJs () {
var options = {'css': ['css/style.css'], 'js': 'js/app.js'};

return gulp.src('./dist/index.html')
  .pipe(htmlreplace(options))
  .pipe(gulp.dest('./dist/'));
}

function concatenaJs () {
var urlArquivos = [
  '!./app/**/*.test.js'
  ,'./node_modules/lodash/lodash.js'
  ,'./node_modules/jquery/dist/jquery.min.js'
  ,'./libs/popper/popper.min.js'
  ,'./node_modules/bootstrap/dist/js/bootstrap.js'
  ,'./node_modules/moment/min/moment.min.js'
  ,'./node_modules/moment/min/locales.min.js'
  ,'./node_modules/sweetalert/dist/sweetalert.min.js'
  ,'./node_modules/angular/angular.js'
  ,'./node_modules/nglocale/angular-locale_pt-br.js'
  ,'./node_modules/angular-ui-router/release/angular-ui-router.js'
  ,'./node_modules/restangular/dist/restangular.js'
  ,'./node_modules/ng-resize/dist/ng-resize.js'
  ,'./node_modules/angular-input-masks/releases/angular-input-masks-standalone.js'
  ,'./node_modules/angular-br-filters/release/angular-br-filters.js'
  ,'./node_modules/ng-sweet-alert/ng-sweet-alert.js'
  ,'./node_modules/angucomplete-alt/angucomplete-alt.js'
  ,'./node_modules/angular-moment-picker/dist/angular-moment-picker.js'
  ,'./node_modules/datatables.net/js/jquery.dataTables.js'
  ,'./node_modules/angular-messages/angular-messages.js'
  ,'./node_modules/ng-file-upload/dist/ng-file-upload.js'
  ,'./node_modules/ng-file-upload/dist/ng-file-upload-shim.js'
  ,'./node_modules/angular-animate/angular-animate.js'
  ,'./node_modules/angular-joyride/dist/joyride.js'
  ,'./node_modules/ui-router-page-title/page-title.js'
  ,'./libs/datatable/datatable.bootstrap4.js'
  ,'./libs/datatable/angular-datatables.js'
  ,'./app/modules/**/*.module.js'
  ,'./app/config/**/*.js'
  ,'./app/run/**/*.js'
  ,'./app/constants/**/*.js'
  ,'./app/components/**/*.js'
  ,'./app/filters/**/*.filter.js'
  ,'./app/services-old/**/*.service.js'
  ,'./app/services/**/*.service.js'
  ,'./app/pages/**/*.directive.js'
  ,'./app/pages/**/*.factory.js'
  ,'./app/pages/**/*.service.js'
  ,'./app/pages/**/*.controller.js'
  ,'./app/pages/**/*.route.js'
];

return gulp.src(urlArquivos)
  .pipe(concat({path: 'app.js', stat: { mode: 0666 }}))
  //.pipe(uglify())
  .pipe(gulp.dest("./dist/js"));
}

function insereSvgSprite () {
return gulp.src(['./dist/index.html'])
  .pipe(svgInject())
  .pipe(gulp.dest('./dist/'));
}

function geraSvgSprite () {
var options = {
  mode: {
    symbol: { // symbol mode to build the SVG
      render: {
        css: false, // CSS output option for icon sizing
        scss: false // SCSS output option for icon sizing
      },
      dest: 'tmp', // destination folder
      prefix: '.svg--%s', // BEM-style prefix if styles rendered
      sprite: 'sprite.svg', //generated sprite name
      example: true // Build a sample page, please!
    }
  }
};

return gulp.src("./images/icons/**/*.svg")
  .pipe(svgSprite(options))
  .pipe(gulp.dest('./dist/'))
}

function geraCss () {
var options = {'css': ['css/style.css']};
var sources = ["./css/**/*.scss", "./app/**/*.scss"];

//compila e minifica css
return gulp.src(sources)
  .pipe(sass({outputStyle: "compressed"})
    .on("error", sass.logError))
  .pipe(gulp.dest("./dist/css/"))
}

function copiaIndex () {
//copia o index para a pasta build
return gulp.src("./index.html").pipe(gulp.dest("./dist"))
}

function copiaImagens () {
gulp.src("./images/placeholder/*.*").pipe(gulp.dest("./dist/images/placeholder"))
gulp.src("./images/favicon/*.*").pipe(gulp.dest("./dist/images/favicon"))
gulp.src("./images/logos/*.*").pipe(gulp.dest("./dist/images/logos"))
}

function limpaBuild () {
return gulp.src("./dist/")
  .pipe(clean());
}
