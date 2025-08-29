import {render, screen, fireEvent } from '@testing-library/react';
import {default as Card} from './Card';

describe('Card', () => {
  it('renders the card component', () => {
    render(<Card>{'hello'}</Card>);
    expect(screen.getByText('hello')).toBeInTheDocument();
  });
});
