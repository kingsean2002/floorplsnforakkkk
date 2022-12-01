import React from 'react';

const Grid = ({ indexY, indexX }) => {
    return (
        <div className="flex flex-row flex-wrap items-center justify-center w-screen h-screen">
            {Array(indexY).fill(0).map((_, indexY) => {
                return (
                    <div key={indexY}>
                        {Array(indexX).fill(0).map((_, indexX) => {
                            return (
                                <div
                                    key={indexX}
                                    className='w-5 h-5 bg-black rounded m-0.5'
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
export default Grid;
const groupBoxes = (groupSize) => {
    return (
        <div className="flex flex-row flex-wrap items-center justify-center w-screen h-screen">
            {Array(indexY).fill(0).map((_, indexY) => {
                return (
                    <div key={indexY}>
                        {Array(indexX).fill(0).map((_, indexX) => {
                            return (
                                <div
                                    key={indexX}
                                    className={`w-5 h-5 bg-black ${indexX % groupSize === 0 && indexY % groupSize === 0 ? 'border-4 border-red' : ''} rounded m-0.5`}
                                />
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default groupBoxes;