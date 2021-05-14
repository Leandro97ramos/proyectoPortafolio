const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

function StaticHero(){
  return gulp
  .src('scss/hero.scss')
  .pipe( autoprefixer () )
  .pipe( sass({ outputStyle: 'expanded'}))
  .pipe( gulp.dest('app/Components/static-hero'))
}
function Principal(){
   return gulp
    .src('scss/principal.scss')
    .pipe( autoprefixer () )
    .pipe( sass({ outputStyle: 'expanded'}))
    .pipe( gulp.dest('app/Components/home'))
}

function Projects(){
   return gulp
    .src('scss/projects.scss')
    .pipe( autoprefixer () )
    .pipe( sass({ outputStyle: 'expanded'}))
    .pipe( gulp.dest('app/Components/projects'))
}

function Skills(){
   return gulp
    .src('scss/skills.scss')
    .pipe( autoprefixer () )
    .pipe( sass({ outputStyle: 'expanded'}))
    .pipe( gulp.dest('app/Components/skills'))
}
function Contact(){
   return gulp
    .src('scss/contact.scss')
    .pipe( autoprefixer () )
    .pipe( sass({ outputStyle: 'expanded'}))
    .pipe( gulp.dest('app/Components/contact'))
}

function BuscaMinasMain(){
   return gulp
    .src('scss/project-buscaMinas-main.scss')
    .pipe( autoprefixer () )
    .pipe( sass({ outputStyle: 'expanded'}))
    .pipe( gulp.dest('app/projects/busca-minas'))
}

function BuscaMinasPrincipiante(){
   return gulp
    .src('scss/project-buscaMinas-princ.scss')
    .pipe( autoprefixer () )
    .pipe( sass({ outputStyle: 'expanded'}))
    .pipe( gulp.dest('app/projects/busca-minas/principiante'))
}


function Clima(){
   return gulp
    .src('scss/project-clima.scss')
    .pipe( autoprefixer () )
    .pipe( sass({ outputStyle: 'expanded'}))
    .pipe( gulp.dest('app/projects/app-clima'))
}

function BlogPlantas(){
   return gulp
    .src('scss/blog-plantas.scss')
    .pipe( autoprefixer () )
    .pipe( sass({ outputStyle: 'expanded'}))
    .pipe( gulp.dest('app/projects/blog-plantas'))
}



function watchArchivos(){
  gulp.watch('scss/*.scss', Principal),
  gulp.watch('scss/*.scss', StaticHero),
  gulp.watch('scss/*.scss', Projects),
  gulp.watch('scss/*.scss', Skills),
  gulp.watch('scss/*.scss', Contact),
  gulp.watch('scss/*.scss', BuscaMinasMain),
  gulp.watch('scss/*.scss', BuscaMinasPrincipiante),
  gulp.watch('scss/*.scss', Clima),
  gulp.watch('scss/*.scss', BlogPlantas)



  }


gulp.task('hero', StaticHero)
gulp.task('principal', Principal)
gulp.task('project', Projects)
gulp.task('skill', Skills)
gulp.task('contact', Contact)
gulp.task('buscaminas-main', BuscaMinasMain)
gulp.task('buscaminas-princ', BuscaMinasPrincipiante)
gulp.task('clima', Clima)
gulp.task('BlogPlantas',BlogPlantas )

gulp.task('watch', gulp.parallel(watchArchivos));
