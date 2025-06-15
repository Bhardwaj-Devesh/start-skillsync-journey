import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

// Example team list (update as you wish)
const team = [
  {
    name: "Devesh Bhardwaj",
    title: "Software Engineer",
    bio: "Passionate about crafting robust and scalable software solutions.Software Engineer | Generative AI Developer | React.js, Node.js, Spring Boot | Postgresql & MongoDB |",
    email: "deveshbhardwaj730@gmail.com",
    linkedin: "https://linkedin.com/in/deveshbhardwajj",
    avatar: "/deveshProfile.png"
  },
  {
    name: "Kishan Patel",
    title: "GenAI/ML Engineer",
    bio: "Sr. AI/ML Engineer | GenAI & LLM Specialist | Natural Language Processing (NLP) | Python | Django | Azure Cloud | Building Intelligent Solutions",
    email: "kishanpatel6770@gmail.com",
    linkedin: "https://www.linkedin.com/in/kishan-s-patel/",
    avatar: "https://media.licdn.com/dms/image/v2/D4D03AQFv1SV3hdudVA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706282771893?e=1755734400&v=beta&t=bI3P6nO7BjLqVZlO0cTao9SX4cy1BodHx15LgDojfwQ"
  },
  {
    name: "Nachiketh Sharma",
    title: "Product Manager",
    bio: "Building Products and Making Things Happen",
    email: "nachikethsharma6@gmail.com",
    linkedin: "https://www.linkedin.com/in/nachikethsharma/",
    avatar: "https://media.licdn.com/dms/image/v2/D5603AQFLFUebqqGQkw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729867939866?e=1755734400&v=beta&t=YvXlBFVIdYlyBdZa_dp7y5OJrWRrIkKKFCNawu9vy8Y"
  }
];

export default function TeamSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-800">
        Meet Our Leadership
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        A team of industry veterans and innovators passionate about transforming the future of hiring
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {team.map((member) => (
          <Card
            key={member.email}
            className="overflow-hidden bg-white border border-gray-100 hover:border-purple-200 transition-all duration-300"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent" />
              <img
                src={member.avatar}
                alt={member.name}
                className="w-full h-48 object-cover object-center"
              />
            </div>
            <CardHeader className="text-center pt-6">
              <CardTitle className="text-xl font-semibold text-gray-900">{member.name}</CardTitle>
              <CardDescription className="text-purple-600 font-medium">{member.title}</CardDescription>
            </CardHeader>
            <CardContent className="text-center pb-6">
              <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
              <div className="flex justify-center items-center gap-4">
                <a
                  href={`mailto:${member.email}`}
                  className="text-gray-500 hover:text-purple-600 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-purple-600 transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
