function getPagination(page, size) {
  const limit = size ? parseInt(size) : 3;
  const offset = page ? parseInt(page) * limit : 0;

  return { limit, offset };
}

function getPagingData(data, page, limit) {
  const { count: totalItems, rows: datas } = data;
  const currentPage = page ? parseInt(page) : 0;
  const totalPages = Math.ceil(totalItems / limit);
  return { totalItems, data: datas, totalPages, currentPage };
}

export { getPagination, getPagingData };
