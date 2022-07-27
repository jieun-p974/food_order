import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Deliverd To You</h2>
      <p>당신이 가장 좋아하는 음식을 선택하시고 맛있는 식사를 즐기세요.</p>
      <p>모든 음식은 엄선한 재료로 주문받은 즉시 조리됩니다.</p>
    </section>
  );
};

export default MealsSummary;
