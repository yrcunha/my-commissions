export const postgres_options = {
  type: 'postgres' as 'postgres',
  url: 'postgres://postgres:docker@172.17.0.3:5432/comissions',
  synchronize: true,
  uuidExtension: 'uuid-ossp' as 'uuid-ossp',
};

export const mongo_options = {
  type: 'postgres' as 'postgres',
  url: 'postgres://postgres:docker@172.17.0.3:5432/comissions',
  synchronize: true,
};
