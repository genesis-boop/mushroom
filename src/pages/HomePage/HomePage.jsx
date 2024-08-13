import CountDown from "../../components/CountDownComponent/CountDownComponent";
import YearGoal from "../../components/YearGoalComponent/YearGoalComponent";
import "./HomePage.scss";

function HomePage() {
  return (
    <div>
      <YearGoal />
      <CountDown />
    </div>
  );
}

export default HomePage;
