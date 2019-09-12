import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();

for (let match of reader.data) {
  console.log(match);
}
