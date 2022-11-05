import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg">
                    With the option to order their meals 
                    from a mobile app, they can easily place
                     an order when they are stuck in traffic or on the way to pick up the kids. 
                     Mobile apps provide the freedom to order from any place at any time without pausing 
                    everything and making a call to the 
                    restaurantThis app includes various foo
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}