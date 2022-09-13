import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { StyledCommunityMain } from './Community.style';
import { Flex, Input, P } from '../../@commons';
import { CommunityContentModal } from '../CommunityContentModal/CommunityContentModal';
import { communityModalState, COMMUNITY_DUMMY, modalState } from '../../../states';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { CommunityTitleContainer } from './CommunityTitleContainer/CommunityTitleContainer';

const mainStyle = {
  flex: 2,
  border: '1px solid yellow',
  width: '100%',
  height: '80vh',
  position: 'absolute',
};

export const CommunityMain = () => {
  const [modal, setModal] = useRecoilState(modalState);
  const [communityModal, setCommunityModal] = useRecoilState(communityModalState);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <StyledCommunityMain style={{ display: 'flex', flexDirection: 'column', border: '1px solid white' }}>
      {/*  이 부분 따로 컴포넌트로 분리 CommunityHeader */}
      <CommunityTitleContainer />

      {/* 글을 쓸수 있는 부분 컴포넌트 분리*/}
      <Flex flexDirection='column' style={mainStyle}>
        {COMMUNITY_DUMMY.map((detail, i) => {
          return (
            <Flex flexDirection='row' justifyContent='space-between' key={i} style={{ width: '90%', borderBottom: '1px solid white', margin: '0 auto' }}>
              <Flex justifyContent=''>
                <input type='radio' id={detail.kakaoId} />
                <P
                  className='ellipsis'
                  content={detail.title}
                  style={{ width: '70%', marginLeft: 20, color: 'white', cursor: 'pointer' }}
                  onClick={({ target }) => {
                    setCommunityModal(!communityModal);
                    setCurrentUser((prev) => (prev = target.id));
                  }}
                  id={detail.kakaoId}
                />
              </Flex>
              <Flex alignItems='center' alignSelf='flex-end'>
                {/* 추후에 input image 클릭시에 프로필 팝업 보여지나, id 에 해당하는 프로필이 보여져야 함
                 +  본인이 클릭시에는 본인 프로필 팝업이 보여지고 다른사람이 클릭시에는 다른 팝업 ??  깃헙 링크 만 보여지게??? 
                */}
                <Input
                  type='image'
                  src={detail.profileUrl}
                  onClick={() => setModal(!modal)}
                  style={{ width: 30, height: 30, borderRadius: 50, marginRight: 10 }}
                />
                <FontAwesomeIcon icon={faMessage} style={{ color: 'white' }} />
                <span style={{ marginLeft: 5, color: 'white' }}>3</span>
              </Flex>
            </Flex>
          );
        })}
        {communityModal && <CommunityContentModal user={currentUser} />}
      </Flex>
    </StyledCommunityMain>
  );
};
