import { Flex } from '../../@commons/Flex/Flex';

import { COMMUNITY_DUMMY } from '../../../states';
import { StyledInnerModalMain } from './ModalMain.style';
import { P } from '../../@commons';

export const CommunityModalMain = ({ user }) => {
  // 커뮤니티 에서 쓴 글을 볼 수 있는 모달 팝업
  // 커뮤니티 모달을 따로 상태로 가져가야함

  return (
    <StyledInnerModalMain>
      {/* 반응형 적용 필요 */}
      <Flex justifyContent='space-between' style={{ margin: 40, marginTop: 20 }}>
        {COMMUNITY_DUMMY.map((detail, i) => {
          if (detail.kakaoId === user) {
            return (
              <Flex flexDirection='column' key={i} style={{ width: '100%', textAlign: 'center' }}>
                <Flex flexDirection='column' style={{ borderBottom: '1px solid lightGray' }}>
                  <span style={{ letterSpacing: 5 }}>제목</span>
                  <P content={detail.title} />
                </Flex>
                <Flex>
                  <P content={detail.content} style={{ textAlign: 'left', lineHeight: 2, letterSpacing: 2 }} />
                </Flex>
              </Flex>
            );
          }
        })}
      </Flex>
    </StyledInnerModalMain>
  );
};
