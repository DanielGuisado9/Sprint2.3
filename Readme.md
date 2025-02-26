
# Ejercicio1
## Análisis del problema
📌 Ejercicio 1: Implementación de una Web del Tiempo con la API de AEMET
🎯 Contexto
El objetivo de este ejercicio es desarrollar una aplicación web del tiempo que permita a los usuarios consultar información meteorológica de diferentes ubicaciones de España, utilizando la API de AEMET (Agencia Estatal de Meteorología).

La interfaz estará inspirada en la web de https://www.eltiempo.es/sevilla.html, proporcionando datos detallados como:
Estado actual del tiempo.
Pronóstico por horas y días.
Mapa meteorológico interactivo.
Índices de calidad del aire y avisos meteorológicos.
⚙️ Requerimientos Funcionales
1️⃣ Consulta del tiempo actual por provincia
Introducción de la ubicación en un buscador (sólo por provincia).
Visualización del estado actual (temperatura, condición climática y velocidad del viento).
Iconos dinámicos según la condición climática (soleado, nublado, lluvia, etc.).
Ejemplo en eltiempo.es
2️⃣ Pronóstico detallado por horas y días
Representación visual de la evolución del tiempo (gráficos de temperatura, precipitaciones, etc.).
Predicción por días con intervalos de mañana (8:00), tarde (15:00) y noche (21:00).
Predicción de mínimo 48 horas, es decir, dos días posterior al actual.
Ejemplo en eltiempo.es

🔗 Documentación de la API de AEMET
Para obtener los datos meteorológicos, se utilizará la API de AEMET, que proporciona información detallada sobre el clima en tiempo real y pronósticos.
Registro y obtención de API Key:
Acceder a AEMET API y obtener la clave de acceso.
Usar POSTMAN para verificar manualmente la llamada al endpoint.
Seguir la documentación de SWAGGER:
Acceder a AEMET API SWAGGER para obtener toda la información relevante a volcar en Postman para verificar el correcto funcionamiento de nuestra petición.
🛠️ Tecnologías Recomendadas
React.js / Angular: Para la implementación de componentes.
Axios / Fetch API: Para las llamadas a la API de AEMET.
Leaflet.js: Para la visualización de mapas meteorológicos.
Chart.js: Para la representación gráfica del pronóstico.


## Diseño de la propuesta de solución del problema


## Pruebas de la resolución del problema


 

# Ejercicio2
## Análisis del problema
📌 Ejercicio 2: Funcionalidades Interactivas por Categoría
El objetivo de este ejercicio es que el alumnado desarrolle funcionalidades interactivas avanzadas basadas en su categoría de proyecto. Se espera que implementen componentes reutilizables que permitan mejorar la experiencia del usuario mediante dashboards, comparadores, rankings, planificadores o encuestas.
Cada categoría del proyecto incluye tres funcionalidades clave, que deben ser desarrolladas siguiendo las buenas prácticas de modularidad y reutilización de código.

📅 Categoría 4: Sitio de Reservas (Restaurantes / Peluquerías)
⚙️ Descripción de las funcionalidades
1️⃣ Planificadores Inteligentes
Sistema de gestión de citas con recordatorios automáticos.
Visualización de disponibilidad en calendario interactivo.
2️⃣ Rankings por Popularidad o Actividad
Clasificación de los restaurantes/servicios más reservados por ubicación.
Ranking basado en reseñas y puntuaciones de clientes.
3️⃣ Sistemas de Encuestas o Votaciones
Encuestas de satisfacción post-reserva.
Sección de opiniones de clientes sobre la calidad del servicio.





## Diseño de la propuesta de solución del problema
- He hecho uso de módulos propiamentes de angular como ngfor,ngmodel,ngif,etc.Algunos no me los aceptaba así que tenía que importar módulos especiales como CommonModule y ReactiveFormsModule.
- Inicio de Sesión: Permite a los usuarios ingresar con correo y contraseña. Incluye opciones de "Recordarme" y enlaces para registrarse o recuperar la contraseña.
- Registro: Formulario para crear una nueva cuenta con nombre, correo y contraseña. Incluye validaciones básicas.
- Recuperación de Contraseña: Envía un enlace de recuperación al correo ingresado si está registrado. Muestra mensajes claros en caso de éxito o error.
- Habrá dos servicios,en los que en uno consumirán todos los componentes de lo que es la página principal y la pestaña de reservas y el otro servicio lo consumirán los componentes de registrar usuarios,iniciar sesión y recuperar contraseña.En este caso consume de AuthServer
- También he implementado "textarea" para que el usuario pueda rellenar los campos de reserva
- También la implementación de "Material" de angular para los recordatorios de reserva cada 30 segundos ha sido muy importante
- También destacar el uso de EventEmitter para cerrar la encuesta una vez respondida y enviada
- He hecho un contador para el ranking de cortes de pelo para que el usuario pueda elegir que corte de pelo votar y un sort,para cuando el número de votos de un corte de pelo sea mayor a otro,se ordene de forma descendente,el usuario podrá ver que corte de pelo son los más votados
 

## Pruebas de la resolución del problema
- ✅ Prueba 1: Planificador de reservas
Seleccionar una fecha y hora de reserva.
Verificar que el sistema muestra la disponibilidad adecuada y permite la confirmación.


 ![gif](./recursos/Prueba1Ej2_Sprint2.2.gif)

- ✅ Prueba 2: Rankings de popularidad
Ordenar servicios por popularidad y ubicación.
Validar que el ranking refleja correctamente las puntuaciones de clientes.



![gif](./recursos/Prueba2Ej2_Sprint2.2.gif)

- ✅ Prueba 3: Encuestas de satisfacción
Completar una encuesta después de una reserva.
Verificar que la opinión influye en la clasificación del servicio.


 ![gif](./recursos/Prueba3Ej2_Sprint2.2.gif)






