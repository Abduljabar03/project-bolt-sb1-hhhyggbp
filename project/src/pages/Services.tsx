import { Plane, Globe, Shield, Users, CheckCircle } from 'lucide-react';
import ckcImage from '../images/ckc.jpg';
import kaabaImage from '../images/kaaba.jpeg';

export default function Services() {
  const services = [
    {
      icon: Plane,
      title: 'Charter Flights',
      description: 'Flexible and customized charter flight solutions designed to meet your specific travel requirements.',
      features: [
        'On-demand flight scheduling',
        'Customizable routes and destinations',
        'VIP and corporate travel options',
        'Cargo charter services',
        'Group travel arrangements',
      ],
      image: 'https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Globe,
      title: 'Hajj & Umrah Services',
      description: 'Dedicated air transport services ensuring comfortable and reliable journeys for pilgrims.',
      features: [
        'Specialized pilgrimage travel arrangements',
        'Experienced crew trained for religious travel',
        'Flexible scheduling during peak seasons',
        'Group coordination and management',
        'Assistance with travel logistics',
      ],
      image: kaabaImage,
    },
    {
      icon: Shield,
      title: 'Special Missions',
      description: 'Specialized aviation services for unique operational requirements and critical missions.',
      features: [
        'Emergency medical evacuations',
        'Humanitarian relief operations',
        'Government and diplomatic charters',
        'Cargo and freight missions',
        'Customized mission planning',
      ],
      image: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
    {
      icon: Users,
      title: 'ACMI Operations (Wet Lease)',
      description: 'Comprehensive aircraft, crew, maintenance, and insurance solutions for airlines and operators.',
      features: [
        'Fully crewed aircraft provision',
        'Complete maintenance support',
        'Insurance coverage included',
        'Flexible lease terms',
        'Operational and technical support',
      ],
      image: 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=800',
    },
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${ckcImage})`,
          backgroundSize: '80%',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Comprehensive aviation solutions tailored to your needs
          </p>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="bg-[rgba(131,127,250,0.1)] dark:bg-[rgba(131,127,250,0.15)] w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="h-8 w-8 text-[rgba(131,127,250,1)]" />
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="h-6 w-6 text-[rgba(131,127,250,1)] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`relative h-[400px] rounded-xl overflow-hidden shadow-2xl ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}>
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Partner With Us?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              We deliver aviation excellence through commitment to quality and service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md dark:shadow-gray-800 text-center">
              <div className="text-4xl font-bold text-[rgba(131,127,250,1)] mb-2">24/7</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Availability</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Round-the-clock operations and support</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md dark:shadow-gray-800 text-center">
              <div className="text-4xl font-bold text-[rgba(131,127,250,1)] mb-2">100%</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Safety First</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Strict compliance with international standards</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md dark:shadow-gray-800 text-center">
              <div className="text-4xl font-bold text-[rgba(131,127,250,1)] mb-2">Expert</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Crew</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Highly trained and experienced professionals</div>
            </div>
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md dark:shadow-gray-800 text-center">
              <div className="text-4xl font-bold text-[rgba(131,127,250,1)] mb-2">Modern</div>
              <div className="text-gray-700 dark:text-gray-300 font-semibold mb-2">Fleet</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Well-maintained aircraft with latest technology</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[rgba(131,127,250,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Take Off?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your aviation requirements and learn how we can serve you.
          </p>
        </div>
      </section>
    </div>
  );
}
