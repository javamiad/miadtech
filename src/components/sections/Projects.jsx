import React from 'react';

const Projects = () => {
  const projects = [
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

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} 
                 className="group relative rounded-xl overflow-hidden bg-gray-900 border border-red-800
                          hover:shadow-xl hover:shadow-red-500/20 transition-all duration-500 
                          transform hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-red-500/5 to-red-500/0 
                            group-hover:from-red-500/10 group-hover:to-red-500/5 transition-all duration-500"></div>
              <div className="p-8 relative">
                <h3 className="text-2xl font-bold mb-4 text-red-400">{project.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} 
                            className="px-3 py-1 bg-red-900/50 text-red-200 text-sm rounded-full
                                     transform transition-all duration-300 hover:scale-105 hover:bg-red-900">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start text-gray-400 group/item">
                        <span className="mr-2 text-red-500">•</span>
                        <span className="group-hover/item:text-red-300 transition-colors duration-300">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-red-900/30">
                    <p className="text-red-400 font-semibold">{project.metrics}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
