import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Assessment = () => {
    const dailyData = [
    { date: "Sep 14", PHQ9: 8, GAD7: 6, PSS10: 12 },
    { date: "Sep 15", PHQ9: 10, GAD7: 7, PSS10: 14 },
    { date: "Sep 16", PHQ9: 12, GAD7: 8, PSS10: 15 },
    { date: "Sep 17", PHQ9: 11, GAD7: 8, PSS10: 13 },
    { date: "Sep 18", PHQ9: 9, GAD7: 5, PSS10: 12 },
    { date: "Sep 19", PHQ9: 13, GAD7: 9, PSS10: 16 },
    { date: "Sep 20", PHQ9: 12, GAD7: 7, PSS10: 14 },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-8">মানসিক স্বাস্থ্য পরীক্ষা</h2>

      {/* Test Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">
        <div className="card bg-white shadow-lg p-6 text-center">
          <div className="text-5xl mb-4">🧠</div>
          <h3 className="font-bold text-lg">PHQ-9 পরীক্ষা</h3>
          <p className="text-sm text-gray-500">বিষণ্ণতার মাত্রা নির্ধারণ</p>
          <button className="btn btn-primary mt-4 bg-[#A159AD]">পরীক্ষা শুরু করুন</button>
        </div>

        <div className="card bg-white shadow-lg p-6 text-center">
          <div className="text-5xl mb-4">💚</div>
          <h3 className="font-bold text-lg">GAD-7 পরীক্ষা</h3>
          <p className="text-sm text-gray-500">উদ্বেগের মাত্রা নির্ধারণ</p>
          <button className="btn btn-primary mt-4 bg-[#A159AD]">পরীক্ষা শুরু করুন</button>
        </div>

        <div className="card bg-white shadow-lg p-6 text-center">
          <div className="text-5xl mb-4">📄</div>
          <h3 className="font-bold text-lg">PSS-10 পরীক্ষা</h3>
          <p className="text-sm text-gray-500">মানসিক চাপের মাত্রা</p>
          <button className="btn btn-primary mt-4 bg-[#A159AD]">পরীক্ষা শুরু করুন</button>
        </div>
      </div>

      {/* Line Chart - Always Visible */}
      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-bold mb-4 text-center">
          দৈনিক পরীক্ষার ফলাফলের গ্রাফ
        </h2>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={dailyData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="PHQ9" stroke="#3b82f6" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="GAD7" stroke="#10b981" strokeWidth={2} dot={{ r: 4 }} />
            <Line type="monotone" dataKey="PSS10" stroke="#8b5cf6" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Assessment;