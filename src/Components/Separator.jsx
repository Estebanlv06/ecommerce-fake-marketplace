import React from 'react'

function Separator({ children }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '30px'}}>
            <h1 style={{ marginBottom: '20px' }}>{children}</h1>
            <div style={{ width: '30%', height: '2px', backgroundColor: 'red' }}></div>
        </div>
    )
}

export default Separator