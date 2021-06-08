import styled from "styled-components";

const Container = styled.div`
height: 100vh;
width: 100wv;
`
const ScoreBanner = styled.div `
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

    @media (max-width: 768px) {
      font-size: 12px;
      img {
        height: 100px;
      }
    }

    @media (max-width: 580px) {
      font-size: 12px;

      img {
        height: 100px;
      }
    }
 

`

const TeamName = styled.div `
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 0.5rem;
    text-align: center;

    @media (max-width: 768px) {
      font-size: 18px;
    }

    @media (max-width: 580px) {
      font-size: 14px;
    }
    `

    const GeneralTab = styled.div `
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
const DisplayStats = styled.div `
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

const GeneralTitle = styled.p `
display: block;
    font-size: 0.75rem;
    font-weight: 700;
    color: rgb(255, 255, 255);
    margin-bottom: 1rem;
    width: 100%;
    text-align: center;
`

const StatButtonsDiv = styled.div `
display: flex;
    -webkit-box-pack: center;
    justify-content: center;
`

const StatButtons = styled.div `
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

const StatisticsContainer = styled.div `
    display: flex;
    padding: 1rem 0px;
    width: 100%;
    flex-flow: row wrap;
`

const StateContainer = styled.div `
    display: flex;
    padding: 1rem 0px;
    width: 100%;
    flex-flow: row wrap;
`

const StatisticsSeperator = styled.div `
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    -webkit-box-pack: justify;
    justify-content: space-between;
`

const FourStats = styled.div `
    width: 48%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    @media (max-width: 768px) {
      width: 99%;
      align-items: inherit;
    }
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
const LoaderHomeShots = styled.div `
    right: 0px;
    background-color: rgb(239, 229, 46);
    position: absolute;
    height: 6px;
    border-radius: 3px;
    transition: width 0.3s linear 0s;
    width: inherit;
`

const LoaderAwayShots = styled.div `
left: 0px;
background-color: rgb(68, 219, 94);
position: absolute;
height: 6px;
border-radius: 3px;
transition: width 0.3s linear 0s;
width: inherit;
`

const LoaderHomePossession = styled.div `
    right: 0px;
    background-color: rgb(239, 229, 46);
    position: absolute;
    height: 6px;
    border-radius: 3px;
    transition: width 0.3s linear 0s;
    width: inherit;
`

const LoaderAwayPossession = styled.div `
left: 0px;
background-color: rgb(68, 219, 94);
position: absolute;
height: 6px;
border-radius: 3px;
transition: width 0.3s linear 0s;
width: inherit;
`

const LoaderHomeTarget = styled.div `
    right: 0px;
    background-color: rgb(239, 229, 46);
    position: absolute;
    height: 6px;
    border-radius: 3px;
    transition: width 0.3s linear 0s;
    width: inherit;
`

const LoaderAwayTarget = styled.div `
left: 0px;
background-color: rgb(68, 219, 94);
position: absolute;
height: 6px;
border-radius: 3px;
transition: width 0.3s linear 0s;
width: inherit;
`

const LoaderHomeCorners = styled.div `
    right: 0px;
    background-color: rgb(239, 229, 46);
    position: absolute;
    height: 6px;
    border-radius: 3px;
    transition: width 0.3s linear 0s;
    width: inherit;
`

const LoaderAwayCorners = styled.div `
left: 0px;
background-color: rgb(68, 219, 94);
position: absolute;
height: 6px;
border-radius: 3px;
transition: width 0.3s linear 0s;
width: inherit;
`

const Cards = styled.div `
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 12px;
`

const HomeCards = styled.div `
    width: 48%;
    display: flex;
    margin-right: auto;
`

const AwayCards = styled.div `
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


export {Container, ScoreBanner, Overlay, Content, Wrap, Title, Scores, Teams, TeamName, GeneralTab, DisplayStats, GeneralTitle, StatButtonsDiv, StatButtons, StatisticsContainer, StateContainer, StatisticsSeperator, FourStats, Labels, Loaders, Loader1, Loader2, LoaderHomeShots, LoaderAwayShots, LoaderHomePossession, LoaderAwayPossession, LoaderHomeTarget, LoaderAwayTarget, LoaderHomeCorners, LoaderAwayCorners, Cards, HomeCards, AwayCards, Last5} 