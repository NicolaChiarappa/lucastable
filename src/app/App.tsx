import { ChefHat, Utensils, Calendar, Star } from "lucide-react";
import heroImage from "../assets/hero-chef.png";
import proposteImage from "../assets/proposte.png";
import plateImage from "../assets/plate.jpeg";

export default function App() {
  return (
    <div className='min-h-screen bg-[#0d3b2e]'>
      {/* Hero Section */}
      <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
        {/* Background Image */}
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: `url('${heroImage}')`,
          }}
        />
        {/* Overlay with gradient to next section */}
        <div className='absolute inset-0 bg-gradient-to-b from-[#0d3b2e]/100 via-[#0d3b2e]/40 to-[#0d3b2e]/100' />

        <div className='relative z-10 text-center text-white px-4 max-w-4xl mt-32'>
          {/* <ChefHat className='w-20 h-20 mx-auto mb-6' /> */}
          <h1 className='text-6xl md:text-7xl mb-6 font-[Aguafina_Script]'>
            Il lusso di essere ospiti a casa propria
          </h1>
          <p className='text-xl md:text-2xl mb-8 text-gray-200'>
            Mentre io trasformo la tua cucina in un ristorante d’eccellenza, tu
            riscopri il piacere di dedicarti ai tuoi ospiti. Ogni dettaglio,
            dalla mise en place al servizio, è curato per riflettere il tuo
            stile.
          </p>
          <button className='bg-white text-[#0d3b2e] px-8 py-4 rounded-full text-lg hover:bg-gray-100 transition-colors'>
            Scopri le proposte
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className='relative min-h-screen flex items-center overflow-hidden'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: `url('${proposteImage}')`,
            backgroundSize: "cover",
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#0d3b2e]/100 via-[#0d3b2e]/40 to-[#0d3b2e]/100' />

        <div className='relative z-10 max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center'>
          <div className='text-white'>
            <h2 className='text-5xl mb-6'>Le proposte</h2>
            <h3 className='text-3xl mb-6'>Il sesto senso</h3>
            <p className='text-lg mb-6 text-gray-200'>
              Il lusso della semplicità condivisa: un’atmosfera intima, pensata
              per massimo otto ospiti, dove la qualità degli ingredienti
              incontra la gioia della buona compagnia. Ogni dettaglio è un gesto
              d’attenzione dedicato a voi, ogni piatto un’emozione da assaporare
              insieme. Perché i momenti più belli sono quelli vissuti intorno a
              una tavola che profuma di casa, ma con l'eleganza di un'esperienza
              d'eccellenza.
            </p>
            <h3 className='text-3xl mb-6'>Cin Cin</h3>
            <p className='text-lg mb-6 text-gray-200'>
              Immagina una serata dove tutto ruota intorno a voi. Abbiamo scelto
              di dedicarci solo a due ospiti per garantire un’attenzione
              assoluta e portate che sono veri capolavori di tecnica e sapore. È
              molto più di una cena: è un percorso riservato nell'alta cucina,
              dove ogni sfumatura è pensata per incantare.
            </p>
          </div>
          <div className='grid grid-cols-2 gap-6'>
            <div className='bg-white/10 backdrop-blur-xs p-6 rounded-lg text-white'>
              <Star className='w-10 h-10 mb-4 text-yellow-400' />
              <h3 className='text-2xl mb-2'>15 cene</h3>
              <p className='text-gray-200'>
                Diverse cene preparate con successo
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-xs p-6 rounded-lg text-white'>
              <Utensils className='w-10 h-10 mb-4' />
              <h3 className='text-2xl mb-2'>Creatività</h3>
              <p className='text-gray-200'>
                Menu di ogni genere e piatti estetici
              </p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white'>
              <ChefHat className='w-10 h-10 mb-4' />
              <h3 className='text-2xl mb-2'>Su misura</h3>
              <p className='text-gray-200'>Menu personalizzati</p>
            </div>
            <div className='bg-white/10 backdrop-blur-sm p-6 rounded-lg text-white'>
              <Calendar className='w-10 h-10 mb-4' />
              <h3 className='text-2xl mb-2'>Flessibilità</h3>
              <p className='text-gray-200'>Scelta della data flessibile</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className='relative min-h-screen flex items-center overflow-hidden mt-20'>
        <div
          className='absolute inset-0 bg-cover bg-center'
          style={{
            backgroundImage: `url('${plateImage}')`,
          }}
        />
        <div className='absolute inset-0 bg-gradient-to-b from-[#0d3b2e]/100 via-[#0d3b2e]/80 to-[#0d3b2e]/100' />

        <div className='relative z-10 max-w-4xl mx-auto px-4 py-20 text-center'>
          <h2 className='text-5xl text-white mb-8'>
            Prenota la tua esperienza
          </h2>
          <p className='text-xl text-gray-200 mb-12'>
            Creiamo insieme un percorso culinario indimenticabile.
          </p>
          <div>
            <p className='text-xl text-gray-200 mb-12'>
              Contattami su Whatsapp
            </p>
            <p className='text-xl text-gray-200 mb-12'>Oppure alla mail</p>
          </div>
        </div>
      </section>
    </div>
  );
}
