
export default (state = {
    count: '0',
    addedProducts : [""],
    booksPage : [],
    productsPage : [],
    selected : "",
    selectedData : {},
    skillPageData : {},
    projectPageData : {},
    history:false,
    match:{},
    isPinged:false
}, action) => {
    
    switch (action.type) {
        case 'SET_CURRENT_CART':
            
            return {
                ...state,
                count : action.payload,
            };

        case 'SET_CURRENT_CART_PRODUCTS':
                    return {
            ...state,
            addedProducts : action.payload,
        };
        
        case 'SET_CURRENT_BOOKS_PAGE':
            return {
                 ...state,
                 booksPage : action.payload,
            };

        case 'SET_CURRENT_PRODUCTS_PAGE':
        return {
             ...state,
             productsPage : action.payload,
        };
        
        case 'SET_SELECTED_BTN':
            return {
                 ...state,
                 selected : action.payload,
            };
            
        case 'SET_SELECTED_SKILL_DATA':
            return {
                 ...state,
                 selectedData : action.payload,
            };
        case 'SET_SKILL_PAGE_DATA':
        return {
             ...state,
             skillPageData : action.payload,
        };
        case 'SET_PROJECT_PAGE_DATA':
            return {
                 ...state,
                 projectPageData : action.payload,
            };
        case 'SET_HISTORY_OBJ':
            return {
                 ...state,
                 history : action.payload,
            };
        case 'SET_MATCH_OBJ':
        return {
             ...state,
             match : action.payload,
        };
        case 'SET_PINGING_VAR':
            return {
                 ...state,
                 isPinged : action.payload,
            };
            
        
        default:
            return state;
    }


}