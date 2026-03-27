import StudentForm from "../components/StudentForm";

function AddStudent({

  addStudent,
  showNotification

}) {

  return (

    <div>

      <h2 className="heading">

        Add Student

      </h2>

      <StudentForm

        addStudent={addStudent}

        showNotification={showNotification}

      />

    </div>

  );

}

export default AddStudent;