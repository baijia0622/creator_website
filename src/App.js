import './App.css';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus, faQuoteLeft, faMagnifyingGlass, faCircleHalfStroke, faCircleUp, faPoo, faBell, faBookmark, faMessage } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [listOpen, setListOpen] = useState(false);
  const [themeBrightness, setThemeBrightness] = useState(false);
  const [lightColor, setLightColor] = useState('#fff');
  const [secondLightColor, setSecondLightColor] = useState('#fff');
  const [darkColor, setDarkColor] = useState('#282828');
  const [bgColor, setBgColor] = useState('#EAEAEA');
  const [wordColor, setWordColor] = useState('#282828');
  const [themeName, setThemeName] = useState('Light');
  // const [searchText, setSearchText] = useState('Indesign教學, 瘦身水煮餐...等');

  const listToggle = () => { setListOpen(!listOpen); }
  
  const themeToggle = () => { 
    setThemeBrightness(!themeBrightness);
    setLightColor(lightColor === '#fff' ? '#707070' : '#fff');
    setDarkColor(darkColor === '#282828' ? '#4a4a4a' : '#282828');
    setBgColor(bgColor === '#EAEAEA' ? '#1f1f1f' : '#EAEAEA');
    setWordColor(wordColor === '#282828' ? '#e0e0e0' : '#282828');
    setSecondLightColor(secondLightColor === '#fff' ? '#e0e0e0' : '#fff')
    setThemeName(themeName === 'Light' ? 'Dark' : 'Light');
  }
  
  // 貼文按讚按紐控制
  const [pushPostIcon, setPushPostIcon] = useState('#fcb61c');
  const [pushPostButton, setPushPostButton] = useState('#EAEAEA');
  const [pushPostQuantity, setPushPostQuantity] = useState(0);

  const pushPostToggle = () => {
    setPushPostButton(pushPostButton === '#EAEAEA' ? '#fcb61c' : '#EAEAEA');
    console.log('pushPostButton' + pushPostButton);

    setPushPostIcon(pushPostIcon === '#fcb61c' ? '#EAEAEA' : '#fcb61c' );
    console.log('pushPostIcon' + pushPostIcon);

    setPushPostQuantity(prevQuantity => {
      if (pushPostButton === '#EAEAEA') {
        return prevQuantity + 1;
      } else {
        return prevQuantity - 1;
      }
    });
  }

  // 貼文留言按鈕控制
  const [postMessageQuantity, setPostMessageQuantity] = useState(0);
  const [postMessageIcon, setPostMessageIcon] = useState('#35d44a');
  const [postMessageButton, setPostMessageButton] = useState('#EAEAEA');

  const postMessageToggle = () => {
    setPostMessageButton(postMessageButton === '#EAEAEA' ? '#35d44a' : '#EAEAEA');
    console.log('postMessageButton' + postMessageButton);

    setPostMessageIcon(postMessageIcon === '#35d44a' ? '#EAEAEA' : '#35d44a' );
    console.log('postMessageIcon' + postMessageIcon);

    setPostMessageQuantity(prevQuantity => {
      if (postMessageButton === '#EAEAEA') {
        return prevQuantity + 1;
      } else {
        return prevQuantity - 1;
      }
    });
  }

  // 貼文收藏按鈕控制
  const [postCollectQuantity, setPostCollectQuantity] = useState(0);
  const [postCollectIcon, setPostCollectIcon] = useState('#357ad4');
  const [postCollectButton, setPostCollectButton] = useState('#EAEAEA');

  const postCollectToggle = () => {
    setPostCollectButton(postCollectButton === '#EAEAEA' ? '#357ad4' : '#EAEAEA');
    console.log('postCollectButton' + postCollectButton);

    setPostCollectIcon(postCollectIcon === '#357ad4' ? '#EAEAEA' : '#357ad4' );
    console.log('postCollectIcon' + postCollectIcon);

    setPostCollectQuantity(prevQuantity => {
      if (postCollectButton === '#EAEAEA') {
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
      <StyledRightPad lightColor={lightColor} >
        <StyledLogo/>
        <StyledRPHr />
        <StyledRPBigLabel lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} wordColor={wordColor} secondLightColor={secondLightColor} onClick={listToggle}>
         <div><StyledBigLabelButton icon={faPlay} wordColor={wordColor} isExpanded={listOpen} /></div>
          <h1>設計師</h1>
        </StyledRPBigLabel>
        <StyledRPSmallLabel lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} wordColor={wordColor} isExpanded={listOpen} >
          <div>
            <StyledSmallLabelIcon bgColor={bgColor} wordColor={wordColor} icon={faQuoteLeft} />
            <h1>服裝設計</h1>
          </div>
          <div>
            <StyledSmallLabelIcon bgColor={bgColor} wordColor={wordColor} icon={faQuoteLeft} />
            <h1>產品設計</h1>
          </div>
          <div>
            <StyledSmallLabelIcon bgColor={bgColor} wordColor={wordColor} icon={faQuoteLeft} />
            <h1>平面設計</h1>
          </div>
          <div>
            <StyledSmallLabelIcon bgColor={bgColor} wordColor={wordColor} icon={faQuoteLeft} />
            <h1>室內設計</h1>
          </div>
          <div>
            <StyledSmallLabelButton bgColor={bgColor} wordColor={wordColor} icon={faPlus} />
            <h1>新版申請</h1>
          </div>
        </StyledRPSmallLabel>

        <StyledRPBigLabel lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} wordColor={wordColor} secondLightColor={secondLightColor} onClick={listToggle}>
         <div><StyledBigLabelButton bgColor={bgColor} wordColor={wordColor} icon={faPlay} isExpanded={listOpen} /></div>
          <h1>技研家</h1>
        </StyledRPBigLabel>
        <StyledRPSmallLabel lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} wordColor={wordColor} isExpanded={listOpen} >
          <div>
            <StyledSmallLabelIcon bgColor={bgColor} wordColor={wordColor} icon={faQuoteLeft} />
            <h1>摩托動力</h1>
          </div>
          <div>
            <StyledSmallLabelIcon bgColor={bgColor} wordColor={wordColor} icon={faQuoteLeft} />
            <h1>汽車動力</h1>
          </div>
          <div>
            <StyledSmallLabelButton bgColor={bgColor} wordColor={wordColor} icon={faPlus} />
            <h1>新版申請</h1>
          </div>
        </StyledRPSmallLabel>
      </StyledRightPad>

      {/* 中間板塊 */}
      <StyledMiddlePad>
        <StyledMPSearchBar lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} wordColor={wordColor} >
          <div class = "outer"><input type="text" /></div>
          <StyledSearchIcon icon={faMagnifyingGlass} wordColor={wordColor} />
        </StyledMPSearchBar>
        <StyledMPAds lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} wordColor={wordColor} ><img /></StyledMPAds>
        <StyledMPPost lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} wordColor={wordColor} >
          <div class = "postUp">
            <div class = "postUpRight">
              <img src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
            <StyledPostPush onClick={pushPostToggle} pushPostButton={pushPostButton} isExpanded={pushPostButton} >
              <StyledPushPostIconImg icon= {faCircleUp} pushPostIcon={pushPostIcon} isExpanded={pushPostIcon} />
              <StyledPushPostP pushPostIcon={pushPostIcon} isExpanded={pushPostIcon} >{pushPostQuantity}</StyledPushPostP>
            </StyledPostPush>
            
            <StyledPostMessage onClick={postMessageToggle} postMessageButton={postMessageButton} isExpanded={postMessageButton} >
              <StyledPostMessageIconImg icon= {faMessage} postMessageIcon={postMessageIcon} isExpanded={postMessageIcon} />
              <StyledPostMessageP postMessageIcon={postMessageIcon} isExpanded={postMessageIcon} >{postMessageQuantity}</StyledPostMessageP>
            </StyledPostMessage>
            
            <StyledPostCollect onClick={postCollectToggle} postCollectButton={postCollectButton} isExpanded={postCollectButton} >
              <StyledPostCollectIconImg icon= {faBookmark} postCollectIcon={postCollectIcon} isExpanded={postCollectIcon} />
              <StyledPostCollectP postCollectIcon={postCollectIcon} isExpanded={postCollectIcon} >{postCollectQuantity}</StyledPostCollectP>
            </StyledPostCollect>
          </div>
        </StyledMPPost>
      </StyledMiddlePad>

      {/* 右邊板塊 */}
      <StyledLeftPad >
        <StyledThemeToggle lightColor={lightColor} darkColor={darkColor} bgColor={bgColor} wordColor={wordColor} onClick={themeToggle} isExpanded={themeBrightness}>
          <StyledThemeToggleIcon icon={faCircleHalfStroke} wordColor={wordColor} isExpanded={themeBrightness} />
          <h1>{themeName}</h1>
          <div class="outer">
            <div class = "inner"></div>
          </div>
        </StyledThemeToggle>
        <StyledProfile lightColor={lightColor} darkColor={darkColor} wordColor={wordColor} bgColor={bgColor} >
          <div class="profileUp">
            <img src="https://images.pexels.com/photos/1722198/pexels-photo-1722198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
            <h1>淡Dan</h1>
          </div>
          <div class = "profileDown" >
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
        <StyledFriends lightColor={lightColor} darkColor={darkColor} wordColor={wordColor} secondLightColor={secondLightColor} bgColor={bgColor}>
          <div class="padName"><h1>好友列表</h1></div>

          <div class="friendInfo">
            <div class="friendInfoRight">
              <img class="friendAvatar" src="https://images.pexels.com/photos/3786525/pexels-photo-3786525.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <h1>西瓜汁</h1>
            </div>
            <div class="connectionStatus">
              <h1>Online</h1>
            </div>
          </div>

          <div class="friendInfo">
            <div class="friendInfoRight">
              <img class="friendAvatar" src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <h1>香菜牛奶</h1>
            </div>
            <div class="connectionStatus">
              <h1>Online</h1>
            </div>
          </div>

          <div class="friendInfo">
            <div class="friendInfoRight">
              <img class="friendAvatar" src="https://images.pexels.com/photos/1288171/pexels-photo-1288171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
              <h1>平行線不會香蕉</h1>
            </div>
            <div class="connectionStatus">
              <h1>Online</h1>
            </div>
          </div>
        </StyledFriends>
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

