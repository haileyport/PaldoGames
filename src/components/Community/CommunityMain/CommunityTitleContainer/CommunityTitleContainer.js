import Link from 'next/link';
import { Flex, P } from '../../../@commons';

export const CommunityTitleContainer = () => {
  return (
    <Flex flexDirection='row' justifyContent='space-around' style={containerStyle}>
      <Link href='#'>
        <P style={pStyle} content='예시 1'></P>
      </Link>
      <Link href='#'>
        <P style={pStyle} content='예시 2'></P>
      </Link>
    </Flex>
  );
};

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
  flex: 1,
  width: '100%',
  border: '1px solid green',
  height: '10vh',
};
