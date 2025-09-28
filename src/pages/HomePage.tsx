import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { ArrowRight, CheckCircle, Truck, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedSection } from "../components/AnimatedSection";
import { ExpandableServicesSection } from "../components/ExpandableServicesSection";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const features = [
    {
      icon: CheckCircle,
      title: "Experiencia comprobada",
      description: "Más de 20 años de experiencia garantizan resultados excepcionales"
    },
    {
      icon: Truck,
      title: "Tarifa única",
      description: "Sin sorpresas en los costos, planifica tu presupuesto fácilmente"
    },
    {
      icon: Clock,
      title: "Seguimiento en tiempo real",
      description: "Conoce la ubicación exacta de tu envío en cada momento"
    }
  ];



  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-20 lg:py-28 overflow-hidden">
        {/* Santiago Background - Enhanced */}
        <div 
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat opacity-15 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1623518761090-089a985ab17f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTYW50aWFnbyUyMENoaWxlJTIwbmlnaHQlMjBwYW5vcmFtaWMlMjBza3lsaW5lfGVufDF8fHx8MTc1NzUxNzI3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        />
        
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-transparent to-white/50" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-16">
            {/* Content */}
            <AnimatedSection className="space-y-10 max-w-5xl mx-auto">
              <div className="space-y-8">
                <div className="inline-flex items-center px-6 py-3 rounded-full bg-muted text-foreground shadow-sm hover:shadow-md transition-shadow">
                  <span className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></span>
                  <span className="font-medium tracking-wide">EN TIEMPO Y FORMA</span>
                </div>
                
                <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold text-gray-900 leading-tight">
                  <span className="text-primary block">ÚNETE A</span>
                  <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">RUNBOX</span>
                </h1>
                
                <h2 className="text-xl sm:text-2xl lg:text-4xl font-semibold text-gray-800 leading-tight max-w-4xl mx-auto">
                  OLVÍDATE DE LA LOGÍSTICA EN EL ENVÍO DE TUS PEDIDOS
                </h2>
                
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                  Nos adaptamos a las necesidades de tu empresa, pyme o emprendimiento con soluciones personalizadas.
                </p>
              </div>

              {/* Enhanced CTA */}
              <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  onClick={() => onNavigate('contacto')}
                >
                  Contratar servicio
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-white px-10 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"

                  onClick={() => onNavigate('seguimiento')}
                >
                  <span className="text-lg font-semibold">Seguir un envío</span>
                </Button>
              </div>
            </AnimatedSection>


          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Equipo humano. Tecnología con el respaldo de un servicio cercano y confiable.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                  <Card className="border-gray-200 hover:shadow-lg transition-shadow text-center">
                    <CardContent className="p-8 space-y-6">
                      <div className="bg-primary p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ExpandableServicesSection onNavigate={onNavigate} />

      {/* Quick Actions */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right" className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Comienza hoy mismo
              </h2>
              <p className="text-xl opacity-90 leading-relaxed">
                Únete a las empresas que confían en Runbox para sus envíos.
                Contrata nuestro servicio y empieza a optimizar tu logística.
              </p>
              <div className="flex justify-start">
                <Button 
                  size="lg" 
                  className="bg-white text-primary hover:bg-gray-100"
                  onClick={() => onNavigate('contacto')}
                >
                  Contratar servicio
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={0.2} className="space-y-6">
              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Cobertura especializada</h3>
                  <p className="text-sm opacity-90">
                    Regiones Metropolitana, Valparaíso y Bio Bio con tarifa única.
                  </p>
                  <Button 
                    variant="link" 
                    className="text-white p-0 h-auto font-semibold mt-2"
                    onClick={() => onNavigate('tarifa-unica')}
                  >
                    Ver cobertura completa <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">Experiencia consolidada</h3>
                  <p className="text-sm opacity-90">
                    Conoce nuestra historia y el equipo detrás de Runbox.
                  </p>
                  <Button 
                    variant="link" 
                    className="text-white p-0 h-auto font-semibold mt-2"
                    onClick={() => onNavigate('quienes-somos')}
                  >
                    Conocer el equipo <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
}