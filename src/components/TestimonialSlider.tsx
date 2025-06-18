import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { useState } from 'react';

const reviews = [
  {
    name: 'Steve Heibein',
    date: '2024-04-26',
    text: "I had Wellness Detailing do my wife's car for Mother's Day. It looked like a new car when they were done. They even removed a stain I thought was permanent. They were well stocked with every gizmo for detailing and knew what they were doing. Guess what I'm having done for Father's Day?"
  },
   {
    name: 'Morgan Weisman',
    date: '2024-04-25',
    text: "If I could give 6 stars I would!! I am recommending Wellness Detailing to all my friends and family! I could not have had a better experience, and my car has never looked better, cleaner, or fresher!! Not only did the service go above and beyond my expectations, but the customer service and professionalism truly made my experience unbeatable."
  },
   {
    name: 'Erick rene Beltranp...',
    date: '2024-04-25',
    text: "Buenas días estamos dando el.mejor servicio de nuestra compañía y un excelente trabajo 100.00% recomendado y sobre todo la mejor atención a nuestros clientes estamos para servirle y cualquier duda o pregunta no dude en comunicarse y nosotros le ayudaremos buen día bendiciones"
  },
  {
    name: 'Zerubabel Afework',
    date: '2024-04-23',
    text: "recently had the pleasure of experiencing the top-notch services of Wellness detailing, all thanks to a glowing recommendation from my friend Jimena. And let me tell you, they did not disappoint! From the moment they arrived at my house, I was impressed by their professionalism and attention to detail. The team greeted me warmly and took the time to listen to my specific needs and preferences. As they worked their magic on my car, I could see why my friend spoke so highly of them. Every inch of my vehicle was meticulously cleaned and polished to perfection. They didn't miss a spot! Not only did they make my car look brand new again, but they also went above and beyond by offering helpful tips on how to maintain its shine between visits. Overall, my experience with Wellness detailing was nothing short of excellent. Their dedication to quality and customer satisfaction truly sets them apart. I'll be sure to pass along the recommendation to others!",
  },
  {
    name: 'Nicholas Kirk',
    date: '2024-04-21',
    text: "Attention to detail, to say the least. Honestly customer satisfaction guaranteed doesn't do this group justice because they go above and beyond. Glad I met them, you will be too. 💯",
  },
  {
    name: 'Monica Escalante',
    date: '2024-04-19',
    text: 'Great service!!!',
  },
  {
    name: 'Yaslyn Arias',
    date: '2024-04-19',
    text: "I would absolutely recommend them 10/10! My car looks amazing, and having a clean space has really boosted my mood. The team's positive energy made the experience even better. I'll definitely be coming back for more car detailing in the future."
  },
  {
    name: 'Jimmy Urias',
    date: '2024-04-19',
    text: 'Great Detailing, really put in the effort to make sure every spot is clean and prestige. Definitely worth the money.'
  },
];

const MAX_PREVIEW_LENGTH = 130;
const MAX_NAME_LENGTH = 18;

const TestimonialSlider = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [currentStart, setCurrentStart] = useState(0);
  const VISIBLE_COUNT = 3;

  const visibleReviews = reviews.slice(currentStart, currentStart + VISIBLE_COUNT);

  const handlePrev = () => {
    if (currentStart > 0) setCurrentStart(currentStart - 1);
  };

  const handleNext = () => {
    if (currentStart + VISIBLE_COUNT < reviews.length) setCurrentStart(currentStart + 1);
  };

  return (
    <section className="bg-white py-12 px-4 text-center">
      <h2 className="text-2xl md:text-3xl font-bold max-w-2xl mx-auto mb-10">
        Genuine Experiences, Real Transformations: Our Customer Testimonials
      </h2>

      <div className="relative flex justify-center items-start gap-6 max-w-7xl mx-auto">
        <div className="flex flex-row gap-6 overflow-hidden">
          <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-64 flex-shrink-0">
            <img
              src="/placeholder-logo.png"
              alt="Wellness Detailing Logo"
              className="w-12 h-12 rounded-full"
            />
            <p className="font-semibold mt-2">Wellness Detailing</p>
            <div className="flex text-yellow-400 mt-1">
              {Array(5).fill(0).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-1">69 Google reviews</p>
            <a
              href="https://admin.trustindex.io/api/googleWriteReview?place-id=ChIJgdYny294ySARzwzRJQokYuc"
              target="_blank"
              className="mt-3 bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700"
            >
              Write a review
            </a>
          </div>

          {currentStart > 0 && (
            <button
              onClick={handlePrev}
              className="p-2 bg-white rounded-full shadow-md self-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {visibleReviews.map((review, index) => {
            const isExpanded = expandedIndex === index;
            const displayName = review.name.length > MAX_NAME_LENGTH ? review.name.slice(0, MAX_NAME_LENGTH) + '...' : review.name;
            const displayText = isExpanded ? review.text : (review.text.length > MAX_PREVIEW_LENGTH ? review.text.slice(0, MAX_PREVIEW_LENGTH) + '...' : review.text);

            return (
              <div key={index} className="relative border rounded-lg bg-gray-50 p-4 text-left w-64 flex-shrink-0 transition-all">
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                  alt="Google Logo"
                  className="absolute top-3 right-3 w-4 h-4"
                />
                <div className="flex items-center gap-2 mb-2">
                  <div className="bg-purple-500 text-white font-bold rounded-full w-8 h-8 flex items-center justify-center">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm leading-tight">{displayName}</p>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>
                <div className="flex text-yellow-400 mb-2">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700">
                  {displayText}
                </p>
                {review.text.length > MAX_PREVIEW_LENGTH && (
                  <button
                    onClick={() => setExpandedIndex(isExpanded ? null : index)}
                    className="text-xs text-blue-600 mt-2 hover:underline"
                  >
                    {isExpanded ? 'Hide' : 'Read more'}
                  </button>
                )}
              </div>
            );
          })}

          {currentStart + VISIBLE_COUNT < reviews.length && (
            <button
              onClick={handleNext}
              className="p-2 bg-white rounded-full shadow-md self-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;

