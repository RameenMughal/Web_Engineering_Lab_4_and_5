import ProfileCard from "../components/ProfileCard";

function Profiles({ students }) {

  return (

    <div>

      <h2 className="text-2xl mb-5">

        Student Profiles

      </h2>

      <div className="grid grid-cols-3 gap-5">

        {students.map(student => (

          <ProfileCard

            key={student.id}

            student={student}

          />

        ))}

      </div>

    </div>

  );

}

export default Profiles;