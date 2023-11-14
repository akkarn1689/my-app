import React, { useState } from 'react'

const Table = ({ data }) => {
    // const [showData, setShowData] = useState(false);
    function sortFunction(a, b) {
        if (a.timestamp === b.timestamp) {
            return 0;
        }
        else {
            return (a.timestamp < b.timestamp) ? -1 : 1;
        }
    }

    data.sort(sortFunction);

    return (
        <>
            {/* <div className="form-check flex flex-row m-2 ">
                <input
                    type="checkbox"
                    className="form-check-input m-2"
                    name="allSelect"
                    onClick={setShowData(!showData)}    
                />
                <label className="form-check-text m-2 text-white font-semibold">Show Data</label>
            </div> */}
            <div className='mt-8 w-[60%] flex justify-center items-center text-center'>
                <h1 className='text-xl font-semibold'><span className='text-blue-700 font-bold italic'>{data.length}</span> data instances!</h1>
            </div>
            
            <table className='mx-2 mt-4 table-fixed border-collapse border-gray-300'>
                <thead>
                    <tr className='m-1 border border-gray-300'>
                        <th className='p-1 border border-gray-300'>Timestamp</th>
                        <th className='p-1 border border-gray-300'>Log Level</th>
                        <th className='p-1 border border-gray-300'>IP Address</th>
                        <th className='p-1 border border-gray-300'>HTTP Method</th>
                        <th className='p-1 border border-gray-300'>HTTP Status Code</th>
                        {/* <th className='border border-gray-300 w-8'>Request Path</th> */}
                        <th className='p-1 border border-gray-300'>Response Time</th>
                        <th className='p-1 border border-gray-300'>Error Message</th>
                        <th className='p-1 border border-gray-300'>User Agent</th>
                        <th className='p-1 border border-gray-300'>Source IP</th>
                        <th className='p-1 border border-gray-300'>Destination IP</th>
                        <th className='p-1 border border-gray-300'>Bytes Sent</th>
                        <th className='p-1 border border-gray-300'>Bytes Received</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((item) => {

                            const { timestamp,
                                log_level,
                                ip_address,
                                http_method,
                                http_status_code,

                                response_time,
                                error_message,
                                user_agent,
                                source_ip,
                                destination_ip,
                                bytes_sent,
                                bytes_received
                            } = item;

                            return (
                                <tr key={item?.timestamp}>
                                    <td className='p-1 border border-gray-300'>{timestamp}</td>
                                    <td className='p-1 border border-gray-300'>{log_level}</td>
                                    <td className='p-1 border border-gray-300'>{ip_address}</td>
                                    <td className='p-1 border border-gray-300'>{http_method}</td>
                                    <td className='p-1 border border-gray-300'>{http_status_code}</td>
                                    {/* <td className='p-1 border border-gray-300'>{request_path}</td> */}
                                    <td className='p-1 border border-gray-300'>{response_time}</td>
                                    <td className='p-1 border border-gray-300'>{error_message}</td>
                                    <td className='p-1 border border-gray-300'>{user_agent}</td>
                                    <td className='p-1 border border-gray-300'>{source_ip}</td>
                                    <td className='p-1 border border-gray-300'>{destination_ip}</td>
                                    <td className='p-1 border border-gray-300'>{bytes_sent}</td>
                                    <td className='p-1 border border-gray-300'>{bytes_received}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default Table
