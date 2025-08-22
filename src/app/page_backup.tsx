'use client';

import { Globe, CheckCircle, Shield, MessageCircle, ArrowRight, Users, Code, Palette, Zap, Star, Clock, Award, Search } from 'lucide-react';

export default function Home() {
  const sendWhatsAppMessage = (customMessage?: string) => {
    const defaultMessage = "Bonjour YahyaWeb! Je veux créer un site web exceptionnel avec votre équipe.";
    const message = customMessage || defaultMessage;
    window.open(`https://wa.me/212658860346?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="relative z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="w-7 h-7 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-white">YahyaWeb</h1>
            </div>
            <button 
              onClick={() => sendWhatsAppMessage()}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Contact</span>
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-blue-300" />
              <span className="text-blue-200 font-medium">Agence Web Professionnelle</span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-8">
              Créons Votre
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Site Web de Rêve
              </span>
            </h1>
            
            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed">
              Design moderne, développement sur mesure et performances exceptionnelles. 
              Votre présence en ligne mérite le meilleur.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <button 
                onClick={() => sendWhatsAppMessage("Je veux créer un site web exceptionnel avec YahyaWeb")}
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center space-x-3"
              >
                <span>Commencer mon projet</span>
                <ArrowRight className="w-6 h-6" />
              </button>
              
              <button 
                onClick={() => sendWhatsAppMessage("J'aimerais voir votre portfolio et vos réalisations")}
                className="border-2 border-white/30 hover:border-white/50 text-white hover:bg-white/10 px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm"
              >
                Voir nos réalisations
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">200+</div>
                <div className="text-blue-200">Sites créés</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-white mb-2">5j</div>
                <div className="text-blue-200">Livraison moyenne</div>
              </div>
              <div className="text-center">
                <div className="flex justify-center space-x-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-blue-200">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Nos Expertises
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              De la conception au déploiement, nous maîtrisons toutes les étapes de création de votre site web
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Design */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Design UI/UX</h3>
              <p className="text-blue-100 mb-6">
                Interfaces modernes et intuitives qui captivent vos visiteurs et optimisent l&apos;expérience utilisateur.
              </p>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Design responsive</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Prototypage interactif</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Tests utilisateurs</span>
                </li>
              </ul>
            </div>

            {/* Development */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Développement</h3>
              <p className="text-blue-100 mb-6">
                Code propre, performant et évolutif utilisant les dernières technologies web.
              </p>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>React / Next.js</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Node.js / API</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Base de données</span>
                </li>
              </ul>
            </div>

            {/* SEO & Performance */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">SEO & Performance</h3>
              <p className="text-blue-100 mb-6">
                Optimisation pour les moteurs de recherche et performances exceptionnelles.
              </p>
              <ul className="space-y-2 text-blue-200">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Référencement SEO</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Vitesse optimisée</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Analytics intégrés</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Offer Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm border border-white/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Offre Exceptionnelle
              </h2>
              <p className="text-xl text-blue-100">
                Site web professionnel complet pour seulement 250€
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Package Details */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                  <div className="flex items-center space-x-3 mb-6">
                    <Shield className="w-8 h-8 text-green-400" />
                    <h3 className="text-2xl font-bold text-white">Garantie Sans Risque</h3>
                  </div>
                  <div className="space-y-4">
                    <p className="text-blue-100 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Déposez seulement <strong className="text-white">20$</strong> pour commencer</span>
                    </p>
                    <p className="text-blue-100 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Le reste (230$) uniquement si vous êtes satisfait</span>
                    </p>
                    <p className="text-blue-100 flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      <span>Remboursement intégral si non satisfait</span>
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-white/20">
                    <span className="text-blue-100">Site web complet</span>
                    <span className="text-white font-bold">250€</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/20">
                    <span className="text-blue-100">Hébergement 1 an</span>
                    <span className="text-green-400 font-bold">GRATUIT</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-white/20">
                    <span className="text-blue-100">Support 3 mois</span>
                    <span className="text-green-400 font-bold">GRATUIT</span>
                  </div>
                  <div className="flex items-center justify-between py-3 text-xl font-bold">
                    <span className="text-white">TOTAL</span>
                    <div className="text-right">
                      <div className="text-gray-400 line-through text-lg">500€</div>
                      <div className="text-white">250€</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: CTA */}
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-10 shadow-2xl">
                  <h3 className="text-3xl font-black text-white mb-6">
                    Démarrez Maintenant
                  </h3>
                  
                  <div className="mb-8">
                    <div className="text-6xl font-black text-white mb-3">20$</div>
                    <div className="text-xl text-blue-100">Dépôt pour commencer</div>
                    <div className="text-blue-200 mt-2">Le reste uniquement si satisfait</div>
                  </div>
                  
                  <button 
                    onClick={() => sendWhatsAppMessage("JE VEUX COMMENCER MON SITE AVEC LE DÉPÔT DE 20$!")}
                    className="w-full bg-white text-blue-600 px-8 py-5 rounded-2xl font-black text-xl transition-all duration-300 transform hover:scale-105 shadow-xl mb-6 flex items-center justify-center space-x-3"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <span>COMMENCER SUR WHATSAPP</span>
                    <ArrowRight className="w-6 h-6" />
                  </button>
                  
                  <div className="space-y-3">
                    <button 
                      onClick={() => sendWhatsAppMessage("J'aimerais voir des exemples de vos créations")}
                      className="w-full border-2 border-white/50 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10"
                    >
                      Voir des exemples
                    </button>
                    
                    <button 
                      onClick={() => sendWhatsAppMessage("J'ai des questions sur votre processus de création")}
                      className="w-full border-2 border-white/50 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10"
                    >
                      Poser une question
                    </button>
                  </div>
                </div>
                
                {/* Trust Elements */}
                <div className="mt-8 flex justify-center space-x-8 text-blue-200">
                  <div className="text-center">
                    <Clock className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm">Livraison 5j</div>
                  </div>
                  <div className="text-center">
                    <Award className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm">Qualité garantie</div>
                  </div>
                  <div className="text-center">
                    <Users className="w-6 h-6 mx-auto mb-2" />
                    <div className="text-sm">200+ clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prêt à créer quelque chose d&apos;extraordinaire ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Rejoignez nos 200+ clients satisfaits et donnez vie à votre vision digitale
          </p>
          <button 
            onClick={() => sendWhatsAppMessage("Je suis prêt à créer mon site web avec YahyaWeb!")}
            className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-12 py-6 rounded-2xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Parlons de votre projet
          </button>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => sendWhatsAppMessage()}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
}
