import Image from 'next/image';
import React from 'react'

type Props = {
    caracterImage:string;
    actorImage:string;
    caracterName:string;
    actorName:string;
}
export default function CaracterAndVoiceActorCard({caracterImage,caracterName,actorImage,actorName}:Props) {
  return (
       <div className='group'>


<Image title={caracterName} className='rounded-full object group-hover:hidden block  m-2 object-cover' alt={caracterName} src={caracterImage} width={100} height={100} />
<Image title={actorName} className='rounded-full hidden group-hover:block m-2 object-cover' alt={actorName} src={actorImage} width={100} height={100} />
       </div>
        

  )
}
