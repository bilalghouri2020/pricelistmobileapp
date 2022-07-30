import React from 'react'
import HeaderComponent from '../Header'
export default function Index({children}) {
    return (
        <SafeAreaProvider>
            <HeaderComponent/>
            {children}
        </SafeAreaProvider>
    )
}
