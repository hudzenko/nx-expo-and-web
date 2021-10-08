import { render } from '@testing-library/react';

import Mylibrary from './mylibrary';

describe('Mylibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mylibrary />);
    expect(baseElement).toBeTruthy();
  });
});
