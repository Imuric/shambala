import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Services() {
  // You will edit these later with real data
  const services = [
    {
      title: "Quality Products",
      description: "We source only the finest materials to ensure durability and lasting value for our clients.",
    },
    {
      title: "Expert Consultation",
      description: "Our team provides professional guidance to help you make the best decisions for your needs.",
    },
    {
      title: "Reliable Support",
      description: "We stand by our work with dedicated after-sales support and service guarantees.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Our Core Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Dedicated to delivering excellence in every interaction.
          </p>
        </div>

        {/* The Grid: 1 column on mobile, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow border-slate-200">
              <CardHeader>
                <CardTitle className="text-xl text-blue-600">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-slate-600">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}