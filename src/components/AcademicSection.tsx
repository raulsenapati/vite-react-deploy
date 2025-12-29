import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar, MapPin, Book } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

const education = [
  {
    degree: "Master of Science in Computer Science",
    institution: "University at Buffalo - SUNY",
    location: "Buffalo, NY",
    duration: "2021 - 2023",
    gpa: "3.814/4.0",
    description: "Specialization in Software Development. Published a paper on 'Investigating Customer Churn on Banking - using Machine Learning'.",
    coursework: ["Advanced Algorithms", "Machine Learning", "Distributed Systems", "Computer Vision", "Database Systems"],
    achievements: [
      "Clinched runners-up in the project for Data Intensive Computing",
      "Secured first place for Master's Capstone Project -> NLP-Based Resume Parser and Intelligent Job Suggestions",
      "Published a research paper on ScienceDirect"
    ]
  },
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "College of Engineering and Technology, Bhubaneswar",
    location: "Odisha, India",
    duration: "2010 - 2014",
    gpa: "8.1/10.0",
    description: "Comprehensive education in software development, with a focus on web technologies and software architecture patterns.",
    coursework: ["Object-Oriented Programming", "Web Development", "Software Architecture", "Data Structures", "Operating Systems"],
    achievements: [
      "Mentored new members in Zairza - Club for Programming",
      "Clinched runner-up at the Hackathon in Annual College festival"
    ]
  }
];

const AcademicSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Education</h2>
        <p className="text-gray-600 dark:text-gray-300">My academic background and achievements</p>
      </div>

      {/* Graduation Photo */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <img
            src="/vite-react-deploy/lovable-uploads/6ffc330f-9bdb-4c1c-a786-8681aec91c6a.png"
            alt="Graduation ceremony photo"
            className="w-80 h-auto rounded-lg shadow-lg border-4 border-white dark:border-gray-700"
          />
          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
            Graduate
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-2">
          <GraduationCap className="w-6 h-6 text-blue-600" />
          Academic Degrees
        </h3>

        {education.map((edu, index) => (
          <AnimatedCard 
            key={index} 
            className="group hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-l-4 border-l-purple-500"
            delay={index * 200}
          >
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300 text-left">{edu.degree}</CardTitle>
                  <CardDescription className="text-lg text-left font-semibold text-purple-600 dark:text-purple-400 mt-1">
                    {edu.institution}
                  </CardDescription>
                </div>
                <Badge variant="secondary" className="bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200 hover:bg-purple-200 dark:hover:bg-purple-600">
                  GPA: {edu.gpa}
                </Badge>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mt-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {edu.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {edu.duration}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 text-left dark:text-gray-300 mb-4">{edu.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2 text-left">
                  <Book className="w-4 h-4" />
                  Relevant Coursework:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, i) => (
                    <Badge key={i} variant="outline" className="bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 hover:bg-purple-200 dark:hover:bg-purple-600 dark:border-purple-700">
                      {course}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-left">
                  {edu.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </AnimatedCard>
        ))}
      </div>
    </div>
  );
};

export default AcademicSection;
