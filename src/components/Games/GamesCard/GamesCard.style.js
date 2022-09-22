import styled from 'styled-components';

const StyledGamesCard = styled.div`
    margin: 20px;
    border-radius: 9px;
    background-color:beige;
    position: relative;
    &:hover {
    cursor: pointer;
  }
`

const GamesCardTitle = styled.h2`
    margin-left: 20px;
`

const GamesCardImgWrapper = styled.div`
       border-top-left-radius: 8px;
       border-top-right-radius: 8px;
       overflow: hidden;
       position: relative;
       &:hover {
        position: relative;
        filter: brightness(50%);
        transition:0.3s;
    }
    `

const GameBtn = styled.button`
    width: 10em;
    height: 10em;
    outline:none;
    background: none;
    border: 0;
    margin: .5em;
    border-radius: 50%;
    position: absolute;
    transform: translate( -50%, -50% );
    top: ${(props) => (props.top ? props.top : null)};
    left: ${(props) => (props.left ? props.left : null)};
    @media screen and (max-width: 70em) {
    width: 7.5em;
    height: 7.5em;
  }
`

const GameBtnRound = styled.div`
    width: 100%;
    height: 92.39%;
    border-radius: 50%;
    border:10px solid #cfdcec;
    overflow:hidden;
    background: ${(props) => (props.color ? props.color : "white")};
    box-shadow: 0 0 3px gray;
    &:hover{
        background: ${(props) => (props.hover ? props.hover : "#30588e")};
    }
`

// const Constraint = styled.span`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: absolute;
//     top:50%;
//     left:50%;
//     transform: translate( -50%, -50% );
// `

const GameBtnText = styled.span`
  float:left;
  width:100%;
  padding: 50% 0;
  line-height:1em;
  margin-top:-0.5em;
  text-align:center;
  color:#e2eaf3;
    font-size:1.7em;
    font-weight:bold;
    text-decoration:none;
    @media screen and (max-width: 70em) {
        font-size:1.2em;
  }
`

export { StyledGamesCard, GamesCardTitle, GamesCardImgWrapper,
     GameBtn, GameBtnRound, GameBtnText };