// 左側版面
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

// 左側 > logo
const StyledLogo = styled.img`
  width: 280px;
  height: 100px;
  object-fit: contain;
  margin: auto;
  margin-top: 10px;
`

const StyledRPHr = styled.hr`
  margin: 10px 30px;
  color: ${({ lightColor }) => lightColor};
`

// 左側 > 標籤列
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
    color: ${({secondLightColor}) => secondLightColor};
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
  color: ${({ wordColor }) => wordColor};
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
    color: ${({ wordColor }) => wordColor};
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
  color: ${({ wordColor }) => wordColor};
`

const StyledSmallLabelButton = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  margin: 10px;
  color: ${({ wordColor }) => wordColor};
`

// 中間版面
const StyledMiddlePad = styled.div`
  width: 620px;
  margin: 0px 15px;
`

// 中間 > 搜尋欄
const StyledMPSearchBar = styled.div`
  display: flex;
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
    color: ${({ wordColor }) => wordColor};
    background-color: ${({ bgColor }) => bgColor};
    border: 0px;
    outline: none;
  }
`

const StyledSearchIcon = styled(FontAwesomeIcon)`
  width: 20px;
  height: 20px;
  margin: auto;
  color: ${({ wordColor }) => wordColor};
  transition: all 0.5s;
  cursor: pointer;
  &:hover{
    width: 25px;
    height: 25px;
  }
`

