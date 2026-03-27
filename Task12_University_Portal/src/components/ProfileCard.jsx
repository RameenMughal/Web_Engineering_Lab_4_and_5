function ProfileCard({ student }) {

  return (

    <div className="card hover:scale-105 transition">

      <div

        className="
        w-12
        h-12
        bg-primary-600
        text-white
        flex
        items-center
        justify-center
        rounded-full
        mb-3
        "

      >

        {student.firstName[0]}

      </div>

      <h3 className="font-semibold">

        {student.firstName}

        {" "}

        {student.lastName}

      </h3>

      <p className="text-sm opacity-70">

        {student.department}

      </p>

      <span

        className="
        inline-block
        mt-2
        px-2
        py-1
        text-sm
        bg-secondary-500
        text-white
        rounded
        "

      >

        GPA {student.gpa}

      </span>

    </div>

  );

}

export default ProfileCard;