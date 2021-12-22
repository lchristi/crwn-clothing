import React from "react";

import { SpinnerContainer, SpinnerOverlay } from "./with-spinner.component";


const WithSpinner = WrappedComponet => {    
    const spinner = ({ isLoading, ...otherProps }) =>{        
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer/>            
        </SpinnerOverlay>
    ) : (
        <WrappedComponet {...otherProps} />
    );
};
return spinner;
}

export default WithSpinner;