
import { AiOutlinePlus } from "react-icons/ai";
import SingleStory from "@/components/SingleStory";
import userImage from "@/public/profile_placeholder.png"


const Story = () => {
    const singleStoryData = [
        {
            title: "Bill Gates",
            img: "/bill_gates.jpg",
            postImg: "bg-[url(/building.jpg)]",
        },
        {
            title: "Elon Musk",
            img: "/elon_musk.jpg",
            postImg: "bg-[url(/gaming_mouse.jpg)]",
        },
        {
            title: "Bill Gates",
            img: "/bill_gates.jpg",
            postImg: "bg-[url(/building.jpg)]",
        },
        {
            title: "Elon Musk",
            img: "/elon_musk.jpg",
            postImg: "bg-[url(/gaming_mouse.jpg)]",
        },
        {
            title: "Bill Gates",
            img: "/bill_gates.jpg",
            postImg: "bg-[url(/building.jpg)]",
        },
        {
            title: "Elon Musk",
            img: "/elon_musk.jpg",
            postImg: "bg-[url(/gaming_mouse.jpg)]",
        },
    ];

    return (
        <div className="w-8/12"> 
            <div className="flex gap-[10px] mt-5 pb-5 overflow-x-scroll no-scrollbar">
                <div className="w-[112px] shadow-md rounded-[15px] pb-2 shrink-0">
                    <img
                        className="w-[112px] h-[151px] rounded-t-[15px] object-cover"
                        src={userImage.src}
                        alt="user"
                    />
                    <div>
                        <div className="bg-primary w-[35px] h-[35px] rounded-full grid place-items-center text-[24px] text-white mx-auto -mt-[20px] relative outline outline-[6px] outline-white">
                            <AiOutlinePlus />
                        </div>
                        <p className="text-center mt-2 font-medium">Create Story</p>
                    </div>
                </div>
                {singleStoryData.map(({ title, img, postImg }, index) => {
                    return (
                        <SingleStory
                            key={index}
                            title={title}
                            img={img}
                            postImg={postImg}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Story
