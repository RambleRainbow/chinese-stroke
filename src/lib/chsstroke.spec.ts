import {WordStroke, chsstroke} from './chsstroke';

describe("chinese stroke test", () => {
  
  it('should return stroke for single chs-word', () => {
    let rtn: WordStroke[] = [];

    expect(chsstroke('一')[0]).toEqual({word: '一', stroke: '1'});
    expect(chsstroke('丨')[0]).toEqual({word: '丨', stroke: '2'});
    expect(chsstroke('丿')[0]).toEqual({word: '丿', stroke: '3'});
    expect(chsstroke('洪')[0]).toEqual({word: '洪', stroke: '441122134'});
  })

  it('should return multi word stroke', () => {
    let test: WordStroke[] = chsstroke('一丨');
    expect(test).toHaveLength(2);

    expect(test[0]).toEqual({word: '一', stroke: '1'});
    expect(test[1]).toEqual({word: '丨', stroke: '2'});
  })

  it('should return null-string for unrecongnize word', () => {
    expect(chsstroke('1')[0]).toEqual({word: '1', stroke: ''});

    let test: WordStroke[] = chsstroke('一1丨');
    expect(test).toHaveLength(3);
    expect(test[0]).toEqual({word: '一', stroke: '1'});
    expect(test[1]).toEqual({word: '1', stroke: ''});
    expect(test[2]).toEqual({word: '丨', stroke: '2'});
  })
})