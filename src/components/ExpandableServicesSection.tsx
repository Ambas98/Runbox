import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { ChevronDown, Mail, Phone } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

interface ServiceData {
  title: string;
  briefDescription: string;
  quesignifica: string;
  ejemplo: string;
  valor: string;
  icon: string;
}

const servicesData: ServiceData[] = [
  {
    title: "Logística E-commerce",
    briefDescription: "Soluciones completas para tu tienda online con gestión automatizada",
    quesignifica: "Un servicio integral que maneja todo el proceso logístico de tu tienda online, desde el almacenamiento hasta la entrega final al cliente.",
    ejemplo: "Tu tienda recibe 100 pedidos diarios. Nosotros nos encargamos de recibir los productos, almacenarlos, procesar cada pedido, empaquetarlo y enviarlo directamente a tus clientes.",
    valor: "Reduces costos operativos hasta 40%, eliminas la necesidad de bodega propia y te permites enfocar en ventas mientras nosotros manejamos la logística.",
    icon: "🏪"
  },
  {
    title: "Envío Corporativo", 
    briefDescription: "Servicios especializados para empresas con necesidades específicas",
    quesignifica: "Soluciones logísticas diseñadas para empresas que requieren envíos regulares, documentos importantes o productos corporativos.",
    ejemplo: "Una empresa necesita enviar contratos importantes a sucursales, muestras de productos a clientes potenciales, o equipos tecnológicos entre oficinas.",
    valor: "Tarifas preferenciales por volumen, servicio prioritario, gestión dedicada y reportes detallados para control empresarial.",
    icon: "🏢"
  },
  {
    title: "Distribución Especializada",
    briefDescription: "Para productos que requieren cuidado y manejo especial",
    quesignifica: "Transporte y distribución de productos delicados, frágiles, de alto valor o que requieren condiciones especiales de temperatura o seguridad.",
    ejemplo: "Envío de equipos médicos, obras de arte, productos farmacéuticos, electrónicos de alta gama o productos alimenticios que requieren cadena de frío.",
    valor: "Personal especializado, embalaje profesional, seguro total, seguimiento GPS y protocolos especiales que garantizan la integridad del producto.",
    icon: "📦"
  },
  {
    title: "Envío Normal",
    briefDescription: "Servicio estándar confiable para envíos cotidianos",
    quesignifica: "Nuestro servicio básico pero confiable para envíos regulares que no requieren urgencia ni cuidados especiales.",
    ejemplo: "Envío de ropa, libros, accesorios, productos de consumo general entre particulares o pequeños comercios.",
    valor: "Tarifa económica, tiempos de entrega predecibles, seguimiento básico y el respaldo de nuestra experiencia de más de 20 años.",
    icon: "📮"
  }
];

interface ExpandableServicesSectionProps {
  onNavigate: (page: string) => void;
}

export function ExpandableServicesSection({ onNavigate }: ExpandableServicesSectionProps) {
  const [openService, setOpenService] = useState<number | null>(null);

  const toggleService = (index: number) => {
    setOpenService(openService === index ? null : index);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center space-y-6 mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Servicios principales
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Soluciones logísticas adaptadas a tu tipo de negocio
          </p>
        </AnimatedSection>

        <div className="grid gap-6 max-w-4xl mx-auto">
          {servicesData.map((service, index) => (
            <AnimatedSection key={index} delay={0.1 + index * 0.1}>
              <Card className="border-2 border-gray-200 hover:border-primary/30 transition-all duration-300 overflow-hidden">
                <Collapsible open={openService === index} onOpenChange={() => toggleService(index)}>
                  <CollapsibleTrigger asChild>
                    <div className="w-full cursor-pointer">
                      <CardContent className="p-6 hover:bg-gray-50/50 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="text-3xl">{service.icon}</div>
                            <div className="text-left">
                              <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                {service.title}
                              </h3>
                              <p className="text-gray-600 leading-relaxed">
                                {service.briefDescription}
                              </p>
                            </div>
                          </div>
                          <ChevronDown 
                            className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
                              openService === index ? 'transform rotate-180' : ''
                            }`}
                          />
                        </div>
                      </CardContent>
                    </div>
                  </CollapsibleTrigger>
                  
                  <CollapsibleContent>
                    <div className="border-t border-gray-100 bg-gray-50/30">
                      <CardContent className="p-6 space-y-6">
                        <div className="grid gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                              ¿Qué significa?
                            </h4>
                            <p className="text-gray-700 leading-relaxed pl-5">
                              {service.quesignifica}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                              Ejemplo
                            </h4>
                            <p className="text-gray-700 leading-relaxed pl-5">
                              {service.ejemplo}
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                              <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                              Valor para ti
                            </h4>
                            <p className="text-gray-700 leading-relaxed pl-5">
                              {service.valor}
                            </p>
                          </div>
                        </div>
                        
                        <div className="pt-4 border-t border-gray-200">
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button 
                              className="bg-primary hover:bg-primary/90 text-white px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex-1"
                              onClick={() => onNavigate('contacto')}
                            >
                              <Mail className="w-4 h-4 mr-2" />
                              Contactar por este servicio
                            </Button>
                            <Button 
                              variant="outline" 
                              className="bg-primary hover:bg-primary/90 text-white px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                              onClick={() => window.open('https://wa.me/56934029087', '_blank')}
                            >
                              <Phone className="w-4 h-4 mr-2" />
                              WhatsApp
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}