import { EllipsisPipe } from './ellipsis.pipe';

describe('EllipsisPipe', () => {
  it('create an instance', () => {
    const pipe = new EllipsisPipe();
    expect(pipe).toBeTruthy();
  });
  it('should return the same string', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform('coucou', 20);
    expect(result).toBe('coucou');
  });
  it('should return cou...', () => {
    const pipe = new EllipsisPipe();
    const result = pipe.transform('coucou', 3);
    expect(result).toBe('cou...');
  });
  it('should return an error', () => {
    const pipe = new EllipsisPipe();
    let shouldGoHere = false;
    try {
      pipe.transform(34, 3);
    } catch (err) {
      shouldGoHere = true;
    }
    expect(shouldGoHere).toBe(true);
  });
});
