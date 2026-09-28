# UI

## Pantalla principal

Prioridad: interfaz limpia y de baja fricción.

Elementos visibles: - nombre del usuario; - selector de voz siempre
visible; - velocidad de voz mediante slider; - acción principal para
iniciar/continuar entrenamiento; - resumen global muy compacto en la
parte inferior.

## Entrenamiento activo

Mostrar solamente señales neutrales: - hablando; - escuchando; -
progreso a nivel de bloque, por ejemplo `Bloque 2 de 5`.

Evitar: - correcto/incorrecto; - puntuación por intento; - mensajes de
fallo; - pedir que repita porque una respuesta fue incorrecta.

El flujo continúa automáticamente después de cada intento.

## Estadísticas compactas

Ejemplo conceptual:

`Hoy 1,280 · 8 días 8,420 · Año 410k bloques`

Debe ocupar poco espacio.

## Panel de estadísticas

Accesible desde la franja compacta mediante navegación/deslizamiento.

Debe permitir: - actividad individual: hoy, 8 días, año; - bloques
completados; - sesiones; - estadísticas globales agregadas; - usuarios
activos/practicando, si puede medirse de manera fiable; - desglose
geográfico agregado por región/país.

No exponer identidad de otros usuarios.

## Configuración de perfil

La región/país se obtendrá de información proporcionada/configurada por
el usuario, no de geolocalización precisa automática como requisito
base.

La definición final del registro/perfil queda pendiente para la
siguiente etapa de diseño.
