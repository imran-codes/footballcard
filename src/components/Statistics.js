import React, { useState } from 'react';
import { DisplayStats, GeneralTitle, StatButtonsDiv, StatButtons, StatisticsContainer, StateContainer, StatisticsSeperator, FourStats, Labels, Loaders, Loader1, Loader2, LoaderHomeShots, LoaderAwayShots, LoaderHomePossession, LoaderAwayPossession, LoaderHomeTarget, LoaderAwayTarget, LoaderHomeCorners, LoaderAwayCorners, Cards, HomeCards, AwayCards } from "../styles";
import Yellowcard from "../yellowcard.svg";
import Redcard from "../redcard.svg";
import PropTypes from 'prop-types';


const Statistics = ({stats}) => {
  
  const FullTimeStats =
  <StatisticsContainer>
  <StatisticsSeperator>         
      <FourStats>
        <Labels><div><span>{stats.liveData.lineups.home.stats[0].value}%</span><span className="stat-label">Possession</span><span>{stats.liveData.lineups.away.stats[3].value}%</span></div></Labels>
        <Loaders>
          <Loader1><LoaderHomePossession style = {{width: `${stats.liveData.lineups.home.stats[0].value}%`}}></LoaderHomePossession></Loader1>
          <Loader2><LoaderAwayPossession style = {{width: `${stats.liveData.lineups.away.stats[3].value}%`}}></LoaderAwayPossession></Loader2>
        </Loaders>
      </FourStats>

      <FourStats>
        <Labels><div><span>{stats.liveData.lineups.home.stats[4].value}</span><span className="stat-label">Shots</span><span>{stats.liveData.lineups.away.stats[4].value}</span></div></Labels>
        <Loaders>
          <Loader1><LoaderHomeShots style = {{width: `${stats.liveData.lineups.home.stats[4].value}vw`}}></LoaderHomeShots></Loader1>
          <Loader2><LoaderAwayShots style = {{width: `${stats.liveData.lineups.away.stats[4].value}vw`}}></LoaderAwayShots></Loader2>
        </Loaders>
      </FourStats>

      <FourStats>
        <Labels><div><span>{stats.liveData.lineups.home.stats[2].value}</span><span className="stat-label">Shots on Target</span><span>{stats.liveData.lineups.away.stats[1].value}</span></div></Labels>
        <Loaders>
          <Loader1><LoaderHomeTarget style = {{width: `${stats.liveData.lineups.home.stats[2].value}vw`}}></LoaderHomeTarget></Loader1>
          <Loader2><LoaderAwayTarget style = {{width: `${stats.liveData.lineups.away.stats[1].value}vw`}}></LoaderAwayTarget></Loader2>
        </Loaders>
      </FourStats>

      <FourStats>
        <Labels><div><span>{stats.liveData.lineups.home.stats[3].value}</span><span className="stat-label">Corners</span><span>{stats.liveData.lineups.away.stats[0].value}</span></div></Labels>
        <Loaders>
          <Loader1><LoaderHomeCorners style = {{width: `${stats.liveData.lineups.home.stats[3].value}vw`}}></LoaderHomeCorners></Loader1>
          <Loader2><LoaderAwayCorners style = {{width: `${stats.liveData.lineups.away.stats[0].value}vw`}}></LoaderAwayCorners></Loader2>
        </Loaders>
      </FourStats>

  </StatisticsSeperator>
    <Cards>
      <HomeCards>
      <img style={{ marginRight: "5px" }} src={Yellowcard} alt="yellowcard" /> <span>{stats.liveData.lineups.home.stats[1].value}</span>
      <img style={{ marginLeft: "5px" }} src={Redcard} alt="redcard" /> <span style={{ marginLeft: "5px" }}>0</span>
      </HomeCards>
      <AwayCards>
      <img style={{ marginRight: "5px" }} src={Redcard} alt="redcard" /> <span style={{ marginRight: "5px" }}>0</span>
      <img style={{ marginRight: "5px" }} src={Yellowcard} alt="yellowcard" /> <span>{stats.liveData.lineups.away.stats[2].value}</span>
      </AwayCards>
    </Cards>
</StatisticsContainer>



const FirstHalfStats =
<StatisticsContainer>
<StatisticsSeperator>
<FourStats>
  <Labels><div><span>{stats.liveData.lineups.home.stats[0].fh}%</span><span className="stat-label">Possession</span><span>{stats.liveData.lineups.away.stats[3].fh}%</span></div></Labels>
  <Loaders>
    <Loader1><LoaderHomePossession style = {{width: `${stats.liveData.lineups.home.stats[0].fh}%`}}></LoaderHomePossession></Loader1>
    <Loader2><LoaderAwayPossession style = {{width: `${stats.liveData.lineups.away.stats[3].fh}%`}}></LoaderAwayPossession></Loader2>
  </Loaders>
</FourStats>

<FourStats>
  <Labels><div><span>{stats.liveData.lineups.home.stats[4].fh}</span><span className="stat-label">Shots</span><span>{stats.liveData.lineups.away.stats[4].fh}</span></div></Labels>
  <Loaders>
    <Loader1><LoaderHomeShots style = {{width: `${stats.liveData.lineups.home.stats[4].fh}vw`}}></LoaderHomeShots></Loader1>
    <Loader2><LoaderAwayShots style = {{width: `${stats.liveData.lineups.away.stats[4].fh}vw`}}></LoaderAwayShots></Loader2>
  </Loaders>
</FourStats>

<FourStats>
  <Labels><div><span>{stats.liveData.lineups.home.stats[2].fh}</span><span className="stat-label">Shots on Target</span><span>{stats.liveData.lineups.away.stats[1].fh}</span></div></Labels>
  <Loaders>
    <Loader1><LoaderHomeTarget style = {{width: `${stats.liveData.lineups.home.stats[2].fh}vw`}}></LoaderHomeTarget></Loader1>
    <Loader2><LoaderAwayTarget style = {{width: `${stats.liveData.lineups.home.stats[1].fh}vw`}}></LoaderAwayTarget></Loader2>
  </Loaders>
</FourStats>

<FourStats>
  <Labels><div><span>{stats.liveData.lineups.home.stats[3].fh}</span><span className="stat-label">Corners</span><span>{stats.liveData.lineups.away.stats[0].fh}</span></div></Labels>
  <Loaders>
    <Loader1><LoaderHomeCorners style = {{width: `${stats.liveData.lineups.home.stats[3].fh}vw`}}></LoaderHomeCorners></Loader1>
    <Loader2><LoaderAwayCorners style = {{width: `${stats.liveData.lineups.away.stats[0].fh}vw`}}></LoaderAwayCorners></Loader2>
  </Loaders>
</FourStats>
</StatisticsSeperator>
<Cards>
  <HomeCards>
  <img style={{ marginRight: "5px" }} src={Yellowcard} alt="yellowcard" /> <span>{stats.liveData.lineups.home.stats[1].fh}</span>
  <img style={{ marginLeft: "5px" }} src={Redcard} alt="redcard" /> <span style={{ marginLeft: "5px" }}>0</span>
  </HomeCards>
  <AwayCards>
  <img style={{ marginRight: "5px" }} src={Redcard} alt="redcard" /> <span style={{ marginRight: "5px" }}>0</span>
  <img style={{ marginRight: "5px" }} src={Yellowcard} alt="yellowcard" /> <span>{stats.liveData.lineups.away.stats[2].fh}</span>
  </AwayCards>
</Cards>
</StatisticsContainer>



const SecondHalfStats =
<StatisticsContainer>
<StatisticsSeperator>
<FourStats>
  <Labels><div><span>{stats.liveData.lineups.home.stats[0].sh}%</span><span className="stat-label">Possession</span><span>{stats.liveData.lineups.away.stats[3].sh}%</span></div></Labels>
  <Loaders>
    <Loader1><LoaderHomePossession style = {{width: `${stats.liveData.lineups.home.stats[0].sh}%`}}></LoaderHomePossession></Loader1>
    <Loader2><LoaderAwayPossession style = {{width: `${stats.liveData.lineups.away.stats[3].sh}%`}}></LoaderAwayPossession></Loader2>
  </Loaders>
</FourStats>

<FourStats>
  <Labels><div><span>{stats.liveData.lineups.home.stats[4].sh}</span><span className="stat-label">Shots</span><span>{stats.liveData.lineups.away.stats[4].sh}</span></div></Labels>
  <Loaders>
    <Loader1><LoaderHomeShots style = {{width: `${stats.liveData.lineups.home.stats[4].sh}vw`}}></LoaderHomeShots></Loader1>
    <Loader2><LoaderAwayShots style = {{width: `${stats.liveData.lineups.away.stats[4].sh}vw`}}></LoaderAwayShots></Loader2>
  </Loaders>
</FourStats>

<FourStats>
  <Labels><div><span>{stats.liveData.lineups.home.stats[2].sh}</span><span className="stat-label">Shots on Target</span><span>{stats.liveData.lineups.away.stats[1].sh}</span></div></Labels>
  <Loaders>
    <Loader1><LoaderHomeTarget style = {{width: `${stats.liveData.lineups.home.stats[2].sh}vw`}}></LoaderHomeTarget></Loader1>
    <Loader2><LoaderAwayTarget style = {{width: `${stats.liveData.lineups.away.stats[1].sh}vw`}}></LoaderAwayTarget></Loader2>
  </Loaders>
</FourStats>

<FourStats>
  <Labels><div><span>{stats.liveData.lineups.home.stats[3].sh}</span><span className="stat-label">Corners</span><span>{stats.liveData.lineups.away.stats[0].sh}</span></div></Labels>
  <Loaders>
    <Loader1><LoaderHomeCorners style = {{width: `${stats.liveData.lineups.home.stats[3].sh}vw`}}></LoaderHomeCorners></Loader1>
    <Loader2><LoaderAwayCorners style = {{width: `${stats.liveData.lineups.away.stats[0].sh}vw`}}></LoaderAwayCorners></Loader2>
  </Loaders>
</FourStats>

</StatisticsSeperator>
<Cards>
    <HomeCards>
    <img style={{ marginRight: "5px" }} src={Yellowcard} alt="yellowcard" /> <span>{stats.liveData.lineups.home.stats[1].sh}</span>
    <img style={{ marginLeft: "5px" }} src={Redcard} alt="redcard" /> <span style={{ marginLeft: "5px" }}>0</span>
    </HomeCards>
    <AwayCards>
    <img style={{ marginRight: "5px" }} src={Redcard} alt="redcard" /> <span style={{ marginRight: "5px" }}>0</span>
    <img style={{ marginRight: "5px" }} src={Yellowcard} alt="yellowcard" /> <span>{stats.liveData.lineups.away.stats[2].sh}</span>
    </AwayCards>
  </Cards>
</StatisticsContainer>

  const [visible, setVisible] = useState(FullTimeStats);

   
  
  return ( 
<DisplayStats>
              <GeneralTitle>General</GeneralTitle>
              <StatButtonsDiv>
                <StatButtons onClick = {() => setVisible(FullTimeStats)}>
                  Full Match
                </StatButtons>
                <StatButtons onClick = {() => setVisible(FirstHalfStats)}>
                  1st Half
                </StatButtons>
                <StatButtons onClick = {() => setVisible(SecondHalfStats)}>
                  2nd Half
                </StatButtons>
              </StatButtonsDiv>

            <StatisticsContainer>
                <StateContainer>{visible}</StateContainer>
            </StatisticsContainer>
      </DisplayStats>

   );
}
 
export default Statistics;

//Prop-Types
Statistics.propTypes = {
  stats: PropTypes.object,
  title: PropTypes.string
};