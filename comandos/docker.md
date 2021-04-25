# Comandos docker

# Obtener imagen
```
docker pull <imagen>:<tag>
```
## Construir
```
docker build -t <imagen>:<tag> .
```

## Ejecutar
### Parametros
* -d # corre como demonio
* --rm # elimina el contenedor al detectar un cierre o problema
* -v /local/path:/container/path # monta un volumen en el contenedor a partir de un directorio en la maquina host
* -p <HOST_PORT>:<CONTAINER_PORT> # permite que el host se pueda comunicar con el contenedor en el puerto especificado
* --name <CONTAINER_NAME> # especifica el nombre del contenedor

### Comando
```
docker run --name mi_container --rm -d -v $PWD/ejemplo-html:/usr/share/nginx/html -p 8099:80  nginx
```

## Detener
```
docker stop <CONTAINER_NAME>
```

# Listar contenedores
### opciones
* -a # lista todos los contenedores
```
docker ps
```
# Eliminar contenedor
```
docker rm <CONTAINER_NAME>
```