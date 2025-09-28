import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Button } from "../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { 
  Send, 
  Calculator,
  CheckCircle,
  MessageSquare,
  FileText,
  Clock,
  Phone,
  Mail,
  MapPin,
  Globe
} from "lucide-react";
import { AnimatedSection } from "../components/AnimatedSection";

export function ContactoPage() {
  const procedureSteps = [
    {
      number: "01",
      title: "Envía tu consulta",
      description: "Completa el formulario con los detalles de tu solicitud o necesidad logística.",
      icon: MessageSquare,
      color: "primary"
    },
    {
      number: "02", 
      title: "Análisis personalizado",
      description: "Nuestro equipo analiza tu caso y prepara una propuesta a medida.",
      icon: FileText,
      color: "secondary"
    },
    {
      number: "03",
      title: "Propuesta detallada",
      description: "Recibes una propuesta completa con precios, tiempos y condiciones.",
      icon: Calculator,
      color: "primary"
    },
    {
      number: "04",
      title: "Respuesta rápida",
      description: "Te contactamos en máximo 2 horas para coordinar el siguiente paso.",
      icon: Clock,
      color: "secondary"
    }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: "Teléfono / WhatsApp",
      value: "+56 9 8669 5083",
      description: "Lunes a Viernes, 9:00 - 18:00"
    },
    {
      icon: Mail,
      title: "Email",
      value: "m.angeles@runbox.cl",
      description: "Respuesta en menos de 2 horas"
    },
    {
      icon: MapPin,
      title: "Oficina Principal",
      value: "Las Condes, Santiago",
      description: "Atención con cita previa"
    },
    {
      icon: Globe,
      title: "Horario de Atención",
      value: "Lunes a Viernes 9:00 - 17:00",
      description: "Sábados 9:00 - 15:00"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-white py-24 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat opacity-10 scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1726866492047-7f9516558c6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBsb2dpc3RpY3MlMjBzaGlwcGluZyUyMGZhY2lsaXR5fGVufDF8fHx8MTc1NzUyMTYyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center space-y-8">
            <div className="inline-block px-4 py-2 bg-white rounded-full text-primary border border-primary/20">
              Contacto
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Conversemos sobre tu <span className="text-primary">proyecto logístico</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestros expertos están listos para diseñar la solución perfecta para tu empresa. 
              Contrata nuestro servicio en menos de 2 horas.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              const isPhone = info.icon === Phone;
              
              return (
                <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                  <Card 
                    className={`border-gray-200 text-center hover:shadow-lg transition-shadow h-52 ${
                      isPhone ? 'cursor-pointer hover:border-primary/30' : ''
                    }`}
                    onClick={isPhone ? () => window.open('https://wa.me/56986695083', '_blank') : undefined}
                  >
                    <CardContent className="p-6 h-full flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="bg-primary p-3 rounded-lg w-12 h-12 mx-auto flex items-center justify-center">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 text-sm">{info.title}</h3>
                      </div>
                      <div className="space-y-2">
                        <p className="font-semibold text-primary text-sm leading-tight">{info.value}</p>
                        <p className="text-xs text-gray-600">{info.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Procedure Steps */}
            <AnimatedSection direction="right" className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">
                  Nuestro proceso de contratación
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Así es como trabajamos para entregarte la mejor propuesta logística:
                </p>
              </div>

              <div className="space-y-8">
                {procedureSteps.map((step, index) => {
                  const Icon = step.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <span className="text-2xl font-bold text-primary">{step.number}</span>
                          <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Guarantees */}
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
                      <span>Propuesta sin compromiso</span>
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
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection direction="left" delay={0.2} className="lg:col-span-3">
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
                        <Input placeholder="RM, Valparaíso, Bio Bio" className="bg-gray-50" />
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
                      className="w-full bg-primary hover:bg-primary/90 text-white px-10 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Enviar solicitud de contratación
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      * Campos obligatorios. Al enviar este formulario aceptas nuestros términos y condiciones.
                      <br />
                      Te contactaremos en máximo 2 horas durante horario laboral.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>


    </div>
  );
}