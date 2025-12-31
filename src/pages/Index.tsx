
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Github, Briefcase, User, Menu, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import AboutSection from "@/components/AboutSection";
import AcademicSection from "@/components/AcademicSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ThemeToggle from "@/components/ThemeToggle";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import profilePhoto from "@/assets/profile-photo.jpg";

const AnimatedSection = ({ 
  children, 
  id, 
  ariaLabelledBy 
}: { 
  children: React.ReactNode; 
  id: string; 
  ariaLabelledBy: string; 
}) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      ref={ref}
      id={id} 
      className={`min-h-screen py-20 transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      aria-labelledby={ariaLabelledBy}
    >
      {children}
    </section>
  );
};

const Index = () => {
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", label: "About Me", icon: User },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "projects", label: "Projects & Publications", icon: Github },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // Account for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // SEO: Add structured data for breadcrumbs
    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": sections.map((section, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": section.label,
        "item": `${window.location.origin}#${section.id}`
      }))
    });
    document.head.appendChild(breadcrumbScript);

    return () => {
      document.head.removeChild(breadcrumbScript);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* SEO: Hidden content for search engines */}
      <div className="sr-only">
        <h1>Rahul Senapati - Expert Backend Developer specializing in Web Development and Backend Technologies</h1>
        <p>Experienced Backend Developer with expertise in Java Spring Boot Microservices, API development, Python Machine Learning, SQL databases, MongoDB, and Apache Kafka. Backend Development Engineer with a proven track record in building scalable web applications.</p>
        <ul>
          <li>Java Spring Boot Microservices Architecture</li>
          <li>Backend API Development and Web Development</li>
          <li>Python Machine Learning and Data Science</li>
          <li>SQL Database Design and MongoDB NoSQL</li>
          <li>Apache Kafka Message Streaming</li>
          <li>Software Engineering Solutions</li>
        </ul>
      </div>

      {/* Fixed Header */}
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-slate-700 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src={profilePhoto} 
                alt="Rahul Senapati" 
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h1 className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-left">
                  Rahul Senapati
                </h1>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-lg text-left">Backend Developer</p>
              </div>
            </div>

             {/* Desktop: horizontal layout, Mobile: vertical stack */}
            <div className="flex items-center gap-4">
              {/* Mobile: Stack theme toggle above hamburger */}
              <div className="flex flex-col items-center gap-2 lg:flex-row lg:gap-4">
                <ThemeToggle />
                
                {/* Mobile Hamburger Menu */}
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open navigation menu">
                      <Menu className="h-6 w-6" />
                      <span className="sr-only">Open menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="right" className="w-[280px]">
                    <div className="flex flex-col space-y-4 mt-8">
                      <h2 className="text-lg font-semibold mb-4">Navigation</h2>
                      {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                          <SheetClose key={section.id} asChild>
                            <Button
                              variant={activeSection === section.id ? "default" : "ghost"}
                              onClick={() => scrollToSection(section.id)}
                              className={`flex items-center gap-3 justify-start w-full ${
                                activeSection === section.id 
                                  ? "bg-blue-600 text-white" 
                                  : "hover:bg-blue-50 dark:hover:bg-slate-800"
                              }`}
                              aria-label={`Navigate to ${section.label} section`}
                            >
                              <Icon className="w-5 h-5" />
                              {section.label}
                            </Button>
                          </SheetClose>
                        );
                      })}
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Desktop Navigation - Hidden on mobile and tablets */}
              <nav className="hidden lg:flex space-x-2" role="navigation" aria-label="Main navigation">
                {sections.map((section) => {
                  const Icon = section.icon;
                  return (
                    <Button
                      key={section.id}
                      variant={activeSection === section.id ? "default" : "ghost"}
                      onClick={() => scrollToSection(section.id)}
                      className={`flex items-center gap-2 ${
                        activeSection === section.id 
                          ? "bg-blue-600 text-white" 
                          : "hover:bg-blue-50 dark:hover:bg-slate-800"
                      }`}
                      aria-label={`Navigate to ${section.label} section`}
                    >
                      <Icon className="w-4 h-4" />
                      {section.label}
                    </Button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6">
        <AnimatedSection id="about" ariaLabelledBy="about-heading">
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection id="education" ariaLabelledBy="education-heading">
          <AcademicSection />
        </AnimatedSection>

        <AnimatedSection id="experience" ariaLabelledBy="experience-heading">
          <ExperienceSection />
        </AnimatedSection>

        <AnimatedSection id="projects" ariaLabelledBy="projects-heading">
          <ProjectsSection />
        </AnimatedSection>
      </main>

      {/* SEO: Footer with additional keyword content */}
      <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-t border-gray-200 dark:border-slate-700 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="text-center text-gray-600 dark:text-gray-300">
            <p className="mb-2">
              Rahul Senapati - Experienced Software Engineer specializing in Web Development and Backend Technologies
            </p>
            <p className="text-sm">
              Java Spring Boot Microservices | Python ML | API Development | SQL & MongoDB | Apache Kafka | Backend Developer
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
