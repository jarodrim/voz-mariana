# Instrucción para Codex

Trabaja sobre este repositorio de forma autónoma.

Primero lee completamente: - `README.md` - `DEVELOPMENT.md` - `UI.md` -
`TESTING.md` - `src/config/training.json` - los archivos de referencia
en `src/core/`

## Objetivo

Construir una primera versión funcional local de **Voz Mariana**,
preservando la intención descrita en README.

## Autonomía

No pidas confirmación para decisiones técnicas reversibles. Investiga el
repositorio, implementa, ejecuta, prueba, corrige e itera.

Los archivos y tests iniciales son **referencias**, no restricciones
inmutables. Puedes refactorizar, mover, reemplazar o ampliar código y
tests si mejora la arquitectura. El README es la fuente principal de
intención funcional. Si descubres inconsistencias, resuélvelas de la
forma menos destructiva y documenta la decisión.

## Stack inicial

Prefiere React + TypeScript + Vite salvo que exista una razón técnica
clara para modificarlo.

## Requisitos importantes

-   Desarrollo en localhost.
-   No desplegar.
-   No tocar Supabase de producción.
-   Preparar integración Supabase mediante adaptadores,
    esquema/migraciones y variables de entorno.
-   TTS/STT detrás de providers intercambiables.
-   Implementar provider de navegador y mocks.
-   Preparar explícitamente el punto de extensión para voz/STT con IA.
-   Nunca guardar audio.
-   Respetar `storeTranscript`.
-   Evaluación permisiva, no progresiva.
-   Una respuesta incorrecta o timeout consume el intento y continúa.
-   No dar feedback negativo al usuario.
-   Mantener selector de voz visible en UI.
-   Mantener estadísticas compactas separadas del flujo de evaluación
    por intento.
-   Mantener/actualizar el diagrama Mermaid conforme evolucione la
    máquina de estados.

## Configuración

Usa el JSON inicial como ejemplo. Valídalo al cargar. La secuencia de
bloques debe ser configurable y no codificada en componentes React.

## Git

Si no existe repositorio Git, inicialízalo.

Haz commits pequeños por valor funcional terminado, con mensajes breves.
No esperes hasta el final para hacer un único commit.

## Verificación continua

Configura scripts adecuados y, después de cambios relevantes, ejecuta lo
que corresponda: - tests; - lint; - typecheck; - build.

Corrige errores y vuelve a ejecutar.

## Meta de primera iteración

Al terminar debe ser posible:

``` bash
npm install
npm run dev
```

y probar localmente una sesión de dos ejercicios con diez repeticiones
cada uno, utilizando providers reales del navegador cuando estén
disponibles y mocks en pruebas.

La suite debe comprobar al menos que 2 × 10 produce 20 intentos y que
privacidad, timeout, secuencia y evaluación permisiva funcionan.

## Cierre

Antes de detenerte: 1. ejecuta tests/lint/typecheck/build; 2. corrige
los errores razonablemente solucionables; 3. actualiza documentación; 4.
revisa `git status`; 5. deja commits coherentes; 6. escribe un resumen
de lo implementado, cómo ejecutarlo, limitaciones encontradas y
siguientes pasos.
