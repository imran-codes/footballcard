import React, { useState } from 'react';
import styled from "styled-components";
import Yellowcard from "../yellowcard.svg";
import Redcard from "../redcard.svg";






//pass functions as props
const FootyList = ({stats, title}) => {



const fulltimestats =   
              <Statisticscontainer>
                    <Statisticsseperator>         
                        <Fourstats>
                          <Labels><div><span>{stats.liveData.lineups.home.stats[0].value}%</span><span className="stat-label">Possession</span><span>{stats.liveData.lineups.away.stats[3].value}%</span></div></Labels>
                          <Loaders>
                            <Loader1><Loaderhomepos style = {{width: `${stats.liveData.lineups.home.stats[0].value}%`}}></Loaderhomepos></Loader1>
                            <Loader2><Loaderawaypos style = {{width: `${stats.liveData.lineups.away.stats[3].value}%`}}></Loaderawaypos></Loader2>
                          </Loaders>
                        </Fourstats>

                        <Fourstats>
                          <Labels><div><span>{stats.liveData.lineups.home.stats[4].value}</span><span className="stat-label">Shots</span><span>{stats.liveData.lineups.away.stats[4].value}</span></div></Labels>
                          <Loaders>
                            <Loader1><Loaderhomeshots style = {{width: `${stats.liveData.lineups.home.stats[4].value}vw`}}></Loaderhomeshots></Loader1>
                            <Loader2><Loaderawayshots style = {{width: `${stats.liveData.lineups.away.stats[4].value}vw`}}></Loaderawayshots></Loader2>
                          </Loaders>
                        </Fourstats>

                        <Fourstats>
                          <Labels><div><span>{stats.liveData.lineups.home.stats[2].value}</span><span className="stat-label">Shots on Target</span><span>{stats.liveData.lineups.away.stats[1].value}</span></div></Labels>
                          <Loaders>
                            <Loader1><Loaderhometar style = {{width: `${stats.liveData.lineups.home.stats[2].value}vw`}}></Loaderhometar></Loader1>
                            <Loader2><Loaderawaytar style = {{width: `${stats.liveData.lineups.away.stats[1].value}vw`}}></Loaderawaytar></Loader2>
                          </Loaders>
                        </Fourstats>

                        <Fourstats>
                          <Labels><div><span>{stats.liveData.lineups.home.stats[3].value}</span><span className="stat-label">Corners</span><span>{stats.liveData.lineups.away.stats[0].value}</span></div></Labels>
                          <Loaders>
                            <Loader1><Loaderhomecor style = {{width: `${stats.liveData.lineups.home.stats[3].value}vw`}}></Loaderhomecor></Loader1>
                            <Loader2><Loaderawaycor style = {{width: `${stats.liveData.lineups.away.stats[0].value}vw`}}></Loaderawaycor></Loader2>
                          </Loaders>
                        </Fourstats>

                    </Statisticsseperator>
                      <Cards>
                        <Homecards>
                        <img style={{ marginRight: "5px" }} src={Yellowcard} alt="yellowcard" /> <span>{stats.liveData.lineups.home.stats[1].value}</span>
                        <img style={{ marginLeft: "5px" }} src={Redcard} alt="redcard" /> <span style={{ marginLeft: "5px" }}>0</span>
                        </Homecards>
                        <Awaycards>
                        <img style={{ marginRight: "5px" }} src={Redcard} alt="redcard" /> <span style={{ marginRight: "5px" }}>0</span>
                        <img style={{ marginRight: "5px" }} src={Yellowcard} alt="yellowcard" /> <span>{stats.liveData.lineups.away.stats[2].value}</span>
                        </Awaycards>
                      </Cards>
                </Statisticscontainer>




const firsthalfstats = 
            <Statisticscontainer>
                <Statisticsseperator>
                  <Fourstats>
                    <Labels><div><span>{stats.liveData.lineups.home.stats[0].fh}%</span><span className="stat-label">Possession</span><span>{stats.liveData.lineups.away.stats[3].fh}%</span></div></Labels>
                    <Loaders>
                      <Loader1><Loaderhomepos style = {{width: `${stats.liveData.lineups.home.stats[0].fh}%`}}></Loaderhomepos></Loader1>
                      <Loader2><Loaderawaypos style = {{width: `${stats.liveData.lineups.away.stats[3].fh}%`}}></Loaderawaypos></Loader2>
                    </Loaders>
                  </Fourstats>

                  <Fourstats>
                    <Labels><div><span>{stats.liveData.lineups.home.stats[4].fh}</span><span className="stat-label">Shots</span><span>{stats.liveData.lineups.away.stats[4].fh}</span></div></Labels>
                    <Loaders>
                      <Loader1><Loaderhomeshots style = {{width: `${stats.liveData.lineups.home.stats[4].fh}vw`}}></Loaderhomeshots></Loader1>
                      <Loader2><Loaderawayshots style = {{width: `${stats.liveData.lineups.away.stats[4].fh}vw`}}></Loaderawayshots></Loader2>
                    </Loaders>
                  </Fourstats>

                  <Fourstats>
                    <Labels><div><span>{stats.liveData.lineups.home.stats[2].fh}</span><span className="stat-label">Shots on Target</span><span>{stats.liveData.lineups.away.stats[1].fh}</span></div></Labels>
                    <Loaders>
                      <Loader1><Loaderhometar style = {{width: `${stats.liveData.lineups.home.stats[2].fh}vw`}}></Loaderhometar></Loader1>
                      <Loader2><Loaderawaytar style = {{width: `${stats.liveData.lineups.home.stats[1].fh}vw`}}></Loaderawaytar></Loader2>
                    </Loaders>
                  </Fourstats>

                  <Fourstats>
                    <Labels><div><span>{stats.liveData.lineups.home.stats[3].fh}</span><span className="stat-label">Corners</span><span>{stats.liveData.lineups.away.stats[0].fh}</span></div></Labels>
                    <Loaders>
                      <Loader1><Loaderhomecor style = {{width: `${stats.liveData.lineups.home.stats[3].fh}vw`}}></Loaderhomecor></Loader1>
                      <Loader2><Loaderawaycor style = {{width: `${stats.liveData.lineups.away.stats[0].fh}vw`}}></Loaderawaycor></Loader2>
                    </Loaders>
                  </Fourstats>
                  </Statisticsseperator>
                  <Cards>
                    <Homecards>
                    <img style={{ marginRight: "5px" }} src={Yellowcard} alt="yellowcard" /> <span>{stats.liveData.lineups.home.stats[1].fh}</span>
                    <img style={{ marginLeft: "5px" }} src={Redcard} alt="redcard" /> <span style={{ marginLeft: "5px" }}>0</span>
                    </Homecards>
                    <Awaycards>
                    <img style={{ marginRight: "5px" }} src={Redcard} alt="redcard" /> <span style={{ marginRight: "5px" }}>0</span>
                    <img style={{ marginRight: "5px" }} src={Yellowcard} alt="yellowcard" /> <span>{stats.liveData.lineups.away.stats[2].fh}</span>
                    </Awaycards>
                  </Cards>
            </Statisticscontainer>


const secondhalfstats = 
              <Statisticscontainer>
                <Statisticsseperator>
                  <Fourstats>
                    <Labels><div><span>{stats.liveData.lineups.home.stats[0].sh}%</span><span className="stat-label">Possession</span><span>{stats.liveData.lineups.away.stats[3].sh}%</span></div></Labels>
                    <Loaders>
                      <Loader1><Loaderhomepos style = {{width: `${stats.liveData.lineups.home.stats[0].sh}%`}}></Loaderhomepos></Loader1>
                      <Loader2><Loaderawaypos style = {{width: `${stats.liveData.lineups.away.stats[3].sh}%`}}></Loaderawaypos></Loader2>
                    </Loaders>
                  </Fourstats>

                  <Fourstats>
                    <Labels><div><span>{stats.liveData.lineups.home.stats[4].sh}</span><span className="stat-label">Shots</span><span>{stats.liveData.lineups.away.stats[4].sh}</span></div></Labels>
                    <Loaders>
                      <Loader1><Loaderhomeshots style = {{width: `${stats.liveData.lineups.home.stats[4].sh}vw`}}></Loaderhomeshots></Loader1>
                      <Loader2><Loaderawayshots style = {{width: `${stats.liveData.lineups.away.stats[4].sh}vw`}}></Loaderawayshots></Loader2>
                    </Loaders>
                  </Fourstats>

                  <Fourstats>
                    <Labels><div><span>{stats.liveData.lineups.home.stats[2].sh}</span><span className="stat-label">Shots on Target</span><span>{stats.liveData.lineups.away.stats[1].sh}</span></div></Labels>
                    <Loaders>
                      <Loader1><Loaderhometar style = {{width: `${stats.liveData.lineups.home.stats[2].sh}vw`}}></Loaderhometar></Loader1>
                      <Loader2><Loaderawaytar style = {{width: `${stats.liveData.lineups.away.stats[1].sh}vw`}}></Loaderawaytar></Loader2>
                    </Loaders>
                  </Fourstats>

                  <Fourstats>
                    <Labels><div><span>{stats.liveData.lineups.home.stats[3].sh}</span><span className="stat-label">Corners</span><span>{stats.liveData.lineups.away.stats[0].sh}</span></div></Labels>
                    <Loaders>
                      <Loader1><Loaderhomecor style = {{width: `${stats.liveData.lineups.home.stats[3].sh}vw`}}></Loaderhomecor></Loader1>
                      <Loader2><Loaderawaycor style = {{width: `${stats.liveData.lineups.away.stats[0].sh}vw`}}></Loaderawaycor></Loader2>
                    </Loaders>
                  </Fourstats>

                  </Statisticsseperator>
                  <Cards>
                      <Homecards>
                      <img style={{ marginRight: "5px" }} src={Yellowcard} alt="yellowcard" /> <span>{stats.liveData.lineups.home.stats[1].sh}</span>
                      <img style={{ marginLeft: "5px" }} src={Redcard} alt="redcard" /> <span style={{ marginLeft: "5px" }}>0</span>
                      </Homecards>
                      <Awaycards>
                      <img style={{ marginRight: "5px" }} src={Redcard} alt="redcard" /> <span style={{ marginRight: "5px" }}>0</span>
                      <img style={{ marginRight: "5px" }} src={Yellowcard} alt="yellowcard" /> <span>{stats.liveData.lineups.away.stats[2].sh}</span>
                      </Awaycards>
                    </Cards>
               </Statisticscontainer>;

const [visible, setVisible] = useState(fulltimestats);



  return (
<div>
     <Container>
       {/* SCORE BANNER */}
          <Scorebanner>
              <Overlay></Overlay>
              <Content>
                <Wrap>
                  <Title>
                    {title}<br/> <span>{stats.liveData.matchDetails.scores.ft.home} - {stats.liveData.matchDetails.scores.ft.away}</span>
                  </Title>
                  <Scores>
                      <Teams>
                          <img src="https://cdn.fantasyiteam.com/bethub/teams/150x150/ck8m1cn23sukwsurgx5qakttk.png" alt="Team Badge"/>
                          <Teamname>
                          {stats.contestant[0].name}
                            </Teamname>
                            <Last5>{stats.last5.home}</Last5>
                      </Teams>
                      <Teams>
                          <Teamname>vs</Teamname>
                      </Teams>
                      <Teams>
                          <img src="https://cdn.fantasyiteam.com/bethub/teams/150x150/61g4epojd5f198lv1sje27yh3.png" alt="Team Badge"/>
                          <Teamname>{stats.contestant[1].name}</Teamname>
                          <Last5>{stats.last5.away}</Last5>
                      </Teams>
                  </Scores>
                </Wrap>
              </Content>
          </Scorebanner>
    {/* GENERAL TAB */}
          <Generaltab>
            <button type="button">General</button>
          </Generaltab>

    {/* ALL STATS */}
        <Displaystats>
              <Generaltitle>General</Generaltitle>
              <Statbuttonsdiv>
                <Statbuttons onClick = {() => setVisible(fulltimestats)}>
                  Full Match
                </Statbuttons>
                <Statbuttons onClick = {() => setVisible(firsthalfstats)}>
                  1st Half
                </Statbuttons>
                <Statbuttons onClick = {() => setVisible(secondhalfstats)}>
                  2nd Half
                </Statbuttons>
              </Statbuttonsdiv>



              

            <Statisticscontainer>
            <Statecontainer>{visible}</Statecontainer>
            </Statisticscontainer>
         </Displaystats>


    </Container>
    
    </div>
  );
}

