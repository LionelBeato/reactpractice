import React, { useState } from 'react';
import { useEffect } from 'react';

const UserRow = ({name, quantity}) => {
    return <h1>{name},{quantity}</h1>

    
}

export default UserRow