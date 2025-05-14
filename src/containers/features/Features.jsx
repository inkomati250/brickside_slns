import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Improving destructs instantly',
    text: 'From They fine give you a red pill and blue pill. You take the red pill, you stay in wonderland and see how deep the rabbit hole goes.'
  },
  {
    title: 'Become the tended active',
    text: `Considered the word "universe" as a single word. It is a single word, but it is also a collection of many words.
    The word "universe" is a collection of many words, but it is also a single word.`
  },
  {
    title: 'Message or am Nothing',
    text: `From They fine give you a red pill and blue pill. You take the red pill, you stay
    in wonderland and see how deep the rabbit hole goes.`
  },
  {
    title: 'Really Boy law County',
    text: `Considered the word "universe" as a single word. It is a single word, but it is also a collection of many words.
    The word "universe" is a collection of many words, but it is also a single word.`
  }
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Feature title ={item.title} text ={item.text} key = {item.title + index} />
        ))}
      </div>
    </div>
  );
}

export default Features;
