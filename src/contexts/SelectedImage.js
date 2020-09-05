const { createContext } = require("react");

const SelectedImageContext = createContext({
    selectedImage: null,
    selectImage:()=>{}   
});

export default SelectedImageContext;