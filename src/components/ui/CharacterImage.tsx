import { useState } from 'react';
import Image from 'next/image';

const CharacterImage = ({ character }: { character: Character }) => {
    const [imgSrc, setImgSrc] = useState(character.node?.image?.medium);

    return (
        <Image
            alt={character.node?.name?.full || ''}
            width={100}
            height={50}
            key={character.id}
            title={character.node.name.full}
            onMouseLeave={() => setImgSrc(character.node?.image?.medium)}
            onMouseOver={() => {
                if (character?.voiceActorRoles[0]) {
                    setImgSrc(character?.voiceActorRoles[0]?.voiceActor.image.medium);
                }
            }}
            src={imgSrc}
            className="rounded-full h-28 object-cover m-2"
        />
    );
};

export default CharacterImage;
