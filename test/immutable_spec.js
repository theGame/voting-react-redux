import { expect } from 'chai';
import { List, Map } from 'immutable';

describe('immutability', () => {
    describe('a number', () => {
        function increment(currentState) {
            return currentState + 1;
        }

        it('is immutable', () => {
            let state = 42;
            let nextState = increment(state);

            expect(nextState).to.equal(43);
            expect(state).to.equal(42);
        });
    });

    describe('A List', () => {
        function addMovie(currentState, movie) {
            return currentState.push(movie);
        }

        it('is immutable', () => {
            let state = List.of('First Item', 'Second Item');
            let nextState = addMovie(state, 'Third one');

            expect(nextState).to.equal(List.of('First Item', 'Second Item', 'Third one'));
            expect(state).to.equal(List.of('First Item', 'Second Item'));
        });
    });

    describe('A Tree', () => {
        function addMovie(currentState, movie) {
            return currentState.set(
                'movies',
                currentState.get('movies').push(movie)
            );
        }

        it('is immutable', () => {
            let state = Map({ movie: List.of('First Item', 'Second Item') });
            let nextState = addMovie(state, 'Third one');

            expect(nextState).to.equal(Map({
                movie: List.of('First Item', 'Second Item', 'Third one')
            }));

            expect(state).to.equal(Map({
                movies: List.of('First Item', 'Second Item')
            }));
        });
    });
});