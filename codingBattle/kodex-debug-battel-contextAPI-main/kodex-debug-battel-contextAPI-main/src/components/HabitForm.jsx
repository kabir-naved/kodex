import { useForm } from "react-hook-form";
import { useHabit } from "../context/HabitContext";

const HabitForm = () => {
  const { addHabit } = useHabit();

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (values) => {
    addHabit(values);
    reset(); // ✅ FIX
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("name")} placeholder="Habit name" />
      <input {...register("goalValue")} placeholder="Goal" />
      <button type="submit">Create</button>
    </form>
  );
};

export default HabitForm;
