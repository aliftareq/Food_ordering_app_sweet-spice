import Image from 'next/image';
import pizza from "../../Assets/pizza.png"

const MenuItem = () => {
    return (
        <div className='bg-gray-300 p-4 rounded-lg text-center group hover:bg-white hover:shadow-2xl transition-all'>
            <div className='text-center'>
                <Image className='max-h-auto max-h-48 mx-auto block' src={pizza} alt='pizza' />
            </div>
            <h4 className='font-semibold text-xl my-3'>Pepperoni Pizza</h4>
            <p className='text-gray-500 text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur</p>
            <button className='bg-primary text-white rounded-full px-8 py-2 mt-2'>Add To Cart $12</button>
        </div>
    );
};

export default MenuItem;