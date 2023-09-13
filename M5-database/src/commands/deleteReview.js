import { Review } from '../models/reviewModel.js';
import { dataBaseDisconnect } from '../db/dbDisconnect.js';

const log = console.log;

export const deleteReviewCmd = async () => {
  try {
    await Review.deleteMany({});
    log('Deleted done');
  } catch (error) {
    error('Error deleting data', error);
  } finally {
    dataBaseDisconnect;
  }
};