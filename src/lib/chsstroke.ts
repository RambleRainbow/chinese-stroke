import bh from './bh.json';
import { runInThisContext } from 'vm';

export interface WordStroke {
  word: string;
  stroke: string;
}

let dict: any = bh;

export function chsstroke(words: string): WordStroke[] {
  let rtn: WordStroke[] = [];
  for(let i = 0; i < words.length; i++) {
    let char: string = words[i];

    if(bh.hasOwnProperty(char)) {
      rtn.push({
        word: char,
        stroke: dict[char]
      })
    } else {
      rtn.push({
        word: char,
        stroke: ''
      })
    }
  }
  return rtn;
}