# Voz Mariana

Aplicación web de entrenamiento por voz orientada a usuarios
principiantes.

## Objetivo

El usuario escucha una pregunta/frase y responde por voz. La aplicación
evalúa la respuesta de forma permisiva y registra el resultado **sin dar
retroalimentación negativa ni obligar a repetir un intento fallido**.

## Modelo conceptual

-   **Intento**: una respuesta del usuario.
-   **Bloque**: una misma pregunta/respuesta repetida `N` veces
    (inicialmente 10).
-   **Sesión diaria**: conjunto ordenado de bloques realizados por un
    usuario durante el día.
-   La secuencia de bloques es configurable.
-   No existen niveles de dificultad progresiva.

## Configuración

Las frases se definen en JSON. Cada ejercicio tiene identificador,
pregunta, respuesta esperada, palabras clave y número de repeticiones.
La secuencia de bloques también se define en JSON.

## Voz

TTS y STT deben estar detrás de interfaces/providers intercambiables.

Primera versión: - TTS del navegador. - STT disponible en el navegador,
cuando sea compatible. - Providers mock para pruebas.

La arquitectura debe permitir sustituirlos posteriormente por
proveedores externos o servicios de voz con IA sin modificar el motor de
entrenamiento.

**Nunca se almacena audio.**

## Privacidad

Cada usuario tendrá `storeTranscript`.

-   `false`: guardar métricas/resultados, pero nunca la transcripción
    reconocida.
-   `true`: se permite guardar el texto reconocido para
    pruebas/diagnóstico.

## UI

Durante el entrenamiento: - No mostrar correcto/incorrecto. - No mostrar
puntuación por intento. - Mostrar únicamente información neutral y
mínima de progreso a nivel de bloque. - El selector de voz permanece
visible. - La velocidad de voz puede estar disponible como slider.

Una franja compacta puede mostrar estadísticas globales agregadas: -
bloques completados hoy; - bloques completados en los últimos 8 días; -
bloques completados en el último año.

Desde esa zona se podrá acceder/deslizar a un panel de estadísticas
con: - estadísticas individuales del usuario; - estadísticas globales
agregadas; - posteriormente, estadísticas geográficas por región/país
configurado en el perfil del usuario.

## Arquitectura

Separar: 1. motor de entrenamiento; 2. máquina de estados; 3. evaluación
de respuestas; 4. providers TTS/STT; 5. persistencia; 6. UI; 7.
autenticación; 8. estadísticas.

El motor no debe llamar directamente al navegador, Supabase ni APIs
externas.

## Máquina de estados

Este diagrama es documentación viva. Si la implementación cambia, Codex
puede reestructurarlo, pero debe mantenerlo sincronizado con el
comportamiento real.

``` mermaid
stateDiagram-v2
    [*] --> IDLE
    IDLE --> SPEAKING: start_attempt
    SPEAKING --> WAITING: tts_finished
    WAITING --> LISTENING: pause_finished
    LISTENING --> EVALUATING: response_received
    LISTENING --> EVALUATING: timeout
    EVALUATING --> SAVING: evaluation_finished
    SAVING --> NEXT_ATTEMPT: result_saved
    NEXT_ATTEMPT --> SPEAKING: repetitions_remaining
    NEXT_ATTEMPT --> NEXT_BLOCK: block_complete
    NEXT_BLOCK --> SPEAKING: blocks_remaining
    NEXT_BLOCK --> SESSION_COMPLETE: no_blocks_remaining
    SESSION_COMPLETE --> [*]
```

## Desarrollo local

Objetivo inicial:

``` bash
npm install
npm run dev
```

No desplegar ni modificar producción durante la primera etapa. Supabase
debe prepararse mediante esquema/migraciones y adaptadores, manteniendo
desarrollo local y mocks donde corresponda.

## Criterios iniciales

-   2 ejercicios × 10 repeticiones producen 20 intentos.
-   Un timeout cuenta como intento y el flujo continúa.
-   Una respuesta incorrecta no provoca una repregunta adicional.
-   La evaluación es permisiva y constante.
-   `storeTranscript=false` impide persistir transcripciones.
-   La secuencia de bloques es configurable.
-   TTS/STT son reemplazables.
-   La UI no presiona al usuario con resultados por intento.

## Fuente de verdad

Este README describe la intención funcional. Los tests, diagramas y
estructura inicial son referencias vivas: Codex puede refactorizarlos o
sustituirlos cuando mejore la arquitectura, siempre preservando los
requisitos funcionales.
