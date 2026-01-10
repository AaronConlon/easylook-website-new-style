import React from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './UserStories.css';
import userStory1 from '../../assets/user_story_1.png';
import userStory2 from '../../assets/user_story_2.png';
import userStory3 from '../../assets/user_story_3.png';
import userStory4 from '../../assets/user_story_4.png';

// Dummy Data
const stories = [
  {
    id: 1,
    name: "Nina, United States",
    quote: "I highly recommend buying ReO2. The effect is really visible. The contact lenses are cleaned and the eyes are no longer dry.",
    image: userStory1
  },
  {
    id: 2,
    name: "Skyla, United States",
    quote: "I wear contact lenses all year round. Strongly recommend ReO2, it has returned my monthly contacts to near new condition!",
    image: userStory2
  },
  {
    id: 3,
    name: "Lisa, France",
    quote: "Typically, I follow my regular cleaning routine but opt for a deep cleaning method once a week. Since using ReO2, I have found it to be far superior to my normal ultrasonic cleaner.",
    image: userStory3
  },
  {
    id: 4,
    name: "Marian, United Kingdom",
    quote: "I've been wearing monthly contact lenses for over ten years and constantly feel dry and uncomfortable. ReO2 makes my contact lens feel as fresh as daily disposal, that's amazing.",
    image: userStory4
  }
];

const UserStories = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section className="user-stories-container" ref={ref}>
      <div className={`user-stories-inner scroll-animate ${isVisible ? 'in-view' : ''}`}>
        
        {/* Header */}
        <div className="user-stories-header">
          <h2>User Stories</h2>
        </div>

        {/* Grid */}
        <div className="stories-grid">
          {stories.map((story) => (
            <div key={story.id} className="story-card">
              <div className="story-image-wrapper">
                <img src={story.image} alt={story.name} className="story-image" />
              </div>
              <h3 className="story-name">{story.name}</h3>
              <p className="story-quote">{story.quote}</p>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="user-stories-footer">
           <a href="/product" className="cta-btn">
             立即体验
           </a>
        </div>

      </div>
    </section>
  );
};

export default UserStories;
