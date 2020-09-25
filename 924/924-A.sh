#! /bin/bash

git init

git add *

git status

git commit -m "Mi primer Commit"


git remote add origin https://github.com/aquintanagz/APRENDE.git

git push -u origin master

------


git clone https://github.com/aquintanagz/APRENDE.git

-----  
Crear rama para el programador 1

git checkout -b aquintanagz master

git pull origin master

git add *

git commit -m "trabaje sobre los xml"

git push origin aquintanagz

----
bajar los cambios de la rama del progamador 1

git checkout -b oscar origin/aquintanagz

git pull origin aquintanagz

git add *

git commit -m "yo oscar trabaje las vistas"

git push origin oscar

------









