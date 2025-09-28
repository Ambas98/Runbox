import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent, CardHeader } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  BookOpen,
  User,
  Tag,
  ChevronUp,
  ChevronDown
} from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

export function BlogPage() {
  const [expandedPost, setExpandedPost] = useState<number | null>(null);

  const togglePostExpansion = (postId: number) => {
    setExpandedPost(expandedPost === postId ? null : postId);
  };

  // Datos de ejemplo del blog
  const blogPosts = [
    {
      id: 1,
      title: "Bienvenidos al Blog de RunBox: más que logística, confianza en cada entrega",
      excerpt: "En RunBox creemos que la logística no es solo un servicio: es la confianza que se genera en cada entrega. Después de más de 20 años de experiencia...",
      content: `En RunBox creemos que la logística no es solo un servicio: es la confianza que se genera en cada entrega. Después de más de 20 años de experiencia, sabemos que la última milla es el momento en que realmente se define la experiencia del cliente final, y por eso hemos creado este espacio pensado especialmente para ti.

Aquí encontrarás:

**Tendencias de la industria**: las últimas novedades en logística, normativas y e-commerce.

**Consejos prácticos**: buenas prácticas de empaquetado, trazabilidad y cómo mejorar la experiencia de tus clientes.

**Casos de éxito**: historias reales de cómo hemos acompañado a farmacias, e-commerce y empresas en sus desafíos logísticos.

**Nuestro lado humano**: experiencias y aprendizajes de nuestro equipo, que es el corazón de RunBox.

Nuestro compromiso es ser más que un proveedor logístico: queremos ser tu socio estratégico, acompañándote en cada etapa de tu crecimiento.

¡Bienvenido a este nuevo espacio! Esperamos que encuentres aquí inspiración, soluciones y, sobre todo, la confianza de saber que cuentas con un equipo que siempre está de tu lado.`,
      author: "Equipo RunBox",
      date: "15 Enero 2025",
      readTime: "3 min",
      category: "Bienvenida",
      tags: ["Logística", "Confianza", "Experiencia del Cliente"],
      featured: true
    }
  ];

  const categories = ["Todas", "Tendencias", "Consejos", "Casos de Éxito", "Equipo"];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat opacity-10 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1745151485547-8d428247c1ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibG9nJTIwd3JpdGluZyUyMGNvbnRlbnR8ZW58MXx8fHwxNzU4MzUzOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-white rounded-full text-primary border border-primary/20">
              <BookOpen className="inline-block w-4 h-4 mr-2" />
              Blog RunBox
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Conocimiento logístico <span className="text-primary">en tiempo y forma</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre tendencias, consejos prácticos y casos de éxito que transformarán 
              tu operación logística. Más de 20 años de experiencia compartidos contigo.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  className={`rounded-full ${
                    index === 0 
                      ? "bg-primary hover:bg-primary/90 text-white" 
                      : "text-gray-600 hover:text-primary hover:border-primary"
                  }`}
                >
                  <Tag className="w-4 h-4 mr-2" />
                  {category}
                </Button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured Post */}
          <AnimatedSection className="mb-16">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Post Destacado</h2>
              <div className="w-20 h-1 bg-primary rounded"></div>
            </div>
            
            {blogPosts
              .filter(post => post.featured)
              .map((post, index) => (
                <Card key={post.id} className="border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="grid lg:grid-cols-5 gap-8">
                    {/* Image */}
                    <div className="lg:col-span-2">
                      <div 
                        className="h-64 lg:h-full bg-cover bg-center bg-no-repeat"
                        style={{
                          backgroundImage: `url('https://images.unsplash.com/photo-1617817546276-80b86dd60151?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2dpc3RpY3MlMjB0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NTgzNTM5Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
                        }}
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="lg:col-span-3 p-8">
                      <div className="space-y-6">
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                            {post.category}
                          </Badge>
                          <div className="flex items-center space-x-1">
                            <Calendar className="w-4 h-4" />
                            <span>{post.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime} de lectura</span>
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
                          {post.title}
                        </h3>
                        
                        <div className="prose prose-gray max-w-none">
                          {/* Preview content */}
                          {post.content.split('\n\n').slice(0, 2).map((paragraph, idx) => (
                            <p key={idx} className="text-gray-600 leading-relaxed">
                              {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
                            </p>
                          ))}
                          
                          {/* Expanded content */}
                          <AnimatePresence>
                            {expandedPost === post.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <motion.div
                                  initial={{ y: -20 }}
                                  animate={{ y: 0 }}
                                  exit={{ y: -20 }}
                                  transition={{ delay: 0.2 }}
                                  className="pt-4 space-y-4"
                                >
                                  {post.content.split('\n\n').slice(2).map((paragraph, idx) => {
                                    // Handle section headers
                                    if (paragraph.includes('Aquí encontrarás:')) {
                                      return (
                                        <div key={idx + 2} className="bg-primary/5 rounded-lg p-4 my-6">
                                          <p className="text-gray-900 font-medium leading-relaxed">
                                            {paragraph}
                                          </p>
                                        </div>
                                      );
                                    }
                                    
                                    // Handle bold list items
                                    if (paragraph.startsWith('**') && paragraph.includes('**:')) {
                                      const [boldPart, description] = paragraph.split('**: ');
                                      return (
                                        <div key={idx + 2} className="flex items-start space-x-3 my-4 p-3 bg-gray-50 rounded-lg">
                                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                          <div>
                                            <h5 className="font-semibold text-gray-900 mb-1">
                                              {boldPart.replace(/\*\*/g, '')}
                                            </h5>
                                            <p className="text-gray-600 text-sm leading-relaxed">
                                              {description}
                                            </p>
                                          </div>
                                        </div>
                                      );
                                    }
                                    
                                    // Handle closing message with special styling
                                    if (paragraph.includes('¡Bienvenido a este nuevo espacio!')) {
                                      return (
                                        <div key={idx + 2} className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-6 my-6 text-center">
                                          <p className="text-gray-900 font-medium leading-relaxed">
                                            {paragraph}
                                          </p>
                                        </div>
                                      );
                                    }
                                    
                                    // Handle commitment message
                                    if (paragraph.includes('Nuestro compromiso')) {
                                      return (
                                        <div key={idx + 2} className="border-l-4 border-primary pl-4 my-6">
                                          <p className="text-gray-700 font-medium leading-relaxed italic">
                                            {paragraph}
                                          </p>
                                        </div>
                                      );
                                    }
                                    
                                    // Handle regular paragraphs
                                    return (
                                      <p key={idx + 2} className="text-gray-600 leading-relaxed my-4">
                                        {paragraph.replace(/\*\*(.*?)\*\*/g, '$1')}
                                      </p>
                                    );
                                  })}
                                </motion.div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        
                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <User className="w-4 h-4" />
                            <span>{post.author}</span>
                          </div>
                          
                          <Button 
                            onClick={() => togglePostExpansion(post.id)}
                            className="bg-primary hover:bg-primary/90 text-white transition-all duration-300"
                          >
                            {expandedPost === post.id ? (
                              <>
                                Contraer artículo
                                <ChevronUp className="w-4 h-4 ml-2" />
                              </>
                            ) : (
                              <>
                                Leer artículo completo
                                <ChevronDown className="w-4 h-4 ml-2" />
                              </>
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
          </AnimatedSection>

          {/* All Posts Grid */}
          <AnimatedSection delay={0.2}>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Todos los Artículos</h2>
              <div className="w-20 h-1 bg-primary rounded"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Placeholder posts for future content */}
              {[1, 2, 3].map((_, index) => (
                <Card key={index} className="border-gray-200 hover:shadow-lg transition-shadow duration-300 opacity-60">
                  <div 
                    className="h-48 bg-cover bg-center bg-no-repeat bg-gray-200"
                  />
                  <CardHeader className="space-y-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Badge variant="outline" className="text-xs">
                        Próximamente
                      </Badge>
                      <span>•</span>
                      <span>Coming soon</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-400">
                      Próximo artículo en desarrollo
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-4">
                      Estamos preparando contenido valioso sobre logística y mejores prácticas. 
                      ¡Mantente atento!
                    </p>
                    <Button variant="outline" disabled className="w-full">
                      Próximamente
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </AnimatedSection>


        </div>
      </section>
    </div>
  );
}