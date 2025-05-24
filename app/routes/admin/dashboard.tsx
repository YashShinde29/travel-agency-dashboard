import React from 'react'
import {Header} from '../../../components'

const Dashboard = () => {
    const user = { name: "Yash"};
    return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? 'Guest'} 👋`}
                description="Track activity, treds and popular destinations in real time"
            />

            Dashboard page content
        </main>
    )
}
export default Dashboard
