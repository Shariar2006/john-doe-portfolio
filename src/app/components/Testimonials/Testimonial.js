import Image from 'next/image';


const Testimonial = ({ item }) => {
    return (
        <div className="flex flex-col justify-between py-8 w-[400px] h-[600px] m-2 text-black">
            <div className="w-96 h-64 mx-auto">
                <Image className=" rounded-2xl" src={item?.image?.url} alt="image" width={500} height={200} />
            </div>
            <div>
                <p>1{item?.review}</p>
            </div>
            <div>
                <p className="text-2xl font-bold">{item?.name}</p>
                <p>{item?.position}</p>
            </div>

        </div>
    );
};

export default Testimonial;