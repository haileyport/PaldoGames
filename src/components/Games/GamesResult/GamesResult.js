import * as R from "./GamesResult.style";
import { useRouter } from "next/router";

export const GamesResult = ({ game, point }) => {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <R.StyledGamesResult>
      <R.Alert>
        {point > 0 ? (
          <div>
            🕹️{game.name} 게임 결과 {point} 포인트를 획득하셨습니다!🎉
          </div>
        ) : game.name === "baseball" ? (
          <div>
            <div>🕹️{game.name} 결과 포인트를 획득하지 못했습니다😭</div>
            <div> 정답은 {game.answer}였습니다.</div>
          </div>
        ) : (
          <div>🕹️{game.name} 결과 포인트를 획득하지 못했습니다😭</div>
        )}
        <R.Button onClick={handleClick}>돌아가기</R.Button>
      </R.Alert>
    </R.StyledGamesResult>
  );
};
