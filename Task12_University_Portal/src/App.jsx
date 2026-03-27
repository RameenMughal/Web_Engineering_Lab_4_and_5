import { BrowserRouter, Routes, Route }
from "react-router-dom";

import { useState } from "react";

import seedStudents from "./data/seedStudents";

import Navigation from "./components/Navigation";

import Dashboard from "./pages/Dashboard";

import Students from "./pages/Students";

import AddStudent from "./pages/AddStudent";

import Profiles from "./pages/Profiles";

import Notification from "./components/Notification";


function App() {

  const [students, setStudents]

    = useState(seedStudents);


  const [notification, setNotification]

    = useState("");


  function addStudent(student) {

    setStudents(

      [...students, student]

    );

  }


  function deleteStudent(id) {

    setStudents(

      students.filter(

        s => s.id !== id

      )

    );

  }


  function showNotification(msg) {

    setNotification(msg);

    setTimeout(() => {

      setNotification("");

    }, 2500);

  }


  return (

    <BrowserRouter>

      <Navigation />

      <Notification

        message={notification}

      />

      <div className="p-5">

        <Routes>

          <Route

            path="/"

            element={

              <Dashboard

                students={students}

              />

            }

          />


          <Route

            path="/students"

            element={

              <Students

                students={students}

                deleteStudent={deleteStudent}

              />

            }

          />


          <Route

            path="/add"

            element={

              <AddStudent

                addStudent={addStudent}

                showNotification={showNotification}

              />

            }

          />


          <Route

            path="/profiles"

            element={

              <Profiles

                students={students}

              />

            }

          />

        </Routes>

      </div>

    </BrowserRouter>

  );

}

export default App;