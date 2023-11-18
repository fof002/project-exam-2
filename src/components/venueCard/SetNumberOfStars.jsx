import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export function SetNumberOfStars(props) {
  let starsArray = [];

  function setStarsArray(number) {
    for (let i = 0; i < number; i++) {
      starsArray.push(i);
    }
  }
  setStarsArray(props.numberOfStars);
  const stars = starsArray.map((star) => {
    return (
      <FontAwesomeIcon icon={faStar} key={star} style={{ color: "orange" }} />
    );
  });
  return starsArray.length === 0 ? (
    <FontAwesomeIcon icon={faStar} style={{ color: "orange" }} />
  ) : (
    stars
  );
}
