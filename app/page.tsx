import React from "react";
import { Shield, Bell, CreditCard, HelpCircle } from 'lucide-react';
import Hero from "@/components/site/hero";
import CategoryCard from "@/components/site/categorycard";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />

      <section className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard
            icon={() => <Shield className="h-6 w-6 text-blue-600" />}
            title="Getting Started"
            description="Let us walk you through setting up your devices and configuring your protection settings."
          />
          <CategoryCard
            icon={() => <Bell className="h-6 w-6 text-blue-600" />}
            title="Alerts & Reports"
            description="Stay informed with real-time notifications and detailed activity reports."
          />
          <CategoryCard
            icon={() => <CreditCard className="h-6 w-6 text-blue-600" />}
            title="Billing & Account"
            description="Manage your subscription, payment methods, and account settings."
          />
        </div>
      </section>

      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6">Top Articles</h2>
          <div className="space-y-4">
            {['Device Setup Guide', 'Protection Features', 'Account Management', 'Common Issues'].map((title) => (
              <div key={title} className="flex items-center space-x-3 hover:bg-gray-800 p-3 rounded-lg cursor-pointer">
                <HelpCircle className="h-5 w-5 text-blue-400" />
                <div>
                  <h3 className="font-medium">{title}</h3>
                  <p className="text-sm text-gray-400">Quick guide and troubleshooting tips</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
