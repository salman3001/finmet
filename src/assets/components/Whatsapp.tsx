import { useEffect, useState } from "react"
import { AiOutlineWhatsApp } from "react-icons/ai"
import { ImArrowUp } from "react-icons/im"


const Whatsapp = () => {
    const [isVisible, setIsVisible] = useState<boolean>()


    const scrolltop = () => {
        window.scrollTo({ top: 0 })
    }


    useEffect(() => {

        const handelscroll = () => {

            let heightToHideFrom = 1000;
            const winScroll = document.body.scrollTop ||
                document.documentElement.scrollTop;

            if (winScroll < heightToHideFrom) {
                isVisible &&      // to limit setting state only the first time
                    setIsVisible(false);
            } else {
                setIsVisible(true);
            }
        };

        window.addEventListener("scroll", handelscroll)

        return () => {
            window.removeEventListener("scroll", handelscroll)
        }
    }, [])

    return (
        <div className='fixed bottom-10 right-0      z-[120] text-black  flex justify-end'>
            <div className="flex items-center gap-2">
                <a href="https://api.whatsapp.com/send?phone=+917893918311&text=Helo%21%20Finmet%20" className="bg-green-500 rounded-full flex items-center gap-4 text-white text-2xl hover:text-rose-700 p-3  cursor-pointer " target="_blank">

                    <AiOutlineWhatsApp size={35} />
                    <p className="hidden md:inline">Chat on WhatsApp</p>
                </a>
                <div className={`relative w-16 h-16 bg-black text-rose-700  justify-center items-center cursor-pointer  ${isVisible ? "flex" : "hidden"}`}>
                    <ImArrowUp size={35} onClick={scrolltop} />
                </div>
            </div>
        </div>
    )
}

export default Whatsapp