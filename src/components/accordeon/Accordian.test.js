import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Accordian from './index';
import data from './data';

jest.mock('./data', () => [
    { id: 1, question: 'Question 1', answer: 'Answer 1' },
    { id: 2, question: 'Question 2', answer: 'Answer 2' },
  ]);

describe ('Accordian component', () => {

    test('renders without crashing', () => {
        render(<Accordian />);
        expect(screen.getByText('Question 1')).toBeInTheDocument();
        expect(screen.getByText('Question 2')).toBeInTheDocument();
      });

    test('displays data correctly', () => {
        render(<Accordian />);
        data.forEach(item => {
          expect(screen.getByText(item.question)).toBeInTheDocument();
        });
      });

      test('expands and collapses items correctly', () => {
        render(<Accordian />);
        data.forEach(item => {
          const questionElement = screen.getByText(item.question);
          fireEvent.click(questionElement);
          expect(screen.getByText(item.answer)).toBeVisible();
          fireEvent.click(questionElement);
          expect(screen.queryByText(item.answer)).not.toBeVisible;
        });
      });
})