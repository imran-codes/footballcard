import { Container, ScoreBanner, Overlay, Content, Wrap, Title, Scores, Teams, TeamName, GeneralTab, Last5 } from "../Styles";
import Statistics from "./Statistics"
import PropTypes from 'prop-types';


//pass functions as props
const FootyList = ({stats, title}) => {


  return (
                <div>
                  
                    <Container>
                      {/* SCORE BANNER */}
                          <ScoreBanner>
                              <Overlay></Overlay>
                              <Content>
                                <Wrap>
                                  <Title>
                                    {title}<br/> <span>{stats.liveData.matchDetails.scores.ft.home} - {stats.liveData.matchDetails.scores.ft.away}</span>
                                  </Title>
                                  <Scores>
                                      <Teams>
                                          <img src="https://cdn.fantasyiteam.com/bethub/teams/150x150/ck8m1cn23sukwsurgx5qakttk.png" alt="Team Badge"/>
                                          <TeamName>
                                          {stats.contestant[0].name}
                                            </TeamName>
                                            <Last5>{stats.last5.home}</Last5>
                                      </Teams>
                                      <Teams>
                                          <TeamName>vs</TeamName>
                                      </Teams>
                                      <Teams>
                                          <img src="https://cdn.fantasyiteam.com/bethub/teams/150x150/61g4epojd5f198lv1sje27yh3.png" alt="Team Badge"/>
                                          <TeamName>{stats.contestant[1].name}</TeamName>
                                          <Last5>{stats.last5.away}</Last5>
                                      </Teams>
                                  </Scores>
                                </Wrap>
                              </Content>
                          </ScoreBanner>
                    {/* GENERAL TAB */}
                          <GeneralTab>
                              <button type="button">General</button>
                          </GeneralTab>

                    {/* ALL STATS FROM STATISTICS COMPONENTS */}
                        <Statistics stats={stats} />


                    </Container>
                    
                </div>
  );
}

export default FootyList;

//Prop-Types
FootyList.propTypes = {
  stats: PropTypes.object,
  title: PropTypes.string
};
