import { useState } from "react";

function StudentTable() {
  const students = [
    {name: "Maham", subject: "Science", marks: 92 },
    {name: "Ayan", subject: "English", marks: 88 },
    {name: "Ali", subject: "Math", marks: 85 },
    {name: "John", subject: "Math", marks: 70 }
  ];

  const [subjectFilter, setSubjectFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Filter according to subject
  const filteredStudents = students.filter(
    (s) => subjectFilter === "" || s.subject === subjectFilter
  );

  //Sort according to marks
  const sortedStudents = [...filteredStudents].sort((a, b) => {
    if (sortOrder === "asc") return a.marks - b.marks;
    if (sortOrder === "desc") return b.marks - a.marks;
    return 0;
  });

  return (
    <div className="max-w-xl mx-auto mt-10 p-5 bg-white shadow-lg rounded-lg">

      <h2 className="text-2xl font-bold mb-4 text-center">
        Student Marks Table
      </h2>

      {/* Controls */}
      <div className="flex gap-3 mb-4">

        {/* Filter */}
        <select
          className="border p-2 rounded w-1/2"
          onChange={(e) => setSubjectFilter(e.target.value)}
        >
          <option value="">All Subjects</option>
          <option value="Math">Math</option>
          <option value="Science">Science</option>
          <option value="English">English</option>
        </select>

        {/* Sort Buttons */}
        <button
          onClick={() => setSortOrder("asc")}
          className="bg-blue-500 text-white px-3 py-2 rounded"
        >
          Sort Asc
        </button>

        <button
          onClick={() => setSortOrder("desc")}
          className="bg-green-500 text-white px-3 py-2 rounded"
        >
          Sort Desc
        </button>

      </div>

      {/* Table */}
      <table className="w-full border border-gray-300 text-center">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Subject</th>
            <th className="p-2 border">Marks</th>
          </tr>
        </thead>

        <tbody>
          {sortedStudents.map((s, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="p-2 border">{s.name}</td>
              <td className="p-2 border">{s.subject}</td>
              <td className="p-2 border">{s.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default StudentTable;