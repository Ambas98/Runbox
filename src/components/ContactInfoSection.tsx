import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  MessageSquare,
  Headphones,
  Globe,
  Building
} from "lucide-react";

export function ContactInfoSection() {
  const contactMethods = [
    {
      icon: Phone,
      title: "Teléfono Principal",
      primary: "+56 9 8669 5083",
      secondary: "Lunes - Viernes 9:00 - 18:00",
      action: "Llamar ahora",
      color: "purple"
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Business",
      primary: "+56 9 8669 5083",
      secondary: "Respuesta inmediata",
      action: "Enviar mensaje",
      color: "green"
    },
    {
      icon: Mail,
      title: "Email Corporativo",
      primary: "m.angeles@runbox.cl",
      secondary: "Respuesta en 2 horas",
      action: "Enviar email",
      color: "blue"
    },
    {
      icon: Headphones,
      title: "Soporte Técnico",
      primary: "m.angeles@runbox.cl",
      secondary: "Para problemas técnicos",
      action: "Contactar soporte",
      color: "orange"
    }
  ];

  const offices = [
    {
      city: "Santiago (Casa Matriz)",
      address: "Av. Las Condes 12523, Torre 3, Oficina 809",
      region: "Región Metropolitana",
      phone: "+56 9 8669 5083",
      hours: "Lun-Vie: 9:00-17:00, Sáb: 9:00-15:00"
    },
    {
      city: "Valparaíso",
      address: "Cobertura integral en la región",
      region: "Región de Valparaíso", 
      phone: "+56 9 8669 5083",
      hours: "Lun-Vie: 9:00-17:00, Sáb: 9:00-15:00"
    },
    {
      city: "Bio Bío",
      address: "Cobertura integral en la región",
      region: "Región del Biobío",
      phone: "+56 9 8669 5083",
      hours: "Lun-Vie: 9:00-17:00, Sáb: 9:00-15:00"
    }
  ];

  return (
    <section id="contacto" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block px-4 py-2 bg-white rounded-full text-primary border border-primary/20">
            Contacto
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Estamos aquí para ayudarte
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Nuestro equipo de expertos está disponible 24/7 para resolver 
            todas tus consultas y brindarte la mejor atención.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Methods */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Canales de atención
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  const colorClasses = {
                    purple: "bg-primary",
                    green: "bg-accent", 
                    blue: "bg-secondary",
                    orange: "bg-destructive"
                  };
                  
                  return (
                    <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6 space-y-4">
                        <div className={`w-12 h-12 rounded-lg ${colorClasses[method.color as keyof typeof colorClasses]} flex items-center justify-center`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{method.title}</h4>
                          <p className="text-lg font-medium text-gray-900">{method.primary}</p>
                          <p className="text-sm text-gray-600">{method.secondary}</p>
                        </div>
                        <Button 
                          className={`w-full ${colorClasses[method.color as keyof typeof colorClasses]} text-white hover:opacity-90`}
                        >
                          {method.action}
                        </Button>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Emergency Contact */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-red-800">
                  <Phone className="h-6 w-6" />
                  <span>¿Necesitas ayuda urgente?</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-red-700">
                  Para envíos urgentes, pérdidas o emergencias fuera del horario comercial.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    className="bg-red-600 hover:bg-red-700 text-white"
                    onClick={() => window.open('https://wa.me/56934029087', '_blank')}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    +56 9 3402 9087
                  </Button>
                  <Button 
                    variant="outline" 
                    className="border-red-300 text-red-700 hover:bg-red-50"
                    onClick={() => window.open('mailto:contacto@runbox.cl', '_blank')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    contacto@runbox.cl
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Business Hours & Quick Info */}
          <div className="space-y-6">
            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Clock className="h-6 w-6 text-primary" />
                  <span>Horarios de atención</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Lunes - Viernes</span>
                    <span className="font-medium">9:00 - 17:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Sábados</span>
                    <span className="font-medium">9:00 - 15:00</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Domingos</span>
                    <span className="font-medium text-gray-500">Cerrado</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between items-center">
                    <span className="text-gray-600">Celular disponible</span>
                    <span className="font-medium text-green-700">Lun-Vie 9:00-18:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Globe className="h-6 w-6 text-secondary" />
                  <span>Información empresa</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-600">RUT:</span>
                  <span className="font-medium ml-2">96.123.456-7</span>
                </div>
                <div>
                  <span className="text-gray-600">Giro:</span>
                  <span className="font-medium ml-2">Servicios de logística</span>
                </div>
                <div>
                  <span className="text-gray-600">Dirección legal:</span>
                  <span className="font-medium ml-2">Av. Las Condes 12523, Torre 3, Oficina 809, Las Condes</span>
                </div>
                <div>
                  <span className="text-gray-600">Certificaciones:</span>
                  <span className="font-medium ml-2">ISO 9001, ISO 14001</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Nuestras oficinas en Chile
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    <Building className="h-5 w-5 text-primary" />
                    <span>{office.city}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div className="text-sm">
                      <p className="text-gray-900">{office.address}</p>
                      <p className="text-gray-600">{office.region}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-900">{office.phone}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{office.hours}</span>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full border-purple-300 text-purple-600 hover:bg-purple-50"
                  >
                    Ver en mapa
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}