const teachers = [
  { id:1, name: 'Mr. Immanuel', cls: 'Grade 7' },
  { id:2, name: 'Mr. Leonard', cls: 'Grade 8' },
  { id:3, name: 'Mr. Frederick', cls: 'Grade 9' },
]
export default function handler(req,res){
  return res.status(200).json(teachers)
}
