import Image from "next/image"

const TeamMember = ({name,role,img}: {name:string,role:string,img:string}) => {
  return (
    <div className="flex items-center justify-center text-center flex-col">
        <div className="w-[266px] h-[266px] rounded-full p-[17px] border-[1px] border-black flex items-center justify-center">
        <Image src={img} alt={name} width={233} height={233} className="rounded-full"/>
    </div>
    <h3 className="mt-[24px] leading-[150%] text-[#000000]">{name}</h3>
    <span className="leading-[150%] text-[20px] text-[#464646]">{role}</span>
    </div>
  )
}

export default TeamMember