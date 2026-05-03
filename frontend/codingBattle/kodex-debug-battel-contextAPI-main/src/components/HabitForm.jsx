import { useForm } from "react-hook-form";
import { useHabit } from "../context/HabitContext";

const HabitForm = () => {
  const { addHabit } = useHabit();

  const { register, handleSubmit, reset, formState: {errors} } = useForm({defaultValues: {
    priority: "Medium",
  }});

  const onCommit = (values) => {
    const payload = {
      ...values,
      id: crypto.randomUUID(), 
      completed: false,
    };

    addHabit(payload);
    reset();
  };

  return (
    <div className="overflow-y-auto">
      <div className="w-full bg-white p-1 rounded-xl shadow">
        <form className="space-y-4" onSubmit={handleSubmit(onCommit)}>
          {/* Habit Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600">
              Habit Name
            </label>
            <input
              type="text"
              {...register("name", { required: "Please enter a name" })}
              placeholder="e.g. Morning Exercise"
              className="w-full px-3 py-2 rounded-md border border-slate-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none text-sm text-slate-800"
            />
            {errors.name && (
              <span className="text-red-500 text-xs pl-2">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Goal + Unit */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600">
                Daily Goal
              </label>
              <input
                type="number"
                {...register("goalValue",)}
                placeholder="30"
                className="w-full px-3 py-2 rounded-md border border-slate-300 focus:border-indigo-500 outline-none text-sm"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600">
                Unit
              </label>
              <select
                {...register("unit")}
                className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white focus:border-indigo-500 outline-none text-sm text-slate-700"
              >
                <option value="mins">Minutes</option>
                <option value="pages">Pages</option>
                <option value="reps">Reps</option>
                <option value="liters">Liters</option>
              </select>
            </div>
          </div>

          {/* Date + Category */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600">
                Start Date
              </label>
              <input
                type="date"
                {...register("startDate")}
                className="w-full px-3 py-2 rounded-md border border-slate-300 focus:border-indigo-500 outline-none text-sm text-slate-700"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-semibold text-slate-600">
                Category
              </label>
              <select
                {...register("category")}
                className="w-full px-3 py-2 rounded-md border border-slate-300 bg-white focus:border-indigo-500 outline-none text-sm text-slate-700"
              >
                <option value="Health">Health</option>
                <option value="Focus">Focus</option>
                <option value="Growth">Growth</option>
                <option value="Mindset">Mindset</option>
              </select>
            </div>
          </div>

          {/* Motivation */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600">
              Motivation
            </label>
            <textarea
              {...register("motivation", {required: "Phrase your Motivation!"
              })}
              rows="2"
              placeholder="Why is this important to you?"
              className="w-full px-3 py-2 rounded-md border border-slate-300 focus:border-indigo-500 outline-none resize-none text-sm text-slate-700"
            />
            {errors.motivation && (
              <span className="text-red-500 text-xs pl-2">
                {errors.motivation.message}
              </span>
            )}
          </div>

          {/* Priority */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold text-slate-600">
              Priority Level
            </label>

            <div className="grid grid-cols-3 gap-2">
              {["Low", "Medium", "High"].map((level) => (
                <label
                  key={level}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    value={level}
                    {...register("priority")}
                    className={`w-4 h-4 text-indigo-600 border-slate-300`}
                  />
                  <span className="text-sm text-slate-600">{level}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold rounded-md transition-colors mt-2"
          >
            Create Habit
          </button>
        </form>
      </div>
    </div>
  );
};

export default HabitForm;