export default FootyList;


const Container = styled.div`
height: 100vh;
width: 100wv;
`
const Scorebanner = styled.div `
  position: relative;
  background-image: url(https://cdn.fantasyiteam.com/bethub/venues/600x450/c1p29q1mh2c0j6c4l59kf231g.jpg);
  background-size: cover;
  background-position: center center;
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  height: 310px;
  border-radius: 8px 8px 0px 0px;

`

const Overlay = styled.div `
  position: absolute;
  inset: 0px;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 8px 8px 0px 0px;
`
const Content = styled.div `
    position: absolute;
    inset: 0px;
    z-index: 2;
    overflow: hidden;
    border-radius: 8px 8px 0px 0px;
`

const Wrap = styled.div `
    display: flex;
    flex-direction: column;
    align-content: center;
    -webkit-box-align: center;
    align-items: center;
    max-height: 100%;
    border-radius: 8px 8px 0px 0px;
    `

const Title = styled.div `
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    font-size: 1.125rem;
    text-align: center;
    color: rgb(182, 203, 216);
    font-weight: 500;
    width: 100%;
    margin: 16px 0px;
`

const Scores = styled.div `
    display: grid;
    grid-template-columns: 2fr 1fr 2fr;
    gap: 10px;
    width: 100%;
    height: 100%;
    padding: 0px;
    margin: 0px;
`

