function StudentTable({

  students,
  deleteStudent

}) {

  return (

    <table className="w-full card">

      <thead className="border-b">

        <tr className="text-left">

          <th className="p-2">

            Name

          </th>

          <th>

            Department

          </th>

          <th>

            GPA

          </th>

          <th>

            Action

          </th>

        </tr>

      </thead>

      <tbody>

        {students.map(student => (

          <tr

            key={student.id}

            className="
            border-b
            hover:bg-slate-100
            dark:hover:bg-slate-800
            transition
            "

          >

            <td className="p-2">

              {student.firstName}

              {" "}

              {student.lastName}

            </td>

            <td>

              {student.department}

            </td>

            <td>

              <span

                className="
                px-2
                py-1
                rounded
                bg-primary-100
                dark:bg-primary-800
                "

              >

                {student.gpa}

              </span>

            </td>

            <td>

              <button

                className="btn-danger"

                onClick={() =>

                  deleteStudent(student.id)

                }

              >

                Delete

              </button>

            </td>

          </tr>

        ))}

      </tbody>

    </table>

  );

}

export default StudentTable;