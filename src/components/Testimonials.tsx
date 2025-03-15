
import { User, Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      content: "IndigoNotes changed how I handle sensitive information. I can finally take notes about client matters without worrying about data leaks.",
      author: "Sarah J., Attorney",
      rating: 5
    },
    {
      content: "As a journalist, I need to protect my sources. IndigoNotes' end-to-end encryption gives me peace of mind that my notes are for my eyes only.",
      author: "Marcus T., Investigative Reporter",
      rating: 5
    },
    {
      content: "We use IndigoNotes for our entire research team. The zero-knowledge architecture means our competitors can't access our data even if there's a breach.",
      author: "Dr. Elena R., Research Director",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-indigo-50 encrypted-bg">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Testimonials</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by professionals who value privacy
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don't take our word for it — hear from people who protect their sensitive information with IndigoNotes.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flex flex-col justify-between bg-white p-8 shadow-lg rounded-2xl indigo-glow relative hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="mb-4 flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-indigo-400 fill-indigo-400" />
                ))}
              </div>
              <div className="relative mb-4">
                <Quote className="h-8 w-8 text-indigo-100 absolute -top-4 -left-2" />
                <p className="text-gray-600 italic relative z-10">{testimonial.content}</p>
              </div>
              <div className="flex items-center mt-4">
                <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">{testimonial.author}</p>
                </div>
              </div>
              <div className="absolute top-0 right-0 -mt-3 -mr-3">
                <div className="h-6 w-6 rounded-full bg-indigo-600 flex items-center justify-center">
                  <Quote className="h-3 w-3 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
