import {create} from 'zustand'

export const useTest = create((set) => ({
    x:10,
    y:20,
    user : {
        name : "vikas",
        age : 20
    },
    updateUserAge : () => set((state) => ({user : {...state.user,age:30}})),
    updateUserName : (newName) => set((state) => ({user : {...state.user,name : newName}})),
    incrementY : () => set((state) => ({y : state.y + 1})),
    incrementX : () => set((state) => ({x : state.x + 1})),
    decrementX : () => set((state) => ({x : state.x - 1})),
    incrementByValue : (v) => set((state) => ({x : state.x + v})),
}))