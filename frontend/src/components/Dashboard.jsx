import React, { useEffect, useState } from "react";
import { API_URL } from "../config";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalDonors: 0,
    maleDonors: 0,
    femaleDonors: 0,
    organStats: [],
    bloodGroupStats: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch(`${API_URL}/donor/stats`);
      const result = await response.json();
      if (result.success) {
        setStats(result.data);
      }
    } catch (err) {
      console.error("Error fetching stats:", err);
    } finally {
      setLoading(false);
    }
  };

  const organIcons = {
    Kidney: "🫘",
    Liver: "🫀",
    Heart: "❤️",
    Lungs: "🫁",
    Pancreas: "🩺",
    Eyes: "👁️"
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-gray-600">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
            Donor Dashboard
          </h1>
          <p className="text-gray-600 text-lg">
            Real-time statistics of registered organ donors
          </p>
        </div>

        {/* Total Donors Card */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-2xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-purple-200 text-lg mb-2">Total Registered Donors</p>
              <h2 className="text-6xl font-bold">{stats.totalDonors}</h2>
              <p className="text-purple-200 mt-2">Heroes saving lives</p>
            </div>
            <div className="text-8xl opacity-20">🎗️</div>
          </div>
        </div>

        {/* Gender Distribution */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Male Donors */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Male Donors</h3>
              <div className="text-5xl">👨</div>
            </div>
            <div className="flex items-end gap-4">
              <p className="text-5xl font-bold text-blue-600">{stats.maleDonors}</p>
              <p className="text-gray-500 text-lg mb-2">
                {stats.totalDonors > 0
                  ? `${((stats.maleDonors / stats.totalDonors) * 100).toFixed(1)}%`
                  : "0%"}
              </p>
            </div>
            <div className="mt-4 bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${stats.totalDonors > 0 ? (stats.maleDonors / stats.totalDonors) * 100 : 0}%`
                }}
              ></div>
            </div>
          </div>

          {/* Female Donors */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-gray-800">Female Donors</h3>
              <div className="text-5xl">👩</div>
            </div>
            <div className="flex items-end gap-4">
              <p className="text-5xl font-bold text-pink-600">{stats.femaleDonors}</p>
              <p className="text-gray-500 text-lg mb-2">
                {stats.totalDonors > 0
                  ? `${((stats.femaleDonors / stats.totalDonors) * 100).toFixed(1)}%`
                  : "0%"}
              </p>
            </div>
            <div className="mt-4 bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-pink-600 h-full rounded-full transition-all duration-500"
                style={{
                  width: `${stats.totalDonors > 0 ? (stats.femaleDonors / stats.totalDonors) * 100 : 0}%`
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Organs Donation Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>🫀</span> Organs Available for Donation
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {stats.organStats.map((organ) => (
              <div
                key={organ._id}
                className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-4 text-center hover:scale-105 transition-transform"
              >
                <div className="text-4xl mb-2">{organIcons[organ._id] || "🩺"}</div>
                <p className="text-gray-700 font-semibold">{organ._id}</p>
                <p className="text-3xl font-bold text-red-600 mt-2">{organ.count}</p>
              </div>
            ))}
          </div>
          {stats.organStats.length === 0 && (
            <p className="text-center text-gray-500 py-8">No organ data available yet</p>
          )}
        </div>

        {/* Blood Group Distribution */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <span>🩸</span> Blood Group Distribution
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {stats.bloodGroupStats.map((blood) => (
              <div
                key={blood._id}
                className="bg-gradient-to-br from-red-100 to-red-200 rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
              >
                <p className="text-2xl font-bold text-red-700">{blood._id}</p>
                <p className="text-3xl font-bold text-red-900 mt-2">{blood.count}</p>
                <p className="text-xs text-red-600 mt-1">donors</p>
              </div>
            ))}
          </div>
          {stats.bloodGroupStats.length === 0 && (
            <p className="text-center text-gray-500 py-8">No blood group data available yet</p>
          )}
        </div>

        {/* Call to Action */}
        <div className="mt-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl shadow-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">Want to be a Hero?</h3>
          <p className="mb-4">Join our community of life-savers today!</p>
          <a
            href="/donor"
            className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            Register as Donor
          </a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
