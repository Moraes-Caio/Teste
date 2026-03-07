import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Heart, CheckCircle2, Star, ArrowRight, Calendar, Stethoscope, Phone } from 'lucide-react';

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-6 w-6 text-primary" fill="currentColor" />
            <span className="text-xl font-bold tracking-tight text-foreground">Sorriso Perfeito</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#tratamentos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Tratamentos</a>
            <a href="#diferenciais" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Diferenciais</a>
            <a href="#contato" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contato</a>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground hidden sm:block">
              Área Restrita
            </Link>
            <Button asChild className="rounded-full px-6">
              <a href="#agendar">Agendar Consulta</a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-sm font-medium text-primary">
              <Star className="h-3.5 w-3.5 mr-1 fill-primary" /> Avaliação 5 estrelas dos nossos pacientes
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-tight">
              O sorriso dos seus sonhos começa <span className="text-primary">aqui.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Especialistas em transformar sorrisos com tecnologia de ponta, conforto e um atendimento humanizado que você merece. Venha conhecer a Sorriso Perfeito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base px-8 h-14" asChild>
                <a href="#agendar">
                  Quero agendar uma avaliação <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 h-14" asChild>
                <a href="#tratamentos">Conhecer tratamentos</a>
              </Button>
            </div>
          </div>
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-1000 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-3xl transform rotate-3 scale-105" />
            <img 
              src="https://img.usecurling.com/p/800/600?q=smiling%20dentist%20patient&dpr=2" 
              alt="Paciente sorrindo no dentista" 
              className="relative rounded-3xl shadow-2xl object-cover aspect-[4/3] w-full"
            />
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-foreground">Por que escolher a Sorriso Perfeito?</h2>
            <p className="text-muted-foreground mt-4">Nossa estrutura foi pensada em cada detalhe para o seu conforto, segurança e melhores resultados.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Tecnologia de Ponta', desc: 'Equipamentos modernos para diagnósticos precisos e tratamentos mais rápidos e indolor.' },
              { title: 'Atendimento Humanizado', desc: 'Nossa equipe prioriza o seu bem-estar e conforto em cada etapa do processo.' },
              { title: 'Especialistas Renomados', desc: 'Profissionais altamente qualificados e em constante atualização nas melhores técnicas.' }
            ].map((feature, i) => (
              <div key={i} className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tratamentos */}
      <section id="tratamentos" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold text-foreground">Nossos Tratamentos</h2>
              <p className="text-muted-foreground mt-4">Oferecemos soluções completas para a sua saúde e estética bucal em um só lugar.</p>
            </div>
            <Button variant="outline" className="rounded-full" asChild>
              <a href="#agendar">Falar com especialista</a>
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Implantes', img: 'dental%20implant' },
              { title: 'Clareamento', img: 'white%20teeth' },
              { title: 'Ortodontia', img: 'braces%20smile' },
              { title: 'Prevenção', img: 'dental%20cleaning' },
            ].map((t, i) => (
              <div key={i} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
                <img 
                  src={`https://img.usecurling.com/p/400/500?q=${t.img}`} 
                  alt={t.title} 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="flex items-center gap-2 mb-2">
                    <Stethoscope className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-white">{t.title}</h3>
                  </div>
                  <p className="text-white/80 text-sm opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    Saiba mais sobre {t.title.toLowerCase()} na Sorriso Perfeito.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="agendar" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="bg-primary rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto shadow-2xl overflow-hidden relative">
            <div className="absolute top-0 right-0 -mt-16 -mr-16 text-white/10">
              <Heart className="h-64 w-64" fill="currentColor" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground mb-6 relative z-10">
              Pronto para mudar o seu sorriso?
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Entre em contato conosco e nossa equipe de atendimento agendará o melhor horário para sua avaliação.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 relative z-10">
              <Button size="lg" variant="secondary" className="rounded-full px-8 h-14 text-base gap-2 hover:bg-white/90 text-primary" asChild>
                <a href="#contato">
                  <Calendar className="h-5 w-5" /> Agendar Avaliação
                </a>
              </Button>
              <Button size="lg" className="rounded-full px-8 h-14 text-base gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-white border-white/20" asChild>
                <a href="#contato">
                  <Phone className="h-5 w-5" /> Ligar Agora
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contato" className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-6 w-6 text-primary" fill="currentColor" />
                <span className="text-xl font-bold tracking-tight">Sorriso Perfeito</span>
              </div>
              <p className="text-muted-foreground text-sm max-w-xs">
                Sua clínica odontológica de confiança. Oferecemos os melhores tratamentos para o seu sorriso e saúde bucal.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Contato</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>(11) 99999-9999</li>
                <li>contato@sorrisoperfeito.com.br</li>
                <li>Av. Paulista, 1000 - São Paulo, SP</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Links Úteis</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#tratamentos" className="hover:text-primary">Tratamentos</a></li>
                <li><a href="#diferenciais" className="hover:text-primary">Diferenciais</a></li>
                <li><Link to="/login" className="hover:text-primary">Área Restrita (Equipe)</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">© 2026 Clínica Sorriso Perfeito. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
