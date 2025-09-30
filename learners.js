let learners = [
  { id:1, regNo: 'GB-1001', name: 'Student 1', cls: '7A' },
  { id:2, regNo: 'GB-1002', name: 'Student 2', cls: '7A' },
]
export default function handler(req,res){
  if(req.method==='GET') return res.status(200).json(learners)
  res.status(405).end()
}
