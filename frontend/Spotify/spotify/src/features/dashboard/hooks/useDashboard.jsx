import { useDispatch } from "react-redux";

function useDashboard() {
  const dispatch = useDispatch();
  return {dispatch}
}

export default useDashboard;
