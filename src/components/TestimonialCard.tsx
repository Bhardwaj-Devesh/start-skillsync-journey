import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
}

const TestimonialCard = ({ name, role, company, testimonial, avatar }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
        ))}
      </div>
      <p className="text-gray-700 mb-6 italic">"{testimonial}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-3">
          <span className="text-white font-semibold">{avatar}</span>
        </div>
        <div>
          <p className="text-gray-900 font-semibold">{name}</p>
          <p className="text-gray-600 text-sm">{role} at {company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
