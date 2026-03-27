import { useState } from "react";

function StudentForm({

  addStudent,
  showNotification

}) {

  const [form, setForm] = useState({

    firstName: "",
    lastName: "",
    department: "",
    gpa: ""

  });

  function handleSubmit(e) {

    e.preventDefault();

    addStudent({

      id: Date.now(),

      ...form

    });

    showNotification(

      "Student added successfully"

    );

    setForm({

      firstName: "",
      lastName: "",
      department: "",
      gpa: ""

    });

  }

  return (

    <form
      onSubmit={handleSubmit}
      className="card space-y-3"
    >

      <input

        className="input"

        placeholder="First Name"

        value={form.firstName}

        onChange={(e) =>
          setForm({
            ...form,
            firstName: e.target.value
          })
        }

      />

      <input

        className="input"

        placeholder="Last Name"

        value={form.lastName}

        onChange={(e) =>
          setForm({
            ...form,
            lastName: e.target.value
          })
        }

      />

      <input

        className="input"

        placeholder="Department"

        value={form.department}

        onChange={(e) =>
          setForm({
            ...form,
            department: e.target.value
          })
        }

      />

      <input

        className="input"

        placeholder="GPA"

        value={form.gpa}

        onChange={(e) =>
          setForm({
            ...form,
            gpa: e.target.value
          })
        }

      />

      <button className="btn">

        Add Student

      </button>

    </form>

  );

}

export default StudentForm;