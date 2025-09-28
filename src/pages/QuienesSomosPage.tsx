import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Target, 
  Heart, 
  Shield, 
  Users,
  Award,
  Truck,
  CheckCircle,
  MapPin
} from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { AnimatedSection } from "../components/AnimatedSection";
import { TestimonialsSection } from "../components/TestimonialsSection";

export function QuienesSomosPage() {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "En RunBox conectamos a personas y empresas a través de entregas seguras, confiables y humanas. Creemos que la última milla no es solo logística, sino la experiencia que define la confianza del cliente final. Nuestra misión es simplificar la logística, garantizando cercanía, transparencia y cumplimiento normativo en cada entrega."
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Cuidamos cada envío como si fuera nuestro, garantizando la máxima seguridad y puntualidad."
    },
    {
      icon: Shield,
      title: "Confianza",
      description: "Construyendo relaciones sólidas y duraderas con nuestros clientes, convirtiéndonos en sus socios estratégicos para crecer juntos."
    }
  ];



  const team = [
    {
      name: "Carlos Mendoza",
      position: "Director General",
      experience: "Especialista en logística",
      image: "logistics team professional"
    },
    {
      name: "María González",
      position: "Gerente de Operaciones",
      experience: "Experta en distribución",
      image: "logistics manager professional"
    },
    {
      name: "Roberto Silva",
      position: "Jefe de Tecnología",
      experience: "Especialista en sistemas de tracking",
      image: "technology logistics professional"
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
            backgroundImage: `url('https://images.unsplash.com/photo-1748346918817-0b1b6b2f9bab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWFtd29yayUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NTc0ODU1OTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/50 via-white/30 to-white/50" />
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center space-y-6 mb-16">
            <div className="inline-block px-4 py-2 bg-white rounded-full text-primary border border-primary/20">
              Quiénes Somos
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
              Líderes en logística en Chile
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos una empresa chilena que conoce el mercado de la última milla. Nos adaptamos a las necesidades de tu empresa, pyme o emprendimiento, buscando siempre la eficiencia y entregando un servicio de primer nivel.
            </p>
          </AnimatedSection>


        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Content */}
            <AnimatedSection direction="right" className="space-y-12">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-gray-900">
                  Nuestra historia comenzó en Santiago
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Con más de 20 años de experiencia, RunBox nació como una empresa familiar en Santiago y hasta hoy mantenemos ese mismo espíritu cercano y humano. Nuestros primeros pasos fueron en el mundo de los bebestibles, y con el tiempo fuimos expandiendo nuestra operación hasta convertirnos en especialistas en e-commerce y medicamentos.
                  </p>
                  <p>
                    Uno de nuestros grandes hitos fue entrar al mundo farmacéutico, cumpliendo con la normativa del ISP y ofreciendo soluciones de trazabilidad y control que entregan confianza tanto a empresas como a pacientes.
                  </p>
                  <p>
                    Lo que nos diferencia es claro: una tarifa única y transparente, procesos confiables y, sobre todo, un equipo humano siempre dispuesto a ayudar y resolver. Porque para nosotros, la logística no es solo tecnología: es cercanía, confianza y compromiso.
                  </p>
                  <p>
                    Hoy, en RunBox ponemos nuestro foco en seguir innovando en la última milla, aportando experiencia, seguridad y cercanía en cada entrega, sin importar el sector o la magnitud del desafío.
                  </p>
                </div>
              </div>

              {/* Values */}
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">Nuestros valores</h3>
                <div className="space-y-6">
                  {values.map((value, index) => {
                    const Icon = value.icon;
                    return (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-primary p-3 rounded-lg flex-shrink-0">
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-lg">{value.title}</h4>
                          <p className="text-gray-600 leading-relaxed">{value.description}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </AnimatedSection>

            {/* Image */}
            <AnimatedSection direction="left" delay={0.2} className="relative">
              <div className="aspect-[4/5] rounded-lg overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMHRlYW0lMjB3b3JrcGxhY2UlMjBvZmZpY2UlMjBzbWlsaW5nfGVufDF8fHx8MTc1NzUxNjI4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Equipo amigable de Runbox"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              ¿Por qué elegir Runbox?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Equipo humano. Tecnología con el respaldo de un servicio cercano y confiable.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatedSection delay={0.1}>
              <div className="text-center space-y-4">
                <div className="bg-primary p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Experiencia Comprobada</h3>
                <p className="text-gray-600 leading-relaxed">
                  Experiencia sólida perfeccionando nuestros procesos de logística y distribución en Chile.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="text-center space-y-4">
                <div className="bg-primary p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                  <Truck className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Cobertura Especializada</h3>
                <p className="text-gray-600 leading-relaxed">
                  Enfoque en las regiones más importantes: Metropolitana, Valparaíso y Bio Bio.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="text-center space-y-4">
                <div className="bg-primary p-4 rounded-lg w-16 h-16 mx-auto flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">Resultados Garantizados</h3>
                <p className="text-gray-600 leading-relaxed">
                  Resultados consistentes y confiables que respaldan el crecimiento de tu negocio.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center space-y-6 mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Nuestro equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Profesionales comprometidos con la excelencia en cada entrega
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <AnimatedSection key={index} delay={0.1 + index * 0.1}>
                <Card className="border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 text-center space-y-6">
                    <div className="aspect-square rounded-full overflow-hidden bg-gray-100 mx-auto w-32 h-32">
                      <ImageWithFallback
                        src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx8fGVufDB8fHx8fDE3NTczOTU1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral`}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-primary font-medium">{member.position}</p>
                      <p className="text-gray-600">{member.experience}</p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />
    </div>
  );
}