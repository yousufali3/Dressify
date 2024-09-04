import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import me from '../assets/me.jpg';
import ani from '../assets/ani.png';
import yousuf from '../assets/yousuf.jpg';

const teamMembers = [
  {
    name: "Samiran Das",
    image: me,
    github: "https://github.com/SamiranDas2004",
    linkedin: "https://www.linkedin.com/in/samiran-das-dev/"
  },
  {
    name: "Yousuf Ali",
    image: yousuf,
    github: "https://github.com/yousufali3",
    linkedin: "https://www.linkedin.com/in/yousufali8/"
  },
  {
    name: "Anindya Biswas",
    image: ani,
    github: "https://github.com/AnindyaBiswas3",
    linkedin: "https://www.linkedin.com/in/anindya"
  }
  // Add more team members as needed
];

const Developers = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 mt-12">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Meet the Team</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col items-center">
              <h2 className="text-xl font-semibold text-gray-800 text-center mb-2">{member.name}</h2>
              <div className="flex gap-4">
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FaGithub size={24} />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900"
                  >
                    <FaLinkedin size={24} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Developers;
