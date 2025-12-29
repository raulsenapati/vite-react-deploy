
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, FileText, Award } from "lucide-react";
import PDFViewer from "@/components/PDFViewer";
import AnimatedCard from "@/components/AnimatedCard";

const projects = [
  {
    name: "Spring Data JPA",
    description: "A microservice to retrieve data from Postgres DB. Demonstrates different ways to query a database and the relationship between entities",
    technologies: ["Java", "Spring Boot", "Maven", "PostgreSQL"],
    githubUrl: "https://github.com/raulsenapati/spring-works/tree/main/Spring-Boot-JPA-Relationship",
    liveUrl: null, //TODO: liveUrl: "https://ecommerce-demo.vercel.app",
    image: "/placeholder.svg"
  },
  {
    name: "Spring with Kafka",
    description: "Spring Application to publish and consume messages via Kafka",
    technologies: ["Java", "Spring Boot", "Maven", "Apache Kafka"],
    githubUrl: "https://github.com/raulsenapati/spring-works/tree/main/spring-kafka",
    liveUrl: null, //TODO: liveUrl: "https://taskmaster-app.netlify.app",
    image: "/placeholder.svg"
  },
  {
    name: "RabbitMQ - Messaging with Spring Boot",
    description: "Spring Boot Project to show various types of RabbitMQ Exchanges, like Direct, Fanout, and Topic-based ",
    technologies: ["Java", "Spring Boot", "Maven", "RabbitMQ"],
    githubUrl: "https://github.com/raulsenapati/spring-works/tree/main/rabbit-mq",
    liveUrl: null,
    image: "/placeholder.svg"
  },
  {
    name: "Spring Data MongoDB",
    description: "Rest APIs to retrieve data from Mongo DB. Showcases various methods to perform CRUD operations, filtering, and sorting",
    technologies: ["Java", "Spring Boot", "Maven", "Mongo DB"],
    githubUrl: "https://github.com/raulsenapati/spring-works/tree/main/mongo-db",
    liveUrl: null,
    image: "/placeholder.svg"
  },
  {
    name: "GraphQL API with Spring Boot",
    description: "Used Spring Boot to save and view data from a DB source via GraphQL. Also, included working with a GraphQL client",
    technologies: ["Java", "Spring Boot", "Maven", "PostgreSQL", "GraphQL"],
    githubUrl: "http://github.com/raulsenapati/spring-works/tree/main/GraphQL-With-Spring-Boot",
    liveUrl: null,
    image: "/placeholder.svg"
  },
];

const publications = [
  {
    title: "Investigating Customer Churn in Banking: A machine learning approach and visualization app for data science and management",
    description: "Customer attrition in the banking industry occurs when consumers cease using the bank's goods and services for an extended period and subsequently terminate their relationship with the bank. In our research, we aimed to examine bank data and forecast which users will most likely discontinue using the bank's services and become paying customers. We used various machine learning algorithms to analyze the data and show comparative analysis on different evaluation metrics. In addition, we developed a Data Visualization RShiny App for Data Science and Management regarding customer churn analysis. Analyzing this data will help the bank indicate the trend and then try to retain customers on the verge of attrition.",
    journal: "ScienceDirect",
    url: "https://www.sciencedirect.com/science/article/pii/S2666764923000401",
    technologies: ["Machine Learning", "R Shiny", "Data Visualization", "Banking Analytics"],
    hasAward: true,
    awardTitle: "Best Paper Award"
  }
];

const ProjectsSection = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Projects & Publications</h2>
        <p className="text-gray-600 dark:text-gray-300">A showcase of my personal projects, and research publications</p>
      </div>

      {/* Projects Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <AnimatedCard 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group"
              delay={index * 150}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-gray-800 dark:text-gray-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                      {project.name}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-violet-50 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-200 hover:bg-violet-200 dark:hover:bg-violet-600 dark:border-violet-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-2 hover:bg-gray-900 hover:text-white dark:hover:bg-gray-100 dark:hover:text-black transition-colors"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button 
                      size="sm" 
                      className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 dark:bg-violet-600 dark:hover:bg-violet-700"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </div>

      {/* Publications Section */}
      <div>
        <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-6">Publications</h3>
        <div className="grid grid-cols-1 gap-6">
          {publications.map((publication, index) => (
            <AnimatedCard 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group border-l-4 border-l-green-500"
              delay={projects.length * 150 + index * 150}
            >
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-relaxed">
                      {publication.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-green-600 dark:text-green-400 mt-2">
                      Published in {publication.journal}
                    </CardDescription>
                    {publication.hasAward && (
                      <div className="mt-2 flex items-center gap-2">
                        <Award className="w-4 h-4 text-yellow-600" />
                        <span className="text-sm font-medium text-yellow-600 dark:text-yellow-400">
                          {publication.awardTitle} Recipient
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-justify">
                  {publication.description}
                </CardDescription>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {publication.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 flex-wrap">
                  <Button 
                    size="sm" 
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700 dark:bg-green-600 dark:hover:bg-green-700"
                    asChild
                  >
                    <a href={publication.url} target="_blank" rel="noopener noreferrer">
                      <FileText className="w-4 h-4" />
                      View Publication
                    </a>
                  </Button>
                  {publication.hasAward && (
                    <PDFViewer
                      title={publication.title}
                      content={publication.awardTitle}
                      triggerText="View Award"
                      triggerIcon={<Award className="w-4 h-4" />}
                    />
                  )}
                </div>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
