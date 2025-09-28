import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../components/ui/collapsible";
import { 
  MapPin, 
  CheckCircle, 
  Clock,
  Truck,
  DollarSign,
  Calculator,
  Shield,
  TrendingUp,
  ChevronDown
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedSection } from "../components/AnimatedSection";

export function TarifaUnicaPage() {
  const [openRegion, setOpenRegion] = useState<number | null>(null);
  const regions = [
    { name: "Región Metropolitana", status: "available", price: "Tarifa única" },
    { name: "Región de Valparaíso", status: "available", price: "Tarifa única" },
    { name: "Región del Bio Bio", status: "available", price: "Tarifa única" }
  ];

  const benefits = [
    {
      icon: Calculator,
      title: "Planificación financiera simple",
      description: "Sin sorpresas en los costos. Presupuesta fácilmente tus gastos de envío mensual."
    },
    {
      icon: Shield,
      title: "Transparencia total",
      description: "No hay costos ocultos ni variaciones según la ubicación dentro de nuestras regiones."
    },
    {
      icon: TrendingUp,
      title: "Enfoque en tu negocio",
      description: "Concéntrate en hacer crecer tu empresa, no en calcular costos de envío variables."
    }
  ];

  const coverageDetails = [
    {
      region: "Región Metropolitana",
      mainCities: ["Santiago", "Maipú", "Las Condes", "Providencia"],
      allCities: ["Santiago", "Maipú", "Las Condes", "Providencia", "Ñuñoa", "La Florida", "Puente Alto", "San Bernardo", "Pudahuel", "Peñalolén", "La Pintana", "El Bosque", "Renca", "Quilicura", "Lo Barnechea", "Vitacura", "La Reina", "Macul", "San Miguel"],
      delivery: "24-48 hrs",
      color: "green"
    },
    {
      region: "Región de Valparaíso",
      mainCities: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana"],
      allCities: ["Valparaíso", "Viña del Mar", "Quilpué", "Villa Alemana", "San Antonio", "Limache", "Quillota", "Los Andes", "San Felipe", "Casablanca", "Cartagena", "El Quisco", "Algarrobo", "Olmué", "La Ligua"],
      delivery: "24-48 hrs",
      color: "blue"
    },
    {
      region: "Región del Bio Bio",
      mainCities: ["Concepción", "Talcahuano", "Chillán", "Los Ángeles"],
      allCities: ["Concepción", "Talcahuano", "Chillán", "Los Ángeles", "Coronel", "San Pedro", "Tomé", "Penco", "Hualpén", "Chiguayante", "San Carlos", "Bulnes", "Yungay", "Cabrero", "Lota", "Arauco", "Curanilahue", "Lebu"],
      delivery: "48-72 hrs",
      color: "purple"
    }
  ];

  const toggleRegion = (index: number) => {
    setOpenRegion(openRegion === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat opacity-10 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1743515962661-0395ee8ac908?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWYWxwYXJhaXNvJTIwQ2hpbGUlMjBwb3J0JTIwaGFyYm9yJTIwbG9naXN0aWNzfGVufDF8fHx8MTc1NzUyMTYyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-white rounded-full text-primary border border-primary/20">
              Tarifa Única
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Una tarifa, <span className="text-primary">sin complicaciones</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Con una tarifa única, no hay sorpresas, lo que facilita la planificación financiera y permite a nuestros clientes concentrarse en sus operaciones, en lugar de preocuparse por variaciones de costos según la ubicación.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Calculator className="mr-2 h-5 w-5" />
                Contratar Servicio
              </Button>
              <Button variant="outline" size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                Ver Cobertura Detallada
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Ventajas de nuestra tarifa única
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Diseñada para simplificar tu operación logística
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                  <Card className="border-gray-200 hover:shadow-lg transition-shadow text-center h-80">
                    <CardContent className="p-8 space-y-6 h-full flex flex-col justify-center">
                      <div className="bg-primary p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coverage Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Cobertura especializada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Enfocados en las regiones más importantes de Chile
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-2xl mx-auto mt-6">
              <p className="text-amber-800 font-medium">
                ℹ️ Importante: La cobertura en las regiones de Valparaíso y Biobío es solo dentro de cada región, no incluye envíos inter-regionales.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid lg:grid-cols-3 gap-16">
            {/* Map Visualization */}
            <AnimatedSection direction="right" className="lg:col-span-2">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900 flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Mapa de Cobertura - Regiones Disponibles</span>
                  </h3>
                </div>
                <div className="p-6">
                  <div className="relative aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1578362390130-4b9196c3a148?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZSUyMGxhbmRzY2FwZSUyMG1vdW50YWluc3xlbnwxfHx8fDE3NTczOTU1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                      alt="Paisaje de Chile - Cobertura Regional"
                      className="w-full h-full object-cover opacity-60"
                    />
                    
                    {/* Coverage Points */}
                    <div className="absolute inset-0">
                      {/* Santiago/Centro */}
                      <div className="absolute top-[55%] left-[42%] w-4 h-4 bg-primary rounded-full animate-pulse shadow-lg"></div>
                      <div className="absolute top-[55%] left-[46%] text-xs bg-white rounded px-2 py-1 shadow-lg">
                        Región Metropolitana
                      </div>
                      
                      {/* Valparaíso */}
                      <div className="absolute top-[60%] left-[35%] w-4 h-4 bg-primary rounded-full animate-pulse shadow-lg"></div>
                      <div className="absolute top-[60%] left-[38%] text-xs bg-white rounded px-2 py-1 shadow-lg">
                        Valparaíso
                      </div>
                      
                      {/* Bio Bio */}
                      <div className="absolute top-[75%] left-[35%] w-4 h-4 bg-primary rounded-full animate-pulse shadow-lg"></div>
                      <div className="absolute top-[75%] left-[38%] text-xs bg-white rounded px-2 py-1 shadow-lg">
                        Bio Bio
                      </div>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-white rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-3">Cobertura en tiempo real</h4>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span>3/3 Regiones activas</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Truck className="h-4 w-4 text-blue-600" />
                            <span>50+ vehículos en ruta</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="h-4 w-4 text-primary" />
                            <span>Promedio 2 días</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <DollarSign className="h-4 w-4 text-green-600" />
                            <span>Tarifa única</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Regional Coverage List */}
            <AnimatedSection direction="left" delay={0.2} className="space-y-8">
              <Card className="border-gray-200">
                <CardHeader>
                  <CardTitle className="text-lg">Regiones Disponibles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {regions.map((region, index) => (
                      <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                        <div className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm text-gray-700">{region.name}</span>
                        </div>
                        <span className="text-sm font-medium text-primary">{region.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Detailed Coverage */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Cobertura detallada por región
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {coverageDetails.map((detail, index) => (
              <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                <div className={`relative ${openRegion === index ? 'z-10' : 'z-0'}`}>
                  <motion.div
                    layout
                    transition={{ 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 30,
                      duration: 0.6
                    }}
                    className={openRegion === index ? 'absolute' : 'relative'}
                    style={openRegion === index ? 
                      // Biobío (última tarjeta) se expande hacia la izquierda
                      index === 2 ? {
                        right: '0',
                        left: '-100%',
                        width: '200%'
                      } :
                      // Las otras regiones se expanden hacia ambos lados
                      { 
                        left: '-50%', 
                        right: '-50%', 
                        width: '200%',
                        marginLeft: '50%',
                        marginRight: '50%'
                      }
                    : {}}
                  >
                    <motion.div
                      animate={{
                        scale: openRegion === index ? 1.02 : 1,
                        boxShadow: openRegion === index 
                          ? "0 25px 50px -12px rgba(0, 0, 0, 0.25)" 
                          : "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                      }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 30 
                      }}
                    >
                      <Card className={`border-gray-200 hover:shadow-lg transition-all duration-300 bg-white ${
                        openRegion === index 
                          ? '' 
                          : 'h-96'
                      }`}>
                        <Collapsible open={openRegion === index} onOpenChange={() => toggleRegion(index)}>
                          <CardHeader className="pb-4">
                            <CardTitle className="text-lg text-primary">{detail.region}</CardTitle>
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-4 w-4 mr-1" />
                              {detail.delivery}
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            {openRegion !== index ? (
                              // Vista compacta - solo principales ciudades
                              <>
                                <div className="space-y-3">
                                  <h4 className="font-semibold text-gray-900">Principales ciudades:</h4>
                                  <div className="space-y-2">
                                    {detail.mainCities.map((city, cityIndex) => (
                                      <div key={cityIndex} className="flex items-center space-x-2">
                                        <CheckCircle className="h-3 w-3 text-green-600" />
                                        <span className="text-sm text-gray-600">{city}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <CollapsibleTrigger asChild>
                                  <Button 
                                    size="sm" 
                                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full mt-4"
                                  >
                                    <span>Ver todas las ciudades</span>
                                    <ChevronDown className="h-4 w-4 ml-2" />
                                  </Button>
                                </CollapsibleTrigger>
                              </>
                            ) : (
                              // Vista expandida - todas las ciudades en grid
                              <>
                                <div className="space-y-3">
                                  <h4 className="font-semibold text-gray-900">Principales ciudades:</h4>
                                  <div className="space-y-2">
                                    {detail.mainCities.map((city, cityIndex) => (
                                      <div key={cityIndex} className="flex items-center space-x-2">
                                        <CheckCircle className="h-3 w-3 text-green-600" />
                                        <span className="text-sm text-gray-600">{city}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>

                                <CollapsibleTrigger asChild>
                                  <Button 
                                    size="sm" 
                                    className="bg-primary hover:bg-primary/90 text-white px-4 py-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full mt-4"
                                  >
                                    <span>Ver menos ciudades</span>
                                    <ChevronDown className="h-4 w-4 ml-2 transform rotate-180" />
                                  </Button>
                                </CollapsibleTrigger>

                                <CollapsibleContent className="mt-6">
                                  <div className="space-y-6 border-t border-gray-100 pt-6">
                                    <h4 className="text-xl font-semibold text-gray-900 text-center">Todas las ciudades con cobertura</h4>
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                                      {detail.allCities.map((city, cityIndex) => (
                                        <div key={cityIndex} className="flex items-center justify-center min-h-[4rem] p-4 bg-gray-50 rounded-lg hover:bg-primary/10 hover:border-primary/20 border border-transparent transition-all duration-200 shadow-sm">
                                          <span className="text-sm text-gray-700 font-medium text-center leading-snug px-2 break-words hyphens-auto">
                                            {city}
                                          </span>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </CollapsibleContent>
                              </>
                            )}
                          </CardContent>
                        </Collapsible>
                      </Card>
                    </motion.div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              ¿Listo para simplificar tu logística?
            </h2>
            <p className="text-xl opacity-90 leading-relaxed">
              Contrata nuestro servicio y descubre cómo nuestra tarifa única puede optimizar tus costos de envío.
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Calculator className="mr-2 h-5 w-5" />
                Contratar Servicio
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}