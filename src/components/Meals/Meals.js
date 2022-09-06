import React from "react";
import Card from "../UI/Card";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

export default function Meals() {
  return (
    <Card>
      <MealsSummary />
      <AvailableMeals />
    </Card>
  );
}
