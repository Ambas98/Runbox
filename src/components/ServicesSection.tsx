import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { 
  Truck, 
  Globe, 
  Clock, 
  Shield, 
  Package, 
  MapPin,
  Plane,
  Ship
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: "Envío Nacional",
      description: "Entregas rápidas y seguras en todo el territorio nacional con seguimiento en tiempo real.",
      features: ["24-48 hrs", "Seguimiento GPS", "Seguro incluido"],
      color: "purple"
    },
    {
      icon: Globe,
      title: "Envío Internacional",
      description: "Conectamos tu negocio con más de 200 países alrededor del mundo.",
      features: ["Aduanas", "Documentación", "Express disponible"],
      color: "blue"
    },
    {
      icon: Package,
      title: "Logística E-commerce",
      description: "Soluciones integrales para tiendas online con gestión automatizada de inventario.",
      features: ["API integración", "Fulfillment", "Devoluciones"],
      color: "purple"
    },
    {
      icon: Plane,
      title: "Envío Express",
      description: "Para cuando cada minuto cuenta. Entregas urgentes en tiempo récord.",
      features: ["Same day", "Next day", "Prioritario"],
      color: "blue"
    },
    {
      icon: Ship,
      title: "Carga Marítima",
      description: "Transporte de grandes volúmenes por vía marítima con los mejores precios.",
      features: ["FCL/LCL", "Contenedores", "Consolidación"],
      color: "purple"
    },
    {
      icon: Shield,
      title: "Almacenaje Seguro",
      description: "Centros de distribución modernos con tecnología de punta y máxima seguridad.",
      features: ["Clima controlado", "24/7 vigilancia", "Gestión WMS"],
      color: "blue"
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-100">
            Nuestros Servicios
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Soluciones logísticas 
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}para cada necesidad
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desde pequeños paquetes hasta grandes cargas, tenemos la solución perfecta 
            para hacer crecer tu negocio sin límites geográficos.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const gradientClass = service.color === 'purple' 
              ? 'from-purple-600 to-purple-700' 
              : 'from-blue-600 to-blue-700';
            
            return (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="space-y-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${gradientClass} flex items-center justify-center`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <Badge 
                        key={featureIndex} 
                        variant="secondary" 
                        className="text-xs bg-gray-100 text-gray-700 hover:bg-gray-100"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center space-y-2">
            <Clock className="h-8 w-8 text-purple-600 mx-auto" />
            <h4 className="font-semibold text-gray-900">Seguimiento 24/7</h4>
            <p className="text-sm text-gray-600">Monitoreo en tiempo real</p>
          </div>
          <div className="text-center space-y-2">
            <Shield className="h-8 w-8 text-blue-600 mx-auto" />
            <h4 className="font-semibold text-gray-900">Seguro Total</h4>
            <p className="text-sm text-gray-600">Cobertura completa</p>
          </div>
          <div className="text-center space-y-2">
            <MapPin className="h-8 w-8 text-purple-600 mx-auto" />
            <h4 className="font-semibold text-gray-900">Red Global</h4>
            <p className="text-sm text-gray-600">200+ países</p>
          </div>
          <div className="text-center space-y-2">
            <Package className="h-8 w-8 text-blue-600 mx-auto" />
            <h4 className="font-semibold text-gray-900">API Robusta</h4>
            <p className="text-sm text-gray-600">Integración fácil</p>
          </div>
        </div>
      </div>
    </section>
  );
}