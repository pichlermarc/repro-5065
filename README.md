## Reproducer for https://github.com/open-telemetry/opentelemetry-js/issues/5065

### How to run

- `npm ci`
- `docker compose up`
- `npx ts-node src/index.ts`
- Look at the log output from the collector that was started with docker-compose, everything is accepted and shows up

### Relevant logs:

```
otel-collector-1  | 2024-10-18T12:18:50.191Z    info    TracesExporter  {"kind": "exporter", "data_type": "traces", "name": "debug", "resource spans": 1, "spans": 1}
otel-collector-1  | 2024-10-18T12:18:50.191Z    info    ResourceSpans #0
otel-collector-1  | Resource SchemaURL:
otel-collector-1  | Resource attributes:
otel-collector-1  |      -> service.name: Str(unknown_service:node)
otel-collector-1  |      -> telemetry.sdk.language: Str(nodejs)
otel-collector-1  |      -> telemetry.sdk.name: Str(opentelemetry)
otel-collector-1  |      -> telemetry.sdk.version: Str(1.26.0)
otel-collector-1  | ScopeSpans #0
otel-collector-1  | ScopeSpans SchemaURL:
otel-collector-1  | InstrumentationScope @opentelemetry/instrumentation-pg 0.46.0
otel-collector-1  | Span #0
otel-collector-1  |     Trace ID       : 708dcfbe8af3ad97d62bee5828498ce9
otel-collector-1  |     Parent ID      :
otel-collector-1  |     ID             : 9e72130a31f94ad1
otel-collector-1  |     Name           : pg.connect
otel-collector-1  |     Kind           : Client
otel-collector-1  |     Start time     : 2024-10-18 12:18:50.156 +0000 UTC
otel-collector-1  |     End time       : 2024-10-18 12:18:50.182388971 +0000 UTC
otel-collector-1  |     Status code    : Unset
otel-collector-1  |     Status message :
otel-collector-1  | Attributes:
otel-collector-1  |      -> db.system: Str(postgresql)
otel-collector-1  |      -> db.name: Str(postgres)
otel-collector-1  |      -> db.connection_string: Str(postgresql://localhost:5432/postgres)
otel-collector-1  |      -> net.peer.name: Str(localhost)
otel-collector-1  |      -> net.peer.port: Int(5432)
otel-collector-1  |      -> db.user: Str(postgres)
otel-collector-1  |     {"kind": "exporter", "data_type": "traces", "name": "debug"}
```