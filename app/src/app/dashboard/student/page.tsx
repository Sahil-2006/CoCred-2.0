import { Upload, FileText, CheckCircle, Clock } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="p-8">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold mb-2">Student Dashboard</h1>
          <p className="text-gray-500">Manage your certificates and view your progress.</p>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-lg">
           <button className="px-4 py-2 bg-white shadow-sm rounded-md font-medium text-sm">Dashboard</button>
           <button className="px-4 py-2 text-gray-500 font-medium text-sm hover:text-black">Resume</button>
        </div>
      </header>

      {/* Credit Meter */}
      <div className="bg-[#FFE55B] rounded-2xl p-6 mb-8 text-black">
        <div className="flex justify-between items-end mb-4">
           <div>
             <h2 className="text-xl font-bold">Activity Credit Meter</h2>
             <p className="text-sm opacity-80">You are doing great! Keep participating.</p>
           </div>
           <div className="text-right">
             <span className="text-4xl font-bold">850</span>
             <span className="text-sm font-medium opacity-70"> / 1000 pts</span>
           </div>
        </div>
        <div className="w-full bg-black/10 rounded-full h-3">
           <div className="bg-black h-3 rounded-full" style={{ width: '85%' }}></div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Upload Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
           <div className="mb-6">
             <h3 className="text-xl font-bold mb-1">Upload Certificate</h3>
             <p className="text-gray-500 text-sm">Add your company's branding to the images. The minimum required size is 150 by 150 pixels.</p>
           </div>
           
           <div className="grid grid-cols-2 gap-4">
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-[#FFE55B] transition-colors cursor-pointer group">
                 <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#FFF8CC]">
                    <Upload size={24} className="text-gray-400 group-hover:text-black" />
                 </div>
                 <p className="font-bold text-sm mb-1">Upload Photo</p>
                 <p className="text-xs text-gray-400">Supports JPG, PNG</p>
              </div>
              
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center text-center hover:border-[#FFE55B] transition-colors cursor-pointer group">
                 <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-3 group-hover:bg-[#FFF8CC]">
                    <FileText size={24} className="text-gray-400 group-hover:text-black" />
                 </div>
                 <p className="font-bold text-sm mb-1">E-Certificate</p>
                 <p className="text-xs text-gray-400">Supports PDF</p>
              </div>
           </div>

           <div className="mt-6">
              <label className="block text-sm font-bold mb-2">Tag Event</label>
              <select className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:border-[#FFE55B]">
                 <option>Workshop</option>
                 <option>Hackathon</option>
                 <option>Sports</option>
                 <option>Internship</option>
              </select>
           </div>
           
           <button className="w-full mt-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition">
             Submit for Verification
           </button>
        </div>

        {/* Recent Certificates */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
           <h3 className="text-xl font-bold mb-6">Recent Uploads</h3>
           <div className="space-y-4">
              {[
                { title: "React Workshop", date: "Jan 12, 2026", status: "Verified", points: 50 },
                { title: "State Hackathon", date: "Jan 10, 2026", status: "Pending", points: 100 },
                { title: "NSS Camp", date: "Dec 05, 2025", status: "Rejected", points: 0 },
              ].map((cert, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-gray-50">
                   <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm">
                      <FileText size={20} />
                   </div>
                   <div className="flex-1">
                      <p className="font-bold text-sm">{cert.title}</p>
                      <p className="text-xs text-gray-500">{cert.date}</p>
                   </div>
                   <div className="text-right">
                      <div className={`text-xs font-bold px-2 py-1 rounded-full mb-1 inline-block
                        ${cert.status === 'Verified' ? 'bg-green-100 text-green-700' : 
                          cert.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' : 
                          'bg-red-100 text-red-700'}`}>
                        {cert.status}
                      </div>
                      <p className="text-xs font-bold">{cert.status === 'Rejected' ? '0' : cert.points} pts</p>
                   </div>
                </div>
              ))}
           </div>
           <button className="w-full mt-6 py-3 border-2 border-gray-100 font-bold rounded-xl hover:bg-gray-50 transition">
             View All Certificates
           </button>
        </div>
      </div>
    </div>
  );
}
