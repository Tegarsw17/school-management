"use client"

import Image from "next/image"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Jan',
        income: 4000,
        expense: 2400,
    },
    {
        name: 'Feb',
        income: 3000,
        expense: 1398,
    },
    {
        name: 'Mar',
        income: 2000,
        expense: 9800,
    },
    {
        name: 'Apr',
        income: 2780,
        expense: 3908,
    },
    {
        name: 'May',
        income: 1890,
        expense: 4800,
    },
    {
        name: 'Jun',
        income: 2390,
        expense: 3800,
    },
    {
        name: 'Jul',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Aug',
        income: 2390,
        expense: 3800,
    },
    {
        name: 'Sep',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Oct',
        income: 2390,
        expense: 3800,
    },
    {
        name: 'Nov',
        income: 3490,
        expense: 4300,
    },
    {
        name: 'Des',
        income: 3490,
        expense: 4300,
    },
];

const FinanceChart = () => {
    return (
        <div className='bg-white rounded-lg p-4 h-full'>
            <div className='flex justify-between items-center'>
                <h1 className='text-lg font-semibold'>Financa</h1>
                <Image src={"/moreDark.png"} alt='logo' width={20} height={20} className='' />
            </div>
            <ResponsiveContainer width="100%" height="90%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
                    <XAxis dataKey="name" axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} tickMargin={10} />
                    <YAxis axisLine={false} tick={{ fill: '#d1d5db' }} tickLine={false} tickMargin={10} />
                    <Tooltip />
                    <Legend align='center' verticalAlign='top' wrapperStyle={{ paddingTop: '10', paddingBottom: '30' }} />
                    <Line type="monotone" dataKey="income" stroke="#CFCEFF" strokeWidth={5} />
                    <Line type="monotone" dataKey="expense" stroke="#C3EBFA" strokeWidth={5} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default FinanceChart