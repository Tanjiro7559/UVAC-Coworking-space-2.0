import { Link } from "wouter";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80" 
              alt="Cowocation headquarters building" 
              className="rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <span className="text-primary font-semibold">About Us</span>
            <h1 className="mt-2 text-3xl font-bold text-neutral-800">Your Partner in Workspace Excellence</h1>
            <p className="mt-4 text-lg text-neutral-700">
              Cowolocation Workplace was founded in 2010 with a vision to create flexible, professional workspaces that empower businesses to thrive. We understand that the right environment is crucial for productivity, collaboration, and growth.
            </p>
            <p className="mt-4 text-lg text-neutral-700">
              Today, we're proud to serve thousands of businesses across multiple locations, from startups to established enterprises. Our comprehensive range of workspace solutions is designed to adapt to your changing needs, whether you're looking for a private office, coworking desk, or virtual business presence.
            </p>
            
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div>
                <h3 className="text-2xl font-bold text-primary">12+</h3>
                <p className="text-neutral-600">Years of experience</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary">15</h3>
                <p className="text-neutral-600">Premium locations</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary">2,500+</h3>
                <p className="text-neutral-600">Happy clients</p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-primary">98%</h3>
                <p className="text-neutral-600">Client satisfaction</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button 
                asChild 
                className="bg-primary hover:bg-blue-700 text-white px-6 py-3"
              >
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Mission Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-neutral-800">Our Mission & Values</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#F0F6FF] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-neutral-700">
                To provide flexible, high-quality workspace solutions that allow businesses to focus on what they do best, while we take care of the environment they work in.
              </p>
            </div>
            
            <div className="bg-[#F0F6FF] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-neutral-700">
                To become the leading provider of innovative workspace solutions, setting new standards for flexibility, service, and community in the industry.
              </p>
            </div>
            
            <div className="bg-[#F0F6FF] p-8 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">Our Values</h3>
              <ul className="text-neutral-700 space-y-2">
                <li>• Excellence in service</li>
                <li>• Innovation in workspace design</li>
                <li>• Building community</li>
                <li>• Sustainability and responsibility</li>
                <li>• Flexibility and adaptability</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-neutral-800">Our Leadership Team</h2>
            <p className="mt-4 text-lg text-neutral-600 max-w-3xl mx-auto">
              Meet the experienced professionals behind Cowolocation's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-40 h-40 bg-neutral-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="CEO portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Anand Chavan</h3>
              <p className="text-primary font-medium">CEO & Founder</p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 bg-neutral-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="COO portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Sarah Johnson</h3>
              <p className="text-primary font-medium">Chief Operations Officer</p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 bg-neutral-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="CFO portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Anand Chavan</h3>
              <p className="text-primary font-medium">Chief Financial Officer</p>
            </div>
            
            <div className="text-center">
              <div className="w-40 h-40 bg-neutral-200 rounded-full mx-auto mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80" 
                  alt="CXO portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Amelia Rodriguez</h3>
              <p className="text-primary font-medium">Chief Experience Officer</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-20 bg-primary text-white p-12 rounded-lg">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Ready to experience Cowolocation?</h2>
            <p className="mt-4 text-lg opacity-90 max-w-2xl mx-auto">
              Join thousands of businesses that have found their perfect workspace with us. Get in touch today to discuss your requirements or schedule a tour.
            </p>
            <div className="mt-8">
              <Button 
                asChild 
                className="bg-white text-primary hover:bg-neutral-100 px-6 py-3"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
