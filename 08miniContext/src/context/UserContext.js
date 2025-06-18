import React from "react";

const UserContext=React.createContext()
//every context is a provider

export default UserContext;

//wrap multiple components with UserContext it wi ll act as a Provider for all components
{/* <UserContext>
    <LOgin />
    <card>
        <Data />
    </card>
</UserContext> */}