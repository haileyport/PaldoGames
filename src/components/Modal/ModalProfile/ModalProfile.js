import { Flex } from '../../@commons/Flex/Flex';
import { StyledModalProfile } from './ModalProfile.style';

export const ModalProfile = ({ DUMMY }) => {
  const sectionStyle = {
    position: 'relative',
    height: 100,
    bottom: 30,
    fontSize: 16,
    fontWeight: 500,
  };

  return (
    <div>
      <Flex flexDirection='column' alignItems='center' style={sectionStyle}>
        <StyledModalProfile type='image' src={DUMMY.profileImg} alt='profile-image' />
        {/* 프로필 눌렀을때 깃헙 프로필 페이지로 이동 ?? */}
        {/* 깃헙 로그인은 깃헙 이모티콘 / 카카오는 카카오 */}
        <section>
          <p style={{ marginBottom: -10 }}>{DUMMY.githubId}</p>
          <p>{DUMMY.greetings}</p>
        </section>
      </Flex>
    </div>
  );
};