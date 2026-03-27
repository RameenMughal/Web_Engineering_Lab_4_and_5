import StudentTable from "../components/StudentTable";

function Students({

  students,
  deleteStudent

}) {

  return (

    <div>

      <h2 className="text-2xl mb-5">

        Students List

      </h2>

      <StudentTable

        students={students}
        deleteStudent={deleteStudent}

      />

    </div>

  );

}

export default Students;