// 中間 > 廣告看板
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

// 中間 > 文章
const StyledMPPost = styled.div`
  margin-top: 10px;
  width: 620px;
  background-color: ${({ lightColor }) => lightColor};
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  .postUp{
    display: flex;
    align-items: center;
    width: 560px;
    height: 100px;
    justify-content: space-between;
    .postUpRight{
      display: flex;
      align-items: center;
      img {
        width: 50px;
        height: 50px;
        border-radius: 100%;
        background-color: ${BGcolor};
        object-fit: cover;
      }
      h1 {
        margin: 10px;
        font-size: 20px;
        font-weight: 600;
        color: ${({ wordColor }) => wordColor};
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
      color: ${({ wordColor }) => wordColor};
      font-size: 26px;
      font-weight: 700;
      margin: 0px 30px;
      letter-spacing: 2px;
    }
    p{
      color: ${({ wordColor }) => wordColor};
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
    height: 50px;
    width: 560px;
  }
`

// 中間 > 文章 > 點讚按鈕
const StyledPostPush = styled.div`
  margin: 10px;
  margin-right: 0px;
  padding: 3px;
  background-color: ${({ pushPostButton }) => pushPostButton};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  width: 80px;
  border-radius: 20px;
  cursor: pointer;
`

const StyledPushPostIconImg = styled(FontAwesomeIcon)`
  height: 15px;
  width: 15px;
  margin-left: 5px;
  color: ${({ pushPostIcon }) => pushPostIcon};
`

