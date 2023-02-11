import { useReducer } from 'react';

export function useValidation({ input }) {
    const initialState = '';
    const reducer = (state, action) => {
        switch (action.type) {
            case 'price':
                return action.value.toUppercase() === action.value.toLowercase()
                    ? (state = isValid)
                    : (state = !isValid);
            //some code to validate price $
            case 'size':
                action.value;
            //some code to validate size MB
            case 'height':
                action.value;
            //some code to validate height CM
            case 'width':
                action.value;
            //some code to validate width CM
            case 'length':
                action.value;
            //some code to validate length CM
            default:
                return state;
        }
    };

    const [isValid, dispatch] = useReducer(reducer, initialState);
    dispatch({ type: input.type, value: input.value });
    return { isValid };
}
