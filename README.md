# Prueba técnica React

Esta es mi solución a la prueba técnica que se me asignó. Espero que os guste y demuestre las habilidades técnicas necesarias para formar parte de vuestro equipo de frontend ;\).

**_NOTA:_** En este fichero contiene toda la información relacionada con el proyecto, incluyendo sus funcionalidades, instrucciones de instalación, configuración del entorno y las librerías empleadas.

## Contenidos

- [Descripción](#descripción)
- [Entorno](#entorno)
- [Instalación](#instalación)
- [Librerías](#librerías)

## Descripción

Esta prueba ha consistido en la implementación de una aplicación web CRUD que contase con las siguientes funcionalidades:

- Listar usuarios: `src/pages/UsersList`.
- Ver detalle de usuario: `src/pages/UserDetail`.
- Crear y editar usuarios: `src/UserForm`.

A mayores, se han empleado una serie de componentes y utilidades que están divididos entre los siguientes directorios:

- `src/app`: Configuración del estado global de la aplicación.
- `src/components`: Componentes comunes a diferentes partes de la aplicación.
- `src/hooks`: Funciones reutilizables dentro de los componentes.
- `src/layouts`: Componentes empleados para gestionar la disposición general de la aplicación.
- `src/pages`: Componentes que contienen las funcionalidades características de la aplicación.
- `src/services`: Configuración de las peticiones a los endpoints de la aplicación.
- `src/types`: Definición de los tipos de la aplicación.

## Entorno

Se ha utilizado [Vite](https://es.vitejs.dev/) como entorno de desarrollo, principalmente por su velocidad. A mayores, se ha configurado el proyecto para utilizar [TypeScript](https://www.typescriptlang.org/) como lenguaje.

**_NOTA:_** El proyecto ha sido ejecutado en `Node.js v20.18.0` y se ha empleado `npm` como sistema de gestión de paquetes.

## Instalación

1. Si no se cuenta con [Node.js](https://nodejs.org/en/), instalar [aquí](https://nodejs.org/en/download/package-manager).
2. (Opcional) Se puede utilizar [NVM](https://github.com/nvm-sh/nvm) y ejecutar el comando `$ nvm install 20.18.0`.
3. Clonar el repositorio con el comando `$ git clone git@github.com:afsanchez-dev/duacode-technical-interview.git`
4. Ejecutar dentro en el directorio raíz del proyecto `$ npm install`.
5. Ejecutar `$ npm run dev` para lanzar la aplicación

## Librerías

- [Tailwind CSS](https://tailwindcss.com/)
- [Redux ToolKit Query](https://redux-toolkit.js.org/rtk-query/overview)
- [React Router](https://reactrouter.com/home)
- [React Tooltip](https://www.npmjs.com/package/react-tooltip)
