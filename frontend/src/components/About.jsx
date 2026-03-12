import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            The Gift of Life: Organ Donation
          </h1>
          <p className="text-xl md:text-2xl">
            One donor can save up to 8 lives and enhance 75 more
          </p>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Why Organ Donation Matters
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-5xl mb-4">❤️</div>
            <h3 className="text-xl font-semibold mb-2">Save Lives</h3>
            <p className="text-gray-600">
              Thousands of people are waiting for life-saving organ transplants
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-5xl mb-4">🌟</div>
            <h3 className="text-xl font-semibold mb-2">Give Hope</h3>
            <p className="text-gray-600">
              Your decision can give families hope and a second chance at life
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Leave a Legacy</h3>
            <p className="text-gray-600">
              Create a lasting impact that continues beyond your lifetime
            </p>
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Important Facts
          </h2>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-lg">
                <span className="font-semibold text-red-600">•</span> Every 10 minutes, someone is added to the organ transplant waiting list
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-lg">
                <span className="font-semibold text-red-600">•</span> One organ donor can save up to 8 lives through organ donation
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-lg">
                <span className="font-semibold text-red-600">•</span> Organs that can be donated: Heart, Kidneys, Liver, Lungs, Pancreas, Intestines
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-lg">
                <span className="font-semibold text-red-600">•</span> Tissues that can be donated: Corneas, Skin, Bone, Heart valves, Tendons
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Myths vs Facts */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Common Myths Debunked
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="font-bold text-lg mb-2 text-red-700">❌ Myth</h3>
            <p className="text-gray-700 mb-3">
              Doctors won't try as hard to save my life if I'm a donor
            </p>
            <h3 className="font-bold text-lg mb-2 text-green-700">✓ Fact</h3>
            <p className="text-gray-700">
              Medical teams work independently. Your care comes first, always.
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="font-bold text-lg mb-2 text-red-700">❌ Myth</h3>
            <p className="text-gray-700 mb-3">
              I'm too old to be a donor
            </p>
            <h3 className="font-bold text-lg mb-2 text-green-700">✓ Fact</h3>
            <p className="text-gray-700">
              There's no age limit. Medical suitability is determined at the time of donation.
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="font-bold text-lg mb-2 text-red-700">❌ Myth</h3>
            <p className="text-gray-700 mb-3">
              My religion doesn't support organ donation
            </p>
            <h3 className="font-bold text-lg mb-2 text-green-700">✓ Fact</h3>
            <p className="text-gray-700">
              Most major religions support organ donation as an act of charity and compassion.
            </p>
          </div>
          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="font-bold text-lg mb-2 text-red-700">❌ Myth</h3>
            <p className="text-gray-700 mb-3">
              Rich and famous people get priority
            </p>
            <h3 className="font-bold text-lg mb-2 text-green-700">✓ Fact</h3>
            <p className="text-gray-700">
              Allocation is based on medical need, compatibility, and waiting time—not wealth or status.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl mb-6">
            Register today and become a hero to someone in need
          </p>
          <a
            href="/donor"
            className="inline-block bg-white text-green-700 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Become a Donor
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
