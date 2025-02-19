import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useRestaurant } from "@/hooks/services/useRestaurant";
import React from "react";

type FilterCategoryProps = {
  Categories: {
    id: number;
    name: string;
    count: number;
  }[];
  onClick?: (categoryId: number) => void;
};

const FilterCategory = ({ Categories, onClick }: FilterCategoryProps) => {
  const { products } = useRestaurant({ params: { restaurantId: 1 } });

  return (
    
  );
};

export default FilterCategory;
