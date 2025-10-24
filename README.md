# Search-app

                                ┌──────────────────────────────┐
                                │        Frontend UI           │
                                │ (React / Angular / Vue)      │
                                └──────────────┬───────────────┘
                                               │
                          ┌────────────────────┴────────────────────┐
                          │          NGINX / Traefik                │
                          │ (Reverse proxy, SSL, load balancing)    │
                          └────────────────────┬────────────────────┘
                                               │
                         ┌─────────────────────┴─────────────────────┐
                         │           Search API Service              │
                         │     (Spring Boot or FastAPI backend)      │
                         ├─────────────────────┬─────────────────────┤
                         │  Keyword Search     │   Semantic Search   │
                         │  (OpenSearch)       │   (Weaviate)        │
                         └──────────┬──────────┴──────────┬──────────┘
                                    │                     │
                                    ▼                     ▼
                       ┌──────────────────┐     ┌─────────────────────┐
                       │  OpenSearch       │     │  Weaviate Vector DB │
                       │  Cluster          │     │  (with transformers │
                       │ (Text + Fuzzy)    │     │   module built-in)  │
                       └────────┬──────────┘     └──────────┬──────────┘
                                │                           │
                                ▼                           ▼
                        ┌────────────────────────┐   ┌────────────────────────┐
                        │     PostgreSQL DB      │   │  Embedding Generator    │
                        │ (Metadata + Raw text)  │   │ (Ollama + Llama3 / Mistral)│
                        └──────────┬─────────────┘   └──────────┬─────────────┘
                                   │                            │
                                   ▼                            ▼
                          ┌──────────────────────┐      ┌──────────────────────┐
                          │     Kafka / Redpanda  │      │    Redis Cache       │
                          │ (Data events, sync)   │      │ (Query caching)      │
                          └──────────┬───────────┘      └──────────┬───────────┘
                                     │                              │
                                     ▼                              ▼
                         ┌────────────────────────┐       ┌──────────────────────┐
                         │   MinIO (S3 alternative)│       │   Monitoring Stack   │
                         │ (Documents / binaries) │       │ (Prometheus + Grafana)│
                         └────────────────────────┘       └──────────────────────┘
