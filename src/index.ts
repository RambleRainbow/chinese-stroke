import {chsstroke as imp_chsstroke, WordStroke} from './lib/chsstroke';

export namespace chsstroke {
  export function chsstroke(words: string): WordStroke[] {
    return imp_chsstroke(words);
  }
}