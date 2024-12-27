import React from "react";
import { Car, House, HeartPulse, Plane, Flame, Ship, Phone, Quote, MessageCircle, BadgeCent, BookText } from 'lucide-react';
import Hero from "@/components/site/hero";
import CategoryCard from "@/components/site/categorycard";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-grow">
      <Hero />

      <section className="md:container-fluid xl:container mx-auto px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CategoryCard
            icon={() => <Car className="h-6 w-6 text-blue-600" />}
            title="Motor Insurance"
            description="Comprehensive coverage for your vehicles including third-party liability and accident protection."
          />

          <CategoryCard
            icon={() => <House className="h-6 w-6 text-blue-600" />}
            title="Home Insurance"
            description="Protect your property and belongings with our comprehensive home insurance solutions."
          />

          <CategoryCard
            icon={() => <HeartPulse className="h-6 w-6 text-blue-600" />}
            title="Personal Accident"
            description="Financial protection for you and your loved ones in case of accidents or disability."
          />

          <CategoryCard
            icon={() => <Plane className="h-6 w-6 text-blue-600" />}
            title="Travel Insurance"
            description="Stay protected worldwide with our travel insurance coverage for medical emergencies and more."
          />

          <CategoryCard
            icon={() => <Flame className="h-6 w-6 text-blue-600" />}
            title="Fire Insurance"
            description="Safeguard your business and property against fire-related damages and losses."
          />

          <CategoryCard
            icon={() => <Ship className="h-6 w-6 text-blue-600" />}
            title="Marine Insurance"
            description="Comprehensive coverage for marine cargo and vessels during transit and storage."
          />
        </div>
      </section>

      <section className="bg-gray-900 text-white px-8 py-12">
        <div className="md:container-fluid xl:container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="space-y-4">
              {['How to File a Claim', 'Understanding Your Coverage', 'Policy Renewal Guide', 'Insurance Terms Explained'].map((title) => (
                <div key={title} className="flex items-center space-x-3 hover:bg-gray-800 p-3 rounded-lg cursor-pointer">
                  <BookText className="h-5 w-5 text-blue-400" />
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm text-gray-400">Essential insurance information</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {['Auto Insurance Basics', 'Home Insurance Coverage', 'Life Insurance Guide', 'Business Insurance Tips'].map((title) => (
                <div key={title} className="flex items-center space-x-3 hover:bg-gray-800 p-3 rounded-lg cursor-pointer">
                  <BookText className="h-5 w-5 text-blue-400" />
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm text-gray-400">Coverage type guides</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              {['Premium Payment Options', 'Discount Programs', 'Policy Updates 2024', 'Emergency Contact Guide'].map((title) => (
                <div key={title} className="flex items-center space-x-3 hover:bg-gray-800 p-3 rounded-lg cursor-pointer">
                  <BadgeCent className="h-5 w-5 text-blue-400" />
                  <div>
                    <h3 className="font-medium">{title}</h3>
                    <p className="text-sm text-gray-400">Account & payments info</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="md:container-fluid xl:container mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-[40%]">
            <div className="rounded-lg w-full">
              <Image
                src="/images/perplexed-lady-1.jpg"
                alt="Confused Customer"
                width={500}
                height={300}
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="md:w-[60%] flex flex-col items-center space-y-8 justify-center">
            <h2 className="text-3xl font-bold text-center">
              Can't find what you're looking for?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-2xl">
              <Link href="/contact" target="_blank">
                <Card className="flex flex-col items-center p-6 bg-white rounded cursor-pointer space-y-2 border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                  <Quote className="h-8 w-8 text-blue-600" />
                  <h3 className="font-semibold text-lg">Get A Quote</h3>
                  <p className="text-gray-600 text-center">Use our Claims Portal to get a quote</p>
                </Card>
              </Link>

              <Link href="tel:+2335555555">
                <Card className="flex flex-col items-center p-6 bg-white rounded cursor-pointer space-y-2 border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                  <Phone className="h-8 w-8 text-blue-600" />
                  <h3 className="font-semibold text-lg">Call Us</h3>
                  <p className="text-gray-600 text-center">Call us at:<br />(+233) 55 55 55 55</p>
                </Card>
              </Link>

              <Card className="flex flex-col items-center p-6 bg-white rounded cursor-pointer space-y-2 border border-gray-200 hover:-translate-y-1 hover:shadow-lg transition-all">
                <MessageCircle className="h-8 w-8 text-blue-600" />
                <h3 className="font-semibold text-lg">Live Chat</h3>
                <p className="text-gray-600 text-center">Chat with a representative</p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
