import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {nanoid} from "nanoid"
const SessionForm = ({ setToggle, setForm }) => {

  const modalRef = useRef();
   const {
     register,
     handleSubmit,
     reset,
     formState: { errors },
   } = useForm({
     mode: "onChange",
     defaultValues: {
     time: 10
     }
   });


  const handleFormSubmit = (data) => {
    setForm((prev) => [...prev, {...data, id: nanoid(),bibi: Date.now()}])
    reset()
    setToggle(false)

  };

  return (
    //  Full screen overlay
    <div
      className="fixed inset-0 bg-blue-50 flex items-center justify-center p-4 z-50"
      // onClick={() => setToggle(false)}
      // onClick={(e) => {
      //   if (e.target === e.currentTarget) {
      //     setToggle(false);
      //   }
      // }}
      onClick={(e) => {
        if (!modalRef.current.contains(e.target)) {
          setToggle(false);
        }
      }}
    >
      {/*  Responsive container */}
      <div
        ref={modalRef}
        className="w-full max-w-2xl bg-white rounded-3xl p-4 sm:p-8 shadow-md max-h-[95vh] overflow-y-auto"
        // onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
          Plan Your Focus
        </h1>
        <p className="text-gray-500 mb-6 text-sm sm:text-base">
          Design your next high-performance study session.
        </p>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit(handleFormSubmit)}>
          {/* Topic */}
          <div>
            <label className="text-xs sm:text-sm font-semibold text-gray-600 uppercase">
              Topic Name
            </label>
            <input
              type="text"
              placeholder="e.g. B-Tree Implementation Details"
              {...register("title")}
              className="w-full mt-2 p-3 rounded-xl bg-gray-100 outline-none text-sm sm:text-base"
            />
            <span className="opacity-55 mt-2 block text-sm">
              *This field is required for tracking progress.
            </span>
          </div>

          {/* Subject + Duration */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-xs sm:text-sm font-semibold text-gray-600 uppercase">
                Subject
              </label>
              <div className="relative mt-2">
                <select
                {...register("subject")}
                  className="w-full appearance-none p-3 pr-10 rounded-xl bg-gray-100 text-gray-700 text-sm sm:text-base outline-none border border-transparent focus:border-blue-500 focus:bg-white transition-colors duration-200 cursor-pointer"
                >
                  <option value="" disabled>
                    Select category
                  </option>
                  <option>DSA</option>
                  <option>Biology</option>
                  <option>Math</option>
                </select>

                {/* Custom Arrow */}
                <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-500">
                  ▼
                </div>
              </div>
              <span className="opacity-55 mt-2 block text-sm">
                *This field is required for tracking progress.
              </span>
            </div>

            <div>
              <label className="text-xs sm:text-sm font-semibold text-gray-600 uppercase">
                Duration (min)
              </label>
              <input
                type="number"
                {...register("time")}
                className="w-full mt-2 p-3 rounded-xl bg-gray-100 outline-none text-sm sm:text-base"
              />
              <span className="opacity-55 mt-2 block text-sm">
                *This field is required for tracking progress.
              </span>
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="text-xs sm:text-sm font-semibold text-gray-600 uppercase">
              Scheduled Date
            </label>
            <input
              type="date"
             {...register("date")}
              className="w-full mt-2 p-3 rounded-xl bg-gray-100 outline-none text-sm sm:text-base"
            />
            <span className="opacity-55 mt-2 block text-sm">
              *This field is required for tracking progress.
            </span>
          </div>

          {/* Priority */}
          <div>
            <label className="text-xs sm:text-sm font-semibold text-gray-600 uppercase">
              Priority Level
            </label>

            <div className="flex flex-wrap gap-3 mt-3">
              {["Low", "Medium", "High"].map((level) => (
                <button
                 
                >
                  {level}
                </button>
              ))}
            </div>
            <span className="opacity-55 mt-2 block text-sm">
              *This field is required for tracking progress.
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center px-4 sm:px-10 gap-4 sm:gap-8 font-semibold">
            <button
              onClick={() => setToggle(false)}
              className="w-full sm:w-[200px] text-blue-600 font-medium text-center rounded-full py-3 sm:py-4 transition-all duration-300 ease-in-out hover:bg-blue-100"
            >
              Cancel
            </button>

            <button
              className="w-full sm:flex-1 bg-blue-600 text-white py-3 sm:py-4 font-medium rounded-full
            transition-all duration-300 ease-in-out hover:bg-blue-800
            "
            >
              Add Session
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SessionForm;
