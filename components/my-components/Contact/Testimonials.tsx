import React, { ReactElement } from "react";
import TestimonialTemplate from "./TestimonialTemplate";

interface Props {}
const TestimonialList = [
  {
    giver: "Callum Amor",
    status: "Upwork Client",
    feedback:
      "What a pleasure to work with Deepak.. Young dev who's clearly talented with a strong passion for your complete satisfaction and solving any issues that should arise. I'm looking forward to working with Deepak further and appreciate all your efforts. Thank you!",
  },
  {
    giver: "Jasper Jougen",
    status: "Upwork Client",
    feedback:
      "I requested Deepak to tweak a project and he did a great job at it. Perfectly listened to the provided feedback, gave suggestions where to improve and fast delivery. Very pleasant to work with him. Eager to learn knew things and knowledgeable dev",
    image: "/jasper_jougen.jpg",
  },
];
export default function Testimonials({}: Props): ReactElement {
  return (
    <div className="space-y-4">
      {TestimonialList.slice(0, 2).map((testimonial, index) => {
        return (
          <TestimonialTemplate
            displacement={index * 8}
            key={testimonial.giver}
            status={testimonial.status}
            giver={testimonial.giver}
            feedback={testimonial.feedback}
            image={testimonial.image}
          />
        );
      })}
    </div>
  );
}
