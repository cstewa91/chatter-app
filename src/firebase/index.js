import firebase from 'firebase/app';
import 'firebase/firebase-database';
import { dbConfig } from '../config';

firebase.initializeApp(dbConfig);

export const db = firebase.database();