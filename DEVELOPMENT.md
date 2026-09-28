# Development

## Principios

-   TypeScript + React + Vite como punto de partida.
-   Preferir funciones puras en el núcleo.
-   Efectos externos mediante adaptadores.
-   Mantener dependencias mínimas.
-   Evitar sobreingeniería.
-   Las decisiones técnicas reversibles pueden ser tomadas autónomamente
    por Codex.

## Commits

Realizar commits pequeños conforme se agregue valor. Mensajes cortos,
por ejemplo:

-   `init vite app`
-   `add training config`
-   `add state machine`
-   `add response evaluator`
-   `add speech providers`
-   `add session persistence`
-   `add training ui`
-   `add stats panel`
-   `add tests`

No hacer commits artificiales si una unidad de cambio aún no funciona.

## Calidad

Antes de cerrar una unidad relevante: - tests; - lint; - typecheck; -
build.

Corregir fallos antes de continuar cuando sea razonable.

## Supabase

Preparar: - autenticación; - usuarios/perfiles; - sesiones; - bloques; -
intentos; - estadísticas.

No usar credenciales de producción en el repositorio. Usar variables de
entorno y `.env.example`.

## Evolución

Los providers de TTS/STT y persistencia deben poder reemplazarse. La voz
IA futura es un requisito arquitectónico, no un requisito funcional de
la primera versión.
