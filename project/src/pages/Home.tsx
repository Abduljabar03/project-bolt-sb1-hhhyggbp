import { Plane, Globe, Shield, Users, ArrowRight } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface HomeProps {
  onNavigate: (page: string) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = 'https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1920';

    let animationFrameId: number;
    let frame = 0;
    const totalFrames = 120;

    const animate = () => {
      // Calculate zoom for boomerang effect
      const progress = (frame % totalFrames) / totalFrames;
      const isReverse = frame >= totalFrames;
      const adjustedProgress = isReverse ? 1 - (progress) : progress;
      const zoom = 1 + adjustedProgress * 0.15;

      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw image with zoom effect
      if (img.complete) {
        const x = (canvas.width - (canvas.width / zoom)) / 2;
        const y = (canvas.height - (canvas.height / zoom)) / 2;
        const width = canvas.width / zoom;
        const height = canvas.height / zoom;

        ctx.drawImage(img, x, y, width * zoom, height * zoom);

        // Apply brightness filter to match original
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      frame = (frame + 1) % (totalFrames * 2);
      animationFrameId = requestAnimationFrame(animate);
    };

    img.onload = () => {
      animate();
    };

    return () => cancelAnimationFrame(animationFrameId);
  }, []);
  const services = [
    {
      icon: Plane,
      title: 'Charter Flights',
      description: 'Flexible and reliable charter flight solutions tailored to your specific travel needs.',
    },
    {
      icon: Globe,
      title: 'Hajj & Umrah Services',
      description: 'Dedicated air transport services for pilgrims traveling to holy destinations.',
    },
    {
      icon: Shield,
      title: 'Special Missions',
      description: 'Specialized aviation services for unique operational requirements.',
    },
    {
      icon: Users,
      title: 'ACMI Operations',
      description: 'Comprehensive wet lease solutions providing aircraft, crew, maintenance, and insurance.',
    },
  ];

  return (
    <div className="pt-20">
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Welcome to Najm Air
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Your trusted aviation partner delivering safe, efficient, and world-class air transport solutions
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-[rgba(131,127,250,1)] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[rgba(111,107,230,1)] transition-all shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>Get in Touch</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive aviation solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-xl border border-gray-200 hover:border-[rgba(131,127,250,1)] hover:shadow-xl transition-all group"
                >
                  <div className="bg-[rgba(131,127,250,0.1)] w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[rgba(131,127,250,1)] transition-colors">
                    <Icon className="h-8 w-8 text-[rgba(131,127,250,1)] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('services')}
              className="text-[rgba(131,127,250,1)] font-semibold hover:text-[rgba(111,107,230,1)] transition-colors inline-flex items-center space-x-2"
            >
              <span>Learn more about our services</span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                To become a trusted and respected aviation partner, delivering safe, efficient, and world-class air transport solutions.
              </p>

              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide dependable charter and ACMI services through operational excellence, strict safety compliance, and customer-focused solutions.
              </p>
            </div>

            <div className="relative h-[400px] rounded-xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/358319/pexels-photo-358319.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Aircraft"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[rgba(131,127,250,1)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your aviation needs and discover how we can help.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="bg-white text-[rgba(131,127,250,1)] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl inline-flex items-center space-x-2"
          >
            <span>Contact Us</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
