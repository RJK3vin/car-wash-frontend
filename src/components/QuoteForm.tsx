import { FaFacebookF, FaInstagram, FaYelp } from "react-icons/fa";
import { Phone, MapPin, MailOpen } from 'lucide-react';
import React, { useState } from "react";
import { handleFormSubmit } from "../utils/handleFormSubmit";

export default function QuoteForm() {
  const handleSubmit = (e: React.FormEvent) => handleFormSubmit(e);
  const [serviceType, setServiceType] = useState("")

  return (
    <section className="bg-white py-16 px-4" style={{ backgroundImage: `url('https://placehold.co/1920x1080')`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-2">Request a <span className="text-blue-600">Quote</span></h2>
          <p className="text-sm text-gray-600 mb-6">We love our customers, so feel free to reach out for any of your needs!</p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4">
              <input type="text" placeholder="Name" required className="border p-2 w-full" />
              <input type="email" placeholder="Email" required className="border p-2 w-full" />
              <input type="text" placeholder="Year, Make & Model of Vehicle" required className="border p-2 w-full" />
              <input type="tel" placeholder="Phone" required className="border p-2 w-full" />
            </div>

            <select
              className="border p-2 w-full mb-4"
              required
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value)}
            >
              <option value="">Choose a service type</option>
              <option value="Mobile - Come to me">Mobile - Come to me</option>
              <option>Shop - I'll bring it to you</option>
              <option>Either works for me</option>
            </select>

            {serviceType === "Mobile - Come to me" && (
              <input
                type="text"
                className="border p-2 w-full"
                placeholder="Enter your address"
                name="address"
                required
              />
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="font-semibold mb-1">Interior Service</p>
                <label className="block"><input type="checkbox" /> Full Interior Cleaning</label>
                <label className="block"><input type="checkbox" /> Smoke Odor Removal</label>
                <label className="block"><input type="checkbox" /> Restorative Interior Cleaning</label>
              </div>

              <div>
                <p className="font-semibold mb-1">Exterior Services</p>
                <div>
                  {[
                    "Paint Correction", "Ceramic Coating",
                    "Premium Wash", "Engine Cleaning"
                  ].map(service => (
                    <label key={service} className="block">
                      <input type="checkbox" /> {service}
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-semibold mb-1">Film Services</p>
                <label className="block"><input type="checkbox" /> Vinyl Car Wrap</label>
                <label className="block"><input type="checkbox" /> Paint Protection Film (PPF)</label>
                <label className="block"><input type="checkbox" /> Window Tint</label>
              </div>

              <div>
                <p className="font-semibold mb-1">Special Services</p>
                <div>
                  {[
                    "Paint Correction", "Paint Overspray Removal",
                    "Headlight Restoration"
                  ].map(service => (
                    <label key={service} className="block">
                      <input type="checkbox" /> {service}
                    </label>
                  ))}
                </div>
              </div>
            </div>

            <textarea placeholder="Any additional details (optional)" className="border p-2 w-full h-28 resize-none" />

            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition w-full max-w-xs">
              Submit
            </button>
          </form>
        </div>

        <div className="text-sm text-gray-700 space-y-4">
          <h3 className="text-2xl font-bold text-blue-600">Give Us A Call</h3>
          <div className="hidden lg:flex items-center gap-1">
            <a href="tel:2406300211" className="flex items-center gap-1">
              <Phone className="w-4 h-4 text-blue-600" />
              <span>(240) 630-0211</span>
            </a>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <a href="mailto:WellnessDetailing@gmail.com" className="flex items-center gap-1 hover:underline">
              <MailOpen className="w-4 h-4 text-blue-600" />
              <span>WellnessDetailing@gmail.com</span>
            </a>
          </div>
          <div className="flex items-start gap-2 mt-4">
            <MapPin className="w-5 h-5 text-blue-600 translate-y-[1px]" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-1 text-sm">
              <span>Olney MD</span>
              <span>Rockville MD</span>
              <span>Gaithersburg MD</span>
              <span>Clarksburg MD</span>
              <span>Potomac MD</span>
              <span>Bethesda MD</span>
              <span>Silver Spring MD</span>
              <span>Beltsville MD</span>
              <span>Laurel MD</span>
              <span>Damascus MD</span>
              <span>College Park MD</span>
              <span>Columbia MD</span>
              <span>Poolesville MD</span>
            </div>
          </div>
          <div className="flex gap-3 text-xl text-blue-600">
            <a href="https://www.facebook.com/WellnessDetailing/" target="_blank"><FaFacebookF /></a>
            <a href="https://www.instagram.com/wellnessdetailing/#" target="_blank"><FaInstagram /></a>
            <a href="https://www.yelp.com/biz/wellness-detailing-potomac?osq=wellness+detailing" target="_blank"><FaYelp /></a>
          </div>
        </div>
      </div>
    </section>
  )
}
