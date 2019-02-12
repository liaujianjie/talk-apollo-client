export default entities =>
  entities.reduce((acc, entity) => {
    return { ...acc, [entity.id]: entity };
  }, {});
