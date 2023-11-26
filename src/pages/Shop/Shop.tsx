import avatarPng from '@/assets/images/anime.png';
import animeJpg from '@/assets/images/girl.jpg';
import IconSvg from '@/assets/images/cloud.svg';

export default function Shop() {
    return (
        <div>
            <h1>Shop</h1>
            <img width="100px" src={avatarPng} />
            <img width="100px" src={animeJpg} />
            <IconSvg style={{ color: 'blue' }} width="100px" height="100px" fill="red" />
        </div>
    );
}
