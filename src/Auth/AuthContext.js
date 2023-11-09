// import React, { useContext, useState, useEffect, createContext } from "react";
// import { auth } from "./firebase";

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext)

// export const AuthProvider = ({ children }) => {

//     const [currentUser, setCurrentUser] = useState();
//     const [loading, setLoading] = useState(true);

//     const login = (email, password) => auth.signInWithEmailAndPassword(email, password)
//     const logout = () => auth.signOut()

//     useEffect(() => {
//         const unsubscribe = auth.onAuthStateChanged(user => {
//             setCurrentUser(user)
//             setLoading(false)
//         })
//         return unsubscribe
//     }, [])

//     const value = {
//         currentUser, login, logout
//     }

//     return (
//         <AuthContext.Provider value={value}>
//             {!loading && children}
//         </AuthContext.Provider>
//     )
// }