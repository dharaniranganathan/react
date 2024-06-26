const items = (state = [], action) => {
    switch (action.type) {
        case 'ADD_ITEMS':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'UPDATE_ITEM':
            return state.map(item =>
                item.id === action.id ? { ...item, completed: !item.completed } : item
            )
        case 'DELETE_ITEM':
            const updatedItems = state.items.filter(item => item.id !== action.id);
            return {
                ...state,
                items: updatedItems
            };
        default:
            return state
    }
}

export default items;