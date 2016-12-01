import React from 'react';
import { } from 'react-router';
import Button from '../SpaceButton';

import './index.css';

export default function GridView() {
  return (
    <div>
      <div className="buttonGrid">
        <div><Button source="images/random-chat.jpg" spaceIsDeployed="true" buttonName="random" /></div>
        <div><Button source="images/new_travel.jpg" spaceIsDeployed="true" buttonName="travel" /></div>
        <div><Button source="images/donald-trump.jpg" spaceIsDeployed="true" buttonName="donald-trump" /></div>
        <div><Button source="images/someone-to-talk-to.jpg" spaceIsDeployed="true" buttonName="someone-to-talk-to" /></div>
        <div><Button source="images/life-at-uvic.jpg" spaceIsDeployed="true" buttonName="uvic" /></div>
        <div><Button source="images/workout.jpg" buttonName="fitness" /></div>
        <div><Button source="images/LGBT.jpg" buttonName="lgbt" /></div>
        <div><Button source="images/Parenting.jpg" buttonName="parenting" /></div>
        <div><Button source="images/canadian-politics.jpg" spaceIsDeployed="true" buttonName="canadian-politics" /></div>
        <div><Button source="images/movies-and-television.jpg" spaceIsDeployed="true" buttonName="movies-and-television" /></div>
        <div><Button source="images/music-listening.jpg" buttonName="music-listening" /></div>
        <div><Button source="images/music-playing.jpg" buttonName="music-playing" /></div>
        <div><Button source="images/esl.jpg" buttonName="esl" /></div>
        <div><Button source="images/language-partner-chinese.jpg" buttonName="chinese" /></div>
        <div><Button source="images/language-partner-french.jpg" buttonName="french" /></div>
        <div><Button source="images/motorcycles.jpg" buttonName="motorcycles" /></div>
        <div><Button source="images/esports.jpg" spaceIsDeployed="true" buttonName="esports" /></div>
        <div><Button source="images/memes.jpg" buttonName="memes" /></div>
      </div>
    </div>
  );
}
