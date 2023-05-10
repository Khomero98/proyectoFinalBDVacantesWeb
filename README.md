# Vacantes WEB
Aplicacion web de una agencia de empleo.
## Descripcion Funcional
La nueva empresa “Agencia de Empleo Bogotá”, como parte de su política de negocio, ha decidido
realizar una aplicación web, que le permita gestionar las necesidades de empresarios y
desempleados, a nivel local, nacional e internacional.
El negocio de la empresa, es:
* Registrar el mayor número de vacantes de las empresas, indicando las características del
empleo
* Registrar el mayor número de desempleados o trabajadores disponibles para aplicar a los
empleos
* Para la empresa, hacer un filtro de posibles candidatos para la vacante, por los parámetros:
Profesión, Salario, Ubicación, Puntuación del trabajador
* Para el desempleado o trabajador disponible, hacer un filtro de posibles vacantes, por los
parámetros: Profesión, Salario, Ubicación, Puntuación de la empresa.

Una empresa puede tener los siguientes datos:
* NIT
* Razón Social
* Representante Legal
* Teléfonos
* Direcciones
* País
  * Puede escoger de un listado internacional
* Ciudad
* Sedes
  * Bogotá Norte
  * Barranquilla
  * Cartagena
  * Cali
  * Medellín
  * ...
  * Entre otras

Un desempleado puede tener los siguientes datos:
* Identificación
* Nombre
* Dirección
* Teléfono
* Ciudad
  * Cali
  * Medellín
  * ...
  * Entre otras
* País
  * Puede escoger de un listado internacional
* Y los datos definidos en el formato de hoja de vida “X5-formato-hoja-de-vida-basica-y-
formal”, anexo a este documento
* Adicionalmente, se propone incluir un video con una presentación corta de 15 segundos
del desempleado.

Las empresas especifican en la Vacante o empleo disponible los siguientes datos:
* Identificación Convocatoria
* Fecha de inicio de recepción de hojas de vida
* Fecha de cierre de recepción de hojas de vida
* Cargo disponible
* Ubicación de la vacante
  * Ciudad
  * País
* Pregrado requerido
* Rango de Edad
* Descripción detallada

La aplicación desarrollada permitirá:
* A la empresa, permitir consultar y seleccionar una o varias hojas de vida para aplicar a la
vacante
* Al desempleado, permitirle consultar las vacantes y aplicar a una o varias
* A la Agencia, permitirle consultar y aplicar hojas de vida de desempleados a vacantes de
empresas, por filtros o asignación directa

La aplicación, debe tener una Página de inicio. Debe proveerse una página de inicio donde se
solicitará un usuario y contraseña para acceder a la aplicación.
En ningún caso debe poder accederse a la aplicación si no se dispone de credenciales para ello.
Se proveerá de un mecanismo para restablecer la contraseña de un usuario en caso de que esta
haya sido olvidada o pueda estar comprometida por haber sido divulgada o sustraída.
La experiencia del usuario (empresa, desempleado, agencia) debe ser agradable, práctica, sencilla
y clara.

Debe permitir de manera práctica y visual, la asociación de un desempleado a una empresa y
generar los reportes de hojas de vida asociadas a una vacante, igualmente, hoja de vida asociada a
vacantes.

## Tecnologias a usar
En este proyecto se usara como provedor de servicio a AZURE con una base de datos SQL.
Para el front se usara HTML, CSS, JS con Boostrap

