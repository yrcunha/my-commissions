import { ContextStrategy } from './base/contextStrategy';
import { MongoDB } from './implementations/mongodb';
import { Postgres } from './implementations/postgres';

const contextMongo = new ContextStrategy(new MongoDB());
contextMongo.is_connected();
contextMongo.all();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.is_connected();
contextPostgres.create();
