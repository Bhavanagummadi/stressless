import React from 'react';
import './TherapistPage.css'; // Import the CSS file

const TherapistPage = () => {
    const therapists = [
        {
            name: "Dr. Jane Smith",
            description: "Dr. Jane Smith is a licensed clinical psychologist with over 10 years of experience in cognitive-behavioral therapy. She specializes in treating anxiety, depression, and trauma.",
            qualification: "Ph.D. in Clinical Psychology",
            image: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        {
            name: "Mr. John Doe",
            description: "Mr. John Doe is a licensed therapist specializing in family therapy and relationship counseling. With a warm and empathetic approach, he helps clients navigate personal and relational challenges.",
            qualification: "M.A. in Counseling Psychology",
            image: "https://randomuser.me/api/portraits/men/41.jpg"
        },
        {
            name: "Dr. Emily Davis",
            description: "Dr. Emily Davis has been helping patients with mental health challenges for over 15 years. She is well-known for her work in mindfulness and cognitive restructuring techniques.",
            qualification: "Psy.D. in Clinical Psychology",
            image: "https://randomuser.me/api/portraits/women/65.jpg"
        },
        {
            name: "Ms. Sarah Lee",
            description: "Ms. Sarah Lee is a certified therapist who focuses on family and couples counseling. She works with clients to develop healthier communication patterns.",
            qualification: "M.S. in Marriage and Family Therapy",
            image: "https://randomuser.me/api/portraits/women/50.jpg"
        },
        {
            name: "Dr. Robert Brown",
            description: "Dr. Robert Brown is a licensed therapist specializing in stress management, depression, and addiction recovery. He has over 12 years of experience in clinical therapy.",
            qualification: "Ph.D. in Mental Health Counseling",
            image: "https://randomuser.me/api/portraits/men/55.jpg"
        }
    ];

    return (
        <div className="container">
            <h1 className="title">Find Your Path to Well-Being with Trusted Therapists</h1>
            <div className="therapist-grid">
                {therapists.map((therapist, index) => (
                    <div className="therapist-card" key={index}>
                        <img src={therapist.image} alt={therapist.name} className="therapist-image" />
                        <h2 className="therapist-name">{therapist.name}</h2>
                        <p className="therapist-description">{therapist.description}</p>
                        <p className="therapist-qualification">{therapist.qualification}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TherapistPage;
