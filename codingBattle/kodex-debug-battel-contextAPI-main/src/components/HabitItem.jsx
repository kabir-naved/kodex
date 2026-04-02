import { useState } from "react";
import { useHabit } from "../context/HabitContext";

const HabitItem = ({ habit }) => {
  const { toggleHabit, deleteHabit, updateHabit, getStreak } = useHabit();

  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState(habit);

  const today = new Date().toISOString().split("T")[0];
  const isDoneToday = habit.completedDates.includes(today);

  const handleSave = () => {
    updateHabit(habit.id, editData);
    setEditing(false);
  };

  return (
    <div className=" p-4 bg-white rounded-lg border border-slate-200 shadow-sm">
      <div className="space-y-4">
        {/* Top */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1 min-w-0">
            {editing ? (
              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-500 uppercase">
                  Edit Habit
                </label>

                {/* Name */}
                <input
                  value={editData.name}
                  onChange={(e) =>
                    setEditData({ ...editData, name: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded border border-slate-300 focus:border-indigo-500 outline-none text-sm"
                />

                {/* Priority + Category */}
                <div className="grid grid-cols-2 gap-2">
                  <select
                    value={editData.priority}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        priority: e.target.value,
                      })
                    }
                    className="px-2 py-2 rounded border border-slate-200 text-sm bg-white"
                  >
                    <option value="High">High Priority</option>
                    <option value="Medium">Medium Priority</option>
                    <option value="Low">Low Priority</option>
                  </select>

                  <select
                    value={editData.category}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        category: e.target.value,
                      })
                    }
                    className="px-2 py-2 rounded border border-slate-200 text-sm bg-white"
                  >
                    <option value="Health">Health</option>
                    <option value="Focus">Focus</option>
                    <option value="Growth">Growth</option>
                    <option value="Mindset">Mindset</option>
                  </select>
                </div>

                {/* Buttons */}
                <div className="flex gap-2 pt-2">
                  <button
                    onClick={handleSave}
                    className="flex-1 py-2 bg-indigo-600 text-white rounded font-medium text-sm hover:bg-indigo-700"
                  >
                    Save Changes
                  </button>

                  <button
                    onClick={() => {
                      setEditData(habit);
                      setEditing(false);
                    }}
                    className="px-4 py-2 text-slate-600 rounded font-medium text-sm border border-slate-200"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <>
                {/* Category + Priority */}
                <div className="flex gap-2 items-center mb-1">
                  <span
                    className={`text-[10px] font-bold uppercase 
                  ${isDoneToday ? "text-indigo-400" : "text-indigo-600"}
                  `}
                  >
                    {habit.category}
                  </span>
                  <span
                    className={`text-[10px] font-bold uppercase px-1.5 py-0.5 rounded ${
                      habit.priority === "High"
                        ? "text-red-600 bg-red-50"
                        : habit.priority === "Medium"
                          ? "text-amber-600 bg-amber-50"
                          : "text-green-600 bg-green-50"
                    }`}
                  >
                    {habit.priority}
                  </span>
                </div>

                {/* Name */}
                <h3
                  className={`text-lg font-bold truncate 
                ${isDoneToday ? "text-slate-400 line-through" : "text-slate-800"}
                `}
                >
                  {habit.name}
                </h3>
              </>
            )}
          </div>

          {/* Streak */}
          {!editing && (
            <div className="text-right shrink-0">
              <div
                className={`flex items-center justify-end text-slate-700
              ${isDoneToday ? "text-slate-400" : "text-slate-700"}
              `}
              >
                <span className="text-sm font-bold">
                  {getStreak(habit.completedDates)}
                </span>
                <span
                  className={`ml-1  font-black text-xs
                ${isDoneToday ? "text-orange-300" : "text-orange-500"}
                `}
                >
                  ^^
                </span>
              </div>
              <p
                className={`text-[10px]  font-semibold uppercase
                ${isDoneToday ? "text-slate-400" : "text-slate-500"}
                `}
              >
                Streak
              </p>
            </div>
          )}
        </div>

        {/* Motivation */}
        {!editing && (
          <h3
            className={`text-sm font-light truncate pl-4 
                ${isDoneToday ? "text-slate-400" : "text-slate-500"}
                `}
          >
            {habit.name}
          </h3>
        )}

        {/* Bottom */}
        {!editing && (
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-4">
            {/* Goal */}
            <div className="text-xs">
              <span
                className={` block font-medium uppercase
                ${isDoneToday ? "text-slate-400" : "text-slate-500"}
                `}
              >
                Goal
              </span>
              <span
                className={`font-semibold 
                ${isDoneToday ? "text-slate-500 " : "text-slate-700 "}
                `}
              >
                {habit.goalValue} {habit.unit}
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3 flex-wrap justify-end">
              <button
                onClick={() => setEditing(true)}
                className={`p-1.5  hover:text-blue-500 
                  ${isDoneToday ? "text-slate-500" : "text-slate-700"}
                   `}
              >
                Edit
              </button>

              <button
                onClick={() => deleteHabit(habit.id)}
                className={`p-1.5  hover:text-red-500 ${
                  isDoneToday ? "text-slate-500" : "text-slate-700"
                }`}
              >
                Delete
              </button>

              <button
                onClick={() => toggleHabit(habit.id)}
                className={`px-4 py-2 rounded text-sm font-semibold ${
                  isDoneToday
                    ? "bg-[#F5F8FB] text-[#8997AA]"
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"
                } `}
              >
                {isDoneToday ? "Completed" : "Complete"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HabitItem;
