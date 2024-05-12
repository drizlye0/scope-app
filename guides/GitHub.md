# Como usar git para el desarrollo

**Comandos de git explicados**

```
git clone git@github.com:drizlye0/doxer-app.git
```

- Git clone clona el repositorio en la fecha actual del proyecto

```
git fetch
```

- Git fetch hace una peticion http al repositorio y comprueba 
si a habido cambios, si es asi actualizara el repo clonado pero 
los cambios no se reflejaran

```
git pull 
```

- Git pull refleja los cambios dichos por git fetch y actualizara el 
codigo de tu repo clonado

- git fetch y git pull se deben usar si tu quieres actualizar la informacion del repo

```
git branch --all 
```

- Muestra todas las branch del repositorio

```
git checkout <branch> 
// ej
git checkout dev
```

- Permite cambiarte entre branchs del repo

```
git add <directorio/archivo.txt>  
```
- Permite agregar archivos al repo, si creas archivos nuevos estos no se 
agregan automaticamente, necesitas agregarlos

```
git commit 
```

- Los commits son los cambios que hacemos al codigo y queremos que se guarden en local,
git commit hace un save de todos los cambios que hayas hecho, es necesario que agregues 
siempre un mensaje acompanado del commit

```
//ej
//Agrego un archivo
git add components/view.jsx
//hago un save de los cambios con git commit
git commit -m "Add feature and file view.jsx"
```

- Si necesitas agregar mas de un archivo puedes hacer eso

```
touch file2.txt //creo un archvo1
touch file2.txt //creo un archvo2
git add .
```
