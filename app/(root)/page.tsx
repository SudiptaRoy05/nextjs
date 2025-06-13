import Image from 'next/image';

type Meal = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strCategory: string;
};

export default async function Home() {
  const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  const data = await response.json();
  const meals: Meal[] = data.meals || [];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
      {meals.map((meal) => (
        <div
          key={meal.idMeal}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition"
        >
          <div className="relative w-full h-48">
            <Image
              fill
              src={meal.strMealThumb}
              alt={meal.strMeal}
             
            />
          </div>
          <h2 className="text-xl font-bold mt-2">{meal.strMeal}</h2>
          <p className="text-sm text-gray-600">
            {meal.strArea} • {meal.strCategory}
          </p>
        </div>
      ))}
    </div>
  );
}
