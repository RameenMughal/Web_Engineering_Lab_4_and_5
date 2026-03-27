function Dashboard({ students }) {

  const avgGpa =

    students.reduce(

      (sum, s) => sum + Number(s.gpa), 0

    ) / students.length;

  return (

    <div>

      <h2 className="text-2xl font-bold mb-5">

        Dashboard

      </h2>

      <div className="grid grid-cols-2 gap-5">

        <div className="card">

          <h3>Total Students</h3>

          <p className="text-3xl">

            {students.length}

          </p>

        </div>

        <div className="card">

          <h3>Average GPA</h3>

          <p className="text-3xl">

            {avgGpa.toFixed(2)}

          </p>

        </div>

      </div>

    </div>

  );

}

export default Dashboard;