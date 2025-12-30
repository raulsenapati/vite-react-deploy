import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";
import AnimatedCard from "@/components/AnimatedCard";

const experiences = [
  {
    title: "Lead Development Engineer - Backend Technologies",
    company: "AVIZVA",
    location: "Reston, VA",
    duration: "2023 - Present",
    description: "Lead development of file processing applications using Spring, Kafka, Apache Camel, and AWS. Mentored junior developers and architected new features for Web Portals.",
    technologies: ["Apache Camel", "Apache Kafka", "Spring Boot", "AWS", "PostgreSQL", "Mongo DB", "Jenkins", "Intellij", "Postman", "Maven"],
    responsibilites: [
      "Develop Spring Boot APIs to process claims from pharmacies on TCP network (Healthcare domain)",
      "Performed Load Testing of web application with Apache JMeter",
      "Integrated message broker service to drop transmission logs asynchronously on Kafka Topic",
      "Index data from SQL Server database into Elasticsearch – for aggregations and fuzzy text search",
      "Built containerized application via Helm Charts on Kubernetes pods and deployed on EC2 cluster",
      "Maintained environment configurations and authorization keys on AWS Secret Manager"
    ]
  },
  {
    title: "IT Analyst",
    company: "Tata Consultancy Services",
    location: "New Delhi, India",
    duration: "2014 - 2021",
    description: "Developed and maintained full-stack applications, collaborated with cross-functional teams, and contributed to product strategy.",
    technologies: ["Spring Boot", "Apache Kafka", "SoapUI", "MySQL", "Eclipse", "Postman", "Maven", "Bash", "Mockito"],
    responsibilites: [
      "Development and scalability of APIs for Citibank Projects (Banking and Finance domain)",
      "Technologies for Agile projects - created robust multi-threaded microservices on Spring-Boot",
      "Used git to maintain code repository & Version Control, Jenkins for build generation",
      "Ensured test case coverage on 80% of code by integrating it with Mockito - JUnit 5",
      "Performed, organized, and streamlined operational tasks to reduce potential for errors"
    ]
  },
  {
    title: "Intern",
    company: "National Aluminium Company, Bhubaneswar",
    location: "Odisha, India",
    duration: "2013 - 2013",
    description: "Developed responsive websites and web applications. Gained experience in modern web technologies.",
    technologies: ["JavaScript", "HTML5", "CSS3", "PHP", "ASP.Net"],
    responsibilites: [
      "Worked with the project software team and learnt the process",
      "Understood specific requirements on coding pages in ASP.Net",
      "Added new forms to the company's internal website"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Work Experience</h2>
        <p className="text-gray-600 dark:text-gray-300">My professional journey in software development</p>
      </div>
      
      {experiences.map((exp, index) => (
        <AnimatedCard 
          key={index} 
          className="group hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border-l-4 border-l-blue-500"
          delay={index * 200}
        >
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle className="text-xl text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 flex items-center gap-2 text-left">
                  <Building className="w-5 h-5 text-blue-600" />
                  {exp.title}
                </CardTitle>
                <CardDescription className="text-lg text-left font-semibold text-blue-600 dark:text-blue-400 mt-1">
                  {exp.company}
                </CardDescription>
              </div>
              <Badge variant="secondary" className="bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 hover:bg-blue-200 dark:hover:bg-blue-600">
                {exp.duration}
              </Badge>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mt-2 text-left">
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                {exp.location}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {exp.duration}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 text-left dark:text-gray-300 mb-4">{exp.description}</p>
            
            <div className="mb-4">
              <h4 className="font-semibold text-gray-800 text-left dark:text-gray-200 mb-2">Responsibilities:</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-left">
                {exp.responsibilites.map((responsibility, i) => (
                  <li key={i}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 text-left dark:text-gray-200 mb-2">Technologies:</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <Badge key={i} variant="outline" className="bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 hover:bg-blue-200 dark:hover:bg-blue-600 dark:border-blue-700">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </AnimatedCard>
      ))}
    </div>
  );
};

export default ExperienceSection;
