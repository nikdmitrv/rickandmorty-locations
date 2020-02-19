export default function locationTypeHelper(typeName) {
  if (!typeName) return "/images/unknown.png";
  const types = [
    "unknown",
    "planet",
    "resort",
    "tv",
    "fantasy_town",
    "dream",
    "space_station",
    "cluster",
    "microverse"
  ];
  const normalized = typeName.toLowerCase().replace(/\s/g, "_");
  return types.includes(normalized)
    ? `/images/${normalized}.png`
    : "/images/unknown.png";
}
