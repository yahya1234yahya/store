import { CheckCircle, Star, Globe, Mail, MessageCircle, Phone, ArrowRight, Shield, Clock, Award, Monitor, Smartphone, Zap, Users, Heart, CheckCircle2, Play, Eye, Rocket, Target, FileText, Camera, Lock, Search, MapPin, Home as HomeIcon, Calendar, ShoppingCart, Settings, CreditCard, DollarSign, TrendingUp, Flag, X, Bell, RefreshCw } from 'lucide-react';
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
          phoneNumber="212658860346"
          message="Salut! Je suis intéressé par vos services web. Pouvez-vous me donner plus d&apos;infos?"
          className="rounded-full w-16 h-16 flex items-center justify-center shadow-2xl"
          useImage={true}
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
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <TypewriterEffect 
                  words={["Mobile Friendly.", "Delivered in 5 Days.", "Just 2500 MAD.", "Pay ONLY After You&apos;re 100% Satisfied.", "Free to Cancel Anytime."]}
                  className="text-blue-600 font-semibold"
                />
              </div>
              <div className="relative bg-gradient-to-r from-blue-50 via-indigo-50 to-blue-50 border-2 border-blue-300 rounded-3xl p-8 mt-8 shadow-2xl hover:shadow-3xl transition-all duration-500 group overflow-hidden">
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-100/50 via-indigo-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-indigo-300 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <h3 className="text-blue-900 font-bold text-xl md:text-2xl">
                          100% Risk-Free Guarantee
                        </h3>
                      </div>
                      <p className="text-blue-800 text-base md:text-lg leading-relaxed mb-4">
                        You pay <span className="text-blue-600 font-black text-lg">ABSOLUTELY NOTHING</span> until your website is completed. 
                        <span className="text-blue-600 font-bold"> Free to cancel anytime</span> - no questions asked.
                      </p>
                      
                      {/* Feature badges */}
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Get Yours Now
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-300">
                <MessageCircle className="w-5 h-5 inline mr-2" />
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
                    <div className="browser-dot blue"></div>
                  </div>
                  <div className="browser-address">
                    <Globe className="w-4 h-4 inline mr-1" />
                    yahyaweb.online
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
                  <Rocket className="w-4 h-4 inline mr-1" />
                  Why Choose Me?
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
                title: "ZERO Risk - Pay ONLY After Completion", 
                desc: "Absolutely NO payment required until your website is 100% finished.", 
                color: "from-blue-400 to-blue-600",
                bgColor: "bg-blue-50/50 backdrop-blur-sm",
                borderColor: "border-blue-200",
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
                stat: "Morocco"
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
                <div className={`group relative bg-white/90 backdrop-blur-sm border-2 border-gray-200 rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 overflow-hidden hover:border-blue-300 h-80 flex flex-col`}>
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
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors flex-grow">
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
                  <DollarSign className="w-4 h-4 inline mr-1" />
                  Pricing Plans
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
                      { text: "Site une page professionnel", icon: <Globe className="w-4 h-4" /> },
                      { text: "Domaine personnalisé (.ma/.com)", icon: <Target className="w-4 h-4" /> },
                      { text: "Hébergement 1&egrave;re année gratuite", icon: <Rocket className="w-4 h-4" /> },
                      { text: "Bouton WhatsApp intégré", icon: <MessageCircle className="w-4 h-4" /> },
                      { text: "Responsive mobile/tablet", icon: <Smartphone className="w-4 h-4" /> }
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                        <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          {feature.icon}
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
                    <TrendingUp className="w-4 h-4 inline mr-1" />
                    Most Popular
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
                      { text: "Jusqu&apos;à 5 pages optimisées", icon: <FileText className="w-4 h-4" /> },
                      { text: "Formulaire de réservation/contact", icon: <FileText className="w-4 h-4" /> },
                      { text: "Galerie d&apos;images professionnelle", icon: <Camera className="w-4 h-4" /> },
                      { text: "Email professionnel @votre-domaine", icon: <Mail className="w-4 h-4" /> },
                      { text: "Certificat SSL gratuit", icon: <Lock className="w-4 h-4" /> },
                      { text: "Optimisation SEO basique", icon: <Search className="w-4 h-4" /> }
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-800">
                        <div className="w-6 h-6 bg-blue-400/30 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          {feature.icon}
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
                      { text: "Site immobilier avec filtres", icon: <HomeIcon className="w-4 h-4" /> },
                      { text: "Plateforme de réservation", icon: <Calendar className="w-4 h-4" /> },
                      { text: "Site restaurant avec menu", icon: <FileText className="w-4 h-4" /> },
                      { text: "E-commerce basique", icon: <ShoppingCart className="w-4 h-4" /> },
                      { text: "Intégrations personnalisées", icon: <Settings className="w-4 h-4" /> }
                    ].map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                        <div className="w-6 h-6 bg-gray-500/20 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                          {feature.icon}
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

        </div>
      </section>

      {/* How It Works - Visual Timeline */}




      {/* Payment Section - Enhanced */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#dbe6f3' }}>
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
                  <CreditCard className="w-4 h-4 inline mr-1" />
                  Secure Payments
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Payment & 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Guarantee</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Votre tranquillité d&apos;esprit est notre priorité absolue
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            {/* Risk-Free Guarantee Banner */}
            <ScrollReveal delay={100}>
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-3xl shadow-2xl mb-12 text-center">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="w-12 h-12 mr-4" />
                  <h3 className="text-3xl font-bold">100% Risk-Free Guarantee</h3>
                </div>
                <p className="text-xl mb-6">
                  Vous ne payez RIEN tant que votre site n&apos;est pas terminé et que vous n&apos;êtes pas entièrement satisfait
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <Lock className="w-8 h-8 mx-auto mb-2" />
                    <h4 className="font-semibold">Aucun paiement initial</h4>
                    <p className="text-sm opacity-90">Commencez sans risque</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <X className="w-8 h-8 mx-auto mb-2" />
                    <h4 className="font-semibold">Annulation gratuite</h4>
                    <p className="text-sm opacity-90">À tout moment</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                    <h4 className="font-semibold">Paiement après validation</h4>
                    <p className="text-sm opacity-90">Seulement si satisfait</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Payment Methods */}
            <ScrollReveal delay={200}>
              <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 mb-8">
                <div className="text-center mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CreditCard className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Méthodes de paiement acceptées
                  </h3>
                  
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    Paiement sécurisé via DodoPay - Bientôt disponible. En attendant, contactez-moi directement.
                  </p>
                  
                  {/* Payment methods */}
                  <div className="flex justify-center items-center space-x-6 mb-8">
                    <div className="flex flex-col items-center p-4 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-24 h-24">
                      <CreditCard className="w-8 h-8 text-blue-600 mb-2" />
                      <span className="text-gray-900 font-bold text-xs">VISA</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-24 h-24">
                      <CreditCard className="w-8 h-8 text-orange-600 mb-2" />
                      <span className="text-gray-900 font-bold text-xs">MasterCard</span>
                    </div>
                    <div className="flex flex-col items-center p-4 bg-white border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-24 h-24">
                      <DollarSign className="w-8 h-8 text-purple-600 mb-2" />
                      <span className="text-gray-900 font-bold text-xs">Bank Transfer</span>
                    </div>
                  </div>
                  
                  {/* Notification input */}
                  <div className="max-w-md mx-auto mb-8">
                    <div className="flex gap-3">
                      <input 
                        type="email" 
                        placeholder="Notify me when payment system is ready" 
                        className="flex-1 px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      />
                      <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                        <Bell className="w-4 h-4 inline mr-1" />
                        Notify Me
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Security features */}
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div className="p-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="w-6 h-6 text-blue-600" />
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
                  <div className="p-4">
                    <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <RefreshCw className="w-6 h-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Refund Policy</h4>
                    <p className="text-gray-600 text-sm">Remboursement garanti</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Current Payment Process */}
            <ScrollReveal delay={300}>
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 p-8 rounded-3xl shadow-xl">
                <div className="text-center mb-8">
                  <MessageCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Comment ça marche actuellement ?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Processus simple et transparent en 3 étapes
                  </p>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                      1
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Contactez-moi</h4>
                    <p className="text-gray-600 text-sm">
                      Discutons de votre projet via WhatsApp
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                      2
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Création du site</h4>
                    <p className="text-gray-600 text-sm">
                      Je crée votre site selon vos exigences
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-blue-100">
                    <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                      3
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">Validation & Paiement</h4>
                    <p className="text-gray-600 text-sm">
                      Vous validez puis vous payez
                    </p>
                  </div>
                </div>
                
                <div className="text-center">
                  <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <MessageCircle className="w-5 h-5 inline mr-2" />
                    Commencer maintenant
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#dbe6f3' }}>
        {/* Gradient overlay for smooth transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent"></div>
        
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-indigo-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-blue-300 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg">
                  <MessageCircle className="w-4 h-4 inline mr-1" />
                  Contact Us
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Ready to Start
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600"> Risk-Free?</span>
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Let&apos;s create something amazing together. Get your dream website with zero upfront cost.
              </p>
              <div className="inline-flex items-center bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-full px-8 py-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Shield className="w-6 h-6 text-green-600 mr-3" />
                <span className="text-green-800 font-semibold">
                  Remember: You pay NOTHING until you&apos;re 100% satisfied!
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Contact Info */}
            <ScrollReveal delay={100}>
              <div className="space-y-8">
                <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                  <h3 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                    <MessageCircle className="w-8 h-8 text-blue-500 mr-3" />
                    Get In Touch
                  </h3>
                  
                  <div className="space-y-6">
                    {/* WhatsApp */}
                    <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-2xl border-2 border-green-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <MessageCircle className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-gray-900 text-lg">WhatsApp</p>
                            <p className="text-green-600 font-semibold">+212 658860346</p>
                          </div>
                          <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            Instant Reply
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Email */}
                    <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl border-2 border-blue-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Mail className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-gray-900 text-lg">Email</p>
                            <p className="text-blue-600 font-semibold">yahya.mouiguina2000@gmail.com</p>
                          </div>
                          <div className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            24h Reply
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Phone */}
                    <div className="group flex items-center space-x-4 p-4 bg-gradient-to-r from-indigo-50 to-indigo-100 rounded-2xl border-2 border-indigo-200 hover:border-indigo-300 transition-all duration-300 hover:shadow-lg cursor-pointer">
                      <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Phone className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-bold text-gray-900 text-lg">Phone</p>
                            <p className="text-indigo-600 font-semibold">+212 658860346</p>
                          </div>
                          <div className="bg-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            Business Hours
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Working Hours */}
                  <div className="mt-8 p-6 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
                    <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                      <Clock className="w-5 h-5 text-gray-600 mr-2" />
                      Working Hours
                    </h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Monday - Friday:</span>
                        <span className="text-gray-900 font-semibold">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Saturday:</span>
                        <span className="text-gray-900 font-semibold">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Sunday:</span>
                        <span className="text-gray-900 font-semibold">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right Side - Contact Form */}
            <ScrollReveal delay={200}>
              <div className="bg-white/90 backdrop-blur-sm border-2 border-gray-200 p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                    <FileText className="w-8 h-8 text-blue-500 mr-3" />
                    Start Your Project
                  </h3>
                  <p className="text-gray-600">
                    Fill out the form below and I&apos;ll get back to you within 24 hours
                  </p>
                </div>
                
                <form className="space-y-6">
                  {/* First Row - Name and Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full px-4 py-4 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <Users className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full px-4 py-4 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <Mail className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Second Row - Phone and Package */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          placeholder="+212 6XX XXX XXX"
                          className="w-full px-4 py-4 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300"
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <Phone className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Choose Your Package
                      </label>
                      <div className="relative">
                        <select className="w-full px-4 py-4 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 appearance-none">
                          <option value="">Select a package</option>
                          <option value="basic">Pack Basic - 2500 MAD</option>
                          <option value="pro">Pack Pro - 3500 MAD</option>
                          <option value="custom">Pack Custom - Sur devis</option>
                        </select>
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                          <ShoppingCart className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                          <ArrowRight className="w-5 h-5 text-gray-400 rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Third Row - Message Field (Full Width) */}
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details
                    </label>
                    <div className="relative">
                      <textarea
                        rows={4}
                        placeholder="Tell me about your project, requirements, and any specific features you need..."
                        className="w-full px-4 py-4 pl-12 bg-gray-50 border-2 border-gray-200 rounded-xl text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 resize-none"
                      ></textarea>
                      <div className="absolute left-4 top-4">
                        <FileText className="w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-6 rounded-xl font-bold text-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
                  >
                    <span>Send Message</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
                
                {/* Trust Badge */}
              </div>
            </ScrollReveal>
          </div>
          
          {/* Bottom CTA */}
          <ScrollReveal delay={300}>
            <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-3xl p-8 shadow-xl">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Prefer to chat directly?
                </h4>
                <p className="text-gray-600 mb-6">
                  Click the WhatsApp button to start an instant conversation
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                    <MessageCircle className="w-5 h-5" />
                    <span>Chat on WhatsApp</span>
                  </button>
                  <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Schedule a Call</span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
