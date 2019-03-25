# Data Lovers

## Índice

* [Introducción](#introduccion)
* [Resumen del proyecto](#resumen-del-proyecto)
* [Proceso UX](#proceso-ux)
* [Diagrama de Flujo](#diagrama-de-flujo)

***
## Introducción

Según un [estudio de IBM](https://www-01.ibm.com/common/ssi/cgi-bin/ssialias?htmlfid=WRL12345USEN),
el 90% de la data que existe hoy ha sido creada durante los últimos dos años.
Cada día generamos 2.5 trillones de bytes de datos, una cifra sin precedentes.

Transportation Security Administration es una web pensada para uso en el sector público, pero de acceso privado que muestra el número de personas heridas en los accidentes por medio de transporte : tren, bicicleta,motocicleta, auto y bus.

Cuenta con data anual desde 1960 hasta 2016 y cuenta con una interfaz amigable

## Resumen del proyecto

### Público Objetivo

Gerente de Seguridad de la Alcaldía en EEUU.

## Proceso UX

### Descubrimiento e investigación:

![Descubrimiento](https://i.ibb.co/yRLt4LR/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f38376b6462483150664b4339413849696b384b73397a33736254677a4b4b7943505f44525548485539462d364654346c715155356341537237664d776f636466424746367a3162.png)

Ya que nuestro usuario final debe residir en EEUU, las entrevistas se realizaron a personas que esten relacionadas con Sector Público y Seguridad y Salud en el trabajo.

#### Historia de Usuario 1

Yo como gerente de Seguridad de la Alcaldía deseo tener un formulario de registro para mantener la confidencialidad del acceso a información.

DEFINICIÓN DE TERMINADO.- Crearemos una sección de LogIn en HTML que permita al usuario ingresar su user y contraseña que defina y lo lleve a la pantalla que permite visualizar los datos.


#### Historia de Usuario 2

Yo como gerente de Seguridad de la alcaldía deseo acceder a una vista para observar el total de accidentes que se dieron en un año en específico.

DEFINICIÓN DE TERMINADO.- Implementaremos un botón que permita seleccionar el año deseado y muestre en la web la relación de los tipos de de accidentes que se dieron en ese periodo de tiempo.

#### Historia de Usuario 3

Yo como gerente de Seguridad de la alcaldia deseo visualizar la cantidad  de heridos de una categorías de todos los años para saber cual fue el año en el que sucedieron el mayor número de heridos.

DEFINICIÓN DE TERMINADO.- Crearemos la funcionalidad que permita , a través de un botón, mostrar accidentes por tipo con sus respectivos valores en todos los años brindado por la data.

#### Historia de Usuario 4

Yo como gerente de Seguridad de la alcaldía deseo ordenar por año (del más reciente al más antiguo) los valores de la tabla que muestren los años y valores de una categoría específica.

DEFINICIÓN DE TERMINADO.- Crearemos una función de ordenado por año en la tabla mostrada de una categoría en específico.


#### Historia de Usuario 5

Yo como agente de Seguridad y Salud en el trabajo deseo visualizar una galería de los eventos más relevantes en EEUU para prevenir.

DEFINICIÓN DE TERMINADO.- Crearemos un section de galería dentro de HTML que fotos con información correspondiente.


### Síntesis y definición:

![Sintesis](https://i.ibb.co/Gd2BZj5/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f6e51495046686a533751746d6a75705073444845386855524d5a52646f776b756f70714973574d475952365943644e52643365446c4448667a31314e5a364d4743704733696956.png)

### Ideación:

![Ideación](https://i.ibb.co/njKQZHk/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f4b55444332657a6f79365362626f64494d756e6a446a6c467664716a3831564f5836583877514266444173794f5a467934576e6a48424a5a704c6e583663464d305f6942543431.png)

### Prototipado:

![Prototipado](https://i.ibb.co/wwFj4JD/68747470733a2f2f6c68342e676f6f676c6575736572636f6e74656e742e636f6d2f4f30766134675364496e576134692d32674c674970615442436141656f4665716a7463314f715674534a707671566d6d34766e4334356a7a594e6b6653374a456e524a5930354a.png)

*Prototipo de baja fidelidad* : fue realizado en sketch, considerando solo dos vistas : logIn(pantalla de inicio)y Home(pantalla donde se muestra la data)
![propotipo de baja](https://user-images.githubusercontent.com/47749039/54940932-b90d7180-4ef9-11e9-9f88-a218acc558a6.png)

*Prototipo de alta fidelidad* : se adjuntan los links
![propotipo de baja](https://user-images.githubusercontent.com/47749039/54941652-62a13280-4efb-11e9-8ca2-7a7eb8602948.png)

### User Testing:

![User Testing](https://i.ibb.co/Mctnq33/68747470733a2f2f6c68352e676f6f676c6575736572636f6e74656e742e636f6d2f516c6c4b34714236755a74673659464d7269514b6770674c524f36676e4e623148383865425a5f372d475576576c655a3147665872453842674664457951526770324f4d356247.png)

1) El primer user testing se realizó mostrando un Prototipo de baja fidelidad al usuario. Hubo comprensión de primer momento al recorrer el flujo , pero el feedbback que tenían los usuarios en común era que deseaban ver la data de manera detallada , es decir por categorías en lugar de ser mostrada en su totalidad en una sola vista.
Ante ello se adicionó 5 botones que permitan filtrar la data por tipo de accidente y que sea mostrada.

2)
## Diagrama de Flujo

Se realizó el digrama de flujo del proyecto en la plataforma web Lucidchart.

![Diagrama de Flujo](https://i.ibb.co/GMMp2Vd/Diagrama-SIPOC.png)
