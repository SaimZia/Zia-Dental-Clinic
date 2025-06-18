// src/components/about/TeamSection.jsx
import React from 'react';
import DoctorCard from './DoctorCard';

const TeamSection = () => {
  const team = [
   
    
    {
      name: "Dr. Abid Zia",
      role: "Chief Dental Surgeon",
      image: "/images/team/Dr.Abid.jpg",
      education: "BDS, Khyber College of Dentistry (KCD)",
      specialization: "Root Canal Treatment",
      description: "Dr.Abid Zia has over 30 years of experience and is an expert in full mouth rehabilitation, root canal therapy, crown/bridge preparations. He uses advanced technology to ensure precise and comfortable endodontic treatment."
    },
    {
        name: "Dr. Shabbir Hussain",
        role: "Associate Professor of Orthodontics, Rashid Latif Dental College,Lahore",
        image: "/images/team/Dr.Shabir.jpg",
        education: "BDS, MDS, MPH, CMT",
        specialization: "Orthodontics",
        description: "Dr. Shabbir Hussain specializes in orthodontics and naso-alveolar defects providing the best treatment available for maligned teeth using conventional braces and clear aligners."
      },
    {
      name: "Dr. Muhammad Aizaz",
      role: "Oral and Maxillofacial Surgeon",
      image: "/images/team/Dr.Aizaz.jpg",
      education: "BDS, FCPS (OMFS)",
      specialization: "Cosmetic Dentistry",
      description: "Dr. Muhammed Aizaz has exceptional surgical skills and specializes in the extractions of impacted teeth, facial trauma ,any anomalies related to the jaw with expertise in complex cases."
    },
    {
        name: "Dr. Haris Zia",
        role: "General Dentist",
        image: "/images/team/Dr.Haris.jpg",
        education: "BDS, C-implantology, C-Endodontics",
        specialization: "Implants",
        description: "Dr. Haris is a passion driven doctor who provides compassionate and comprehensive care to his patients. He specialises in Implants, Rootcanals and tooth whitening procedures."
      }, 
      {
        name: "Dr. Aleena Waqar Haider",
        role: "General Dentist",
        image: "/images/team/Dr.Alina.jpg",
        education: "BDS, C-Endodontics and restorations.",
        specialization: "Treatment of Gum Diseases",
        description: "Dr. Aleena specializes in the treatment of gum diseases, periodontal conditions and restorations. She guides patients with thorough education on oral health care."
      }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experienced professionals dedicated to your oral health
          </p>
        </div>

        <div className="mt-12 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <DoctorCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;