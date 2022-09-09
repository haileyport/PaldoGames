import axios from 'axios';

export const fetch우리말api = async (word) => {
  // 추후 리팩터링 예정
  // Chrome allow cors extension 사용 필요
  const API_KEY = 'F34A53B349081AE8ECC0FF288D65F014';

  const URL = `https://opendict.korean.go.kr/api/search?key=${API_KEY}&q=${word}&advanced=y&method=exact`;

  try {
    const response = await axios.get(URL);

    const data = response.data;
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');
    const definition = xmlDoc.getElementsByTagName('definition')[0].textContent;

    return definition;
  } catch (err) {
    const errorMessage = '사전에 정의되지 않는 단어입니다.';

    console.error(errorMessage);
  }
};
