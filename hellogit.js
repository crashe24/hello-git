console.log('hello worl')
// git init 
// git branch -m main
// git status
// git add .
// git status
// git commit -m "my first commit"
// git log para ver que se haya fotogragiado
// git checkout [filename] se vuelve a la foto ultima tomada
// git reset muestra los archivos modificados y que pueden ser fotografiados
// git log --graph
// git log --graph --pretty=oneline
// git log --graph --decorate --all oneline
// git  config --global alias.tree "log --graph --decorate --all --oneline"
// touch .gitignore
// git diff
// desplazamiento en el tiempo
// git checkout 6beeaa2 "this is my first commit"
// git checkout HEAD me posiciono en la rama 
// git checkout [rama a la que necesito ir]
// git reset descartar cambios
// git reset --hard [45555]
// git reflog
// git branch nombre_rama
// git switch nombre_rama tambien se pueden mover con checkout pero lo mejor es switch
// git merge main --> git add . git commit -m "correccion del conflicto"
// git stash para almacenar temporalmente mis cambios no genera un nuevo commit
// git stash list 
// git stash pop recuperame todo lo que estaba desarrollando
// git stash drop se elimina el stash
// git switch main -> 
// git diff login [ramas] puede  comparar entre ramas
// git merge login
// eliminar una rama git branch -d login
// GITHUB
// subir al repositorio github
//https://training.github.com/downloads/es_ES/github-git-cheat-sheet.pdf
//git remote add origin https://github.com/crashe24/hello-git.git
//git branch -M main
//git push -u origin main
// trabajar con git push y git pull
// git pull y get fetch
// git fetch es descargar el historial de cambios sin los cambios
// git pull se descarga el historial con loscambios e historial

// hint: You have divergent branches and need to specify how to reconcile them.
// hint: You can do so by running one of the following commands sometime before
// hint: your next pull:
// hint:
// hint:   git config pull.rebase false  # merge
// hint:   git config pull.rebase true   # rebase
// hint:   git config pull.ff only       # fast-forward only
// hint:
// hint: You can replace "git config" with "git config --global" to set a default
// hint: preference for all repositories. You can also pass --rebase, --no-rebase,
// hint: or --ff-only on the command line to override the configured default per
// hint: invocation.
// fatal: Need to specify how to reconcile divergent branches.
// crashe24@Jorges-MBP git_course % git config pull.rebase false
// crashe24@Jorges-MBP git_course % git pull origin main


// git clone
// git fork 
// git flow

// git flow feature start 2auth
// git flow feature finish 2auth





