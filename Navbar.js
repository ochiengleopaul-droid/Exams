import Link from 'next/link'
export default function Navbar(){
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">GB</div>
          <div><div className="font-semibold">GOT BONDO Junior School</div><div className="text-xs text-slate-500">Exam Manager (Demo)</div></div>
        </div>
        <div className="flex items-center gap-3">
          <Link href='/'><a className="text-sm px-3 py-1">Dashboard</a></Link>
          <Link href='/exams'><a className="text-sm px-3 py-1">Exams</a></Link>
          <Link href='/learners'><a className="text-sm px-3 py-1">Learners</a></Link>
          <Link href='/teachers'><a className="text-sm px-3 py-1">Teachers</a></Link>
        </div>
      </div>
    </nav>
  )
}
