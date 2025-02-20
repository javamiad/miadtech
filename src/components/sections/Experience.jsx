import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "JP Morgan Chase",
      duration: "2022 - Present",
      level: "Lead",
      achievements: [
        "Leading development of next-gen trading platform handling $100B+ daily transactions",
        "Architecting cloud-native solutions reducing operational costs by 35%",
        "Managing team of 8 engineers and mentoring junior developers",
        "Driving adoption of event-driven architecture across trading systems"
      ]
    },
    {
      title: "Software Engineer",
      company: "JP Morgan Chase",
      duration: "2020 - 2022",
      level: "Senior",
      achievements: [
        "Led development of high-frequency trading platform processing $50B+ daily transactions",
        "Architected microservices migration reducing system latency by 40%",
        "Mentored 15+ junior developers and established best practices",
        "Implemented real-time risk analysis system using Spring Boot and distributed computing"
      ]
    },
    {
      title: "Software Engineer",
      company: "JP Morgan Chase",
      duration: "2017 - 2020",
      level: "Mid-Level",
      achievements: [
        "Developed core components of risk management system",
        "Improved transaction processing speed by 60%",
        "Implemented automated testing framework reducing bug detection time by 75%",
        "Contributed to migration from monolith to microservices architecture"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Professional Experience</h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform -translate-x-px h-full w-0.5 bg-red-800"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 relative">
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-red-500 rounded-full border-4 border-gray-900 z-10"></div>
              
              {/* Content card */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'}`}>
                <div className="p-6 bg-gray-800 rounded-lg shadow-xl hover:shadow-red-500/20 
                              transition-all duration-300 transform hover:-translate-y-2 
                              border border-red-800 relative">
                  {/* Level badge */}
                  <div className="absolute -top-3 right-4 px-4 py-1 bg-red-900 rounded-full 
                                text-red-200 text-sm font-semibold shadow-lg">
                    {exp.level}
                  </div>

                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-red-400">{exp.title}</h3>
                    <div className="flex justify-between items-center mt-1">
                      <p className="text-lg text-gray-300">{exp.company}</p>
                      <span className="text-gray-400 text-sm">{exp.duration}</span>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start group">
                        <span className="mr-2 text-red-400 transform group-hover:scale-125 transition-transform">•</span>
                        <span className="text-gray-300 group-hover:text-red-300 transition-colors">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
