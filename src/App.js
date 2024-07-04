import './App.css';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faQuoteLeft, faMagnifyingGlass, faCircleHalfStroke, faCircleUp, faPoo, faBell } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [listOpen, setListOpen] = useState(false);
  const [themeBrightness, setThemeBrightness] = useState(false);
  const [lightColor, setLightColor] = useState('#fff');
  const [darkColor, setDarkColor] = useState('#282828');
  const [bgColor, setBgColor] = useState('#EAEAEA');
  const [themeName, setThemeName] = useState('Light');
  const [searchText, setSearchText] = useState('Indesign教學, 瘦身水煮餐...等');
  const [pushPostIcon, setPushPostIcon] = useState('#FFC648');
  const [pushPostButton, setPushPostButton] = useState('#EAEAEA');
  const [pushPostQuantity, setPushPostQuantity] = useState(0);

  const listToggle = () => { setListOpen(!listOpen); }
  
  const themeToggle = () => { 
    setThemeBrightness(!themeBrightness);
    setLightColor(lightColor === '#fff' ? '#EAEAEA' : '#fff');
    setDarkColor(darkColor === '#282828' ? '#fff' : '#282828');
    setBgColor(bgColor === '#EAEAEA' ? '#282828' : '#EAEAEA');
    setThemeName(themeName === 'Light' ? 'Dark' : 'Light');
  }
  
  const pushPostToggle = () => {
    setPushPostButton(pushPostButton === '#EAEAEA' ? '#FFC648' : '#EAEAEA');
    console.log('pushPostButton' + pushPostButton);

    setPushPostIcon(pushPostIcon === '#FFC648' ? '#EAEAEA' : '#FFC648' );
    console.log('pushPostIcon' + pushPostIcon);

    setPushPostQuantity(prevQuantity => {
      if (pushPostButton === '#EAEAEA') {
        return prevQuantity + 1;
      } else {
        return prevQuantity - 1;
      }
    });
  }

  return (
    <StyledWebsite>
      <GlobalStyle bgColor={bgColor} />
      {/* 左邊板塊 */}
      <StyledRightPad lightColor={lightColor} darkColor={darkColor} bgColor={bgColor}>
        <StyledLogo/>
        <StyledRPHr />
        <StyledRPBigLabel lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} onClick={listToggle}>
         <div><StyledBigLabelButton icon={faPlay} isExpanded={listOpen} /></div>
          <h1>設計師</h1>
        </StyledRPBigLabel>
        <StyledRPSmallLabel lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} isExpanded={listOpen} >
          <div>
            <StyledSmallLabelIcon bgColor={bgColor} icon={faQuoteLeft} />
            <h1>服裝設計</h1>
          </div>
          <div>
            <StyledSmallLabelIcon bgColor={bgColor} icon={faQuoteLeft} />
            <h1>產品設計</h1>
          </div>
          <div>
            <StyledSmallLabelIcon bgColor={bgColor} icon={faQuoteLeft} />
            <h1>平面設計</h1>
          </div>
          <div>
            <StyledSmallLabelIcon bgColor={bgColor} icon={faQuoteLeft} />
            <h1>室內設計</h1>
          </div>
          <div>
            <StyledSmallLabelButton bgColor={bgColor} icon={faPlus} />
            <h1>新版申請</h1>
          </div>
        </StyledRPSmallLabel>

        <StyledRPBigLabel lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} onClick={listToggle}>
         <div><StyledBigLabelButton bgColor={bgColor} icon={faPlay} isExpanded={listOpen} /></div>
          <h1>技研家</h1>
        </StyledRPBigLabel>
        <StyledRPSmallLabel lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} isExpanded={listOpen} >
          <div>
            <StyledSmallLabelIcon bgColor={bgColor} icon={faQuoteLeft} />
            <h1>摩托動力</h1>
          </div>
          <div>
            <StyledSmallLabelIcon bgColor={bgColor} icon={faQuoteLeft} />
            <h1>汽車動力</h1>
          </div>
          <div>
            <StyledSmallLabelButton bgColor={bgColor} icon={faPlus} />
            <h1>新版申請</h1>
          </div>
        </StyledRPSmallLabel>
      </StyledRightPad>

      {/* 中間板塊 */}
      <StyledMiddlePad>
        <StyledMPSearchBar lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} >
          <div class = "outer"><input type="text" /></div>
          <StyledSearchIcon icon={faMagnifyingGlass} />
        </StyledMPSearchBar>
        <StyledMPAds lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} ><img /></StyledMPAds>
        <StyledMPPost lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} >
          <div class = "postUp">
            <div class = "postUpRight">
              <img />
              <h1>淡Dan</h1>
            </div>
            <button>中文文學 板</button>
          </div>
          <div class = "postDown">
            <h1>這是什麼鬼東西？</h1>
            <StyledRPHr />
            <p class="contain">
              吧反手麼看，就很我於晚餐什麼去看，地方感覺也⋯得看會出這次才有的東不說覺得，學校量麼說下一秒生氣兒子因為這，人身之外。自己還天占卜說真，是直接什麼我觀一早，或者是以為，還有真的好後一個都想的人，需要覺得很最酒。經試試看己交流特了但是。              方便受注意了，有人好喜歡那隻一個，直人啊很多，然後上陪我的孩子時候真，以本來就麼久我沒道是不我很喜⋯就有點然他。該說是這樣，不是有中國人知道現在買一，來是⋯是的英文多了謝謝大⋯很好是入了村弟應該很說的，了嗎。
            </p>
            <p class="hastage">
              #早安 #午安 #晚安
            </p>
          </div>
          <div class = "postButton">
            <div class = "pushPost" onClick={pushPostToggle} pushPostButton={pushPostButton} isExpanded={pushPostButton} >
              <StyledPushPostIconImg icon= {faCircleUp} pushPostIcon={pushPostIcon} isExpanded={pushPostIcon} />
              <p pushPostIcon={pushPostIcon} isExpanded={pushPostIcon} >{pushPostQuantity}</p>
            </div>
            
            <div class = "message">

            </div>
            
            <div class = "collect">

            </div>
          </div>
        </StyledMPPost>
      </StyledMiddlePad>

      {/* 右邊板塊 */}
      <StyledLeftPad >
        <StyledThemeToggle lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} onClick={themeToggle} isExpanded={themeBrightness}>
          <StyledThemeToggleIcon icon={faCircleHalfStroke} isExpanded={themeBrightness} />
          <h1>{themeName}</h1>
          <div class="outer">
            <div class = "inner"></div>
          </div>
        </StyledThemeToggle>
        <StyledProfile>
          <img />
          <h1>淡淡</h1>
          <div class = "profileDown">
            <div class="profileDownButton">
              <FontAwesomeIcon class="profileIcon" icon={faPoo} />
              <p>18</p>
            </div>
            <div class="profileDownButton">
              <FontAwesomeIcon class="profileIcon" icon={faBell} />
              <p>18</p>
            </div>
          </div>
        </StyledProfile>
      </StyledLeftPad>
    </StyledWebsite>
    
  );
}

