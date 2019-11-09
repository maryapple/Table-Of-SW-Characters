import getTheHighest from './theHighest'

const props = 
    [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY"
        },
        {
            "name": "C-3PO",
            "height": "167",
            "mass": "75",
            "hair_color": "n/a",
            "skin_color": "gold",
            "eye_color": "yellow",
            "birth_year": "112BBY"
        }
    ]

describe('getTheHighest', () => {
    it('the highest person from array is the person with the biggest number of height', () => {
        expect(getTheHighest(props)).toBe(172)
    })
})
