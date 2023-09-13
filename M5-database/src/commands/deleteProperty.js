import Property from '../models/propertyModel.js';
import { dbDisconnect } from '../db/dbDisconnect.js';

const log = console.log;

export const deletePropertyCmd = async () => {
  try {
    await Property.deleteMany({});
    log('Deleted done');
  } catch (error) {
    error('Error deleting data', error);
  } finally {
    dbDisconnect;
  }
};
