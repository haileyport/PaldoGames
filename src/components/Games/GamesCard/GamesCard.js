import { GamesCardImgWrapper, GamesCardTitle, StyledGamesCard } from "./GamesCard.style"
import Image from 'next/image';
import Link from 'next/link'

export const GamesCard = ({imageUrl, gameTitle, linkUrl }) => {
    return (
        <Link href={linkUrl}>
            <StyledGamesCard>
            <GamesCardImgWrapper>
            <Image 
            src={imageUrl}
            width="100%"
            height="60%"
            layout="responsive"
            quality={100}
            />
            </GamesCardImgWrapper>
            <GamesCardTitle>{gameTitle}</ GamesCardTitle>
            </ StyledGamesCard>
        </Link>
        )
}