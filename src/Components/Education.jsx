import React from "react";

/**
 * Education details
 */

import image from "../images/education.jpg";

const imageAltText = "A boy inside a library";


const educationDetails = [
  {
    level: "Current Education",
    institution: "NMIMSUniversity",
    degree: "Bachelor of Science in Computer Science",
    year: "2022 - Present",
  },
  {
    level: "Class 12",
    institution: "St.Mary's School",
    year: "2021",
    percentage: "92%",
  },
  {
    level: "Class 10",
    institution: "St.Mary's School",
    year: "2019",
    percentage: "90%",
  },
];

const Education = () => {
  return (
    <section className="padding" id="education">
        <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Education</h2>
        <div
          style={{
            textAlign: "left",
            fontSize: "1.25rem",
            margin: "2rem 0",
          }}
        >
          {educationDetails.map((education, index) => (
            <div
              key={index}
              style={{
                marginBottom: "2rem",
                padding: "1rem 2rem",
                border: "1px solid #ddd",
                borderRadius: "8px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>{education.level}</h3>
              <p><strong>Institution:</strong> {education.institution}</p>
              {education.degree && <p><strong>Degree:</strong> {education.degree}</p>}
              <p><strong>Year:</strong> {education.year}</p>
              {education.percentage && <p><strong>Percentage:</strong> {education.percentage}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
