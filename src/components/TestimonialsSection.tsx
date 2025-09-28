import { motion } from "motion/react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { AnimatedSection } from "./AnimatedSection";
import { 
  Star, 
  Play,
  Quote,
  User,
  Building,
  MapPin
} from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "María González",
      company: "Tienda Online Patagonia",
      location: "Puerto Montt",
      rating: 5,
      text: "Runbox transformó nuestro negocio. Antes tardábamos semanas en enviar productos al norte, ahora llegan en 3 días máximo. El seguimiento en tiempo real nos da tranquilidad total.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b2a00e6b?w=150"
    },
    {
      name: "Carlos Mendoza", 
      company: "Exportadora Los Andes",
      location: "Santiago",
      rating: 5,
      text: "Como empresa exportadora, necesitamos precisión y confiabilidad. Runbox nunca nos ha fallado. Su servicio al cliente es excepcional y siempre están disponibles.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
    },
    {
      name: "Ana Rodríguez",
      company: "Farmacia San Pedro", 
      location: "Antofagasta",
      rating: 5,
      text: "Los medicamentos son productos delicados que requieren cuidado especial. Runbox entiende esto perfectamente y siempre mantiene la cadena de frío.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
    },
    {
      name: "Jorge Silva",
      company: "Repuestos Automotrices del Sur",
      location: "Temuco", 
      rating: 5,
      text: "Necesitamos enviar repuestos urgentes por todo Chile. Runbox es nuestro aliado estratégico, siempre cumplen los plazos prometidos.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150"
    }
  ];

  const videoTestimonials = [
    {
      title: "Caso de éxito: Pyme en Crecimiento",
      company: "Artesanías Mapuche",
      duration: "2:34",
      thumbnail: "https://images.unsplash.com/photo-1646320557112-e5b38e6369e7?w=400&h=300&fit=crop",
      description: "Cómo una pequeña empresa de artesanías logró expandirse por todo Chile"
    },
    {
      title: "Testimonio Corporativo",
      company: "Retail Chile S.A.",
      duration: "1:47", 
      thumbnail: "https://images.unsplash.com/photo-1560462162-88f0dcc57ce0?w=400&h=300&fit=crop",
      description: "Una cadena de retail explica por qué eligió Runbox para su logística"
    },
    {
      title: "Historia de Confianza",
      company: "Laboratorio Médico Norte",
      duration: "3:12",
      thumbnail: "https://images.unsplash.com/photo-1756027132664-ad5bd4752b03?w=400&h=300&fit=crop", 
      description: "Transporte de muestras médicas urgentes desde regiones extremas"
    }
  ];

  return (
    <section id="testimonios" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="text-center space-y-8 mb-20">
          <div className="inline-block px-6 py-3 bg-muted rounded-full text-primary shadow-sm">
            <span className="font-semibold tracking-wide">Testimonios</span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Lo que dicen nuestros{" "}
            <span className="text-primary">clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Empresas de todo Chile confían en Runbox para sus envíos. 
            Escucha las historias de éxito de nuestros clientes.
          </p>
        </AnimatedSection>

        {/* Text Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection 
              key={index} 
              delay={0.1 + index * 0.1} 
              hover={true}
              className="group"
            >
              <Card className="bg-white border-gray-200 hover:shadow-xl transition-all duration-300 h-full">
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5 + i * 0.1 }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20" />
                  </div>
                  
                  <blockquote className="text-lg text-gray-700 leading-relaxed italic">
                    "{testimonial.text}"
                  </blockquote>
                  
                  <div className="flex items-start space-x-4 pt-4 border-t border-gray-100">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Building className="h-4 w-4" />
                        <span>{testimonial.company}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4" />
                        <span>{testimonial.location}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>

        {/* Video Testimonials */}
        <AnimatedSection className="space-y-12">
          <div className="text-center space-y-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Testimonios en{" "}
              <span className="text-primary">Video</span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Conoce las historias completas de nuestros clientes más exitosos
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {videoTestimonials.map((video, index) => (
              <AnimatedSection 
                key={index} 
                delay={0.2 + index * 0.1}
                hover={true}
                className="group cursor-pointer"
              >
                <div className="relative">
                  <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Button 
                          size="lg"
                          className="bg-white/95 text-primary hover:bg-white rounded-full w-16 h-16 p-0 shadow-xl hover:shadow-2xl transition-all duration-300"
                        >
                          <Play className="h-7 w-7 ml-1" />
                        </Button>
                      </motion.div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-black/80 text-white hover:bg-black/80 font-medium">
                        {video.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="pt-6 space-y-3">
                  <h4 className="font-semibold text-gray-900 group-hover:text-primary transition-colors text-lg leading-tight">
                    {video.title}
                  </h4>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Building className="h-4 w-4" />
                    <span className="font-medium">{video.company}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {video.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>


      </div>
    </section>
  );
}