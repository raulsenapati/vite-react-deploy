import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Linkedin, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCard from "@/components/AnimatedCard";

const skills = [
  { 
    category: "Expertise", 
    technologies: ["Backend Java Developer", "REST/SOAP services", "J2EE applications", "APIs"] 
  },
  { 
    category: "Programming Languages", 
    technologies: ["Java", "JSON", "Spring Boot", "Spring JPA", "MySQL", "jQuery", "JavaScript", "HTML5", "CSS3", "Python", "Spring-Integration", "PostgreSQL", "Mongo DB"] 
  },
  { 
    category: "Tools and Technologies", 
    technologies: ["Apache Kafka", "Apache Camel", "Redshift", "Eclipse IDE", "IntelliJ", "PyCharm", "Jenkins", "SOAP UI", "Tectia Server", "SQL Developer", "Redis", "Kubernetes", "JIRA", "Confluence", "Bitbucket", "Oracle", "Oauth2", "Mockito", "JUnit 5", "Spring Tool Suite", "Git", "Maven", "Postman", "Dbeaver", "Elasticsearch", "Apache JMeter", "Docker", "LDAP", "AWS S3", "CloudWatch", "IAM", "AWS Lambda"] 
  }
];

const quickFacts = [
  { value: "10+", label: "Years Experience", bgColor: "bg-blue-50 dark:bg-blue-900/20", textColor: "text-blue-600" },
  { value: "24+", label: "Projects Completed", bgColor: "bg-purple-50 dark:bg-purple-900/20", textColor: "text-purple-600" },
  { value: "2", label: "Companies", bgColor: "bg-green-50 dark:bg-green-900/20", textColor: "text-green-600" },
  { value: "2", label: "Degrees", bgColor: "bg-orange-50 dark:bg-orange-900/20", textColor: "text-orange-600" }
];

const AboutSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <div className="flex flex-col items-center mb-6">
          <div className="w-32 h-32 mb-4 rounded-full overflow-hidden border-4 border-blue-200 shadow-lg">
            <img 
              src="/vite-react-deploy/lovable-uploads/827314e2-484f-4d21-80c3-e07de248c8b9.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">About Me</h2>
        </div>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Backend Development Engineer with 10+ years of experience building scalable web applications. 
          I love turning complex problems into simple, beautiful solutions through clean code and innovative thinking.
        </p>
      </div>

      {/* Personal Info & Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <AnimatedCard className="hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-left">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">Get In Touch</CardTitle>
            <CardDescription>Let's connect and build something amazing together</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-left">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span>Washington DC-Metro Area</span>
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300 text-left">
              <Mail className="w-5 h-5 text-blue-600" />
              <span>rahulsen@buffalo.edu</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-initial py-2 sm:py-1">
                <a href="https://linkedin.com/in/rahulsenapati" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-initial py-2 sm:py-1">
                <a href="https://github.com/raulsenapati" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="flex-1 sm:flex-initial py-2 sm:py-1">
                <a href="https://leetcode.com/u/raulsenapati/" target="_blank" rel="noopener noreferrer">
                  <Code className="w-4 h-4 mr-2" />
                  LeetCode
                </a>
              </Button>
            </div>
          </CardContent>
        </AnimatedCard>

        <AnimatedCard className="hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-left" delay={150}>
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">Quick Facts</CardTitle>
            <CardDescription>A little bit about my journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {quickFacts.map((fact, index) => (
                <AnimatedCard
                  key={index}
                  className={`text-center p-4 ${fact.bgColor} rounded-lg border-0 shadow-none transition-all duration-300 hover:scale-105 hover:shadow-md cursor-default`}
                  delay={300 + index * 100}
                >
                  <div className={`text-2xl font-bold ${fact.textColor}`}>{fact.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">{fact.label}</div>
                </AnimatedCard>
              ))}
            </div>
          </CardContent>
        </AnimatedCard>
      </div>

      <AnimatedCard className="hover:shadow-lg transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm text-left" delay={300}>
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">Technical Skills</CardTitle>
          <CardDescription>Technologies and tools I work with</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="space-y-3">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-lg text-left">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.technologies.map((tech, i) => (
                    <Badge key={i} variant="secondary" className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </AnimatedCard>

      {/* Philosophy */}
      <AnimatedCard className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-none" delay={450}>
        <CardContent className="p-8">
          <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 text-center leading-relaxed">
            "Code is like humor. When you have to explain it, it's bad."
          </blockquote>
          <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
            I believe in writing clean, maintainable code that speaks for itself. 
            My goal is to create software that not only works well but is also a joy to work with.
          </p>
        </CardContent>
      </AnimatedCard>
    </div>
  );
};

export default AboutSection;
