import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

function CreateForm({ showForm, setShowForm, setData, updateUser }) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updateUser,
  });

  // handleSubmit
  const handleFormSubmit = (data) => {
    setData((prev) => [...prev, { id: nanoid(), createAt: Date.now(), ...data }]);
    console.log(data); 
    reset();
    setShowForm(false);
  };

  if (!showForm) return null; // make createform hidden

  return (
    <div>
      {/* <Navbar /> */}

      <div>
        <section
          id="post"
          className="m-auto w-full max-w-2xl mt-8 md:mt-12 px-4 md:px-0 pb-12"
        >
          {/* Heading */}
          <div className="flex flex-col items-center text-center">
            <h1 className="mb-2 text-2xl md:text-4xl text-(--secondary-color) font-medium">
              NEW POST
            </h1>

            <p className="text-[#a8a8a8] text-sm md:text-base">
              Draft your thoughts for the editorial feeds. Your story begins
              with a single words
            </p>
          </div>

          {/* Form container */}
          <div className="bg-(--screenBg-color) shadow-lg px-4 md:px-10 py-[3px] mt-6 rounded-xl">
            {/* form spacing stays same */}
            <form
              className="my-8 space-y-5"
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              {/* Name */}
              <div>
                <label className="text-sm font-medium text-[#3D4C61]">
                  Name
                </label>
                <input
                  {...register("name", { required: "Enter your name." })}
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none 
              focus:border-[#E8EAED] focus:ring-2 focus:ring-[#6200EE]
              transition-all duration-300 bg-[#F8FAFC]"
                />
                {errors.name && (
                  <span className="block pl-2 pt-1  text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </div>
              {/* Role */}
              <div>
                <label className="text-sm font-medium text-[#3D4C61]">
                  Role
                </label>
                <input
                  {...register("role", { required: "Enter your role!" })}
                  type="text"
                  placeholder="Editor"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none 
              focus:border-[#E8EAED] focus:ring-2 focus:ring-[#6200EE]
              transition-all duration-300 bg-[#F8FAFC]"
                />
                {errors.role && (
                  <span className="block pl-2 pt-1  text-red-500">
                    {errors.role.message}
                  </span>
                )}
              </div>
              {/* Profile Image */}{" "}
              <div>
                <label className="text-sm font-medium text-[#3D4C61]">
                  Profile Image
                </label>
                <input
                  {...register("image", { required: "Paste the URL here!" })}
                  type="text"
                  placeholder="Paste The URL"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none 
              focus:border-[#E8EAED] focus:ring-2 focus:ring-[#6200EE]
              transition-all duration-300 bg-[#F8FAFC]"
                />
                {errors.image && (
                  <span className="block pl-2 pt-1  text-red-500">
                    {errors.image.message}
                  </span>
                )}
              </div>
              {/* Title */}
              <div>
                <label className="text-sm font-medium text-[#3D4C61]">
                  Title
                </label>
                <input
                  {...register("title", { required: "Write the Title!" })}
                  type="text"
                  placeholder="Title"
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg outline-none 
              focus:border-[#E8EAED] focus:ring-2 focus:ring-[#6200EE]
              transition-all duration-300 bg-[#F8FAFC]"
                />
                {errors.title && (
                  <span className="block pl-2 pt-1  text-red-500">
                    {errors.title.message}
                  </span>
                )}
              </div>
              {/* Description */}
              <div className="w-full">
                <label className="text-sm font-medium text-[#3D4C61]">
                  Description
                </label>
                <textarea
                  {...register("description", {
                    required: "Tell your story here!",
                  })}
                  className="w-full resize-none mt-1 p-3 border border-gray-300 rounded-lg outline-none 
              focus:border-[#E8EAED] focus:ring-2 focus:ring-[#6200EE]
              transition-all duration-300 bg-[#F8FAFC]"
                  placeholder="Tell Your Story"
                ></textarea>
                {errors.description && (
                  <span className="block pl-2 pt-1  text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </div>
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between px-2 sm:px-6 items-center text-center">
                {/* Cancel button - full width on mobile */}
                <div
                  onClick={(e) => {
                    setShowForm(false);
                  }}
                  className="w-full sm:w-1/3 block bg-[#0F172B] text-white py-3 rounded-xl font-semibold hover:bg-[#172440] cursor-pointer"
                >
                  Cancel
                </div>

                {/* Publish button */}
                <button
                  type="submit"
                  className="w-full sm:w-1/3 block bg-[#0F172B] text-white py-3 rounded-xl font-semibold hover:bg-[#172440] cursor-pointer"
                >
                  Publish
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CreateForm;
