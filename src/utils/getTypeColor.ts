export const getTypeColor = (type: string) => {
  const typeLowerCase = type.toLowerCase();

  const colors: { [key: string]: string } = {
    grass: "green",
    poison: "purple",
    fire: "red",
    water: "blue",
    bug: "brown",
  };

  return colors[typeLowerCase] || "black"; // Default to "black" if the type is not found
};