const Teams = styled.div `
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`

const Teamname = styled.div `
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 0.5rem;
    text-align: center;
    `

    const Generaltab = styled.div `
    display: flex;
    width: 100%;
    background-color: rgb(17, 23, 29);
    padding-top: 1px;

    button {
      color: rgb(0, 0, 0);
      background-color: rgb(239, 229, 46);
      font-weight: 700;
      flex-direction: row;
      text-align: center;
      width: 100%;
      height: 30px;
      border:none;
      font-size: 15px;
      transition: all 0.3s ease-in-out 0s;
    }
`
const Displaystats = styled.div `
    display: flex;
    flex-direction: column;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    padding: 1.5rem 1.5rem 0px;
    background-color: rgb(21, 32, 44);
    border-radius: 0px 0px 8px 8px;
`

const Generaltitle = styled.p `
display: block;
    font-size: 0.75rem;
    font-weight: 700;
    color: rgb(255, 255, 255);
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
`

const Statbuttonsdiv = styled.div `
display: flex;
    -webkit-box-pack: center;
    justify-content: center;
`

const Statbuttons = styled.div `
font-size: 0.75rem;
    padding: 0.5rem 1rem;
    border: none;
    background-color: rgb(30, 42, 58);
    color: rgb(255, 255, 255);
    border-radius: 1rem;
    margin: 0px 0.25rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out 0s;

    &;hover, :active {
      background-color: rgb(239, 229, 46);
      color: rgb(0, 0, 0);
    }
`

