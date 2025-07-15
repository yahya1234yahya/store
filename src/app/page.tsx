import { CheckCircle, Star, Globe, Mail, MessageCircle, Phone, ArrowRight, Shield, Clock, Award, Monitor, Smartphone, Zap, Users, Heart, CheckCircle2, Play, Eye } from 'lucide-react';
import WhatsAppButton from '@/components/WhatsAppButton';
import TypewriterEffect from '@/components/TypewriterEffect';
import ScrollReveal from '@/components/ScrollReveal';
import HeroVideo from '@/components/HeroVideo';

export default function Home() {
  return (
    <div className="min-h-screen gray-pattern-1 relative overflow-x-hidden" style={{ backgroundColor: '#dbe6f3' }}>
      {/* Floating WhatsApp Button */}
      <div className="floating-whatsapp">
        <WhatsAppButton 
          phoneNumber="212XXXXXXXXX"
          message="Salut! Je suis intéressé par vos services web. Pouvez-vous me donner plus d'infos?"
          className="rounded-full w-16 h-16 flex items-center justify-center shadow-2xl"
        />
      </div>

      {/* Hero Section - WOW Effect */}
      <section className="relative min-h-screen flex items-center gray-pattern-2 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-15 animate-pulse delay-2000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="text-gray-900 space-y-8 fade-in">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Websites That
              <span className="text-blue-600 block">Sell. Without Risk.</span>
            </h1>
            
            <div className="text-xl md:text-2xl space-y-4">
              <p className="text-gray-700">
                Affordable, professional websites for Moroccan businesses.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-blue-600 font-semibold">✓</span>
                <TypewriterEffect 
                  words={["Mobile Friendly.", "Delivered in 5 Days.", "Just 2500 MAD.", "Pay ONLY After You're 100% Satisfied.", "Free to Cancel Anytime."]}
                  className="text-blue-600 font-semibold"
                />
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6 mt-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-blue-900 font-bold text-lg">🔒 100% Risk-Free Guarantee</p>
                    <p className="text-blue-800 text-base">
                      You pay <strong>NOTHING</strong> until your website is completed and you're completely satisfied. 
                      <strong> Free to cancel anytime</strong> - no questions asked.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="premium-button text-white px-8 py-4 rounded-full font-bold text-lg">
                Get Yours Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                <Play className="w-5 h-5 inline mr-2" />
                See How It Works
              </button>
            </div>
          </div>

          {/* Right Side - Video Mockup */}
          <div className="relative mockup-container">
            <div className="mockup-screen premium-shadow rounded-2xl overflow-hidden bg-white p-4">
              <div className="video-mockup">
                {/* Browser mockup header */}
                <div className="browser-header">
                  <div className="browser-dots">
                    <div className="browser-dot red"></div>
                    <div className="browser-dot yellow"></div>
                    <div className="browser-dot green"></div>
                  </div>
                  <div className="browser-address">
                    🌐 yahyaweb.online
                  </div>
                </div>
                
                {/* Video preview */}
                <div className="relative">
                  <HeroVideo />
                  

                </div>
                
                {/* Website preview info */}
 
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Risk-Free Guarantee Banner */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/90 to-indigo-700/90"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="w-8 h-8 text-yellow-300" />
              <h3 className="text-2xl md:text-3xl font-bold">100% RISK-FREE GUARANTEE</h3>
              <Shield className="w-8 h-8 text-yellow-300" />
            </div>
            <p className="text-lg md:text-xl font-medium mb-4">
              Pay <span className="text-yellow-300 font-bold">ABSOLUTELY NOTHING</span> until your website is finished and you're 100% satisfied
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm md:text-base">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>No upfront payment required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Free to cancel anytime</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Pay only after you love it</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Grid - Why Choose Me */}
      <section className="py-20 gray-pattern-3 relative overflow-hidden">
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent"></div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-blue-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="inline-block mb-4">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  🚀 Why Choose Me?
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Your Success is 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700"> My Priority</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Développeur web passionné basé au Maroc, je crée des sites web qui convertissent vos visiteurs en clients avec une approche moderne et efficace.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: <Zap className="w-10 h-10" />, 
                title: "Fast Delivery", 
                desc: "Votre site prêt en 3-7 jours maximum avec un design moderne et optimisé", 
                color: "from-blue-400 to-blue-600",
                bgColor: "bg-white/10 backdrop-blur-sm",
                borderColor: "border-white/20",
                stat: "3-7 jours"
              },
              { 
                icon: <Shield className="w-10 h-10" />, 
                title: "🔒 ZERO Risk - Pay ONLY After Completion", 
                desc: "Absolutely NO payment required until your website is 100% finished and you're completely satisfied. Free to cancel anytime during development - no questions asked, no hidden fees.", 
                color: "from-green-400 to-green-600",
                bgColor: "bg-green-50/50 backdrop-blur-sm",
                borderColor: "border-green-200",
                stat: "0 MAD upfront"
              },
              { 
                icon: <Smartphone className="w-10 h-10" />, 
                title: "Mobile Responsive", 
                desc: "Design parfait sur tous les appareils : mobile, tablet, desktop", 
                color: "from-blue-400 to-blue-600",
                bgColor: "bg-white/10 backdrop-blur-sm",
                borderColor: "border-white/20",
                stat: "100% responsive"
              },
              { 
                icon: <Globe className="w-10 h-10" />, 
                title: "Free Hosting & Domain", 
                desc: "Hébergement professionnel et domaine inclus pour la première année", 
                color: "from-blue-400 to-blue-600",
                bgColor: "bg-white/10 backdrop-blur-sm",
                borderColor: "border-white/20",
                stat: "1 an gratuit"
              },
              { 
                icon: <Users className="w-10 h-10" />, 
                title: "Local Support", 
                desc: "Support technique en français et arabe, basé au Maroc pour une communication fluide", 
                color: "from-blue-400 to-blue-600",
                bgColor: "bg-white/10 backdrop-blur-sm",
                borderColor: "border-white/20",
                stat: "🇲🇦 Maroc"
              },
              { 
                icon: <MessageCircle className="w-10 h-10" />, 
                title: "WhatsApp Support", 
                desc: "Assistance rapide et réactive via WhatsApp pour tous vos besoins", 
                color: "from-blue-400 to-blue-600",
                bgColor: "bg-white/10 backdrop-blur-sm",
                borderColor: "border-white/20",
                stat: "24/7 disponible"
              }
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 150}>
                <div className={`group relative bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden hover:border-blue-300`}>
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  {/* Icon with gradient background */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Badge with stats */}
                  <div className="absolute top-6 right-6 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                    {item.stat}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {item.desc}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="absolute bottom-6 right-6 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-4 h-4 text-white" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <ScrollReveal delay={800}>
            <div className="text-center mt-16">
              <div className="inline-flex items-center space-x-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full px-8 py-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-900 font-medium">Plus de 50 sites créés</span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-blue-500 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-900 font-medium">5.0 étoiles</span>
                </div>
                <div className="w-px h-6 bg-gray-300"></div>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-blue-500 fill-current" />
                  <span className="text-gray-900 font-medium">100% satisfait</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pricing Cards - Interactive */}
      <section className="py-20 gray-pattern-4 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-20">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  💰 Pricing Plans
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Choose Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Perfect Plan</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des solutions adaptées à chaque besoin. Commencez petit, grandissez avec nous.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Pack */}
            <ScrollReveal delay={100}>
              <div className="group relative bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-3xl p-8 hover:bg-white transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:border-blue-300">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-blue-500/20 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                      Best for shops
                    </div>
                    <div className="text-right">
                      <div className="text-4xl font-bold text-gray-900">2500</div>
                      <div className="text-blue-600 text-sm">MAD</div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Pack Basic</h3>
                    <p className="text-gray-600">Parfait pour débuter votre présence en ligne</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      { text: "Site une page professionnel", icon: "🌐" },
                      { text: "Domaine personnalisé (.ma/.com)", icon: "🎯" },
                      { text: "Hébergement 1ère année gratuite", icon: "🚀" },
                      { text: "Bouton WhatsApp intégré", icon: "💬" },
                      { text: "Responsive mobile/tablet", icon: "📱" }
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                        <div className="w-6 h-6 bg-green-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-xs">{feature.icon}</span>
                        </div>
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Choisir ce Pack
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Pro Pack - Popular */}
            <ScrollReveal delay={200}>
              <div className="group relative bg-blue-50 backdrop-blur-sm border-2 border-blue-500 rounded-3xl p-8 transform scale-110 hover:scale-115 transition-all duration-500 shadow-2xl">
                {/* Popular badge */}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg animate-pulse">
                    🔥 Most Popular
                  </div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-blue-600/30 rounded-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6 mt-4">
                    <div className="bg-blue-500/20 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
                      Ideal for booking
                    </div>
                    <div className="text-right">
                      <div className="text-5xl font-bold text-gray-900">3500</div>
                      <div className="text-blue-700 text-sm">MAD</div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Pack Pro</h3>
                    <p className="text-gray-700">Pour les entreprises ambitieuses</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      { text: "Jusqu'à 5 pages optimisées", icon: "📄" },
                      { text: "Formulaire de réservation/contact", icon: "📋" },
                      { text: "Galerie d'images professionnelle", icon: "🖼️" },
                      { text: "Email professionnel @votre-domaine", icon: "✉️" },
                      { text: "Certificat SSL gratuit", icon: "🔒" },
                      { text: "Optimisation SEO basique", icon: "🔍" }
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-800">
                        <div className="w-6 h-6 bg-blue-400/30 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-xs">{feature.icon}</span>
                        </div>
                        <span>{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-2xl font-bold hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Choisir ce Pack
                  </button>
                </div>
              </div>
            </ScrollReveal>

            {/* Custom Pack */}
            <ScrollReveal delay={300}>
              <div className="group relative bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-3xl p-8 hover:bg-white transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:border-gray-400">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-500/20 to-gray-700/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="bg-gray-500/20 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold">
                      Custom for serious
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-gray-900">Sur</div>
                      <div className="text-2xl font-bold text-gray-600">Devis</div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Pack Custom</h3>
                    <p className="text-gray-600">Solution sur mesure pour vos besoins spécifiques</p>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {[
                      { text: "Site immobilier avec filtres", icon: "🏠" },
                      { text: "Plateforme de réservation", icon: "📅" },
                      { text: "Site restaurant avec menu", icon: "🍽️" },
                      { text: "E-commerce basique", icon: "🛍️" },
                      { text: "Intégrations personnalisées", icon: "⚙️" }
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                        <div className="w-6 h-6 bg-gray-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          <span className="text-xs">{feature.icon}</span>
                        </div>
                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white py-4 rounded-2xl font-bold hover:from-gray-700 hover:to-gray-900 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Contactez-moi
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Bottom guarantee */}
          <ScrollReveal delay={400}>
            <div className="text-center mt-16">
              {/* Main guarantee bar */}
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-2xl p-8 mb-8 shadow-2xl">
                <div className="flex items-center justify-center space-x-4 mb-4">
                  <Shield className="w-8 h-8" />
                  <h3 className="text-2xl font-bold">🔒 RISK-FREE GUARANTEE</h3>
                  <Shield className="w-8 h-8" />
                </div>
                <p className="text-xl font-semibold mb-4">
                  You pay <span className="text-yellow-300">ZERO</span> until your website is finished and you're 100% satisfied!
                </p>
                <p className="text-lg opacity-90">
                  Free to cancel anytime during development - no questions asked, no hidden fees.
                </p>
              </div>

              {/* Feature highlights */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-6 h-6 text-blue-500" />
                  </div>
                  <h4 className="text-gray-900 font-semibold mb-2">100% Guarantee</h4>
                  <p className="text-gray-600 text-sm">Pay only after completion and satisfaction</p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-6 h-6 text-blue-500" />
                  </div>
                  <h4 className="text-gray-900 font-semibold mb-2">Fast Delivery</h4>
                  <p className="text-gray-600 text-sm">3-7 days maximum delivery</p>
                </div>

                <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-6 h-6 text-blue-500" />
                  </div>
                  <h4 className="text-gray-900 font-semibold mb-2">Free Cancellation</h4>
                  <p className="text-gray-600 text-sm">Cancel anytime during development</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How It Works - Visual Timeline */}
      <section className="py-20 gray-dots-pattern">
        <div className="max-w-7xl mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-600">
                Simple, transparent, et sans risque
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                number: "1",
                title: "Contact Me",
                desc: "Dites-moi vos besoins via WhatsApp ou le formulaire",
                icon: <MessageCircle className="w-12 h-12" />
              },
              {
                number: "2", 
                title: "I Build It",
                desc: "Je crée votre site en 3-7 jours avec des mises à jour régulières",
                icon: <Monitor className="w-12 h-12" />
              },
              {
                number: "3",
                title: "You Decide",
                desc: "Testez votre site. Vous payez seulement si vous êtes satisfait",
                icon: <Heart className="w-12 h-12" />
              }
            ].map((step, index) => (
              <ScrollReveal key={index} delay={index * 200}>
                <div className="text-center timeline-connector">
                  <div className="premium-card hover-lift p-8 rounded-2xl mx-auto">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">
                      {step.number}
                    </div>
                    <div className="text-blue-600 mb-4">
                      {step.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Chat Style */}
      <section className="py-20 gray-pattern-5 relative overflow-hidden">
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent"></div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-300 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="bg-blue-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  💬 Testimonials
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                What My Clients
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700"> Say</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Plus de 50 clients satisfaits à travers le Maroc
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Testimonial 1 */}
            <ScrollReveal delay={100}>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    AM
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-2xl p-6 mb-4">
                      <p className="text-gray-800 leading-relaxed">
                        "Excellent travail! Mon site e-commerce est parfait. Service rapide et professionnel. Je recommande vivement!"
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-900 font-semibold">Ahmed M.</p>
                        <p className="text-gray-600 text-sm">E-commerce Owner</p>
                      </div>
                      <div className="flex text-blue-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial 2 */}
            <ScrollReveal delay={200}>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    SK
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-2xl p-6 mb-4">
                      <p className="text-gray-800 leading-relaxed">
                        "Site de restaurant magnifique avec système de réservation. Mes clients adorent! Merci beaucoup."
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-900 font-semibold">Sofia K.</p>
                        <p className="text-gray-600 text-sm">Restaurant Owner</p>
                      </div>
                      <div className="flex text-blue-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial 3 */}
            <ScrollReveal delay={300}>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    YB
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-2xl p-6 mb-4">
                      <p className="text-gray-800 leading-relaxed">
                        "Portfolio parfait pour mon agence immobilière. Design moderne et fonctionnalités exceptionnelles!"
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-900 font-semibold">Youssef B.</p>
                        <p className="text-gray-600 text-sm">Real Estate Agent</p>
                      </div>
                      <div className="flex text-blue-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Testimonial 4 */}
            <ScrollReveal delay={400}>
              <div className="bg-white border border-gray-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    LH
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-100 rounded-2xl p-6 mb-4">
                      <p className="text-gray-800 leading-relaxed">
                        "Service client exceptionnel! Mon site vitrine est exactement ce que je voulais. Très satisfaite!"
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-900 font-semibold">Laila H.</p>
                        <p className="text-gray-600 text-sm">Boutique Owner</p>
                      </div>
                      <div className="flex text-blue-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Additional testimonial row focused on risk-free guarantee */}
          <div className="max-w-2xl mx-auto mt-12">
            <ScrollReveal delay={500}>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                    KR
                  </div>
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl p-6 mb-4 border border-blue-200">
                      <p className="text-gray-800 leading-relaxed">
                        "J'étais sceptique au début, mais l'approche 'paiement après satisfaction' m'a convaincu d'essayer. Résultat: un site parfait livré en 5 jours! Zéro stress, zéro risque financier. Je recommande à 100%!"
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-900 font-semibold">Karim R.</p>
                        <p className="text-gray-600 text-sm">Restaurant Owner</p>
                      </div>
                      <div className="flex text-blue-500">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>


      {/* Payment Section - Sleek */}
      <section className="py-20 gray-pattern-4 relative overflow-hidden">
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-48 h-48 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-36 h-36 bg-indigo-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-blue-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  💳 Secure Payments
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Safe & Secure
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Payment System</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Système de paiement sécurisé pour votre tranquillité d'esprit
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 p-12 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Système de paiement sécurisé bientôt disponible via DodoPay
                  </h3>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    En attendant, contactez-moi directement pour organiser le paiement après validation de votre site.
                  </p>
                  
                  {/* Payment methods */}
                  <div className="flex justify-center items-center space-x-6 mb-8">
                    <div className="w-16 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md hover:shadow-lg transition-shadow">
                      VISA
                    </div>
                    <div className="w-16 h-10 bg-gray-600 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md hover:shadow-lg transition-shadow">
                      MC
                    </div>
                    <div className="w-16 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-white font-bold text-sm shadow-md hover:shadow-lg transition-shadow">
                      DODO
                    </div>
                  </div>
                  
                  {/* Notification input */}
                  <div className="max-w-md mx-auto mb-8">
                    <div className="flex gap-3">
                      <input 
                        type="email" 
                        placeholder="Notify me when it's ready" 
                        className="flex-1 px-4 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Notify Me
                      </button>
                    </div>
                  </div>
                  
                  {/* Security features */}
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div className="p-4">
                      <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Shield className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">SSL Encrypted</h4>
                      <p className="text-gray-600 text-sm">Transactions sécurisées</p>
                    </div>
                    <div className="p-4">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Verified</h4>
                      <p className="text-gray-600 text-sm">Paiements vérifiés</p>
                    </div>
                    <div className="p-4">
                      <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Heart className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 mb-1">Trusted</h4>
                      <p className="text-gray-600 text-sm">Plateforme de confiance</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 gray-pattern-1 relative overflow-hidden">
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-300 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Start Risk-Free?
              </h2>
              <p className="text-xl text-gray-600 mb-6">
                Let's create something amazing together
              </p>
              <div className="inline-flex items-center bg-blue-50 border-2 border-blue-200 rounded-full px-8 py-4 shadow-lg">
                <Shield className="w-6 h-6 text-blue-500 mr-3" />
                <span className="text-blue-800 font-semibold">
                  Remember: You pay NOTHING until you're 100% satisfied!
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <ScrollReveal delay={100}>
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-gray-900">Let's Talk</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/30">
                      <MessageCircle className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">WhatsApp</p>
                      <p className="text-gray-600">+212 6XX XXX XXX</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-400/30">
                      <Mail className="w-6 h-6 text-blue-500" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600">contact@votre-site.ma</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 p-8 rounded-3xl shadow-2xl">
                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all">
                      <option className="bg-white text-gray-900">Pack Basic - 2500 MAD</option>
                      <option className="bg-white text-gray-900">Pack Pro - 3500 MAD</option>
                      <option className="bg-white text-gray-900">Pack Custom - Sur devis</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 rounded-lg font-bold hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Made in Morocco. Powered by Code.</h3>
            <p className="text-gray-400 mb-8">
              Professional websites for ambitious businesses
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                <Phone className="w-5 h-5" />
              </div>
            </div>
            <div className="flex justify-center space-x-8 mb-8 text-sm">
              <span className="hover:text-yellow-400 cursor-pointer">🇬🇧 English</span>
              <span className="hover:text-yellow-400 cursor-pointer">🇫🇷 Français</span>
              <span className="hover:text-yellow-400 cursor-pointer">🇲🇦 العربية</span>
            </div>
            <div className="pt-8 border-t border-gray-800 text-gray-400">
              <p>&copy; 2025 - Crafted with ❤️ in Morocco</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
