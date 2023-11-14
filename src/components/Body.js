import Table from "./Table";
import { Data } from "../utils/mockData";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import { randomData } from "../utils/randomData";


const Body = () => {
    const [query, setQuery] = useState("");
    const [data, setData] = useState(randomData);
    const [keys, setKeys] = useState([]);
    const [showData, setShowData] = useState(false);
    // const [searchData, setSearchData] = useState([]);


    useEffect(() => {
        setKeys(
            data.map((item) => {
                if (item.isChecked) {
                    return item.name;
                }
            })
        );
    }, [data]);

    const search = (queryString) => {
        return queryString.filter((item) =>
            keys?.some((key) => item[key]?.toString()?.includes(query))
        );
    };

    const handleChange = (e) => {
        const { name, checked } = e.target;
        if (name === "allSelect") {
            let temp = data.map((item) => {
                return { ...item, isChecked: checked };
            });
            setData(temp);
        } else {
            let temp = data.map((item) =>
                item.name === name ? { ...item, isChecked: checked } : item
            );
            setData(temp);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <Header />

            <div className="m-4 p-1 border border-gray-300 rounded-lg w-[40%]">
                <input
                    type="text"
                    placeholder="Search"
                    className="search-box w-full  h-10 "
                    onChange={(e) => setQuery(e.target.value)}
                />
            </div>

            <div className="w-[60%] flex justify-center items-center text-center bg-blue-300 rounded-lg">
                <div className="container-heading p-2">
                    <span className="checkbox-text text-xl mt-4 text-white font-semibold">Pick Your Filter : </span>

                    <form className="">
                        <div className="flex flex-wrap justify-center items-center">
                            <div className="form-check flex flex-row m-2 ">
                                <input
                                    type="checkbox"
                                    className="form-check-input m-2"
                                    name="allSelect"
                                    checked={!data.some((item) => item?.isChecked !== true)}
                                    onChange={handleChange}
                                />
                                <label className="form-check-text m-2 text-white font-semibold">All Select</label>
                            </div>
                            {data.map((item, index) => (
                                <div className="form-check flex flex-row items-center" key={index}>
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        name={item.name}
                                        checked={item?.isChecked || false}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-text m-2 text-white font-semibold">{item.name}</label>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
            </div>
            {/* <div className="form-check flex flex-row m-2 ">
                <input
                    type="checkbox"
                    className="form-check-input m-2"
                    name="allSelect"
                    onClick={setShowData(!showData)}
                />
                <label className="form-check-text m-2 text-white font-semibold">Show Data</label>
            </div> */}

            {
                query?.length > 0 ? <Table data={search(Data)} /> : <Table data={Data} />
            }
            {/* <Table data={search(Data)} /> */}

        </div>
    );
};

export default Body;
