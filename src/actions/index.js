let acionId = 0;

export const fooAction = () => {
    return {
        type: "INC_ACTION",
        id: acionId+1
    }
};
