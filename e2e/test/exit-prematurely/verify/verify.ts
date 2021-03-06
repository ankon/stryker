import * as fs from 'fs';
import { expect } from 'chai';

describe('Verify stryker has ran correctly', () => {

  const strykerLog = fs.readFileSync('./stryker.log', 'utf8');

  it('exit prematurely', async () => {
    expect(strykerLog).contains('No tests were executed. Stryker will exit prematurely.');
  });

  it('should log about a mutant free world', async () => {
    expect(strykerLog).contains('It\'s a mutant-free world, nothing to test');
  });

  it('should warn about the globbing expression resulting in no files', () => {
    expect(strykerLog).contains('Globbing expression "src/*.js" did not result in any files.');
  });
});
