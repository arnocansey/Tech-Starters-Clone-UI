import { Button } from "../ui/button";

export default function About2() {
  return (
    <>
      <section className="about-section flex  justify-around gap-8 pb-48 pt-32">
        <article className="about-card flex flex-col items-center text-left max-w-md ">
          <img
            src="/src/assets/i6.jpg"
            alt="Teamwork illustration"
            className="about-image w-80 h-80 object-cover rounded-2xl mb-4"
          />
          <h1 className="about-title text-4xl font-semibold border-b-2 pb-4 border-orange-700 mb-2 text-blue-800">
            Who Are We?
          </h1>
          <p className="about-description text-gray-700">
            Founded in 2010, we’re a single-source provider of essential
            business services. We provide remote and in-person IT support,
            network security, backups and disaster recovery, ransomware
            protection, websites, SEO, and VoIP. When you work with us, you can
            expect to increase your business productivity and receive top-level
            support on the first call every time.
          </p>
        </article>
        <article className="about-card flex flex-col items-center text-left max-w-md">
          <img
            src="/src/assets/i7.jpg"
            alt="IT solutions illustration"
            className="about-image w-80 h-80 object-cover rounded-2xl mb-4"
          />
          <h1 className="about-title text-4xl font-semibold mb-2 text-blue-800 border-b-2 border-orange-700 pb-4">
            What Makes Us Different?
          </h1>
          <p className="about-description text-gray-700">
            Here at TechStarters, we pride ourselves on our single-source
            provider model. This means that we are your one-stop shop for all
            your IT needs. We offer 24/7 IT support, and our technicians are
            dispatched within the hour when you need us. Our team of IT
            technicians are full-time employees with a minimum of 15 years of
            experience. We are local and have the most 5-star reviews. We are
            passionate about our work and take great pride in providing
            outstanding service and support to our clients.
          </p>
        </article>
      </section>
      <section className="pb-44  flex justify-center w-2/3 ml-64">
        <article className="text-center">
          <h1 className="text-blue-800 text-5xl border-b-2 border-orange-700  pb-8">
            Interested in Joining the Team?
          </h1>
          <p className="text-xl pt-8 text-left">
            Are you interested in a career in tech? If so, then you should
            definitely check out our{" "}
            <a href="" className="text-blue-700">
              Careers Page
            </a>{" "}
            . We’re a team of experienced developers, designers, and technology
            experts who are passionate about helping businesses nationwide with
            our services. We are a growing company and we’re always looking for
            talented individuals to join our team. If you’re interested in a
            career in tech, don’t hesitate to reach out to us today.
          </p>
          <Button className="bg-blue-900 text-white rounded px-10 py-5 text-xl text-center hover:bg-orange-600">
            Learn More
          </Button>
        </article>
      </section>
    </>
  );
}
