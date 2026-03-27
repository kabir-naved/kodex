import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { FaLink } from "react-icons/fa";
import CreateForm from "./CreateForm";

function ListForm({ data, index, handleDelete, handleUpdate, showForm }) {
  return (
    <div className=" m-auto w-3xl px-10 py-6 space-y-6">
      {/* Card  */}
      <div className="bg-white shadow-md rounded-xl p-6">
        {/* Top */}
        <div className="flex justify-between items-start">
          <div className="flex gap-3 items-center">
            <img
              src={data.image}
              alt="profile"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h4 className="font-semibold text-sm">{data.name}</h4>
              <p className="text-xs text-gray-400">{data.role}</p>
            </div>
          </div>

          <div className="flex gap-3 text-gray-500 cursor-pointer">
            {/* Update */}
            <span
              className="relative group cursor-pointer"
              onClick={() => handleUpdate(index)}
            >
              <MdEdit
                size={34}
                className="bg-[#d0cccc63] shadow-2xl rounded-sm px-2 py-1 hover:bg-[#83828263]"
              />

              {/* Tooltip */}
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 
    bg-black text-white text-xs px-2 py-1 rounded 
    opacity-0 group-hover:opacity-100 
    transition-all duration-300 whitespace-nowrap"
              >
                Edit function isn't working, I'll implement it tomorrow.
              </span>
              {showForm && <CreateForm />}
            </span>

            {/* Delete */}
            <span className="relative group cursor-pointer">
              <MdDelete
                onClick={() => handleDelete(index)}
                size={34}
                className="bg-[#d0cccc63] shadow-2xl rounded-sm px-2 py-1 hover:bg-[#83828263]"
              />

              {/* Tooltip */}
              <span
                className="absolute -top-8 left-1/2 -translate-x-1/2 
    bg-black text-white text-xs px-2 py-1 rounded 
    opacity-0 group-hover:opacity-100 
    transition-all duration-300 whitespace-nowrap"
              >
                Delete
              </span>
            </span>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-xl font-semibold mt-4">{data.title}</h2>

        <p className="text-gray-500 mt-2 text-sm leading-relaxed">
          {data.description}
        </p>

        {/* Bottom */}
        <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
          <div className="flex gap-4">
            <span className="flex justify-between items-center gap-1">
              <FcLike size={22} /> 2.4k
            </span>
            <span className="flex justify-between items-center gap-1">
              <IoChatbubbleEllipses size={22} /> 84
            </span>
          </div>

          <span className="cursor-pointer">
            <FaLink size={22} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ListForm;
