import React from "react";

const TherapySessions: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header Section */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-800">
            Therapy Sessions
          </h1>
          <p className="text-gray-600 mt-4">
            Empower your mental health journey with our expert-led therapy
            sessions.
          </p>
        </header>

        {/* Featured Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-8">
            <img
              src="data:image/png;base64,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"
              alt="Therapy Session"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-indigo-700">
                Why Choose Our Therapy Sessions?
              </h2>
              <p className="text-gray-600 mt-4">
                Our certified therapists offer personalized care tailored to
                your needs. Whether you're facing anxiety, stress, or personal
                challenges, we provide a safe and supportive environment to help
                you thrive.
              </p>
              <ul className="mt-4 list-disc list-inside text-gray-600 space-y-2">
                <li>One-on-one sessions with licensed therapists.</li>
                <li>Virtual and in-person options available.</li>
                <li>Confidential and empathetic support.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Session Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-800 text-center mb-8">
            Session Packages
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Starter Package
              </h3>
              <p className="text-gray-600 mb-4">
                Perfect for individuals exploring therapy for the first time.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>3 sessions (45 minutes each)</li>
                <li>Access to online resources</li>
                <li>Flexible scheduling</li>
              </ul>
              <p className="mt-4 text-lg font-bold text-indigo-700">$99</p>
              <button className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
                Book Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Growth Package
              </h3>
              <p className="text-gray-600 mb-4">
                Ideal for those committed to long-term growth and healing.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>8 sessions (60 minutes each)</li>
                <li>Guided worksheets</li>
                <li>Free progress assessments</li>
              </ul>
              <p className="mt-4 text-lg font-bold text-indigo-700">$299</p>
              <button className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
                Book Now
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-indigo-700 mb-4">
                Premium Package
              </h3>
              <p className="text-gray-600 mb-4">
                Designed for those seeking deep, transformative experiences.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>12 sessions (90 minutes each)</li>
                <li>Exclusive access to webinars</li>
                <li>24/7 support chat</li>
              </ul>
              <p className="mt-4 text-lg font-bold text-indigo-700">$499</p>
              <button className="mt-4 w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600">
                Book Now
              </button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-indigo-800 text-center mb-8">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "The therapy sessions have truly transformed my life. The
                therapist was compassionate and understanding."
              </p>
              <footer className="mt-4 text-indigo-700 font-semibold">
                — Sarah W.
              </footer>
            </blockquote>
            <blockquote className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">
                "I feel more confident and in control of my emotions. Highly
                recommend these sessions!"
              </p>
              <footer className="mt-4 text-indigo-700 font-semibold">
                — David L.
              </footer>
            </blockquote>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-indigo-800 mb-4">
            Ready to Begin Your Healing Journey?
          </h2>
          <p className="text-gray-600 mb-8">
            Book your first session today and take the first step towards
            wellness and self-discovery.
          </p>
          <button className="bg-indigo-500 text-white py-3 px-6 rounded-md hover:bg-indigo-600">
            Book a Session
          </button>
        </section>
      </div>
    </div>
  );
};

export default TherapySessions;
