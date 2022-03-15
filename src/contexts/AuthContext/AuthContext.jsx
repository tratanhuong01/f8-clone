import { createContext, useReducer } from "react";

const inital = {
    isLogin: true,
    form: false,
    child: '',
    isEmail: true,
    level: false
};

export const AuthContext = createContext();

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'UPDATE_DATA':
            return { ...state, [action.key]: action.value };
        default:
            return { ...state };
    }
}

const updateData = (key, value) => {
    return {
        type: 'UPDATE_DATA',
        key,
        value
    }
}

export const AuthProvider = ({ children }) => {
    //
    const [state, dispatch] = useReducer(AppReducer, inital);
    //
    return (
        <AuthContext.Provider value={{
            auth: state,
            authsDispatch: dispatch,
            authsAction: { updateData }
        }}>
            {children}
        </AuthContext.Provider>
    )
}