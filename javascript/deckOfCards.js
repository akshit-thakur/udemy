//This is a factory of deck objects.. all calls to makeDeck() create a new deck unlike bottom approach where only one deck is there.
const makeDeck = () => {
    return {
        deck: [],
        drawnCards: [],
        suits: ['clubs', 'spades', 'hearts', 'diamonds'],
        values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
        initializeDeck() {
            const {
                suits,
                values,
                deck
            } = this;
            for (let value of values.split(',')) {
                for (let suit of suits)
                    deck.push({ value, suit })
            }
        },
        drawCard() {
            const card = this.deck.pop()
            this.drawnCards.push(card)
            return card
        },
        drawMultiple(numCards) {
            const cards = []
            for (let i = 0; i < numCards; i++)
                cards.push(this.drawCard());
            return cards;
        },
        shuffle() {
            const { deck } = this;
            for (let i = deck.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [deck[i], deck[j]] = [deck[j], deck[i]];
            }
        }
    }
}

//This is one for creating a single deck and using fucntions on that deck... can't have another deck without copying all code

// const myDeck = {
//     deck: [],
//     drawnCards: [],
//     suits: ['clubs', 'spades', 'hearts', 'diamonds'],
//     values: '2,3,4,5,6,7,8,9,10,J,Q,K,A',
//     initializeDeck() {
//         const {
//             suits,
//             values,
//             deck
//         } = this;
//         for (let value of values.split(',')) {
//             for (let suit of suits)
//                 deck.push({ value, suit })
//         }
//     },
//     drawCard() {
//         const card = this.deck.pop()
//         this.drawnCards.push(card)
//         return card
//     },
//     drawMultiple(numCards) {
//         const cards = []
//         for (let i = 0; i < numCards; i++)
//             cards.push(this.drawCard());
//         return cards;
//     },
//     shuffle() {
//         const { deck } = this;
//         for (let i = deck.length - 1; i > 0; i--) {
//             let j = Math.floor(Math.random() * (i + 1));
//             [deck[i], deck[j]] = [deck[j], deck[i]];
//         }
//     }
// }

const myDeck = makeDeck();
myDeck.initializeDeck();
myDeck.shuffle();
const h1 = myDeck.drawMultiple(2);
const h2 = myDeck.drawMultiple(2);
const h3 = myDeck.drawMultiple(5);
const myDeck2 = makeDeck();
myDeck2.initializeDeck();