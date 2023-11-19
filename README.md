# Proyecto de Practica: Control de almacén

Proyecto realizado con fines educativos.

**Credenciales por defecto**

| Usuario | Contraseña | Rol |
| ------------ | ------------ | ------------ | 
| admin | admin | ADMIN |
| almacen | admin | ALMACENERO |


# Entorno de desarrollo

- Angular v14.0.0
- Java v1.8

| Herramienta | Versión |
| ------------ | ------------ | 
|  Spring Tool Suite 4  | 4.12.0.RELEASE |
| Node.js  | 18.13.0 |
| MySQL Workbench 8.0 | 8.0.31 |


# Dependencias: Angular 

- Angular material `ng add @angular/material@14.0.0`

- BootstrapGrid `npm install bootstrap-grid-only-css@4.1.3 --save`

- SweetAlert2 `npm install sweetalert2@11.7.1`

- JQuery `npm i --save-dev @types/jquery`, `npm install jquery@3.6.4`

# Dependencias: SpringBoot 

```xml
<dependencies>

	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-data-jpa</artifactId>
	</dependency>
	
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-thymeleaf</artifactId>
	</dependency>
	
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-web</artifactId>
	</dependency>

	<dependency>
		<groupId>mysql</groupId>
		<artifactId>mysql-connector-java</artifactId>
		<scope>runtime</scope>
	</dependency>
	
	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-test</artifactId>
		<scope>test</scope>
	</dependency>

	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-actuator</artifactId>
	</dependency>

	<dependency>
		<groupId>org.springframework.boot</groupId>
		<artifactId>spring-boot-starter-security</artifactId>
	</dependency>
	
	<dependency>
		<groupId>org.springframework.security</groupId>
		<artifactId>spring-security-test</artifactId>
		<scope>test</scope>
	</dependency>

	<dependency>
		<groupId>io.jsonwebtoken </groupId>
		<artifactId>jjwt</artifactId>
		<version>0.9.1</version>
	</dependency>
	
	<dependency>
		<groupId>org.projectlombok</groupId>
		<artifactId>lombok</artifactId>
		<scope>provided</scope>
	</dependency>
		
</dependencies>
```

# Base de datos

## Esquema

![](https://i.postimg.cc/Ph7P99d2/mode-bd-222303.png)

### Instalar

Instalar los script de `BASE_DE_DATOS` en el siguiente orden

* SCRIPT_BD
* INSERT_DATOS_BD

# Detalles del BackEnd

`application.properties`
> Deplegado en el puerto **8090** 
> El secret del Token es **apptech** 

`package com.tech.security.jwt`
>  Así mismo la duración del token es de 5 horas.

`package com.tech.security.config`
>  Se asigno la restricción de acceso a las peticiones HTTP con los roles: *ADMIN, ALMACENERO,.*




# Conexión con el FrontEnd

Hemos creado un archivo `proxy.conf.json` para poder conectar el Back con el Front

```json
{
    "/servidor/*":{
        "target": "http://localhost:8090/tech",
        "secure": false,
        "pathRewrite": {
            "^/servidor": ""
        }
    }
}
```

y en el `helper.ts` establecemos la uri para que haga referencia

```javascript
let baserUrl = "http://localhost:4200/servidor"
export default baserUrl;
```

Cada que usemos el http://localhost:4200/servidor hace referencia al http://localhost:8090/tech configurado en el `proxy.conf.json`

De esta manera podremos hacer peticiones de esta manera:

- **Back** http://localhost:8090/tech/producto/1
- **Front** http://localhost:4200/servidor/producto/1

# Desplegar el FrontEnd

Debido a la configuración previa debemos iniciarlo con la configuración del **proxy** de preferencia hemos utilizado como puerto de salida el `4200`

```
ng serve --port 4200 --proxy-config proxy.conf.json
```


# Previsualización

[Ver todas las capturas aquí.](https://drive.google.com/drive/folders/1ZjVXW_y7Jijf0SfIvomn-EefsM-ijfZZ?usp=sharing "Ver todas las capturas aquí.")


| ![](https://i.postimg.cc/r8KfqzDv/Captura-de-pantalla-43.png)  | ![](https://i.postimg.cc/z8FtjsmP/Captura-de-pantalla-35.png)  |
| ------------ | ------------ |
| ![](https://i.postimg.cc/s3fn0Tsf/Captura-de-pantalla-41.png)  | ![](https://i.postimg.cc/RvPPrwZ7/Captura-de-pantalla-38.png)  |

# Guía de apoyo

- [Curso de Spring Boot y Angular - Autenticación con JWT y Spring Security](https://youtu.be/RWT7sZvgbeY?si=mDe9-sGn8r5wl5_T "")
- [ANGULAR / USANDO PROXI EN ANGULAR](https://youtu.be/47VR0YA9zJ4 "")
- [Cargar imagen Angular](https://es.stackoverflow.com/questions/168364/cargar-imagen-angular "")

# Consideración

> Los números de documentos, número de contacto fuergon generados de manera áleatoria con la libería Randint de Python. 
> Los nombres y apellidos fueron brindados por ChatGPT. 
> Iconos e imagenes de productos obtenidos de https://www.flaticon.es & https://www.craiyon.com
> Plantilla Bootstrap extraído de https://startbootstrap.com/themes
