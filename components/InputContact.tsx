const InputContact = ({text,name}:{text:string,name:string}) => {
  return (
     <input type="text" required name={name} className="w-full pl-[26px] bg-transparent py-[10px] border-[0.5px] border-[#000000] placeholder:text-[#585858] outline-none " placeholder={text} />
  )
}

export default InputContact