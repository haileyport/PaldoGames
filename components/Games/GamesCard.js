import { GamesCardImg, GamesCardTitle, StyledGamesCard } from "./GamesCard.style"
import Image from 'next/image';
import baseball from '../../public/baseball.png';
import Link from 'next/link'

export const GamesCard = ({imageUrl, gameTitle, linkUrl }) => {
    return (
        <Link href={linkUrl}>
            <StyledGamesCard>
            <GamesCardImg>
            <Image 
            src={imageUrl}
            width="100%"
            height="60%"
            layout="responsive"
            quality={100}
            />
            </GamesCardImg>
            <GamesCardTitle>{gameTitle}</ GamesCardTitle>
            </ StyledGamesCard>
        </Link>
        )
}
