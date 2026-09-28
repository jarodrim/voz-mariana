# Testing

Las pruebas iniciales son referencia y pueden ser reestructuradas por
Codex. No son inmutables.

## Casos mínimos

1.  Dos bloques de 10 repeticiones generan 20 intentos.
2.  Un timeout avanza exactamente un intento.
3.  Una respuesta incorrecta no agrega repeticiones.
4.  Al completar N repeticiones se avanza al siguiente bloque.
5.  Al terminar el último bloque se completa la sesión.
6.  Normalización tolera mayúsculas/minúsculas y acentos.
7.  El evaluador admite tolerancia configurable/palabras clave.
8.  `storeTranscript=false` elimina/impide persistir el texto
    reconocido.
9.  El JSON inválido falla de forma controlada antes de iniciar.
10. La secuencia solo referencia IDs existentes.

## Voz

Los tests automáticos deben usar providers mock. No depender de
micrófono, permisos o una implementación específica del navegador.

## Aceptación

Codex debe poder ejecutar la suite sin interacción humana. Puede migrar
estas pruebas a la herramienta que considere adecuada para el stack (por
ejemplo Vitest), ampliarlas y reorganizarlas.
