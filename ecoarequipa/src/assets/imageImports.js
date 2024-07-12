const images = {};

const importAll = (r) => {
  r.keys().map((item, index) => {
    images[item.replace('./', '')] = r(item);
    return null; // Asegura que siempre haya un valor de retorno
  });
};

importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

export default images;