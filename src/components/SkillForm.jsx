import { useState } from 'react';

export default function SkillForm() {
  const [skill, setSkill] = useState('');
  const [income, setIncome] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(`Skill: ${skill}, Income: ${income}`)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="skill">Skill:</label>
        <input
          type="text"
          id="skill"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="income">Income:</label>
        <input
          type="number"
          id="income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>
      <button type="submit">Add Skill</button>
    </form>
  );
}
