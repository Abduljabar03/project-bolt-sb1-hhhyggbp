import { Target, Eye, Award, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in every aspect of our operations, from safety to service delivery.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct our business with honesty, transparency, and ethical practices at all times.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'Our clients trust us to deliver consistent, dependable aviation solutions that meet their needs.',
    },
    {
      icon: Eye,
      title: 'Safety First',
      description: 'Safety is our top priority, ensuring strict compliance with international aviation standards.',
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[400px] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            About Najm Air
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your trusted aviation partner since inception
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Najm Air is a premier charter and ACMI-focused airline dedicated to providing reliable air transport solutions across Nigeria and the Middle East. Our commitment to operational excellence and safety has positioned us as a trusted partner in the aviation industry.
              </p>
              <p>
                We specialize in charter flights, Hajj & Umrah services, special missions, and comprehensive ACMI (wet lease) operations. Our experienced team and modern fleet ensure that every journey meets the highest standards of safety, efficiency, and comfort.
              </p>
              <p>
                At Najm Air, we understand that aviation is about more than just transportation. It's about connecting people, enabling business, and creating opportunities. Whether you're organizing a pilgrimage, planning a corporate charter, or seeking aircraft lease solutions, we're here to make it happen.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="bg-[rgba(131,127,250,0.1)] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-[rgba(131,127,250,1)]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To become a trusted and respected aviation partner, delivering safe, efficient, and world-class air transport solutions that exceed expectations and set industry standards.
              </p>
            </div>

            <div className="bg-white p-10 rounded-xl shadow-lg">
              <div className="bg-[rgba(131,127,250,0.1)] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Eye className="h-8 w-8 text-[rgba(131,127,250,1)]" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide dependable charter and ACMI services through operational excellence, strict safety compliance, and customer-focused solutions that create lasting value for our clients and partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[rgba(131,127,250,1)] hover:shadow-xl transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-[rgba(131,127,250,0.1)] w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-7 w-7 text-[rgba(131,127,250,1)]" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/164589/pexels-photo-164589.jpeg?auto=compress&cs=tinysrgb&w=1920)',
        }}
      >
        <div className="absolute inset-0 bg-[rgba(131,127,250,0.9)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Why Choose Najm Air?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">100%</div>
              <div className="text-xl text-white/90">Safety Compliance</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">24/7</div>
              <div className="text-xl text-white/90">Customer Support</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">Years</div>
              <div className="text-xl text-white/90">Industry Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
