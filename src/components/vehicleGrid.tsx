import React, { useState } from 'react';
import vehiclesList from '../../assets/vehiclesList';
import { Pencil, Trash } from 'lucide-react';

interface ProjectCardProps {
    name: string;
    description: string;
    tags?: string[];
    img?: string;
}


function ModifyButtons({ }) {

    const iconSize = 32

    return (
        <div className='space-x-1'>
            <button className='hover:bg-green-600 p-3 rounded-xl'>
                <Pencil size={iconSize} />
            </button>
            <button className='hover:bg-green-600 p-3 rounded-xl'>
                <Trash size={iconSize} />
            </button>

        </div>
    )
}


function CarCard({ name, description, tags = [], img = 'https://via.placeholder.com/150' }: ProjectCardProps) {

    const c3 =
        <div className='h-full w-full relative flex'>

            <div className='absolute bg-gradient-to-t from-black/60 to-transparent h-full w-full z-0'>
            </div>
            <div className='absolute bg-black h-full w-full z-10 opacity-0
                            group-hover:opacity-30 transition duration-300'>
            </div>
            <div className='absolute h-full w-full z-20 flex flex-col p-6 space-y-2
                opacity-0 group-hover:opacity-100 transition duration-300'>
                <h1 className='text-3xl font-bold uppercase text-left'>
                    {name}
                </h1>
                <div className='w-full flex justify-start space-x-1 opacity-70'>
                    {tags.map((tag, index) => (
                        <div key={index} className='bg-white bg-opacity-80 rounded text-black font-medium px-2 py-1'>
                            {tag}
                        </div>
                    ))}
                </div>
                <div className='text-left'>
                    <p className='font-semibold'>
                        {description}
                    </p>
                </div>
                
                <div className='flex-grow flex flex-col justify-end'>
                    <ModifyButtons />
                </div>

            </div>


            <div className='absolute h-full w-full flex items-end justify-start p-8 z-30'>
                <h1 className='text-left font-bold text-3xl group-hover:opacity-0 opacity-100 transition select-none'>
                    {name}
                </h1>
            </div>

        </div>



    return (
        <div className='w-80 h-72 rounded-lg flex flex-col items-center justify-center
                        hover:scale-105 transition ease-in-out duration-300 group

                      hover:bg-white hover:bg-opacity-5 active:bg-opacity-10 overflow-hidden'>
            <div className='relative w-full h-full items-center flex'>
                <div className='absolute w-full h-full text-center justify-center flex z-20'>
                    {c3}
                </div>
                <div className='absolute w-full h-full z-0'>
                    <img src={img}
                        alt="Vehicle Image"
                        className='h-full w-full hover:scale-125 hover:blur-sm transition ease-in-out duration-300 z-0 object-cover'
                    />
                </div>
            </div>

        </div>
    )
}


export default function CarGrid() {
    return (
        <div className="flex justify-center">
            <div className="grid grid-cols-3 pt-32 p-20 gap-6 text-white">
                {
                    vehiclesList.map((project, index) => (
                        <CarCard
                            key={index}
                            name={project.name}
                            description={project.description}
                            tags={project.tags}
                            img={project.img}
                        />
                    ))
                }
            </div>
        </div>
    );
}

