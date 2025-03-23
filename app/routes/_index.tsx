import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { ArrowRight, ChevronRight, Code, Database, Globe, Layers, LineChart, Menu, MessageSquare, Settings, Users } from "lucide-react";
import ScrollToTop from "~/components/scroll-to-top";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import ScrollToSection from "~/utils/scroll-to-section";

export const meta: MetaFunction = () => {
  return [
    { title: "KW Consultoria" },
    {
      name: "description",
      content:
        "KW Consultoria oferece soluções de software personalizadas, criando sistemas do zero e realizando manutenções, além de melhorar a imagem visual das empresas com designs modernos e eficientes.",
    },
    {
      name: "keywords",
      content:
        "KW Consultoria, Desenvolvimento de Software, Criação de Sistemas, Manutenção de Sistemas, Melhoria Visual, Design de Sites, Consultoria de TI, Soluções Digitais, Desenvolvimento Web, Front-end, Back-end, React.js, Node.js, TypeScript, APIs REST, SEO, Tailwind CSS, MySQL, PostgreSQL, JavaScript, Docker, DevOps",
    },
    { name: "viewport", content: "width=device-width,initial-scale=1" },
  ];
};

export default function Index() {
  const linkContact = "https://wa.me/5511969057943?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20KW%20Consultoria%20e%20gostaria%20de%20saber%20mais%20sobre%20como%20posso%20impulsionar%20meu%20projeto%20com%20solu%C3%A7%C3%B5es%20tecnol%C3%B3gicas.%20Pode%20me%20passar%20mais%20detalhes%3F"
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        {/* Componentes de rolagem */}
        <ScrollToTop />
        <ScrollToSection />

        {/* Header/Navbar */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[#333]">
          <div className="container mx-auto py-4 px-4 flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 bg-[#8A5CF7] rounded-md flex items-center justify-center">
                <span className="font-bold text-xl text-white">KW</span>
              </div>
              <span className="font-bold text-xl">Consultoria</span>
            </Link>
            <nav className="hidden lg:flex items-center gap-8">
              <Link
                to="/"
                className="hover:text-[#8A5CF7] transition-colors relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8A5CF7] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="#sobre"
                className="hover:text-[#8A5CF7] transition-colors relative group"
              >
                Sobre
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8A5CF7] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="#servicos"
                className="hover:text-[#8A5CF7] transition-colors relative group"
              >
                Serviços
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8A5CF7] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="#projetos"
                className="hover:text-[#8A5CF7] transition-colors relative group"
              >
                Projetos
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8A5CF7] transition-all group-hover:w-full"></span>
              </Link>
              <Link
                to="#clientes"
                className="hover:text-[#8A5CF7] transition-colors relative group"
              >
                Clientes
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#8A5CF7] transition-all group-hover:w-full"></span>
              </Link>
            </nav>
            <div className="flex items-center gap-4">
              <Button className="hidden md:flex bg-transparent border border-[#8A5CF7] text-[#8A5CF7] hover:bg-[#8A5CF7]/10">
                <Link to="#contato">Contato</Link>
              </Button>
              <Button className="bg-[#8A5CF7] hover:bg-[#7349E5] text-white">
                <Link to={linkContact}>Orçamento</Link>
              </Button>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12" />
                  <line x1="4" x2="20" y1="6" y2="6" />
                  <line x1="4" x2="20" y1="18" y2="18" />
                </svg>
              </Button>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-20 right-20 w-64 h-64 bg-[#8A5CF7]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8A5CF7]/10 rounded-full blur-3xl"></div>
          </div>
          <div className="container mx-auto px-4 relative">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <div className="inline-block px-4 py-1 rounded-full bg-[#1A1A1A] text-sm mb-6 border border-[#333]">
                Transformando ideias em soluções digitais
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Soluções de <span className="text-[#8A5CF7]">Software</span>{" "}
                para impulsionar seu negócio
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                Desenvolvimento de landing pages, sistemas personalizados e
                consultorias estratégicas para empresas que buscam inovação e
                resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#8A5CF7] hover:bg-[#7349E5] text-white h-14 px-8 text-base"
                >
                  <Link to={linkContact} className="flex items-center gap-2">
                    Fale Comigo <ChevronRight size={18} />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-gray-700 hover:bg-[#1A1A1A] h-14 px-8 text-base">
                <Link to="#servicos" className="flex items-center gap-2">
                  Conheça os Serviços <ChevronRight size={18} />
                </Link>
              </Button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-6 rounded-xl border border-[#333] hover:border-[#8A5CF7]/50 transition-all group">
                <div className="h-14 w-14 rounded-lg bg-[#8A5CF7]/20 flex items-center justify-center mb-6 group-hover:bg-[#8A5CF7]/30 transition-all">
                  <Code size={24} className="text-[#8A5CF7]" />
                </div>
                <h3 className="text-xl font-bold mb-3">Desenvolvimento Web</h3>
                <p className="text-gray-400 mb-4">
                  Landing pages e sistemas web personalizados com foco em
                  conversão e experiência do usuário.
                </p>
                <Link
                  to="#servicos"
                  className="text-[#8A5CF7] flex items-center gap-1 text-sm group-hover:underline"
                >
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-6 rounded-xl border border-[#333] hover:border-[#8A5CF7]/50 transition-all group">
                <div className="h-14 w-14 rounded-lg bg-[#8A5CF7]/20 flex items-center justify-center mb-6 group-hover:bg-[#8A5CF7]/30 transition-all">
                  <Settings size={24} className="text-[#8A5CF7]" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Sistemas Personalizados
                </h3>
                <p className="text-gray-400 mb-4">
                  Desenvolvimento e manutenção de sistemas que automatizam
                  processos e aumentam a produtividade.
                </p>
                <Link
                  to="#servicos"
                  className="text-[#8A5CF7] flex items-center gap-1 text-sm group-hover:underline"
                >
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </div>

              <div className="bg-gradient-to-br from-[#1A1A1A] to-[#252525] p-6 rounded-xl border border-[#333] hover:border-[#8A5CF7]/50 transition-all group">
                <div className="h-14 w-14 rounded-lg bg-[#8A5CF7]/20 flex items-center justify-center mb-6 group-hover:bg-[#8A5CF7]/30 transition-all">
                  <LineChart size={24} className="text-[#8A5CF7]" />
                </div>
                <h3 className="text-xl font-bold mb-3">
                  Consultoria Estratégica
                </h3>
                <p className="text-gray-400 mb-4">
                  Orientação em SEO, performance e otimização de processos para
                  maximizar resultados.
                </p>
                <Link
                  to="#servicos"
                  className="text-[#8A5CF7] flex items-center gap-1 text-sm group-hover:underline"
                >
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            <div className="mt-20 flex justify-center">
              <Link
                to="#servicos"
                className="flex items-center gap-2 text-gray-400 hover:text-[#8A5CF7] transition-colors animate-bounce"
              >
                <span>Role para baixo</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-down"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Serviços */}
        <section id="servicos" className="bg-[#0A0A0A] py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Serviços Especializados
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Soluções completas para transformar sua presença digital e
                otimizar seus processos de negócio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-[#1A1A1A] border-none p-6 hover:bg-[#252525] transition-colors">
                <div className="h-12 w-12 rounded-lg bg-[#8A5CF7]/20 flex items-center justify-center mb-4">
                  <Code className="text-[#8A5CF7]" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Criação de Landing Pages
                </h3>
                <p className="text-gray-400 mb-4">
                  Páginas otimizadas para conversão que capturam a atenção dos
                  visitantes e geram leads qualificados.
                </p>
                <Link
                  to="#contato"
                  className="text-[#8A5CF7] flex items-center gap-1 text-sm hover:underline"
                >
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </Card>

              <Card className="bg-[#1A1A1A] border-none p-6 hover:bg-[#252525] transition-colors">
                <div className="h-12 w-12 rounded-lg bg-[#8A5CF7]/20 flex items-center justify-center mb-4">
                  <Settings className="text-[#8A5CF7]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Criação de Sistemas</h3>
                <p className="text-gray-400 mb-4">
                  Desenvolvimento de sistemas personalizados que automatizam
                  processos e aumentam a eficiência do seu negócio.
                </p>
                <Link
                  to={linkContact}
                  className="text-[#8A5CF7] flex items-center gap-1 text-sm hover:underline"
                >
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </Card>

              <Card className="bg-[#1A1A1A] border-none p-6 hover:bg-[#252525] transition-colors">
                <div className="h-12 w-12 rounded-lg bg-[#8A5CF7]/20 flex items-center justify-center mb-4">
                  <Settings className="text-[#8A5CF7]" />
                </div>
                <h3 className="text-xl font-bold mb-2">
                  Manutenção de Sistemas
                </h3>
                <p className="text-gray-400 mb-4">
                  Suporte contínuo, atualizações e melhorias para manter seus
                  sistemas funcionando perfeitamente.
                </p>
                <Link
                  to={linkContact}
                  className="text-[#8A5CF7] flex items-center gap-1 text-sm hover:underline"
                >
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </Card>

              <Card className="bg-[#1A1A1A] border-none p-6 hover:bg-[#252525] transition-colors">
                <div className="h-12 w-12 rounded-lg bg-[#8A5CF7]/20 flex items-center justify-center mb-4">
                  <LineChart className="text-[#8A5CF7]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Consultorias</h3>
                <p className="text-gray-400 mb-4">
                  Orientação estratégica em SEO, performance e otimização de
                  processos para impulsionar seu negócio.
                </p>
                <Link
                  to={linkContact}
                  className="text-[#8A5CF7] flex items-center gap-1 text-sm hover:underline"
                >
                  Saiba mais <ArrowRight size={14} />
                </Link>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-[#8A5CF7] hover:bg-[#7349E5] text-white">
                <Link to={linkContact} className="flex items-center gap-2">
                  Solicitar Orçamento <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="sobre" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-xl overflow-hidden bg-[#1A1A1A] flex items-center justify-center order-2 md:order-1">
                <div className="text-[#8A5CF7] text-[120px] font-bold opacity-20">
                  KW
                </div>
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="text-3xl md:text-5xl font-bold">
                  Sobre a KW Consultoria
                </h2>
                <p className="text-gray-400">
                  Com anos de experiência em desenvolvimento de software, a KW
                  Consultoria oferece soluções personalizadas para empresas que
                  buscam inovação e eficiência.
                </p>
                <p className="text-gray-400">
                  Especializado em desenvolvimento fullstack, SEO e consultoria
                  para startups, trago um olhar estratégico para cada projeto,
                  focando em resultados mensuráveis e crescimento sustentável.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-[#1A1A1A] p-4 rounded-lg">
                    <div className="text-[#8A5CF7] text-3xl font-bold">2+</div>
                    <div className="text-sm text-gray-400">
                      Anos de experiência
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] p-4 rounded-lg">
                    <div className="text-[#8A5CF7] text-3xl font-bold">15+</div>
                    <div className="text-sm text-gray-400">
                      Projetos entregues
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] p-4 rounded-lg">
                    <div className="text-[#8A5CF7] text-3xl font-bold">30+</div>
                    <div className="text-sm text-gray-400">
                      Clientes satisfeitos
                    </div>
                  </div>
                  <div className="bg-[#1A1A1A] p-4 rounded-lg">
                    <div className="text-[#8A5CF7] text-3xl font-bold">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">Comprometimento</div>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="border-gray-700 hover:bg-[#1A1A1A]"
                >
                  <Link to={linkContact} className="flex items-center gap-2">
                    Entre em Contato <ChevronRight size={16} />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Projetos */}

        {/* <section id="projetos" className="bg-[#0A0A0A] py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Projetos Recentes
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Conheça alguns dos trabalhos que desenvolvi e os resultados
                alcançados para meus clientes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="h-[300px] bg-[#1A1A1A] flex items-center justify-center">
                    <img
                      src={`/placeholder.svg?height=300&width=400`}
                      alt={`Projeto ${item}`}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-bold">Projeto {item}</h3>
                    <p className="text-gray-300 mb-4">
                      Landing page, desenvolvimento web, SEO
                    </p>
                    <Button
                      size="sm"
                      className="w-fit bg-[#8A5CF7] hover:bg-[#7349E5] text-white"
                    >
                      Ver detalhes
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button className="bg-[#8A5CF7] hover:bg-[#7349E5] text-white">
                <Link to={linkContact} className="flex items-center gap-2">
                  Quero um projeto assim <ChevronRight size={16} />
                </Link>
              </Button>
            </div>
          </div>
        </section> */}

        {/* Clientes */}

        {/* <section id="clientes" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Clientes e Parceiros
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Empresas que confiam no meu trabalho e na qualidade dos serviços
                prestados.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="h-24 bg-[#1A1A1A] rounded-lg flex items-center justify-center p-4"
                >
                  <img
                    src={`/placeholder.svg?height=60&width=120`}
                    alt={`Cliente ${item}`}
                    width={120}
                    height={60}
                    className="max-h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>

            <div className="mt-16 bg-[#1A1A1A] rounded-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Depoimentos de Clientes
                  </h3>
                  <div className="space-y-6">
                    <div className="bg-[#252525] p-6 rounded-lg">
                      <p className="italic text-gray-300 mb-4">
                        "A KW Consultoria transformou completamente nosso
                        processo de vendas online. A landing page desenvolvida
                        aumentou nossas conversões em mais de 200%."
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#8A5CF7]/20"></div>
                        <div>
                          <div className="font-medium">Empresa ABC</div>
                          <div className="text-sm text-gray-400">
                            Diretor de Marketing
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-[#252525] p-6 rounded-lg">
                      <p className="italic text-gray-300 mb-4">
                        "O sistema desenvolvido pela KW Consultoria automatizou
                        processos que antes levavam dias para serem concluídos.
                        Agora conseguimos focar no que realmente importa."
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-[#8A5CF7]/20"></div>
                        <div>
                          <div className="font-medium">Startup XYZ</div>
                          <div className="text-sm text-gray-400">CEO</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[#252525] p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">
                    Empresas que atendo atualmente
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Empresa A",
                      "Startup B",
                      "Agência C",
                      "E-commerce D",
                      "Consultoria E",
                    ].map((empresa, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-[#8A5CF7]/20 flex items-center justify-center">
                          <Users size={16} className="text-[#8A5CF7]" />
                        </div>
                        <span>{empresa}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full bg-[#8A5CF7] hover:bg-[#7349E5] text-white">
                      <Link
                        to={linkContact}
                        className="flex items-center justify-center gap-2"
                      >
                        Seja o próximo <ChevronRight size={16} />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* CTA */}
        <section className="py-20 bg-[#8A5CF7]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Pronto para transformar seu negócio?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Entre em contato agora mesmo e vamos discutir como posso ajudar a
              impulsionar seu projeto com soluções personalizadas.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#8A5CF7] hover:bg-gray-100"
            >
              <Link to={linkContact} className="flex items-center gap-2">
                Fale Comigo Agora <ChevronRight size={16} />
              </Link>
            </Button>
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Vamos Conversar
                </h2>
                <p className="text-gray-400 mb-8">
                  Preencha o formulário ao lado ou entre em contato diretamente
                  pelos canais abaixo.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#8A5CF7]/20 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#8A5CF7]"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Telefone</h3>
                      <p className="text-gray-400">(11) 96905-7943</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#8A5CF7]/20 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#8A5CF7]"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-gray-400">contato.kwconsultoria@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-lg bg-[#8A5CF7]/20 flex items-center justify-center shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-[#8A5CF7]"
                      >
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Endereço</h3>
                      <p className="text-gray-400">São Paulo, SP - Brasil</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="font-medium mb-4">Redes Sociais</h3>
                  <div className="flex gap-4">
                  <Link
                          to="https://www.linkedin.com/company/kw-consultoria-tech/"
                          className="h-10 w-10 rounded-full bg-[#1A1A1A] flex items-center justify-center hover:bg-[#8A5CF7] transition-colors"
                        >
                          <span className="sr-only">Linkedin</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                            <rect width="4" height="12" x="2" y="9" />
                            <circle cx="4" cy="4" r="2" />
                          </svg>
                        </Link>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A1A1A] p-6 md:p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="nome" className="text-sm font-medium">
                        Nome
                      </label>
                      <input
                        type="text"
                        id="nome"
                        className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A5CF7]"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A5CF7]"
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="assunto" className="text-sm font-medium">
                      Assunto
                    </label>
                    <input
                      type="text"
                      id="assunto"
                      className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A5CF7]"
                      placeholder="Assunto da mensagem"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="mensagem" className="text-sm font-medium">
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      rows={5}
                      className="w-full px-4 py-3 bg-[#252525] border border-[#333] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8A5CF7]"
                      placeholder="Descreva seu projeto ou dúvida..."
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <Button className="w-full bg-[#8A5CF7] hover:bg-[#7349E5] text-white py-6">
                      Enviar Mensagem{" "}
                      <MessageSquare size={16} className="ml-2" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-[#0A0A0A] py-12 border-t border-[#222]">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <Link to="/" className="text-2xl font-bold inline-block mb-4">
                  KW<span className="text-[#8A5CF7]">.</span>
                </Link>
                <p className="text-gray-400 mb-6 max-w-md">
                  Soluções personalizadas em desenvolvimento de software,
                  landing pages, sistemas e consultorias para impulsionar seu
                  negócio.
                </p>
                <Button
                  variant="outline"
                  className="border-gray-700 hover:bg-[#1A1A1A]"
                >
                  <Link to={linkContact} className="flex items-center gap-2">
                    Contate-me <ChevronRight size={16} />
                  </Link>
                </Button>
              </div>

              <div>
                <h3 className="font-bold mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="/"
                      className="text-gray-400 hover:text-[#8A5CF7] transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#sobre"
                      className="text-gray-400 hover:text-[#8A5CF7] transition-colors"
                    >
                      Sobre
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#servicos"
                      className="text-gray-400 hover:text-[#8A5CF7] transition-colors"
                    >
                      Serviços
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#projetos"
                      className="text-gray-400 hover:text-[#8A5CF7] transition-colors"
                    >
                      Projetos
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#clientes"
                      className="text-gray-400 hover:text-[#8A5CF7] transition-colors"
                    >
                      Clientes
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#contato"
                      className="text-gray-400 hover:text-[#8A5CF7] transition-colors"
                    >
                      Contato
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-bold mb-4">Serviços</h3>
                <ul className="space-y-2">
                  <li>
                    <Link
                      to="#servicos"
                      className="text-gray-400 hover:text-[#8A5CF7] transition-colors"
                    >
                      Landing Pages
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#servicos"
                      className="text-gray-400 hover:text-[#8A5CF7] transition-colors"
                    >
                      Desenvolvimento de Sistemas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#servicos"
                      className="text-gray-400 hover:text-[#8A5CF7] transition-colors"
                    >
                      Manutenção de Sistemas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#servicos"
                      className="text-gray-400 hover:text-[#8A5CF7] transition-colors"
                    >
                      Consultorias
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#servicos"
                      className="text-gray-400 hover:text-[#8A5CF7] transition-colors"
                    >
                      SEO
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-[#222] mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} KW Consultoria. Todos os
                direitos reservados.
              </p>
              <div className="flex gap-4 mt-4 md:mt-0">
                <Link
                  to="#"
                  className="text-gray-400 hover:text-[#8A5CF7] text-sm"
                >
                  Termos de Uso
                </Link>
                <Link
                  to="#"
                  className="text-gray-400 hover:text-[#8A5CF7] text-sm"
                >
                  Política de Privacidade
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
