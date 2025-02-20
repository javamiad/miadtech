// src/data/projects.js
export const projects = [
  {
    title: "Real-time Market Data Pipeline",
    description: "Distributed streaming platform processing market data from multiple exchanges with sub-millisecond latency",
    tech: ["Apache Kafka", "Apache Flink", "Python", "InfluxDB", "Redis"],
    metrics: "Processing 5M+ market updates per second",
    highlights: [
      "Built fault-tolerant data pipelines handling 10TB+ daily data",
      "Implemented real-time aggregation and analytics",
      "Reduced data processing latency from 100ms to <1ms"
    ]
  },
  {
    title: "Financial Data Lake & Analytics Platform",
    description: "Enterprise data lake consolidating trading, risk, and customer data with ML-powered analytics",
    tech: ["Apache Spark", "Snowflake", "Airflow", "Python", "AWS EMR"],
    metrics: "Managing 50PB+ of financial data with 99.99% availability",
    highlights: [
      "Designed data lake architecture handling 1000+ data sources",
      "Implemented real-time data quality monitoring",
      "Built automated ETL pipelines processing 100TB+ daily"
    ]
  },
  {
    title: "ML-Powered Market Surveillance System",
    description: "Advanced anomaly detection system for identifying market manipulation and trading irregularities",
    tech: ["TensorFlow", "Apache Cassandra", "Elasticsearch", "Kafka Streams", "Docker"],
    metrics: "Detecting anomalies with 99.7% accuracy across 100M+ daily transactions",
    highlights: [
      "Developed ML models for pattern recognition in market data",
      "Created real-time alert system with <5s latency",
      "Reduced false positives by 85% compared to rule-based systems"
    ]
  }
];
