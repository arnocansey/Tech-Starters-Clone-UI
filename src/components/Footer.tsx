import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white  static ">
      
      <section className="flex justify-between pt-24">
        <div className="flex flex-col p-10">
          <h1 className="text-3xl border-orange-600 border-b-2 pb-3">
            CONTACT US
          </h1>
          <div className="pb-2 pt-7 text-sm">
            <p className="font-bold">NEW JERSEY</p>
            <p>(856) 444-5424</p>
          </div>
          <div className="py-2  text-sm">
            <p className="font-bold">DELAWARE</p>
            <p>(302) 273-0339</p>
          </div>
          <div className="py-2  text-sm">
            <p className="font-bold">PENNSYLVANIA</p>
            <p>(610) 671-3355</p>
          </div>
          <div className="py-2 text-sm">
            <p className="font-bold">NEW YORK</p>
            <p>(212) 602-1331</p>
          </div>
        </div>
        <div className="flex flex-col p-10">
          <h1 className="text-3xl border-orange-600 border-b-2 pb-3">
            SERVICES
          </h1>
          <p className="text-sm pt-6 pb-2">CYBERSECURITY</p>
          <p className="text-sm  pb-3">HELPDESK IT SUPPORT</p>
          <p className="text-sm  pb-3">MICROSOFT LICENSING</p>
          <p className="text-sm  pb-3">NETWORK SECURITY</p>
          <p className="text-sm  pb-3">PHONE SYSTEMS</p>
          <p className="text-sm  pb-3">WEBSITE SERVICES</p>
        </div>
        <div className="flex flex-col p-10">
          <h1 className="text-3xl border-orange-600 border-b-2 pb-3 hover:opacity-75">
           <a href="">ABOUT US</a> 
          </h1>
          <p className="text-sm pt-6 pb-2">CONTACT US</p>
          <p className="text-sm  pb-3">CAREERS</p>
          <p className="text-sm  pb-3">INDUSTRIES SERVICED</p>
          <p className="text-sm  pb-3">COMMUNITY</p>
        </div>
      </section>
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} TechStarters. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