const Statisticscontainer = styled.div `
    display: flex;
    padding: 1rem 0px;
    width: 100%;
    flex-flow: row wrap;
`

const Statecontainer = styled.div `
    display: flex;
    padding: 1rem 0px;
    width: 100%;
    flex-flow: row wrap;
`

const Statisticsseperator = styled.div `
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
`

const Fourstats = styled.div `
    width: 48%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
`

const Labels = styled.div `
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    span {
      font-size: 0.675rem;
      margin: 0px auto;
    }

    .stat-label {
      margin: 0 50px;
    }
`

const Loaders = styled.div `
    display: flex;
    flex-direction: row;
    margin: 0.5rem 0px 0px;
`

const Loader1 = styled.div `
    margin-right: 4px;
    width: calc(50% - 4px);
    height: 6px;
    border-radius: 3px;
    background-color: rgb(30, 42, 58);
    position: relative;

`

const Loader2 = styled.div `
    margin-left: 4px;
    width: calc(50% - 4px);
    height: 6px;
    border-radius: 3px;
    background-color: rgb(30, 42, 58);
    position: relative;

`
const Loaderhomeshots = styled.div `
    right: 0px;
    background-color: rgb(239, 229, 46);
    position: absolute;
    height: 6px;
    border-radius: 3px;
    transition: width 0.3s linear 0s;
`

const Loaderawayshots = styled.div `
left: 0px;
background-color: rgb(68, 219, 94);
position: absolute;
height: 6px;
border-radius: 3px;
transition: width 0.3s linear 0s;
`

const Loaderhomepos = styled.div `
    right: 0px;
    background-color: rgb(239, 229, 46);
    position: absolute;
    height: 6px;
    border-radius: 3px;
    transition: width 0.3s linear 0s;
`

const Loaderawaypos = styled.div `
left: 0px;
background-color: rgb(68, 219, 94);
position: absolute;
height: 6px;
border-radius: 3px;
transition: width 0.3s linear 0s;
`

const Loaderhometar = styled.div `
    right: 0px;
    background-color: rgb(239, 229, 46);
    position: absolute;
    height: 6px;
    border-radius: 3px;
    transition: width 0.3s linear 0s;
`

const Loaderawaytar = styled.div `
left: 0px;
background-color: rgb(68, 219, 94);
position: absolute;
height: 6px;
border-radius: 3px;
transition: width 0.3s linear 0s;
`

const Loaderhomecor = styled.div `
    right: 0px;
    background-color: rgb(239, 229, 46);
    position: absolute;
    height: 6px;
    border-radius: 3px;
    transition: width 0.3s linear 0s;
`

const Loaderawaycor = styled.div `
left: 0px;
background-color: rgb(68, 219, 94);
position: absolute;
height: 6px;
border-radius: 3px;
transition: width 0.3s linear 0s;
`

const Cards = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 12px;
`

const Homecards = styled.div `
    width: 48%;
    display: flex;
    margin-right: auto;
`

const Awaycards = styled.div `
    width: 48%;
    display: flex;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin-left: auto;
`
const Last5 = styled.div `
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 20px;
`
