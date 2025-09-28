import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { 
  Send, 
  Calculator,
  CheckCircle,
  MessageSquare,
  FileText,
  Clock
} from "lucide-react";

export function ContactFormSection() {
  const procedureSteps = [
    {
      number: "01",
      title: "Envía tu consulta",
      description: "Completa el formulario con los detalles de tu solicitud o necesidad logística.",
      icon: MessageSquare,
      color: "purple"
    },
    {
      number: "02", 
      title: "Análisis personalizado",
      description: "Nuestro equipo analiza tu caso y prepara una propuesta a medida.",
      icon: FileText,
      color: "blue"
    },
    {
      number: "03",
      title: "Cotización detallada",
      description: "Recibes una cotización completa con precios, tiempos y condiciones.",
      icon: Calculator,
      color: "purple"
    },
    {
      number: "04",
      title: "Respuesta rápida",
      description: "Te contactamos en máximo 2 horas para coordinar el siguiente paso.",
      icon: Clock,
      color: "green"
    }
  ];

  return (
    <section id="formulario" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-block px-4 py-2 bg-muted rounded-full text-accent">
            Solicitar Cotización
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
            Proceso simple y transparente
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Obtén una cotización personalizada en 4 pasos simples. 
            Nuestro equipo se encarga de todo el proceso.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Procedure Steps */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-2xl font-bold text-gray-900">
              Cómo funciona nuestro proceso
            </h3>
            
            <div className="space-y-6">
              {procedureSteps.map((step, index) => {
                const Icon = step.icon;
                const colorClasses = {
                  purple: "from-purple-600 to-purple-700",
                  blue: "from-blue-600 to-blue-700",
                  green: "from-green-600 to-green-700"
                };
                
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 relative">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">{step.number}</span>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Benefits */}
            <Card className="border-green-200 bg-green-50">
              <CardContent className="p-6 space-y-4">
                <h4 className="font-semibold text-green-800 flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5" />
                  <span>Garantías incluidas</span>
                </h4>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Respuesta garantizada en 2 horas</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Cotización sin compromiso</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Asesoría personalizada gratuita</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4" />
                    <span>Precios transparentes y competitivos</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-gray-200 shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-2xl">
                  <Calculator className="h-6 w-6 text-primary" />
                  <span>Formulario de contacto</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 border-b pb-2">
                    Información de contacto
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Nombre completo *
                      </label>
                      <Input placeholder="Tu nombre" className="bg-gray-50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Email corporativo *
                      </label>
                      <Input type="email" placeholder="tu@empresa.cl" className="bg-gray-50" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Teléfono *
                      </label>
                      <Input placeholder="+56 9 1234 5678" className="bg-gray-50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Empresa / Organización *
                      </label>
                      <Input placeholder="Nombre de tu empresa" className="bg-gray-50" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Cargo / Posición
                      </label>
                      <Input placeholder="Gerente, Encargado de compras, etc." className="bg-gray-50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        RUT Empresa
                      </label>
                      <Input placeholder="12.345.678-9" className="bg-gray-50" />
                    </div>
                  </div>
                </div>

                {/* Service Information */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-gray-900 border-b pb-2">
                    Detalles del servicio
                  </h4>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Tipo de servicio *
                      </label>
                      <Select>
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue placeholder="Selecciona un servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="envio-nacional">Envío Nacional</SelectItem>
                          <SelectItem value="logistica-ecommerce">Logística E-commerce</SelectItem>
                          <SelectItem value="transporte-corporativo">Transporte Corporativo</SelectItem>
                          <SelectItem value="almacenaje">Almacenaje y Distribución</SelectItem>
                          <SelectItem value="carga-especial">Carga Especial</SelectItem>
                          <SelectItem value="otros">Otros servicios</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Volumen mensual estimado
                      </label>
                      <Select>
                        <SelectTrigger className="bg-gray-50">
                          <SelectValue placeholder="Selecciona volumen" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-50">1 - 50 envíos/mes</SelectItem>
                          <SelectItem value="51-200">51 - 200 envíos/mes</SelectItem>
                          <SelectItem value="201-500">201 - 500 envíos/mes</SelectItem>
                          <SelectItem value="501-1000">501 - 1000 envíos/mes</SelectItem>
                          <SelectItem value="1000+">Más de 1000 envíos/mes</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Regiones de origen principales
                      </label>
                      <Input placeholder="RM, Valparaíso, etc." className="bg-gray-50" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-700">
                        Regiones de destino principales
                      </label>
                      <Input placeholder="Todo Chile, Norte, Sur, etc." className="bg-gray-50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Descripción detallada de tu necesidad *
                    </label>
                    <Textarea 
                      placeholder="Cuéntanos sobre tu proyecto: tipo de productos, características especiales, plazos, presupuesto estimado, objetivos, etc."
                      className="bg-gray-50 min-h-[120px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      ¿Cuándo necesitas el servicio?
                    </label>
                    <Select>
                      <SelectTrigger className="bg-gray-50">
                        <SelectValue placeholder="Selecciona urgencia" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="inmediato">Inmediato (esta semana)</SelectItem>
                        <SelectItem value="corto-plazo">Corto plazo (1-4 semanas)</SelectItem>
                        <SelectItem value="mediano-plazo">Mediano plazo (1-3 meses)</SelectItem>
                        <SelectItem value="largo-plazo">Largo plazo (más de 3 meses)</SelectItem>
                        <SelectItem value="evaluando">Solo estoy evaluando opciones</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="space-y-4 pt-4">
                  <Button 
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Enviar solicitud de cotización
                  </Button>
                  
                  <p className="text-xs text-gray-500 text-center">
                    * Campos obligatorios. Al enviar este formulario aceptas nuestros términos y condiciones.
                    <br />
                    Te contactaremos en máximo 2 horas durante horario laboral.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}