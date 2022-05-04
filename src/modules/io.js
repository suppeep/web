export default function () {
  const jsonReader = (file) => {
    const data = JSON.stringify(file);
    return JSON.parse(data);
  };

  return { jsonReader };
}
