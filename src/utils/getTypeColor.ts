export const getTypeColor = (type: string) => {
  const typeLowerCase = type.toLowerCase();

  const colors: { [key: string]: string } = {
    grass: '#83C27E',
    poison: '#C27EBC',
    fire: '#FD8900',
    water: '#0036D9',
    bug: '#9AB100',
  };

  return colors[typeLowerCase] || "black"; // Default to "black" if the type is not found
};
