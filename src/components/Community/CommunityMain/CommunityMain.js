import Link from 'next/link';

import { StyledCommunityMain } from './Community.style';
import { Flex, Input, P } from '../../@commons';
import { COMMUNITY_DUMMY } from '../../../states';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage } from '@fortawesome/free-solid-svg-icons';

const pStyle = {
  marginTop: 25,
  cursor: 'pointer',
  color: 'black',
  border: '1px solid white',
  width: '40%',
  height: '5%',
  borderRadius: 10,
  textAlign: 'center',
  paddingTop: 5,
  backgroundColor: 'white',

  height: 30,
};

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '10vh',

  bottom: '425px',
};

const mainStyle = {
  border: '1px solid yellow',
  width: '100%',
  height: '80vh',
  position: 'absolute',
};

export const CommunityMain = () => {
  return (
    <StyledCommunityMain style={{ border: '1px solid white' }}>
      {/*  이 부분 따로 컴포넌트로 분리 CommunityHeader */}
      <Flex flexDirection='row' justifyContent='space-around' style={containerStyle}>
        <Link href='#'>
          <P style={pStyle} content='예시 1'></P>
        </Link>
        <Link href='#'>
          <P style={pStyle} content='예시 2'></P>
        </Link>
      </Flex>
      {/* 글을 쓸수 있는 부분 컴포넌트 분리*/}
      <Flex flexDirection='column' style={mainStyle}>
        {COMMUNITY_DUMMY.map((detail, i) => {
          return (
            <Flex flexDirection='row' justifyContent='space-between' key={i} style={{ width: '90%', borderBottom: '1px solid white', margin: '0 auto' }}>
              <Flex justifyContent=''>
                <input type='radio' id={detail.kakaoId} />
                <P className='ellipsis' content={detail.title} style={{ width: '70%', marginLeft: 20, color: 'white' }} />
              </Flex>

              <Flex alignItems='center' alignSelf='flex-end'>
                <Input type='image' src={detail.profileUrl} style={{ width: 30, height: 30, borderRadius: 50, marginRight: 10 }} />
                <FontAwesomeIcon icon={faMessage} size='1x' style={{ color: 'white' }} />
                <span style={{ marginLeft: 5, color: 'white' }}>3</span>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </StyledCommunityMain>
  );
};
