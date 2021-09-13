export const add = (value:string) => {
    return {
        type : "ADD",
        payload: value
    }
}

export const delete1 = (data:string) => {
    return {
        type: "DELETE",
        payload: data
    }
}