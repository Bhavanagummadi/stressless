import { MdOutlineQuiz } from "react-icons/md";
import { FaUserDoctor } from "react-icons/fa6";
import { RiRobot2Fill } from "react-icons/ri";
import { FaSmileWink } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";

;
const links = [
  {
    text: "Psychometric Test",
    path: "test",
    icon: <MdOutlineQuiz />,
  },
  {
    text: "Therapists",
    path: "therapist",
    icon: <FaUserDoctor />,
  },
  {
    text: "Feel Better",
    path: "feelbetter",
    icon: <FaSmileWink />,
  },
  {
    text: "Analysis",
    path: ".",
    icon: <IoStatsChart />,
  },
];

export default links;

