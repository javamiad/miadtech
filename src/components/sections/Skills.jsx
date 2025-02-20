// src/components/sections/Skills.jsx
import React from 'react';
import { Terminal, Database, Cloud, Server } from 'lucide-react';
import Card from '../ui/Card';
import { skills } from '../../data/skills';

const iconMap = {
  Terminal: Terminal,
  Database: Database,
  Cloud: Cloud,
  Server: Server
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-16 text-white">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = iconMap[skill.icon];
            return (
              <Card key={index}>
                <div className="flex items-center mb-4 text-red-400">
                  <Icon className="w-6 h-6" />
                  <h3 className="text-xl font-semibold ml-2 text-white">{skill.category}</h3>
                </div>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 hover:text-red-300 transition-colors duration-300">
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
