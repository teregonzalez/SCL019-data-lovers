# Data Lovers

## Índice

* [1. Definición del producto](#1-definición-del-producto)
* [2. Historias de usuario](#2-historias-de-usuario)
* [3. Diseño de la Interfaz de usuario](#3-diseño-de-interfaz-de-usuario)
* [4. Tests de usabilidad](#4-tests-de-usabilidad)
* [5. Implementación de la Interfaz de usuario](#5-implementación-de-la-interfaz-de-usuario)
* [6. Pruebas unitarias](#6-pruebas-unitarias)

***

## 1. Definición del producto
Trabajamos con la data disponible del Studio Ghibli. El objetivo fue crear una página que permitiera a usuarios tanto familiarizados con sus producciones, como a quienes aún no les conocían, un lugar donde encontrar información general clara y ordenada acerca de las películas, su equipo realizador y otros datos, como personajes.

## 2. Historias de usuario
Para el mejor desarrollo de nuestras historias de usuario, hicimos un formulario para identificar qué datos específicos resultaban los más relevantes para las posibles usuarias.

### Resultados:
![Investigación de Usuario - Formularios de Google - Opera 05_02_2022 09_39_50 p  m](https://user-images.githubusercontent.com/95220695/152665172-36121a5d-0643-45e1-bc57-2bc9ec022c44.png)

![Investigación de Usuario - Formularios de Google - Opera 05_02_2022 09_39_59 p  m](https://user-images.githubusercontent.com/95220695/152665175-e9588c53-a306-40e4-9b3e-f64e05198893.png)

Dada esta información, pudimos definir que las usuarias podían ser tanto personas que ya conocían el trabajo de Studio Ghibli como quienes sabían poco al respecto y querían saber más. Además, los temas que se posicionaron como más relevantes, fueron las sinopsis de películas, datos sobre personajes y la inclusión de material gráfico.

En base a esto, trabajamos con las siguientes historias de usuario:

![Historias de Usuario - Data Lovers - Hojas de cálculo de Google - Opera 05_02_2022 11_10_39 p  m](https://user-images.githubusercontent.com/95220695/152665344-ad6ccc26-dae1-4761-80be-78eeddbf44dc.png)

## 3. Diseño de la Interfaz de usuario

### Prototipo de baja fidelidad
![prototipo-baja](https://user-images.githubusercontent.com/95220695/152667956-7a202879-287d-481d-bc28-531124c9eca2.png)

### Prototipo de alta fidelidad
![prototipo-alta-1](https://user-images.githubusercontent.com/95220695/152667960-e7a073ed-1b05-4ae6-a423-f5a1c03f0d93.png)
![prototipo-alta-2](https://user-images.githubusercontent.com/95220695/152667964-8e9a27e6-5d1c-4854-bf8d-9bc6a67a8cfa.png)

## 4. Tests de usabilidad
Al probar la implementación de nuestros diseños y recibir feedback de compañeras, identificamos varias posibles mejoras que aplicamos en el código. Los principales problemas y sus resoluciones fueron:

⌑ El botón de home se ve muy grande en pantallas más pequeñas, se agrega propiedad en css para disminuir tamaño en pantallas menores a 768px.

⌑ Los contenedores se extienden mucho con la data, se agrega propiedad scroll en css para facilitar la navegación en la página. 

⌑ Los botones del navbar pierden su estilo en pantallas más pequeñas, se agrega propiedad en css para disminuir tamaño en pantallas menores a 768px.

⌑ El color del prototipo de alta fidelidad en el contenedor de "Fun fact" tiene poco contraste con los gráficos, se le cambia el color a uno que genera mas contraste.

⌑ El idioma de la página es español y el de la data es inglés, se le cambia el idioma a la página para que tenga más sentido con la data.

⌑ En la pantalla donde está el menú principal falta un header que contextualice la página en la que nos encontramos, cambiamos el logo que teníamos como footer al header y le dimos un estilo más distintivo.

## 5. Implementación de la Interfaz de usuario
### Navegador web
![navegador](https://user-images.githubusercontent.com/95220695/152713859-220fbc11-39a7-4a8c-86ce-c3ae647e1ecf.png)

### Dispositivos móviles 
![Pantalla-mediana](https://user-images.githubusercontent.com/95220695/152713880-8bdc9e8e-fa54-451f-b6bd-54ae731ee161.png)
![Pantalla-pequeña](https://user-images.githubusercontent.com/95220695/152713891-3ce92899-b343-45a7-a7c3-79c377945d6b.png)
![Modales-dispositivos](https://user-images.githubusercontent.com/95220695/152713902-c09fc647-dcc7-47ff-a410-9d5b0696e2ba.png)

## 6. Pruebas Unitarias
Redactamos nuestros tests para probar la funcionalidad de los filtros de películas y personajes.

### Resultados
![home html - SCL019-data-lovers - Visual Studio Code 06_02_2022 10_41_48 p  m](https://user-images.githubusercontent.com/95220695/152713967-d849020d-3586-4e40-9d06-f6691c167c3c.png)



