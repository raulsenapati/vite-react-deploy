
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const publications = [
  {
    title: "Investigating Customer Churn in Banking: A machine learning approach and visualization app for data science and management",
    description: "Customer attrition in the banking industry occurs when consumers quit using the goods and services offered by the bank for some time and, after that, end their connection with the bank. In our research, we aimed to examine bank data and forecast which users will most likely discontinue using the bank's services and become paying customers. We used various machine learning algorithms to analyze the data and show comparative analysis on different evaluation metrics. In addition, we developed a Data Visualization RShiny App for Data Science and Management regarding customer churn analysis. Analyzing this data will help the bank indicate the trend and then try to retain customers on the verge of attrition.",
    journal: "ScienceDirect",
    url: "https://www.sciencedirect.com/science/article/pii/S2666764923000401",
    technologies: ["Machine Learning", "R Shiny", "Data Visualization", "Banking Analytics"]
  }
];

const PublicationsSection = () => {
  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">Publications</h2>
        <p className="text-gray-600 dark:text-gray-300">Research publications and academic contributions</p>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {publications.map((publication, index) => (
          <Card key={index} className="hover:shadow-xl transition-all duration-300 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm group border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors leading-relaxed">
                    {publication.title}
                  </CardTitle>
                  <CardDescription className="text-lg font-semibold text-green-600 dark:text-green-400 mt-2">
                    Published in {publication.journal}
                  </CardDescription>
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
                    <Badge key={i} variant="secondary" className="bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 hover:bg-green-200 dark:hover:bg-green-600 dark:border-green-700">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
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
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PublicationsSection;
