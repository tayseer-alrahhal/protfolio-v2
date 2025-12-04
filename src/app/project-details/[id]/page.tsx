
"use client"
import HoverButton from '@/components/HoverButton';
import { projectsData } from '@/lib/projectsData';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';





export default function ProjectDetails() {
    const { id } = useParams();
    const router = useRouter();

    const project = projectsData.find((p) => p.id === id)

    return (
        <div className='flex flex-col items-start px-6 sm:px-10 md:px-[120px] lg:px-[170px] mt-24 sm:mt-32 lg:mt-44'>

            <div className='flex items-center justify-between w-full'>
                <button
                    onClick={() => router.back()}
                    className='flex items-center justify-center gap-2 text-[14px] cursor-pointer'>
                    <ArrowLeft size={15} />
                    Back to Projects
                </button>

                <span className='text-[14px] py-1 px-2 border border-(--bg-600) rounded-[4px]'>{project?.year}</span>
            </div>

            <div className='relative shadow-lg h-[540px] rounded-md flex items-center justify-center w-full mt-[64px]'>
                <Image
                    src={project?.src || ""}
                    alt={project?.title || 'Project Image'}
                    fill
                    className='object-cover rounded-md'
                />
            </div>

            <div className='mt-[32px] w-full'>
                <div className='flex items-center justify-between w-full'>
                    <h2 className='text-[48px] font-clash'>{project?.title}</h2>
                    <HoverButton href={project?.link || ""} name1="Check it out" name2="Visit Site" />
                </div>
                <p className='w-[50%] mt-[32px]'>
                    {project?.subtitle || ""}
                </p>

                <div className='mt-[32px]'>
                    <h2 className='text-[32px] font-clash'>Technologies used</h2>
                    <div className='mt-[32px] flex items-start gap-2'>
                        {project?.technologies?.map((tech, index) => (
                            <span key={index} className='text-[14px] py-1 px-2 border border-(--bg-600) rounded-[5px]'>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
