import "./App.css";

function ProfileCard({ name, image, description, course, hobbies }) {
  return (
    <article className="profile-card">
      <div className="profile-banner">
        <span className="badge">STUDENT PROFILE</span>
      </div>

      <div className="profile-content">
        <img
          className="profile-image"
          src={image}
          alt={name}
        />

        <h1>{name}</h1>
        <p className="course">{course}</p>
        <p className="description">{description}</p>

        <h2>My Interests</h2>
        <div className="hobbies">
          {hobbies.map((hobby) => (
            <span key={hobby}>{hobby}</span>
          ))}
        </div>

        <p className="footer-text">Learning • Building • Growing</p>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <main className="page">
      <ProfileCard
        name="Samarth Kshirsagar"
        image={`${import.meta.env.BASE_URL}samarth.jpg`}
        course="MCA Student"
        description="Technology enthusiast who enjoys coding, gaming, cooking, and learning new technologies."
        hobbies={["Coding", "Gaming", "Cooking", "Movies"]}
      />
    </main>
  );
}