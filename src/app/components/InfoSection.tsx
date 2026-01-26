export function InfoSection() {
    return (
        <section className='relative py-24 bg-[#0d3b2e] overflow-hidden' id="info">
            <div className='relative z-10 max-w-4xl mx-auto px-4 text-center'>
                <h2 className='text-white mb-12'>Chi sono</h2>

                <div className='space-y-8 text-gray-200'>
                    <p className='md:text-sm leading-relaxed'>
                        Mi chiamo Luca, ho 23 anni e la mia passione per la cucina è nata tra i profumi della casa di mia madre, in Puglia. Quell'amore per i sapori autentici mi ha spinto a lasciare le mie radici per studiare in Svizzera, dove ho perfezionato la tecnica e maturato esperienze fondamentali in prestigiosi ristoranti stellati.
                    </p>

                    <p className='md:text-2xl leading-relaxed'>
                        Oggi porto quell'eccellenza direttamente nella tua sala da pranzo. Non cucino solo piatti, ma creo un'esperienza su misura per te e i tuoi ospiti, curando ogni dettaglio: dalla selezione degli ingredienti alla presentazione finale, fino al riordino della cucina.
                    </p>

                    <blockquote className='text-white text-4xl md:text-6xl font-[allison] leading-tight mt-12'>
                        "La cucina è un atto d’amore e precisione. <br /> Il mio obiettivo? <br /> Farti viaggiare attraverso il palato restando comodamente seduto al tuo tavolo."
                    </blockquote>

                </div>
            </div>
        </section>
    );
}
