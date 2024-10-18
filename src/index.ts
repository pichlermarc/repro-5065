import {NodeTracerProvider, SimpleSpanProcessor} from "@opentelemetry/sdk-trace-node";
import {OTLPTraceExporter} from "@opentelemetry/exporter-trace-otlp-http";
import {registerInstrumentations} from "@opentelemetry/instrumentation";
import {PgInstrumentation} from "@opentelemetry/instrumentation-pg";
import {diag, DiagConsoleLogger, DiagLogLevel} from "@opentelemetry/api";

const tracerProvider = new NodeTracerProvider();
// If you see this, don't use this as a guide, DO NOT USE SimpleSpanProcessor in production, this is for repro purposes only.
tracerProvider.addSpanProcessor(new SimpleSpanProcessor(new OTLPTraceExporter()));
tracerProvider.register();
diag.setLogger(new DiagConsoleLogger(), DiagLogLevel.ALL);

registerInstrumentations({
    instrumentations: [new PgInstrumentation()]
});

import {Client} from "pg";
const client = new Client({
    user: 'postgres',
    password: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
});
client.connect().then(() => {
}).catch(console.error);