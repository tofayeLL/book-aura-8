import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredRead } from "../../utility/localstorage";
/* import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, DefaultTooltipContent } from 'recharts'; */

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';




const PagesRead = () => {

    const books = useLoaderData();

    const [readBook, setReadBooks] = useState([]);
    useEffect(() => {
        const getReadBookId = getStoredRead();
        // console.log(getReadBookId);
        if (books.length > 0) {
            const bookRead = books.filter(book => getReadBookId.includes(book.id));
            setReadBooks(bookRead);
        }

    }, [books])

    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];


    const data = readBook.map(book => {
        return {
            name: book?.name,
            page: book?.totalPages
        }
    })
    // console.log(data);



    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };




    return (
        <div className="flex flex-col justify-center items-center ">
            {/* <BarChart width={800} height={400} data={data}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Bar dataKey="page" fill="#8884d8" />
                <Tooltip></Tooltip>
            </BarChart> */}






            <BarChart
                width={1200}
                height={500}
                data={data}
                margin={{
                    top: 20,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Bar dataKey="page" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
                <Tooltip></Tooltip>
            </BarChart>
        </div>
    );
};

export default PagesRead;