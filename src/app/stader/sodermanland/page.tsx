import SEO from '@/components/SEO'
import Link from 'next/link'

const cities = [
  { name: 'Eskilstuna', population: '' },
  { name: 'Nyköping', population: '' },
  { name: 'Katrineholm', population: '' },
  { name: 'Strängnäs', population: '' },
  { name: 'Oxelösund', population: '' },
  { name: 'Torshälla', population: '' },
  { name: 'Trosa', population: '' },
  { name: 'Flen', population: '' },
  { name: 'Gnesta', population: '' }
]

export default function SodermanlandPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Smidigflytt i Södermanland - Välj Din Stad"
        description="Välj din stad i Södermanland för flyttjänster och städtjänster från Smidigflytt. Vi hjälper kunder i hela länet."
      />
      
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-4" style={{ color: '#162F65' }}>
              Välj din stad i Södermanland
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vi erbjuder professionella flytt- och städtjänster i hela Södermanlands län. 
              Välj din stad nedan för att se våra tjänster i ditt område.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cities.map((city, index) => {
              const citySlug = city.name
                .toLowerCase()
                .replace('å', 'a')
                .replace('ä', 'a')
                .replace('ö', 'o')
                .replace('é', 'e')
                .replace(/ /g, '-');
              return (
                <Link
                  key={index}
                  href={`/stader/${citySlug}`}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-center">
                    <h3 className="text-xl font-semibold mb-2" style={{ color: '#162F65' }}>
                      {city.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex flex-wrap justify-center gap-2">
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: '#3361AC', color: 'white' }}
                        >
                          Bohagsflytt
                        </span>
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: '#3361AC', color: 'white' }}
                        >
                          Kontorsflytt
                        </span>
                      </div>
                      <div className="flex flex-wrap justify-center gap-2">
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: '#E8AF30', color: '#162F65' }}
                        >
                          Flyttstäd
                        </span>
                        <span 
                          className="inline-block px-3 py-1 rounded-full text-sm font-medium"
                          style={{ backgroundColor: '#E8AF30', color: '#162F65' }}
                        >
                          Hemstäd
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
            {/* Removed duplicate city card rendering after map callback */}
          </div>

          <div className="mt-16 text-center">
            <div 
              className="inline-block p-6 rounded-lg"
              style={{ backgroundColor: '#E7E6DD' }}
            >
              <p className="text-lg font-medium" style={{ color: '#162F65' }}>
                Vi hjälper ofta kunder i Nyfors, Hällbybrunn och Skiftinge.
              </p>
              <p className="text-gray-600 mt-2">
                Kontakta oss för en kostnadsfri offert oavsett var i Södermanland du befinner dig!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