const StyledPushPostP = styled.p`
  margin-left: 5px;
  color: ${({ pushPostIcon }) => pushPostIcon};
`

// 中間 > 文章 > 留言按鈕

const StyledPostMessage = styled.div`
  margin: 10px;
  margin-right: 0px;
  padding: 3px;
  background-color: ${({ postMessageButton }) => postMessageButton};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  width: 80px;
  border-radius: 20px;
  cursor: pointer;
`

const StyledPostMessageIconImg = styled(FontAwesomeIcon)`
  height: 15px;
  width: 15px;
  margin-left: 5px;
  color: ${({ postMessageIcon }) => postMessageIcon};
`

const StyledPostMessageP = styled.p`
  margin-left: 5px;
  color: ${({ postMessageIcon }) => postMessageIcon};
`

// 中間 > 文章 > 收藏按鈕
const StyledPostCollect = styled.div`
  margin: 10px;
  margin-right: 0px;
  padding: 3px;
  background-color: ${({ postCollectButton }) => postCollectButton};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 20px;
  width: 80px;
  border-radius: 20px;
  cursor: pointer;
`

const StyledPostCollectIconImg = styled(FontAwesomeIcon)`
  height: 15px;
  width: 15px;
  margin-left: 5px;
  color: ${({ postCollectIcon }) => postCollectIcon};
`

const StyledPostCollectP = styled.p`
  margin-left: 5px;
  color: ${({ postCollectIcon }) => postCollectIcon};
`

// 右側版面
const StyledLeftPad = styled.div`
  width: 300px;
  margin: 0px 15px;
`

// 右側 > 明暗度調節器
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
    color: ${({ wordColor }) => wordColor};
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
    background-color: ${({ wordColor }) => wordColor};
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
  color: ${({ wordColor }) => wordColor};
  transform: ${({ isExpanded }) => (isExpanded ? 'rotate(180deg)' : 'rotate(0deg)')};
`

// 右側 > 個人檔案
const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  width: 300px;
  height: 150px;
  background-color: ${({ lightColor }) => lightColor};
  margin-top: 30px;
  border-radius: 20px;

  .profileUp{
    display: flex;
    margin: 0px auto;
    align-items: center;
    height: 100px;
    width: 230px;

    img{
      height: 50px;
      width: 50px;
      border-radius: 100%;
      object-fit: cover;
    }

    h1{
      font-size: 24px;
      margin: 0px 20px;
      color: ${({ wordColor }) => wordColor};
    }
  }

  .profileDown{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 300px;
    height: 50px;
    margin-bottom: 0px;
    background-color: ${({ darkColor }) => darkColor};
    
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
        background-color: #e65555;
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

// 右側 > 好友列表
const StyledFriends = styled.div`
  width: 300px;
  background-color: ${({ lightColor }) => lightColor};
  margin-top: 10px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  .padName{
    height: 40px;
    width: 300px;
    display: flex;
    align-items: center;
    background-color: ${({ darkColor }) => darkColor};
    h1{
      font-size: 14px;
      margin-left: 20px;
      color: ${({secondLightColor}) => secondLightColor};
    }
  }

  .friendInfo{
    width: 260px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-items: center;
    margin: 10px 0px;
    justify-content: space-between;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.5s;
    padding: 0px 10px;

    &:hover{
      margin: 15px 0px;
      border: solid 1px ${DarkColor};
    }

    .friendInfoRight{
      display: flex;
      align-items: center;

      .friendAvatar{
        width: 35px;
        height: 35px;
        border-radius: 100%;
        object-fit: cover;
      }
      h1{
        font-size: 18px;
        margin-left: 10px;
        color: ${({ wordColor }) => wordColor};
      }
    }
    .connectionStatus{
      display: flex;
      height: 20px;
      border-radius: 20px; 
      padding: 0px 10px;
      align-items: center;
      background-color: #6cbd8b;
      h1{
        color: ${LightColor};
        font-size: 14px;
      }
    }
  }
`

export default App;
