import { useState } from 'react'
export default function ExamForm({onCreate}){
  const [title,setTitle]=useState(''); const [date,setDate]=useState(''); const [subjects,setSubjects]=useState('Math,English')
  async function submit(e){ e.preventDefault(); const payload={title,date, subjects: subjects.split(',').map(s=>s.trim())}; 
    const res = await fetch('/api/exams',{method:'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(payload)})
    const data = await res.json(); onCreate && onCreate(data)
    setTitle(''); setDate(''); setSubjects('')
  }
  return (<form onSubmit={submit} className="p-3 border rounded bg-white"><input required value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full border px-2 py-1 mb-2" /><input required value={date} onChange={e=>setDate(e.target.value)} type="date" className="w-full border px-2 py-1 mb-2" /><input value={subjects} onChange={e=>setSubjects(e.target.value)} placeholder="Subjects (comma separated)" className="w-full border px-2 py-1 mb-2" /><button className="px-3 py-1 bg-indigo-600 text-white rounded">Create Exam</button></form>)
}