const BGcolor = '#EAEAEA';
const LightColor = '#fff';
const DarkColor = '#282828';

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${({ bgColor }) => bgColor};
  }
`;

const StyledWebsite = styled.div`
  display: flex;
  margin-top: 30px;
  justify-content: center;
  font-family: "Noto Sans TC", sans-serif;  
`

const StyledRightPad = styled.div`
  width: 300px;
  height: 100%;
  margin: 0px 15px;
  display: flex;
  flex-direction: column;
  background-color: ${({ lightColor }) => lightColor};
  border-radius: 20px;
  box-shadow: 0px 0px 5px 0px rgba(${({ darkColor }) => darkColor}, 0.6);
`

const StyledLogo = styled.img`
  width: 280px;
  height: 100px;
  object-fit: contain;
  margin: auto;
  margin-top: 10px;
`

const StyledRPHr = styled.hr`
  margin: 10px;
  color: ${({ lightColor }) => lightColor};
`

const StyledRPBigLabel = styled.div`
  display: flex;
  margin: 0px 10px 0px 10px;
  align-items: center;
  border-radius: 10px;
  background-color: ${DarkColor};
  cursor: pointer;
  transition: all 0.5s;

  &:hover{
    margin: 0px 0px 10px 0px;
    border-radius: 0px;

    h1{
      letter-spacing: 10px;
    }
  }

  h1{
    font-size: 20px;
    padding: 5px;
    letter-spacing: 5px;
    color: ${({ lightColor }) => lightColor};
    transition: all 0.5s;
    font-weight: 600;
  }

  div{
    display: flex;
    margin: 10px;
    margin-right: 5px;
    border-radius: 5px;
    justify-content: center;
    align-items: center;
    width: 25px;
    height: 25px;
    background-color: ${({ lightColor }) => lightColor};
  }
`

const StyledBigLabelButton = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  margin: 10px;
  color: ${DarkColor};
  cursor: pointer;
  transition: all 0.5s;
  transform: ${({ isExpanded }) => (isExpanded ? 'rotate(90deg)' : 'rotate(0deg)')};
`

const StyledRPSmallLabel = styled.div`
    margin: 10px;
    margin-top: 0px;
    height: ${({ isExpanded }) => (isExpanded ? 'auto' : '0px')};
    overflow: hidden;

  img{
    width: 40px;
    height: 100%;
  }

  div{
    display: flex;
  }
  
  h1{
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    letter-spacing: 5px;
    transition: all 0.5s;
    color: ${DarkColor};
    font-weight: 600;
    &:hover{
      letter-spacing: 10px;
    }
  }
`

const StyledSmallLabelIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  margin: 10px;
  color: ${({ bgColor }) => bgColor};
`

const StyledSmallLabelButton = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  margin: 10px;
  color: ${({ bgColor }) => bgColor};
`

const StyledMiddlePad = styled.div`
  width: 620px;
  margin: 0px 15px;
`

const StyledMPSearchBar = styled.div`
  display: flex;
  color: ${({ lightColor }) => lightColor};
  background-color: ${({ lightColor }) => lightColor};
  margin: 0px;
  border-radius: 10px;
  height: 50px;

  .outer{
  margin: 10px;
  margin-right: 0px;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 5px;
  width: 550px;
  display: flex;
  align-items: center;
  }

  input{
    margin-left: 10px;
    width: 530px;
    color: ${({ darkColor }) => darkColor};
    background-color: ${({ bgColor }) => bgColor};
    border: 0px;
    outline: none;
  }
`

const StyledSearchIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  margin: auto;
  color: ${DarkColor};
  transition: all 0.5s;
  cursor: pointer;
  &:hover{
    width: 25px;
    height: 25px;
  }
`

const StyledMPAds = styled.div`
  width: 620px;
  height: 349px;
  margin-top: 30px;
  border-radius: 20px;
  background-color: ${({ lightColor }) => lightColor};
  cursor: pointer;
  img{
    object-fit: contain;
  }
`

const StyledMPPost = styled.div`
  margin-top: 10px;
  width: 620px;
  background-color: ${LightColor};
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .postUp{
    display: flex;
    align-items: center;
    width: 550px;
    height: 80px;
    justify-content: space-between;
    .postUpRight{
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: ${BGcolor};
      }
      h1 {
        margin: 10px;
        font-size: 20px;
        font-weight: 600;
        color: ${DarkColor};
        letter-spacing: 5px;
      }
    }
    button {
      right: 30px;
      width: 100px;
      height: 25px;
      border-radius: 25px;
      background-color: #CC66FF;
      color: ${LightColor};
      border: 0px;
      cursor: pointer;
    }
  }
  .postDown{
    h1{
      color: ${DarkColor};
      font-size: 26px;
      font-weight: 700;
      margin: 10px 30px;
      letter-spacing: 2px;
    }
    p{
      color: ${DarkColor};
      font-size: 16px;
      margin: 0px 30px;
      font-weight: 400;
      letter-spacing: 2px;
    }
    .hastage{
      margin: 10px 30px;
      color: #919191;
      font-size: 12px;
      letter-spacing: 2px;
    }
  }
  .postButton{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 30px;
    width: 550px;
    .pushPost{
      margin: 10px 20px;
      background-color: ${({ pushPostButton }) => pushPostButton};
      display: flex;
      justify-content: flex-start;
      align-items: center;
      height: 20px;
      width: 80px;
      border-radius: 20px;
      cursor: pointer;
      p{
        margin-left: 5px;
        color: ${({ pushPostIcon }) => pushPostIcon};
      }
    }
  }
`

const StyledPushPostIconImg = styled(FontAwesomeIcon)`
  height: 15px;
  width: 15px;
  margin-left: 5px;
  color: ${({ pushPostIcon }) => pushPostIcon};
`

const StyledLeftPad = styled.div`
  width: 300px;
  margin: 0px 15px;
`

const StyledThemeToggle = styled.div`
  cursor: pointer;
  height: 50px;
  background-color: ${({ lightColor }) => lightColor};
  display:flex;
  align-items: center;
  border-radius: 10px;
  
  h1{
    font-size: 20px;
    margin-left: 10px;
    width: 180px;
  }

  .outer{
    margin: auto;
    display:flex;
    align-items: center;
    background-color: ${({ bgColor }) => bgColor};
    height: 30px;
    width: 60px;
    border-radius: 5px;
  }

  .inner{
    transition: all 0.5s;
    margin-left: ${({ isExpanded }) => (isExpanded ? '5px' : '35px')};
    background-color: ${({ darkColor }) => darkColor};
    height: 20px;
    width: 20px;
    border-radius: 5px;
  }
`

const StyledThemeToggleIcon = styled(FontAwesomeIcon) `
  width: 20px;
  height: 20px;
  margin-left: 10px;
  transition: all 0.5s;
  transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 300px;
  height: 150px;
  background-color: ${LightColor};
  margin-top: 30px;
  border-radius: 20px;
  .profileDown{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 50px;
    margin-bottom: 0px;
    background-color: ${DarkColor};
    
    .profileDownButton{
      display: flex;
      cursor: pointer;
      p{
        color: ${LightColor};
        align-items: center;
        text-align: center;
        width: 30px;
        height: auto;
        margin-left: 10px;
        background-color: red;
        border-radius: 10px;
        font-size: 12px;
      }
    }

    .profileIcon{
      width: 20px;
      height: 20px;
      color: ${LightColor};
    }
  }
`

export default App;
