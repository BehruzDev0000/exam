const BASEURI:string='http://localhost:4000'
const getAll = async(URI:string) => {
  const res=await fetch(`${BASEURI}${URI}`)
  const data=res.json()
  return data
}

export default getAll