import {
  Bus,
  Ticket,
  CreditCard,
  Package,
  Headset,
  Smartphone,
  Search,
  DollarSign,
} from "lucide-react";

// Main App component
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 font-inter text-gray-800">
      {/* Navbar */}
      <nav className="p-4 bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold text-indigo-600">TicketSmart</div>
          <div className="space-x-6 hidden md:flex">
            <a
              href="#features"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            >
              Vipengele
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            >
              Jinsi Inavyofanya Kazi
            </a>
            <a
              href="#download"
              className="text-gray-600 hover:text-indigo-600 transition-colors duration-300"
            >
              Pakua
            </a>
          </div>
          <button className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
              Safari Yako Inaanza <span className="text-indigo-600">Hapa.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Kuhifadhi tiketi za basi mtandaoni kwa urahisi na bei nafuu.
              Tafuta, linganisha, na uhifadhi safari yako ijayo ya basi kwa
              urahisi.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#download"
                className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
              >
                Pakua Sasa
              </a>
              <a
                href="#features"
                className="px-8 py-4 border border-indigo-600 text-indigo-600 font-semibold rounded-full hover:bg-indigo-50 transition-all duration-300 transform hover:scale-105"
              >
                Jifunze Zaidi
              </a>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            {/* Placeholder for app screenshot */}
            <img
              src="https://placehold.co/400x600/6366F1/FFFFFF?text=TicketSmart+App"
              alt="Picha ya Skrini ya Programu ya TicketSmart"
              className="w-64 md:w-80 lg:w-96 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.onerror = null;
                img.src =
                  "https://placehold.co/400x600/6366F1/FFFFFF?text=Picha+ya+Programu";
              }}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
            Kwa Nini Uchague{" "}
            <span className="text-indigo-600">TicketSmart?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1: Wide Network */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-indigo-100 rounded-full inline-flex mb-6">
                <Bus className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Mtandao Mpana
              </h3>
              <p className="text-gray-600">
                Fikia chaguzi nyingi za njia za basi na waendeshaji katika
                maeneo mbalimbali.
              </p>
            </div>
            {/* Feature 2: Easy Booking */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-indigo-100 rounded-full inline-flex mb-6">
                <Ticket className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Urahisi wa Kuhifadhi
              </h3>
              <p className="text-gray-600">
                Hifadhi tiketi zako kwa kugusa mara chache tu na kiolesura chetu
                rahisi kutumia.
              </p>
            </div>
            {/* Feature 3: Secure Payments */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-indigo-100 rounded-full inline-flex mb-6">
                <CreditCard className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Malipo Salama
              </h3>
              <p className="text-gray-600">
                Furahia amani ya akili na chaguzi salama na mbalimbali za
                malipo.
              </p>
            </div>
            {/* New Feature 4: Parcel Sending */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-indigo-100 rounded-full inline-flex mb-6">
                <Package className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Kutuma Mizigo
              </h3>
              <p className="text-gray-600">
                Tuma na pokea mizigo kwa urahisi kupitia mtandao wetu wa
                kuaminika wa mabasi.
              </p>
            </div>
            {/* Feature 5: 24/7 Support */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-indigo-100 rounded-full inline-flex mb-6">
                <Headset className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Msaada wa 24/7
              </h3>
              <p className="text-gray-600">
                Timu yetu ya usaidizi iko tayari kukusaidia, mchana au usiku.
              </p>
            </div>
            {/* New Feature 6: Affordable Fares */}
            <div className="bg-blue-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-2">
              <div className="p-4 bg-indigo-100 rounded-full inline-flex mb-6">
                <DollarSign className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Nauli Nafuu
              </h3>
              <p className="text-gray-600">
                Safiri bila kuvunja benki na tiketi zetu za basi zenye bei
                shindani.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how-it-works"
        className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-100"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-12">
            Jinsi TicketSmart{" "}
            <span className="text-indigo-600">Inavyofanya Kazi</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <div className="p-5 bg-indigo-600 text-white rounded-full mb-6 text-3xl font-bold">
                1
              </div>
              <Search className="w-16 h-16 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Tafuta Njia Yako
              </h3>
              <p className="text-gray-600">
                Ingiza asili, unakoenda, na tarehe ya safari ili kupata mabasi
                yanayopatikana.
              </p>
            </div>
            {/* Step 2 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <div className="p-5 bg-indigo-600 text-white rounded-full mb-6 text-3xl font-bold">
                2
              </div>
              <Ticket className="w-16 h-16 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Chagua Basi Lako
              </h3>
              <p className="text-gray-600">
                Chagua kutoka kwa waendeshaji mbalimbali wa basi, nyakati, na
                mapendeleo ya viti.
              </p>
            </div>
            {/* Step 3 */}
            <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md">
              <div className="p-5 bg-indigo-600 text-white rounded-full mb-6 text-3xl font-bold">
                3
              </div>
              <CreditCard className="w-16 h-16 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Hifadhi & Nenda!
              </h3>
              <p className="text-gray-600">
                Kamilisha malipo yako salama na upokee tiketi yako ya
                kielektroniki papo hapo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 text-center flex flex-col md:flex-row items-center justify-around">
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
              Pata TicketSmart <span className="text-indigo-600">Leo!</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
              Pakua programu sasa na ujionee njia rahisi zaidi ya kuhifadhi
              tiketi za basi. Inapatikana kwenye Android na iOS.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.2c5.38 0 9.8 4.42 9.8 9.8s-4.42 9.8-9.8 9.8-9.8-4.42-9.8-9.8S6.62 2.2 12 2.2zm-1.8 14.6l-5.6-5.6 1.4-1.4 4.2 4.2 7.8-7.8 1.4 1.4-9.2 9.2z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M15.5 12.5c0 .7-.6 1.3-1.3 1.3H9.8c-.7 0-1.3-.6-1.3-1.3V9.8c0-.7.6-1.3 1.3-1.3h4.4c.7 0 1.3.6 1.3 1.3v2.7z"
                    fill="white"
                  ></path>
                </svg>
                App Store
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-colors duration-300 transform hover:scale-105"
              >
                <svg
                  className="w-6 h-6 mr-2"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.8 14.5c0 .8-.7 1.5-1.5 1.5H3.5c-.8 0-1.5-.7-1.5-1.5V9.5c0-.8.7-1.5 1.5-1.5h2.8c.8 0 1.5.7 1.5 1.5v5zm12.7-5.3c0-.8-.7-1.5-1.5-1.5h-2.8c-.8 0-1.5.7-1.5 1.5v5c0 .8.7 1.5 1.5 1.5h2.8c.8 0 1.5-.7 1.5-1.5v-5zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.2c5.38 0 9.8 4.42 9.8 9.8s-4.42 9.8-9.8 9.8-9.8-4.42-9.8-9.8S6.62 2.2 12 2.2z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M12 10.5c-.7 0-1.3-.6-1.3-1.3V6.8c0-.7.6-1.3 1.3-1.3h0c.7 0 1.3.6 1.3 1.3v2.4c0 .7-.6 1.3-1.3 1.3z"
                    fill="white"
                  ></path>
                </svg>
                Google Play
              </a>
            </div>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <Smartphone className="w-48 h-48 text-indigo-600" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white text-center">
        <div className="container mx-auto px-4">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} TicketSmart. Haki zote
            zimehifadhiwa.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Sera ya Faragha
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Masharti ya Huduma
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              Wasiliana Nasi
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
