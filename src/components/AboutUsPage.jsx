import { useState } from "react";
import "../styles/aboutUsPage.css";

function AboutUsPage() {
  const [active, setActive] = useState(0);

  const data = [
    {
      title: "About the Clinic",
      content: `Tiny Todds Therapy care was started its first service in Anna Nagar as a small therapy clinic in February 2007. It was shifted to Saidapet in August 2009. Because of the strong referrals by parents of special children, now we are serving in 20 locations. We have branches in Saidapet, Adambakkam, Egmore, Tambaram, Porur, Thiruvanmiyur, Anna nagar, Mylapore, Choolaimedu, K.K Nagar, Poonamalle, Mogapair, Neelankarai, Perambur, Ambattur, Sholinganallur, West Mambalam (head office), Mannady, Ramapuram etc..

Presently we provide services to more than 600 Kids with the help of more than 175 Staff Members.

Tiny Todds Therapy Care is well known among parents of special children for its quality care and richness in knowledge. It also provides developmental screening for children from 0-3 years, which helps in early detection of autism, ADHD, and cerebral palsy and mental retardation.`
    },

    {
      title: "About Our Program",
      content: `After working several years with children with Autism ADHD and other associated disorder we developed a unique program which helps to recover children from Autism without much difficulty. Earlier days we used conventional method to treat children with Autism, at that time, we were able to recover 10 to 20 percentage of children from autism, but we failed to send them back to mainstream school. After so many years of therapy they went back to special school. Then we understood that we are heading in a wrong direction.

We found two categories of children in Autism.

1. High functioning Autism.
2. Low functioning Autism.`
    },

    {
      title: "High Functioning Autism",
      content: `These children have higher IQ, features of autism is less, recover very fast from autism and if they are properly trained they completed regular schooling and lead a normal life.`
    },

    {
      title: "Low Functioning Autism",
      content: `But these children has very lower IQ and severe behaviour issues and has lot of autistic features in these children and also has difficulty in following commands.

Recovery of High IQ Autism children was always an easier task to us. But recovering children with low IQ was tough. We started comparing both the children, then we found that these low IQ children has problem in identifying the picture when we say the name. This milestone will be achieved in the age of 1.5 years to 2 years.

After achieving this milestone the child is able to understand command. So we came to a conclusion that all the low functioning Autism children become high functioning if they identify the picture when we say the name.

After 12 years of consistent effort we found a method which helps low IQ autism children to identify the picture. Now most of the low IQ children started identifying the pictures and move to high functioning level.`
    },

    {
      title: "IQ Booster Program (Toddlers)",
      content: `This program is design to prevent Autism, ADHD, Learning Disabilities, Speech Delay and other developmental disabilities.

This is an alternate for playschool for children between 1.5 to 3.5 years. We provide developmental milestone-based training with individual care and track progress.

Children will start reading, writing and doing basic maths before school.`
    },

    {
      title: "IQ Booster Program (Primary)",
      content: `This program is developed for slow learners. It improves reading, writing, comprehension and math skills.

We can see improvement within 6 months and full results in 3 years. No child is dull — proper training makes the difference.`
    },

    {
      title: "Speciality",
      content: `We use scientifically designed programs to educate special children based on their category.

Children are not only cared with love but also trained to become independent and improve their learning ability.

Admitting your child here means giving them a better future.`
    }
  ];

  return (
    <section className="about-page">

      {/* HERO */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Understanding, Care & Development</p>
      </div>

      {/* MAIN WRAPPER */}
      <div className="about-wrapper">

        {/* 🔥 LEFT TIMELINE */}
        <div className="about-sidebar">
          {data.map((item, index) => (
            <div
              key={index}
              className={`about-step ${active === index ? "active" : ""}`}
              onClick={() => setActive(index)}
            >
              <div className="step-number">{index + 1}</div>
              <span>{item.title}</span>
            </div>
          ))}
        </div>

        {/* 🔥 CENTER CONTENT */}
        <div className="about-content-card">
          <h2>{data[active].title}</h2>
          <p>{data[active].content}</p>
        </div>

        {/* 🔥 RIGHT IMAGE */}
        <div className="about-image">
        {data[active]?.image && (
  <img src={data[active].image} alt="about" />
)}
        </div>

      </div>
    </section>
  );
}

export default AboutUsPage;